import { useState } from "react";
import { useGlobal } from "../contexts/GlobalContext"
import CardUserDetails from "../components/CardUserDetails";
import Carousel from "react-bootstrap/Carousel";

export default function Details() {
    const [viewDetails, setViewDetails] = useState(false);
    const [selectedClientId, setSelectedClientId] = useState(null);
    const [index, setIndex] = useState(0);
    const { currentTrip, clienti } = useGlobal();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Filtra i clienti associati al viaggio corrente
    const viaggiatoriAssociati = clienti.filter(cliente => 
        cliente.viaggiAssociati.includes(currentTrip.id)
    );
    console.log(viaggiatoriAssociati)

    return (
        <>
            <h1 className="text-center">{currentTrip.destinazione}</h1>
            <div className="carousel_box container carousel-fade">
                <Carousel
                    className="rounded"
                    activeIndex={index}
                    onSelect={handleSelect}
                    interval={2000}
                >
                    <Carousel.Item className="rounded-3">
                        <img
                            src={`/images${currentTrip.immagini[0]}`}
                            className="d-block w-100 rounded caroulsel_img"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="rounded-3">
                        <img
                            src={`/images${currentTrip.immagini[1]}`}
                            className="d-block w-100 rounded caroulsel_img"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="rounded-3">
                        <img
                            src={`/images${currentTrip.immagini[2]}`}
                            className="d-block w-100 rounded caroulsel_img"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container mt-5">
                <h3 className="mb-4">Viaggiatori</h3>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Cognome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Azioni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viaggiatoriAssociati.map((cliente, index) => (
                                <tr key={cliente.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cognome}</td>
                                    <td>{cliente.mail}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => {
                                                setSelectedClientId(cliente.id);
                                                setViewDetails(true);
                                            }}
                                        >
                                            <i className="bi bi-eye me-1"></i>
                                            Dettagli
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {viewDetails && (
                <CardUserDetails
                    id={selectedClientId}
                    onClick={() => setViewDetails(false)}
                />
            )}
        </>
    );
}

