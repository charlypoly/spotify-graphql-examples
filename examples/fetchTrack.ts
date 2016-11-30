import { SpotifyGraphQLClient } from 'spotify-graphql';
import config from './config';

SpotifyGraphQLClient(config).query(`
  {
    track(id: "3W2ZcrRsInZbjWylOi6KhZ") {
      name
      artists {
        name
      }
      album {
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