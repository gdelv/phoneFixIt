import React from 'react'
import './styles/Image.css'
export const Image = ({ src, className, alt }) => {
    return (
        <img
            src={src}
            className={className}
            alt={alt}
        />
    )
}