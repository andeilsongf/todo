import { Header } from './components/Header'
import { ZeroTasks } from './components/ZeroTasks'

export default function Home() {
  return (
    <main className="h-screen w-full bg-gray-600">
      <Header />
      <div className="m-auto flex w-full max-w-4xl flex-1 justify-center py-16">
        <div className="flex w-full justify-between border-b border-solid border-gray-400 pb-8">
          <div className="flex gap-2">
            <span className="text-sm font-bold text-blue">Active tasks</span>
            <span className="flex items-center justify-center rounded-full bg-gray-400 px-2 text-xs font-bold text-gray-100">
              0
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-sm font-bold text-purple">Finish</span>
            <span className="flex items-center justify-center rounded-full bg-gray-400 px-2 text-xs font-bold text-gray-100">
              0
            </span>
          </div>
        </div>
      </div>
      <ZeroTasks />
    </main>
  )
}
