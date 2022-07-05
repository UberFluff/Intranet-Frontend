import React from 'react'

function Tab(props) {
    return (
        <div onClick={props.onClick} className={props.active ? 'tabContainer tabActive' : 'tabContainer tabUnactive'}>
            <span className="tabIcon">{props.icon}</span>
            <span className="tabText">{props.text}</span>
        </div>
    )
}

export default Tab