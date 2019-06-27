import React, {useState, useEffect} from 'react';
import api from '../../services/api';


export default function DetailRating (props){

    const [rating, setRating] = useState([])
    const [matricula, setAluno] = useState([])

   const loadRading = async () =>{
        const { id } = props.match.params
        const response = await api.get(`/historico/${id}/`)
        setRating(response.data)
        console.log(response.data.aluno.matricula)
    }

    const loadAluno = async () =>{
        const { id } = props.match.params
        const response = await api.get(`/historico/${id}/`)
        setAluno(response.data.aluno.matricula)
    }

    useEffect(() => {
        loadRading();
        loadAluno();
    }, [props])
    return (
        
        <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h2>Detalhes Avaliação Diagnóstica</h2>
                <form action="" method="POST" class="border">
                    <div class="form-group row">
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Matricula:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={matricula} readonly=""/>
                        </div>
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Média Geral:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={rating.media} readonly=""/>
                        </div>
                    </div>
    
                    <div class="form-group row">
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Média em Língua Portuguesa:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={rating.mediaPortugues} readonly=""/>
                        </div>
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Média em Matemática:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={rating.mediaMatematica} readonly=""/>
                        </div>
                    </div>
    
                    <div class="form-group row">
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Presenças:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={rating.presencas} readonly=""/>
                        </div>
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Faltas:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={rating.faltas} readonly=""/>
                        </div>
                    </div>
    
                    <div class="form-group row">
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Renda:</label>
                        </div>
                        <div class="col-md-4">
                        <input type="text" class="form-control" value= {rating.renda} readonly=""/>
                        </div>
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Data:</label>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" value={rating.data} readonly=""/>
                        </div>
                    </div>
    
                    <div class="form-group row">
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Resultado:</label><label class="col-sm-12 col-form-label"></label>
                        </div>
                        <div class="col col-sm-2">
                            {rating.resultado == undefined ? <p></p> : <p>{rating.resultado.descricao}</p>}
                        </div>
                    </div>
                    
                </form>
    
            </div>
        </div>
    </div>
    
    );

}