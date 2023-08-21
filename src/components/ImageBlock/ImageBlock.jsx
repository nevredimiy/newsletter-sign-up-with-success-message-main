import ImgMobile from '../../assets/images/illustration-sign-up-mobile.svg';
import ImgDesktop from '../../assets/images/illustration-sign-up-desktop.svg';
import './ImageBlock.scss';

const ImageBlock = () => {
  return (
    <picture>
        <source media='(max-width: 1023px)' srcSet={ImgMobile} />
          <source media='(min-width: 1024px)' srcSet={ImgDesktop} />
          <img src={ImgMobile} alt="Header Logo" className='header-img' />
    </picture>
  )
}

export default ImageBlock
