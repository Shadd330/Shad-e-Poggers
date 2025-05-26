import styles from './Header.module.css'

export function Header() {
  return(
    <section className={styles.header}>
      <div className={styles.linkButtons}>
        <a className ={styles.btn}>
          <h1>Call</h1>
        </a>
        <a className ={styles.btn1}>
          Global
        </a>
        <a className ={styles.btn2}>
          Control
        </a>
      </div>
      <div className={styles.logo}>

      </div>
    </section>
  )
}