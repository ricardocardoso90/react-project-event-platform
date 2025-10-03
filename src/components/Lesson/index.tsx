import styles from "./styles.module.css";
import ptBR from "date-fns/locale/pt-BR";

import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className={styles.lessonLink}>
      <span className={styles.lessonDate}>{availableDateFormatted}</span>

      <div
        className={`${styles.lessonCard} ${isActiveLesson ? styles.active : ""}`}
      >
        <header className={styles.lessonHeader}>
          {isLessonAvailable ? (
            <span
              className={`${styles.lessonStatus} ${isActiveLesson ? styles.statusActive : styles.statusAvailable}`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className={`${styles.lessonStatus} ${styles.statusSoon}`}>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={`lesson-type ${isActiveLesson ? "type-active" : "type-default"
              }`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={`lesson-title ${isActiveLesson ? "title-active" : ""}`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
