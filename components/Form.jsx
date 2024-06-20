'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Form() {

    const [error, setError] = useState("")
    const router = useRouter()

    async function submitHandler(e) {

        e.preventDefault()
        const formData = new FormData(e.target)

        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (response?.error) {
            setError(true)
        }
        else if (!response?.error) {
            router.push('/')
            router.refresh()
        }

    }


    return (
        <>

            <form className='bg-[#F7F7F8] form__login  p-5 w-1/3 flex flex-col mx-auto rounded-xl' onSubmit={submitHandler}>
                <span className='text-center mb-5'>Войдите в IThub | Справки</span>
                <input className='p-3 my-3 rounded-md' required type="text" name='email' placeholder="Введите email" />
                <input className=' p-3 my-3 rounded-md' required type="password" name='password' placeholder="Введите пароль" />
                <span className='text-[#921CB0] hover:text-[#bf51db] cursor-pointer text-center'><Link href={'/forgotPassword'}>Забыли пароль?</Link></span>
                <button className='border  py-2 rounded-md w-full mt-7 mx-auto bg-[#921CB0] hover:bg-[#bf51db] text-white'>Войти</button>
                {
                    error && <p className='text-red-400 mt-10'>Введены некорректные данные, проверьте правильность пароля или логина</p>
                }
            </form>
        </>
    )
}
