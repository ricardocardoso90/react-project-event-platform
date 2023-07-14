import { gql } from '@apollo/client'
import { Lesson } from '../Lesson/Lesson'
import styles from './Sidebar.module.scss'

import { useQuery } from '@apollo/client'
import { GetLessonQueryResponse } from '../../types/types'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`

export function Sidebar() {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className={styles.aside}>
      <span className={styles['text-aulas']}>Cronograma de Aulas!</span>
      <div className={styles.box}>
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}