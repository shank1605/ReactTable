import React from 'react'

interface Props {
    columns: any
    sortOrder: 'asc' | 'desc'
    handleSort: () => void
}

const UserTableHeader: React.FC<Props> = ({ columns, sortOrder, handleSort }) => {
    return (
        <>
            <thead>
                <tr>
                    {columns.map((column: any) => (
                        <th key={column.accessor as string} {...(column.header === 'Name' ? { onClick: handleSort } : {})}>
                            {column.header} {column.header === 'Name' && (sortOrder === 'asc' ? '↑' : '↓')}
                        </th>
                    ))}
                </tr>
            </thead>
        </>
    )
}

export default UserTableHeader