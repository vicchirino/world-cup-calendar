import styled from "styled-components"
import { teamNameWithFlag } from "../../utils"
import { TeamCheckButton } from "./TeamsCheckButton"

const TeamsGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: calc(100% - 20px);
  margin: 10px;
  grid-column-gap: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.mikado};
  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const TeamItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  height: 50px;
`

type TeamsGridProps = {
  teams: string[]
  selectedTeams: string[]
  onSelectTeam: (team: string) => void
}

export default function TeamsGrid({
  teams,
  selectedTeams,
  onSelectTeam,
}: TeamsGridProps) {
  return (
    <TeamsGridStyled>
      {teams.map(team => (
        <TeamItem key={`${team}-item`}>
          <TeamCheckButton
            checked={selectedTeams.includes(team)}
            text={teamNameWithFlag(team, true)}
            onCheck={() => onSelectTeam(team)}
          />
        </TeamItem>
      ))}
    </TeamsGridStyled>
  )
}
