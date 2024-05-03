import { getServerSession } from 'next-auth';
import { NextAuthOptions } from '@/config';
import React from 'react'


export default async function HomePage() {

  // const session = await getServerSession(NextAuthOptions);

  // if (!session || !session.user) {
  //   console.error('Ошибка: Невозможно получить данные о пользователе');

  //   return;
  // }

  // const { role } = session.user;
  // console.log(role)


  // if (role === 'admin') {
  //   redirect('/admin');
  // }

  return (
    <div>HomePage</div>
  )
}
