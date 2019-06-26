import React, {Component} from 'react';
import api from '../../services/api';


export default class DetailRating extends Component{
    state = {
        rating: [],
    }
    componentDidMount(){
        this.loadRading();
    }
    loadRading = async () =>{
        const { id } = this.props.match.params;
        const response = await api.get(`/historico/${id}/`);
        this.setState({rating: response.data})
    }
    render=()=>(
        
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
                            <select class="form-control">
                                <option></option>
                            </select>
                        </div>
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Média Geral:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={this.state.rating.media} readonly=""/>
                        </div>
                    </div>
    
                    <div class="form-group row">
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Média em Língua Portuguesa:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={this.state.rating.mediaPortugues} readonly=""/>
                        </div>
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Média em Matemática:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={this.state.rating.mediaMatematica} readonly=""/>
                        </div>
                    </div>
    
                    <div class="form-group row">
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Presenças:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={this.state.rating.presencas} readonly=""/>
                        </div>
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Faltas:</label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={this.state.rating.faltas} readonly=""/>
                        </div>
                    </div>
    
                    <div class="form-group row">
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Renda:</label>
                        </div>
                        <div class="col-md-4">
                        <input type="text" class="form-control" value= {this.state.rating.renda} readonly=""/>
                        </div>
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Data:</label>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" value={this.state.rating.data} readonly=""/>
                        </div>
                    </div>
    
                    <div class="form-group row">
                        <div class="col">
                            <label class="col-sm-12 col-form-label">Resultado:</label><label class="col-sm-12 col-form-label"></label>
                        </div>
                        <div class="col col-sm-2">
                            <input type="text" class="form-control" value={this.state.rating.resultado} readonly=""/>
                        </div>
                    </div>
                    
                </form>
    
            </div>
        </div>
    </div>
    
    );

}