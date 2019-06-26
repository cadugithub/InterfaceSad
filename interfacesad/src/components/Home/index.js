import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    return (
    <div class="container-fluid">
        <div class="row">
            <div class="col p-3 display-4">
            <p class="text-center">O que você deseja fazer? Clique em uma imagem.</p>
            </div>

            <div class="col">
            <Link to="/"><img src="../img/aluno1.png" alt="Clique no aluno" usemap="#Map" class="border"/></Link>
                <map name="Map" id="Map">
                <Link to="/"><area alt="Aluno" title="Clique para gerenciar Aluno" href=" {% url 'gerenciar_aluno' %} " shape="rect" coords="2,1,511,511" /></Link>
                </map>
                <p ><strong>Gerenciar Alunos.</strong></p>
            </div>
            <div class="col">
            <img src="../img/avaliacao.png" alt="Clique na avaliação" usemap="#Map1" class="border"/>
            <map name="Map1" id="Map1">
            <Link to="/"><area alt="Avaliacao" title="Clique para gerenciar avaliação diagnóstica" href="{% url 'gerenciar_avaliacao' %}" shape="rect" coords="2,0,510,511" /></Link>
            </map>
            <p><strong>Avaliação Diagnóstica.</strong></p>
            </div>
        </div>
    </div>
    );
}