import React from "react"
import Moment from "react-moment"
import "moment-timezone"
import useStats from "../../utils/useStats"

export default function Stats() {
  const stats = useStats("https://covid19.mathdro.id/api")
  //use proper validation try catch
  if (!stats) return <p>Fetching Overall Global Data ...</p>
  return (
    <div>
      <div className="card-group text-center">
        <div className="card text-white bg-color-confirmed">
          <div className="card-header">
            <h5 className="card-title">Confirmed:</h5>
          </div>
          <div className="card-body">
            <h1 className="card-text">{stats.confirmed.value}</h1>
          </div>
          <div className="card-footer text-white">
            <small>
              Last updated : <Moment>{stats.lastUpdate}</Moment>
            </small>
          </div>
        </div>
        <div className="card text-white bg-color-death">
          <div className="card-header">
            <h5 className="card-title">Deaths:</h5>
          </div>
          <div className="card-body">
            <h1 className="card-text">{stats.deaths.value}</h1>
          </div>
          <div className="card-footer">
            <small>
              Last updated : <Moment>{stats.lastUpdate}</Moment>
            </small>
          </div>
        </div>
        <div className="card text-white bg-color-recover">
          <div className="card-header">
            <h5 className="card-title">Recovered:</h5>
          </div>
          <div className="card-body">
            <h1 className="card-text">{stats.recovered.value}</h1>
          </div>
          <div className="card-footer">
            <small>
              Last updated : <Moment>{stats.lastUpdate}</Moment>
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
