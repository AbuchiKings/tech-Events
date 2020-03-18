import React from 'react';
import Header from '../components/Header';
import Offers from '../components/Offers';
import Footer from './../components/Footer';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as eventActions from '../redux/actions/eventActions';
import PropTypes from 'prop-types';


const Home = ({dispatch, featuredEvents}) => {

    useEffect(() => {
        if (featuredEvents.length === 0) {
            dispatch(eventActions.getFeaturedEvents());
        }        
    });
    console.log(featuredEvents)
    return (
        <>
            <Header></Header>
            <Offers />
            <Footer />
        </>
    );
}

Home.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        featuredEvents: state.featuredEvents
    }
}

export default connect(mapStateToProps)(Home);
