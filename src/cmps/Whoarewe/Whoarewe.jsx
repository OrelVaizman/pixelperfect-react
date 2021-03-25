
import React from 'react'

import './Whoarewe.scss'
import imageStrategic from '../../assets/imgs/desktop/image-strategic.jpg'
import wave from '../../assets/imgs/desktop/bg-pattern-wave-red.svg'
const Whoarewe = (props) => {

    return (
        <section className="whoarewe flex">
            <img src={imageStrategic} />
            <img src={wave} className="wave" />
            <div className="whoarewe-description container flex column space-between">
                <h1><span>Design</span> is strategic</h1>
                <span className="desc">“A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.”</span>
                <span className="schedule-call">
                    Sechdule a Call
                </span>
            </div>
        </section>
    )


}

export default Whoarewe
