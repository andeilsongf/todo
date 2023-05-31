import { Header } from '@/app/components/Header'
import Image from 'next/image'
import plusSvg from '../../assets/plus.svg'

export default function Task() {
  return (
    <main className="flex h-screen w-full flex-col bg-gray-600">
      <Header />
      <div className="m-auto -mt-8 flex w-full max-w-4xl flex-1 justify-center">
        <form action="" className="flex flex-col items-center gap-2">
          <input
            type="text"
            placeholder="Title"
            className="h-14 w-[640px] rounded-lg border border-solid border-gray-700 bg-gray-500 p-4 text-gray-300 placeholder-gray-300 outline-none"
          />
          <textarea
            placeholder="Description"
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
