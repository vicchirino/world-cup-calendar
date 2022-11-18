import Link from "next/link"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link href="/notifications">
          <li>Notifications</li>
        </Link>
        <Link href="/calendar">
          <li>Calendar</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
