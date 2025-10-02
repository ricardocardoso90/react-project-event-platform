<<<<<<< HEAD
import './styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes/Router'

<<<<<<< HEAD
export function App() {
=======
import { Post } from './components/Post/Post';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
=======
import "./styles/_globals.scss";
import styles from "./App.module.scss";

import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
>>>>>>> 8d27078 (update commit)

import { PostProps } from "./Props/Props";

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ricardocardoso90.png",
      name: "Ricardo Cardoso",
      profession: "Desenvolvedor Front-End",
    },
    content: [
      { type: "salutation", content: "Fala galeraaa... 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir um projeto novo no meu GitHub! Deixa um feedback! 😉",
      },
      { type: "link", content: "github.com/ricardocardoso90" },
    ],
    publishedAt: new Date("2023 04 04 21:08:00"),
  },
];

function App() {
>>>>>>> 749b62b (update)
  return (
<<<<<<< HEAD
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  )
}
=======
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((item) => {
            return (
              <Post
                key={item.id}
                author={item.author}
                content={item.content}
                publishedAt={item.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
export default App;
>>>>>>> 8d27078 (update commit)
