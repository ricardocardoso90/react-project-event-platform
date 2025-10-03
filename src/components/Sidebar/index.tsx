import styles from "./styles.module.css";

import { Lesson } from "../Lesson";
import { useGetLessonsQuery } from "../../graphql/generated";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className={styles.sidebar}>
      <span className={styles.sidebarTitle}>
        Cronogramas das aulas
      </span>

      <div className={styles.sidebarLessons}>
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
