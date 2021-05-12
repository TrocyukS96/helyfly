import s from './BtnShow.module.scss';


function BtnShow(props) {
   return (
<button className={s.btnShow} type="magic"  count="2" hide-if-last="true" libs="no-thanks">
      {props.text}
   </button>
   );
}

export default BtnShow;