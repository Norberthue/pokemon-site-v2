import React, { useState } from 'react'

export default function Pagination({paginate,totalPosts, postsPerPage}) {
  const pageNumbers = [];

  for (let i=1; i <=Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const [activePage, setActivePage] = useState(1)

  const handlePageClick = (number) =>{
    setActivePage(number)
  }

  return (
    <div >
      <ul className='flex gap-10 items-center justify-center  text-white mt-20 '>
        {pageNumbers.map((number) => (
          <li onClick={() =>{handlePageClick(number);paginate(number)}} key={number} className={`border-2 cursor-pointer  pt-2 pl-4 pr-4 pb-2 rounded-lg font-semibold  text-center 
          ${activePage === number ? 'bg-blue-600': ''}`}>
            <a className='select-none'>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
