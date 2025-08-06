import React from 'react'
import getReferences from '../../libs/getReferences';
import TableReferences from '@/components/TableReference';

export default async function AdminPage() {
    const references = await getReferences()
    return (
        <div className='flex flex-col'>
            <span className='text-3xl mx-auto'>Активные справки</span>
            <TableReferences references={references} />
        </div>
    )
}
