import React, { createContext, useContext, useState } from 'react';

const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
    const [trips, setTrips] = useState([
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
        },
        {
            id: 11,
            viaggiAssociati: [6],
            nome: 'Matteo',
            cognome: 'Esposito',
            mail: 'matteo.esposito@email.com',
            telefono: '3209876543',
            codiceFiscale: 'ESPMTT92A01H501Z'
        },
        {
            id: 12,
            viaggiAssociati: [7],
            nome: 'Chiara',
            cognome: 'Bruni',
            mail: 'chiara.bruni@email.com',
            telefono: '3281234567',
            codiceFiscale: 'BRNCHR93B22L219X'
        },
        {
            id: 13,
            viaggiAssociati: [8],
            nome: 'Giorgio',
            cognome: 'Santini',
            mail: 'giorgio.santini@email.com',
            telefono: '3299876543',
            codiceFiscale: 'SNTGRG94C33F205Y'
        },
        {
            id: 14,
            viaggiAssociati: [1, 2],
            nome: 'Valeria',
            cognome: 'De Luca',
            mail: 'valeria.deluca@email.com',
            telefono: '3271122334',
            codiceFiscale: 'DLCVLR95D44H501W'
        },
        {
            id: 15,
            viaggiAssociati: [3, 4],
            nome: 'Andrea',
            cognome: 'Fontana',
            mail: 'andrea.fontana@email.com',
            telefono: '3262233445',
            codiceFiscale: 'FNTAND96E55L219V'
        },
        {
            id: 16,
            viaggiAssociati: [5, 6],
            nome: 'Martina',
            cognome: 'Rinaldi',
            mail: 'martina.rinaldi@email.com',
            telefono: '3253344556',
            codiceFiscale: 'RNLMTN97F66F205U'
        },
        {
            id: 17,
            viaggiAssociati: [7, 8],
            nome: 'Lorenzo',
            cognome: 'Gatti',
            mail: 'lorenzo.gatti@email.com',
            telefono: '3244455667',
            codiceFiscale: 'GTTLNZ98G77H501T'
        },
        {
            id: 18,
            viaggiAssociati: [1, 3],
            nome: 'Federica',
            cognome: 'Marini',
            mail: 'federica.marini@email.com',
            telefono: '3235566778',
            codiceFiscale: 'MRNFDR99H88L219S'
        },
        {
            id: 19,
            viaggiAssociati: [2, 4],
            nome: 'Simone',
            cognome: 'Ricci',
            mail: 'simone.ricci@email.com',
            telefono: '3226677889',
            codiceFiscale: 'RCCSMN00I99F205R'
        },
        {
            id: 20,
            viaggiAssociati: [5],
            nome: 'Giada',
            cognome: 'Pellegrini',
            mail: 'giada.pellegrini@email.com',
            telefono: '3217788990',
            codiceFiscale: 'PLLGJD01J11H501Q'
        },
        {
            id: 21,
            viaggiAssociati: [6],
            nome: 'Emanuele',
            cognome: 'Fabbri',
            mail: 'emanuele.fabbri@email.com',
            telefono: '3208899001',
            codiceFiscale: 'FBBEMN02K22L219P'
        },
        {
            id: 22,
            viaggiAssociati: [7],
            nome: 'Silvia',
            cognome: 'Romano',
            mail: 'silvia.romano@email.com',
            telefono: '3199900112',
            codiceFiscale: 'RMNSLV03L33F205O'
        },
        {
            id: 23,
            viaggiAssociati: [8],
            nome: 'Tommaso',
            cognome: 'Barbieri',
            mail: 'tommaso.barbieri@email.com',
            telefono: '3180011223',
            codiceFiscale: 'BRBTMS04M44H501N'
        },
        {
            id: 24,
            viaggiAssociati: [1, 2],
            nome: 'Alice',
            cognome: 'Serra',
            mail: 'alice.serra@email.com',
            telefono: '3171122334',
            codiceFiscale: 'SRRALC05N55L219M'
        },
        {
            id: 25,
            viaggiAssociati: [3, 4],
            nome: 'Riccardo',
            cognome: 'Costa',
            mail: 'riccardo.costa@email.com',
            telefono: '3162233445',
            codiceFiscale: 'CSTRCC06O66F205L'
        }
    ]);

    return (
        <TravelContext.Provider value={{ trips, setTrips, viaggiatori, setViaggiatori }}>
            {children}
        </TravelContext.Provider>
    );
};

export const useTravel = () => useContext(TravelContext);


