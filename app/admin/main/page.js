import React from 'react'
import getReferences from '../../../libs/getReferences';
import TableReferences from '@/components/TableReference';

export default async function AdminPage() {
    const references = await getReferences()
    return (
        <div>
            <TableReferences references={references} />
        </div>
    )
}
