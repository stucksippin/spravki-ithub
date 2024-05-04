import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='container mx-auto mt-10'>
            <nav className=''>
                <ul className='flex justify-between border p-4 rounded-xl items-center'>

                    <Link href={'/'}>Справки IThub</Link>
                    <Link href={'/'}>Заказать справку</Link>
                </ul>
            </nav>
        </div>
    )
}
