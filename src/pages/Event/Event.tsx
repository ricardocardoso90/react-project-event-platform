import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Video } from '../../components/Video/Video'
import { useParams } from 'react-router-dom'

import styles from './Event.module.scss'

export function Event() {
  const { params } = useParams<{ params: string }>();

  return (
    <div className={styles.event}>
      <Header />

      <main className={styles.main}>
        {params
          ? <Video lessonSlug={params} />
          : <div style={{ flex: 1 }}> <h1>Escolha uma Aula!</h1> </div>}
        <Sidebar />
      </main>
    </div>
  )
}

//A tela completa do sitema vai ter 1440px;