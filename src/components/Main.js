import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { completeItem } from "../actions/listActions"
import { listItems, deleteItem } from "../actions/listActions"

export default function(props) {
  useEffect(() => {
    dispatch(listItems())
  }, [])

  function complete(id, status) {
    dispatch(completeItem(id, status))
  }
  const items = useSelector((appState) => appState.listReducer.items)
  const dispatch = useDispatch()

  function remove(id) {
    dispatch(deleteItem(id))
  }

  return (
    <div className="main">
      <ul>
        {items.map((item, i) => (
          <div key={"item" + i}>
            <li className="containList">
              <div
                id="words"
                className={item.active === false ? "complete" : "checked"}
                onClick={(e) => complete(item.id, item.active)}
              >
                {item.name}
              </div>
              <button
                className="delete"
                type="reset"
                onClick={(e) => remove(item.id)}
              >
                X
              </button>
            </li>
          </div>
        ))}
      </ul>
      <p>Item Count: {items.length}</p>
    </div>
  )
}
