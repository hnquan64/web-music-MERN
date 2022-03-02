import React from 'react';
import logo from '../Img/logo.png';
import iconSearch from '../Img/searchIcon.png';
import './Navigation.css';
import {Link} from 'react-router-dom';
import Button_Login from './ButtonLogin';
export default class Nav extends React.Component{
    render(){
        return(
            <div className='kichthuoc-full-nav'>
                <div className='kichthuoc-nav'>
                    <ul>
                        <img id='logo-nav-gomusic' src={logo}></img>
                        {/* <Link to='/'><img id='logo-nav-gomusic' src={logo}></img></Link> */}
                        <Link to='/home'><li>Home</li></Link>
                        <Link to='/gochart'><li>Gochart</li></Link>
                        <Link to='/new'><li>New</li></Link>
                        <Link to='/library'><li>Library</li></Link>            
                        <div className='nav-vitri-search'>
                            <form>
                                <td><input className="nav-input" type='text' placeholder="Search"></input></td>
                                <td><button className="nav-button"><img id='icon-nav-search' src={iconSearch}></img></button></td>  
                            </form>
                        </div>
                        <Button_Login></Button_Login>
                    </ul>
                </div>
            </div>
        );
    }
}
