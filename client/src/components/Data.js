import React, { useState } from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis'

const Data = ({ data, refresh }) => {
  const [miny, setMiny] = useState(20)
  const [maxy, setMaxy] = useState(30)

  return (
    <div>
      <h3>Lämpötiladata</h3>
      <div className="data-chart">
        <XYPlot
          width={700}
          height={700}
          xDomain={[0, 24]}
          yDomain={[miny, maxy]}
        >
          <VerticalGridLines tickTotal={24} />
          <HorizontalGridLines tickTotal={20} />
          <XAxis title="Aika (h)" tickTotal={24} />
          <YAxis title="Lämpötila (Celsius)" />
          <LineMarkSeries
            className="temp-series"
            curve={'curveMonotoneX'}
            lineStyle={{ stroke: 'turquoise', strokeWidth: '3px' }}
            markStyle={{ stroke: 'turquoise', strokeWidth: '2px' }}
            data={data}
          />
        </XYPlot>
        <div>
          <button className="btn btn-md btn-primary" onClick={refresh}>
            Päivitä
          </button>
        </div>
      </div>
    </div>
  )
}

export default Data
