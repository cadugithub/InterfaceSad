import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ManageStudents from './pages/ManageStudents/manageStudents'
import FormStudent from './pages/FormStudent/formStudent'
import ManageEvaluations from '../src/pages/ManageEvaluation/ManageEvaluation'
import DetailRating from '../src/pages/DetailsRating/DetailRating'
import Home from './components/Home';
import AnyChart from './components/AnyChart/anyChart'
export default function Routes (){
    return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/manageStudents" component={ManageStudents}/>
        <Route exact path="/formStudent" component={FormStudent}/>
        <Route exact path="/manageEvaluations" component ={ManageEvaluations}/>
        <Route exact path="/detailRating/:id" component ={DetailRating}/>
        <Route exact path="/resultChart/:id" component={AnyChart}/>
    </Switch>
    );
}

