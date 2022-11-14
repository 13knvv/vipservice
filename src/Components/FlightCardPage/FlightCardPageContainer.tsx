import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useStores } from "../../MobX/stores"
import FlightCardPage from "./FlightCardPage"

const FlightCardPageContainer = () => {
  const flightCardStore = useStores().flightCardStore
  const flightInformation = flightCardStore.flightInformation
  const searchFormStore = useStores().searchFormStore
  const cityFrom = searchFormStore.cityFrom
  const cityTo = searchFormStore.cityTo
  const dateGo = searchFormStore.dateGo
  const dateBack = searchFormStore.dateBack

  useEffect( () => {
    flightCardStore.getFlightInformation( cityFrom,
                                          cityTo,
                                          dateGo,
                                          dateBack )
  }, [])

  const handleClickButtonTime = (timeGoStart: string, timeGoFinish: string) => {
    flightCardStore.setTimeGoStart(timeGoStart)
    flightCardStore.setTimeGoFinish(timeGoFinish)
  }

  return <FlightCardPage flightInformation={flightInformation}
                         handleClickButtonTime={handleClickButtonTime} />
}

export default observer(FlightCardPageContainer)