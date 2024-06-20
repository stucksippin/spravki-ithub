import Link from 'next/link'
import React from 'react'
import Logout from '../Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'

export default async function Header() {
    const session = await getServerSession(NextAuthOptions)
    return (
        <header className='bg-[#E6E8EA] w-[324px] font-semibold rounded-r-[50px] h-[100vh] header shrink-0'>
            <nav className='w-[250px] mx-auto' >
                <ul className='flex flex-col'>
                    <li className='text-xl text-center mt-5'>   <Link href={'/'}>IThub | Справки</Link>  </li>
                    <div className='mt-10 user__menu'>
                        <label className='text-[#838484] text-[18px] font-light h__text'>Действия</label>
                        <div className='flex'>
                            <img className='ml-8 mr-2 w-[10%] h-[10%]' src="/account.png" alt="" />
                            <li> <Link className='hover:text-[#921CB0] text-[20px] font-[500] span__text' href={'/user/account'}>Личный аккаунт</Link></li>
                        </div>
                        <div className='flex'>
                            <img className='w-[10%] h-[10%] ml-8  mr-2' src="/reference.png" alt="" />
                            <li className='mb-5'><Link className='hover:text-[#921CB0] text-[20px] font-[500] span__text' href={'/user/reference'}>Заказать справку</Link></li>

                        </div>
                        <label className='text-[#838484] text-[18px] font-light h__text'>Другое</label>
                        <li className='ml-8 text-[20px] font-[500] span__text flex items-center'>
                            <img src="/exit.png" className='w-[10%] h-[10%]  mr-2' alt="" />
                            {
                                !!session && <Logout />
                            }
                        </li>
                    </div>

                </ul>
            </nav>
        </header>
        // <div className='container mx-auto mt-10'>
        //     <nav className=''>
        //         <ul className='flex justify-between border p-4 rounded-xl items-center'>

        //             <div>
        //                 <Link href={'/'}>Справки IThub</Link>
        //             </div>
        //             <div >
        //                 <Link className='mr-10' href={'/user/reference'}>Заказать справку</Link>
        //                 <Link className='mr-10' href={'/user/account'}>Личный аккаунт</Link>

        //                 {
        //                     !!session && <Logout />
        //                 }
        //             </div>

        //         </ul>
        //     </nav>
        // </div>
    )
}
