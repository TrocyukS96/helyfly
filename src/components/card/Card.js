import s from './Card.module.scss';
import cardImg from './../../assets/img/about/owner.png';


function Card() {
   return (
      <div className={s.card}>
         <div className={s.imgWrap}>
            <img className={s.cardImg} src={cardImg} alt="owner-img" />
         </div>
         <h2 className={s.cardName}  >Марина Иванова</h2>
         <h3 className={s.cardJob} >фотограф</h3>
         <a className={s.cardLink} href="#" >Показать больше<br /> информации  о фотографе</a>

      </div>
   );
}

export default Card;