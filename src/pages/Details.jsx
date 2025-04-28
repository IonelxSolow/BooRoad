import { useState } from "react";
import { useGlobal } from "../contexts/GlobalContext"
import CardUserDetails from "../components/CardUserDetails";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";

export default function Details() {
    const [viweDetails, setviweDetails] = useState(false);
    const [index, setIndex] = useState(0)
    const { id } = useParams() // recupero il parametro ID dal'url della pagina
    const { destinazioni, clienti } = useGlobal()
    const [clientSelected, setClientSelected] = useState(null) // stato per il cliente selezionato
    const [searchTerm, setSearchTerm] = useState("") // stato per il termine di ricerca

    const currentDestination = destinazioni.find((destination) => destination.id === Number(id)) // recupero la destinazione corrente

    const viaggiatoriAssociati = clienti.filter(cliente => cliente.viaggiAssociati.includes(Number(id))) // recupero i viaggiatori associati alla destinazione corrente
    /////
    const viaggiatoriFiltrati = viaggiatoriAssociati.filter(cliente => cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) || cliente.cognome.toLowerCase().includes(searchTerm.toLowerCase())) // filtro i viaggiatori in base al nome, cognome

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    const handleDetails = (clientID) => {

        setClientSelected(clientID) // set the selected client ID
        setviweDetails(!viweDetails) //change view details state
    }

    return (
        <>
            <h1 className="text-center">{currentDestination.destinazione}</h1>


            <div className="carousel_box container  ">
                <Carousel className="rounded" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className="rounded-3">
                        <img src={`/images${currentDestination.immagini[index]}`} className="d-block w-100 rounded " alt="First slide" />

                    </Carousel.Item>
                    <Carousel.Item className="rounded-3">
                        <img src={`/images${currentDestination.immagini[index]}`} className="d-block w-100 rounded" alt="Second slide" />

                    </Carousel.Item>
                    <Carousel.Item className="rounded-3">
                        <img src={`/images${currentDestination.immagini[index]}`} className="d-block w-100 rounded" alt="Third slide" />

                    </Carousel.Item>
                </Carousel>
            </div>

            {viweDetails && <CardUserDetails id={clientSelected} onClick={() => setviweDetails(!viweDetails)} />}

            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h3 className="mb-4">Viaggiatori ({viaggiatoriFiltrati.length})</h3>
                    <input className="form-control me-2 w-25" type="search" placeholder="Search" aria-label="Search" value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />

                </div>

                <div className="table-responsive ">
                    <table className="table table-striped table-hover">
                        <thead className="table-light">
                            <tr>
                                <th scope="col ">#</th>
                                <th scope="col">Nome e Cognome</th>

                                <th scope="col " className="d-none d-md-table-cell">Email</th>
                                <th scope="col">Azioni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viaggiatoriFiltrati.length > 0 ? (
                                viaggiatoriFiltrati.map((cliente, index) => (
                                    <tr key={cliente.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{(cliente.nome + " " + cliente.cognome)}</td>

                                        <td className="d-none d-md-table-cell">{cliente.mail}</td>
                                        <td>
                                            <div className="btn btn-primary btn-sm " onClick={() => handleDetails(cliente.id)}><i className="bi bi-eye me-1"></i>
                                                Dettagli
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        Nessun viaggiatore associato a questo viaggio
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
}

