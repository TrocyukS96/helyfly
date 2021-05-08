import s from './Btn.module.scss';

function Btn(props) {
   return (
      <button className={s.btn}>
         {props.title}
      </button>
   )
}
export default Btn;
