### Examples for [spotify-graphql](https://github.com/thefrenchhouse/spotify-graphql) NPM package

*([Try with the interactive console !](http://spotify.thefrench.house/graphql-console/))*

### Node.js (v6)

- Copy `examples/config.example.json` to `examples/config.json`
- Edit `examples/config.json` with your application info (see [spotify doc](https://developer.spotify.com/my-applications))

```
npm i
nvm use 4.3.2
node examples/fetchTracks.js
```


### TypeScript

- Copy `examples/config.example.ts` to `examples/config.ts`
- Edit `examples/config.ts` with your application info (see [spotify doc](https://developer.spotify.com/my-applications))

```
npm i
tsc
nvm use 4.3.2
node build/examples/fetchTracks.js
```
