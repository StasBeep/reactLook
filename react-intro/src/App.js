import logo from './logo.svg';
import './App.css';
const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>;
const GreetingsPro = ({ firstName, lastName }) => <div>Hey you! {firstName} {lastName}!</div>;

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
      <main>
        <Greetings firstName="Stas" lastName="Oskol" />
        <GreetingsPro firstName="Stas" lastName="Oskol" />
      </main>
    </div>
  );
}

export default App;
