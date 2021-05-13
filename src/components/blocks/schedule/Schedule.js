import s from './Schedule.module.scss';


function Schedule() {
   return (
      <section className={s.schedule}>
         <div className={s.conteiner}>
            <h2 className={s.title}>Доступная съемка в ближайшее время:</h2>
            <div className={s.inner}>
               <div className={s.date}>Пятница, 14 сентября</div>
            </div>
         </div>
      </section>
   );
}

export default Schedule;