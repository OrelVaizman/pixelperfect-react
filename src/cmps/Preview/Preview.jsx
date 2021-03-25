
import React from 'react'

import './Preview.scss'

const Preview = ({ item, idx }) => {

    return (
        <section className="preview relative flex column space-between">
            <div className="item-counter">0{idx + 1}</div>
            <div className="preview-title">
                {item.title}
            </div>
            <span className="preview-desc">
                {item.desc}
            </span>
        </section>
    )


}

export default Preview
