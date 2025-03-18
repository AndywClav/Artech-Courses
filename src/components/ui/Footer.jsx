import styles from '../../styles/Footer.module.css'
import logoFundacionPescar from '/assets/pescar.png'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <a
                    href='https://www.pescar.org.ar/'
                    target='_blank'
                    rel='noreferrer'
                >
                    Desarrollado por egresados de
                    <picture>
                        <img
                            width='100'
                            loading='lazy'
                            style={{ marginTop: '-2px' }}
                            src={logoFundacionPescar} alt='pescar logo'
                        />
                    </picture>
                </a>
                <span>&bull;</span>
                <a
                    href='https://github.com/AndywClav/Artech-Cursos'
                    rel='nofollow noreferrer'
                    target='_blank'>
                    GitHub
                </a>
                <span>&bull;</span>
                <a
                    href='https://drive.google.com/drive/folders/1Yx2zK1a7tUP4ar_L5OcccmeRkplQu1kj'
                    rel='nofollow noreferrer'
                    target='_blank'>
                    Google Drive
                </a>
                <span>&bull;</span>
                <a
                    href='https://artechnet.sharepoint.com/SAP%20Tcnico/Forms/AllItems.aspx?ga=1&id=%2FSAP%20Tcnico%2FABAP%20%2D%20Curso%20inicial&viewid=35188798%2D9e0d%2D47c9%2Da302%2Dae32a63ce2b1'
                    rel='nofollow noreferrer'
                    target='_blank'>
                    Microsoft SharePoint
                </a>
                <span>&bull;</span>
                <a
                    href='https://linktr.ee/artech.it'
                    rel='nofollow noreferrer'
                    target='_blank'>
                    Artech
                </a>
            </div>
        </footer>
    )
}
