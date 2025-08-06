import Link from 'next/link'
import React from 'react'
import Logout from '../Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'

export default async function HeaderAdmin() {
    const session = await getServerSession(NextAuthOptions)
    return (
        <header className='bg-[#E6E8EA] w-[324px]  rounded-r-[50px] h-[100vh]'>
            <nav className='w-[250px] mx-auto' >
                <ul className='flex flex-col'>
                    <li className='text-xl text-center mt-5'>   <Link href={'/'}>IThub Справки</Link>  </li>

                    <div className='mt-10 admin__menu'>
                        <label className='text-[#838484] font-light text-[18px] h__text'>Действия</label>

                        <div className='flex'>
                            <img className='ml-8 mr-2 w-[10%] h-[10%]' src="/reference.png" alt="" />
                            <li> <Link className=' hover:text-[#921CB0] text-[20px] font-[500] span__text' href={'/admin/history'}>История справок</Link></li>
                        </div>
                        <div className='flex'>
                            <img className='w-[10%] h-[10%] ml-8  mr-2' src="/account.png" alt="" />
                            <li className='mb-5'><Link className='hover:text-[#921CB0] text-[20px] font-[500] span__text' href={'/admin/'}>Активные справки</Link></li>
                        </div>



                        <label className='text-[#838484] font-light text-[18px] h__text'>Другое</label>
                        <li className='ml-8 text-[20px] font-[500] span__text flex items-center'>
                            <img className='w-[10%] h-[10%]  mr-2' src="/exit.png" alt="" />
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
