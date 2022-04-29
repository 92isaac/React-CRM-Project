import React from 'react'
import Avartar from '../common/Avartar'
import view from '../../image/rock.png'
import './DashboardCard.css'



const today=new Date().toLocaleDateString()

const DashboardCard = (props) => {
  return (
    <div className="cards-desc">
      <div className="card-title">
      <h4>{props.title}</h4>
      <span>{props.reminder}</span>
      </div>
      <p>{props.date}: {today}</p>
      <div className="cards-details">
      <p> {<Avartar imgUrl={view}/>} {props.name}</p>
      <button>{props.button}</button>
      </div>
      
    </div>
  )
}

export default DashboardCard
