import React from 'react'
import getReferences from '../../../libs/getReferences';
import HistorySpravki from '@/components/HistorySpravki';

export default async function AdminPage() {
const references = await getReferences()
    return (
        <div className=''>
            <HistorySpravki references={references} />
        </div>
    )
}
