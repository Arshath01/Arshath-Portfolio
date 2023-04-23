import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../logos/linkedin.png'
import github from '../logos/github.png'
import twitter from '../logos/twitter.png'
import instagram from '../logos/instagram.png'
import '../style/home.css'

const Navbar = () => { //Navbar component
  const links = ['Home', 'About', 'Project', 'Contact'] //you can change this array for different links
  const [menuOpen, setMenuOpen] = useState(false);
  const [style,setStyle] = useState({display:'none'})

  return (
    <div className='container-fluid d-flex ' id='navbar'>
      <div className="title">
        <h3 className='ms-5'><span className='text-danger'>A</span>RSHATH</h3>
      </div>
      <div className="links">
        <ul className={menuOpen ? 'list-unstyled d-flex flex-column me-5 show-menu' : 'list-unstyled d-flex me-5'} id='ul'>
          {links.map((link) => (
            <li key={link}><Link to={`/${link}`} id="Link">{link}</Link></li>
          ))}
        </ul>

      </div>
    </div>
  )
};

const Container = () => {
  const name = 'Arshath Ahamed'
  const designation = 'My portfolio showcases my skills, experience, and projects succinctly.'
  return (
    <div className="container" id="container">
      <center>
        <h1 className='mb-3'>{name}</h1>
        <h3 className='text-danger w-50'>{designation}</h3>
      </center>
    </div>
  )
}

const SocialMedia = () => {
  const medias = [twitter, linkedin, instagram, github]
  return (
    <center id="socialmedia">
      <ul className='d-flex list-unstyled'>
        {medias.map((media) => (
          <li key={media}><img src={media} id="link-li" alt="" /></li>
        ))}
      </ul>
    </center>
  )
}

function Home() { //Main component
  return (
    <div className='' id="main-component">
      <Navbar />
      <Container />
      <SocialMedia />
    </div>
  )
}

export default Home;