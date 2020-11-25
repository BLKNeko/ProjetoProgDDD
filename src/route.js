import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import AppPost from './AppPost';
import AppGet from './AppGet';
import App from './App';

function Routes(){
  return (
    <BrowserRouter>
      <Route path='/' exact component={App}/>
      <Route path='/get' exact component={AppGet}/>
      <Route path='/post' exact component={AppPost}/>
    </BrowserRouter>
  )
}
export default Routes;