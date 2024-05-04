import React from 'react'

export default function FormSpravki() {
    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('src/api/actions/create', {
            method: 'PUT',
            body: formData
        })

        const result = await resp.json()

    }
    return (
        <form className='flex flex-col mt-10 items-center'>
            <input className='border w-1/3 mb-4 p-3 rounded-lg' type="text" placeholder='ФИО' />
            <select className='border w-1/3 mb-4 p-3 rounded-lg' name="Группа" id="" >
                <option value="">исп1</option>
                <option value="">исп2</option>
                <option value="">исп3</option>
            </select>
            <select className='border w-1/3 mb-4 p-3 rounded-lg' name="Группа" id="" >
                <option value="">Справка 1</option>
                <option value="">Справка 2</option>
                <option value="">Справка 3</option>
            </select>
            <button className='border p-3 w-fit rounded-lg'> Заказать</button>
        </form>
    )
}
