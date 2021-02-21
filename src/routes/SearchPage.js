import React, {useState} from 'react'
import './SearchPage.css'
import "react-date-range/dist/styles.css";// main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from 'react-date-range'; //datepicker install => npm i react-date-range, npm i date-fns 

import { addDays } from "date-fns"
import SearchResult from '../components/SearchResult'


function SearchPage() {
    
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 1),
          key: "selection",
        },
      ])
    
    return (
        <div className = 'datepicker'>
           <h1>Which dates would you like to book?</h1>
           <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            months={2}
            direction="horizontal"
            
            />
            <SearchResult 
                img ='https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
                location = 'Seoul'
                title = 'Room1'
                roomtype = 'Room Type : Single Room'
                Accommodation = 'Accommodate : 1 person'
                beds =  'Bed : 1 Single bed'
                bathroom = 'Bath Room : Shared (with family / other guests)'
                price = '$30 / night'
                total = '$117 total'/>
                
            <SearchResult 
                img ='https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                location = 'Seoul'
                title = 'Room2'
                roomtype = 'Room Type : Single Room'
                Accommodation = 'Accommodate : 1 person'
                beds =  'Bed : 1 Single bed'
                bathroom = 'Bath Room : Shared (with family / other guests)'
                price = '$30 / night'
                total = '$117 total'/>
            <SearchResult 
                img ='https://images.unsplash.com/photo-1603794067602-9feaa4f70e0c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                location = 'Seoul'
                title = 'Room3'
                roomtype = 'Room Type : Single Room'
                Accommodation = 'Accommodate : 1 person'
                beds =  'Bed : 1 Single bed'
                bathroom = 'Bath Room : Shared (with family / other guests)'
                price = '$30 / night'
                total = '$117 total'/>
        </div>
    )
}

export default SearchPage
