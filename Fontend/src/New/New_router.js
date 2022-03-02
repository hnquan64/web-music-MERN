import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import New_nav from './New_nav'
import NewVN from './NewVN'
import NewChina from './NewChina'
import NewKorea from './NewKorea'
import NewUSUK from './NewUSUK'
import Slide_new from './Slide_new'

  
  export default function Router_New() {
    return (
      <Router>
        <div>
          <New_nav></New_nav>
          <Switch>
            <Route exact path="/new">
              <VietNam />
            </Route>
            <Route path="/new/vietnam">
              <VietNam />
            </Route>
            <Route path="/new/china">
              <China />
            </Route>
            <Route path="/new/usuk">
              <USUK />
            </Route>
            <Route path="/new/korea">
              <Korea />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function VietNam() {
    return (
      <div className=''>
        {/* <Slide_new></Slide_new> */}
        <NewVN></NewVN>
      </div>
    );
  }
  
  function China() {
    return (
      <div className=''>
        {/* <Slide_new></Slide_new> */}
        <NewChina></NewChina>
      </div>
    );
  }
  
  function USUK() {
    return (
      <div>
        {/* <Slide_new></Slide_new> */}
        <NewUSUK></NewUSUK>
      </div>
    );
  }
  function Korea() {
      return (
        <div>
          {/* <Slide_new></Slide_new> */}
          <NewKorea></NewKorea>
        </div>
      );
  }
