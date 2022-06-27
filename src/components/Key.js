import React, { useContext } from 'react'
import { AppContext } from '../App'

function Key({keyVal,bigKey, disabled}) {
  const {onSelectLetter, onDelete, onEnter} = useContext(AppContext);
 
  const handleClick = ()=>{
    
  if(keyVal==="Enter"){
    onEnter();
   
  }
  else if(keyVal ==="Delete"){
    onDelete();
   
  }

  else {
  onSelectLetter(keyVal);
  }}
  return (
    <div className = "key"  id = {bigKey ? "big": disabled && "disabled"} onClick={handleClick}> 
      {keyVal}
    </div>
  )
}

export default Key
