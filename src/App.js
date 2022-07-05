import './style/App.css';
import { Outlet, Link } from "react-router-dom";
import BottomCredits from './components/bottomCredits.component';

function App() {
  return (
    <div className="center">
      <Outlet />
      <BottomCredits />
    </div>
  );
}

export default App;
