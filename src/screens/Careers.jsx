import React from 'react'
import Jobs from '../components/Jobs'


class Careers extends React.Component {
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        return(
        <div className='careers-container'>
            <h2>Careers</h2>
            <Jobs/>
        </div>
        )
        
    }
}

export default Careers