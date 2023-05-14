import express from "express";
import { createConnection } from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const conn = createConnection({
  host: "localhost",
  user: "root",
  password: "sept22",
  database: "cdac_db",
});

conn.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database  Connected !!");
  }
});

app.post("/registation", (request, response) => {
  //in POST method we r receiveing entire POST body...
  var insertQry = `insert into registration values( '${request.body.name}',
  '${request.body.mobile}',
  '${request.body.email}',
  '${request.body.password}')`;

  conn.query(insertQry, (error, result) => {
    if (error) {
      response.status(500).send({ message: "Error in inserting client" });
    } else {
      response.status(201).send({ message: "client registarted successfully" });
    }
  });
});
//=================================================
//to get data of students in DB>>

app.get("/registation", (request, response) => {
  var selectQry = `select * from registration`;

  conn.query(selectQry, (error, result) => {
    if (error) {
      response.status.send({ message: "error in fetching clients" });
    } else {
      response.status(200).send(result);
    }
  });
});
//=========================================

app.listen(9800, () => {
  console.log("listening on port 9800");
});
