'use client'
import React, { useState, useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Select } from 'antd';
import Highlighter from 'react-highlight-words';

export default function History({references}){

    const [dataSource, setDataSource] = useState(references);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
      };
      const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
      };
      const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div
            style={{
              padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: 'block',
              }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({
                    closeDropdown: false,
                  });
                  setSearchText(selectedKeys[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  close();
                }}
              >
                close
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1677ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{
                backgroundColor: '#ffc069',
                padding: 0,
              }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });

const columns = [
    {
      title: 'ФИО',
      dataIndex: 'initials',
      key: 'initials',
      ...getColumnSearchProps('initials'),
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
      onFilter: (value, record) => record.group.startsWith(value),
    },
    {
      title: 'Вид справки',
      dataIndex: 'typeOfReference',
      key: 'typeOfReference',
      filters: [
        {
          text: 'Транспортная справка',
          value: 'Транспортная справка',
        },
        {
          text: 'Справка об образовании',
          value: 'Справка об образовании',
        },
      ],
      onFilter: (value, record) => record.typeOfReference.startsWith(value),
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
  ];

  return (
    <>
      <Table className='mt-10' columns={columns} dataSource={dataSource} />
    </>
  );
}