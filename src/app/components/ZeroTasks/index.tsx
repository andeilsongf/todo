import Image from 'next/image'
import clipboardSvg from '../../assets/clipboard.svg'

export function ZeroTasks() {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <Image
        src={clipboardSvg}
        width={56}
        height={56}
        alt="Clipboard Svg"
        className="mb-4"
      />
      <span className="text-base font-bold text-gray-300">
        Você ainda não tem tarefas cadastradas
      </span>
      <span className="text-base text-gray-300">
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  )
}
