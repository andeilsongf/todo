'use client'

import { Header } from '@/app/components/Header'
import Image from 'next/image'
import plusSvg from '../../assets/plus.svg'
import { FormEvent, useState } from 'react'
import { getDatabase, ref, push } from 'firebase/database'
import firebaseApp from '../../services/firebase'

export default function Task() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const db = getDatabase(firebaseApp)
  const todosRef = ref(db, '/todos')

  const createTodo = (e: FormEvent<EventTarget>) => {
    e.preventDefault()
    const todo = {
      title,
      description,
      completed: false,
    }

    push(todosRef, todo)
    setTitle('')
    setDescription('')
  }

  return (
    <main className="flex h-screen w-full flex-col bg-gray-600">
      <Header />
      <div className="m-auto -mt-8 flex w-full max-w-4xl flex-1 justify-center">
        <form
          action=""
          className="flex flex-col items-center gap-2"
          onSubmit={createTodo}
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-14 w-[640px] rounded-lg border border-solid border-gray-700 bg-gray-500 p-4 text-gray-300 placeholder-gray-300 outline-none"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-6 h-32 w-[640px] rounded-lg border border-solid border-gray-700 bg-gray-500 p-4 text-gray-300 placeholder-gray-300 outline-none"
          />
          <button
            value="Add"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-solid border-darkblue bg-blue"
          >
            <span className="font-bold text-gray-100 ">Add</span>
            <Image src={plusSvg} width={16} height={16} alt="Plus Signal" />
          </button>
        </form>
      </div>
    </main>
  )
}
