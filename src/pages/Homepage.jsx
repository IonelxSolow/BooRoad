import { Link } from "react-router-dom"

export default function Homepage({ destinazioni }) {
    return (
        <>
            <div className="container">
                <h1 className="mt-3">Itinerari</h1>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">

                    {destinazioni.map(destinazione => (
                        <div key={`destinazione${destinazione.id}`} className="col">
                            <div className="card h-100">
                                <div className="card-header">
                                    <img className="destination-image card-img-top" src={`/images${destinazione.immagineCopertina}`} alt="" />
                                </div>
                                <div className="card-body">
                                    <p>{destinazione.dataInizio}</p>
                                    <p>{destinazione.dataFine}</p>
                                    <h3>{destinazione.destinazione}</h3>
                                </div>
                                <button className="btn btn-primary">
                                    Mostra dettagli
                                </button>
                            </div>
                        </div>
                    ))}




                </div>
            </div>

        </>

    )
}