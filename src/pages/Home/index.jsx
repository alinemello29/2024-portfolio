import styles from './Home.module.css';
import iconePDF from '../Home/Curriculo fullstack Aline Melo.pdf';
import minhaFoto from '../Home/minhafoto.png'; // Importe sua foto aqui

function Home() {
    const abrirPDFExterno = () => {
        window.open(iconePDF, '_blank');
    };

    return (
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá, sou <br/>
                    <span>Aline Melo</span> <br/>
                    Dev Full Stack
                </p>
                <button onClick={abrirPDFExterno} className={`${styles.btn} ${styles.btn_purple}`}>
                    Abrir Currículo
                </button>
            </div>
            <figure>
                <img className={styles.img_home} src={minhaFoto} alt="Minha Foto" /> {/* Adicione sua foto aqui */}
            </figure>
        </section>
    );
}

export default Home;

