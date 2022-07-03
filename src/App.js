import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to intranet dashboard
        </p>
        <Link to="/strass/">Strass</Link>
        <Link to="/user/">User</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
