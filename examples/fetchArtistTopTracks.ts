import { SpotifyGraphQLClient } from 'spotify-graphql';
import config from './config';

SpotifyGraphQLClient(config).query(`
  {
    artist(id: "0oSGxfWSnnOXhD2fKuz2Gy") {
      name
      topTracks {
        name
      }
    }
  }
`).then(executionResult => {
  console.log(JSON.stringify(executionResult.data));
});