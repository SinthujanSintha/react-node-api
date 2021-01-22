import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
class TestApiFetch extends React.Component{
  constructor(props) {
    super(props);
    this.state={apiResponse:''}
  }
  callAPI(){
    fetch("http://localhost:9000/testAPI")
        .then(res=>res.text())
        .then(res=>this.setState({apiResponse:res}))
        .catch(err=>err)
  }
  componentDidMount() {
    this.callAPI();
  }

  render(){
    return(<div>
      <p>
        {this.state.apiResponse}
      </p>
    </div>)
  }
}

export default App;
export{TestApiFetch};
