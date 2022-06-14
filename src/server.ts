import { app } from "./app";

const SERVER_PORT = 3002;
const SERVER_MESSAGE = () => {
  console.log(`Serve is running at http://localhost:${SERVER_PORT}`);
};

app.listen(SERVER_PORT, SERVER_MESSAGE);
