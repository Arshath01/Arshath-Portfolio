import '../style/about.css'

const Title = ()=> {
	const title = 'ABOUT MYSELF'
	return (
		<div>
			<h3 id='title' className='text-dark pt-4'><center>{title}</center></h3>
		</div>
	)
}

const Overview = () => {
	return (
	  <div className="container mt-3 mb-5">
		<h5 className='w-75 mx-auto text-center'>
				I'm Arshath Ahamed, an engineering student passionate about web development problem-solving, and UI/UX design	
			</h5>
	  </div>
	)
  }

const Skills =()=> {
	const technical = {
		title:"WebDeveloper",
		description:"A professional who specializes in creating web applications and websites using HTML5, CSS, Bootstrap, ReactJS, and NodeJS. They are responsible for designing and developing intuitive and functional user interfaces that meet the needs of clients and users."
	}
	const problem = {
		title:"Problem Solver",
		description:"A professional who specializes in creating web applications and websites using HTML5, CSS, Bootstrap, ReactJS, and NodeJS. They are responsible for designing and developing intuitive and functional user interfaces that meet the needs of clients and users."
	}
	const design = {
		title:"UI/UX Designer",
		description:"A professional who specializes in creating web applications and websites using HTML5, CSS, Bootstrap, ReactJS, and NodeJS. They are responsible for designing and developing intuitive and functional user interfaces that meet the needs of clients and users."
	}
	return (
		<div className='container d-flex  rounded p-2' id="skills-container">	
				<div id="box">
					<h3 className='card bg-dark text-light text-center m-2 rounded p-1' >{technical.title}</h3>
					<p className='p-2'>{technical.description}</p>
				</div>
				<div id="box">
					<h3 className='card bg-danger text-light text-center m-2 rounded p-1'>{problem.title}</h3>
					<p className='p-2'>{problem.description}</p>
				</div>
				<div id="box">
					<h3 className='card bg-dark text-light text-center m-2 rounded p-1'>{design.title}</h3>
					<p className='p-2'>{design.description}</p>
				</div>
		</div>
	)
}

function About () {
	return(
		<div className="bg-light" id="About">
			<Title/>
			<Overview/>
			<Skills/>
		</div>
	)
}

export default About;
