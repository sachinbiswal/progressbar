import React, { useState } from 'react'
import './style.css'

function PriceList() {
    const [name,setName]=useState('');
    const [price,setPrice]=useState('')
    const [list,setList]=useState([])
    const [sales,setSales]=useState(0)
    const handleSubmit=()=>{
       if(price&&name){
        const updatedList={productName:name,productPrice:price};
        setList([...list,updatedList])
        setSales((prod)=>prod+parseFloat(price))
        setName("")
        setPrice("")
       }
    }
  return (
    <div className='container'>

        <div className='top'>

            <div className='inputdiv'>
            <label htmlFor="">Product Name * <br /> 
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/></label><br/><br/>
            <label htmlFor="">Product Price * <br />  
                <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </label>           
             </div>
        <button  onClick={handleSubmit}>Submit</button>
        </div>

        <div className='down' >
        <h2>Output Result</h2>
            <div className='calculationunderdiv'>
            <p className='prices'>Sale Price</p>
        <ul>
        {
            list.map((e)=>{
                return (
                    <li>{e.productName} - {e.productPrice}</li>
                )
            })
        }
        </ul>
        <p className='prices'>Total Price</p>
        {sales}
            </div>
        </div>
    </div>
  )
}

export default PriceList