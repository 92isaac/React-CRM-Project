import React from 'react'
import DashboardCard from './DashboardCard';
import './Main.css'
import Chart from "react-google-charts";
import SideBar from '../sidebarFiles/Sidebar'

const Main = () => {
  return (
    <div className="dashboard-flex">
      <SideBar />
    <div className="main-body">
      <div className="welcome">
        <h2>Welcome <span>Eziuche</span></h2>

      <div className="search-btn">
        <input type="text" placeholder="Search..."/>
        <button>Search</button>
      </div>
      </div>
            <div className="row-two">
        <div className="row spent-this-month">
          <div className="con">
            <p>Spent this month</p>
            <h2>$682.5</h2>
          </div>
          <img src="./image/bar.PNG" alt=""/>
        </div>
        <div className="row earning">
          <img src="./image/Cap.PNG" alt=""/>
          <div className="con">
          <p>Earning</p>
          <h2>$350.40</h2>
          </div>

        </div>
        <div className="row new-client">
          <img src="../image/Avatar (2).png" alt=""/>
          <div className="con">
          <p>New Event</p>
          <h2>321</h2>
          </div>
          <img src="../image/Graph.png" alt=""/>
        </div>

        <div className="row activity">
        <div className="con">
          <p>Activity</p>
          <h2>$540.50</h2>
        </div>
        <img src="../image/Chart.png" alt=""/>
        </div>
      </div>

      <div className="reminder-field">
        <div>
        <DashboardCard
        title="Send benefit review by sunday"
        date="Due Date"
        name="Goerge Fields"
        button="Completed"
        reminder="Reminder"
        />

        {/* <DashboardCard
        title="Send benefit review by sunday"
        date="Due Date"
        name="Goerge Fields"
        button="Completed"
        reminder="Reminder"
        />

        <DashboardCard
        title="Send benefit review by sunday"
        date="Due Date"
        name="Goerge Fields"
        button="Completed"
        reminder="Reminder"
        /> */}
      </div>

         <Chart
  width={'50%'}
  height={'100%'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Name', 'Age'],
    ['Michael', 12],
    ['Elisa', 20],
    ['Robert', 7],
    ['John', 54],
    ['Jessica', 22],
    ['Aaron', 3],
    ['Margareth', 42],
    ['Miranda', 33],
  ]}
  rootProps={{ 'data-testid': '6' }}
  chartPackages={['corechart', 'controls']}
  render={({ renderControl, renderChart }) => {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '40%' }}>{renderControl(() => true)}</div>
        <div style={{ width: '60%' }}>{renderChart()}</div>
      </div>
    )
  }}
  controls={[
    {
      controlType: 'StringFilter',
      options: {
        filterColumnIndex: 0,
        matchType: 'any', // 'prefix' | 'exact',
        ui: {
          label: 'Search by name',
        },
      },
    },
    {
      controlType: 'NumberRangeFilter',
      controlID: 'age-filter',
      options: {
        filterColumnIndex: 1,
        ui: {
          labelStacking: 'vertical',
          label: 'Age Selection:',
          allowTyping: false,
          allowMultiple: false,
        },
      },
    },
  ]}
/>
        </div>
      </div>
    </div>
  )
}

export default Main;
