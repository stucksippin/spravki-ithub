import Link from 'next/link'
import React from 'react'
import Logout from '../Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'

export default async function Header() {
    const session = await getServerSession(NextAuthOptions)
    return (
        <div className='container mx-auto mt-10'>
            <nav className=''>
                <ul className='flex justify-between border p-4 rounded-xl items-center'>

                    <div>
                        <Link href={'/'}>Справки IThub</Link>
                    </div>
                    <div >
                        <Link className='mr-10' href={'/user/reference'}>Заказать справку</Link>
                        <Link className='mr-10' href={'/user/account'}>Личный аккаунт</Link>

                        {
                            !!session && <Logout />
                        }
                    </div>

                </ul>
            </nav>
        </div>
    )
}
