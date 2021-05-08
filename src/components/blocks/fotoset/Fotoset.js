import s from './Fotoset.module.scss';
import star from './../../../assets/img/icons/star.svg';
import image from './../../../assets/img/feedback/image.png';

function Fotoset() {
   return (
      <section className={s.fotoset}>
         <div className={s.conteiner}>
            <div className={s.wrap}>
               <h2 className={s.title}>Фотосессия <br /> в вертолете</h2>
               <div className={s.subscr}>
                  <div className={s.text}>Полет на вертолете это прекрасная возможность получить новые ощущения  ! А наш замечательный фотограф запечатлит лучшие моменты</div>
                  <ul className={s.list}>
                     <li className={s.item}>3 часа съемки</li>
                     <li className={s.item}>Более 50 фотографий</li>
                     <li className={s.item}>Москва</li>
                     <li className={s.item}>Готовы ответить на любые вопросы</li>
                  </ul>
               </div>
               <div className={s.feedback}>
                  <div className={s.fedbackTxt}>Более 150 отзывов с оценкой </div>
                  <ul className={s.stars}>
                     <li className={s.star}><img className={s.starImg} src={star} alt="star-img" /></li>
                     <li className={s.star}><img className={s.starImg} src={star} alt="star-img" /></li>
                     <li className={s.star}><img className={s.starImg} src={star} alt="star-img" /></li>
                     <li className={s.star}><img className={s.starImg} src={star} alt="star-img" /></li>
                     <li className={s.star}><img className={s.starImg} src={star} alt="star-img" /></li>
                  </ul>
               </div>
               <div className={s.movie}>
                  <img className={s.movieImg} src={image} alt="movie-img" />
               </div>

            </div>
         </div>
      </section>
   );
}

export default Fotoset;