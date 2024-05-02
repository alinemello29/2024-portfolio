import styles from '../Sobre/Sobre.module.css'
import avatar from './images/minhafoto.png'
import html from './images/html.png'
import css from './images/css.png'
import bootstrap from './images/bootstrap.png'
import js from './images/javascript.png'
import react from './images/react.png'
import mysql from './images/mysql.png'
import sql from './images/sql.png'
import linux from './images/linux.png'
import python from './images/python.png'
import java from './images/java.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
             
             <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Aline Melo</span> <br />
                    <strong>Dev Full Stack</strong> </p>

                    <p>Formada em front-end, na escola vai na web e devmedia.</p>

                    <p>Estudando back-end devmedia</p>

                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                    com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Tecnologia</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={bootstrap} alt="Ícone do boostrap" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={mysql} alt="Ícone do mysql" />
                    <img src={sql} alt="Ícone do sql" />
                    <img src={linux} alt="Ícone do linux" />
                    <img src={python} alt="Ícone do python" />
                    <img src={java} alt="Ícone do java" />
                </div>
            </div>
   
        </section>
    )
}

export default Sobre
