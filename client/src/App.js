import React, { Component } from 'react';
import axios from 'axios';
import Appointments from './Appointments';
import Appointment from './Appointment';
import './App.css';
import SimpleMap from './SimpleMap';


class App extends Component {

  state = {
    appointments: [{
      appId: 1,
      date: "February 10, 2019",
      time: "10:00 PM",
      area: "chin",
      fee: 100,
      name: "Cindy",
      eName: "Ahoova",
      clientAddress: "string",
    }],
    internalComment: [{
      appId: 1,
      comment: "string",
    }],
    image: [{
      appId: 1,
      imageUrl: "string",
    }]
  }

  componentDidMount() {
    this.getAllAppointments()
    console.log("running")
  }

  getAllAppointments = () => {
    axios.get("/api/appointments/").then(res => {
      console.log("get all appointments returns: " + res.data)
      this.setState({ appointments: res.data });
      console.log(this.state.appointments)
    });
  }
    
  render() {
    
    return (
      
      <div>
        <SimpleMap/>
        <div>
          
          <Appointments appointments = {this.state.appointments}/>
          <Appointment/>
        </div>
          <nav>hello world</nav>
          
      </div>
    );
  }
}

export default App;
