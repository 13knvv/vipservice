import { createContext, useContext } from "react"
import SearchFormStore from "./searchForm"

class RootStore {

  searchFormStore: SearchFormStore

  constructor() {
    this.searchFormStore  = new SearchFormStore
  }
}

const StoresContext = createContext(new RootStore())

export const useStores = () => useContext(StoresContext)