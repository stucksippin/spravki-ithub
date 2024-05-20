import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center flex-col min-h-[100vh]'>
      <h1 className='font-bold text-2xl'>Not found – 404!</h1>
      <div>
        <Link className='' href="/">Go back to Home</Link>
      </div>
    </div>
  )
}