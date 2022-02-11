import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, iplDashboard: []}

  componentDidMount() {
    this.getIplItems()
  }

  getIplItems = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedIplData = data.map(eachIplItem => ({
      name: eachIplItem.name,
      id: eachIplItem.id,
      teamImageUrl: eachIplItem.team_image_url,
    }))
    this.setState({iplDashboard: updatedIplData, isLoading: false})
  }

  render() {
    const {iplDashboard, isLoading} = this.state
    return (
      <div className="ipl-dashboard-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo"
            alt="ipl logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <div className="teams-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            <ul className="teams-list-container">
              {iplDashboard.map(eachIpl => (
                <TeamCard key={eachIpl.id} teamCardDetails={eachIpl} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
