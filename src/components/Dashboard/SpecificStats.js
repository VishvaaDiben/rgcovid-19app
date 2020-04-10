import React from "react"
import Moment from "react-moment"
import "moment-timezone"
import useStats from "../../utils/useStats"

export default function SpecificStats({url}) {
  const stats = useStats(url)
  //use proper validation try catch
  if (!stats) return <b><i>Take care of yourself during these times. We're all in this together!</i></b>
  return (
    <div>
      <div className="card-group text-center">
        <div className="card text-white bg-secondary">
          <div className="card-header">
            <h5 className="card-title">Total Cases:</h5>
          </div>
          <div className="card-body">
            <h1 className="card-text">{stats.cases}</h1>
          </div>
          <div className="card-footer text-white">
         
            <small>
              Last updated : <Moment>{stats.updated}</Moment>
            </small>
          </div>
        </div>
        <div className="card text-white bg-danger">
          <div className="card-header">
            <h5 className="card-title">Total Deaths:</h5>
          </div>
          <div className="card-body">
            <h1 className="card-text">{stats.deaths}</h1>
          </div>
          <div className="card-footer">
            <small>
              Last updated : <Moment>{stats.updated}</Moment>
            </small>
          </div>
        </div>
        <div className="card text-white bg-success">
          <div className="card-header">
            <h5 className="card-title">Total Recovered:</h5>
          </div>
          <div className="card-body">
            <h1 className="card-text">{stats.recovered}</h1>
          </div>
          <div className="card-footer">
            <small>
              Last updated : <Moment>{stats.updated}</Moment>
            </small>
          </div>
        </div>
        <div className="card text-white bg-warning">
          <div className="card-header">
            <h5 className="card-title">Active Cases:</h5>
          </div>
          <div className="card-body">
            <h1 className="card-text">{stats.active}</h1>
          </div>
          <div className="card-footer">
            <small>
              Last updated : <Moment>{stats.updated}</Moment>
            </small>
          </div>
        </div>
        <div className="card text-white bg-primary">
          <div className="card-header">
            <h5 className="card-title">Serious Critical:</h5>
          </div>
          <div className="card-body">
            <h1 className="card-text">{stats.critical}</h1>
          </div>
          <div className="card-footer">
            <small>
              Last updated : <Moment>{stats.updated}</Moment>
            </small>
          </div>
        </div>
        <div className="card text-white bg-dark">
          <div className="card-header">
            <h5 className="card-title">Today Deaths:</h5>
          </div>
          <div className="card-body">
            <h1 className="card-text">{stats.todayDeaths}</h1>
          </div>
          <div className="card-footer">
            <small>
              Last updated : <Moment>{stats.updated}</Moment>
            </small>
          </div>
        </div>
        <div className="card text-white bg-info">
          <div className="card-header">
            <h5 className="card-title">Today Cases:</h5>
          </div>
          <div className="card-body">
            <h1 className="card-text">{stats.todayCases}</h1>
          </div>
          <div className="card-footer">
            <small>
              Last updated : <Moment>{stats.updated}</Moment>
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
