import React from 'react'
import { Table } from "antd";
import getReferences from '../src/libs/getReferences';



export default async function AdminPage() {

    const dataSource = await getReferences()

    return (
        <div className=''>


        </div>
    )
}
