import React from 'react'
import Searchbar from '../shared/Searchbar'

class FindStore extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            address: '',
            data: []
        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }



    render() {
        return (

            <div className='find-store-container'>
                <h1>
                    FIND A STORE
                </h1>
                <div className='search-form'>
                    <p>
                        Address/Zip
                    </p>
                    <Searchbar
                        address={this.state.address}
                        onChange={this.handleChange}
                    />
                    <p>
                        Within
                    </p>
                    <select>
                        <option value='10'>10 miles</option>
                        <option value='25'>25 miles</option>
                        <option value='50'>50 miles</option>
                        <option value='100'>100 miles</option>
                        <option value='200' selected='selected'>200 miles</option>
                        <option value='500'>500 miles</option>
                    </select>
                    <input type='submit' className='find-button' value='Find Locations'/>


                </div>

            </div>
        )

    }
}

export default FindStore