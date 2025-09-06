import React from 'react';
import Navbar from '../Navbar';
import CreateTicket from './CreateTicket';
import Hero from './hero';

function SupportPage() {
    return ( 
        <>
           <Navbar/>
           <CreateTicket/>
           <Hero/>
           <Footer/>
        </>
     );
}

export default SupportPage;