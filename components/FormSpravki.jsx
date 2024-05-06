'use client'
import { useForm } from "react-hook-form";


export default function ReferencesForm() {

    const { register, handleSubmit } = useForm();

    //bot

    const onSubmit = async (data) => {
        try {
            await fetch("/api/actions/create", {
                method: 'POST',
                body: JSON.stringify(data)


            });
            console.log('Сообщение отправлено')
        } catch (error) {
            console.error("Ошибка при отправке данных в телеграмме", error)
        }


    }


    return (
        <form className="flex flex-col container mx-auto w-[50%] mt-20" onSubmit={handleSubmit(onSubmit)}>
            <label>ФИО</label>
            <input className="border mb-5 py-3 px-5 rounded-xl" placeholder="Enter initials" {...register("initials", { required: true, maxLength: 50 })} />

            <label>Группа</label>
            <select className="border mb-5 py-3 px-5 rounded-xl" {...register("group")}>
                <option value="ИСП1">ИСП1</option>
                <option value="ИСП2">ИСП2</option>
                <option value="ИСП3">ИСП3</option>
            </select>

            <label>Вид справки</label>
            <select className="border mb-5 py-3 px-5 rounded-xl" {...register("typeOfReferences")}>
                <option value="справка 1">Документ о предыдущем образовании(скан)</option>
                <option value="справка 2">Справка о стипендии</option>
                <option value="справка 3">Справка об обучении</option>
            </select>
            <input className="border p-2 hover:bg-orange-300 rounded-xl w-[50%] self-center mt-5" type="submit" />
        </form>
    );
}