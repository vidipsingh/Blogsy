import { Link } from 'react-router-dom';
import pageNotFoundImage from '../imgs/404.png';
import fullLogo from '../imgs/logo.png';

const PageNotFound = () => {
    return (
        <section className="h-cover relative p-10 flex flex-col items-center gap-20 text-center">
            <img src={pageNotFoundImage} alt="" className='select-none border-2 border-grey w-72 aspect-square object-cover rounded' />

            <h1 className='text-4xl font-gelasio leading-7'>Page Not Found</h1>
            <p className='text-dark-grey text-xl leading-7 -mt-8'>The page your are looking for doesn't exist. Head back to the <Link to="/" className='text-black underline' >home page</Link></p>

            <div className='mt-auto'>
                <img src={fullLogo} alt="" className='h-10 object-contain block mx-auto select-none' />
                <p className='mt-10 text-dark-grey'>Read millions of stories around the world</p>
            </div>
        </section>
    )
}

export default PageNotFound;