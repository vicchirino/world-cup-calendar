import styled from "styled-components"

interface ButtonStyledProps {
  disabled: boolean
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  font-size: 18px;
  font-weight: 400;
  background-color: ${props => props.theme.colors.mikado};
  color: ${props => props.theme.colors.black};
  opacity: ${props => (props.disabled ? "0.6" : "1")};
  height: 45px;
  border-radius: 10px;
  margin: 10px;
  min-width: 250px;
  border: 2px solid ${props => props.theme.colors.scarlet};
  cursor: pointer;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
  :hover {
    background-color: ${props => props.theme.colors.scarlet};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
  }
`

type ButtonProps = {
  text: string
  onClick: () => void
  disabled?: boolean
}

export default function Button({
  text,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {text}
    </ButtonStyled>
  )
}
