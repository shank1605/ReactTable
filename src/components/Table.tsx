import Loader from "react-js-loader"
import { User } from '../types/User'
import Pagination from './Pagination'
import UserTableBody from './UserTableBody'
import UserTableHeader from './UserTableHeader'

type SortOrder = 'asc' | 'desc'

interface Column<T> {
    header: string
    accessor: keyof T
}

interface Props {
    data: User[]
    columns: Column<User>[]
    loading: boolean
    sortOrder: SortOrder
    handleSort: () => void
    currentPage: number
    totalPages: number
    setCurrentPage: (page: number) => void
    viewAll: boolean
    setViewAll: (viewAll: boolean) => void
    refreshData: () => void
}

const Table = ({
    data,
    columns,
    loading,
    sortOrder,
    handleSort,
    currentPage,
    totalPages,
    setCurrentPage,
    viewAll,
    setViewAll,
    refreshData,
}: Props) => {
    if (loading) {
        return <Loader type="box-rotate-z" title={"Loading"} size={100} />
    }
    console.log(data)
    return (
        <div>
            <button onClick={refreshData}>Re-fetch Data</button>
            <table>
                <UserTableHeader columns={columns} sortOrder={sortOrder} handleSort={handleSort} />
                <UserTableBody data={data} columns={columns} />
            </table>
            <footer>
                {!viewAll && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
                )}
                <button onClick={() => setViewAll(!viewAll)}>
                    {viewAll ? 'View Paginated' : 'View All'}
                </button>
            </footer>
        </div>
    )
}

export default Table