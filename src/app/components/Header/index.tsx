import Image from 'next/image'
import logoSvg from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="flex h-52 items-center justify-center bg-white dark:bg-gray-700">
      <Image src={logoSvg} width={126} alt="todo Logo" />
    </header>
  )
}
