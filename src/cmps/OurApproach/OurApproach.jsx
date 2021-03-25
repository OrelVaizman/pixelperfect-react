
import React from 'react'

import './OurApproach.scss'
import List from '../../cmps/List/List';

const OurApproach = (props) => {
    const items = [{ title: 'Brand Strategy', desc: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.' },
    { title: 'Brand Design', desc: 'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.' },
    { title: 'Web Design', desc: 'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues. ' }]
    return (
        <section className="our-approach flex">
            <div className="our-approach-desc flex">
                <h1>Our approach for creating a winning brand</h1>
            </div>
            <List items={items} />
        </section>
    )


}

export default OurApproach
