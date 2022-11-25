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
  @media (max-width: 700px) {
    width: ${props => `${props.width * 0.75}px`};
  }
  @media (max-width: 500px) {
    padding: 10px 5px;
    width: ${props => `${props.width * 0.55}px`};
  }
  @media (max-width: 400px) {
    padding: 10px 0px;
    width: ${props => `${props.width * 0.5}px`};
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
  @media (max-width: 700px) {
    width: ${props => `${props.width * 0.75}px`};
  }
  @media (max-width: 500px) {
    padding: 10px 5px;
    width: ${props => `${props.width * 0.55}px`};
  }
  @media (max-width: 400px) {
    padding: 10px 0px;
    width: ${props => `${props.width * 0.5}px`};
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
`

type GroupTableProps = {
  standings: TeamStanding[]
}

const GroupTable = ({ standings }: GroupTableProps) => {
  return (
    <GroupTableStyled>
      <GroupTableHeader>
        <GroupTableRow transparent={true}>
          <GroupTableHeaderItem width={150} alignText="flex-start">
            <HeaderText>Equipo</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>PJ</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>G</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>E</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>P</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>GF</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>GC</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>DG</HeaderText>
          </GroupTableHeaderItem>
          <GroupTableHeaderItem width={60}>
            <HeaderText>Pts</HeaderText>
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
