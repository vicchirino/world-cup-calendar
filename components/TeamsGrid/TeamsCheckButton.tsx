import styled from "styled-components"

interface TeamButtonProps {
  checked: boolean
}

const TeamButton = styled.button<TeamButtonProps>`
  font-size: 20px;
  font-weight: 300;
  background-color: ${props =>
    props.checked ? props.theme.colors.pictonBlue : props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.scarlet};
  color: ${props => props.theme.colors.black};
  height: 100%;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: ${props =>
      props.checked ? props.theme.colors.white : props.theme.colors.pictonBlue};
    color: ${props =>
      props.checked ? props.theme.colors.black : props.theme.colors.white};
    font-weight: 600;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
    font-weight: 300;
  }
  @media (max-width: 700px) {
    font-size: 12px;
    font-weight: 300;
  }

  @media (max-width: 500px) {
    font-size: 10px;
    font-weight: 300;
  }
`

type TeamCheckButtonProps = {
  checked: boolean
  text: string
  onCheck: (text: string) => void
}

export const TeamCheckButton = ({
  checked = false,
  text,
  onCheck,
}: TeamCheckButtonProps) => (
  <TeamButton checked={checked} onClick={() => onCheck(text)}>
    {text}
  </TeamButton>
)
