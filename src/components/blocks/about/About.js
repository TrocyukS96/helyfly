
import Card from '../../card/Card';
import s from './About.module.scss';


function About() {
   return (
      <section className={s.about}>
         <div className={s.conteiner}>
            <div className={s.wrap}>
               <Card />
               <div className={s.descr}>
                  <div className={s.descrItem}>
                     <h1 className={s.descrTitle}>Об организаторе:</h1>
                     <p className={s.descrTxtFirst}>Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном использовании и частных турах. </p>
                     <p className={s.descrTxt}>Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента. Мы никогда не зависим от субпоставщиков и не свяжемся…    </p>
                     <div className={s.innerBtn}>
                        <button className={s.btn}>Читать еще</button>
                     </div>
                  </div>
                  <div className={s.descrItem}>
                     <h1 className={s.descrTitle}>Что я предоставлю:</h1>
                     <p className={s.descrTxt}>Встречу вас на машине после длительного перелёта.Качественный подбор места и локации для вашей съемки. При необходимости всегда возможно прерваться на обед/ужин. <br /> Более <span>50</span>  фотографий на выходе с обработкой и замечательные впечатления о Дубае! </p>
                     <div className={s.innerBtn}>
                        <button className={s.btn}>Читать еще</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section >
   );
}

export default About;