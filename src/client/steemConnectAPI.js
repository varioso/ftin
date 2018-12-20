import sc2 from 'sc2-sdk';

const api = sc2.Initialize({
app: "FTI",
baseURL: "https://steemconnect.com",
callbackURL: "ftin.herokuapp.com",
scope: ["GET, PUT, FETCH, POST"]
});

export default api;
