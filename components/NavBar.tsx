import styled from "styled-components"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import { useIntl } from "react-intl"

const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.scarlet};
  height: 60px;
  width: 100%;
  position: fixed;
  padding: 10px;
  column-gap: 20px;
  border-bottom: 2px solid ${props => props.theme.colors.oceanBlue};
  z-index: 2;
`
interface NavItemProps {
  selected: boolean
}

const NavItem = styled.div<NavItemProps>`
  height: 100%;
  padding: 0 10px;
  font-size: 22px;
  color: ${props =>
    props.selected ? props.theme.colors.mikado : props.theme.colors.white};
  font-weight: ${props => (props.selected ? "600" : "300")};
`
const LanguageButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 2px solid transparent;
  outline: none;
  :hover {
    border: 2px solid ${props => props.theme.colors.mikado};
  }
`

const NavBar = () => {
  const [selected, setSelected] = useState("calendar")
  const router = useRouter()
  const { formatMessage } = useIntl()
  return (
    <Nav>
      <LanguageButton
        onClick={() =>
          router.push(router.asPath, router.asPath, {
            locale: router.locale === "es" ? "en-US" : "es",
          })
        }
      >
        <NavItem selected={false}>
          {router.locale === "es" ? "🇺🇸" : "🇦🇷"}
        </NavItem>
      </LanguageButton>
      <Link href="/calendar" onClick={() => setSelected("calendar")}>
        <NavItem selected={selected === "calendar"}>
          {formatMessage({ id: "NavBar.Calendar" })}
        </NavItem>
      </Link>
      <Link href="/fixture" onClick={() => setSelected("fixture")}>
        <NavItem selected={selected === "fixture"}>
          {formatMessage({ id: "NavBar.Fixture" })}
        </NavItem>
      </Link>

      {/* <Link href="/notifications" onClick={() => setSelected("notifications")}>
        <NavItem selected={selected === "notifications"}>Notifications</NavItem>
      </Link> */}
    </Nav>
  )
}

export default NavBar
