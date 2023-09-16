import React, { useState } from 'react';

const Calculator = () => {

    const [message_1, setMessage_1] = useState("");
    const [message_2, setMessage_2] = useState("");
    const [result , setResult] = useState(0);

    const handleChange_1 = event => {

            setMessage_1(event.target.value);     
      };
    const handleChange_2 = event => {

            setMessage_2(event.target.value);

      };

     const handleCalculate = (operation) =>{
    
       if(operation === "+"){
       
            if(message_1==="" || message_2===""){
            return alert("Fill two input filed ");
            }else
            {
                const finalResult = parseFloat(message_1) + parseFloat(message_2);
                setResult(finalResult.toFixed(15));
                setMessage_1("");
                setMessage_2("");
            }  
       }
       else if(operation === "-")
       {
            if(message_1==="" || message_2===""){
                return alert("Fill two input filed ");
            }else
            {
                const finalResult = parseFloat(message_1) - parseFloat(message_2);
                setResult(finalResult.toFixed(15));
                setMessage_1("");
                setMessage_2("");
            }
       }
       else if(operation === "*")
       {
            if(message_1==="" || message_2===""){
                return alert("Fill two input filed ");
            }else
            {
                const finalResult = parseFloat(message_1) * parseFloat(message_2);
                setResult(finalResult.toFixed(15));
                setMessage_1("");
                setMessage_2("");
            }
       }
       else if(operation === "/")
       {
            if(message_1==="" || message_2===""){
                return alert("Fill two input filed ");
            }else
            {
                const finalResult = parseFloat(message_1) / parseFloat(message_2);
                setResult(finalResult.toFixed(15));
                setMessage_1("");
                setMessage_2("");
            }
       }

     }
    return (
         <div className='container mx-auto w-fit p-4 border-2 border-gray-800 rounded-xl'>
                <h1 className='text-4xl text-center p-4'> My Calculator </h1>
                <div className='flex flex-col justify-center items-center gap-2 mb-1'>
                    <input 
                        id="message"
                        name="message"
                        onChange={handleChange_1}
                        value={message_1}
                    className='bg-gray-200 border-2 border-gray-900 rounded-lg p-1'/>
                    <input 
                        id="message"
                        name="message"
                        onChange={handleChange_2}
                        value={message_2}
                    className='bg-gray-200 border-2 border-gray-900 rounded-lg p-1'/>                    
                </div>
                <div className='flex justify-center items-center gap-2 mt-3'>
                    <button onClick={()=>handleCalculate("+")} className='btn btn-sm btn-accent' >+</button>
                    <button onClick={()=>handleCalculate("-")} className='btn btn-sm btn-accent' >-</button>
                    <button onClick={()=>handleCalculate("*")} className='btn btn-sm btn-accent'> * </button>
                    <button onClick={()=>handleCalculate("/")} className='btn btn-sm btn-accent'>/</button>
                </div>
                <div>
                    <h2 className='p-2 mt-2'> Result : { result || " " }</h2>
                </div>

        </div>
    );
};

export default Calculator;