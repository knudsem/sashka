import React, { useEffect } from "react"
import '../styles/menu.scss'

export default function Menu(props) {

return (
      <>
      <div id="myMenu" className={props.classState}>
          
          <div className="menu-content">        
              <div className="button">Come</div>
              <div className="button">Back</div>
              <div className="button">Later</div>
              <div className="button">For</div>
              <div className="button">More</div>
              <div className="button">Content</div>
          </div>

      </div>

      <div id="outofmenu" onClick={props.toggleMenu} className={props.classState}>
      </div>
      </>
);
}