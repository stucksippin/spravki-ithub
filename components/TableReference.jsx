'use client'
import React, { useState } from 'react';
import { Table, Select } from 'antd';
import Filter from './Filter';

const { Option } = Select;

export default function TableReferences({ references }) {
  const [dataSource, setDataSource] = useState(references);

  const handleStatusChange = async (recordId, newStatus) => {

    try {
      const resp = await fetch("/api/actions/updateReference/", {
        method: 'PATCH',
        body: JSON.stringify({
          status: newStatus,
          id: recordId
        })
      });

      if (resp) {
        const editIndex = dataSource.map((el) => el.id).indexOf(recordId)
        let temp = [...dataSource]
        temp[editIndex].status = newStatus
        setDataSource(temp)
      }
      console.log('Статус обновлен');
    } catch (error) {
      console.error("Ошибка при обновлении статуса справки", error);
    }
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
      render: (date) => (<p>{date.toDateString()}</p>)
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => (
        <Select value={record.status} onChange={(value) => handleStatusChange(record.id, value)}>
          <Option key='requested' value={1}>Запрошена!</Option>
          <Option key='inProgress' value={2}>В процессе</Option>
          <Option key='ready' value={3}>Готова!</Option>
          <Option key='done' value={4}>Выдана!</Option>
        </Select>
      ),
    },
  ];

  return (
    <>
      <Filter dataSource={dataSource} references={references} setDataSource={setDataSource} />
      <Table className='mt-10' columns={columns} dataSource={dataSource} />
    </>
  );
}
