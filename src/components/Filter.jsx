
import { IoSearch } from "react-icons/io5";

const Filter = ({filter,setFilter}) => {
   
  return (
    <form className='filter'>
      <div className="search_input">
        <IoSearch />
        <input type="text" 
        value={filter.search}
        placeholder='Search for Country'
        onChange={(e)=>setFilter(prev => ({
            ...prev,
            search : e.target.value,
        }))}
        />
      </div>
      <div className="select_wrapper">
        <select name="region" id="" onChange={(e)=>setFilter(prev => ({...prev,region : e.target.value}))}>
            <option value="all">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
        </div>
    </form>
  )
}

export default Filter