'use client'
import React, {useState} from 'react';
import { Table, Select } from 'antd';

export default function History({references}){
    const [dataSource, setDataSource] = useState(references);

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
      filters: [
        {
          text: 'ИСП1',
          value: 'ИСП1',
        },
        {
          text: 'ИСП2',
          value: 'ИСП2',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
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
      render: (text, record) => (
        <Select className='w-[165px]' value={record.status} onChange={(value) => handleStatusChange(record.id, value)}>
          <Option key='requested' value={1}>Запрошена!</Option>
          <Option key='inProgress' value={2}>Изготавливается!</Option>
          <Option key='ready' value={3}>Готова!</Option>
          <Option key='done' value={4}>Выдана!</Option>
        </Select>
      ),
    },
  ];

  return (
    <>
      <Table className='mt-10' columns={columns} dataSource={dataSource} />
    </>
  );
}