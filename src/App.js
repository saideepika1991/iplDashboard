import {Route, Switch} from 'react-router-dom'

import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="ipl-container">
    <Switch>
      <Route path="/ipl/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
