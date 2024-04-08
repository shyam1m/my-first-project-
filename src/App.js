import Form from "./components/FormPage/Form";
import Details from "./components/Details/Details";
import {BrowserRouter,Switch,Route} from "react-router-dom"

function App(){
  return(
    <div>
      <BrowserRouter>
      <Switch>
        <Route  exact path="/">
      <Form/>
      </Route>
      <Route  exact path="/details">
      <Details/>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}


export default App;