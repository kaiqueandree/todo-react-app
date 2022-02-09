import React from "react";
import TodoContext from "../context/TodoContext";
import AddTodo from "./AddTodo";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import { BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom";

const App = () => {
    return (
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <br />
                <div className="uk-container">
                    <Routes>
                        <Route path="/create">
                            <AddTodo></AddTodo>
                        </Route>
                        <Route path="/">
                            <h4>Minha lista de tarefas</h4>
                            <TodoList></TodoList>
                        </Route>
                    </Routes>
                    <TodoList></TodoList>
                </div>
            </Router>
        </TodoContext>
    );
}

export default App;