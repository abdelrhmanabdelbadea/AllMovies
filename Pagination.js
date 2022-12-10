import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({ getPage} ) {

  const handlePageClick = (data)=>{
      // console.log(data.selected + 1 )
       getPage(data.selected + 1) 
  }

  return (
    <>
       <ReactPaginate
        breakLabel="..."
        nextLabel="التالى >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel="< السابق"

        containerClassName = {'pagination justify-content-center'}

        pageClassName = {'page-item'}
        pageLinkClassName = {'page-link'}

        previousClassName = {'page-item'}
        previousLinkClassName = {'page-link'}

        nextClassName = {'page-item'}
        nextLinkClassName = {'page-link'}

        activeClassName={'active'}

        breakClassName = {'page-item'}
        breakLinkClassName = {'page-link'}
      />

    </>
  )
}

export default Pagination