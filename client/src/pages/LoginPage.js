import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../userContext";
import axios from 'axios';
export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const data = {
      username: username,
      password: password
    }
    const resp = await axios.post('http://localhost:4000/api/login',data);
    if (resp.status === 200) {
      // await  resp.then(userInfo => {
        setUserInfo(resp.data);
        setRedirect(true);
      // });
      // console.log(resp.data);
      // alert("Logged in successful");
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Login</button>
    </form>
  );
}