import React, { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import api from "../../services/api"

export default function Action(props) {

const [student, setStudents] = useState([])

const loadStudent = async () =>{
  const response = await api.get(`/aluno/${props.idStudent}/`)
  setStudents(response.data);
}

useEffect(() => {
  loadStudent();
  console.log(props.idStudent)
}, [])
 return props.result === null 
 ? (    <td class="acoes">
 <button type="button" className="btn btn-warning" id="alter">A</button>
 <button type="button" className="btn btn-danger">E</button>
 <Link to={`detailRating/${props.idStudent}`}>
<button type="button" className="btn btn-info">D</button>
 </Link>
</td>) 
: (<td class="acoes">
 <button type="button" className="btn btn-danger">
   E
 </button>
 <Link to="/">
 <Link to={`detailRating/${props.idStudent}`}>
   <button type="button" className="btn btn-info">
     D
   </button>
</Link>
 </Link>
</td>)
}