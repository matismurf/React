import { Header } from './components/Header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar';

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ljharb.png',
      name: 'ljharb',
      role: 'Engenheiro civil'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Este é um projeto react e eu estou digitando coisas aleatórias para colocar nesse parágrafo'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/sindresorhus.png',
      name: 'sindresorhus',
      role: 'Apresentador'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 2'},
      {type: 'paragraph', content: 'Este é um projeto react e eu estou digitando coisas aleatórias para colocar nesse parágrafo 2'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post=> {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>

    </div>
    
  )
}

