import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Tangram } from 'views/tangram'
import { Countdown } from 'views/countdown'
import { Locker } from './views/locker';

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tangram">Tangram</Link>
            </li>
            <li>
              <Link to="/countdown">Amazing Countdown</Link>
            </li>
            <li>
              <Link to="/locker">Locker Cells</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/tangram" component={Tangram} />
          <Route path="/countdown" component={Countdown} />
          <Route path="/locker" component={Locker} />
        </Switch>
      </Router>
    </div>
  )
}

function Home() {
  return <h2>Home</h2>
}
