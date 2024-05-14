import { NextAuthOptions } from '@/config'
import { getServerSession } from 'next-auth'
import prisma from '@/libs/prisma';
import getReferencesById from '@/libs/getReferencesById';


export default async function AccountPage() {


    const session = await getServerSession(NextAuthOptions)
    const references = await getReferencesById(session.user.id)
    console.log(references);
    let data = null


    if (session) {
        data = await prisma.user.findFirst({
            where: {
                id: session.user.id
            }
        })
    }

    function statusChanger(status) {
        switch (status) {
            case 1:
                return "В обработке"
            case 2:
                return "Изготавливается"
            case 3:
                return "Готова!"
            default:
                return ""
        }
    }


    return (
        <div className='container bg-white rounded-xl pt-10'>


            {
                data && (
                    <>
                        <h2 className='font-bold text-center text-2xl'>Профиль</h2>
                        <div className='flex flex-col mt-5'>
                            <span className='text-lg'>Пользователь: <span className='font-bold text-indigo-500'>{data.initials}</span> </span>
                        </div>
                        <div className='flex justify-between mt-10'>


                            <div className='flex'>

                                <div >
                                    <span className='text-xl font-bold mb-10'>Все cправки:</span>
                                    <div className='w-[800px] flex flex-wrap'>
                                        {
                                            references.map((reference) => (
                                                <div className='border flex flex-col mt-2 mr-5 p-3' key={reference.id}>
                                                    <span className='font-semibold mb-3'>{reference.typeOfReference}</span>
                                                    <span>Статус: {statusChanger(reference.status)}</span>
                                                    <span>Заказчик: {reference.initials}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                            </div>

                        </div>
                        <hr className='mt-10' />
                    </>
                )
            }

        </div>
    )
}