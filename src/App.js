import React, { Component } from 'react';
import './App.css';
import Flight from './components/flight';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    }
  }

sortByAirport = () => {
  const {flights} = this.state;
  flights.sort((a, b) => a.destination.value < b.destination.value ? -1: a.destination.value > b.destination.value ? 1 : 0)
  this.setState({ flights })
 }

 sortByTime = () => {
   const {flights} = this.state;
   flights.sort((a, b) => new Date('1970/01/01 ' + a.departure) - new Date('1970/01/01 ' + b.departure))
   this.setState({ flights })
 }

  componentDidMount() {
    fetch('../data.json')
       .then(response => response.json())
       .then(flight => this.setState({ flights: flight}));
  }

  render() {
  return (
    <div className="App">
      <Flight flight = {this.state.flights} onSortTime={this.sortByTime} onSortAirport={this.sortByAirport} />

    </div>
  );
 }
}

export default App;
