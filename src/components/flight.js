import React from 'react';

function Flight (props) {
  return (
    <div>
        <ul className="flight">
        {props.flight.map((flight, i) =>
           <li className="flight-list" key={flight.segment_id}>
           <div className="airport-name">{flight.destination.value}</div>
           <div className="flight-time">{flight.departure}</div>
           </li>
        )}
        </ul>
        <div className="buttons">
          <button onClick={props.onSortAirport} className="btn" id="airportName">Sort by airport name</button>
          <button onClick={props.onSortTime} className="btn btn-time" id="flightTime">Sort by date</button>
        </div>
    </div>
  )

}

export default Flight;
