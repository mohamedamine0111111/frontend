import * as React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';


function Header() {
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);
  
  const handleOpenSignup = () => {
    console.log(" modal inscription");
    setOpenSignup(true);
  };
  
  
  const handleCloseSignup = () => setOpenSignup(false);

  
  const handleOpenSignin = () => {
    console.log(" modal  connexion");
    setOpenSignin(true);
  };
  
  
  const handleCloseSignin = () => setOpenSignin(false);







  return (
    <header> 
      <div className={styles.header}>
        <div>
            {/* <img src="" /> LOGO */}
            <span className={styles.link}> <Link href="/"><img className={styles.image}src='/logo.png' width={150}/></Link></span>
        </div>

        <Stack spacing={2} direction="row" className={styles.SignContainer}>
            <Button variant="contained" className={styles.Signup} onClick={handleOpenSignup}>Inscription</Button>
            <Button variant="contained" className={styles.Signin} onClick={handleOpenSignin}>Connexion</Button>
        </Stack>
        
        <Modal open={openSignup} onClose={handleCloseSignup}>
        <Box >
          <div className={styles.registerSection}> 
          <Typography id="signup-modal-title" variant="h6" component="h2">
            Inscription
          </Typography>
          <input style={{marginTop:10}} type="text" placeholder="email" id="signUpEmail" />
          <input style={{marginTop:10}} type="password" placeholder="Password" id="signUpPassword" />
          <input style={{marginTop:10}} type="text" placeholder="firstName" id="signUpFirstName" />
          <input style={{marginTop:10}} type="text" placeholder="lastName" id="signUpLastName" />
          <input style={{marginTop:10}} type="text" placeholder="adress" id="signUpAdress" />
          <input style={{marginTop:10}} type="phone" placeholder="phone" id="signUpPhone" /> 
          <button style={{marginTop:10}} id="register">Register</button></div>
        </Box>
      </Modal>
      
      
      
      <Modal open={openSignin} onClose={handleCloseSignin}>
        <Box >
          <div className={styles.registerSection}> 
          <Typography id="signin-modal-title" variant="h6" component="h2">
            Connexion
          </Typography>
          <input style={{marginTop:10}}   type="text" placeholder="email" id="signInEmail" />
          <input  style={{marginTop:10}}   type="password" placeholder="Password" id="signInPassword" />
          <button style={{marginTop:10}} id="connection">Connect</button></div>
        </Box>
      </Modal>

      </div>
    </header>
  );
}

export default Header;









        
