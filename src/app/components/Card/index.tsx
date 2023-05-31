import Image from 'next/image'
import completedSvg from '../../assets/completed.svg'
import trashSvg from '../../assets/trash.svg'

interface CardProps {
  title: string
  description: string
  completed: boolean
}

export function Card({ title, description, completed }: CardProps) {
  return (
    <div className="flex min-h-[60px] w-full items-start justify-between gap-2 rounded-lg border border-solid border-gray-400 bg-gray-500 p-4">
      <span className="flex">
        {completed === false ? (
          <span className="mt-[3px] h-4 w-4 rounded-full border border-solid border-blue" />
        ) : (
          <Image
            src={completedSvg}
            width={16}
            height={16}
            alt="Completed Icon"
          />
        )}
      </span>
      <div className="flex flex-grow flex-col gap-1">
        <span
          className={`${completed ? 'text-gray-300' : 'text-blue'} ${
            completed ? 'line-through' : ''
          } text-sm font-bold`}
        >
          {title}
        </span>

        <span
          className={`${completed ? 'line-through' : ''} ${
            completed ? 'text-gray-300' : 'text-gray-100'
          } text-sm`}
        >
          {description}
        </span>
      </div>
      <span>
        <Image src={trashSvg} width={24} height={24} alt="Trash icon" />
      </span>
    </div>
  )
}
