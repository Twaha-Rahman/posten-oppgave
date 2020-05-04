import React, { useState } from 'react'

const Search = ({ searchValue, msg }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        searchValue(value)
        setValue('');
    }

    return (
        <ul className="tracking">
            <li>
                <h1>TRACKING PACKAGES</h1>
            </li>
            <li>
                <p>{msg}</p>
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