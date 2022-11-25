import { FixtureItem, FixtureResponse } from "../types"
import { getRequest } from "./utils"

export async function getFixtures(
  parameters: any
): Promise<FixtureResponse["response"]> {
  const result = await getRequest<FixtureResponse>("fixtures", parameters)
  return result.response
}

export async function getFixturesFromLeague(
  league: number,
  season: string
): Promise<FixtureItem[]> {
  const fixtureItems = await getFixtures({
    league: league,
    season: season,
  })
  return fixtureItems
}

export async function getFixture(
  fixtureID: number
): Promise<FixtureItem | undefined> {
  const fixtureItems = await getFixtures({ id: fixtureID })
  return fixtureItems.length > 0 ? fixtureItems[0] : undefined
}
