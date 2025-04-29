import { useState } from "react";
import { useGlobal } from "../contexts/GlobalContext"
import CardUserDetails from "../components/CardUserDetails";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Details() {
  const [viweDetails, setviweDetails] = useState(false);
  const [index, setIndex] = useState(0)
  const { id } = useParams() // recupero il parametro ID dal'url della pagina
  const { destinazioni, clienti } = useGlobal()
  const [clientSelected, setClientSelected] = useState(null) // stato per il cliente selezionato
  const [searchTerm, setSearchTerm] = useState("") // stato per il termine di ricerca
  const [showModal, setShowModal] = useState(false); // stato per il modal
  const [newTraveler, setNewTraveler] = useState({

    nome: "",
    cognome: "",
    mail: "",
    telefono: "",
    codiceFiscale: "",
    immaginePersona: "",
  }); // stato per il nuovo viaggiatore

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

  const handleAddTraveler = () => {
    if (
      newTraveler.nome &&
      newTraveler.cognome &&
      newTraveler.mail &&
      newTraveler.telefono &&
      newTraveler.codiceFiscale
    ) {
      const isMale = newTraveler.nome.toLowerCase().endsWith("o"); // deduzione semplice del genere
      const newClient = {
        id: clienti.length + 1, // genera un nuovo ID
        ...newTraveler,
        immaginePersona: isMale
          ? `https://randomuser.me/api/portraits/men/${clienti.length + 1}.jpg`
          : `https://randomuser.me/api/portraits/women/${clienti.length + 1}.jpg`,
        viaggiAssociati: [Number(id)], // associa il nuovo viaggiatore al viaggio corrente
      };
      clienti.push(newClient); // aggiungi il nuovo viaggiatore alla lista dei clienti
      setShowModal(false); // chiudi il modal
      setNewTraveler({
        nome: "",
        cognome: "",
        mail: "",
        telefono: "",
        codiceFiscale: "",
        immaginePersona: "",
      }); // resetta il form
    }
  };

  return (
    <>
      <h1 className="text-center titolo pt-5">{currentDestination.destinazione}</h1>

      <div className="carousel_box container">
        <Carousel
          className="rounded carousel-fade" // Add fade effect
          activeIndex={index}
          onSelect={handleSelect}
          interval={5000} // Set the interval to 5 seconds

        >
          {/* Map the currentDestination.immagini array to create a carousel of images */}
          {currentDestination.immagini.map((immagine, i) => (
            <Carousel.Item key={i} className="rounded-3">
              <img
                src={`/images${immagine}`}
                className="d-block w-100 rounded"
                alt={`Slide ${i + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {viweDetails && (
        <CardUserDetails
          id={clientSelected}
          onClick={() => setviweDetails(!viweDetails)}
        />
      )}

      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="mb-4">Viaggiatori ({viaggiatoriFiltrati.length})</h3>
          <div className="d-flex">
            <input
              className="form-control me-2 w-25"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Aggiungi Viaggiatore
            </Button>
          </div>
        </div>

        <div className="table-responsive ">
          <table className="table table-striped table-hover">
            <thead className="table-light">
              <tr className="align-middle">
                <th scope="col ">#</th>
                <th scope="col">Nome e Cognome</th>

                <th scope="col " className="d-none d-md-table-cell">
                  Email
                </th>
                <th scope="col">Azioni</th>
              </tr>
            </thead>
            <tbody>
              {viaggiatoriFiltrati.length > 0 ? (
                viaggiatoriFiltrati.map((cliente, index) => (
                  <tr key={cliente.id} className="align-middle">
                    <th scope="" >{index + 1}</th>
                    <td>{cliente.nome + " " + cliente.cognome}</td>

                    <td className="d-none d-md-table-cell ">{cliente.mail}</td>
                    <td className="align-middle">
                      <div
                        className="btn btn_card btn-sm "
                        onClick={() => handleDetails(cliente.id)}
                      >
                        Dettagli
                        <i className="bi bi-eye me-1"></i>
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
      </div>

      {/* Modal per aggiungere un nuovo viaggiatore */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Nuovo Viaggiatore</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                value={newTraveler.nome}
                onChange={(e) => setNewTraveler({ ...newTraveler, nome: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cognome" className="form-label">
                Cognome
              </label>
              <input
                type="text"
                className="form-control"
                id="cognome"
                value={newTraveler.cognome}
                onChange={(e) => setNewTraveler({ ...newTraveler, cognome: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="mail"
                value={newTraveler.mail}
                onChange={(e) => setNewTraveler({ ...newTraveler, mail: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Telefono
              </label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                value={newTraveler.telefono}
                onChange={(e) => setNewTraveler({ ...newTraveler, telefono: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="codiceFiscale" className="form-label">
                Codice Fiscale
              </label>
              <input
                type="text"
                className="form-control"
                id="codiceFiscale"
                value={newTraveler.codiceFiscale}
                onChange={(e) => setNewTraveler({ ...newTraveler, codiceFiscale: e.target.value })}
              />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleAddTraveler}>
            Aggiungi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

