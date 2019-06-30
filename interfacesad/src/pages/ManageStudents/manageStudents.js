import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);

  const loadStudent = async () => {
    const response = await api.get("/alunos/");
    setStudents(response.data);
  };
  useEffect(() => {
    loadStudent();
  }, []);

  return (
    <>
      <div className="row" id="subHeader">
        <div className="col-1" />
        <div className="col-9">
          <h3>Gerenciamento de Alunos</h3>
        </div>
        <div className="col" id="botao">
          <button type="button" className="btn btn-success">
            Novo
          </button>
        </div>
        <div className="col-1" />
      </div>
      <div className="row">
        <div className="col-1" />
        <div className="col">
          <table className="table table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col" width="150">
                  Matrícula
                </th>
                <th scope="col" width="450">
                  Nome
                </th>
                <th scope="col" width="300">
                  Email
                </th>
                <th scope="col" width="150">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map(students => (
                <tr>
                  <td>{students.matricula}</td>
                  <td>{students.nome}</td>
                  <td>{students.email}</td>
                  <td className="acoes">
                    <button onClick type="button" className="btn btn-danger">
                      Excluir
                    </button>
                    <Link>
                      <button type="button" className="btn btn-info">
                        Detalhes
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-1" />
      </div>
    </>
  );
}
