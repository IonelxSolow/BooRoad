import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Details from './pages/Details';
import DefaultLayout from './layouts/DefaultLayout'


function App() {
  const clienti = [
    {
      id: 1,
      destinazioniAssociate: [1],
      nome: "Luca",
      cognome: "Rossi",
      mail: "luca.rossi@email.com",
      telefono: "3201234567",
      codiceFiscale: "RSSLCU95A01H501T",
    },
    {
      id: 2,
      destinazioniAssociate: [2],
      nome: "Giulia",
      cognome: "Bianchi",
      mail: "giulia.bianchi@email.com",
      telefono: "3399876543",
      codiceFiscale: "BNCGLI93T45L219K",
    },
    {
      id: 3,
      destinazioniAssociate: [3],
      nome: "Marco",
      cognome: "Verdi",
      mail: "marco.verdi@email.com",
      telefono: "3471112233",
      codiceFiscale: "VRDMRC90A10F205Z",
    },
    {
      id: 4,
      destinazioniAssociate: [4],
      nome: "Anna",
      cognome: "Neri",
      mail: "anna.neri@email.com",
      telefono: "3499988776",
      codiceFiscale: "NRINNA88C61H501Y",
    },
    {
      id: 5,
      destinazioniAssociate: [5],
      nome: "Paolo",
      cognome: "Conti",
      mail: "paolo.conti@email.com",
      telefono: "3481122334",
      codiceFiscale: "CNTPLO91S12L219C",
    },
    {
      id: 6,
      destinazioniAssociate: [1, 2],
      nome: "Elena",
      cognome: "Moretti",
      mail: "elena.moretti@email.com",
      telefono: "3512233445",
      codiceFiscale: "MRTELN92D47F205S",
    },
    {
      id: 7,
      destinazioniAssociate: [2, 3],
      nome: "Alessandro",
      cognome: "Ferrari",
      mail: "alessandro.ferrari@email.com",
      telefono: "3503344556",
      codiceFiscale: "FRRLSN94M22H501R",
    },
    {
      id: 8,
      destinazioniAssociate: [4, 5],
      nome: "Sara",
      cognome: "Russo",
      mail: "sara.russo@email.com",
      telefono: "3314455667",
      codiceFiscale: "RSSSRA95L01D612E",
    },
    {
      id: 9,
      destinazioniAssociate: [1, 3],
      nome: "Davide",
      cognome: "Galli",
      mail: "davide.galli@email.com",
      telefono: "3335566778",
      codiceFiscale: "GLLDVD93R45C351P",
    },
    {
      id: 10,
      destinazioniAssociate: [5],
      nome: "Francesca",
      cognome: "Martini",
      mail: "francesca.martini@email.com",
      telefono: "3346677889",
      codiceFiscale: "MRTFNC89M01H703A",
    },
  ];

  const destinazioni = [
    {
      id: 1,
      destinazione: "Parigi",
      dataInizio: "2025-06-10",
      dataFine: "2025-06-15",
      immagineCopertina: "/paris.jpg",
    },
    {
      id: 2,
      destinazione: "Londra",
      dataInizio: "2025-07-05",
      dataFine: "2025-07-12",
      immagineCopertina: "/london.jpg",
    },
    {
      id: 3,
      destinazione: "Roma",
      dataInizio: "2025-08-01",
      dataFine: "2025-08-07",
      immagineCopertina: "/rome.jpg",
    },
    {
      id: 4,
      destinazione: "Barcellona",
      dataInizio: "2025-09-10",
      dataFine: "2025-09-18",
      immagineCopertina: "/barcelona.jpg",
    },
    {
      id: 5,
      destinazione: "Berlino",
      dataInizio: "2025-10-01",
      dataFine: "2025-10-08",
      immagineCopertina: "/berlin.jpg",
    },
    {
      id: 6,
      destinazione: "Amsterdam",
      dataInizio: "2025-11-15",
      dataFine: "2025-11-20",
      immagineCopertina: "/amsterdam.jpg",
    },
    {
      id: 7,
      destinazione: "Praga",
      dataInizio: "2025-12-05",
      dataFine: "2025-12-10",
      immagineCopertina: "/praga.jpg",
    },
    {
      id: 8,
      destinazione: "Vienna",
      dataInizio: "2026-01-10",
      dataFine: "2026-01-15",
      immagineCopertina: "/vienna.jpg",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >

            <Route path='/' element={<Homepage destinazioni={destinazioni} clienti={clienti} />} />
            <Route path='/details/:id' element={<Details />} />

          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
