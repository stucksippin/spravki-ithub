'use client'

import { signOut } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Logout() {
    return (
        <button
            className="text-red-500 hover:text-red-400"
            onClick={() => {
                signOut()
                redirect('/')
            }}
        >
            Выйти
        </button>
    )
}
