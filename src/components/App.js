import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import Main from "./Main"
import ItemForm from "./ItemForm"
import "../styles/styles.css"

function App(props) {
  return (
    <Provider store={store}>
      <div>
        <h1>To Dos</h1>
        <ItemForm />
        <Main />
      </div>
    </Provider>
  )
}

export default App
