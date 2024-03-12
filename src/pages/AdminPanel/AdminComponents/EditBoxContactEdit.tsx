import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const EditBoxContactEdit = ({name, value}:{name:string, value:string}) => {
    const [state, setState] = useState(false);
    const handleArrowClick = () => {
        setState(false);
    }
    const handleValueClick = () => {
        setState(true);
    }


  return (
    <span>
        {state ?<> <input type="text" value={value} placeholder={`wpisz ${name}`} /><span className='clickableText' onClick={handleArrowClick}> <ArrowForwardIosIcon/></span></>: <span className='clickableText' onClick={handleValueClick}>{value}</span>}
    </span>
  )
}

export default EditBoxContactEdit