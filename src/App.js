import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Example from './Example';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <div className="row fixed-top pt-2 pb-2 bg-dark text-white shadow">
        <div className="col-md-12">
          <h4 className="text-center">
            A simple virtual keyboard built with react.
          </h4>
        </div>
      </div>
      <div className="container-fluid demo-app">
        <div className="row mt-5">
          <div className="col-md-12">
            <Example />
          </div>
        </div>
        </div>
    </React.Fragment>
    </div>
  );
}

export default App;
