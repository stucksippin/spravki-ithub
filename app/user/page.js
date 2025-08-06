import { NextAuthOptions } from '@/config'
import { getServerSession } from 'next-auth'
import prisma from '@/libs/prisma';
import getReferencesById from '@/libs/getReferencesById';
import TableRefUser from '@/components/TableRefUser';



export default async function AccountPage() {
    const session = await getServerSession(NextAuthOptions);
    const references = await getReferencesById(session.user.id);
    let data = null;

    if (session) {
        data = await prisma.user.findFirst({
            where: {
                id: parseInt(session.user.id)
            }
        });
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