import React from 'react'
import { useParams } from 'react-router-dom'



function Users() {
    const {id} = useParams()
  return (
    <div>User: {id} </div>
  )
}

export default Users