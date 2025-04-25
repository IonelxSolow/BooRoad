

import { Link } from "react-router-dom";

export default function Homepage({ destinazioni }) {
    return (
        <>
            <div className="container">
                <h1 className=" text-center ">Itinerari</h1>
                <hr />
            </div>

            <div className="container py-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 p ">
                    {destinazioni.map(destinazione => (
                        <div key={`destinazione${destinazione.id}`} className="col">
                            <div className="card h-100 border-0 shadow-sm hover-shadow">
                                <img
                                    src={`/images${destinazione.immagineCopertina}`}
                                    className="card-img-top img-fluid"
                                    alt={destinazione.destinazione}
                                    style={{ objectFit: "cover", height: "200px" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{destinazione.destinazione}</h5>
                                    <p className="card-text text-muted">
                                        Dal {destinazione.dataInizio} al {destinazione.dataFine}
                                    </p>
                                    <Link
                                        to={`/details/${destinazione.id}`}
                                        className="btn btn-primary mt-auto"
                                        data-mdb-ripple-init
                                    >
                                        Mostra dettagli
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}



/* import { Link } from "react-router-dom"

export default function Homepage({ destinazioni }) {
    return (
        <>
            <div className="container">
                <h1 className="mt-3 text-center ">Itinerari</h1>
                <hr />
            </div>

            <div className="container py-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">

                    {destinazioni.map(destinazione => (
                        <div key={`destinazione${destinazione.id}`} className="col">
                            <div className="card h-100 ">
                                <img src={`/images${destinazione.immagineCopertina}`} className="card-img-top img-fluid h-100 " alt={destinazione.destinazione} />
                                <div className="card-body">
                                    <h5 className="card-title">{destinazione.destinazione}</h5>
                                    <p className="card-text">
                                        Dal {destinazione.dataInizio} al {destinazione.dataFine}
                                    </p>
                                    <Link to={`/details/${destinazione.id}`} className="btn btn-primary" data-mdb-ripple-init>
                                        Mostra dettagli
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </>

    )
}

 */


