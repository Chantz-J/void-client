import React from 'react';
import CSSReset from '../styles/css-reset';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Main({ children }){
    return(
        <>
        <CSSReset />
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        </>
    );
};