'use client'

import { useEffect, useState } from 'react'
import { getDatabase, onValue, ref } from 'firebase/database'

import { ZeroTasks } from './components/ZeroTasks'
import { Card } from './components/Card'
import { Header } from './components/Header'
import firebaseApp from './services/firebase'

import { TodoDTO } from './dto/todoDTO'
import { Loading } from './components/Loading'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState<TodoDTO[]>([])
  const db = getDatabase(firebaseApp)

  useEffect(() => {
    setLoading(true)
    const todosRef = ref(db, '/todos')

    onValue(todosRef, (snapshot) => {
      const todos = snapshot.val()
      const newTodoList: TodoDTO[] = []

      for (const id in todos) {
        newTodoList.push({
          id,
          ...todos[id],
        })
      }
      setTodos(newTodoList)
      setLoading(false)
    })
  }, [db])

  return (
    <main className="h-screen w-full bg-gray-600">
      <Header />
      <div className="m-auto flex w-full max-w-4xl flex-1 flex-col justify-center py-16">
        <div className="flex w-full justify-between border-b border-solid border-gray-400 pb-8">
          <div className="flex gap-2">
            <span className="text-sm font-bold text-blue">Active tasks</span>
            <span className="flex items-center justify-center rounded-full bg-gray-400 px-2 text-xs font-bold text-gray-100">
              {todos.length}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-sm font-bold text-purple">Finish</span>
            <span className="flex items-center justify-center rounded-full bg-gray-400 px-2 text-xs font-bold text-gray-100">
              0
            </span>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="my-8 flex flex-col gap-4">
            {todos.length === 0 ? (
              <ZeroTasks />
            ) : (
              todos.map((todo) => (
                <Card
                  key={todo.id}
                  title={todo.title}
                  description={todo.description}
                  completed={true}
                />
              ))
            )}
          </div>
        )}
      </div>
    </main>
  )
}
