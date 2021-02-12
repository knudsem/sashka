import { useEffect } from 'react'
import '../styles/modal.scss'

export default function Modal(props) {

    useEffect(() => {
      const modal = document.getElementById("myModal");
      const closing = document.querySelector("#close");

      closing.onclick = function() {
        props.toggleModal();
      }

      window.onclick = function(event) {
        if (event.target === modal) {
            props.toggleModal();
        }
      }
});

return (
      <div id="myModal">
          
          <div className="modal-content">
              
              <span id="close" className='btn-close'> &times; </span>
              
              <form className="form">

                  <input className="input" type="text" name="name" placeholder="Your name" /><br />
                  <input className="input" type="text" name="password" placeholder="Your e-mail adress" /><br />
                  <textarea className="input" type="text" name="text" placeholder="Message"></textarea>

                  <input className="btn-send" type="submit" name="submit" value="Send" />

              </form>
              
          </div>

      </div>
);
}