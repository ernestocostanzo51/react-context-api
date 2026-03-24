import { Link } from "react-router-dom"
export default function AppHeader(){
    return(
        <header>
            <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/prodotti">Prodotti</Link></li>
          <li><Link to="/chiSiamo">Chi Siamo</Link></li>
        </ul>
      </nav>
        </header>
    )
}