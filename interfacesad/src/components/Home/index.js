import React from "react";
import { Link } from "react-router-dom";
import detailEvaluation from "../../img/avaliacao.png";
import detailStudent from "../../img/detalhesAluno.png";
import "./style.css";
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row col-12">
        <div className="card">
          <div className="card-body">
            <div className="col-5">
              <img
                id="logo-GenAluno"
                src={detailStudent}
                usemap="#Map"
                className="border"
              />
              <area
                alt="Aluno"
                title="Clique para gerenciar Aluno"
                shape="rect"
                coords="2,1,511,511"
              />

              <map name="Map" id="Map" />
            </div>
          </div>
        </div>
        <div className="card text-center col-9">
          <div className="card-header" />
          <div className="card-body">
            <h5 className="card-title">Gerenciar Aluno</h5>
            <p className="card-text">Gerencie seus alunos aqui.</p>
            <Link to="/manageStudents">
              <a href="#" className="btn btn-primary">
                Gerenciar
              </a>
            </Link>
          </div>
          <div className="card-footer" />
        </div>
        <div className="col-2" />
      </div>
      <div className="row col-12">
        <div className="card">
          <div className="card-body">
            <div className="col">
              <img
                src={detailEvaluation}
                id="evaluation"
                alt="Clique na avaliação"
                usemap="#Map1"
                className="border"
              />
              <area
                alt="Avaliacao"
                title="Clique para gerenciar avaliação diagnóstica"
                shape="rect"
                coords="2,0,510,511"
              />

              <map name="Map1" id="Map1" />
            </div>
          </div>
        </div>
        <div className="card text-center col-9">
          <div className="card-header" />
          <div className="card-body">
            <h5 className="card-title">Avaliação de Alunos</h5>
            <p className="card-text">
              Com suporte a texto embaixo, que funciona como uma introdução a um
              conteúdo adicional.
            </p>
            <Link to="/manageEvaluations">
              <a href="#" className="btn btn-primary">
                Avaliar
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
