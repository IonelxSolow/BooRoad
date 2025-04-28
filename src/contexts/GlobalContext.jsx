import { createContext, useContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // Pulizia del localStorage all'avvio per evitare problemi di cache
    useEffect(() => {
        localStorage.removeItem("destinazioni");
        localStorage.removeItem("clienti");
        localStorage.removeItem("currentTrip");
    }, []);

    const [destinazioni, setDestinazioni] = useState(() => {
        const savedDestinazioni = localStorage.getItem("destinazioni");
        const parsed = savedDestinazioni ? JSON.parse(savedDestinazioni) : [
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
                immagini: ["/barcelona.jpg", "/barcellona_1.jpg", "/barcellona_2.jpg"],
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
                immagini: ["/amsterdam.jpg", "/amsterdam_1.jpg", "/amsterdam_2.jpg"],

                numeroEmergenza: "+31 20 123 4567",
                luoghiDaVisitare: ["Casa di Anna Frank", "Museo Van Gogh", "Canali di Amsterdam", "Piazza Dam", "Rijksmuseum", "Vondelpark"]
            },
            {
                id: 7,
                destinazione: "Praga",
                dataInizio: "2023-12-05",
                dataFine: "2023-12-10",
                immagineCopertina: "/praga.jpg",
                immagini: ["/praga.jpg", "/praga_1.jpg", "/praga_2.jpg"],

                numeroEmergenza: "+420 2 123 45678",
                luoghiDaVisitare: ["Ponte Carlo", "Castello di Praga", "Piazza della Città Vecchia", "Orologio Astronomico", "Cattedrale di San Vito", "Collina di Petřín"]
            },
            {
                id: 8,
                destinazione: "Vienna",
                dataInizio: "2026-01-10",
                dataFine: "2026-01-15",
                immagineCopertina: "/vienna.jpg",
                immagini: ["/vienna.jpg", "/vienna_1.jpg", "/vienna_2.jpg"],

                numeroEmergenza: "+43 1 123 4567",
                luoghiDaVisitare: ["Palazzo di Schönbrunn", "Cattedrale di Santo Stefano", "Opera di Vienna", "Belvedere", "Prater", "Museo di Storia dell'Arte"]
            },
        ];
        return parsed.map(dest => ({
            ...dest,
            id: Number(dest.id)
        }));
    });

    const [clienti, setClienti] = useState(() => {
        const savedClienti = localStorage.getItem("clienti");
        const parsed = savedClienti ? JSON.parse(savedClienti) : [
            {
                id: 1,
                viaggiAssociati: [1, 3],
                nome: 'Luca',
                cognome: 'Rossi',
                mail: 'luca.rossi@email.com',
                telefono: '3201234567',
                codiceFiscale: 'RSSLCU95A01H501T',
                immaginePersona: 'https://randomuser.me/api/portraits/men/1.jpg'
            },
            {
                id: 2,
                viaggiAssociati: [2, 4],
                nome: 'Giulia',
                cognome: 'Bianchi',
                mail: 'giulia.bianchi@email.com',
                telefono: '3399876543',
                codiceFiscale: 'BNCGLI93T45L219K',
                immaginePersona: 'https://randomuser.me/api/portraits/women/2.jpg'
            },
            {
                id: 3,
                viaggiAssociati: [3, 5],
                nome: 'Marco',
                cognome: 'Verdi',
                mail: 'marco.verdi@email.com',
                telefono: '3471112233',
                codiceFiscale: 'VRDMRC90A10F205Z',
                immaginePersona: 'https://randomuser.me/api/portraits/men/3.jpg'
            },
            {
                id: 4,
                viaggiAssociati: [4, 6],
                nome: 'Anna',
                cognome: 'Neri',
                mail: 'anna.neri@email.com',
                telefono: '3499988776',
                codiceFiscale: 'NRINNA88C61H501Y',
                immaginePersona: 'https://randomuser.me/api/portraits/women/4.jpg'
            },
            {
                id: 5,
                viaggiAssociati: [5, 7],
                nome: 'Paolo',
                cognome: 'Conti',
                mail: 'paolo.conti@email.com',
                telefono: '3481122334',
                codiceFiscale: 'CNTPLO91S12L219C',
                immaginePersona: 'https://randomuser.me/api/portraits/men/5.jpg'
            },
            {
                id: 6,
                viaggiAssociati: [1, 8],
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
                viaggiAssociati: [1, 6],
                nome: 'Davide',
                cognome: 'Galli',
                mail: 'davide.galli@email.com',
                telefono: '3335566778',
                codiceFiscale: 'GLLDVD93R45C351P',
                immaginePersona: 'https://randomuser.me/api/portraits/men/9.jpg'
            },
            {
                id: 10,
                viaggiAssociati: [5, 7],
                nome: 'Francesca',
                cognome: 'Martini',
                mail: 'francesca.martini@email.com',
                telefono: '3346677889',
                codiceFiscale: 'MRTFNC89M01H703A',
                immaginePersona: 'https://randomuser.me/api/portraits/women/10.jpg'
            },
            {
                id: 11,
                viaggiAssociati: [2, 8],
                nome: 'Roberto',
                cognome: 'Costa',
                mail: 'roberto.costa@email.com',
                telefono: '3381234567',
                codiceFiscale: 'CSTRBT88M12H501X',
                immaginePersona: 'https://randomuser.me/api/portraits/men/11.jpg'
            },
            {
                id: 12,
                viaggiAssociati: [3, 4],
                nome: 'Chiara',
                cognome: 'Romano',
                mail: 'chiara.romano@email.com',
                telefono: '3392345678',
                codiceFiscale: 'RMNCHR90D45H501Y',
                immaginePersona: 'https://randomuser.me/api/portraits/women/12.jpg'
            },
            {
                id: 13,
                viaggiAssociati: [1, 5],
                nome: 'Federico',
                cognome: 'Marini',
                mail: 'federico.marini@email.com',
                telefono: '3403456789',
                codiceFiscale: 'MRNFDC92E13H501Z',
                immaginePersona: 'https://randomuser.me/api/portraits/men/13.jpg'
            },
            {
                id: 14,
                viaggiAssociati: [6, 7],
                nome: 'Valentina',
                cognome: 'Leone',
                mail: 'valentina.leone@email.com',
                telefono: '3414567890',
                codiceFiscale: 'LNEVNT94F52H501W',
                immaginePersona: 'https://randomuser.me/api/portraits/women/14.jpg'
            },
            {
                id: 15,
                viaggiAssociati: [2, 6],
                nome: 'Andrea',
                cognome: 'Vitale',
                mail: 'andrea.vitale@email.com',
                telefono: '3425678901',
                codiceFiscale: 'VTLNDR89G24H501V',
                immaginePersona: 'https://randomuser.me/api/portraits/men/15.jpg'
            },
            {
                id: 16,
                viaggiAssociati: [3, 8],
                nome: 'Laura',
                cognome: 'Ferrara',
                mail: 'laura.ferrara@email.com',
                telefono: '3436789012',
                codiceFiscale: 'FRRLRA91H33H501U',
                immaginePersona: 'https://randomuser.me/api/portraits/women/16.jpg'
            },
            {
                id: 17,
                viaggiAssociati: [1, 7],
                nome: 'Simone',
                cognome: 'Ricci',
                mail: 'simone.ricci@email.com',
                telefono: '3447890123',
                codiceFiscale: 'RCCSMN93I15H501T',
                immaginePersona: 'https://randomuser.me/api/portraits/men/17.jpg'
            },
            {
                id: 18,
                viaggiAssociati: [4, 8],
                nome: 'Martina',
                cognome: 'Gallo',
                mail: 'martina.gallo@email.com',
                telefono: '3458901234',
                codiceFiscale: 'GLLMRT95L27H501S',
                immaginePersona: 'https://randomuser.me/api/portraits/women/18.jpg'
            },
            {
                id: 19,
                viaggiAssociati: [2, 5],
                nome: 'Lorenzo',
                cognome: 'Santoro',
                mail: 'lorenzo.santoro@email.com',
                telefono: '3469012345',
                codiceFiscale: 'SNTLNZ87M09H501R',
                immaginePersona: 'https://randomuser.me/api/portraits/men/19.jpg'
            },
            {
                id: 20,
                viaggiAssociati: [1, 4],
                nome: 'Sofia',
                cognome: 'Marino',
                mail: 'sofia.marino@email.com',
                telefono: '3470123456',
                codiceFiscale: 'MRNSFA92N21H501Q',
                immaginePersona: 'https://randomuser.me/api/portraits/women/20.jpg'
            },
            {
                id: 21,
                viaggiAssociati: [3, 7],
                nome: 'Gabriele',
                cognome: 'Greco',
                mail: 'gabriele.greco@email.com',
                telefono: '3481234567',
                codiceFiscale: 'GRCGRL88O03H501P',
                immaginePersona: 'https://randomuser.me/api/portraits/men/21.jpg'
            },
            {
                id: 22,
                viaggiAssociati: [5, 8],
                nome: 'Alice',
                cognome: 'Colombo',
                mail: 'alice.colombo@email.com',
                telefono: '3492345678',
                codiceFiscale: 'CLMLCA90P15H501O',
                immaginePersona: 'https://randomuser.me/api/portraits/women/22.jpg'
            },
            {
                id: 23,
                viaggiAssociati: [1, 2],
                nome: 'Matteo',
                cognome: 'Bruno',
                mail: 'matteo.bruno@email.com',
                telefono: '3503456789',
                codiceFiscale: 'BRNMTT92Q27H501N',
                immaginePersona: 'https://randomuser.me/api/portraits/men/23.jpg'
            },
            {
                id: 24,
                viaggiAssociati: [4, 6],
                nome: 'Beatrice',
                cognome: 'Rizzo',
                mail: 'beatrice.rizzo@email.com',
                telefono: '3514567890',
                codiceFiscale: 'RZZBTR94R39H501M',
                immaginePersona: 'https://randomuser.me/api/portraits/women/24.jpg'
            },
            {
                id: 25,
                viaggiAssociati: [3, 5],
                nome: 'Riccardo',
                cognome: 'Moretti',
                mail: 'riccardo.moretti@email.com',
                telefono: '3525678901',
                codiceFiscale: 'MRTRCR89S11H501L',
                immaginePersona: 'https://randomuser.me/api/portraits/men/25.jpg'
            },
            {
                id: 26,
                viaggiAssociati: [2, 7],
                nome: 'Giorgia',
                cognome: 'Lombardi',
                mail: 'giorgia.lombardi@email.com',
                telefono: '3536789012',
                codiceFiscale: 'LMBGRG91T23H501K',
                immaginePersona: 'https://randomuser.me/api/portraits/women/26.jpg'
            },
            {
                id: 27,
                viaggiAssociati: [1, 8],
                nome: 'Nicola',
                cognome: 'Serra',
                mail: 'nicola.serra@email.com',
                telefono: '3547890123',
                codiceFiscale: 'SRRNCL93U05H501J',
                immaginePersona: 'https://randomuser.me/api/portraits/men/27.jpg'
            },
            {
                id: 28,
                viaggiAssociati: [4, 5],
                nome: 'Elisa',
                cognome: 'Caruso',
                mail: 'elisa.caruso@email.com',
                telefono: '3558901234',
                codiceFiscale: 'CRSLSE95V17H501I',
                immaginePersona: 'https://randomuser.me/api/portraits/women/28.jpg'
            },
            {
                id: 29,
                viaggiAssociati: [3, 6],
                nome: 'Davide',
                cognome: 'Ferraro',
                mail: 'davide.ferraro@email.com',
                telefono: '3569012345',
                codiceFiscale: 'FRRDVD87W29H501H',
                immaginePersona: 'https://randomuser.me/api/portraits/men/29.jpg'
            },
            {
                id: 30,
                viaggiAssociati: [2, 4],
                nome: 'Serena',
                cognome: 'Esposito',
                mail: 'serena.esposito@email.com',
                telefono: '3570123456',
                codiceFiscale: 'SPSSRN92X11H501G',
                immaginePersona: 'https://randomuser.me/api/portraits/women/30.jpg'
            },
            {
                id: 31,
                viaggiAssociati: [1, 3],
                nome: 'Alessandro',
                cognome: 'Fabbri',
                mail: 'alessandro.fabbri@email.com',
                telefono: '3581234567',
                codiceFiscale: 'FBBLSN88Y23H501F',
                immaginePersona: 'https://randomuser.me/api/portraits/men/31.jpg'
            },
            {
                id: 32,
                viaggiAssociati: [5, 7],
                nome: 'Camilla',
                cognome: 'Vitali',
                mail: 'camilla.vitali@email.com',
                telefono: '3592345678',
                codiceFiscale: 'VTLCML90Z05H501E',
                immaginePersona: 'https://randomuser.me/api/portraits/women/32.jpg'
            },
            {
                id: 33,
                viaggiAssociati: [6, 8],
                nome: 'Stefano',
                cognome: 'Romano',
                mail: 'stefano.romano@email.com',
                telefono: '3603456789',
                codiceFiscale: 'RMNSFN92A17H501D',
                immaginePersona: 'https://randomuser.me/api/portraits/men/33.jpg'
            },
            {
                id: 34,
                viaggiAssociati: [2, 3],
                nome: 'Roberta',
                cognome: 'Mariani',
                mail: 'roberta.mariani@email.com',
                telefono: '3614567890',
                codiceFiscale: 'MRNRBT94B29H501C',
                immaginePersona: 'https://randomuser.me/api/portraits/women/34.jpg'
            },
            {
                id: 35,
                viaggiAssociati: [1, 4],
                nome: 'Fabio',
                cognome: 'Leone',
                mail: 'fabio.leone@email.com',
                telefono: '3625678901',
                codiceFiscale: 'LNEFBA89C11H501B',
                immaginePersona: 'https://randomuser.me/api/portraits/men/35.jpg'
            },
            {
                id: 36,
                viaggiAssociati: [5, 6],
                nome: 'Silvia',
                cognome: 'Galli',
                mail: 'silvia.galli@email.com',
                telefono: '3636789012',
                codiceFiscale: 'GLLSLV91D23H501A',
                immaginePersona: 'https://randomuser.me/api/portraits/women/36.jpg'
            },
            {
                id: 37,
                viaggiAssociati: [7, 8],
                nome: 'Marco',
                cognome: 'Santoro',
                mail: 'marco.santoro@email.com',
                telefono: '3647890123',
                codiceFiscale: 'SNTMRC93E05H501Z',
                immaginePersona: 'https://randomuser.me/api/portraits/men/37.jpg'
            },
            {
                id: 38,
                viaggiAssociati: [1, 2],
                nome: 'Francesca',
                cognome: 'Ricci',
                mail: 'francesca.ricci@email.com',
                telefono: '3658901234',
                codiceFiscale: 'RCCFNC95F17H501Y',
                immaginePersona: 'https://randomuser.me/api/portraits/women/38.jpg'
            },
            {
                id: 39,
                viaggiAssociati: [3, 4],
                nome: 'Andrea',
                cognome: 'Marino',
                mail: 'andrea.marino@email.com',
                telefono: '3669012345',
                codiceFiscale: 'MRNNDR87G29H501X',
                immaginePersona: 'https://randomuser.me/api/portraits/men/39.jpg'
            },
            {
                id: 40,
                viaggiAssociati: [5, 6],
                nome: 'Valentina',
                cognome: 'Ferrari',
                mail: 'valentina.ferrari@email.com',
                telefono: '3670123456',
                codiceFiscale: 'FRRVNT92H11H501W',
                immaginePersona: 'https://randomuser.me/api/portraits/women/40.jpg'
            },
            {
                id: 41,
                viaggiAssociati: [7, 8],
                nome: 'Luigi',
                cognome: 'Greco',
                mail: 'luigi.greco@email.com',
                telefono: '3681234567',
                codiceFiscale: 'GRCLGU88I23H501V',
                immaginePersona: 'https://randomuser.me/api/portraits/men/41.jpg'
            },
            {
                id: 42,
                viaggiAssociati: [1, 5],
                nome: 'Elena',
                cognome: 'Colombo',
                mail: 'elena.colombo@email.com',
                telefono: '3692345678',
                codiceFiscale: 'CLMLNE90L05H501U',
                immaginePersona: 'https://randomuser.me/api/portraits/women/42.jpg'
            },
            {
                id: 43,
                viaggiAssociati: [2, 6],
                nome: 'Paolo',
                cognome: 'Bruno',
                mail: 'paolo.bruno@email.com',
                telefono: '3703456789',
                codiceFiscale: 'BRNPLA92M17H501T',
                immaginePersona: 'https://randomuser.me/api/portraits/men/43.jpg'
            },
            {
                id: 44,
                viaggiAssociati: [3, 7],
                nome: 'Maria',
                cognome: 'Rizzo',
                mail: 'maria.rizzo@email.com',
                telefono: '3714567890',
                codiceFiscale: 'RZZMRA94N29H501S',
                immaginePersona: 'https://randomuser.me/api/portraits/women/44.jpg'
            },
            {
                id: 45,
                viaggiAssociati: [4, 8],
                nome: 'Giuseppe',
                cognome: 'Moretti',
                mail: 'giuseppe.moretti@email.com',
                telefono: '3725678901',
                codiceFiscale: 'MRTGPP89O11H501R',
                immaginePersona: 'https://randomuser.me/api/portraits/men/45.jpg'
            },
            {
                id: 46,
                viaggiAssociati: [1, 6],
                nome: 'Cristina',
                cognome: 'Lombardi',
                mail: 'cristina.lombardi@email.com',
                telefono: '3736789012',
                codiceFiscale: 'LMBCST91P23H501Q',
                immaginePersona: 'https://randomuser.me/api/portraits/women/46.jpg'
            },
            {
                id: 47,
                viaggiAssociati: [2, 7],
                nome: 'Antonio',
                cognome: 'Serra',
                mail: 'antonio.serra@email.com',
                telefono: '3747890123',
                codiceFiscale: 'SRRNTN93Q05H501P',
                immaginePersona: 'https://randomuser.me/api/portraits/men/47.jpg'
            },
            {
                id: 48,
                viaggiAssociati: [3, 8],
                nome: 'Barbara',
                cognome: 'Caruso',
                mail: 'barbara.caruso@email.com',
                telefono: '3758901234',
                codiceFiscale: 'CRSBRB95R17H501O',
                immaginePersona: 'https://randomuser.me/api/portraits/women/48.jpg'
            },
            {
                id: 49,
                viaggiAssociati: [4, 5],
                nome: 'Roberto',
                cognome: 'Ferraro',
                mail: 'roberto.ferraro@email.com',
                telefono: '3769012345',
                codiceFiscale: 'FRRRBT87S29H501N',
                immaginePersona: 'https://randomuser.me/api/portraits/men/49.jpg'
            },
            {
                id: 50,
                viaggiAssociati: [6, 7],
                nome: 'Claudia',
                cognome: 'Esposito',
                mail: 'claudia.esposito@email.com',
                telefono: '3770123456',
                codiceFiscale: 'SPSCLD92T11H501M',
                immaginePersona: 'https://randomuser.me/api/portraits/women/50.jpg'
            }
        ];
        return parsed.map(cliente => ({
            ...cliente,
            id: Number(cliente.id),
            viaggiAssociati: cliente.viaggiAssociati.map(Number)
        }));
    });

    const [currentTrip, setCurrentTrip] = useState(() => {
        const savedCurrentTrip = localStorage.getItem("currentTrip");
        return savedCurrentTrip ? JSON.parse(savedCurrentTrip) : undefined;
    });

    useEffect(() => {
        localStorage.setItem("destinazioni", JSON.stringify(destinazioni));
    }, [destinazioni]);

    useEffect(() => {
        localStorage.setItem("clienti", JSON.stringify(clienti));
    }, [clienti]);

    useEffect(() => {
        localStorage.setItem("currentTrip", JSON.stringify(currentTrip));
    }, [currentTrip]);

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