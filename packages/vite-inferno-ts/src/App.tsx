import { version, Component } from 'inferno'

import inferno from './assets/inferno.svg'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://infernojs.org/" target="_blank">
            <img src={inferno} class="logo inferno" alt="Inferno logo" />
          </a>
          <p>{`Welcome to Inferno ${version}`}</p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.!
          </p>
        </header>
      </div>
    )
  }
}

export default App
