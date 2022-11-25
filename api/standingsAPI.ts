import { FixtureItem, StandingResponse } from "../types"
import { getRequest } from "./utils"

export async function getStandings(
  league: number,
  season: string
): Promise<StandingResponse["response"]> {
  const result = await getRequest<StandingResponse>("standings", {
    league,
    season,
  })
  return result.response
}
