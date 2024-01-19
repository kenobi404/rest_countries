import React from 'react'
import { useLoaderData ,Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import countriesData from '../../data.json'



const Country = () => {
  const {flags,name,nativeName,population,region,subregion
  ,topLevelDomain,
  currencies,
  languages,
  capital,
  borders,
  
} = useLoaderData(); 

const findCountry = (code) => {
  const result = countriesData.find(country=> country.alpha3Code === code);
  return result.name;
}



  return (
    <div className='country_details'>
     <Link className='back-btn' to='/'><IoMdArrowRoundBack />Back</Link>
     <div className="country_wrapper">

      <div className="flag">
        <img src={flags.svg} alt="" />
      </div>

      <div className="details">
          <h3>{name}</h3>

          <div className="left">
            <div><span className='strong'>Native Name: </span>{nativeName}</div>
            <div><span className='strong'>Population: </span>{population}</div>
            <div><span className='strong'>Region: </span>{region}</div>
            <div><span className='strong'>Sub Region: </span>{subregion}</div>
            <div><span className='strong'>Capital: </span>{capital??'No Capital'}</div>
          </div>

        <div className="right">

        <div><span className='strong'>Top Level Domain: </span>{topLevelDomain}</div>

        {currencies&&<div className='currencies'>
          <span className='strong'>Currencies: </span>
          <span>
          {currencies.map((currency,key) => {
            if(key===currencies.length-1){
              return <span key={key}>{currency.name}</span>
            }
            else{
              return <span key={key}>{currency.name}, </span>
            }
          })}
          </span>
          </div>}

          <div className="languages">
            <span className='strong'>Languages : </span>
            <span>
          {languages.map((language,key) => {
            if(key===languages.length-1){
              return <span key={key}>{language.name}</span>
            }
            else{
              return <span key={key}>{language.name}, </span>
            }
          })}
          </span>
          </div>


        </div>
        {borders && <div className="border_countries">
            <h3>Border Countries :</h3>
            <div>
              { borders.map(country => <Link to={`/country/${country}`} key={country}className='flat_pill'>{findCountry(country)}</Link>)}
            </div>
          </div>}
      </div>
     </div>
    </div>
  )
}

export default Country

export const countryLoader = async({params}) => {
  const {code} = params
 

  const countryData =  countriesData.find((country) => country.alpha3Code==code)
  
  if(countryData) return countryData

  throw new Error('no country with this code')
  
  
}