import InfoList from "./InfoList";
import style from './Blockinfo.module.scss';

const BlockInfo = () => {
  return (
    <div>
          
        <h1 className={style.title}>Stay updated!</h1>
        <p className={style.text}>Join 60,000+ product managers receiving monthly updates on:</p>
        <InfoList />
      
    </div>
  )
}

export default BlockInfo
