
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

    const [nombreChambres, setNombreChambres] = useState(0);
    const [nombreCuisines, setNombreCuisines] = useState(0);
    const [nombreSalons, setNombreSalons] = useState(0);
    const [nombreSalleDeBains, setNombreSalleDeBains] = useState(0);
    const [nombreHeures, setNombreHeures] = useState(3);
    
    const [dateHours, setDateHours] = useState(dayjs());


    
    
    
    
    const userId = useSelector((state) => state.users.userId);
    
    const handleDateTimeChange = (newDateHours) => {
        setDateHours(newDateHours);
    };
    
    
    
    
    const augmenterChambres = () => {
        setNombreChambres(nombreChambres + 1);
    };
    
    const diminuerChambres = () => {
        if (nombreChambres > 0) {
            setNombreChambres(nombreChambres - 1);
        }
    };
    
    
    const augmenterCuisines= () => {
        setNombreCuisines(nombreCuisines + 1);
    };
    
    const diminuerCuisines = () => {
        if (nombreCuisines > 0) {
            setNombreCuisines(nombreCuisines - 1);
        }
    };
    
    const augmenterSalons = () => {
        setNombreSalons(nombreSalons + 1);
    };
    
    const diminuerSalons = () => {
        if (nombreSalons > 0) {
            setNombreSalons(nombreSalons - 1);
        }
    };
    
    
    const augmenterSalleDeBains = () => {
        setNombreSalleDeBains(nombreSalleDeBains + 1);
    };
    
    const diminuerSalleDeBains = () => {
        if (nombreSalleDeBains > 0) {
            setNombreSalleDeBains(nombreSalleDeBains - 1);
        }
    };
    
    const augmenterHeures = () => {
        if (nombreHeures < 8 )
        setNombreHeures(nombreHeures + 1);
    };
    
    const diminuerHeures = () => {
        if (nombreHeures > 3 ) {
            setNombreHeures(nombreHeures - 1);
        }
    };
    

    const handleReservationSubmit = () => {
        console.log(userId)
        
        const reservationData = {
            rooms: {
                bedrooms: nombreChambres,
                kitchen: nombreCuisines,
                living: nombreSalons,
                bathrooms: nombreSalleDeBains
            },
            dateTimeStart: dateHours.toISOString(),
            dateTimeStop: dateHours.add(nombreHeures).toISOString(),
           hasProducts:true,
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
    }
    
    
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
    <main>
            <div className={styles.container}>
                <h2   className={styles.h2} > Pour combien de pièces souhaiteriez-vous bénéficier de nos services ?</h2>
                <div className={styles.containerRow}>
                    <div className={styles.roomsNumber}>
                        <span className={styles.namingRooms}>Chambre</span>
                        <Button onClick={augmenterChambres}>+</Button>
                        <span>{nombreChambres}</span>
                        <Button onClick={diminuerChambres}>-</Button>
                    </div>
                    <div className={styles.roomsNumber}>
                        <span className={styles.namingRooms} >Cuisine</span>
                        <Button onClick={augmenterCuisines}>+</Button>
                        <span>{nombreCuisines}</span>
                        <Button onClick={diminuerCuisines}>-</Button>
                    </div>
                    <div className={styles.roomsNumber}>
                        <span className={styles.namingRooms}>Salon</span>
                        <Button onClick={augmenterSalons}>+</Button>
                        <span>{nombreSalons}</span>
                        <Button onClick={diminuerSalons}>-</Button>
                    </div>
                    <div className={styles.roomsNumber}>
                        <span className={styles.namingRooms}>Salle de Bain</span>
                        <Button onClick={augmenterSalleDeBains}>+</Button>
                        <span>{nombreSalleDeBains}</span>
                        <Button onClick={diminuerSalleDeBains}>-</Button>
                    </div>
                    
                </div>
                <div>
               <h2  className={styles.h2}> De combien de temps auriez-vous besoin?</h2>
            <div className={styles.heures}>
                        
                        <Button  onClick={augmenterHeures}>+</Button>
                        <span > {nombreHeures}h</span>
                        <Button  onClick={diminuerHeures}>-</Button>
                    </div></div>

                
                    <h2   className={styles.h2} >Sélectionnez une date et une heure pour votre premier ménage</h2>
            
              <div  className={styles.datetime} >
                    <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DateTimePicker 
                    label="Sélectionnez la date et l'heure"
                    value={dateHours}
                    onChange={handleDateTimeChange}
                />
            </LocalizationProvider>
            </div >
            
            <div     className= {styles.confirmation}>
            <Button  variant="contained" className= {styles.btnconf} onClick={handleReservationSubmit}>Confirmer</Button>
            </div>
            </div>

            
            

        
            



          
        </main>
    );
};

export default Reservation;


 