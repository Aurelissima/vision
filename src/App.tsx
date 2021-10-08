import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
import vision_icon from './assets/vision_icon.png';
import './popup/popup.css';
import Teams from './teams/teams';

// type SeriesRaw = {
//   id: number;
//   league_id: number;
//   begin_at: string;
//   end_at: string;
//   description: string | null;
//   full_name: string;
//   modified_at: string;
//   name: string | null;
//   season: string;
//   tier: string;
//   winner_id: number | null;
//   winner_type: string | null;
//   year: number | Date;
// }

// type VideoGame = {
//   current_version: string;
//   id: number;
//   name: string;
//   slug: string;
// }

// type LeagueRaw = {
//   id: number;
//   image_url: string;
//   modifiedAt: string;
//   name: string;
//   series: SeriesRaw[];
//   slug: string;
//   url: string | null;
//   videogame: VideoGame;
// }


 function App() {
  
  // const params = `filter[opponent_id]=[${teamIds.then(ids => ids[0])}]`;

  
  // const leaguesResponse = (fetch(`${baseUrl}matches`, {
  // method: 'GET',
  // mode: 'cors',
  // headers: {
  //     'Authorization': `Bearer ${accessToken}`,
  //     'Accept': 'application/json'
  // },
  // })) as unknown as Promise<LeagueRaw[]>;

  // const transformSeries = (series: SeriesRaw) => {
  //   return {
  //     id: series.id,
  //     leagueId: series.league_id,
  //     name: series.full_name,
  //     year: series.year,
  //     season: series.season,
  //     startAt: series.begin_at,
  //     endAt: series.end_at,
  //     winnerId: series.winner_id,
  //     winnerType: series.winner_type,
  //   }
  // }

  // const transformLeagues = (leagues: LeagueRaw) => {

  // }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <div className="main">
        <div className="container">
          <div className="mainHeader">
            <img src={vision_icon} alt="Logo" id="header-logo"/>
            <MenuIcon></MenuIcon>
          </div>
        </div>
        <Teams></Teams>
      </div>
    </div>
  );
}

export default App;
