import s from './Header.module.scss';
import logo from './../../../assets/img/logo.svg';
import userIcon from './../../../assets/img/icons/user.png';




function Header() {
   return (
      <header className={s.header}>
         <div className={s.conteiner}>
            <div className={s.inner}>
               <div className={s.headerLeft}>
                  <img className={s.logo} src={logo} alt="logo-img" />
                  <a className={s.cityLink} href="tel:88001231212">Москва</a>
                  <div className={s.blockLink}>
                     <span>Телефон:</span>
                     <a href="tel:88001231212">8(800)-123-12-12</a>
                  </div>
               </div>
               <div className={s.headerRight}>
                  <img src={userIcon} alt="user-icon" />
               </div>
            </div>
         </div>

      </header>
   );
}

export default Header;