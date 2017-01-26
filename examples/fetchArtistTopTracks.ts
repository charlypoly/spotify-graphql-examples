import { SpotifyGraphQLClient } from 'spotify-graphql';
import config from './config';

SpotifyGraphQLClient(config).query(`
  {
    artist(id: "0oSGxfWSnnOXhD2fKuz2Gy") {
      name
      top_tracks {
        name
      }
    }
  }
`).then(executionResult => {
  if (executionResult.errors) {
    console.log('error');
    console.error(JSON.stringify(executionResult.errors));
  } else {
    console.log('success');
    console.log(JSON.stringify(executionResult.data));
  }
})