import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Prodotti(){
    const linkApi ="https://fakestoreapi.com/products"
    const [prodotti, setProdotti] = useState([])


    useEffect(() =>{
        fetch(linkApi)
        .then(res => res.json())
        .then(data =>{
            setProdotti(data)
        })

    }, [])

    return(
       <div className="container">
        <div className="row">
        {
            prodotti.map(prodotto => (
                <div className="col-3" key={prodotto.id}>
                    <div className="card">
                         <img className="card-img-top" src={prodotto.image} alt="img"></img>
                         <div className="card-body">
                         <h5 className="card-title">{prodotto.title}</h5>
                         <h4 className="card-text">{prodotto.price}$</h4>
                         <h5 className="card-text">{prodotto.category}</h5>
                         <p><Link to={`/prodotti/${prodotto.id}`}>Clicca per più info</Link></p>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
       </div>
       
    )
}