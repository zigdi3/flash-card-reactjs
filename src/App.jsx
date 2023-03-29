import React, { useEffect, useState } from 'react';
import { Container, Row } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import Axios from "axios";
import cors from 'cors';
//import MyCard from "./components/MyCard"

function App() {
  const [profile, setProfiles] = useState(0)

  const fetchDetails = async () => {
    debugger;
    const config = {
      headers: {
        //USE CAREFULLY ALLOW REQUEST FROM ANYWHERE ACTORS
        'Access-Control-Allow-Origin': '*'
      }
    };

    const { data } = await Axios.get("http://localhost:8080/flash-card/", config).then((result) => {
      console.log("result", result);
    }).catch((error) => {
      console.log("Error", error);
    });
    console.log(JSON.stringify(res));
    debugger;
    const responseData = res.data;

    setProfiles(responseData);

  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid className=" bg-primary App">
      <Row><li>  <h2>{profile.name}</h2>
        <p>{profile.linkedlnUrl}</p>
        <p>{profile.gitHubUrl}</p>
      </li>
      </Row>

    </Container>
  );
}

export default App;
