import React from 'react'
import {Link} from "react-router-dom"
import "./Styles.css"

type Props = {
    to : string;
    text: string ;
    bg: string;
    textColor : string ;

    onClick? : () => Promise<void>;
};
const NavLinks = (props : Props) => {
  return (
    <Link to={props.to} style={{backgroundColor:props.bg,color:props.textColor}} className='nav-links'>
      {props.text}    
    </Link>
  )
}

export default NavLinks;