import { NextAuthOptions } from '@/config'
import { getServerSession } from 'next-auth'
import prisma from '@/libs/prisma';
import getReferencesById from '@/libs/getReferencesById';
import { Tooltip } from "antd";
import TableRefUser from '@/components/TableRefUser';



export default async function AccountPage() {
    const session = await getServerSession(NextAuthOptions);
    const references = await getReferencesById(session.user.id);
    let data = null;

    if (session) {
        data = await prisma.user.findFirst({
            where: {
                id: session.user.id
            }
        });
    }



    function dataChange(date) {
        try {
            return new Intl.DateTimeFormat('ru-RU', {
                dateStyle: 'full',
                timeZone: 'Europe/Moscow',
            }).format(date);
        } catch (error) {
            console.error('Invalid date:', date);
            return 'Invalid date';
        }
    }


    function tooltipContent(status) {
        switch (status) {
            case 1:
                return `Сейчас ваша справка обрабатывается администрацией. \n Примерное время обработки: в течение суток`;
            case 2:
                return "Ваша справка обработана администраицией и отправлена на изготовление. \n Примерное время изготовления: от 4 до 5 суток";
            case 3:
                return "Ваша справка изготовлена, вы можете забрать ее!";
            default:
                return "Справка выдана";
        }
    }




    return (
        <div className='contaier w-[90%] mx-auto bg-white rounded-xl pt-10'>

            <>
                <h2 className='font-bold text-center text-2xl'>Профиль</h2>
                <div className='flex flex-col mt-5'>
                    <span className='text-lg'>Пользователь: <span className='font-bold text-[#921CB0]'>{data.initials}</span></span>
                </div>


                <div>
                    <TableRefUser references={references} />
                </div>



            </>
        </div>
    );
}

{/* {references.map((reference) => (
                                        <div className='border flex flex-col mt-2 mr-5 p-3 relative' key={reference.id}>
                                            <span className='font-semibold mb-3'>{reference.typeOfReference}</span>

                                            <div className='mt-5'>
                                                <span>Статус: {statusChanger(reference.status)}</span>
                                                <Tooltip title={tooltipContent(reference.status)} placement='topLeft'>
                                                    <button className='ml-2'>ⓘ</button>
                                                </Tooltip>
                                            </div>
                                            <span>Заказчик: {reference.initials}</span>
                                            <span>Время заказа: {dataChange(reference.data)}</span>
                                        </div>
                                    ))} */}