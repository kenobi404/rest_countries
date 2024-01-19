import React, { useEffect, useRef, useState } from 'react'
import Filter from '../components/Filter';
import {Link} from 'react-router-dom'
import countriesData from '../../data.json'

import ReactPaginate from 'react-paginate';
import { useLoaderData } from 'react-router-dom';

export const Countries = () => {
    const [filter,setFilter] = useState({
        search: '',
        region : 'all'
    })

    const allCountries = useLoaderData();
    const [filteredCountries,setFilteredCountries] = useState(allCountries)    

    useEffect(()=>{
     const {search,region} = filter;
     if(region!=='all') setFilteredCountries(allCountries.filter(country => country.region===region))
     else{
        setFilteredCountries(allCountries)
    }
     setFilteredCountries(prev => prev.filter(country => country.name.toLowerCase().includes(search.toLowerCase())))
     setItemOffset(0)

    },[filter.search,filter.region])

    
    const ref = useRef(null)
    

    


    
    const itemsPerPage = 30;
    const [itemOffset, setItemOffset] = useState(0);
      
    const endOffset = itemOffset + itemsPerPage;
   
    const currentItems = filteredCountries.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredCountries.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filteredCountries.length;
       
        setItemOffset(newOffset);
        ref.current.scrollIntoView()
        
      }


      let content = null;

      if(filteredCountries.length==0){
        content = <h1 style={{gridColumn : '1/-1'}}>No country with this search parameter</h1>
      }

  
  return (
    <>  
        <Filter filter={filter} setFilter={setFilter} />
        <div className="countries" ref={ref} >
            
            {content??currentItems.map(country => (
                <Link to={country.alpha3Code} key={country.alpha3Code}>
                <div className="country" >
                    <div className="country_image">
                        <img src={country.flags.svg} alt="country_flag" />
                    </div>
                    <div className="country_info">
                        <div className="name bold">{country.name}</div>
                        <div className="population"><span>Population: </span>{country.population}</div>
                        <div className="region"><span>Region: </span>{country.region}</div>
                        <div className="capital"><span>Capital: </span>{country.capital??'No capital'}</div>
                    </div>
                </div>
                </Link>
            ))}
           

        </div>
        {pageCount>1 && <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                activeClassName={"active"}
                
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
       
                renderOnZeroPageCount={null}
            />}
    </>
  )
}


export const countriesLoaders = async () => {
    return countriesData;
  }