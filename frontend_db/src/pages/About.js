import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

function About() {
  return (
    <div >
      <Navbar />
      <div className="mt-12 mb-4 text-6xl text-center font-bold tracking-wide">About Us</div>
      <div className="text-center mb-10 text-lg">
        <p>We are QUECTO dedicated to provide you your requirements at your doorstep with superfast speed</p>
      </div>

      <div className="flex flex-col space-y-10 mb-12 mx-4 lg:mx-20">
        
      <div className="flex flex-col items-center w-full">
  <div className="w-full md:w-2/3 lg:w-1/2">
    <img
      src="https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Img"
      className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
    />
  </div>
  <div className="w-full md:w-4/5 lg:w-4/5 mt-6 text-justify p-4 ">
    <p className="text-sm leading-relaxed">
      In the ever-evolving landscape of local commerce, Quecto emerges as a transformative online platform, meticulously designed to bridge the gap between traditional brick-and-mortar establishments and the demands of modern consumer convenience.
    </p>
  </div>
</div>

      
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start border p-4 rounded-lg shadow-md">
          <div className="w-full lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_vector-1682303136986-bd37617f9b75?bg=FFFFFF&q=80&w=2678&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Img"
              className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-10 text-justify p-4 lg:p-0 border lg:border-none rounded-lg lg:rounded-none">
            <h1 className='text-4xl font-bold tracking-wide py-5 px-5'>What we are ?</h1>
            <p className="text-lg leading-relaxed px-5 pb-5">
              In the ever-evolving landscape of local commerce, Quecto emerges as a transformative online platform, meticulously designed to bridge the gap between traditional brick-and-mortar establishments and the demands of modern consumer convenience. Our mission at Quecto is to create a symbiotic ecosystem that not only enhances the shopping experience for users but also opens up new avenues of growth for local businesses.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse w-full items-center lg:items-start border p-4 rounded-lg shadow-md">
          <div className="w-full lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_vector-1682269167711-a04ca0ab5206?bg=FFFFFF&q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:mr-10 text-justify p-4 lg:p-0 border lg:border-none rounded-lg lg:rounded-none">
          <h1 className='text-4xl font-bold tracking-wide py-5 px-5'>How we help shopkeepers ?</h1>
            <p className="text-lg leading-relaxed px-5 pb-5">
              Shopkeepers on Quecto take ownership of their delivery services, providing personalized and timely deliveries to their nearby communities. The performance of each shop's delivery service is intricately linked to their ratings, instilling a culture of healthy competition and an unwavering commitment to service excellence.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start border p-4 rounded-lg shadow-md">
          <div className="w-full lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_vector-1683134288584-d2d5f6d714d2?bg=FFFFFF&w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvY2VyeSUyMHNob3BzJTIwZGVsaWV2ZXJ5fGVufDB8fDB8fHww"
              alt=""
              className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-10 text-justify p-4 lg:p-0 border lg:border-none rounded-lg lg:rounded-none">
          <h1 className='text-4xl font-bold tracking-wide py-5 px-5'>How can we help you ?</h1>
            <p className="text-lg leading-relaxed px-5 pb-2">
              In conclusion, Quecto stands as a trailblazer, utilizing technology to create a harmonious connection between communities, empower local enterprises, and provide users with an unparalleled shopping experience. As we continue to evolve, Quecto remains steadfast in its commitment to innovation, user satisfaction, and the sustainable growth of local businesses.
            </p>
            <p className="text-lg leading-relaxed px-5 pb-5">
              We invite you connect with us today and make your daily experience better by buying your requirements with just some clicks from the shop of your choice.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
