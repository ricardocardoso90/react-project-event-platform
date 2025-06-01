import styles from './Lesson.module.scss'

import ptBR from 'date-fns/locale/pt-BR'
import { isPast, format } from 'date-fns'
import { CheckCircle, Lock } from 'phosphor-react'

import { LessonProps } from '../../types/types'
import { Link, useParams } from 'react-router-dom'

export function Lesson(props: LessonProps) {
  const { params } = useParams<{ params: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {locale: ptBR});

  const isActive = params === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className={isActive ? styles['box-active'] : styles.box}>
      <span className={styles['box-date']}>
        {availableDateFormatted}
      </span>
      <div className={styles.container}>
        <header className={styles.header}>
          {isLessonAvailable ? (
            <span className={styles['span-text1']}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className={styles['span-text2']}>
              <Lock size={20} />
              Em breve!
            </span>
          )}
          <span className={styles['span-live']}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={styles['text-footer']}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}