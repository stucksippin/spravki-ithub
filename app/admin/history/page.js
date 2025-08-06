import React from 'react'
import getReferenceStatus from '../../../libs/getReferenceStatus';
import HistorySpravki from '@/components/HistorySpravki';

export default async function AdminPage() {
    const references = await getReferenceStatus()

    return (
        <div className='flex flex-col'>
            <span className='text-3xl mx-auto'>Архивные справки</span>
            <HistorySpravki references={references} />
        </div>
    )
}
