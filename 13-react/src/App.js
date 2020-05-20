import React, { Component } from 'react';
import './App.css';
import Person from './BasicInfo';
    class App extends Component {
      constructor(props) {
        super(props)
        this.state = {
          person: [
            {
              Name: "Jackie Kurien",
              Phone: '704-431-7200',
              DOB: "09/08/1997"
            },
            {
              Name: "John Smith",
              Phone: '704-000-0000',
              DOB: '01/01/2000',
            },
            {
              Name: "Josh Smith",
              Phone: '704-123-4567',
              DOB: '02/14/1997'
            }
          ]
        }
      }
      render() {
        return <Person person={this.state.person} />
      }
    }
export default App;