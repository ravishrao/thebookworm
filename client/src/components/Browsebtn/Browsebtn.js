import React from "react";
import "./Browsebtn.css";

const Browsebtn = props => (
<div className="button-container">
		 <h6 className="browse-para">    Looking for a book?  </h6>
			<a className="browse-btn" onClick={() => props.whenClicked('/browse')}>
			<img
			 src={"https://media.giphy.com/media/SU1Ky519kXirC/giphy.gif"}
   			 alt={"Book gif"}
	   		 className="browsebtn" />
		   		<h5 className="Bb">Browse</h5>
			 </a>	
		 </div> 
);

export default Browsebtn;
