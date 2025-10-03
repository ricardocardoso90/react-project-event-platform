import "@vime/core/themes/default.css";
import styles from "./styles.module.css";

import { DefaultUi, Player, Youtube } from "@vime/react";
import { useGetLessonBySlugQuery } from "../../graphql/generated";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className={styles["video-wrapper"]}>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className={styles["video-wrapper"]}>
      <div className={styles["video-container"]}>
        <div className={styles["video-player"]}>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className={styles["video-content"]}>
        <div className={styles["video-header"]}>
          <div className={styles["video-info"]}>
            <h1>{data.lesson.title}</h1>
            <p>{data.lesson.description}</p>

            {data.lesson.teacher && (
              <div className={styles.teacher}>
                <img src={data.lesson.teacher.avatarURL} alt="" />
                <div className={styles["teacher-info"]}>
                  <strong>{data.lesson.teacher.name}</strong>
                  <span>{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>

          <div className={styles["video-actions"]}>
            <a href="" className={`${styles.btn} ${styles["btn-discord"]}`}>
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a href="" className={`${styles.btn} ${styles["btn-challenge"]}`}>
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className={styles["video-resources"]}>
          <a href="" className={styles.resource}>
            <div className={styles["resource-icon"]}>
              <FileArrowDown size={24} />
            </div>
            <div className={styles["resource-text"]}>
              <strong>Material complementar</strong>
              <p>
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className={styles["resource-arrow"]}>
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className={styles.resource}>
            <div className={styles["resource-icon"]}>
              <FileArrowDown size={24} />
            </div>
            <div className={styles["resource-text"]}>
              <strong>Wallpapers exclusivos</strong>
              <p>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className={styles["resource-arrow"]}>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
