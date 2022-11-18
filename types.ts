type Venue = {
  name: string
  city: string
}

type League = {
  id: number
  name: string
  country: string
  logo: string
  flag: string | null
  season: number | null
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
  referee: string | null
  timezone: string
  date: string
  timestamp: number
  venue: Venue
  status: {
    long: string | null
    short: string | null
    elapsed: number | null
  }
}
