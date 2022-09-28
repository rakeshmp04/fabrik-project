import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar/NavbarComponent';
import Community from './components/Community/CommunityComponent';
import Model from './components/Model.jsx/ModelComponent';

class App extends Component {
  render(){
    return (
      <div className="App">
          <Navbar />
        <Community />
        <Model />
        
      </div>
    );
  }
 
}

export default App;
