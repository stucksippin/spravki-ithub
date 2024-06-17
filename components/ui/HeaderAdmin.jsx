import Link from 'next/link'
import React from 'react'
import Logout from '../Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'

export default async function HeaderAdmin() {
    const session = await getServerSession(NextAuthOptions)
    return (
        <header class="hidden w-full md:h-auto h-full fixed md:static md:w-80 py-10 px-5 md:flex flex-col bg-[#E6E8EA] rounded-xl">
            <nav>
                <Link href={'/'}>
                    <img class="w-[150px] lg: w-[200px]" src="/logo_C9mYhwm7.png" alt="" />
                </Link>
                <div class="buttons_group xm:text-[50px]my-auto flex max-w-[1800px] flex-col">
                    <p class="mb-5 mt-7 text-slate-400 text-lg">Действия</p>
                    <div class='flex flex-col gap-y-6'>
                        <div>
                            <Link class='hover:text-[#921CB0] text-xl md:text-xl lg:text-xl flex gap-x-[18px] ml-5' href={'/admin/main'}>Справки</Link>
                        </div>
                        <div>
                            <Link class='hover:text-[#921CB0] text-xl md:text-xl lg:text-xl flex gap-x-[18px] ml-5' href={'/admin/history'}>История</Link>
                        </div>
                    </div>
                    <p class="mb-5 mt-7 text-slate-400 text-lg">Другое</p>
                    <div class='flex flex-col gap-y-6'>
                        <div>
                            <p class='flex gap-x-[18px] ml-5 text-xl md:text-xl lg:text-xl text-red-600'>{
                                !!session && <Logout />
                            }</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}