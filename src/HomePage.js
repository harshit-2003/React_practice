import React, { useState } from "react";
import Axios from 'react';

import pic from ".vit logo.jpeg";
function HomePage(){
    
 return (
  <>

  <img src={pic} />

 <table className="min-w-full text-center sm:text-sm">
                <tbody>
                  <tr>
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap">

                    <h2> Students ---------------------------------------</h2>
                    <button className="bg-[#0083CA] hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >Login</button>
                      <label htmlFor='username'>Username</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      <input placeholder='Username' className='border' id='username' name='username' 
                    onChange={ (e)=>setUsername(e.target.value)} value={username} required/>
                    </td>
                  </tr>
                  </tbody>
                  </table>
    </>
 )
                  
}

export default HomePage;