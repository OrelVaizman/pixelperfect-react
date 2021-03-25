
import React from 'react'

import './Menu.scss'

const Menu = (props) => {
    return (
        <section className="main-menu flex center-center">
            <ul className="main-nav flex clean-list center-center">
                <li>About</li>
                <li>Service</li>
                <li>Projects</li>
                <button className="call-btn">Schedule a Call</button>
            </ul>
        </section>
    )


}

export default Menu