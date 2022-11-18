type Venue = {
  name: string
  city: string
}

type League = {
  id: number
  name: string
  country: string
  logo: string
  round: string | null
}

export type Team = {
  id: number
  name: string
  logo: string
}

export type FixtureItem = {
  fixture: Fixture
  league: League
  teams: {
    home: Team
    away: Team
  }
}

export type Fixture = {
  id: number
  timezone: string
  date: string
  timestamp: number
  venue: Venue
}
