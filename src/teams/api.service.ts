export const getTeams = (baseUrl: URL, accessToken: string) => {
  return fetch(`${baseUrl}teams?filter[acronym]=TSM`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    },
  }).then(data => data.json());
}
