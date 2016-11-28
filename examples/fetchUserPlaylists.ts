import { SpotifyGraphQLClient } from 'spotify-graphql';
import config from './config';

SpotifyGraphQLClient(config).query(`
  {
    user(id: "11879785") {
      playlists {
        name
        tracks {
          track {
            id
            name
          }
        }
      }
    }
  }
`).then(executionResult => {
  console.log(JSON.stringify(executionResult.data));
});