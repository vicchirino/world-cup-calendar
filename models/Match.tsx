import { FixtureItem, Team } from "../types"
import { teamNameWithFlag } from "../utils"

export class Match {
  fixtureItem: FixtureItem

  constructor(fixtureItem: FixtureItem) {
    this.fixtureItem = fixtureItem
  }

  teams(): { home: Team; away: Team } {
    return this.fixtureItem.teams
  }

  homeTeamName(rtl = true): string {
    return teamNameWithFlag(this.teams().home.name, rtl)
  }

  awayTeamName(rtl = true): string {
    return teamNameWithFlag(this.teams().away.name, rtl)
  }

  goals(): { home: number | null; away: number | null } {
    return this.fixtureItem.goals
  }

  getVenue(): string {
    return `${this.fixtureItem.fixture?.venue.name}, ${this.fixtureItem.fixture?.venue.city}`
  }

  fixtureDate(): Date {
    return new Date(this.fixtureItem.fixture.date)
  }

  fixtureId(): number {
    return this.fixtureItem.fixture.id
  }

  leagueId(): number {
    return this.fixtureItem.league.id
  }

  private getFixtureStatus(): string {
    return this.fixtureItem.fixture.status?.short || "TBD"
  }

  isFixtureLive(): boolean {
    const status = this.getFixtureStatus()
    return (
      status === "LIVE" ||
      status === "1H" ||
      status === "2H" ||
      status === "HT" ||
      status === "ET" ||
      status === "P" ||
      this.isFixtureHappeningNow()
    )
  }

  isFixtureFinished(): boolean {
    const status = this.getFixtureStatus()
    return status === "FT" || status === "AET" || status === "PEN"
  }

  isFixtureHappeningNow(): boolean {
    const now = new Date()
    const nintyMinutes = 90 * 60 * 1000
    const threeMinutes = 3 * 60 * 1000
    const fixtureDate = this.fixtureDate()
    const fixtureEstimatedEndDate = new Date(
      fixtureDate.getTime() + nintyMinutes
    )
    const fixtureStartDateWithMargin = new Date(
      fixtureDate.getTime() + threeMinutes
    )
    return now > fixtureStartDateWithMargin && now < fixtureEstimatedEndDate
  }

  isFixtureNearToStart(): boolean {
    // 20 minutes before the match
    const minutes = 20
    const fixtureDate = this.fixtureDate()
    const now = new Date()
    if (fixtureDate < now) {
      return false
    }
    const nowWithMinutes = new Date(now.getTime() + minutes * 60 * 1000)
    return nowWithMinutes > fixtureDate
  }

  isFixtureReadyToPostPoll(): boolean {
    // 60 minutes before the match
    const minutes = 60
    const fixtureDate = this.fixtureDate()
    const now = new Date()
    if (fixtureDate < now) {
      return false
    }
    const nowWithMinutes = new Date(now.getTime() + minutes * 60 * 1000)
    return nowWithMinutes > fixtureDate
  }

  isFixtureInTheFuture(): boolean {
    return this.fixtureDate() > new Date()
  }

  isFixtureInThePast(): boolean {
    return this.fixtureDate() < new Date()
  }

  isFixtureFromToday(): boolean {
    const today = new Date()
    const fixtureDate = this.fixtureDate()
    return (
      today.getFullYear() === fixtureDate.getFullYear() &&
      today.getMonth() === fixtureDate.getMonth() &&
      today.getDate() === fixtureDate.getDate()
    )
  }
}
