import React, { createContext, useContext, useState } from 'react';

const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
    const [trips, setTrips] = useState([
        {
            id: 1,
            destinazione: 'Parigi',
            dataInizio: '2025-06-10',
            dataFine: '2025-06-15',
            immagineCopertina: 'https://example.com/parigi.jpg'
        },
        {
            id: 2,
            destinazione: 'Londra',
            dataInizio: '2025-07-05',
            dataFine: '2025-07-12',
            immagineCopertina: 'https://example.com/londra.jpg'
        },
        {
            id: 3,
            destinazione: 'Roma',
            dataInizio: '2025-08-01',
            dataFine: '2025-08-07',
            immagineCopertina: 'https://example.com/roma.jpg'
        },
        {
            id: 4,
            destinazione: 'Barcellona',
            dataInizio: '2025-09-10',
            dataFine: '2025-09-18',
            immagineCopertina: 'https://example.com/barcellona.jpg'
        },
        {
            id: 5,
            destinazione: 'Berlino',
            dataInizio: '2025-10-01',
            dataFine: '2025-10-08',
            immagineCopertina: 'https://example.com/berlino.jpg'
        }
    ]);

    const [viaggiatori, setViaggiatori] = useState([
        {
            id: 1,
            viaggiAssociati: [1],
            nome: 'Luca',
            cognome: 'Rossi',
            mail: 'luca.rossi@email.com',
            telefono: '3201234567',
            codiceFiscale: 'RSSLCU95A01H501T'
        },
        {
            id: 2,
            viaggiAssociati: [2],
            nome: 'Giulia',
            cognome: 'Bianchi',
            mail: 'giulia.bianchi@email.com',
            telefono: '3399876543',
            codiceFiscale: 'BNCGLI93T45L219K'
        },
        {
            id: 3,
            viaggiAssociati: [3],
            nome: 'Marco',
            cognome: 'Verdi',
            mail: 'marco.verdi@email.com',
            telefono: '3471112233',
            codiceFiscale: 'VRDMRC90A10F205Z'
        },
        {
            id: 4,
            viaggiAssociati: [4],
            nome: 'Anna',
            cognome: 'Neri',
            mail: 'anna.neri@email.com',
            telefono: '3499988776',
            codiceFiscale: 'NRINNA88C61H501Y'
        },
        {
            id: 5,
            viaggiAssociati: [5],
            nome: 'Paolo',
            cognome: 'Conti',
            mail: 'paolo.conti@email.com',
            telefono: '3481122334',
            codiceFiscale: 'CNTPLO91S12L219C'
        },
        {
            id: 6,
            viaggiAssociati: [1, 2],
            nome: 'Elena',
            cognome: 'Moretti',
            mail: 'elena.moretti@email.com',
            telefono: '3512233445',
            codiceFiscale: 'MRTELN92D47F205S'
        },
        {
            id: 7,
            viaggiAssociati: [2, 3],
            nome: 'Alessandro',
            cognome: 'Ferrari',
            mail: 'alessandro.ferrari@email.com',
            telefono: '3503344556',
            codiceFiscale: 'FRRLSN94M22H501R'
        },
        {
            id: 8,
            viaggiAssociati: [4, 5],
            nome: 'Sara',
            cognome: 'Russo',
            mail: 'sara.russo@email.com',
            telefono: '3314455667',
            codiceFiscale: 'RSSSRA95L01D612E'
        },
        {
            id: 9,
            viaggiAssociati: [1, 3],
            nome: 'Davide',
            cognome: 'Galli',
            mail: 'davide.galli@email.com',
            telefono: '3335566778',
            codiceFiscale: 'GLLDVD93R45C351P'
        },
        {
            id: 10,
            viaggiAssociati: [5],
            nome: 'Francesca',
            cognome: 'Martini',
            mail: 'francesca.martini@email.com',
            telefono: '3346677889',
            codiceFiscale: 'MRTFNC89M01H703A'
        }
    ]);

    return (
        <TravelContext.Provider value={{ trips, setTrips, viaggiatori, setViaggiatori }}>
            {children}
        </TravelContext.Provider>
    );
};

export const useTravel = () => useContext(TravelContext);


/* In un componente qualsiasi:
 import { useTravel } from '../context/TravelContext';

const ListaViaggi = () => {
    const { trips } = useTravel();

    return (
        <div>
            <h2>Elenco Viaggi</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        {trip.destinazione} ({trip.dataInizio} - {trip.dataFine})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaViaggi; */