import React from 'react'
import { useSelector } from 'react-redux'

const Redux1 = () => {
    const {user} = useSelector((state)=>({ ...state}));
    console.log('user',user)
  return (
    <div>
        Test Redux1
        <br/>
      {user.value}
      <br/>
      {user.user}
    </div>
  )
}

export default Redux1
