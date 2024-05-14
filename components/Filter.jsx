import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default function Filter({ references, dataSource, setDataSource }) {
    const handleFilterChange = (value) => {

        let filteredReferences = [];
        switch (value) {
            case 1:
                filteredReferences = references.filter(dataSource => dataSource.status === 1);
                break;
            case 2:
                filteredReferences = references.filter(dataSource => dataSource.status === 2);
                break;
            case 3:
                filteredReferences = references.filter(dataSource => dataSource.status === 3);
                break;
            case 4:
                filteredReferences = references.filter(dataSource => dataSource.status === 4);
                break;
            default:
                filteredReferences = references;
                break;
        }

        if (setDataSource) {
            setDataSource(filteredReferences);
        }
    };

    return (
        <Select className='mt-10 w-[150px]' onChange={handleFilterChange} defaultValue="all">
            <Option key="all" value="all">Все</Option>
            <Option key='requested' value={1}>Запрошена!</Option>
            <Option key='inProgress' value={2}>В процессе</Option>
            <Option key='ready' value={3}>Готова!</Option>
            <Option key='done' value={4}>Выдана!</Option>
        </Select>
    );
}
