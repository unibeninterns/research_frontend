import Image from 'next/image';
import footerImg from '../components/Photo.png';
import Logo from './icons/logo';
import LinkedIn from './icons/linkedIn';

export default function Footer() {
  const footerLinks = [
    {
      name: 'DRID',
      links: [
        { name: 'About Drid', href: '#' },
        { name: 'Mission & Vision', href: '#' },
      ],
    },
    {
      name: 'Courses',
      links: [
        { name: 'Course Overview', href: '#' },
        { name: 'Curriculum', href: '#' },
        { name: 'Faculty', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
    {
      name: 'Resources',
      links: [
        { name: 'Reviews', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Use', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Mission & Vision', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
  ];
  return (
    <footer>
      <div className='relative w-full'>
        <Image
          src={footerImg}
          alt='image'
          className='w-full h-screen object-cover'
        />
        <div className='h-screen absolute inset-0 flex flex-col items-center text-center px-4 justify-center lg:justify-end pb-0 lg:pb-20 bg-[linear-gradient(0deg,#FBEFFF26,#613B8286,#3B244FCC)]'>
          <h1 className='text-white text-2xl md:text-4xl lg:text-[84px] font-bold mb-2'>
            Learning never stops.
          </h1>
          <p className='text-white text-md md:text-2xl lg:text-[56px]  mb-2'>
            Join the next DRID cohort.
          </p>
        </div>
      </div>

      <div className='bg-[#3B244F] text-white py-12 px-6 md:px-16 lg:px-25 lg:pt-21 lg:pb-14 w-full'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 w-full'>
          {/* Left Side: Logo + Description */}
          <div className='w-full'>
            <div className='flex items-center gap-4 mb-3'>
              <Logo />
              <h4 className='font-bold lg:text-[32px]'>DRID</h4>
            </div>
            <p className='mb-5 max-w-md text-base'>
              Gain future-ready skills with structured research and innovation
              training from DRID, University of Benin.
            </p>
            <p className='font-semibold mb-3 text-lg'>
              Stay updated on new DRID courses and opportunities.
            </p>

            {/* Email Subscription */}
            <form className='flex w-full mr-auto border-[0.5px] border-[#A6A6A6] rounded-full lg:p-2 lg:pl-4 self-stretch text-base justify-between'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='px-4 py-2 bg-transparent text-white outline-none min-w-0 lg:w-50'
              />
              <button
                type='submit'
                className='primary-button rounded-full px-8 py-3 text-sm hover:bg-pink-700 transition whitespace-nowrap'
              >
                Notify Me
              </button>
            </form>
          </div>

          {/* Right Side: Links */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
            {footerLinks.map((fLink) => (
              <div key={fLink.name} className='flex flex-col'>
                <p className='text-xl font-semibold mb-4'>{fLink.name}</p>
                <div className='flex-col flex'>
                  {fLink.links.map((link) => (
                    <a key={link.name}>
                      <button className='text-white text-base bg-inherit text-nowrap hover:border-b transition-all'>
                        {link.name}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className='max-w-7xl mx-auto mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-sm text-center md:text-left'>
            Copyright © 2025 Directorate of Research, Innovation & Development
            (DRID), University of Benin. All rights reserved.
          </p>
          <a
            href='https://www.linkedin.com/company/directorate-of-research-innovation-and-development-uniben/' target='_blank'
            className='flex items-center gap-2 text-gray-300 hover:text-white'
          >
            <p>LinkedIn</p> <LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
