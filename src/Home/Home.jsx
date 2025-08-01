import React from 'react';
import './Home.css';
// import avatar from './assets/avatar.png';
import image1 from '../assets/profile.jpg'
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaInstagram, FaDev } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home">
      <div className="home-left">
        <h1>
          Hi There,
          <br />
          I'm <span className="name-highlight">Tulasi Jakkam</span>
        </h1>
        <h2>I Am Into <span className="typing-cursor">| Frontend Developer</span></h2>
        <button className="about-button">About Me <span>👉</span></button>
        <div className="social-icons">
          <span><FaLinkedin /></span>
          <span><FaGithub /></span>
          <span><FaTwitter /></span>
          <span><FaTelegram /></span>
          <span><FaInstagram /></span>
          <span><FaDev /></span>
        </div>
      </div>
      <div className="home-right">
        <div className="avatar-container">
          <img src={image1} alt="avatar" className="avatar" />
        </div>
      </div>
    </section>
  );
};

export default Home;