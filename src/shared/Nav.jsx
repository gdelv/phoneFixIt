import React from 'react'
import { NavLink } from "react-router-dom";
import './styles/Nav.css'
import { Title } from '../components/Title'
import { Description } from "../components/Description";

const logoPic = require('../images/robot1.jpg')

class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            opacity: .8,
            buttonClassName: 'circle icon'
        }
    }
    changeClassName = () => {
        if (this.state.buttonClassName === 'circle icon') {
            this.setState({ buttonClassName: 'circle icon close' })
        } else if (this.state.buttonClassName === 'circle icon close') {
            this.setState({ buttonClassName: 'circle icon' })
        }
    }
    changeOpacity = () => {
        if (this.state.opacity === .8) {
            this.setState({ opacity: 1 })
        } else if (this.state.opacity === 1) {
            this.setState({ opacity: .8 })
        }
    }

    handleModal() {
        this.changeOpacity()
        this.changeClassName()
        this.setState({
            modal: !this.state.modal,
        })
    }

    renderNavModal = () => {
        if (this.state.modal) {
            return (
                <div className='modal'>
                    <NavLink exact to='/' onClick={() => this.handleModal()}>
                        Home
                    </NavLink>
                    <NavLink exact to='/#store-locator' onClick={() => this.handleModal()}>
                        Services
                    </NavLink>
                    <NavLink exact to='/careers' onClick={() => this.handleModal()}>
                        Mail In Repairs
                    </NavLink>
                    <NavLink exact to='/corporate-sales' onClick={() => this.handleModal()}>
                        We Come To You
                    </NavLink>
                    <NavLink exact to='/#contact-us' onClick={() => this.handleModal()}>
                        Locations
                    </NavLink>
                </div>
            )
        }
    }

    renderMainLinks() {
        return (
            <nav style={{ opacity: this.state.opacity }}>
                <div className="top-container">
                        <NavLink exact to='/'>
                        <img src={logoPic} className='logo' alt='logo' />
                    </NavLink>
                    
                    
                    <Title />
                    <div id='wrapper' onClick={() => this.handleModal()}>
                        <div className={this.state.buttonClassName}>
                            <span className='line top'></span>
                            <span className='line middle'></span>
                            <span className='line bottom'></span>
                        </div>
                    </div>
                </div>

                <Description />
            </nav>
        )
    }

    render() {
        return (
            <>
                {this.renderMainLinks()}
                {this.renderNavModal()}
            </>
        )
    }
}

export default Nav