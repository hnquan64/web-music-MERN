import React from 'react'
import Popup from 'reactjs-popup'
import logo from '../Img/logo.png'
import {Link} from 'react-router-dom'
import './IntroNav.css'
import SignIn from './SignIn'
import SignUp from './SignUp'


export default class IntroNav extends React.Component{
    render(){
        return(
            <div className='intro-nav-full'>
                <div className='intro-nav-80'>
                    <ul>
                        <Popup modal trigger={<li>Sign In</li>}><SignIn></SignIn></Popup>
                        <Popup modal trigger={<li>Sign Up</li>}><SignUp></SignUp></Popup>
                        <Popup modal trigger={<li>Download</li>}></Popup>
                        <Popup modal trigger={<li>Support</li>}></Popup>
                        <Link to='/'><img id='logo-nav-gomusic' src={logo}></img></Link>
                    </ul>
                </div>
            </div>
        );
    }
}
