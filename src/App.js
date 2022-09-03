import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
import generateRandomAppointments from "./utils";
import { assistantArray, dentistArray, patientArray } from "./utils";

const appointments = generateRandomAppointments(150);

class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentDidMount() {
    this.setState({
      dentists: dentistArray,
      assistants: assistantArray,
      patients: patientArray,
      appointments: appointments,
      loading: false,
      sick: [],
    });
  }

  handleSick = (x) => this.setState({ sick: [...this.state.sick, x] });

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
            {this.state.loading ? (
              ""
            ) : (
              <Switch>
                <Route path="/calendar">
                  <Calendar appointments={this.state.appointments} />
                </Route>
                <Route path="/day">
                  <Day
                    appointments={this.state.appointments.filter(
                      (app) => app.day === 15
                    )}
                  />
                </Route>
                <Route path="/">
                  <h2>Dentist Sick</h2>
                  <Home
                    bvtDentists={this.state.dentists}
                    sick={this.handleSick}
                    lijst={this.state.sick}
                  />
                </Route>
              </Switch>
            )}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
