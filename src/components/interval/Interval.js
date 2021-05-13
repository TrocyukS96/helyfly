import s from './Interval.module.scss';




function Interval(props) {
   return (
      <div className={s.interval}>
         <div className={s.intervalTxt}>
            <p className={s.time}>{props.time}</p>
            <p className={s.price}>{props.price}</p>
            <p className={s.place}>{props.place}</p>
         </div>
         <button className="btn">Выбрать</button>
      </div>
   );
}

export default Interval;