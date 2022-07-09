//import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div clasName="container">
      <div className="row header m-2">
        <h1>Sylvain Côté</h1>
      </div>
      <div className="main">
        <div className="row">
          <div className="ms-4 col-3 menu">
            <ul>
              <li><a href="/" alt="Accueil">Accueil</a></li>
              <li><a href="/" alt="Travaux">Travaux</a></li>
              <li><a href="/" alt="Soumission">Soumission</a></li>
              <li><a href="/" alt="Commentaires">Commentaires de mes clients</a></li>
              <li><a href="mailto: sylvain.cote@live.ca" alt="Contact">Contactez-moi</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row footer">
        <div className="col-12">
          <a href="https://github.com/QueenJammie/renovation" target="_blank" rel="noreferrer" alt="OpenSource">Coded</a> by <a href="mailto:jammie.lacc@outlook.com">Jammie Lachance-Côté</a>
        </div>
        
      </div>
    </div>
    </div>
  );
}
