import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { onClick } from './actions/todos'

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`${props.isClick}`} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          rel="noopener noreferrer"
          onClick={() => props.onClick(123)}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isClick: state.todos.isClick,
  }
}


// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, { onClick })(App);
