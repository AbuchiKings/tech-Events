import React from 'react';
import Offers from '../components/Offers';
import Footer from './../components/Footer';
import FeaturedEvents from './../components/FeaturedEvents';
import * as eventActions from '../redux/actions/eventActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';


const Home = ({ actions, featuredEvents }) => {

    useEffect(() => {
        if (featuredEvents.length === 0) {
            actions.getFeaturedEvents();
        }
    });

    useEffect(() => {
        document.title = 'techEvents | Home'
    }, []);
    return (
        <>
            <FeaturedEvents featuredEvents={featuredEvents}/>
            <Offers />
            <Footer />
        </>
    );
}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
    featuredEvents: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        featuredEvents: state.featuredEvents
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(eventActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)