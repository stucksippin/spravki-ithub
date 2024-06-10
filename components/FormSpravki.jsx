'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function ReferencesForm() {

    const { register, handleSubmit } = useForm();
    const [status, setStatus] = useState(" ")

    const onSubmit = async (data) => {
        try {
            const resp = await fetch("/api/actions/create", {
                method: 'POST',
                body: JSON.stringify(data)
            });

            const result = await resp.json()
            setStatus(result.result)
            console.log(status)
            console.log('Сообщение отправлено')
        } catch (error) {
            console.error("Ошибка при отправке данных в телеграмме", error)
        }
    }



    return (
        <form className="flex flex-col w-[500px]" onSubmit={handleSubmit(onSubmit)}>

            <label>Группа</label>
            <select className="bg-[#F7F7F8] mb-5 py-3 px-5 rounded-xl" {...register("group")}>
                <option value="ИСП1">ИСП1</option>
                <option value="ИСП2">ИСП2</option>
                <option value="ИСП3">ИСП3</option>
            </select>

            <label>Вид справки</label>
            <select className="bg-[#F7F7F8] mb-5 py-3 px-5 rounded-xl" {...register("typeOfReferences")}>
                <option value="Транспортная справка">Транспортная справка</option>
                <option value="Справка об образовании">Справка об образовании</option>
                <option value="Справка об обучении">Справка об обучении</option>
            </select>
            <input className="border p-2 bg-[#921CB0] text-white rounded-xl w-[50%] self-center mt-5" type="submit" />

            <div className="text-red-500 justify-center flex w-fit self-center mt-10 "> {status}</div>

        </form>
    );
}