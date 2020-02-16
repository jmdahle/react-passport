import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './components/sign-up';


class App extends React.Component {

  render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>React-Passport Test</h1>
                </header>
                <SignupForm />
            </div>
        );
    }
}

export default App;
