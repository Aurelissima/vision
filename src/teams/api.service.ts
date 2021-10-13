export const getTeams = (baseUrl: URL, accessToken: string) => {
  return fetch(`${baseUrl}teams?filter[acronym]=T1`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    },
  }).then(data => data.json());
}

export const getUpcomingMatches = (baseUrl: URL, accessToken: string, teamId: number) => {
  return fetch(`${baseUrl}matches/upcoming?filter[opponent_id]=${teamId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    },
  }).then(data => data.json());
}
