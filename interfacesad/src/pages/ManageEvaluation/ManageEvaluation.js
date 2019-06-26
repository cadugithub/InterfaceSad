import React,{useState} from 'react';
import api from '../../services/api';
import '../ManageEvaluation/styles.css'
import Action from'../../components/Actions/actions'
export default function ManageEvaluation (){
    const [evaluations, setEvaluations] = useState([]);

    const loadEvaluation = async () => {
        const response = await api.get("/historicos/");
        setEvaluations(response.data);
    };
    loadEvaluation();
    return(
        <div class="row">
            <div class="col-1">
            </div>
            <div class="col">
                <table class="table table table-bordered table-hover">
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
                            <td></td>
                            <Action result={evaluations.resultado}/>
                        </tr>
                        
                        </>
                    ))}
                    </tbody>
                </table>
            </div>
            <div class="col-1">
            </div>
        </div>
    );
    
    
}