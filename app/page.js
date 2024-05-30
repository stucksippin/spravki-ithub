
import { NextAuthOptions } from '@/config';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'


export default async function MainPage() {
  const session = await getServerSession(NextAuthOptions);

  if (!session || !session.user) {
    redirect('/login')
  }

  const { role } = session.user;



  if (role === 'admin') {
    redirect('/admin');
  } else {
    redirect('/user');
  }


  return (
    <div>здарова ты как сюда попал<br />
      &#128075;
    </div>
  )

}
