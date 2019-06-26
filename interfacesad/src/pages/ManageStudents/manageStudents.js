import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);

  const loadStudent = async () => {
    const response = await api.get("/alunos/");
    setStudents(response.data);
  }
  useEffect(()=>{
    loadStudent();
  },[])
  
  return (
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
                <td>
                  <a href="#">
                    <input
                      class="btn btn-danger"
                      type="submit"
                      name="excluir"
                      value="Excluir"
                    />
                  </a>
                  <Link to="/formStudent">
                    <input
                      class="btn btn-primary"
                      type="submit"
                      name="editar"
                      value="Editar"
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="col-1" />
    </div>
  );
}
