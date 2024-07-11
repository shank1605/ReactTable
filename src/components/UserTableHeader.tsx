import React from 'react'

interface Props {
    columns: any
    sortOrder: 'asc' | 'desc'
    handleSort: () => void
}

const UserTableHeader: React.FC<Props> = ({ columns, sortOrder, handleSort }) => {
    const defaultSortField = 'Name'
    return (
        <>
            <thead>
                <tr>
                    {columns.map((column: any) => {
                        const isDefaultSortField = column.header === defaultSortField
                        return (
                            <th key={column.accessor as string} {...(isDefaultSortField ? { onClick: handleSort } : {})}>
                                {column.header} {isDefaultSortField && (sortOrder === 'asc' ? '↑' : '↓')}
                            </th>
                        )
                    })}
                </tr>
            </thead>
        </>
    )
}

export default UserTableHeader