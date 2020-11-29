import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Rate from '../Rate/Rate';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';
import TicTac from '../TicTac/TicTac';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RateRub from '../RateRub/RateRub';


class App extends React.Component {
  render(){

  return (
        <div className="App">
<Header/>
<div className="container">
    <main>
        
    <Router>
        <Switch>
    
            <Route exact path='/' component={Rate}></Route>
            <Route exact path='/contacts' component={Contacts}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/tictac' component={TicTac}></Route>
            <Route exact path='/rub' component={RateRub}></Route>


        </Switch>
    </Router>


        
    </main>
</div>

<div className="container" id="cookie_info">
    <div className="site-content">
        <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В
            частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
    </div>
</div>



<Footer />
    </div>
   

);
}
}
export default App;
