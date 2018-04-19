import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
    constructor(){
      super();
      this.state = {
        show: false
      }
    }

    render() {
      const pContent = this.state.show ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> : null 
      return (

        <div className="wrapper">
          <label><input type="checkbox" onChange={this.toggleContent.bind(this)} /> Mostrar información importante</label>
          {pContent}
        </div>
      );
    }

    toggleContent(){
      this.setState({
        show: !this.state.show
      })
    }

  
}

export default App;
