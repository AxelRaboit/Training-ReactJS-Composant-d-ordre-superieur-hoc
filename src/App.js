import './App.css';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';

function App() {
  return (
    <div className="container text-center">
      <h1>Goku Vs Vegeta</h1>
      <hr />
      <div className="row">
        <Vegeta name='Vegeta' />
        <Goku name='Goku' />
      </div>
    </div>
  );
}

export default App;
