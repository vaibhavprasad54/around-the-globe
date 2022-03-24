import React from 'react'
import loading from '../Loading Spinner/spinner.gif'

const Spinner = () => {
    return (
        <>
      <div className='text-center'>
          <img className='my-3' src={loading} alt="loading" style={{width: '55px'}}/>
      </div>
      </>
    )
  }

  export default Spinner
