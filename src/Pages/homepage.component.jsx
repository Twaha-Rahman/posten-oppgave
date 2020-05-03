import React from 'react';

// component
import Tracking from '../components/search/search.component';

// image
import mainImg from './../assets/img/posten-lady.png';

const HomePage = () => {
    return (
        <main className="grid-container">
            <section className="main-left">
                <Tracking />
            </section>
            <section className="main-right">
                <img src={mainImg} alt="" />
            </section>
        </main>
    )
}

export default HomePage;
