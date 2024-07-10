import React from 'react'

interface Props {
    currentPage: number
    totalPages: number
    setCurrentPage: (page: number) => void
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, setCurrentPage }) => (
    <div>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
        </button>
        <span>
            Page {currentPage} of {totalPages}
        </span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
            Next
        </button>
    </div>
)

export default Pagination