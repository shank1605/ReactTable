import React from 'react'
import { User } from '../types/User'
import { getNestedValue } from '../utils/GetNestedValue'

interface Props {
    data: User[]
    columns: any
}

const UserTableBody: React.FC<Props> = ({ data, columns }) => (
    <tbody>
        {data.map((item, index) => (
            <tr key={index}>
                {columns.map((column: any) => (
                    <td key={column.accessor as string}>
                        {getNestedValue(item, column.accessor as string)}
                    </td>
                ))}
            </tr>
        ))}
    </tbody>
)

export default UserTableBody