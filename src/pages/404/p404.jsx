import React from 'react'
import '../404/p404.scss'
import { Link } from 'react-router-dom'

const P404 = () => {
  return (
    <div className="p404main">
      <div title="404" className='p404'>404</div> 
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default P404