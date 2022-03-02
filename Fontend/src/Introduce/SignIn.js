import React, { useState, useContext } from "react"
import './Auth.css'
import video_intro from '../Img/intro.mp4'
import { useHistory } from "react-router-dom"
import UserContext from '../Function/UserContext'
import ErrorNotice from '../Function/ErrorNotice'
import Axios from 'axios' 


export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
  
    const { setUserData } = useContext(UserContext);
    const history = useHistory();
  
    const submit = async (e) => {
      e.preventDefault();
      try {
        const loginUser = { email, password };
        const loginRes = await Axios.post(
          "http://localhost:5000/users/login",
          loginUser
        );
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/home");
      } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
      }
    };
          return(
              <div className=''>
                  {error && (
                      <ErrorNotice message={error} clearError={() => setError(undefined)} />
                  )}
                  <div className='form-signin-full'>
                      <form className='form-signin' onSubmit={submit}>
                          <div className='icon-intro-video'>
                              <video muted loop autoPlay className='intro-video'>
                                  <source src={video_intro} type="video/mp4"></source>
                              </video>
                          </div>
                          <span>Sign In</span>
                          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00ODUuNzQzLDg1LjMzM0gyNi4yNTdDMTEuODE1LDg1LjMzMywwLDk3LjE0OCwwLDExMS41ODlWNDAwLjQxYzAsMTQuNDQsMTEuODE1LDI2LjI1NywyNi4yNTcsMjYuMjU3aDQ1OS40ODcNCgkJCWMxNC40NCwwLDI2LjI1Ny0xMS44MTUsMjYuMjU3LTI2LjI1N1YxMTEuNTg5QzUxMiw5Ny4xNDgsNTAwLjE4NSw4NS4zMzMsNDg1Ljc0Myw4NS4zMzN6IE00NzUuODksMTA1LjAyNEwyNzEuMTA0LDI1OC42MjYNCgkJCWMtMy42ODIsMi44MDItOS4zMzQsNC41NTUtMTUuMTA1LDQuNTI5Yy01Ljc3LDAuMDI2LTExLjQyMS0xLjcyNy0xNS4xMDQtNC41MjlMMzYuMTA5LDEwNS4wMjRINDc1Ljg5eiBNMzY2LjUsMjY4Ljc2MQ0KCQkJbDExMS41OSwxMzcuODQ3YzAuMTEyLDAuMTM4LDAuMjQ5LDAuMjQzLDAuMzY4LDAuMzY4SDMzLjU0MmMwLjExOC0wLjEzMSwwLjI1Ni0wLjIzLDAuMzY4LTAuMzY4TDE0NS41LDI2OC43NjENCgkJCWMzLjQxOS00LjIyNywyLjc3MS0xMC40MjQtMS40NjQtMTMuODUxYy00LjIyNy0zLjQxOS0xMC40MjQtMi43NzEtMTMuODQ0LDEuNDU3bC0xMTAuNSwxMzYuNTAxVjExNy4zMzJsMjA5LjM5NCwxNTcuMDQ2DQoJCQljNy44NzEsNS44NjIsMTcuNDQ3LDguNDQyLDI2LjkxMiw4LjQ2OGM5LjQ1Mi0wLjAyLDE5LjAzNi0yLjYsMjYuOTEyLTguNDY4bDIwOS4zOTQtMTU3LjA0NnYyNzUuNTM0TDM4MS44MDcsMjU2LjM2Nw0KCQkJYy0zLjQyLTQuMjI3LTkuNjIzLTQuODc3LTEzLjg0NC0xLjQ1N0MzNjMuNzI5LDI1OC4zMjksMzYzLjA3OSwyNjQuNTM0LDM2Ni41LDI2OC43NjF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                          <input id='username' name='email' type='text' maxLength='32' placeholder='Email' 
                          onChange={(e) => setEmail(e.target.value)}></input><hr></hr>
  
                          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTYsMjg5LjY1MWMtMjEuMjY4LDAtMzguNTcxLDE3LjMwMy0zOC41NzEsMzguNTcyYzAsMTcuNzk2LDEyLjExNywzMi44MDcsMjguNTMxLDM3LjIzN3Y1NS40NzUNCgkJCWMwLDUuNTQ0LDQuNDk2LDEwLjAzOSwxMC4wMzksMTAuMDM5YzUuNTQ0LDAsMTAuMDM5LTQuNDk2LDEwLjAzOS0xMC4wMzl2LTU1LjQ3NWMxNi40MTQtNC40MywyOC41MzEtMTkuNDQyLDI4LjUzMS0zNy4yMzcNCgkJCUMyOTQuNTcxLDMwNi45NTQsMjc3LjI2OCwyODkuNjUxLDI1NiwyODkuNjUxeiBNMjU2LDM0Ni43MTRjLTEwLjE5NywwLTE4LjQ5Mi04LjI5NS0xOC40OTItMTguNDkyczguMjk1LTE4LjQ5MywxOC40OTItMTguNDkzDQoJCQljMTAuMTk3LDAsMTguNDkyLDguMjk2LDE4LjQ5MiwxOC40OTNTMjY2LjE5NywzNDYuNzE0LDI1NiwzNDYuNzE0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzkxLjUzOSwxODEuNzdoLTIyLjUxOHYtNjguNzQ5QzM2OS4wMjEsNTAuNzAxLDMxOC4zMiwwLDI1NiwwUzE0Mi45NzksNTAuNzAxLDE0Mi45NzksMTEzLjAyMXY2OC43NDhoLTIyLjUxOA0KCQkJYy0zMi45NzYsMC01OS44MDQsMjYuODI0LTU5LjgwNCw1OS43OTV2MjEwLjYzM2MwLDMyLjk3NywyNi44MjksNTkuODA0LDU5LjgwNCw1OS44MDRoMjcxLjA3OQ0KCQkJYzMyLjk3NiwwLDU5LjgwNC0yNi44MjgsNTkuODA0LTU5LjgwNFYyNDEuNTY0QzQ1MS4zNDMsMjA4LjU5Myw0MjQuNTE0LDE4MS43NywzOTEuNTM5LDE4MS43N3ogTTE2My4wNTcsMTEzLjAyMQ0KCQkJYzAtNTEuMjQ5LDQxLjY5NC05Mi45NDMsOTIuOTQzLTkyLjk0M3M5Mi45NDMsNDEuNjk0LDkyLjk0Myw5Mi45NDN2NjguNzQ4aC0yOC4zMTF2LTY4Ljc0OGMwLTM1LjY0NC0yOC45OTQtNjQuNjQzLTY0LjYzMi02NC42NDMNCgkJCWMtMzUuNjM4LDAtNjQuNjMyLDI4Ljk5OC02NC42MzIsNjQuNjQzdjY4Ljc0OGgtMjguMzExVjExMy4wMjF6IE0zMDAuNTU0LDExMy4wMjF2NjguNzQ4aC04OS4xMDh2LTY4Ljc0OA0KCQkJYzAtMjQuNTczLDE5Ljk4Ny00NC41NjQsNDQuNTU0LTQ0LjU2NEMyODAuNTY3LDY4LjQ1NywzMDAuNTU0LDg4LjQ0OCwzMDAuNTU0LDExMy4wMjF6IE00MzEuMjY1LDQ1Mi4xOTYNCgkJCWMwLDIxLjkwNS0xNy44MjEsMzkuNzI1LTM5LjcyNSwzOS43MjVIMTIwLjQ2MWMtMjEuOTA1LDAtMzkuNzI1LTE3LjgyMS0zOS43MjUtMzkuNzI1VjI0MS41NjQNCgkJCWMwLTIxLjg5OCwxNy44MjEtMzkuNzE2LDM5LjcyNS0zOS43MTZoMzIuNTU3aDQ4LjM4OWgxMDkuMTg3aDQ4LjM4OWgzMi41NTdjMjEuOTA1LDAsMzkuNzI1LDE3LjgxNywzOS43MjUsMzkuNzE2VjQ1Mi4xOTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MDcuNTcxLDI3OS4wMDJjLTUuNTQ0LDAtMTAuMDM5LDQuNDk2LTEwLjAzOSwxMC4wMzl2ODguNTA3YzAsNS41NDQsNC40OTYsMTAuMDM5LDEwLjAzOSwxMC4wMzkNCgkJCXMxMC4wMzktNC40OTYsMTAuMDM5LTEwLjAzOXYtODguNTA3QzQxNy42MSwyODMuNDk3LDQxMy4xMTUsMjc5LjAwMiw0MDcuNTcxLDI3OS4wMDJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MDcuMzMzLDI0NS44NzdjLTEyLjkxOSwwLTEyLjk0MSwyMC4wNzgsMCwyMC4wNzhDNDIwLjI1MywyNjUuOTU2LDQyMC4yNzUsMjQ1Ljg3Nyw0MDcuMzMzLDI0NS44Nzd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="/>
                          <input id='password' name='password' type='password' minLength='6' required placeholder='Password' 
                          onChange={(e) => setPassword(e.target.value)}></input><hr></hr>
  
  
                          <input type="checkbox" value="lsRememberMe" id="rememberMe"></input><label className='color-rememberme' for="rememberMe">Remember me</label><br/>
  
                          <button >Let get it!</button>
                          <a href=''>Forgot password?</a>
                      </form>
                  </div>
              </div>
          )
  }



// export default class SignIn extends React.Component{
//     render(){
//         return(
//             <div className=''>
//                 <div className='form-signin-full'>
//                     <form className='form-signin'>
//                         <div className='icon-intro-video'>
//                             <video muted loop autoPlay className='intro-video'>
//                                 <source src={video_intro} type="video/mp4"></source>
//                             </video>
//                         </div>
//                         <span>Sign In</span>
//                         <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDgyLjkgNDgyLjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4Mi45IDQ4Mi45OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTIzOS43LDI2MC4yYzAuNSwwLDEsMCwxLjYsMGMwLjIsMCwwLjQsMCwwLjYsMGMwLjMsMCwwLjcsMCwxLDBjMjkuMy0wLjUsNTMtMTAuOCw3MC41LTMwLjUNCgkJCWMzOC41LTQzLjQsMzIuMS0xMTcuOCwzMS40LTEyNC45Yy0yLjUtNTMuMy0yNy43LTc4LjgtNDguNS05MC43QzI4MC44LDUuMiwyNjIuNywwLjQsMjQyLjUsMGgtMC43Yy0wLjEsMC0wLjMsMC0wLjQsMGgtMC42DQoJCQljLTExLjEsMC0zMi45LDEuOC01My44LDEzLjdjLTIxLDExLjktNDYuNiwzNy40LTQ5LjEsOTEuMWMtMC43LDcuMS03LjEsODEuNSwzMS40LDEyNC45QzE4Ni43LDI0OS40LDIxMC40LDI1OS43LDIzOS43LDI2MC4yeg0KCQkJIE0xNjQuNiwxMDcuM2MwLTAuMywwLjEtMC42LDAuMS0wLjhjMy4zLTcxLjcsNTQuMi03OS40LDc2LTc5LjRoMC40YzAuMiwwLDAuNSwwLDAuOCwwYzI3LDAuNiw3Mi45LDExLjYsNzYsNzkuNA0KCQkJYzAsMC4zLDAsMC42LDAuMSwwLjhjMC4xLDAuNyw3LjEsNjguNy0yNC43LDEwNC41Yy0xMi42LDE0LjItMjkuNCwyMS4yLTUxLjUsMjEuNGMtMC4yLDAtMC4zLDAtMC41LDBsMCwwYy0wLjIsMC0wLjMsMC0wLjUsMA0KCQkJYy0yMi0wLjItMzguOS03LjItNTEuNC0yMS40QzE1Ny43LDE3Ni4yLDE2NC41LDEwNy45LDE2NC42LDEwNy4zeiIvPg0KCQk8cGF0aCBkPSJNNDQ2LjgsMzgzLjZjMC0wLjEsMC0wLjIsMC0wLjNjMC0wLjgtMC4xLTEuNi0wLjEtMi41Yy0wLjYtMTkuOC0xLjktNjYuMS00NS4zLTgwLjljLTAuMy0wLjEtMC43LTAuMi0xLTAuMw0KCQkJYy00NS4xLTExLjUtODIuNi0zNy41LTgzLTM3LjhjLTYuMS00LjMtMTQuNS0yLjgtMTguOCwzLjNjLTQuMyw2LjEtMi44LDE0LjUsMy4zLDE4LjhjMS43LDEuMiw0MS41LDI4LjksOTEuMyw0MS43DQoJCQljMjMuMyw4LjMsMjUuOSwzMy4yLDI2LjYsNTZjMCwwLjksMCwxLjcsMC4xLDIuNWMwLjEsOS0wLjUsMjIuOS0yLjEsMzAuOWMtMTYuMiw5LjItNzkuNyw0MS0xNzYuMyw0MQ0KCQkJYy05Ni4yLDAtMTYwLjEtMzEuOS0xNzYuNC00MS4xYy0xLjYtOC0yLjMtMjEuOS0yLjEtMzAuOWMwLTAuOCwwLjEtMS42LDAuMS0yLjVjMC43LTIyLjgsMy4zLTQ3LjcsMjYuNi01Ng0KCQkJYzQ5LjgtMTIuOCw4OS42LTQwLjYsOTEuMy00MS43YzYuMS00LjMsNy42LTEyLjcsMy4zLTE4LjhjLTQuMy02LjEtMTIuNy03LjYtMTguOC0zLjNjLTAuNCwwLjMtMzcuNywyNi4zLTgzLDM3LjgNCgkJCWMtMC40LDAuMS0wLjcsMC4yLTEsMC4zYy00My40LDE0LjktNDQuNyw2MS4yLTQ1LjMsODAuOWMwLDAuOSwwLDEuNy0wLjEsMi41YzAsMC4xLDAsMC4yLDAsMC4zYy0wLjEsNS4yLTAuMiwzMS45LDUuMSw0NS4zDQoJCQljMSwyLjYsMi44LDQuOCw1LjIsNi4zYzMsMiw3NC45LDQ3LjgsMTk1LjIsNDcuOHMxOTIuMi00NS45LDE5NS4yLTQ3LjhjMi4zLTEuNSw0LjItMy43LDUuMi02LjMNCgkJCUM0NDcsNDE1LjUsNDQ2LjksMzg4LjgsNDQ2LjgsMzgzLjZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
//                         <input id='username' name='username' type='text' maxLength='32' placeholder='Username'></input><hr></hr>

//                         <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTYsMjg5LjY1MWMtMjEuMjY4LDAtMzguNTcxLDE3LjMwMy0zOC41NzEsMzguNTcyYzAsMTcuNzk2LDEyLjExNywzMi44MDcsMjguNTMxLDM3LjIzN3Y1NS40NzUNCgkJCWMwLDUuNTQ0LDQuNDk2LDEwLjAzOSwxMC4wMzksMTAuMDM5YzUuNTQ0LDAsMTAuMDM5LTQuNDk2LDEwLjAzOS0xMC4wMzl2LTU1LjQ3NWMxNi40MTQtNC40MywyOC41MzEtMTkuNDQyLDI4LjUzMS0zNy4yMzcNCgkJCUMyOTQuNTcxLDMwNi45NTQsMjc3LjI2OCwyODkuNjUxLDI1NiwyODkuNjUxeiBNMjU2LDM0Ni43MTRjLTEwLjE5NywwLTE4LjQ5Mi04LjI5NS0xOC40OTItMTguNDkyczguMjk1LTE4LjQ5MywxOC40OTItMTguNDkzDQoJCQljMTAuMTk3LDAsMTguNDkyLDguMjk2LDE4LjQ5MiwxOC40OTNTMjY2LjE5NywzNDYuNzE0LDI1NiwzNDYuNzE0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzkxLjUzOSwxODEuNzdoLTIyLjUxOHYtNjguNzQ5QzM2OS4wMjEsNTAuNzAxLDMxOC4zMiwwLDI1NiwwUzE0Mi45NzksNTAuNzAxLDE0Mi45NzksMTEzLjAyMXY2OC43NDhoLTIyLjUxOA0KCQkJYy0zMi45NzYsMC01OS44MDQsMjYuODI0LTU5LjgwNCw1OS43OTV2MjEwLjYzM2MwLDMyLjk3NywyNi44MjksNTkuODA0LDU5LjgwNCw1OS44MDRoMjcxLjA3OQ0KCQkJYzMyLjk3NiwwLDU5LjgwNC0yNi44MjgsNTkuODA0LTU5LjgwNFYyNDEuNTY0QzQ1MS4zNDMsMjA4LjU5Myw0MjQuNTE0LDE4MS43NywzOTEuNTM5LDE4MS43N3ogTTE2My4wNTcsMTEzLjAyMQ0KCQkJYzAtNTEuMjQ5LDQxLjY5NC05Mi45NDMsOTIuOTQzLTkyLjk0M3M5Mi45NDMsNDEuNjk0LDkyLjk0Myw5Mi45NDN2NjguNzQ4aC0yOC4zMTF2LTY4Ljc0OGMwLTM1LjY0NC0yOC45OTQtNjQuNjQzLTY0LjYzMi02NC42NDMNCgkJCWMtMzUuNjM4LDAtNjQuNjMyLDI4Ljk5OC02NC42MzIsNjQuNjQzdjY4Ljc0OGgtMjguMzExVjExMy4wMjF6IE0zMDAuNTU0LDExMy4wMjF2NjguNzQ4aC04OS4xMDh2LTY4Ljc0OA0KCQkJYzAtMjQuNTczLDE5Ljk4Ny00NC41NjQsNDQuNTU0LTQ0LjU2NEMyODAuNTY3LDY4LjQ1NywzMDAuNTU0LDg4LjQ0OCwzMDAuNTU0LDExMy4wMjF6IE00MzEuMjY1LDQ1Mi4xOTYNCgkJCWMwLDIxLjkwNS0xNy44MjEsMzkuNzI1LTM5LjcyNSwzOS43MjVIMTIwLjQ2MWMtMjEuOTA1LDAtMzkuNzI1LTE3LjgyMS0zOS43MjUtMzkuNzI1VjI0MS41NjQNCgkJCWMwLTIxLjg5OCwxNy44MjEtMzkuNzE2LDM5LjcyNS0zOS43MTZoMzIuNTU3aDQ4LjM4OWgxMDkuMTg3aDQ4LjM4OWgzMi41NTdjMjEuOTA1LDAsMzkuNzI1LDE3LjgxNywzOS43MjUsMzkuNzE2VjQ1Mi4xOTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MDcuNTcxLDI3OS4wMDJjLTUuNTQ0LDAtMTAuMDM5LDQuNDk2LTEwLjAzOSwxMC4wMzl2ODguNTA3YzAsNS41NDQsNC40OTYsMTAuMDM5LDEwLjAzOSwxMC4wMzkNCgkJCXMxMC4wMzktNC40OTYsMTAuMDM5LTEwLjAzOXYtODguNTA3QzQxNy42MSwyODMuNDk3LDQxMy4xMTUsMjc5LjAwMiw0MDcuNTcxLDI3OS4wMDJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MDcuMzMzLDI0NS44NzdjLTEyLjkxOSwwLTEyLjk0MSwyMC4wNzgsMCwyMC4wNzhDNDIwLjI1MywyNjUuOTU2LDQyMC4yNzUsMjQ1Ljg3Nyw0MDcuMzMzLDI0NS44Nzd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="/>
//                         <input id='password' name='password' type='password' minLength='6' required placeholder='Password'></input><hr></hr>


//                         <input type="checkbox" value="lsRememberMe" id="rememberMe"></input><label className='color-rememberme' for="rememberMe">Remember me</label><br/>

//                         <button type='submit' >Let get it!</button>
//                         <a href=''>Forgot password?</a>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }