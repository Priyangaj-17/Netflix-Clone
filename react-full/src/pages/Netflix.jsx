import React, { useEffect, useState } from "react";
import BackgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Netflix() {
  const [isScroll, setIsScroll] = useState();
  const navigate = useNavigate();
  // useEffect to handle side effect (e.g., scroll position check)
  useEffect(() => {
    // Function to check scroll position
    const checkScrollPosition = () => {
      setIsScroll(window.pageYOffset === 0 ? false : true);
    };

    // Initial check after the component renders
    checkScrollPosition();

    // Set up an interval to check the scroll position periodically (example: every 500ms)
    const intervalId = setInterval(checkScrollPosition, 500);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <Container>
      <Navbar isScroll={isScroll} />
      <div className="hero">
        <img
          src={BackgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Logo" />
          </div>
          <div className="buttons flex">
            <button className="flex j-center a-center" onClick={()=>navigate("/player")}>
              <FaPlay /> Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> More info
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Netflix;

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      img{
        height: 100%;
        width: 100%;
        margin-left: 5rem;
      }
    }
    .buttons{
      margin: 5rem;
      gap: 2rem;
      button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  
    
`;
