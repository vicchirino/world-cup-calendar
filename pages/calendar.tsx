import styled from "styled-components"
import { useState } from "react"
import Button from "../components/Button/Button"
import TeamsGrid from "../components/TeamsGrid/TeamsGrid"
import fixtures from "../public/fixture.json"
import { FixtureItem } from "../types"
import { createFixtureEvent, downloadCalendarEvents } from "../utils"
import { Icon } from "../components/Icon"
import { useIntl } from "react-intl"

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
  const { formatMessage } = useIntl()
  const [teamsSelected, setTeamsSelected] = useState<string[]>([])

  const fixturesItem: FixtureItem[] = fixtures.response as FixtureItem[]
  fixturesItem.map(item => createFixtureEvent(item))

  return (
    <>
      <SectionWrapper>
        <H1>{formatMessage({ id: "Calendar.Full.H1" })}</H1>
        <Body>{formatMessage({ id: "Calendar.Full.Body" })}</Body>
        <CenteredWrapper>
          <Button
            onClick={() => downloadCalendarEvents(fixturesItem)}
            text={formatMessage({ id: "Calendar.Full.Button" })}
          />
        </CenteredWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <H1>{formatMessage({ id: "Calendar.Custom.H1" })}</H1>
        <Body>{formatMessage({ id: "Calendar.Custom.Body" })}</Body>

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
          <BodySmall>
            {formatMessage(
              {
                id: "Calendar.Custom.SelectedTeams",
              },
              {
                teams: teamsSelected.map((team, index) => {
                  if (index === teamsSelected.length - 1) {
                    return " " + team + "."
                  } else {
                    return " " + team + ", "
                  }
                }),
              }
            )}
          </BodySmall>
        )}
        <CenteredWrapper>
          <Button
            onClick={() =>
              downloadCalendarEvents(
                fixturesItem.filter(
                  (item: FixtureItem) =>
                    teamsSelected.includes(item.teams.home.name) ||
                    teamsSelected.includes(item.teams.away.name)
                )
              )
            }
            disabled={teamsSelected.length === 0}
            text={formatMessage({ id: "Calendar.Custom.Button" })}
          />
        </CenteredWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <Body>{formatMessage({ id: "Calendar.Outro" })}</Body>
        <CenteredWrapper>
          <Icon href="https://github.com/vicchirino/world-cup-calendar" />
        </CenteredWrapper>
      </SectionWrapper>
    </>
  )
}

export default CalendarPage
