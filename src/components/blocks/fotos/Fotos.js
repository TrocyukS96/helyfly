import s from './Fotos.module.scss';
import img1 from './../../../assets/img/fotos/img1.png';
import img2 from './../../../assets/img/fotos/img2.png';
import img3 from './../../../assets/img/fotos/img3.png';
import img4 from './../../../assets/img/fotos/img4.png';



function Fotos() {
   return (
      <section className={s.fotosBlock}>
         <div className={s.conteiner}>
            <div className={s.wrap}>
               <h2 className={s.title}>Фотографии пакета<span>:</span></h2>
               <div className={s.fotos}>
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                  <img src={img4} alt="" />
                  <img src={img3} alt="" />
                  <img src={img4} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />

               </div>
               <div className={s.showAll}>
                  <button className={s.btnShow}>Показать все фото</button>
               </div>
            </div>
         </div >
      </section>
   );
}

export default Fotos;