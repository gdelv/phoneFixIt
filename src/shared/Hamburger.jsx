import React from 'react'

export const Hamburger = (onClick, className) => {
    return (
        <div id='wrapper' onClick={onClick}>
            <div className={className}>
                <span className='line top'></span>
                <span className='line middle'></span>
                <span className='line bottom'></span>
            </div>
        </div>
    )
}