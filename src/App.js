import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dentists: [{ name: "", surname: "" }],
      assistants: [{ name: "not needed", surname: "" }],
      patients: [],
      appointments: [],
    };
  }

  async componentDidMount() {
    const requestData = await fetch(
      "https://api.mockaroo.com/api/00604490?count=250&key=19243a80"
    );
    const personsMockData = await requestData.json();

    this.setState({
      ...this.state,
      dentists: [],
    });

    const initialState = [{ dentists: 4 }, { assitants: 2 }, { clients: 50 }];

    initialState.forEach((element) => {
      const key = Object.keys(element);
      const value = Object.values(element);

      for (let i = 0; i < value; i++)
        this.setState({
          ...this.state,
          [key]: [
            ...this.state.dentists,
            personsMockData[Math.floor(Math.random() * value)],
          ],
        });
    });

    for (let i = 0; i < 150; i++) {
      this.setState({
        ...this.state,
        appointments: [...this.state.appointments, this.randomAppointment()],
      });
    }

    // console.log(this.state.appointments);
    // console.log(this.state.dentists);
  }

  randomDentist = () => {
    const dentist = this.state.dentists[Math.floor(Math.random() * 4)];
    return `${dentist.name} ${dentist.surname}`;
  };

  randomAssitant = () => {
    const assistant = this.state.assistants[Math.floor(Math.random() * 3)];
    return `${assistant.name} ${assistant.surname}`;
  };

  randomPatient = () => {
    const patient = this.state.patients[Math.floor(Math.random() * 50)];
    return `${patient.name} ${patient.surname}`;
  };

  randomTime = () => {
    while (true) {
      let hour = Math.floor(Math.random() * 24);
      if (hour > 7 && hour < 19) {
        return hour;
      }
    }
  };

  randomDay = () => {
    return Math.floor(Math.random() * 28) + 1;
  };

  randomAppointment = () => ({
    day: this.randomDay(),
    time: this.randomTime(),
    patient: this.randomPatient(),
    dentist: this.randomDentist(),
    assistant: this.randomAssitant(),
  });

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calendar">Calendar view</Link>
              </li>
              <li>
                <Link to="/day">Day view</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/calendar">
                <Calendar appointments={this.state.appointments} />
              </Route>
              <Route path="/day">
                <Day
                  appointments={this.state.appointments.filter(
                    (app) => app.day === 1
                  )}
                />
              </Route>
              <Route path="/">
                <label />
                Dentist report sick
                <ul>
                  <Home dentists={this.state.dentists} />
                </ul>
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
