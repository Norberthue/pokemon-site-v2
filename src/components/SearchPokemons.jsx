import React from 'react'
import axios from 'axios';

export default function SearchPokemons({setDataPokeName, setIsSearching , pokeName, setPokeName, setIsSearchingType , setIsLoading, setError,}) {
    
    async function getSoloPokemon(pokeName) {
        try{
            if (pokeName !== '') {
                setError(false)
                setIsLoading(true)
                var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
                setIsSearchingType(false)
                setIsSearching(true)
                setDataPokeName([res.data])
                setIsLoading(false)
            } 
        }catch(error) {
            if (error === 'TypeError') {
                console.log('type error')
            } else {
                console.log('404 err')
                setIsLoading(false)
                setError(true)
            }
        }
    }

    function changeName(event) {
        setPokeName(event.target.value)
        event.preventDefault()
    }

    function submitForm() {
        event.preventDefault()
    }

    return (
    <div className='flex mr-10  xl:mr-0 lg:self-end'>
        <form onSubmit={submitForm} className='group'>
            <div className='relative'>
                <input className='border-2 group-hover:border-blue-500 border-[#223ba8] duration-200 pt-4 pb-4 pl-4 pr-14  md:pr-48 rounded-tl-2xl rounded-bl-2xl  outline-none' value={pokeName}  onChange={(event) => {changeName(event)}} placeholder='Search Pokémon'  ></input>
                <button className='border-2 cursor-pointer absolute top-0 lg:left-96 group-hover:border-blue-500 group-hover:bg-blue-500 duration-200 border-[#223ba8] bg-[#223ba8]  pt-4 pb-4 pr-2 pl-2 text-center rounded-tr-2xl rounded-br-2xl' onClick={() => {getSoloPokemon(pokeName)}} type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M7.17006 21.07L9.29006 19C9.71331 18.5547 9.99374 17.9931 10.0953 17.3872C10.1969 16.7813 10.115 16.1589 9.86006 15.6L10.7601 14.7C12.1771 15.7605 13.9434 16.2449 15.7032 16.0555C17.4631 15.8662 19.0858 15.0172 20.2449 13.6794C21.4039 12.3417 22.0131 10.6145 21.9499 8.84565C21.8866 7.07678 21.1557 5.39754 19.9041 4.14596C18.6525 2.89438 16.9733 2.1634 15.2044 2.10017C13.4355 2.03695 11.7084 2.64617 10.3706 3.80519C9.03288 4.96421 8.18387 6.58698 7.99452 8.34683C7.80516 10.1067 8.2895 11.8729 9.35006 13.29L8.46006 14.18C7.90042 13.8951 7.26549 13.793 6.64475 13.8881C6.024 13.9831 5.44875 14.2706 5.00006 14.71L2.88006 16.83C2.31826 17.3925 2.0027 18.155 2.0027 18.95C2.0027 19.745 2.31826 20.5075 2.88006 21.07C3.15945 21.3557 3.49312 21.5828 3.86147 21.7378C4.22982 21.8928 4.62542 21.9726 5.02506 21.9726C5.42469 21.9726 5.8203 21.8928 6.18865 21.7378C6.557 21.5828 6.89066 21.3557 7.17006 21.07ZM11.4101 12.59C10.7121 11.8902 10.2371 10.9993 10.0452 10.0297C9.85331 9.06017 9.95306 8.05549 10.3319 7.14259C10.7107 6.2297 11.3515 5.44955 12.1735 4.9007C12.9955 4.35185 13.9617 4.05893 14.9501 4.05893C15.9384 4.05893 16.9046 4.35185 17.7266 4.9007C18.5486 5.44955 19.1894 6.2297 19.5682 7.14259C19.9471 8.05549 20.0468 9.06017 19.8549 10.0297C19.663 10.9993 19.1881 11.8902 18.4901 12.59C18.0256 13.0556 17.4738 13.4251 16.8664 13.6771C16.2589 13.9292 15.6077 14.0589 14.9501 14.0589C14.2924 14.0589 13.6412 13.9292 13.0337 13.6771C12.4263 13.4251 11.8745 13.0556 11.4101 12.59ZM4.34006 19.66C4.24633 19.567 4.17194 19.4564 4.12117 19.3346C4.0704 19.2127 4.04426 19.082 4.04426 18.95C4.04426 18.818 4.0704 18.6873 4.12117 18.5654C4.17194 18.4436 4.24633 18.333 4.34006 18.24L6.46006 16.12C6.55302 16.0263 6.66362 15.9519 6.78548 15.9011C6.90734 15.8503 7.03805 15.8242 7.17006 15.8242C7.30207 15.8242 7.43277 15.8503 7.55463 15.9011C7.67649 15.9519 7.78709 16.0263 7.88006 16.12C7.97378 16.213 8.04818 16.3236 8.09895 16.4454C8.14972 16.5673 8.17586 16.698 8.17586 16.83C8.17586 16.962 8.14972 17.0927 8.09895 17.2146C8.04818 17.3364 7.97378 17.447 7.88006 17.54L5.76006 19.66C5.6671 19.7537 5.55649 19.8281 5.43463 19.8789C5.31278 19.9296 5.18207 19.9558 5.05006 19.9558C4.91805 19.9558 4.78734 19.9296 4.66548 19.8789C4.54362 19.8281 4.43302 19.7537 4.34006 19.66Z"></path></svg></button>
            </div>
           
        </form> 
        
    </div>
  )
}
