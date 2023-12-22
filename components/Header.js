import * as React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';


import { useDispatch } from 'react-redux';
import { setUserId } from '../reducers/users';


function Header() {
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [signUpLastName, setSignUpLastName] = useState('');
  const [signUpAdress, setSignUpAdress] = useState('');
  const [signUpPhone, setSignUpPhone] = useState('');

  const [signInEmail,setSignInEmail]= useState('');
  const [signInPassword,setSignInPassword]= useState('');

  const dispatch = useDispatch();
  



  const handleOpenSignup = () => {
    console.log(" t'as ouvert modal inscription");
    setOpenSignup(true);
  };
  
  
  const handleCloseSignup = () => setOpenSignup(false);

  
  const handleOpenSignin = () => {
    console.log(" t'as ouvert modal connexion");
    setOpenSignin(true);
  };
  
  
  const handleCloseSignin = () => {
    setOpenSignin(false);
  };


  const handleSignUp = () => {
    
    const signUpData = {
      
      email: signUpEmail,
      password: signUpPassword,
      firstName: signUpFirstName,
      lastName: signUpLastName,
      address: signUpAdress,
      phone: signUpPhone,
    };


  // Envoyer à la route Signup les infos de l'utilisateur
  fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpData),
  })
  .then(response => response.json())
  .then(data => {
   
    console.log('Inscription réussie', data);
    dispatch(setUserId(data.userId));
    handleCloseSignup(); 
    // Stocker le token et l'ID dans le reducer
    // Redirection vers la page de réservation.
  })
  .catch(error => {
  
    console.error('Erreur lors de l’inscription', error);
  });
}
  

  
const handleSignIn = () => {

  const signInData = {
      
    email: signInEmail,
    password: signInPassword,
   
  };



  fetch('http://localhost:3000/users/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signInData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Inscription réussie', data);
    dispatch(setUserId(data.userId));
    handleCloseSignin(); 
    // Stocker le token et l'ID dans le reducer
    // Redirection vers la page de réservation.
  })
  .catch(error => {
    
        console.error('Erreur lors de l’inscription', error);
      });
      }


    


      return (
        <header> 
          <div className={styles.header}>
            <div>
                {/* <img src="" /> LOGO */}
                <span className={styles.link}> <Link href="/"><img className={styles.image}src='/logo.png' width={150}/></Link></span>
            </div>
    
            <Stack spacing={2} direction="row" className={styles.SignContainer}>
                <Button  variant="contained" className={styles.Signup} onClick={handleOpenSignup}>Inscription</Button>
                <Button   variant="contained" className={styles.Signin} onClick={handleOpenSignin}>Connexion</Button>
            </Stack>
            
            <Modal open={openSignup} onClose={handleCloseSignup}>
            <Box >
              <div className={styles.registerSection}> 
              <Typography id="signup-modal-title" variant="h6" component="h2" className={styles.typographyTitle}>
                Inscription
              </Typography>
              <input style={{marginTop:10}} type="text" placeholder="email" id="signUpEmail" value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}/>
              <input style={{marginTop:10}} type="password" placeholder="Mot de passe" id="signUpPassword" value={signUpPassword}
              onChange={(e)=> setSignUpPassword(e.target.value)}/>
              <input style={{marginTop:10}} type="text" placeholder="prénom" id="signUpFirstName" value={signUpFirstName}
              onChange={(e)=>setSignUpFirstName(e.target.value)} />
              <input style={{marginTop:10}} type="text" placeholder="nom de famille" id="signUpLastName" value={signUpLastName}
              onChange={(e)=>setSignUpLastName(e.target.value)} />
              <input style={{marginTop:10}} type="text" placeholder="adresse" id="signUpAdress" value={signUpAdress}
              onChange={(e)=>setSignUpAdress(e.target.value)}  />
              <input style={{marginTop:10}} type="phone" placeholder="numéro de télephone" id="signUpPhone" value={signUpPhone}
              onChange={(e)=>setSignUpPhone(e.target.value)} /> 
              <button style={{marginTop:10}} id="register" onClick={handleSignUp}>S'inscrire</button></div>
            </Box>
          </Modal>
          
          
          
          <Modal open={openSignin} onClose={handleCloseSignin}>
            <Box >
              <div className={styles.registerSection}> 
              <Typography id="signin-modal-title" variant="h6" component="h2" className={styles.typographyTitle}>
                Connexion
              </Typography>
              <input style={{marginTop:10}}   type="text" placeholder="email" id="signInEmail"value={signInEmail} 
              onChange={(e)=>setSignInEmail(e.target.value)}  />
              <input  style={{marginTop:10}}   type="password" placeholder="mot de passe" id="signInPassword" value={signInPassword}
              onChange={(e)=>setSignInPassword(e.target.value)} />
              <button style={{marginTop:10}} id="connection" onClick={handleSignIn}>Se connecter</button></div>
            </Box>
          </Modal>
    
          </div>
        </header>
      );
    }
    
    export default Header;


  




    




    








        
