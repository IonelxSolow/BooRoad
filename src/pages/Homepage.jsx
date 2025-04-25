
import { Link } from "react-router-dom";
import { useGlobal } from "../contexts/GlobalContext";

export default function Homepage() {
    const { destinazioni } = useGlobal();

    // Ordina le destinazioni in base alla data di inizio (dataInizio)
    destinazioni.sort((b, a) => new Date(a.dataInizio) - new Date(b.dataInizio));
    const now = new Date()
    const currentDate = now.toISOString().split("T")[0]; // Formato YYYY-MM-DD

    // cambia il colore del badge in base alla data di inizio e fine
    const getBadgeClass = (dataInizio, dataFine) => {
        if (dataInizio > currentDate) {
            return "bg-success"; // In programma
        } else if (dataFine < currentDate) {
            return "bg-secondary"; // Passato
        } else {
            return "bg-danger"; // In corso
        }
    };
    const getBadgeStatus = (dataInizio, dataFine) => {
        if (dataInizio > currentDate) {
            return "In programma"; // In programma
        } else if (dataFine < currentDate) {
            return "Passato"; // Passato
        } else {
            return "In corso"; // In corso
        }
    };

    return (
        <>
            <div className="container">
                <h1 className=" text-center ">Itinerari</h1>
                <hr />
            </div>

            <div className="container py-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 p ">
                    {destinazioni.sort().map(destinazione => (
                        <div key={`destinazione${destinazione.id}`} className="col">
                            <div className="card h-100 border-0 shadow-sm hover-shadow">
                                <img
                                    src={`/images${destinazione.immagineCopertina}`}
                                    className="card-img-top img-fluid"
                                    alt={destinazione.destinazione}
                                    style={{ objectFit: "cover", height: "200px" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5 className="card-title">{destinazione.destinazione}</h5>
                                        <span className={`badge rounded-pill ${getBadgeClass(destinazione.dataInizio, destinazione.dataFine)}`} ><i className="bi bi-airplane"> {getBadgeStatus(destinazione.dataInizio, destinazione.dataFine)}</i>
                                        </span>

                                    </div>
                                    <p className="card-text text-muted">
                                        Dal {destinazione.dataInizio} al {destinazione.dataFine}
                                    </p>
                                    <Link
                                        to={`/details/${destinazione.id}`}
                                        className=" btn_card"
                                        data-mdb-ripple-init
                                    >
                                        Mostra dettagli <i class="bi bi-arrow-right"></i>

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


