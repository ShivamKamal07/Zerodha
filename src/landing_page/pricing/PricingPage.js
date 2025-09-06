import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Footer from '../Footer';

function PricingPage() {
    return ( 
        <>
           <Navbar/>
           <Brokerage/>
           <Hero/>
           <Footer/>
        </>
     );
}

export default PricingPage;