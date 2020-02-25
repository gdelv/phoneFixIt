import React from 'react'




const Searchbar = (props) => {
    return (

        <input
            className='search-bar'
            type="text"
            name="address"
            value={props.address}
            onChange={props.onChange}


        />
    )
}


export default Searchbar