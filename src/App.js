import {Route, Switch} from 'react-router-dom'

import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import Home from './components/Home'

import './App.css'

const App = () => (
  <div className="ipl-container">
    <TeamMatches />
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ipl/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
