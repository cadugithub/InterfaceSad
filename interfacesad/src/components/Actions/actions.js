import React, { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import api from "../../services/api"

export default function Action(props) {

const [student, setStudents] = useState([])

const loadStudent = async () =>{
  const response = await api.get(`/historico/${props.idHistoric}/`)
  setStudents(response.data);
}
const deleteStudent = async () =>{
  const response = await api.delete(`/historico/${props.idHistoric}/`);
}

useEffect(() => {
  loadStudent();
}, [])
 return props.result === null 
 ? (    <td class="acoes">
 <Link to="/resultChart"><button type="button" className="btn btn-warning" id="alter">A</button></Link>
 <button onClick = {deleteStudent} type="button" className="btn btn-danger">E</button>
 <Link to={`detailRating/${props.idHistoric}`}>
<button  type="button" className="btn btn-info">D</button>
 </Link>
</td>) 
: (<td class="acoes">
 <button onClick = {deleteStudent} type="button" className="btn btn-danger">
   E
 </button>
 <Link to="/">
 <Link to={`detailRating/${props.idHistoric}`}>
   <button type="button" className="btn btn-info">
     D
   </button>
</Link>
 </Link>
</td>)
}