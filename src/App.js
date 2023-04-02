import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="field">
    <label className="label">Username</label>
    <div className="control has-icons-left has-icons-right">
      <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
      <span className="icon is-small is-left">
        <i className="fas fa-user"></i>
      </span>
      <span className="icon is-small is-right">
        <i className="fas fa-check"></i>
      </span>
    </div>
    <p className="help is-success">This username is available</p>
  </div>
  );
}

export default App;
