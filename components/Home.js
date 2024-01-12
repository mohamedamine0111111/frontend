import styles from '../styles/Home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        <div className={styles.bloc1}>
        <img src="/Rectangle 3.png" className={styles.image} />
          
          <h1 className={styles.title}>Réservez votre ménage avec CleanSweetHome en quelques clics à Bruxelles </h1>
         
          <ul className={styles.list}>
            <li>Réservation en ligne, confirmation immédiate</li>
            <li>Ménage disponible 48 heures après votre réservation</li>
            <li>Contrat sans engagement</li>
            <li>Ménages uniques</li>
          </ul>
          </div></div>
      
      <div className={styles.bloc2}>
        <h2 className={styles.titre}>CleanSweetHome C'est quoi ?</h2>
        <p className={styles.description}>
          Vous hésitez à faire appel à des professionnels pour l’entretien de votre maison
          ou de votre appartement à Bruxelles ? Découvrez sans attendre tous les avantages des services de ménage CleanSweetHome...
        </p>
      </div>
    </main>
  );
}

export default Home;
