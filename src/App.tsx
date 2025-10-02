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

import { PostProps } from './Props/Props';

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ricardocardoso90.png",
      name: 'Ricardo Cardoso',
      profession: 'Programador'
    },
    content: [
      { type: 'salutation', content: 'Fala galeraaa... 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. O nome do projeto é Ignite Teams!' },
      { type: 'link', content: 'github.com/ricardocardoso90' },
    ],
    publishedAt: new Date('2023 04 04 21:08:00')
  },
];

function App() {
>>>>>>> 749b62b (update)
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  )
}
