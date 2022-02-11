import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <li className="list-team-card">
      <Link to={`/ipl/${id}`} className="link-to-description">
        <div className="image-name-container">
          <img src={teamImageUrl} className="team-image-url" alt="name" />
          <h1 className="team-title">{name}</h1>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
