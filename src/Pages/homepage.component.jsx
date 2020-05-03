import React, { useState } from 'react';

// component
import Search from '../components/search/search.component';

// image
import mainImg from './../assets/img/posten-lady.png';

const HomePage = () => {
    const fetchData = async (input) => {
        const res = await fetch(`https://sporing.posten.no/sporing.json?q=${input}`);
        const data = res.json();
        return data;
    }

    const [data, setData] = useState(fetchData, '')

    const searchValue = (input) => {
        const newValue = [...data, { input }];
        setData(newValue)
    }

    return (
        <main className="grid-container">
            <section className="main-left">
                <Search
                    searchValue={searchValue}
                />
            </section>
            <section className="main-right">
                <img src={mainImg} alt="" />
            </section>
        </main>
    )
}

export default HomePage;
