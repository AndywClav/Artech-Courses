import styles from '../../styles/Share.module.css'
import { IconLinkedIn } from '../../components'

export function Share() {
  return (
    <div className={styles.share}>
      <a
        href='https://www.linkedin.com/in/andywclav/'
        rel='nofollow noopener noreferrer'
        target='_blank'
      >
        <span>Connect with Me!</span>
        <IconLinkedIn />
      </a>
    </div>
  )
}