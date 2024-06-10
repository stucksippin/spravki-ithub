import Link from 'next/link'
import React from 'react'
import Logout from '../Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'

export default async function Header() {
    const session = await getServerSession(NextAuthOptions)
    return (
        <header className='bg-[#E6E8EA] w-[300px] font-semibold rounded-r-[50px] h-[100vh]'>
            <nav className='w-[250px] mx-auto' >
                <ul className='flex flex-col'>
                    <li className='text-xl text-center mt-5'>   <Link href={'/'}>IThub</Link>  </li>
                    <div className='mt-10'>
                        <label className='text-[#838484]'>Действия</label>
                        <li> <Link className='mr-10 ml-10 hover:text-[#921CB0]' href={'/user/account'}>Личный аккаунт</Link></li>
                        <li className='mb-5'><Link className='mr-10 ml-10 hover:text-[#921CB0]' href={'/user/reference'}>Заказать справку</Link></li>

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
