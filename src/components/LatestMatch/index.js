import './index.css'

const LatestMatch = props => {
  const {matchCardDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchCardDetails

  return (
    <li>
      <div className="details-image-container">
        <div className="details-container">
          <p className="team-title">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div className="image-container">
          <img
            src={competingTeamLogo}
            className="team-logo"
            alt="latest match {competing_team}"
          />
        </div>
        <div className="details-container">
          <p className="first-innings">First Innings</p>
          <p className="first-innings-team">{firstInnings}</p>
          <p className="second-innings">Second Innings</p>
          <p className="second-innings-team">{secondInnings}</p>
          <p className="man-of-the-match-name">Man Of The Match</p>
          <p className="man-of-the-match">{manOfTheMatch}</p>
          <p className="umpires">Umpires</p>
          <p className="umpires-names">{umpires}</p>
        </div>
      </div>
    </li>
  )
}
export default LatestMatch
