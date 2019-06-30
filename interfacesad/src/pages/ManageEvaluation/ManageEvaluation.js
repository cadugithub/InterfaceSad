import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "../ManageEvaluation/styles.css";
import Action from "../../components/Actions/actions";

export default function ManageEvaluation() {
  const [evaluations, setEvaluations] = useState([]);

  const loadEvaluation = async () => {
    const response = await api.get("/historicos/");
    setEvaluations(response.data);
  };
  useEffect(() => {
    loadEvaluation();
  }, [evaluations]);

  return (
    <>
      <div className="row" id="subHeader">
        <div className="col-1" />
        <div className="col-9">
          <h3>Gerenciamento de Avaliações</h3>
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
                <th>matrícula</th>
                <th>Nome</th>
                <th>Data</th>
                <th>Resultado</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {evaluations.map(evaluations => (
                <>
                  <tr key={evaluations.id}>
                    <td>{evaluations.aluno.matricula}</td>
                    <td>{evaluations.aluno.nome}</td>
                    <td>{evaluations.data}</td>
                    <td>
                      {evaluations.resultado == undefined ? (
                        <p />
                      ) : (
                        <p>{evaluations.resultado.descricao}</p>
                      )}
                    </td>
                    <Action
                      result={evaluations.resultado}
                      idHistoric={evaluations.id}
                    />
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-1" />
      </div>
    </>
  );
}
