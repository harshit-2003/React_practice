import React from 'react';
import styled from 'styled-components';
import { useTable, usePagination } from 'react-table';

// You need to install react-table and styled-components to run this file.
// Note: For using Data Table, installing these things are necessary.
// npm install react-table
// npm install styled-components

const Styles = styled.div `
  font-family: 'Segoe UI';

  select{
    text-align: center;
    margin-top: 8%; 
    margin-bottom: 8px;
    margin-left: 74%;
  }
 
  .pagination{
    width: 100%;
    margin-left: 100%;
    padding: 8px;
    justify-content: right;
  }
  .goback button{
    width: 40%;
    height: 22px;
    background-color:#0083CA;
    color: #ffffff;
    border: #ffffff;
    border-radius: 2px;
    margin-left: 150px;
    
  }
  table {
    width: 80%;
    margin-left: 10%;
    border-spacing: 1px solid;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th{
      background-color:#0083CA;
      color: #ffffff;
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({columns, data}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, 
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  // Render Data Table UI
  return (
    <>
        <div> 
        <select 
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[1, 4, 6, 15, 30].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show entries   {pageSize}
            </option>
          ))}
        </select>
        </div>

       <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className='down'>
      <tr>
      
      <td>
      <div className='goback'>
        <button> Go Back</button>
      </div>
      </td>

      <td>

     {/* Pagination */}
     <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
      </div>
      </td>
      </tr>
      </div>
      
    </>

  )
}

function FacTable() {
  const data = [
    {
      school: 'SITE',
      year: '2020',
      sem: 'Fall',
      course: 'Btech',
      
    },
    {
      school: 'SITE',
      year: '2020',
      sem: 'Fall',
      course: 'Btech',
     
    },
    {
      school: 'SITE',
      year: '2020',
      sem: 'Fall',
      course: 'Btech',
      
    },
    {
      school: 'SITE',
      year: '2020',
      sem: 'Fall',
      course: 'Btech',
     
    },
    {
      school: 'SITE',
      year: '2020',
      sem: 'Fall',
      course: 'Btech',
      
    },
    {
      school: 'SITE',
      year: '2020',
      sem: 'Fall',
      course: 'Btech',
     
    },
    {
      school: 'SITE',
      year: '2020',
      sem: 'Fall',
      course: 'Btech'
      
    },
    {
      school: 'SITE',
      year: '2020',
      sem: 'Fall',
      course: 'Btech',
     
    },
    {
      school: 'SITE',
      year: '2020',
      sem: 'Fall',
      course: 'Btech',
      
    },                                
  ]

  const columns = [
    {
      Header: 'School',
      accessor: 'school'
    }, {
      Header: 'Year',
      accessor: 'year'
    }, {
      Header: 'Semester',
      accessor: 'sem'
    },  {
      Header: 'Course Name',
      accessor: 'course'
      }
  ]

  return (
    <Styles>
      <Table data={data} columns={columns}/>
    </Styles>
  )

}

export default FacTable;