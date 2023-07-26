import Header from "./header";
import {Outlet} from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';


const response  = await axios.get('http://localhost:4000/api/getBlog');
// console.log(response.data.content);
const blogData=response.data.content;

const Body=()=>{
  return (
    <div>
      {
          blogData.map((res)=>(
            <Blog obj={res}></Blog>
          ))
      }
    </div>
  )
}

const Blog=({obj})=>{
  // console.log(obj);
  // console.log(obj.content.length);
const filepath = obj.cover; //file path stored in database
// console.log(filepath);
const baseUrl = "http://localhost:4000"; // Get the base URL of your React app
console.log(baseUrl);

const imageRelativePath = filepath.replace(/\\/g, '/'); // Convert backslashes to forward slashes
console.log(imageRelativePath);

  const imageUrl = `${baseUrl}/${imageRelativePath}`;
  return (
   
    <Card style={{ width: '300px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
    <Card.Image src={imageUrl} alt="Card Image" fluid />
    <Card.Body>
      <Card.Title>{obj.title}</Card.Title>
      <Card.Text>{obj.content.slice(3,obj.content.length-4)}</Card.Text>
    </Card.Body>
  </Card>
      // <img src={imageUrl}></img>
      // <h1>{obj.title}</h1>
      // <h3>{obj.summary}</h3>
      // <p>{obj.content.slice(3,obj.content.length-4)}</p>
  
  )
}

export default function Layout() {
  return (
    <main>
      <Header />
      {/* <Body></Body> */}
      <Outlet />
    </main>
  );
}