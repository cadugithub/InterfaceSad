import React from 'react'
import AnyChart from 'anychart-react'
import '../Bootstrap/bootstrap.min.css'
export default function ResultChart (){
    
    return(
        <div className="row">
            <div className="col-sm-4">
            
            </div>
            <div className="col">
                <AnyChart
                    type="pie"
                    data={[["Aprovado",0.3], ["Reprovado",0.0]]}
                    title="Resultado"
                    width={500}
                    height={500}
                />
            </div>
            <div className="col-4">
            
            </div>
        </div>
    )
      
}
