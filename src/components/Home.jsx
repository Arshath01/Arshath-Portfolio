import React from 'react';
import {Link} from 'react-router-dom';

function Home (){
	return (
		<div id="Home-bg">
				<div id="navigation">
					<ul className='list-unstyled d-flex justify-content-center'>
						<li><Link to="/About" id="nav">
							<button id="btn" className='btn text-dark'>About</button>
							</Link></li>
						<li><Link to="Project" id="nav">
							<button id="btn" className='btn text-dark'>Projects</button></Link></li>
						<li><Link to="Contact" id="nav">
							<button id="btn" className='btn text-dark'>Contact</button></Link></li>
					</ul>
				</div>
			<center className='text-dark'>
				
				<h1>Welcome To My Portfolio</h1> <br />
				<h4 className='text-secondary'>Hello,I'm Arshath Ahamed,A Student And An Webdeveloper</h4>
				<button className='btn text-light mt-4' id="viewProject">View Project</button>
				{/* <div id='logos'>
					<ul className='list-unstyled d-flex justify-content-center'>
						<li id="instagram"></li>
						<li id="linkedin"></li>
						<li id="twitter"></li>
						<li id="gmail"></li>
					</ul>
				</div> */}
			</center>
		</div>
	)
}

export default Home;
