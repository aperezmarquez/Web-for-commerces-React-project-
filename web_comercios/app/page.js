import './page.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='fondo w-full h-screen grid sm:grid-cols-1 grid-cols-2 grid-flow-col'>
      <div className='texto col-end-1'>
        <p className='main-text'>Find <span id='everything'>Everything</span> You 
                                      <br></br><span id='search'>Search</span> & <span id='more'>More</span>
                                      <br></br>With A Couple Clicks
        </p>
        <p className='description'>Find the product you have been looking for a long time in just a 
                                      <br></br>couple of minutes, with us</p>
        <div className='botonesCommerces flex justify-start'>
          <Link id='textbutton' href='http://localhost:3000/sign-in' className='boton'>Sign In</Link>
          <Link id='commercesbutton' href='http://localhost:3000/comercios' className='boton'>Commerces</Link>
        </div>
      </div>
      <div className='col-end-2'>
        <div className='card rounded-xl'>
          <div className='card-elements rounded-xl'>
              <div className='card-elements-holder rounded-b-xl rounded-t-sm'>
                <p className='card-text'>Best Seller</p>
                <p className='card-description'>This is a description with some text to test it.</p>
                <Link id='card-button' href='http://localhost:3000/sign-in' className='boton'>Visit Web</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
