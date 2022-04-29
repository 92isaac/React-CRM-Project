import React, { Fragment } from 'react'
import './Avatar.css'


const Avartar = ({imgUrl, name}) => {
  return (
    <Fragment>
      <div className="imgo">
        {imgUrl && <img className="imgth" alt="avatar" src={imgUrl}/>}
        {imgUrl ===undefined && name !== '' && (<div className="imgt">
          {name.substring(0,2)}
          </div>)}

      </div>
    </Fragment>
  )
}

export default Avartar
