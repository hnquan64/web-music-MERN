import React from 'react';
import{
    DropdownButton,
    Dropdown
} from 'react-bootstrap'
import './ButtonLogin.css'
import logo from '../Img/iconuser.png'

import { useContext } from "react"
import { useHistory } from "react-router-dom"
import UserContext from '../Function/UserContext'


export default function ButtonLogin() {
    const { userData, setUserData } = useContext(UserContext);
  
    const history = useHistory();

    const profile = () => {
        history.push("/profile")
    }
    const library = () => {
        history.push("/library")
    }
 
    const logout = () => {
        history.push("/");
      setUserData({
        token: undefined,
        user: undefined,
      });
      localStorage.setItem("auth-token", "");
    }
        return(
            <div className='button-login'>
            {userData.user ? (
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <img className='logo' src={logo}></img>
                     </Dropdown.Toggle>

                    <Dropdown.Menu className='button-login-acton'>
                        <Dropdown.Item onClick={profile}>Profile</Dropdown.Item><br/>
                        <Dropdown.Item onClick={library}>Library</Dropdown.Item><br/>
                        <Dropdown.Item onClick={logout}>Log out</Dropdown.Item><br/>
                    </Dropdown.Menu>
                </Dropdown>
                ) : (
                    
                <>
                </>
                )}
            </div>
        )
    }



// export default class Login extends React.Component{
//     render(){
//         return(
//             <div className='button-login'>
//                 <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                         <img className='logo' src={logo}></img>
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu className='button-login-acton'>
//                         <Dropdown.Item>Profile</Dropdown.Item><br/>
//                         <Dropdown.Item>Library</Dropdown.Item><br/>
//                         <Dropdown.Item>Logout</Dropdown.Item><br/>
//                     </Dropdown.Menu>
//                 </Dropdown>
//             </div>
//         )
//     }
// }
