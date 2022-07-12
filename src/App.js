//import logo from './logo.svg';
import './App.css';
import facebook from './images/facebook.svg';

export default function App() {
  return (   
    <div className="App">
      
    <div clasName="container-fluid">
      <div className="row header m-2">
        <h1>Sylvain Côté <a href="https://www.facebook.com/sylvain.cote.54" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook Icon" width="20px" class="icon" /></a></h1>
      </div>
      <div className="main">
        <div className="row">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse me-3 menu" id="navbarNav">
                <ul class="navbar-nav pt-0 pb-0">
                  <li class="nav-item">
                    <a class="nav-link me-5 ms-5" aria-current="page" href="/" title="Accueuil">Accueil</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-5" href="/works.js" title="Travaux">Travaux</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active me-5" href="/submission.js" title="Soumission">Soumission</a>
                  </li>
                  <li class="nav-item center">
                    <a class="nav-link me-5" href="/comments.js" title="Commentaires de mes clients">Commentaires de mes clients</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-5" href="/contact.js" title="Contactez-moi">Contactez-moi</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="main">
            <div class="col-4 services rounded">
              <h3>Liste des services offerts</h3>
              <ul class="p-0">
                <li>Revêtement</li>
                <li>Pose de plancher flottant</li>
                <li>Pose de plancher de bois franc</li>
                <li>Pose de céramique</li>
                <li>Assemblage de meubles</li>
                <li>Installation de portes intérieures et extérieures</li>
                <li>Installation d'accessoires</li>
                <li>Pose de moulures et cadrages</li>
              </ul>
            </div>
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
