import React from 'react'

const copyrightDate=new Date().getFullYear()


const CurrentYear = () => {
  return (
      <p>{copyrightDate}</p>

  )
}

export default CurrentYear
