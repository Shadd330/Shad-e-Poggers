import styles from './Header.module.css'

export function Header() {
  return(
    <section className={styles.header}>
      <div className={styles.linkButtons}>
        <a>
          a
        </a>
        <a>
          b
        </a>
        <a>
          c
        </a>
      </div>
      <div className={styles.logo}>

      </div>
    </section>
  )
}