import { makeAutoObservable } from "mobx"
import urlLogoCompany from '../Components/FlightCardPage/svg/LogoS7Airlines.svg'

export interface IFlightInformation {
  cityFrom: string;
  cityTo: string;
  dateGo: string;
  dateBack: string;
  type: string,
  company: string,
  logoCompany: string,
  price: string,
  time: Array<string> | null
  timeGoStart: string
  timeGoFinish: string
  timeBackStart: string
  timeBackFinish: string
}

class FlightCardStore {

  flightInformation: IFlightInformation = {
                                  cityFrom: '',
                                  cityTo: '',
                                  dateGo: '',
                                  dateBack: '',
                                  type: '',
                                  company: '',
                                  logoCompany: '',
                                  price: '',
                                  time: null,
                                  timeGoStart: '',
                                  timeGoFinish: '',
                                  timeBackStart: '',
                                  timeBackFinish: '',
                                }

  

  constructor() {
      makeAutoObservable(this)
  }

  setFlightInformation = (info: IFlightInformation) => {
    this.flightInformation = info
  }

  setTimeGoStart = (timeGoStart: string) => {
    this.flightInformation.timeGoStart = timeGoStart
  }

  setTimeGoFinish = (timeGoFinish: string) => {
    this.flightInformation.timeGoFinish = timeGoFinish
  }

  getFlightInformation = async ( cityFrom: string,
                                  cityTo: string,
                                  dateGo: string,
                                  dateBack: string ) => {
      try {
        const result = await function() {
          console.log('Запрос на сервер: ' +
                      cityFrom + cityTo + dateGo + dateBack )
          if (!dateBack) {
            return {
              cityFrom,
              cityTo,
              dateGo,
              dateBack,
              type: 'Не возвратный',
              company: 'S7 Airlines',
              logoCompany: urlLogoCompany,
              price: '4150',
              timeGoStart: '09:20',
              timeGoFinish: '11:05',
              timeBackStart: '',
              timeBackFinish: '',
              time: ['09:20 - 11:05', '10:20 - 12:00', '11:30 - 13:00'],
            }
          } else {
            return {
              cityFrom,
              cityTo,
              dateGo,
              dateBack,
              type: 'Не возвратный',
              company: 'S7 Airlines',
              logoCompany: urlLogoCompany,
              price: '9300',
              time: null,
              timeGoStart: '11:05',
              timeGoFinish: '22:57',
              timeBackStart: '11:57',
              timeBackFinish: '20:05',
            }
          }
          
        }()
        this.setFlightInformation(result)
      } catch {
        console.log('Ошибка')
      }
      
  }

}


export default FlightCardStore