import React from 'react'
import getReferences from '../../libs/getReferences';
import TableReferences from '@/components/TableReference';

export default async function AdminPage() {
<<<<<<< Updated upstream
const references = await getReferences()
=======

    const references = await getReferences()
>>>>>>> Stashed changes
    return (
        <div>
            <TableReferences references={references} />
        </div>
    )
}
