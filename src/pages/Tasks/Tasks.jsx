import styles from './Tasks.module.css'
import { Header } from "../../components/Header/Header"

export function Tasks(){
  return (
    <div className={styles.tasksPage}>
      <Header/>
    </div>
  )
}