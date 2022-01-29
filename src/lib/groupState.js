import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const GRID = "GRID";
const LIST = "LIST";

function GroupStateProvider({ children }) {
  const [groupView, setGroupView] = useState(GRID);
  const [selected, setSelected] = useState("");

  const handleViewChange = () => {
    if (groupView === GRID) {
      return setGroupView(LIST);
    }
    return setGroupView(GRID);
  };

  return (
    <LocalStateProvider
      value={{
        groupView,
        setGroupView,
        selected,
        setSelected,
        handleViewChange,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useGroupState() {
  const all = useContext(LocalStateContext);
  return all;
}

export { GroupStateProvider, useGroupState }