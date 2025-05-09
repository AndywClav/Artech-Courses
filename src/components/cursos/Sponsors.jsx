import { Sponsor, Grid } from '../../components'
import styles from '../../styles/Subtitle.module.css'

export function Sponsors() {
    return (
        <>
            <h2 className={styles.subtitle} style={{ fontSize: '2.5rem' }}>Sponsors</h2>

            <Grid style={{ padding: '0 18px' }}>
                <Sponsor
                    href='https://www.artech-consulting.com.ar/'
                    alt='Artech'
                    src='assets/artech.png'
                    style={{ height: '35px' }}
                />
                <Sponsor
                    href='https://www.pescar.org.ar/'
                    alt='Fundación Pescar'
                    src='assets/pescar.png'
                    height='50px'
                    style={{ height: '65px' }}
                />
                <Sponsor
                    href='https://www.karunafoundation.nl/en/'
                    alt='Karuna'
                    src='assets/karuna.png'
                    height='50px'
                    style={{ height: '45px' }}
                />
            </Grid>
        </>
    )
}