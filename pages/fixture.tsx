import styled from "styled-components"
import GroupTable from "../components/GroupTable/GroupTable"
import { FixtureItem, TeamStanding } from "../types"
import { useEffect, useState } from "react"
import { getStandings } from "../api/standingsAPI"
import { getFixtures } from "../api/fixturesAPI"
import { Fixtures } from "../components/Fixtures/Fixtures"
import Button from "../components/Button/Button"
import { useIntl } from "react-intl"

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.oceanBlue};
  justify-content: center;
  @media (max-width: 400px) {
    padding: 10px 0px;
  }
`

const GroupTableCaption = styled.span`
  padding: 20px 10px;
  text-align: center;
  font-size: 30px;
  margin: 0 10px;
  font-weight: bold;
  color: ${props => props.theme.colors.oceanBlue};
`

const GroupInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.colors.oceanBlue};
  margin: 10px;
`

type Group = {
  index: number
  title: string
  teamStandings: TeamStanding[]
}
const Fixture = () => {
  const { formatMessage } = useIntl()
  const [groups, setGroups] = useState<Group[]>([])
  const [fixtures, setFixtures] = useState<FixtureItem[]>([])
  const [selectedGroup, setselectedGroup] = useState<Group | undefined>(
    undefined
  )
  useEffect(() => {
    getStandings(1, "2022").then(standingItems => {
      if (standingItems.length === 0) return
      let groups: Group[] = []
      groups =
        standingItems[0].league.standings?.map((standing, index) => {
          return {
            index: index,
            title: standing[0].group?.slice(6, 7) || "",
            teamStandings: standing.map(teamStanding => {
              return {
                teamName: teamStanding.team.name,
                teamId: teamStanding.team.id,
                rank: teamStanding.rank,
                points: teamStanding.points,
                form: teamStanding.form,
                played: teamStanding.all.played,
                win: teamStanding.all.win,
                draw: teamStanding.all.draw,
                lose: teamStanding.all.lose,
                goalsFor: teamStanding.all.goals.for,
                goalsAgainst: teamStanding.all.goals.against,
              }
            }),
          } as Group
        }) || []
      setGroups(groups)
      setselectedGroup(groups[0])
    })
  }, [])

  useEffect(() => {
    getFixtures({ league: 1, season: "2022" }).then(fixtures => {
      setFixtures(fixtures)
    })
  }, [])

  if (!selectedGroup) {
    return <Loading>{formatMessage({ id: "Loading" })}</Loading>
  }

  return (
    <>
      <SectionWrapper>
        <GroupInformation>
          <Button
            disabled={selectedGroup.index === 0}
            onClick={() => setselectedGroup(groups[selectedGroup.index - 1])}
            text={formatMessage({ id: "Fixture.PreviousButton" })}
          />
          <GroupTableCaption>
            {formatMessage(
              { id: "Fixture.Group" },
              { group: selectedGroup.title }
            )}
          </GroupTableCaption>
          <Button
            disabled={selectedGroup.index === groups.length - 1}
            onClick={() => setselectedGroup(groups[selectedGroup.index + 1])}
            text={formatMessage({ id: "Fixture.NextButton" })}
          />
        </GroupInformation>
        <GroupTable standings={selectedGroup.teamStandings} />
        {fixtures && (
          <Fixtures
            fixtures={fixtures.filter(f => {
              return (
                selectedGroup.teamStandings
                  .map(ts => ts.teamName)
                  .includes(f.teams.home.name) ||
                selectedGroup.teamStandings
                  .map(ts => ts.teamName)
                  .includes(f.teams.away.name)
              )
            })}
          />
        )}
      </SectionWrapper>
    </>
  )
}

export default Fixture
