import React, { useEffect } from "react"
import SvgButtonLetsChat from '../svgComponents/ButtonLetsChat'
import SvgBar from '../svgComponents/Bar'
import style from '../styles/overwrite.module.scss'



export default function Screen(props) {

	const isMobile = props.mobile;


	if (isMobile) {
		return (
			<div className={style.dflex}>
				<div className={style.w66}>
				<div className={style.titleMobileContainer}>
				<h1 className={style.titleFromLeft}>The Sashka</h1>
				<h1 className={style.titleFromRight}>Studios</h1>
				</div>
				
				<h2 className={style.textFadeInMobile}> 
				We turn your ideas into reality!
				Sashka studios provides you with tailor made websites with a custom design and amazing creativity.
				Sit back and relax, your website is being designed
				</h2>
				
				<SvgButtonLetsChat 
				onClick={props.handleClick} 
				className={style.svgLetsChat }
				width="60%"
				mobile_screen={isMobile ? 'true' : 'false'}
				/>

				</div>
			</div>
			)
	} 

	return (
		<div className="d-flex">
			<div className="w-50">
			
			<div className="w-50 title-container">
			<h1 className="title-from-right">The Sashka</h1>
			<h1 className="title-from-left">Studios</h1>
			<SvgBar className='svg-bar'/>
			</div>
			
			<h2 className='text-fadein'> 
			We turn your ideas into reality!
			Sashka studios provides you with tailor made websites with a custom design and amazing creativity.
			Sit back and relax, your website is being designed
			</h2>
			
			<SvgButtonLetsChat 
			onClick={props.handleClick} 
			className="w-50 svg-letschat"
			/>

			</div>
		</div>
		)
}
