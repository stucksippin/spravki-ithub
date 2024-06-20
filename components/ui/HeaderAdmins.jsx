import Link from 'next/link'
import React from 'react'
import Logout from '../Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'

export default async function HeaderAdmin() {
    const session = await getServerSession(NextAuthOptions)
    return (
        <header className='hidden w-full md:h-auto h-full fixed md:static md:w-80 py-10 px-5 md:flex flex-col bg-[#E6E8EA] rounded-xl'>
            <nav className='hidden w-full md:h-auto h-full fixed md:static md:w-80 py-10 px-5 md:flex flex-col bg-[#E6E8EA] rounded-xl' >
                <ul className='flex flex-col'>
                    <li className='text-xl text-center mt-5'>   <Link href={'/'}>
                        <img src="/logo_C9mYhwm7.png" alt="" /></Link>  </li>
                    <div className='xm:text-[50px]my-auto flex max-w-[1800px] flex-col'>
                        <label className='mb-5 mt-7 text-slate-400 text-lg'>Действия</label>
                        <li> <Link className='text-xl md:text-xl lg:text-xl flex gap-x-[18px] ml-5 hover:text-[#921CB0]' href={'/admin/history'}>История справок</Link></li>
                        <li className='mb-5'><Link className='flex gap-x-[18px] ml-5 text-xl md:text-xl lg:text-xl hover:text-[#921CB0]' href={'/admin/main'}>Студенты</Link></li>

                        <p className='mb-5 mt-7 text-slate-400 text-xl md:text-xl lg:text-lg'>Другое</p>
                        <li className='ml-10'>
                            {
                                !!session && <Logout />
                            }
                        </li>
                    </div>

                </ul>
            </nav>
        </header >
    )
}
