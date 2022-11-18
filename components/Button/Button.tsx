import styled from "styled-components"

const ButtonStyled = styled.button`
  font-size: 18px;
  font-weight: 400;
  background-color: ${props => props.theme.colors.mikado};
  color: ${props => props.theme.colors.black};
  height: 45px;
  border-radius: 10px;
  margin: 10px;
  min-width: 250px;
  border: 2px solid ${props => props.theme.colors.scarlet};
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.scarlet};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
  }
`

type ButtonProps = {
  text: string
  onClick: () => void
}

export default function Button({ text, onClick }: ButtonProps) {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
}
