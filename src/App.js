import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { Navbar } from "react-bootstrap";
import './App.module.css'

const USER_LIST = [
  {
    name: "Ben",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzv-T_TXTYEMD2mczNV2L5KL_2G-HIjXh9g&usqp=CAU",
    bio: "Love to die to criminal",
  },
  {
    name: "Peter",
    img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/06/spider-man-tom-holland-once-recalled-mcus-kevin-feige-calling-to-tell-him-hes-the-new-peter-parker-after-announcing-it-to-the-world-i-said-i-know-i-read-001.jpg",
    bio: "Love fight criminal",
  },
  {
    name: "May",
    img: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2021/12/spider-man-no-way-home-aunt-may.jpeg",
    bio: "Love to cook",
  },
];

function App() {
  const users = USER_LIST;
  return (
    <div className="App">
      <nav className="bg-body-tertiary">
        <Link to="/">Home</Link>
        <Link to="users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList users={users} />} />
        <Route path="/users/:id" element={<UserDetail users={users} />} />
        <Route path='/people' element={<Navigate replace to='/users'/>}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((p, index) => (
        <User name={p.name} img={p.img} id={index} />
      ))}
    </div>
  );
}

function User({ name, img, id }) {
  const styles={
    height: '200px',
    // aspectRatio:'1/1',
    borderRadius:"10%"
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/users/${id}`);
  };

  return (
    <section onClick={handleClick}>
      <img src={img} alt={name} style={styles}></img>
      <h2>
        Hello, <span>{name}</span>
      </h2>
    </section>
  );
}

function UserDetail({ users }) {
  const { id } = useParams();
  const user = users[id];

  return (
    <section>
      <img src={user.img} alt={user.name} width="300px"></img>
      <h2>
        Hello, <span>{user.name}</span>
      </h2>
      <p className="bio">{user.bio}</p>
    </section>
  );
}

function Home() {
  return (
    <div>
      <h1>This is homepage</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 not found</h1>
    </div>
  );
}

export default App;
