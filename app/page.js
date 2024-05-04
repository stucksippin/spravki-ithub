// import { getServerSession } from 'next-auth';
// import { NextAuthOptions } from '@/config';
import React from 'react'
import FormSpravki from './src/components/FormSpravki'


export default async function HomePage() {

  return (
    <div>
      <FormSpravki />
    </div>
  )
}
