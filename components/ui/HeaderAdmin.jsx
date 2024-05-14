import Link from 'next/link'
import React from 'react'
import Logout from '../Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'

export default async function HeaderAdmin() {
    const session = await getServerSession(NextAuthOptions)
    return (
        <div className='container mx-auto mt-10'>
            <nav className=''>
                <ul className='flex justify-between border p-4 rounded-xl items-center'>

                    <Link href={'/'}>Справки IThub | Админская панель</Link>
                    {
                        !!session && <Logout />
                    }
                </ul>
            </nav>
        </div>
    )
}
