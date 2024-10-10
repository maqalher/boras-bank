import Image from 'next/image'

export const BackgroundRadialRight = () => {
  return (
    <div className='right-0 absolute -z-50 top-0'>
        <Image src="/assets/background-floated-right.png" width={850} height={650} alt='Circle Right' />
    </div>
  )
}
