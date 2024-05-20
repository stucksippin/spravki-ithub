'use client'
import React, { useState } from 'react';
import { Table, Select, Button, Space, } from 'antd';


// import Filter from './Filter';

const { Option } = Select;

export default function TableRefUser({ references }) {
    const [dataSource, setDataSource] = useState(references);

    function statusChanger(status) {
        switch (status) {
            case 1:
                return "Запрошена";
            case 2:
                return "Изготавливается";
            case 3:
                return "Готова!";
            default:
                return "Выдана!";
        }
    }

    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const clearFilters = () => {
        setFilteredInfo({});
    };
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };
    const setAgeSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'age',
        });
    };

    const columns = [
        {
            title: 'ФИО',
            dataIndex: 'initials',
            key: 'initials',
        },
        {
            title: 'Группа',
            dataIndex: 'group',
            key: 'group',
        },
        {
            title: 'Вид справки',
            dataIndex: 'typeOfReference',
            key: 'typeOfReference',
        },
        {
            title: 'Дата запроса',
            dataIndex: 'dataSent',
            key: 'dataSent',
            render: (date) => (<p>{
                new Intl.DateTimeFormat('ru-RU', {
                    dateStyle: 'full',
                    timeZone: 'Europe/Moscow',
                }).format(date)}</p>)
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            filters: [
                {
                    text: 'Запрошена',
                    value: 'Запрошена',
                },
                {
                    text: 'Изготавливается',
                    value: 'Изготавливается',
                },
                {
                    text: 'Готова!',
                    value: 'Готова!',
                },
                {
                    text: 'Выдана!',
                    value: 'Выдана!',
                },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
            render: (status) => (statusChanger(status))
        },
    ];

    return (
        <>

            <Table className='mt-10' columns={columns} dataSource={dataSource} />
        </>
    );
}
