import { useEffect, useState } from 'react'

type SortOrder = 'asc' | 'desc'

interface TableConfig<T> {
  fetchData: () => Promise<T[]>
  defaultSortField: keyof T
  itemsPerPage: number
}

const useTable = <T>({ fetchData, defaultSortField, itemsPerPage = 5 }: TableConfig<T>) => {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [viewAll, setViewAll] = useState<boolean>(false)
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')


  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    const fetchedData = await fetchData()
    setData(fetchedData)
    setLoading(false)
  }

  const sortData = (data: T[], order: SortOrder, sortField: keyof T): T[] => {
    return [...data].sort((a, b) => {
      if (a[sortField] < b[sortField]) return order === 'asc' ? -1 : 1
      if (a[sortField] > b[sortField]) return order === 'asc' ? 1 : -1
      return 0
    })
  }

  const getPaginatedData = (data: T[], currentPage: number, itemsPerPage: number): T[] => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return data.slice(startIndex, startIndex + itemsPerPage)
  }

  const sortedData = sortData(data, sortOrder, defaultSortField)
  const displayedData = viewAll ? sortedData : getPaginatedData(sortedData, currentPage, itemsPerPage)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))
  }

  return {
    data: displayedData,
    loading,
    currentPage,
    totalPages,
    viewAll,
    sortOrder,
    setCurrentPage,
    setViewAll,
    handleSort,
    loadData,
  }
}

export default useTable