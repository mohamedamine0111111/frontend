import Image from "next/image";
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>✨ Réservez votre ménage en quelques clics avec CleanSweetHome ✨</h1>
          <ul className={styles.benefitsList}>
            <li>✅ Réservation en ligne, confirmation immédiate</li>
            <li>⏳ Service disponible sous 48 heures</li>
            <li>🔄 Sans engagement, flexible et adapté à vos besoins</li>
            <li>🏡 Un ménage soigné par des professionnels qualifiés</li>
          </ul>
          <button className={styles.ctaButton}>Réserver maintenant</button>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/Rectangle 3.png"
            width={500}
            height={350}
            alt="Picture of cleaner"
          />
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <h2>🌟 Ce que disent nos clients 🌟</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonial}>
            <p>"CleanSweetHome a transformé mon appartement ! Service rapide et impeccable. Je recommande !"</p>
            <span>- Sophie M.</span>
          </div>
          <div className={styles.testimonial}>
            <p>"J’étais sceptique au début, mais l’équipe de CleanSweetHome m’a bluffé ! Merci !"</p>
            <span>- Julien D.</span>
          </div>
          <div className={styles.testimonial}>
            <p>"Facile à réserver, un service efficace et de qualité ! Une vraie tranquillité d’esprit."</p>
            <span>- Clara L.</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
