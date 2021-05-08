import Btn from '../btn/Btn';
import s from './Main.module.scss';


function Main() {
   return (
      <main className={s.main}>
         <div className={s.conteiner}>
            <div className={s.inner}>
               <h1 className={s.title}>Эксклюзивная <span>фотосессия</span> при полете на вертолете</h1>
               <div className={s.priceBlock}>
                  <div className={s.priceSub}>
                     <h2 className={s.priceTitle}>Стоимость:</h2>
                     <p className={s.priceNum}>1500₽</p>
                  </div>
                  <p className={s.pricePercent}></p>
               </div>
               <button className={s.btn}> Забронировать место</button>
            </div>
         </div>
      </main>
   );
}

export default Main;