import React,{Component} from 'react';
import { ClockPage,StopWatchPage } from "./_pages";

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: window.location.pathname.substr(1)  || 'clock'
    }
  }

  navigate = (page) =>{
    this.setState({page});
    window.history.pushState(null,page,`/${page}`);
  }

  render() {
    switch(this.state.page) {
      case 'clock':
        return  <ClockPage onChangePage={this.navigate}/>
      case 'stopwatch':
        return  <StopWatchPage onChangePage={this.navigate}/> 
      default:
        return <h1>404</h1>
    }
  }
}

export default App;
