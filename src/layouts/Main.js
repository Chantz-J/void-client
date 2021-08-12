import React from 'react';
import CSSReset from '../styles/css-reset';
import Header from '../components/Header';

export default function Main({ children }){
    return(
        <>
        <CSSReset />
        <Header />
        <main>
            {children}
        </main>
        </>
    );
};