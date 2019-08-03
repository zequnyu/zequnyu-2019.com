import React from 'react';
import Head from 'next/head';

import 'bulma/css/bulma.min.css'
import '../styles/Commento.css'

class Commento extends React.Component {
    render() {
        return (

            <div className="section">
                <Head>
                    <script src="https://cdn.commento.io/js/commento.js" />
                </Head>
                <div className="container">
                    <div id="commento" />
                </div>
            </div>
        );
    }
}

export default Commento;
