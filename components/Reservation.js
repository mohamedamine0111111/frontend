import { useState } from 'react';
import Button from '@mui/material/Button';
import styles from '../styles/Reservation.module.css';
import * as React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelector } from 'react-redux';

const Reservation = () => {
    const BACK_END_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [nombrePieces, setNombrePieces] = useState({
        Chambre: 0,
        Cuisine: 0,
        Salon: 0,
        "Salle de Bain": 0
    });
    const [nombreHeures, setNombreHeures] = useState(3);
    const [dateHours, setDateHours] = useState(dayjs());
    const userId = useSelector((state) => state.users.userId);
    
    const handleDateTimeChange = (newDateHours) => {
        setDateHours(newDateHours);
    };

    const handlePieceChange = (piece, increment) => {
        setNombrePieces((prev) => ({
            ...prev,
            [piece]: Math.max(0, prev[piece] + increment)
        }));
    };

    const handleReservationSubmit = () => {
        console.log(userId);
        const reservationData = {
            rooms: nombrePieces,
            dateTimeStart: dateHours.toISOString(),
            dateTimeStop: dateHours.add(nombreHeures, 'hour').toISOString(),
            hasProducts: true,
            user: userId,
        };
        
        fetch(`${BACK_END_URL}/missions/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(reservationData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Réservation réussie', data);
        })
        .catch(error => {
            console.error('Erreur lors de la réservation', error);
        });
    };

    return (
        <main className={styles.container}>
            <div className={styles.reservationBox}>
                <h2 className={styles.h2}>Réservez votre service de ménage</h2>
                
                <div className={styles.section}>
                    <h3 className={styles.h3}>🛏️ Sélection des pièces</h3>
                    <div className={styles.containerGrid}>
                        {Object.entries(nombrePieces).map(([piece, count]) => (
                            <div key={piece} className={styles.roomsNumber}>
                                <span className={styles.namingRooms}>{piece}</span>
                                <div className={styles.counterButtons}>
                                    <Button onClick={() => handlePieceChange(piece, 1)}>+</Button>
                                    <span>{count}</span>
                                    <Button onClick={() => handlePieceChange(piece, -1)}>-</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.h3}>⏳ Durée du service</h3>
                    <div className={styles.heures}>
                        <Button onClick={() => setNombreHeures(Math.min(8, nombreHeures + 1))}>+</Button>
                        <span>{nombreHeures}h</span>
                        <Button onClick={() => setNombreHeures(Math.max(3, nombreHeures - 1))}>-</Button>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.h3}>📅 Choisissez la date et l'heure</h3>
                    <div className={styles.datetime}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker 
                                label="Sélectionnez la date et l'heure"
                                value={dateHours}
                                onChange={handleDateTimeChange}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                
                <div className={styles.confirmation}>
                    <Button variant="contained" className={styles.btnconf} onClick={handleReservationSubmit}>Confirmer la réservation</Button>
                </div>
            </div>
        </main>
    );
};

export default Reservation;