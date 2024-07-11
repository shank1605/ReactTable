import React from 'react'

interface Props {
    currentPage: number
    totalPages: number
    setCurrentPage: (page: number) => void
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, setCurrentPage }) => {
    const handleNext = () => setCurrentPage(currentPage + 1)
    const handlePrevious = () => setCurrentPage(currentPage - 1)
    return (
        <div>
            <button disabled={currentPage === 1} onClick={handlePrevious}>
                Previous
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button disabled={currentPage === totalPages} onClick={handleNext}>
                Next
            </button>
        </div>
    )
}

export default Pagination