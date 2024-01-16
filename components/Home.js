import Image from "next/image";
import styles from '../styles/Home.module.css';
function Home() {
  return (
    <main className={styles.container}>
      <div className={`${styles.rowFlex} col-lg-12`}>
      <div className={`${styles.columnHalf} col-sm-12`}>
          <Image
            src="/Rectangle 3.png"
            width={2000}
            height={2000}
            alt="Picture of cleaner"
          />
        </div>
        <div className={`${styles.columnHalf} ${styles.alignCenter} col-sm-12`}>
        <h1 className="my-5" >
            Réservez votre ménage avec CleanSweetHome en quelques clics à
            Bruxelles{" "}
          </h1>

          <ul className="my-5 fs-4">
            <li>Réservation en ligne, confirmation immédiate</li>
            <li>Ménage disponible 48 heures après votre réservation</li>
            <li>Contrat sans engagement</li>
            <li>Ménages uniques</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-12 col-sm-12">
        <h2 className="my-5">CleanSweetHome C'est quoi ?</h2>
        <p className="my-5 fs-3">
          Vous hésitez à faire appel à des professionnels pour l’entretien de
          votre maison ou de votre appartement à Bruxelles ? Découvrez sans
          attendre tous les avantages des services de ménage CleanSweetHome...
        </p>
      </div>
    </main>
  );
}

export default Home;