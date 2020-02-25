import React from 'react';
import './App.css';
import Nav from './shared/Nav'
import Footer from './shared/Footer'
import { Routes } from './routes'

class App extends React.Component {
  state = {
  }
  render() {
    return (
      <>
        <header>
          <Nav />
        </header>
        <main>
          <Routes />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}
export default App;
