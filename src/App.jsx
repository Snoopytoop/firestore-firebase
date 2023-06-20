import React from "react";
import "./App.css";
import { auth, db } from "./firebase/Init";
import { collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  function createPost() {
    const post = { title: "Land a 100k job", description: "Finish FE", uid: user.uid };
    addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"));
    const posts = docs.map(elem => ({...elem.data(), id: elem.id}))
    console.log(posts)
  }

  async function getPostById() {
    const hardCodedID = "9yeG68A8u50E7cEUVP5G"
    const docRef = doc(db, "posts", hardCodedID)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const post = docSnap.data()
      console.log(post)
    }
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "john@smith.com", "password123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function login() {
    console.log("login");
    signInWithEmailAndPassword(auth, "john@smith.com", "password123")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <div className="text">{loading ? "loading..." : user.email}</div>
      <button onClick={createPost}>Create post</button>
      <button onClick={getAllPosts}>Get all posts</button>
      <button onClick={getPostById}>Get post by ID</button>
    </div>
  );
}

export default App;
