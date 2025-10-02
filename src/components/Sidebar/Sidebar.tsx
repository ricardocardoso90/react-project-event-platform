<<<<<<< HEAD
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
=======
import styles from "./Sidebar.module.scss";
import { Avatar } from "../Avatar/Avatar";
import { PencilLine } from "phosphor-react";
>>>>>>> 8d27078 (update commit)

export function Sidebar() {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSONS_QUERY);

  return (
<<<<<<< HEAD
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
=======
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar imgProps="https://github.com/ricardocardoso90.png" />
        <strong>Ricardo Cardoso</strong>
        <span>Desenvolvedor Front-End</span>
      </div>

      <footer>
        <a href="#">
          {" "}
          <PencilLine style={{ marginRight: "8px" }} size={20} /> Editar seu
          perfil
        </a>
      </footer>
    </aside>
  );
};
>>>>>>> 8d27078 (update commit)
