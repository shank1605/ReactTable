import React from 'react'
import useTable from '../hooks/useTable'
import { fetchUsers } from '../utils/FetchUsers'
import { User } from '../types/User'
import Table from '../components/Table'

const TablePage: React.FC = () => {
    const {
        data: users,
        loading,
        currentPage,
        totalPages,
        viewAll,
        sortOrder,
        setCurrentPage,
        setViewAll,
        handleSort,
        loadData,
    } = useTable<User>({
        fetchData: fetchUsers,
        defaultSortField: 'name',
        itemsPerPage: 5
    })

    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Username', accessor: 'username' },
        { header: 'Company Name', accessor: 'company.name' },
        { header: 'Email', accessor: 'email' },
        { header: 'Street', accessor: 'address.street' },
        { header: 'City', accessor: 'address.city' },
        { header: 'Postcode', accessor: 'address.zipcode' },
    ]

    return (
        <div>
            <h1>User List</h1>
            <Table
                data={users}
                columns={columns as any}
                loading={loading}
                sortOrder={sortOrder}
                handleSort={handleSort}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                viewAll={viewAll}
                setViewAll={setViewAll}
                refreshData={loadData}
            />
        </div>
    )
}

export default TablePage