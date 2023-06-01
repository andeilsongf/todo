'use client'

import { useEffect, useState } from 'react'

import { ZeroTasks } from './components/ZeroTasks'
import { Card } from './components/Card'
import { Header } from './components/Header'

import { TodoDTO } from './dto/todoDTO'
import { Loading } from './components/Loading'

import { collection, onSnapshot } from 'firebase/firestore'
import { db } from './services/firebase'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState<TodoDTO[]>([])

  useEffect(() => {
    setLoading(true)
    onSnapshot(collection(db, 'todos'), (snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data() as TodoDTO))
      setLoading(false)
    })
  }, [])

  return (
    <main className="h-screen w-full bg-gray-600">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="m-auto flex w-full max-w-4xl flex-1 flex-col justify-center py-16">
          <div className="flex w-full justify-between border-b border-solid border-gray-400 pb-8">
            <div className="flex gap-2">
              <span className="text-sm font-bold text-blue">Total</span>
              <span className="flex items-center justify-center rounded-full bg-gray-400 px-2 text-xs font-bold text-gray-100">
                {todos.length}
              </span>
            </div>
          </div>

          <div className="my-8 flex flex-col gap-4">
            {todos.length === 0 ? (
              <ZeroTasks />
            ) : (
              todos.map((todo) => (
                <Card
                  key={todo.id}
                  title={todo.title}
                  description={todo.description}
                  completed={todo.completed}
                  // onClick={() => changeTodoCompletion(todo)}
                />
              ))
            )}
          </div>
        </div>
      )}
    </main>
  )
}
