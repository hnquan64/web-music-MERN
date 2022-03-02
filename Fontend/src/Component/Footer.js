import React from 'react';
import './Footer.css'
import logo from '../Img/logo_final.png'
import appstore from '../Img/appstore.png'
import ggplay from '../Img/ggstore.png'
import GioiThieu from '../Footer/GioiThieu'
import GopY from '../Footer/FormGopY'

import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className='footer-full'>
                        <div className='footer-logo'>
                            <img id='footer-logowhite' src={logo}></img>
                            <span className='title' >Product Of GoPro Team</span>
                        </div>
                        <div className='footer-information'>
                            <Popup modal trigger={<span>Introduce</span>}><GioiThieu/></Popup>
                            <span><Link to='/lienhe'>Contact</Link></span>
                            <Popup modal trigger={<span>Feedback</span>}><GopY/></Popup>
                            <span><Link to='/dieukhoan'>Rules</Link></span>
                            
                        </div>
                        <div className='footer-information'> 
                            <a href='https://www.apple.com/app-store/'><img className='footer-iconstore' src={appstore}></img></a>
                            <a href='https://play.google.com/store'><img className='footer-iconstore' src={ggplay}></img></a>
                        </div>
                </footer>
            </div>
        );
    }
}