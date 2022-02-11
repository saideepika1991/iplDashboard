import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, iplData: {}}

  componentDidMount() {
    this.getIplDashboardInfo()
  }

  getIplDashboardInfo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      result: data.result,
      manOfTheMatch: data.man_of_the_match,
      date: data.date,
      venue: data.venue,
      competingTeam: data.competing_team,
      competingTeamLogo: data.competing_team_logo,
      firstInnings: data.first_innings,
      secondInnings: data.second_innings,
      matchStatus: data.match_status,
      umpires: data.umpires,
    }
    this.setState({iplData: updatedData, isLoading: false})
  }

  renderIplMatchDetails = () => {
    const {iplData} = this.state
    const {teamBannerUrl} = iplData

    return (
      <div className="team-match-container">
        <img src={teamBannerUrl} className="team-banner-url" alt="name" />
        <LatestMatch />
        <ul className="list-ipl-items">
          {iplData.map(eachTeam => (
            <MatchCard key={eachTeam.id} matchCardDetails={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-dash-board-app">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderIplMatchDetails()
        )}
      </div>
    )
  }
}
export default TeamMatches
