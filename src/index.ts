import app from "./app";

// Set the port for the server to listen on
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(
    `\nServer started at ${new Date().toLocaleString()} on http://localhost:${port}`
  );
});
