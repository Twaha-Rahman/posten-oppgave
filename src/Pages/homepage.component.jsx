import React, { useState } from 'react';

// component
import Search from '../components/search/search.component';

// image
import mainImg from './../assets/img/posten-lady.png';
import Result from './result.component';

const HomePage = () => {
    const fetchData = async (input) => {
        try {
            const res = await fetch(`https://sporing.posten.no/sporing.json?q=${input}`);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    const [data, setData] = useState([]);
    const [dataFetchSuccess, setDataFetchSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const searchValue = async (input) => {
        const sporingsData = await fetchData(input);


        if (sporingsData.consignmentSet[0].error) {
            setDataFetchSuccess(false)
            if (sporingsData.consignmentSet[0].error.code === 400) {
                setErrorMsg('feil 400')
            } else if (sporingsData.consignmentSet[0].error.code === 404) {
                setErrorMsg('feil 400004');
            }
        } else {
            setDataFetchSuccess(true);
            const getData = (sporingsData.consignmentSet.map(shipment => {
                return {
                    package: shipment.packageSet,
                }
            }))
            getData[0].package.map(el => setData(el))
        }
    }
    return (
        <main className="grid-container">
            <section className="main-left">

                <Search
                    errMsg={dataFetchSuccess ? 'TESTPACKAGE-AT-PICKUPPOINT' : errorMsg}
                    searchValue={searchValue}
                />
                {dataFetchSuccess ? <Result msg={data} /> : errorMsg}
            </section>
            <section className="main-right">
                <img src={mainImg} alt="" />
            </section>
        </main>
    )
}

export default HomePage;
