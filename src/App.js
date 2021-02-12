import React from 'react'
import SvgTheMask from './svgComponents/TheMask'
import SvgSashkaMobile from './svgComponents/SashkaMobile'
import Modal from './Components/modal'
import Menu from './Components/menu'
import Screen from './Components/screen'
import { Squash as Hamburger } from 'hamburger-react'
import './styles/app.scss'
import './styles/animations.scss'

class App extends React.PureComponent {
	constructor(props){
		super(props)

		this.state={
			isModalOpen:false,
			isMenuOpen:false,
			windowWidth:window.innerWidth,
			breakpoint:925, /*Change also variable in variables.scss with a px higher if you change this value*/
		}

		this.toggleModal = this.toggleModal.bind(this)
		this.toggleMenu = this.toggleMenu.bind(this)
		this.handleResize = this.handleResize.bind(this)
	}
 
	toggleModal(){
		this.setState({isModalOpen:!this.state.isModalOpen})
	}

	toggleMenu(){
		this.setState({isMenuOpen:!this.state.isMenuOpen})
	}

	handleResize(){
		this.setState({windowWidth:window.innerWidth})
	}

	componentDidMount(){
		window.addEventListener('resize', this.handleResize)
	}

	render(){

		console.log(this.state.isMenuOpen)
		return(
		
			<div className="App">
				
				<div id="burger-menu" className={`burger-container ${this.state.isMenuOpen ? 'open' : ''}`} onClick={this.toggleMenu} >
					<Hamburger  color={this.state.isMenuOpen ? 'white' : 'black'} toggled={this.state.isMenuOpen} toggle={this.toggleMenu} />
				</div>
			 	 
				  <Menu toggleMenu={this.toggleMenu} classState={this.state.isMenuOpen ? 'open' : 'close'} />
			  	  

				  {this.state.windowWidth > this.state.breakpoint ? <Screen handleClick={this.toggleModal}/> : <Screen handleClick={this.toggleModal} mobile/>}
		  
				  {this.state.isModalOpen ? <Modal toggleModal={this.toggleModal} /> : null }

				  {this.state.windowWidth > this.state.breakpoint ? <SvgTheMask /> : <SvgSashkaMobile /> }

	  
		  </div>
		)
	}
}


export default App;
