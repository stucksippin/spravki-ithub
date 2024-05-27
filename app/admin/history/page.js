import React from 'react'
import getReferenceStatus from '../../../libs/getReferenceStatus';
import HistorySpravki from '@/components/HistorySpravki';

export default async function AdminPage() {
const references = await getReferenceStatus()

    return (
        <div className=''>
            <HistorySpravki references={references} />
        </div>
    )
}
