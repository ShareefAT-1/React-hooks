import React, { useMemo } from 'react'

const Expencecalc = ({num,otherstate}) => {
    const expencecalc=(num)=>{
        console.log("Working...Be Patiant pls")
        return num*2;
    };
    const result =useMemo(()=>expencecalc(num),[num]);
    // const result =expencecalc(num);

  return (
    <div>
        <h1>Result:{result}</h1>
    </div>
  )
}

export default Expencecalc