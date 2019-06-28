import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function DetailRating(props) {
  const [rating, setRating] = useState([]);
  const [matricula, setAluno] = useState([]);
  const [descricaoRenda, setdescricaoRenda] = useState([]);

  const loadRading = async () => {
    const { id } = props.match.params;
    const response = await api.get(`/historico/${id}/`);
    setRating(response.data);
    setdescricaoRenda(response.data.renda.descricao);
    setAluno(response.data.aluno.matricula);
    console.log(response.data.renda.descricao);
  };

  useEffect(() => {
    loadRading();
  }, [props]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3" />
        <div className="col-6">
          <h2>Detalhes Avaliação</h2>
        </div>
        <div className="col-3" />
      </div>

      <div className="row">
        <div className="col-1" />
        <div className="col">
          <form action="" className="border">
            <div className="form-group row">
              <label className="col-3 col-form-label">
                <b>Matricula:</b>
              </label>

              <label className="col-3 col-form-label">{matricula}</label>

              <label className="col-3 col-form-label">
                <b>Média Geral:</b>
              </label>

              <label className="col-3 col-form-label">{rating.media}</label>
            </div>

            <div className="form-group row">
              <label className="col-4 col-form-label">
                <b>Média em Português:</b>
              </label>
              <label className="col-2 col-form-label">
                {rating.mediaPortugues}
              </label>
              <label className="col-4 col-form-label">
                <b>Média em Matemática:</b>
              </label>
              <label className="col-2 col-form-label">
                {rating.mediaMatematica}
              </label>
            </div>

            <div className="form-group row">
              <label className="col-3 col-form-label">
                <b>Presenças:</b>
              </label>
              <label className="col-3 col-form-label">{rating.presencas}</label>
              <label className="col-3 col-form-label">
                <b>Faltas:</b>
              </label>
              <label className="col-3 col-form-label">{rating.faltas}</label>
            </div>

            <div className="form-group row">
              <label className="col-2 col-form-label">
                <b>Renda:</b>
              </label>
              <label className="col-4 col-form-label">{descricaoRenda} </label>
              <label className="col-2 col-form-label">
                <b>Data:</b>
              </label>
              <label className="col-4 col-form-label">{rating.data}</label>
            </div>

            <div className="form-group row">
                <label className="col-3 col-form-label">
                  <b>Resultado:</b>
                </label>
              
              
              <label className="col-3 col-form-label">{rating.resultado == undefined ? (
                  <p />
                ) : (
                  <p>{rating.resultado.descricao}</p>
                )}
              </label>
            </div>
            <div className="form-group">
              <div className="col-12 col-sm-12">
                <label for="exampleFormControlTextarea1">
                  <b>Observação:</b>
                </label>
                <textarea className="col-12"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  value={rating.observacao}
                  rows="3"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-1" />
      </div>
    </div>
  );
}
