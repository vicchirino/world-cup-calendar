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

const NavBar = () => {
  const [selected, setSelected] = useState("calendar")
  const { locale, locales } = useRouter()
  const { formatMessage } = useIntl()
  return (
    <Nav>
      <Link href={locale === "es" ? "/en-US/calendar" : "es/calendar"}>
        <NavItem selected={false}>{locale === "es" ? "🇺🇸" : "🇦🇷"}</NavItem>
      </Link>
      <Link href="/calendar" onClick={() => setSelected("calendar")}>
        <NavItem selected={selected === "calendar"}>
          {formatMessage({ id: "NavBar.Calendar" })}
        </NavItem>
      </Link>

      {/* <Link href="/notifications" onClick={() => setSelected("notifications")}>
        <NavItem selected={selected === "notifications"}>Notifications</NavItem>
      </Link> */}
    </Nav>
  )
}

export default NavBar
