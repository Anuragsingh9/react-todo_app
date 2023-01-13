import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import './TempratureComponent.css'

const TempratureComponent = () => {
    console.log("Temp")

    const [tempValue,setTempValue] = useState(19);

    const [tempColor,setTempColor] = useState('#dfe8eb')

    const handleIncrease = () => {
        setTempValue(tempValue => (tempValue + 1));
        if(tempValue >= 20){
            setTempColor('#d9ca95')
        }
    }

    const handleDecrease = () => {
        if(tempValue <= 20){
            setTempColor('#b5d8e5')
        }
        setTempValue(tempValue - 1);
    }

    return ( <>
       <div className='temp-body'>
        <div style={{display:"flex"}}>
        <Link to="/first" style={{color:"white"}}>First</Link>&nbsp;
        <Link to="/second" style={{color:"white"}}>Second </Link>&nbsp;
        <Link to="/third" style={{color:"white"}}>Third </Link>&nbsp;
        <Link to="/register" style={{color:"white"}}>Register </Link>&nbsp;
        <Link to="/todo" style={{color:"white"}}>Todo App </Link>&nbsp;
        

        </div>
            <div className='temp-value' style={{backgroundColor:`${tempColor}`}}>
                <h5 style={{fontSize:"30px"}}>{tempValue + '\'C'}</h5>
            </div>
            <div className='buttons'>
                <button className='temp-btns' onClick={handleIncrease}>Increase</button>
                <button className='temp-btns' onClick={handleDecrease}>Decrease</button>
            </div>
       </div>
    </>
        
    )
}

export default TempratureComponent;