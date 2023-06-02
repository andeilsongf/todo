'use client'

import { useEffect, useState } from 'react'

import { ZeroTasks } from './components/ZeroTasks'
import { Card } from './components/Card'
import { Header } from './components/Header'

import { TodoDTO } from './dto/todoDTO'
import { Loading } from './components/Loading'

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore'

import { db } from './services/firebase'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState<TodoDTO[]>([])

  useEffect(() => {
    setLoading(true)
    const q = query(collection(db, 'todos'))
    onSnapshot(q, (querySnapshot) => {
      const todosArray: TodoDTO[] = []
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id } as TodoDTO)
      })
      setTodos(todosArray)
      setLoading(false)
    })
  }, [])

  const toggleComplete = async (todo: TodoDTO) => {
    await updateDoc(doc(db, 'todos', todo.id), { completed: !todo.completed })
  }

  // console.log(todoRef)

  // console.log(deleteTodo)

  return (
    <main className="h-screen w-full bg-gray-600">
      <Header />
      {loading === true ? (
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
                  onClick={() => toggleComplete(todo)}
                />
              ))
            )}
          </div>
        </div>
      )}
    </main>
  )
}
