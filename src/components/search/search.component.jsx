import React, { useState } from 'react'

const Search = () => {

    const fetchData = async (input) => {
        const res = await fetch(`https://sporing.posten.no/sporing.json?q=${input}`);
        const data = res.json();
        return data;
    }

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        fetchData(value)
            .then(res => console.log(res.consignmentSet[0]))
            .catch(err => console.log(err))
    }

    return (
        <ul className="tracking">
            <li>
                <h1>TRACKING PACKAGES</h1>
            </li>
            <li>
                <p>TESTPACKAGE-AT-PICKUPPOINT</p>
            </li>
            <li>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Tracking number input"
                        size="40"
                        onChange={e => setValue(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="TRACK"
                    />
                </form>
            </li>
        </ul>
    )
}
export default Search;