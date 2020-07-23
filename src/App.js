import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import * as d3 from 'd3';
import Spiral from "./Spiral";




function App() {
    const myfunc = () => {

        // document.getElementById('chart').innerHTML="";
        // d3.selectAll("svg > *").remove();

        let randomVar = Math.floor(Math.random() * 4);
        console.log("randon",randomVar)

        let tempArray =[];
        for (let i = 0; i <100; i++) {
            let currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - i);
            console.log("in button",currentDate)
            tempArray.push({
                date: currentDate,
                value: Math.random(),
                group: currentDate.getMonth()
            });
        }
        console.log(tempArray)
        return(tempArray);
    };
    return (<>
            <Spiral data={myfunc()}/>
        </>
        )
}

export default App;
