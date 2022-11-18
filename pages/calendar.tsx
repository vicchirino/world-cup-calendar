import styled from "styled-components"
import { useState } from "react"
import Button from "../components/Button/Button"
import TeamsGrid from "../components/TeamsGrid/TeamsGrid"

const H1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin: 10px;
  color: ${props => props.theme.colors.scarlet};
`

const Body = styled.div`
  font-size: 25px;
  font-weight: 300;
  margin: 10px;
  color: ${props => props.theme.colors.black};
  margin: 10px;
`
const BodySmall = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin: 10px;
  color: ${props => props.theme.colors.black};
`
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.oceanBlue};
`

const CenteredWrapper = styled.div`
  display: flex;
  align-self: center;
`
const TEAMS_LIST = [
  "Costa Rica",
  "Australia",
  "Wales",
  "Mexico",
  "USA",
  "Cameroon",
  "Morocco",
  "Tunisia",
  "Portugal",
  "Poland",
  "Senegal",
  "Ghana",
  "Canada",
  "Ecuador",
  "Saudi Arabia",
  "Uruguay",
  "Japan",
  "South Korea",
  "Iran",
  "Argentina",
  "Switzerland",
  "England",
  "Netherlands",
  "Qatar",
  "Germany",
  "Denmark",
  "Brazil",
  "France",
  "Belgium",
  "Serbia",
  "Spain",
  "Croatia",
]

const CalendarPage = () => {
  const [teamsSelected, setTeamsSelected] = useState<string[]>([])
  console.log("Teams selected lenght", teamsSelected.length)
  return (
    <>
      <SectionWrapper>
        <H1>Download full calendar</H1>
        <Body>
          Download a calendar file with all the matches of the world cup 2022.
          This will create new events on your g-cal / appl-cal or wind-cal that
          will adjust automatically to your timezone.
        </Body>
        <CenteredWrapper>
          <Button onClick={() => {}} text={"Download full 📅"} />
        </CenteredWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <H1>Download custom calendar</H1>
        <Body>
          Select your favorites teams and download a calendar with the matches
          of those you want to follow. This will create new events on your
          g-cal/ app-cal or wind-cal that will adjust automatically to your
          timezone.
        </Body>

        <TeamsGrid
          teams={TEAMS_LIST}
          selectedTeams={teamsSelected}
          onSelectTeam={(team: string) => {
            if (!teamsSelected.includes(team)) {
              setTeamsSelected([...teamsSelected, team])
            } else {
              setTeamsSelected(teamsSelected.filter(t => t !== team))
            }
          }}
        />
        {teamsSelected.length > 0 && (
          <BodySmall>{`Teams selected: ${teamsSelected.map((team, index) => {
            console.log("TEAM", team)
            if (index === teamsSelected.length - 1) {
              return team + "."
            } else {
              return team + "-"
            }
          })}`}</BodySmall>
        )}
        <CenteredWrapper>
          <Button onClick={() => {}} text={"Download custom 📅"} />
        </CenteredWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <Body>
          The creation of this calendars is secure, the code of this page is
          open source and you cand find it on github. This is only for
          fun/learining propouses. (github-icon)
        </Body>
      </SectionWrapper>
    </>
  )
}

export default CalendarPage
