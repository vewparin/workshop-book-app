import React from 'react'
import { UseSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { login,logout } from '../store/userSlice'
const Redux2 = () => {
    const dispatch = useDispatch();

  return (
    <div>
      Redux2
        <button onClick={()=>dispatch(login())}>Hello Redux</button>
    </div>
  )
}

export default Redux2
