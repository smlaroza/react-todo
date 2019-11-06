import Axios from "axios"

export function addItem(item) {
  return (dispatch) => {
    Axios.post("/items", { name: item, active: false }).then((resp) => {
      dispatch({
        type: "ADD_ITEM",
        payload: resp.data
      })
    })
  }
}

export function listItems() {
  return (dispatch) => {
    Axios.get("/items").then((resp) => {
      dispatch({
        type: "LIST_ITEMS",
        payload: resp.data
      })
    })
  }
}

export function deleteItem(id) {
  return (dispatch) => {
    Axios.delete(`/items/${id}`).then((resp) => {
      dispatch(listItems())
    })
  }
}

export function completeItem(id, status) {
  return (dispatch) => {
    if (status === false) {
      Axios.patch(`/items/${id}`, { active: true }).then((resp) => {
        dispatch({
          type: "COMPLETED_ITEM",
          payload: resp.data,
          id: id
        })
      })
    } else {
      Axios.patch(`/items/${id}`, { active: false }).then((resp) => {
        dispatch({
          type: "COMPLETED_ITEM",
          payload: resp.data,
          id: id
        })
      })
    }
  }
}
