import './page.css';
import bestSellerImg from './imgs/bestSeller.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='fondo w-full h-screen grid sm:grid-cols-1 grid-cols-2 grid-flow-col'>
      <div className='texto col-start-1'>
        <p className='main-text'>Find <span id='everything'>Everything</span> You 
                                      <br></br><span id='search'>Search</span> & <span id='more'>More</span>
                                      <br></br>With A Couple Clicks
        </p>
        <p className='description'>Find the product you have been looking for a long time in just a 
                                      <br></br>couple of minutes, with us</p>
        <div className='botonesCommerces flex justify-start'>
          <Link id='textbutton' href='http://localhost:3000/sign-in' className='boton'>Insertar Text</Link>
          <Link id='commercesbutton' href='http://localhost:3000/comercios' className='boton'>Visit Commerces</Link>
        </div>
      </div>
      <div className='col-end-3'>
        <Image src={bestSellerImg} alt='Best Seller' className='bestSellerImg rounded-2xl'></Image>
      </div>
    </div>
  );
}
