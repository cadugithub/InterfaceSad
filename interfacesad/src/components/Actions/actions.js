import React from "react";
import {Link} from 'react-router-dom'
export default function Action(props) {

 return props.result === null 
 ? (    <td class="acoes">
 <button type="button" className="btn btn-warning" id="alter">A</button>
 <button type="button" className="btn btn-danger">E</button>
 <Link to="/">
<button type="button" className="btn btn-info">D</button>
 </Link>
</td>) 
: (<td class="acoes">
 <button type="button" className="btn btn-danger">
   E
 </button>
 <Link to="/">
   <button type="button" className="btn btn-info">
     D
   </button>
 </Link>
</td>)
}