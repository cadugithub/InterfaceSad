import React from 'react'
import './stiles.css';

const FormStudent = () =>(

    <form class="border">

    <div class="form-group row">
        <label for="matricula" class="col-sm-2 col-form-label">Matricula:</label>
        <div class="col">
            <input type="text" class="form-control" id="matricula" name="matricula" />
        </div>
    </div>
    <div class="form-group row">
        <label for="nome" class="col-sm-2 col-form-label">Nome:</label>
        <div class="col">
            <input type="text" class="form-control" id="nome" name="nome"/>
        </div>
    </div>
    <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">Email:</label>
        <div class="col">
            <input type="email" class="form-control" id="email" name="email"/>
        </div>
    </div>

    <div class="form-group row justify-content-center">
        <div class="col-1">
            <button type="submit" name="salvar" class="btn btn-primary">Salvar</button>
        </div>
    </div>
</form>
);
export default FormStudent;