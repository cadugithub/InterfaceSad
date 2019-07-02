import React, { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import api from "../../services/api"
import './style.css'

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
 ? (    <td className="acoes">
 <Link to={`/resultChart/${props.idHistoric}/`}><button type="button" className="btn btn-warning" id="alter">Avaliar</button></Link>
 <button onClick = {deleteStudent} type="button" className="btn btn-danger">Excluir</button>
 <Link to={`detailRating/${props.idHistoric}`}>
<button  type="button" className="btn btn-info">Detalhes</button>
 </Link>
</td>) 
: (<td className="acoes">
 <button onClick = {deleteStudent} type="button" className="btn btn-danger">
   Excluir
 </button>
 <Link to="/">
 <Link to={`detailRating/${props.idHistoric}`}>
   <button type="button" className="btn btn-info">
     Detalhes
   </button>
</Link>
 </Link>
</td>)
}