import React from 'react'
import AnyChart from 'anychart-react'
import '../Bootstrap/bootstrap.min.css'
export default function ResultChart (){
    
    return(
        <div className="row">
            <div className="col-sm-4">
            
            </div>
            <div className="col">
            <div className="form-group">
            <div className="col-12 col-sm-12">
                <AnyChart
                    type="pie"
                    data={[["Aprovado",0.3], ["Reprovado",0.7]]}
                    title="Carlos Eduardo Moreira Borges"
                    width={300}
                    height={300}
                />
              </div>
                <div className="col-10 col-sm-10">
                    <label for="exampleFormControlTextarea1">
                    <b>Observação:</b>
                    </label>
                    <textarea className="col-12"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    />
                </div>
                <div className="col-10 col-sm-10">
                    <label for="exampleFormControlTextarea1">
                        <b>Resultado Final:</b>
                    </label>
                    <select class="form-control" id="finalResult">
                        <option>Aprovado</option>
                        <option>Reprovado</option>
                    </select>
                </div>
                <div className="col-10 col-sm-10">
                    <button  type="button" className="btn btn-primary">Salvar</button>
                </div>
            </div>
            </div>
            <div className="col-4">
            
            </div>
        </div>
    )
      
}
