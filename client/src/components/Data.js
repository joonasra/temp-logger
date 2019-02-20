import React from 'react'

const Data = ({ data }) => {
  return (
    <div>
      <h3>Lämpötiladata</h3>
      <div className="data-chart">
        <ul>
          {data.temperatures.map(element => (
            <li key={element._id}>{element._id}</li>
          ))}
        </ul>
        <p>Yhteensä: {data.temperatures.length}</p>
      </div>
    </div>
  )
}

export default Data
