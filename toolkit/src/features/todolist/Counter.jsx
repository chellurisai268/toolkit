import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { incCount,decCount, recCount } from './counterSlice'
function Counter() {
 var {count} =  useSelector(state=>state.counter )//hook  state state ni techukunthadi
  var dispatch= useDispatch()//methode
 
  return (
    <div>
      <h1>Counter:{count}</h1> 
      <button onClick={()=>{dispatch(incCount())}}>INC</button> 
      <button onClick={()=>{dispatch(decCount())}}>DEC</button>
      <button onClick={()=>(dispatch(recCount()))}>rec</button>
    </div>
  )
}

export default Counter