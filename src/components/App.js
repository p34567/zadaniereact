import React, { useEffect } from "react";
import "../styles.css";
import axios from "axios";


export default function App() {
  const [testData, setTestData] = React.useState([]);
  useEffect(() => {
    //2nd way
    axios.get("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json").then((res) => setTestData(res.data));
  });
  return (
    <div className="App">
  
     
      {testData &&
        testData.map(({ last_name,first_name, id }) => (
          <div key={id} className="row">
            <strong>{first_name}{" "}{last_name}</strong> <form action=""><input type="checkbox"></input></form>
          </div>
        ))}
      <hr />
      
    </div>
  );
}
