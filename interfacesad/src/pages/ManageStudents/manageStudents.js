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
      <div class="row" id="subHeader">
        <div class="col-1" />
        <div class="col-9">
          <h3>Gerenciamento de Alunos</h3>
        </div>
        <div class="col" id="botao">
          <button type="button" class="btn btn-success">
            Novo
          </button>
        </div>
        <div class="col-1" />
      </div>
      <div class="row">
        <div class="col-1" />
        <div class="col">
          <table class="table table table-bordered table-hover">
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
        <div class="col-1" />
      </div>
    </>
  );
}
