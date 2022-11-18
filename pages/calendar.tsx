import styled from "styled-components"
import { useState } from "react"

const MainContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  background-color: lightcoral;
  min-height: 100vh;
`

const H1 = styled.h1`
  font-size: 50px;
  font-weight: 700;
  margin: 10px;
  background-color: orange;
  color: red;
`

const Body = styled.div`
  font-size: 25px;
  font-weight: 300;
  margin: 10px;
  background-color: lightblue;
  color: black;
`

const Button = styled.button`
  font-size: 20px;
  font-weight: 400;
  background-color: white;
  color: blue;
  height: 50px;
  width: 200px;
  border-radius: 10px;
`

const TeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  background-color: lightgreen;
  color: black;
  width: calc(100% - 20px);
  margin: 10px;
  grid-column-gap: 10px;
  padding: 10px 10px;
`

const TeamItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: red;
  height: 50px;
`
const TeamButton = styled.button`
  font-size: 25px;
  font-weight: 300;
  background-color: white;
  color: blue;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  :hover {
    background-color: lightblue;
    color: red;
  }
`

const CheckedTeamButton = styled.button`
  font-size: 25px;
  font-weight: 300;
  background-color: lightblue;
  color: red;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  :hover {
    background-color: white;
    color: blue;
  }
`

type TeamCheckButtonProps = {
  checked: boolean
  text: string
  onCheck: (text: string) => void
}

const TeamCheckButton = ({
  checked = false,
  text,
  onCheck,
}: TeamCheckButtonProps) => {
  return checked ? (
    <CheckedTeamButton onClick={() => onCheck(text)}>{text}</CheckedTeamButton>
  ) : (
    <TeamButton onClick={() => onCheck(text)}>{text}</TeamButton>
  )
}

export default function Home() {
  return (
    <MainContainer>
      <CalendarPage />
    </MainContainer>
  )
}

const CalendarPage = () => {
  const [teamsSelected, setTeamsSelected] = useState<string[]>([])

  return (
    <>
      <H1>Victor </H1>
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Body>
      <Button>Download full 📅</Button>
      <TeamsGrid>
        {Array.from(Array(32).keys()).map(index => (
          <TeamItem key={index}>
            {index % 2 === 0 ? (
              <TeamCheckButton
                checked={teamsSelected.includes(`🇦🇷 Argentina`)}
                text={"🇦🇷 Argentina"}
                onCheck={text =>
                  teamsSelected.includes(text)
                    ? setTeamsSelected(
                        teamsSelected.filter(team => team !== text)
                      )
                    : setTeamsSelected([...teamsSelected, text])
                }
              />
            ) : (
              <TeamCheckButton
                text={"🇰🇷 Korea republic"}
                checked={teamsSelected.includes(`🇰🇷 Korea republic`)}
                onCheck={text =>
                  teamsSelected.includes(text)
                    ? setTeamsSelected(
                        teamsSelected.filter(team => team !== text)
                      )
                    : setTeamsSelected([...teamsSelected, text])
                }
              />
            )}
          </TeamItem>
        ))}
      </TeamsGrid>
    </>
  )
}
