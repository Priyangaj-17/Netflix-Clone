import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      console.log(email,password)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate("/");
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <BackgroundImage />
      <div className="container flex column j-center">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <span>Sign In</span>
            </div>
            <div className="container1 flex column j-center a-center">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Sign In</button>
            </div>
            <div className="flex spans a-center j-between">
              <div className="flex">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <span>Need help?</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  .container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .title {
        font-size: 50px;
      }
      .form {
        padding: 2rem;
        background-color: #000000b0;
        height: 45vh;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container1 {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            width: 15rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
          .spans {
            width: 15rem;
            span {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
`;
