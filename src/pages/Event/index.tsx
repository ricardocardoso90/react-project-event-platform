import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';
import { Video } from '../../components/Video';
import { Sidebar } from '../../components/Sidebar';

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className={styles['event-container']}>
      <Header />
      <main className={styles['event-main']}>
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className={styles['event-empty']} />
        )}
        <Sidebar />
      </main>
    </div>
  );
};
