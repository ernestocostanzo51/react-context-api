import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsProd() {
    const { id } = useParams(); 
    const [info, setInfo] = useState(null);

    useEffect(() => {
       
        const linkApi = `https://fakestoreapi.com/products/${id}`;
        
        fetch(linkApi)
            .then(res => res.json())
            .then(data => {
                setInfo(data);
            });
    }, [id]);

    
    return (
        <div className="container mt-4">
            <div className="row">
                {info ? (
                    <div className="col-12 col-md-6 mx-auto">
                        <h5>ID PRODOTTO: {info.id}</h5>
                        <div className="card text-center p-3">
                            <img className="card-img-top mx-auto" src={info.image} alt={info.title}  />
                            <div className="card-body">
                                <h4 className="card-title">{info.title}</h4>
                                <h5 className="card-text text-success">{info.price}$</h5>
                                <p className="card-text">{info.description}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h4>Caricamento dati...</h4>
                                    <p>attendere prego</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}