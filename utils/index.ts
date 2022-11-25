import { FixtureItem } from "../types"
import { createEvents, EventAttributes } from "ics"

export const teamNameWithFlag = (teamName: string, rtl = false): string => {
  let flag = ""
  switch (teamName) {
    case "Qatar":
      flag = "🇶🇦"
      break
    case "Germany":
      flag = "🇩🇪"
      break
    case "Denmark":
      flag = "🇩🇰"
      break
    case "Brazil":
      flag = "🇧🇷"
      break
    case "France":
      flag = "🇫🇷"
      break
    case "Belgium":
      flag = "🇧🇪"
    case "Serbia":
      flag = "🇷🇸"
      break
    case "Spain":
      flag = "🇪🇸"
      break
    case "Croatia":
      flag = "🇭🇷"
      break
    case "Switzerland":
      flag = "🇨🇭"
      break
    case "England":
      flag = "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
      break
    case "Netherlands":
      flag = "🇳🇱"
      break
    case "Argentina":
      flag = "🇦🇷"
      break
    case "Iran":
      flag = "🇮🇷"
      break
    case "South Korea":
      flag = "🇰🇷"
      break
    case "Saudi Arabia":
      flag = "🇸🇦"
      break
    case "Japan":
      flag = "🇯🇵"
      break
    case "Uruguay":
      flag = "🇺🇾"
      break
    case "Ecuador":
      flag = "🇪🇨"
      break
    case "Canada":
      flag = "🇨🇦"
      break
    case "Ghana":
      flag = "🇬🇭"
      break
    case "Senegal":
      flag = "🇸🇳"
      break
    case "Poland":
      flag = "🇵🇱"
      break
    case "Portugal":
      flag = "🇵🇹"
      break
    case "Tunisia":
      flag = "🇹🇳"
    case "Morocco":
      flag = "🇲🇦"
      break
    case "Cameroon":
      flag = "🇨🇲"
      break
    case "USA":
      flag = "🇺🇸"
      break
    case "Mexico":
      flag = "🇲🇽"
      break
    case "Wales":
      flag = "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
      break
    case "Australia":
      flag = "🇦🇺"
      break
    case "Costa Rica":
      flag = "🇨🇷"
      break
    default:
      break
  }
  return rtl ? `${flag} ${teamName}` : `${teamName} ${flag}`
}

export const createFixtureEvent = (fixture: FixtureItem) => {
  const fixtureDate = new Date(fixture.fixture.date)
  const nintyMinutes = 90 * 60 * 1000
  const fixtureEstimatedEndDate = new Date(fixtureDate.getTime() + nintyMinutes)
  const year = fixtureDate.getFullYear()
  const month = fixtureDate.getMonth() + 1
  const day = fixtureDate.getDate()
  const hours = fixtureDate.getHours()
  const minutes = fixtureDate.getMinutes()
  const event: EventAttributes = {
    start: [year, month, day, hours, minutes],
    duration: { minutes: 100 },
    title: `${teamNameWithFlag(
      fixture.teams.home.name,
      true
    )} vs ${teamNameWithFlag(fixture.teams.away.name, true)}`,
    location: `🏟 ${fixture.fixture.venue.name} ,${fixture.fixture.venue.city}`,
    // url: "http://www.bolderboulder.com/",
    categories: ["World Cup", "Qatar 2022", "Football", "Soccer"],
    status: "CONFIRMED",
    busyStatus: "FREE",
    organizer: { name: "World Cup Bot", email: "copadelmundobot@gmail.com" },
  }

  return event
}

export const downloadCalendarEvents = (fixtures: FixtureItem[]) => {
  const events = fixtures.map(fixture => createFixtureEvent(fixture))
  createEvents(events, (error, value) => {
    if (error) {
      // console.log(error)
      return
    }
    window.open("data:text/calendar;charset=utf8," + value)
  })
}
