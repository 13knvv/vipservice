import { createContext, useContext } from "react"
import FlightCardStore from "./flightCardStore"
import SearchFormStore from "./searchFormStore"

class RootStore {

  searchFormStore: SearchFormStore
  flightCardStore: FlightCardStore

  constructor() {
    this.searchFormStore  = new SearchFormStore
    this.flightCardStore  = new FlightCardStore
  }
}

const StoresContext = createContext(new RootStore())

export const useStores = () => useContext(StoresContext)