import Link from 'next/link'
import React from 'react'
import Logout from '../Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'

export default async function HeaderAdmin() {
    const session = await getServerSession(NextAuthOptions)
    return (
        <header className='bg-[#E6E8EA] w-[300px] font-semibold rounded-r-[50px] h-[100vh]'>
            <nav className='w-[250px] mx-auto' >
                <ul className='flex flex-col'>
                    <li className='text-xl text-center mt-5'>   <Link href={'/'}>IThub</Link>  </li>
                    <div className='mt-10'>
                        <label className='text-[#838484]'>Действия</label>
                        <li> <Link className='mr-10 ml-10 hover:text-[#921CB0]' href={'/admin/history'}>История справок</Link></li>
                        <li className='mb-5'><Link className='mr-10 ml-10 hover:text-[#921CB0]' href={'/admin/'}>Студенты</Link></li>

                        <label className='text-[#838484]'>Другое</label>
                        <li className='ml-10'>
                            {
                                !!session && <Logout />
                            }
                        </li>
                    </div>

                </ul>
            </nav>
        </header>
    )
}
