function Footer() {
  return (
    <footer className=' text-white py-12 flex justify-center'>
      <div className='max-w-[95vw] max-auto grid grid-cols-1 sm:grid-cols-2  lg:sm:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 flex justify-center'>
        <div>
          <h2 className='text-amber-300 text-lg font-semibold mb-4'>
            Aakriti-Rachna
          </h2>
          <p className='text-amber-300'>
            AakritiRachna blends tradition and technology with a CNC plotter
            machine that creates intricate 2D art on walls, posters, and
            rangoli. It revives handmade techniques, bridging heritage and
            modern aesthetics{' '}
          </p>
        </div>
        <div>
          <h2 className='text-amber-300 text-lg font-semibold mb-4'>
            {' '}
            Follow me
          </h2>
          <div className='flex space-x-4'>
            <a href='https://www.linkedin.com/company/aakriti-rachna/'>
              <h2 className='text-amber-300 transition-colors duration-300'>
                Linkedin
              </h2>
            </a>
            <a href='https://www.instagram.com/aakritirachna?utm_source=qr&igsh=aTduNWdpZ2R5ZmFx'>
              {' '}
              <h2 className='text-amber-300 transition-colors duration-300'>
                Instagram
              </h2>
            </a>
          </div>
        </div>
        <div>
          <h2 className='text-amber-300  text-lg font-semibold mb-4'>
            {' '}
            Contact me
          </h2>
          <div className='flex flex-col text-amber-300 '>
            <p>swatikashyap9470@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className='text-amber-300 text-lg font-semibold mb-4'>
            {' '}
            Quick Links
          </h2>

          <a href='/admindashbord'>
            <p className='text-amber-300'>Admin</p>
          </a>
          <a href='https://codeforces.com/profile/pawan_kumar_limba'>
            <p className='text-amber-300'>Codeforce</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
