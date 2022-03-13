import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'


export default function BusinessAdmin() {
    return (
        
        
        <header style={ HeaderStyle }>

            <p className="h2">Business Staffing Requirements</p>
            <p/>
            <p className='h2'>Welcome Amazing Constructions LLP !!!</p>

            <div>
            <p className='h4'>Please specify your open positions so we can match workforce:</p>
            </div>

            <p className="main-para text-center"></p>
            <p className="main-para text-center"></p>
            <p className="main-para text-center"></p>
            <table border="1" className="table">
                <tr border ="2" >
                    <th className="th">JobID</th>
                    <th>Job Type </th>                    
                    <th>Job Description (ifAny) </th>
                    <th className="th"> Number of Positions </th>
                    <th className='th'>Payment Schedule </th>

                </tr>
                <tr>
                    <td>C0045</td>
                    <td><label for="scales" color="000000">Carpenter</label></td>
                    <td><input type="text" size = "100" id="scales" name="description" className="Input1" ></input> </td>
                    <td><input type="text" className = "input1" size = "5" id="scales" name="noofpositions" ></input> </td>
                    <td><input type="checkbox" id="scales" name="scales" /> Daily
                        <input type="checkbox" id="scales" name="scales" checked/>Weekly
                        <input type="checkbox" id="scales" name="scales" />Bi-Weekly
                    </td>
                    
               
                </tr>
                <tr>
                    <td>P0049</td>
                    <td><label for="scales" color="000000">Painter</label></td>
                    <td><input type="text" size = "100" id="scales" name="description" ></input> </td>
                
                    <td><input type="text" size = "200" id="scales" name="scales" ></input> </td>
                    <td><input type="checkbox" id="scales" name="scales" checked/>
                    <input type="checkbox" id="scales" name="scales" />
                    <input type="checkbox" id="scales" name="scales" /></td>
                    
                </tr>
                <tr>

                <td>PL059</td>
                    <td><label for="scales" color="000000">Plumber</label></td>
                    <td><input type="text" size = "100" id="scales" name="description" ></input> </td>
                
                    <td><input type="text" size = "200" id="scales" name="scales" ></input> </td>
                    
                    <td><input type="checkbox" id="scales" name="scales" />
                    <input type="checkbox" id="scales" name="scales" checked/>
                    <input type="checkbox" id="scales" name="scales" /></td>
                    
                </tr>          
            </table>

                <div className="buttons text-center">
                <Link to="/thankyou">
                    <button className="primary-button">Submit</button>
                </Link>
               
                </div>
                
            
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
     backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}