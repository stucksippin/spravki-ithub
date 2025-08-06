'use client'

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Logout() {
    const router = useRouter()

    const handleLogout = async () => {
        await signOut({ redirect: false }) // Отключаем автоматическое перенаправление
        router.push('/') // Вручную перенаправляем на главную
        router.refresh() // Обновляем страницу для очистки кеша
    }

    return (
        <button
            className="text-red-500 hover:text-red-400"
            onClick={handleLogout}
        >
            Выйти
        </button>
    )
}