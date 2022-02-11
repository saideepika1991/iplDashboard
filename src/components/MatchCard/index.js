import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    matchStatus,
    result,
    competingTeam,
    competingTeamLogo,
  } = matchCardDetails

  return (
    <li className="card-container">
      <div className="card-organize-container">
        <img
          src={competingTeamLogo}
          className="competing-team-logo"
          alt="name"
        />
        <h1 className="team-titles">{competingTeam}</h1>
        <p className="results">{result}</p>
        <p className="match-status">{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
