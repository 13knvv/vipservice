import { observer } from 'mobx-react-lite'
import { IFlightInformation } from '../../MobX/flightCardStore'
import s from './FlightCardPage.module.css'
import bag from './svg/bag.svg'
import bagBig from './svg/bagBig.svg'

interface IFlightCardPageProps {
  flightInformation: IFlightInformation
  handleClickButtonTime: (timeGoStart: string, timeGoFinish: string) => void
}

const FlightCardPage = (props: IFlightCardPageProps) => {
  const flightInfo = props.flightInformation

  const onClickButtonTime = (timeGoStart: string, timeGoFinish: string) => {
    props.handleClickButtonTime(timeGoStart, timeGoFinish)
  } 

  const timeOptions = flightInfo.time?.map( time => {
    const timeGoStart = time.split(' - ')[0]
    const timeGoFinish = time.split(' - ')[1]

    const isSelected = timeGoStart === flightInfo.timeGoStart &&
                        timeGoFinish === flightInfo.timeGoFinish

    return  <button className={s.buttonTime + ' ' + 
                              ( isSelected ? s.buttonTimeClicked : '')}
                    onClick={() => onClickButtonTime(timeGoStart, timeGoFinish)}
                    key={timeGoStart + timeGoFinish} >
              <span>{timeGoStart}</span> - <span>{timeGoFinish}</span>
            </button>
  })

  return (
    <div className={s.wrapp}>



      <div className={s.wayBlockWrapp}>

        <div className={s.wayBlock}>
          <div className={s.companyBlock}>
            <div className={s.ticketType}>{flightInfo.type}</div>
            <div className={s.companyImgWrapp}>
              <img src={flightInfo.logoCompany} alt="" />
            </div>
            <div className={s.companyName}>{flightInfo.company}</div>
          </div>

          <div className={s.inofoBlock}>
            <div className={s.mainInfo}>
              <div>
                <div className={s.time}>{flightInfo.timeGoStart}</div>
                <div>
                  <div className={s.city}>{flightInfo.cityFrom}</div>
                  <div className={s.date}>{flightInfo.dateGo}</div>
                </div>
              </div>
              <div className={s.inWay}>
                <div className={s.inWayLine}>
                  <div className={s.point1}></div>
                  <div className={s.point2}></div>
                </div>
                <div className={s.travelTime}>В пути 1 ч 55 мин</div>
              </div>
              <div>
                <div className={s.time}>{flightInfo.timeGoFinish}</div>
                <div>
                  <div className={s.city}>{flightInfo.cityTo}</div>
                  <div className={s.date}>{flightInfo.dateGo}</div>
                </div>
              </div>
              <div className={s.bags}>
                <img src={bag} alt="" />
                <img src={bagBig} alt="" />
              </div>
            </div>
            <div className={s.allTime}>
              {timeOptions}
            </div>
          </div>
        </div>
        { flightInfo.dateBack &&
            <div className={s.wayBlock}>
              <div className={s.companyBlock}>
                <div className={s.ticketType}>{flightInfo.type}</div>
                <div className={s.companyImgWrapp}>
                  <img src={flightInfo.logoCompany} alt="" />
                </div>
                <div className={s.companyName}>{flightInfo.company}</div>
              </div>
          
              <div className={s.inofoBlock}>
                <div className={s.mainInfo}>
                  <div>
                    <div className={s.time}>{flightInfo.timeBackStart}</div>
                    <div>
                      <div className={s.city}>{flightInfo.cityTo}</div>
                      <div className={s.date}>{flightInfo.dateBack}</div>
                    </div>
                  </div>
                  <div className={s.inWay}>
                    <div className={s.inWayLine}>
                      <div className={s.point1}></div>
                      <div className={s.point2}></div>
                    </div>
                    <div className={s.travelTime}>В пути 1 ч 55 мин</div>
                  </div>
                  <div>
                    <div className={s.time}>{flightInfo.timeBackFinish}</div>
                    <div>
                      <div className={s.city}>{flightInfo.cityFrom}</div>
                      <div className={s.date}>{flightInfo.dateBack}</div>
                    </div>
                  </div>
                  <div className={s.bags}>
                    <img src={bag} alt="" />
                    <img src={bagBig} alt="" />
                  </div>
                </div>
                <div className={s.allTime}>
                  {timeOptions}
                </div>
              </div>
            </div>
          }
      </div>
      <div className={s.priceBlock}>{flightInfo.price} р</div>
    </div>
  )
}

export default observer(FlightCardPage)