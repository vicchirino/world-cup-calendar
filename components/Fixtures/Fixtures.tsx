import { useRouter } from "next/router"
import { useIntl } from "react-intl"
import styled from "styled-components"
import { FixtureItem } from "../../types"
import { teamNameWithFlag } from "../../utils"

const FixtureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  margin: 10px;
  border-radius: 10px;
  width: calc(100% - 20px);
`

const FixtureRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 10px 5px;
  justify-content: space-between;
  :nth-child(odd) {
    background-color: ${props => props.theme.colors.background};
  }
`
const FixtureDate = styled.span`
  font-size: 14px;
  margin: 10px;
  background-color: ${props => props.theme.colors.scarlet};
  color: ${props => props.theme.colors.mikado};
  height: 35px;
  padding: 5px 20px;
  min-width: 35px;
  border-radius: 17.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
interface FixtureTeamStyleProps {
  isHome?: boolean
}

const FixtureTeam = styled.div<FixtureTeamStyleProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isHome ? "flex-start" : "flex-end")};
  margin: 10px;
  text-align: ${props => (props.isHome ? "left" : "right")};
  font-size: 20px;
  font-weight: 500;
  min-width: 150px;
  padding: 0 10px;
  @media (max-width: 800px) {
    font-size: 16px;
    padding: 0 5px;
    min-width: 120px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 0 2px;
    min-width: 100px;
  }
`
const FixtureStatusStyled = styled.div`
  margin: 10px;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  @media (max-width: 800px) {
    padding: 5px 15px;
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 5px 10px;
  }
`
const FixtureVenue = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 10px 10px 10px auto;
  justify-self: flex-end;
`
const FixtureTitle = styled.div`
  padding: 20px 10px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin: 0 10px;
  color: ${props => props.theme.colors.oceanBlue};
`
type FixturesProps = {
  fixtures: FixtureItem[]
}

type FixtureStatusProps = {
  fixture: FixtureItem
}
const FixtureStatus = ({ fixture }: FixtureStatusProps) => {
  const { formatMessage } = useIntl()
  const router = useRouter()
  const fixtureDate = new Date(fixture.fixture.date).toLocaleString(
    router.locale,
    {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }
  )
  const matchResult = `${fixture.goals.home} - ${fixture.goals.away}`
  const isFixtureLive =
    fixture.fixture.status.short === "ET" ||
    fixture.fixture.status.short === "HT" ||
    fixture.fixture.status.short === "2H" ||
    fixture.fixture.status.short === "1H" ||
    fixture.fixture.status.short === "BT" ||
    fixture.fixture.status.short === "P" ||
    fixture.fixture.status.short === "LIVE"
  return (
    <FixtureStatusStyled>
      {fixture.fixture.status.short === "NS"
        ? fixtureDate
        : isFixtureLive
        ? formatMessage({ id: "Fixture.Live" })
        : matchResult}
    </FixtureStatusStyled>
  )
}

export const Fixtures = ({ fixtures }: FixturesProps) => {
  const { formatMessage } = useIntl()
  return (
    <>
      <FixtureTitle>{formatMessage({ id: "Fixture.Fixture" })}</FixtureTitle>
      <FixtureWrapper>
        {fixtures.map((fixture, index) => (
          <FixtureRow key={`${fixture.fixture.id}-${index}`}>
            <FixtureTeam isHome={true}>
              {teamNameWithFlag(fixture.teams.home.name, true)}
            </FixtureTeam>
            <FixtureStatus fixture={fixture} />
            <FixtureTeam isHome={false}>
              {teamNameWithFlag(fixture.teams.away.name)}
            </FixtureTeam>
            {/* <FixtureVenue>{`🏟 ${fixture.fixture.venue.name}, ${fixture.fixture.venue.city}`}</FixtureVenue> */}
          </FixtureRow>
        ))}
      </FixtureWrapper>
    </>
  )
}
