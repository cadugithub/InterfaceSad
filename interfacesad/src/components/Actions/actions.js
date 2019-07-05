import React, { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import api from "../../services/api"
import { Button, Modal } from "react-bootstrap";
import './style.css'

export default function Action(props) {

const deleteStudent = async () =>{
  const response = await api.delete(`/historico/${props.idHistoric}/`);
}

  const [rating, setRating] = useState([]);
  const [matricula, setAluno] = useState([]);
  const [descricaoRenda, setdescricaoRenda] = useState([]);
  
  const [show, setShow] = useState([false]);

  const loadRading = async () => {
    const response = await api.get(`/historico/${props.idHistoric}/`);
    setRating(response.data);
    setdescricaoRenda(response.data.renda.descricao);
    setAluno(response.data.aluno.matricula);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

useEffect(() => {
  loadRading();
  setShow(false);
}, [])
 return props.result === null 
 ? (    <td className="acoes">
 <Link to={`/resultChart/${props.idHistoric}/`}><button type="button" className="btn btn-warning" id="alter">Avaliar</button></Link>
 <button onClick = {deleteStudent} type="button" className="btn btn-danger">Excluir</button>
 
<button  type="button" className="btn btn-info" onClick={handleShow}>Detalhes</button>
<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Detalhes Avaliação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <form action="">
                <div className="form-group row">
                  <div className="col">
                    <table class="table table-striped table-bordered table-responsive-sm-12">
                      <thead />
                      <tbody>
                        <tr>
                          <td>
                            <b>Matricula:</b>
                          </td>
                          <td>{matricula}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Média Geral:</b>
                          </td>
                          <td>{rating.media}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Média em Português:</b>
                          </td>
                          <td>{rating.mediaPortugues}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Média em Matemática:</b>
                          </td>
                          <td>{rating.mediaMatematica}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Presenças:</b>
                          </td>
                          <td>{rating.presencas}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Faltas:</b>
                          </td>
                          <td>{rating.faltas}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Renda:</b>
                          </td>
                          <td>{descricaoRenda}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Data:</b>
                          </td>
                          <td>{rating.data}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Resultado:</b>
                          </td>
                          <td>
                            {rating.resultado == undefined ? (
                              <p />
                            ) : (
                              <p>{rating.resultado.descricao}</p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <b>Observação:</b>
                          </td>
                          <td>
                            <textarea
                              className="form-control"
                              value={rating.observacao}
                              rows="3"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
</td>) 
: (<td className="acoes">
 <button onClick = {deleteStudent} type="button" className="btn btn-danger">
   Excluir
 </button>
   <button type="button" className="btn btn-info">
     Detalhes
   </button>
</td>)
}