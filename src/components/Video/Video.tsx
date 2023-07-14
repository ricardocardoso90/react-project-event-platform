import styles from './Video.module.scss'
import { Player, Youtube, DefaultUi } from '@vime/react'
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'
// import { Button } from '../Button/Button'

import '@vime/core/themes/default.css'
import { gql, useQuery } from '@apollo/client'

import { GetLessonBySlugResponse } from '../../types/types'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`

interface videoProps {
  lessonSlug: string;
}

export function Video({lessonSlug}: videoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug
    }
  });

  if (!data) {
    return (
      <div style={{ flex: 1 }}>
        <h1>Carregando...</h1>
      </div>
    )
  }

  return (
    <div className={styles.player}>
      <div className={styles['player-box']}>
        <div className={styles['player-content']}>
          <Player>
            <Youtube videoId={data?.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles['info-users']}>
          <div className={styles['info-users1']}>
            <h1>{data.lesson.title}</h1>
            <p>{data.lesson.description}</p>
            <div className={styles.teacher}>
              <img src={data.lesson.teacher.avatarURL} alt="" />
              <div className={styles['teacher-info']}>
                <strong>{data.lesson.teacher.name}</strong>
                <span>{data.lesson.teacher.bio}</span>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <a href="#" className={styles['button-1']}>
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a href="#" className={styles['button-2']}>
              <Lightning size={24} />
              Acesse o Desafio
            </a>

            {/* <Button
              text='Comunidade do Discord'
              icon={<DiscordLogo size={24} />}
            />

            <Button
              text='Acesse o Desafio'
              icon={<Lightning size={24} />}
            /> */}
          </div>
        </div>
        <div className={styles['material-complementary']}>
          <a href="#" className={styles['complementary-1']}>
            <div className={styles['complementary-icon']}>
              <FileArrowDown size={40} />
            </div>
            <div className={styles['complementary-desc']}>
              <strong>Material Complementar</strong>
              <p>Acesse o material complementar para acelerar o seu desenvolvimento.</p>
            </div>
            <div className={styles['complementary-arrow']}>
              <CaretRight size={24} />
            </div>
          </a>

          <a href="#" className={styles['complementary-1']}>
            <div className={styles['complementary-icon']}>
              <FileArrowDown size={40} />
            </div>
            <div className={styles['complementary-desc']}>
              <strong>Wallpapers exclusivos</strong>
              <p>Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina.</p>
            </div>
            <div className={styles['complementary-arrow']}>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}