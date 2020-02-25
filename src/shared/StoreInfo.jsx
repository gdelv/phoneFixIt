import React from 'react' 




const StoreInfo = (props) => {
    return (
        <>
            <h5>{props.name}</h5>
            <p>{props.address}</p>
            <p>{props.number}</p>
            <a href='/'>Directions</a>
        </>
    )
}

export default StoreInfo