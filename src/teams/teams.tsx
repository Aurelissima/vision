import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getTeams } from './api.service';

type TeamRaw = {
  acronym: string;
  id: number;
  image_url: string;
}

function Teams () {
  const [teams, setTeams] = useState<TeamRaw[]>([])
  
  useEffect(() => {
    const baseUrl = new URL(process.env.REACT_APP_BASE_URL || '');
    const accessToken = process.env.REACT_APP_TOKEN_SECRET || '';
    if(!teams.length) {
      getTeams(baseUrl, accessToken).then(response => {
        setTeams(response as unknown as TeamRaw[]);
      });
    }
  }, [teams.values, teams.length]);

  return (
    <div>
    <div className="tournaments">
      <div>Teams</div>
    </div>
    <div>
      {
        teams.map(team => {
          return <Accordion sx={{margin: '4pt'}} key={team.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
          {team.acronym}
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordionContent">
              {team.id || 'kekw'}
            </div>
          </AccordionDetails>
        </Accordion>
        })
      }
    </div>
    </div>
  )
}

export default Teams;
