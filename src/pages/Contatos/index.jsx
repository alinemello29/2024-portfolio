import styles from './Contatos.module.css'
import { BsGithub, BsLinkedin} from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>

            <div className={styles.icones}>
                
                <a href='mailto:alinepe2717@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <GoMail className={styles.icone} />
                </a>

                <a href='https://github.com/alinemello29' target='_blank' rel='noopener noreferrer'>
                    <BsGithub className={styles.icone} />
                </a>

                <a href='https://www.linkedin.com/in/alinemelo%E2%98%95/' target='_blank' rel='noopener noreferrer'>
                    <BsLinkedin className={styles.icone} />
                </a>

            </div>

        </section>
    )
}

export default Contatos
