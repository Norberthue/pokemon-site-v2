import React, { useState } from 'react'

export default function Pagination({paginate,totalPosts, postsPerPage, currentPage, setCurrentPage,activePage, setActivePage}) {
  const pageNumbers = [];

  for (let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i)
  }

  

  const handlePageClick = (number) =>{
    setActivePage(number)
    window.location.href = '#pokemonList'
  }

  return ( 
    <div>
      <div className='flex gap-3 items-center justify-center  text-white mt-20 '>
        
        <button onClick={() =>{setCurrentPage(currentPage >= 2 ? currentPage - 1 : currentPage)
          ;handlePageClick(currentPage >= 2 ? currentPage - 1 : currentPage);paginate(currentPage >= 2 ? currentPage - 1 : currentPage)}}
          className={`${currentPage >= 2 ? 'opacity-100' : 'opacity-20'}`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#fff" d="M11.28 16.9467L18.8267 24.48C18.9506 24.605 19.0981 24.7042 19.2606 24.7718C19.423 24.8395 19.5973 24.8744 19.7733 24.8744C19.9494 24.8744 20.1236 24.8395 20.2861 24.7718C20.4486 24.7042 20.5961 24.605 20.72 24.48C20.9683 24.2302 21.1077 23.8922 21.1077 23.54C21.1077 23.1877 20.9683 22.8498 20.72 22.6L14.12 15.9333L20.72 9.33333C20.9683 9.08351 21.1077 8.74557 21.1077 8.39333C21.1077 8.04108 20.9683 7.70314 20.72 7.45333C20.5965 7.32734 20.4493 7.22712 20.2868 7.15845C20.1243 7.08979 19.9497 7.05406 19.7733 7.05333C19.5969 7.05406 19.4224 7.08979 19.2599 7.15845C19.0974 7.22712 18.9502 7.32734 18.8267 7.45333L11.28 14.9867C11.1447 15.1115 11.0367 15.2631 10.9628 15.4317C10.8889 15.6004 10.8508 15.7825 10.8508 15.9667C10.8508 16.1508 10.8889 16.3329 10.9628 16.5016C11.0367 16.6703 11.1447 16.8218 11.28 16.9467Z"></path></svg>
        </button>
          
        <div onClick={() =>{setCurrentPage(1); handlePageClick(1 );paginate(1 )}} key={1} className={`border-2 cursor-pointer  pt-2 pl-4 pr-4 pb-2 rounded-lg font-semibold  text-center 
        ${activePage === 1 ? 'bg-blue-600': ''}`}>
          <a className='select-none'>1</a>
        </div>

        {currentPage > 3 && <div>
          <p>...</p>
        </div>}

        {currentPage <= 3 && <div onClick={() =>{setCurrentPage(2); handlePageClick(2 );paginate(2 )}} key={2} className={`border-2 cursor-pointer  pt-2 pl-4 pr-4 pb-2 rounded-lg font-semibold  text-center 
        ${activePage === 2  ? 'bg-blue-600': ''}`}>
          <a className='select-none'>2</a>
        </div>}

        {currentPage <= 3 && <div onClick={() =>{setCurrentPage(3); handlePageClick(3 );paginate(3 )}} key={3} className={`border-2 cursor-pointer  pt-2 pl-4 pr-4 pb-2 rounded-lg font-semibold  text-center 
        ${activePage === 3  ? 'bg-blue-600': ''}`}>
          <a className='select-none'>3</a>
        </div>}
          
        {currentPage > 3 && currentPage < 9  && <div onClick={() =>{handlePageClick(currentPage );paginate(currentPage )}} key={currentPage} className={`border-2 cursor-pointer  pt-2 pl-4 pr-4 pb-2 rounded-lg font-semibold  text-center 
        ${activePage === currentPage  ? 'bg-blue-600': ''}`}>
          <a className='select-none'>{currentPage }</a>
        </div>}


        {currentPage >= 9 && <div onClick={() =>{setCurrentPage(9); handlePageClick(9 );paginate(9 )}} key={9} className={`border-2 cursor-pointer  pt-2 pl-4 pr-4 pb-2 rounded-lg font-semibold  text-center 
        ${activePage === 9  ? 'bg-blue-600': ''}`}>
          <a className='select-none'>9</a>
        </div>}

        {currentPage >= 9 && <div onClick={() =>{setCurrentPage(10); handlePageClick(10);paginate(10)}} key={10} className={`border-2 cursor-pointer  pt-2 pl-4 pr-4 pb-2 rounded-lg font-semibold  text-center 
        ${activePage === 10 ? 'bg-blue-600': ''}`}>
          <a className='select-none'>10</a>
        </div>}

        { currentPage < 9 &&<div>
          <p>...</p>
        </div>}

        <div onClick={() =>{setCurrentPage(11); handlePageClick(11);paginate(11)}} key={11} className={`border-2 cursor-pointer  pt-2 pl-4 pr-4 pb-2 rounded-lg font-semibold  text-center 
        ${activePage === 11 ? 'bg-blue-600': ''}`}>
          <a className='select-none'>11</a>
        </div>
       
        <button onClick={() =>{setCurrentPage(currentPage <= 10 ? currentPage + 1 : currentPage);
          handlePageClick(currentPage <= 10 ? currentPage + 1 : currentPage);paginate(currentPage <= 10 ? currentPage + 1 : currentPage)}}
          className={`${currentPage <= 10 ? 'opacity-100' : 'opacity-20'}`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#fff" d="M20.72 15.0533L13.1733 7.52001C13.0494 7.39504 12.9019 7.29584 12.7394 7.22815C12.577 7.16046 12.4027 7.12561 12.2267 7.12561C12.0506 7.12561 11.8764 7.16046 11.7139 7.22815C11.5514 7.29584 11.4039 7.39504 11.28 7.52001C11.0317 7.76982 10.8923 8.10776 10.8923 8.46001C10.8923 8.81226 11.0317 9.15019 11.28 9.40001L17.88 16.0667L11.28 22.6667C11.0317 22.9165 10.8923 23.2544 10.8923 23.6067C10.8923 23.9589 11.0317 24.2969 11.28 24.5467C11.4035 24.6727 11.5507 24.7729 11.7132 24.8415C11.8757 24.9102 12.0503 24.9459 12.2267 24.9467C12.4031 24.9459 12.5776 24.9102 12.7401 24.8415C12.9026 24.7729 13.0498 24.6727 13.1733 24.5467L20.72 17.0133C20.8553 16.8885 20.9633 16.7369 21.0372 16.5683C21.1111 16.3996 21.1492 16.2175 21.1492 16.0333C21.1492 15.8492 21.1111 15.6671 21.0372 15.4984C20.9633 15.3297 20.8553 15.1782 20.72 15.0533V15.0533Z"></path></svg>
        </button>
      </div>
    </div>
  )
}
