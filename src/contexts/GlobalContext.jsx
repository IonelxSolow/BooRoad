import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [destinazioni, setDestinazioni] = useState([
        {
            id: 1,
            destinazione: "Parigi",
            dataInizio: "2023-06-10",
            dataFine: "2023-06-15",
            immagineCopertina: "/paris.jpg",
            immagini: ["/paris.jpg", "/paris_1.jpg", "/paris_2.jpg"],
            numeroEmergenza: "+33 1 23 45 67 89",
            luoghiDaVisitare: ["Torre Eiffel", "Museo del Louvre", "Cattedrale di Notre-Dame", "Montmartre", "Arco di Trionfo", "Giardini di Lussemburgo"]
        },
        {
            id: 2,
            destinazione: "Londra",
            dataInizio: "2025-07-05",
            dataFine: "2025-07-12",
            immagineCopertina: "/london.jpg",
            immagini: ["/london.jpg", "/london_1.jpg", "/london_2.jpg"],
            numeroEmergenza: "+44 20 7946 0958",
            luoghiDaVisitare: ["Big Ben", "London Eye", "Torre di Londra", "Buckingham Palace", "Hyde Park", "Museo di Storia Naturale"]
        },
        {
            id: 3,
            destinazione: "Roma",
            dataInizio: "2023-08-01",
            dataFine: "2023-08-07",
            immagineCopertina: "/rome.jpg",
            immagini: ["/rome.jpg", "/rome_1.jpg", "/rome_2.jpg"],
            numeroEmergenza: "+39 06 123 4567",
            luoghiDaVisitare: ["Colosseo", "Fontana di Trevi", "Piazza San Pietro", "Pantheon", "Piazza Navona", "Foro Romano"]
        },
        {
            id: 4,
            destinazione: "Barcellona",
            dataInizio: "2025-09-10",
            dataFine: "2025-09-18",
            immagineCopertina: "/barcelona.jpg",
            immagini: ["/barcelona.jpg", "/barcelona_1.jpg", "/barcelona_2.jpg"],
            numeroEmergenza: "+34 93 123 4567",
            luoghiDaVisitare: ["Sagrada Familia", "Parco Güell", "La Rambla", "Casa Batlló", "Montjuïc", "Mercato della Boqueria"]
        },
        {
            id: 5,
            destinazione: "Berlino",
            dataInizio: "2023-10-01",
            dataFine: "2023-10-08",
            immagineCopertina: "/berlin.jpg",
            immagini: ["/berlin.jpg", "/berlin_1.jpg", "/berlin_2.jpg"],
            numeroEmergenza: "+49 30 12345678",
            luoghiDaVisitare: ["Porta di Brandeburgo", "Muro di Berlino", "Reichstag", "Isola dei Musei", "Alexanderplatz", "Checkpoint Charlie"]
        },
        {
            id: 6,
            destinazione: "Amsterdam",
            dataInizio: "2025-04-24",
            dataFine: "2025-05-02",
            immagineCopertina: "/amsterdam.jpg",
            numeroEmergenza: "+31 20 123 4567",
            luoghiDaVisitare: ["Casa di Anna Frank", "Museo Van Gogh", "Canali di Amsterdam", "Piazza Dam", "Rijksmuseum", "Vondelpark"]
        },
        {
            id: 7,
            destinazione: "Praga",
            dataInizio: "2023-12-05",
            dataFine: "2023-12-10",
            immagineCopertina: "/praga.jpg",
            numeroEmergenza: "+420 2 123 45678",
            luoghiDaVisitare: ["Ponte Carlo", "Castello di Praga", "Piazza della Città Vecchia", "Orologio Astronomico", "Cattedrale di San Vito", "Collina di Petřín"]
        },
        {
            id: 8,
            destinazione: "Vienna",
            dataInizio: "2026-01-10",
            dataFine: "2026-01-15",
            immagineCopertina: "/vienna.jpg",
            numeroEmergenza: "+43 1 123 4567",
            luoghiDaVisitare: ["Palazzo di Schönbrunn", "Cattedrale di Santo Stefano", "Opera di Vienna", "Belvedere", "Prater", "Museo di Storia dell'Arte"]
        },
    ]);

    const [clienti, setClienti] = useState([
        {
            id: 1,
            viaggiAssociati: [1],
            nome: 'Luca',
            cognome: 'Rossi',
            mail: 'luca.rossi@email.com',
            telefono: '3201234567',
            codiceFiscale: 'RSSLCU95A01H501T',
            immaginePersona: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            id: 2,
            viaggiAssociati: [2],
            nome: 'Giulia',
            cognome: 'Bianchi',
            mail: 'giulia.bianchi@email.com',
            telefono: '3399876543',
            codiceFiscale: 'BNCGLI93T45L219K',
            immaginePersona: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            id: 3,
            viaggiAssociati: [3],
            nome: 'Marco',
            cognome: 'Verdi',
            mail: 'marco.verdi@email.com',
            telefono: '3471112233',
            codiceFiscale: 'VRDMRC90A10F205Z',
            immaginePersona: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            id: 4,
            viaggiAssociati: [4],
            nome: 'Anna',
            cognome: 'Neri',
            mail: 'anna.neri@email.com',
            telefono: '3499988776',
            codiceFiscale: 'NRINNA88C61H501Y',
            immaginePersona: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        {
            id: 5,
            viaggiAssociati: [5],
            nome: 'Paolo',
            cognome: 'Conti',
            mail: 'paolo.conti@email.com',
            telefono: '3481122334',
            codiceFiscale: 'CNTPLO91S12L219C',
            immaginePersona: 'https://randomuser.me/api/portraits/men/5.jpg'
        },
        {
            id: 6,
            viaggiAssociati: [1, 2],
            nome: 'Elena',
            cognome: 'Moretti',
            mail: 'elena.moretti@email.com',
            telefono: '3512233445',
            codiceFiscale: 'MRTELN92D47F205S',
            immaginePersona: 'https://randomuser.me/api/portraits/women/6.jpg'
        },
        {
            id: 7,
            viaggiAssociati: [2, 3],
            nome: 'Alessandro',
            cognome: 'Ferrari',
            mail: 'alessandro.ferrari@email.com',
            telefono: '3503344556',
            codiceFiscale: 'FRRLSN94M22H501R',
            immaginePersona: 'https://randomuser.me/api/portraits/men/7.jpg'
        },
        {
            id: 8,
            viaggiAssociati: [4, 5],
            nome: 'Sara',
            cognome: 'Russo',
            mail: 'sara.russo@email.com',
            telefono: '3314455667',
            codiceFiscale: 'RSSSRA95L01D612E',
            immaginePersona: 'https://randomuser.me/api/portraits/women/8.jpg'
        },
        {
            id: 9,
            viaggiAssociati: [1, 3],
            nome: 'Davide',
            cognome: 'Galli',
            mail: 'davide.galli@email.com',
            telefono: '3335566778',
            codiceFiscale: 'GLLDVD93R45C351P',
            immaginePersona: 'https://randomuser.me/api/portraits/men/9.jpg'
        },
        {
            id: 10,
            viaggiAssociati: [5],
            nome: 'Francesca',
            cognome: 'Martini',
            mail: 'francesca.martini@email.com',
            telefono: '3346677889',
            codiceFiscale: 'MRTFNC89M01H703A',
            immaginePersona: 'https://randomuser.me/api/portraits/women/10.jpg'
        },
        // Add similar entries for the remaining objects
    ]);
    const [currentTrip, setCurrentTrip] = useState();


    return (
        <GlobalContext.Provider value={{ clienti, destinazioni, setDestinazioni, currentTrip, setCurrentTrip }}>
            {children}
        </GlobalContext.Provider>
    );
};

function useGlobal() {
    return useContext(GlobalContext);
}

export { useGlobal };