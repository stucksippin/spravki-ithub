'use client'
import { signIn } from 'next-auth/react'
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
        <form className='border p-5 w-1/3 flex flex-col mx-auto' onSubmit={submitHandler}>
            <input className='border p-3 my-3 rounded-md' required type="text" name='email' placeholder="Введите email" />
            <input className='border p-3 my-3 rounded-md' required type="password" name='password' placeholder="Введите пароль" />
            <button className='border px-10 py-2 rounded-md w-fit mx-auto '>Войти</button>
            {
                error && <p className='text-red-400 mt-10'>Введены некорректные данные, проверьте правильность пароля или логина</p>
            }
        </form>
    )
}
