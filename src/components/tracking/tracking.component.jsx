import React from 'react'

const Tracking = () => {
    return (
        <ul className="tracking">
            <li>
                <h1>TRACKING PACKAGES</h1>
            </li>
            <li>
                <p>TESTPACKAGE-AT-PICKUPPOINT</p>
            </li>
            <li>
                <form>
                    <input type="text" placeholder="Tracking number input" size="40" />
                    <input type="submit" value="TRACK" />
                </form>
            </li>
        </ul>
    )
}
export default Tracking;