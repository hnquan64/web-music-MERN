// import React from 'react';
// import Router from './Actions/Profile'
// // import Router from './Introduce/Introduce'

// // import Router from './Introduce/backhome'


// function App() {
//   return (
//     <div className="App">
//       <Router/>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react"
import Axios from "axios"
import A from './Actions/Router_Nav'
import UserContext from './Function/UserContext'


export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <div>
        <UserContext.Provider value={{ userData, setUserData }}>
            <A/>
        </UserContext.Provider>
      </div>
    </>
  );
}

