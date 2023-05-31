import Image from 'next/image'
import loadingGif from '../../assets/loading.gif'

export function Loading() {
  return (
    <div className="flex items-center justify-center p-32">
      <Image src={loadingGif} width={20} height={20} alt="Loading Gif" />
    </div>
  )
}
