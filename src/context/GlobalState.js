import { createContext, useReducer } from "react";
import axios from "axios";
import appReducer from "./AppReducer";

const getData = await axios
  .get("https://test-server-klob.onrender.com/fakeJob/agustus/2023")
  .then((response) => response.data);

const initialState = {
  employees: getData,
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee,
    });
  }

  function editEmployee(employee) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee,
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
        editEmployee,
        removeEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
