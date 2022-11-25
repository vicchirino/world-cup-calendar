import { useIntl } from "react-intl"
import styled from "styled-components"
import { TeamStanding } from "../../types"
import { teamNameWithFlag } from "../../utils"

const GroupTableStyled = styled.table`
  margin: 10px;
  padding: 5px;
  width: calc(100% - 20px);
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
`
const GroupTableHeader = styled.thead`
  display: flex;
  flex-direction: row;
  width: 100%;
`
interface GroupTableHeaderItemProps {
  width: number
  alignText?: "flex-start" | "flex-end" | "center"
}
const GroupTableHeaderItem = styled.th<GroupTableHeaderItemProps>`
  padding: 5px;
  width: ${props => `${props.width}px`};
  display: flex;
  justify-content: ${props => props.alignText || "center"};
  align-items: center;
  @media (max-width: 800px) {
    width: ${props => `${props.width * 0.75}px`};
  }
  @media (max-width: 600px) {
    padding: 10px 5px;
    width: ${props => `${props.width * 0.55}px`};
  }
  @media (max-width: 500px) {
    padding: 10px 0px;
    width: ${props => `${props.width * 0.5}px`};
  }
  @media (max-width: 400px) {
    padding: 5px 0px;
    width: ${props => `${props.width * 0.4}px`};
  }
`
const GroupTableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
`
interface GroupTableRowProps {
  transparent?: boolean
}
const GroupTableRow = styled.tr<GroupTableRowProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  :nth-child(odd) {
    background-color: ${props =>
      props.transparent
        ? props.theme.colors.white
        : props.theme.colors.background};
  }
`
interface GroupTableDataProps {
  width: number
  alignText?: "flex-start" | "flex-end" | "center"
}
const GroupTableData = styled.td<GroupTableDataProps>`
  padding: ${props =>
    props.alignText === "flex-start" ? "10px 0 10px 15px" : "10px"};
  width: ${props => `${props.width}px`};
  display: flex;
  justify-content: ${props => props.alignText || "center"};
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 800px) {
    width: ${props => `${props.width * 0.75}px`};
    font-size: 14px;
  }
  @media (max-width: 600px) {
    padding: 10px 5px;
    width: ${props => `${props.width * 0.55}px`};
    font-size: 14px;
    font-weight: 400;
  }
  @media (max-width: 500px) {
    padding: 10px 0px;
    width: ${props => `${props.width * 0.5}px`};
    font-size: 12px;
    font-weight: 400;
  }
  @media (max-width: 400px) {
    padding: 5px 0px;
    width: ${props => `${props.width * 0.4}px`};
    font-size: 10px;
    font-weight: 300;
  }
`

const HeaderText = styled.span`
  font-size: 16px;
  background-color: ${props => props.theme.colors.scarlet};
  color: ${props => props.theme.colors.mikado};
  height: 35px;
  padding: 5px 20px;
  min-width: 35px;
  border-radius: 17.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    padding: 5px 10px;
    font-size: 12px;
  }
  @media (max-width: 400px) {
    padding: 0px;
    font-size: 8px;
  }
`

type GroupTableProps = {
  standings: TeamStanding[]
}

const GroupTable = ({ standings }: GroupTableProps) => {
  const { formatMessage } = useIntl()
  return (
    <GroupTableStyled>
      <GroupTableHeader>
        <GroupTableRow transparent={true}>
          <GroupTableHeaderItem width={150} alignText="flex-start">
            <HeaderText>{formatMessage({ id: "GroupTable.Team" })}</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>
              {formatMessage({ id: "GroupTable.Played" })}
            </HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>{formatMessage({ id: "GroupTable.Win" })}</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>{formatMessage({ id: "GroupTable.Draw" })}</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>{formatMessage({ id: "GroupTable.Lose" })}</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>
              {formatMessage({ id: "GroupTable.GoalsFor" })}
            </HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>
              {formatMessage({ id: "GroupTable.GoalsAgainst" })}
            </HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>
              {formatMessage({ id: "GroupTable.GoalsDifference" })}
            </HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>
              {formatMessage({ id: "GroupTable.Points" })}
            </HeaderText>
          </GroupTableHeaderItem>
        </GroupTableRow>
      </GroupTableHeader>
      <GroupTableBody>
        {standings.map((teamStanding, index) => (
          <GroupTableRow key={`team-row-${index}-${teamStanding.teamName}`}>
            <GroupTableData width={150} alignText="flex-start">
              {teamNameWithFlag(teamStanding.teamName)}
            </GroupTableData>
            <GroupTableData width={60}>{teamStanding.played}</GroupTableData>
            <GroupTableData width={60}>{teamStanding.win}</GroupTableData>
            <GroupTableData width={60}>{teamStanding.draw}</GroupTableData>
            <GroupTableData width={60}>{teamStanding.lose}</GroupTableData>
            <GroupTableData width={60}>{teamStanding.goalsFor}</GroupTableData>
            <GroupTableData width={60}>
              {teamStanding.goalsAgainst}
            </GroupTableData>
            <GroupTableData width={60}>
              {teamStanding.goalsFor - teamStanding.goalsAgainst}
            </GroupTableData>
            <GroupTableData width={60}>{teamStanding.points}</GroupTableData>
          </GroupTableRow>
        ))}
      </GroupTableBody>
    </GroupTableStyled>
  )
}

export default GroupTable
