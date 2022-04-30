const express = require("express");
const path = require("path");
const app = express();

const http = require("http").createServer(app);
http.listen(8080, function () {
  console.log("listening on 8080");
});

// app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(
  "/react",
  express.static(path.join(__dirname, "react-test-project/build"))
);

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "public/main.html"));
});

app.get("/react", function (request, response) {
  response.sendFile(
    path.join(__dirname, "react-test-project/build/index.html")
  );
});

// app.get("*", function (request, response) {
//   response.sendFile(
//     path.join(__dirname, "react-test-project/build/index.html")
//   );
// });
