import React from 'react';
import {Link} from 'react-router-dom';
import './New.css'

export default class New_nav extends React.Component{
    render(){
        return(
            <div className='new-nav-full'>
                <div className='new-nav-80'>
                    <ul>
                        <Link to='/new/vietnam'><li>V-POP</li></Link>
                        <Link to='/new/china'><li>C-POP</li></Link>
                        <Link to='/new/usuk'><li>US-UK</li></Link>
                        <Link to='/new/korea'><li>K-POP</li></Link>            
                    </ul>
                </div>
            </div>
        );
    }
}
