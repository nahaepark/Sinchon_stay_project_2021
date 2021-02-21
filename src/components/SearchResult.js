import React from 'react'
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';//npm install @material-ui/icons
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function SearchResult({
    img,
    location,
    title,
    roomtype,
    accommodation,
    beds,
    bathroom,
    price,
    total,
}) {
    const history = useHistory();
    return (
        <div className = 'searchResult'>
          <img src = {img} alt='' />
          <FavoriteBorderIcon 
          className='searchResult_heart'/>  
          <div className = 'searchResult_info'>
              <div className = 'searchResult_infoTop'>
                  <p>{location}</p>
                  <h3>{title}</h3>
                  <Button onClick = {() => history.push('/reservform')} variant='outlined'>Book this Room</Button>
                  <p>___</p>
                  <p>{roomtype}</p>
                  <p>{accommodation}</p>
                  <p>{beds}</p>
                  <p>{bathroom}</p>

              </div>
              <div className= 'searchResult_infoBootom'>
                  
                  <div className='searchResults_price'>
                      <h2>{price}</h2>
                      <p>{total}</p>
                      
                  </div>
              </div>
              <div className= 'roomselect_btn'>
                
              </div>


          </div>
        </div>
    )
}

export default SearchResult
