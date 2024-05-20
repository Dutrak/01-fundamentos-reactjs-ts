import { Header } from "./components/Header";
import { Author, Post, content } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css'

interface Post {
  id: number,
  author: Author,
  content: content[],
  publishedAt: Date
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/dutrak.png",
      name: "Dutrak",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2024-05-03 20:40:00")
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      { type: "paragraph", content: 'Fala galeraa 👋' },
      { type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: "link", content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2024-05-10 20:40:00")
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
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

