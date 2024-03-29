'use client'

import { Header } from '@/app/components/Header'
import Image from 'next/image'
import plusSvg from '../../assets/plus.svg'
import { useState } from 'react'
import 'firebase/database'
import { collection, addDoc } from 'firebase/firestore'

import { db } from '../../services/firebase'

export default function Task() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTodo = (e: any) => {
    e.preventDefault()
    addDoc(collection(db, 'todos'), {
      title,
      description,
      completed: false,
    })
    setTitle('')
    setDescription('')
  }

  return (
    <main className="flex h-screen w-full flex-col bg-gray-100 dark:bg-gray-600">
      <Header />
      <div className="m-auto -mt-8 flex w-full flex-1 justify-center p-0 lg:max-w-4xl lg:p-4">
        <form
          action=""
          className="flex w-full flex-col items-center gap-2 p-4 lg:w-fit lg:p-0"
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-14 w-full rounded-lg border border-solid p-4 text-gray-300 placeholder-gray-300 outline-none dark:border-gray-700 dark:bg-gray-500 lg:w-[640px]"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-6 h-32 w-full rounded-lg border border-solid p-4 text-gray-300 placeholder-gray-300 outline-none dark:border-gray-700 dark:bg-gray-500 lg:w-[640px]"
          />
          <button
            value="Add"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-solid border-darkblue bg-blue"
            onClick={addTodo}
          >
            <span className="font-bold text-gray-100 ">Add</span>
            <Image src={plusSvg} width={16} height={16} alt="Plus Signal" />
          </button>
        </form>
      </div>
    </main>
  )
}
