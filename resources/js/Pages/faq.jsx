import Header from "../components/main/header";
import Footer from "../components/main/footer";
import Fbfaq from "../components/faq/Fbfaq";

export default function Accordion() {
    return (
        <div>
            <Header/>

        <div className="mt-20 text-3xl text-orange text-bold">
           How can we help you?
        </div>
        <p className="mt-2">
          Here is the most common questions and answers!
        </p>

        <div className="mt-5 h-[140vh] px-4 pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-32"> 
      
          


      <div className="p-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 border-2">
          <a href="faqq">
            <button
            className="w-full p-4 rounded-full hover:bg-amber-100 focus:outline-none"
            type="button"
          >
            <div className=" text-center ml-28">
              <img
                alt="Icon"
                width={100}
                height={100}
                src="images/securityicon.png"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-2">
                <h1 className="text-lg font-bold">Security</h1>
              </div>
          </button>
          </a>
        </div>
      </div>


      
<div className="p-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 border-2">
          <a href="faqq">
            <button
            className="w-full p-4 rounded-full hover:bg-amber-100 focus:outline-none"
            type="button"
          >
            <div className=" text-center ml-28">
              <img
                alt="Icon"
                width={100}
                height={100}
                src="images/planicon.png"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-2">
                <h1 className="text-lg font-bold">Plan Travel</h1>
              </div>
          </button>
          </a>
        </div>
      </div>


      
<div className="p-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 border-2">
          <a href="faqq">
            <button
            className="w-full p-4 rounded-full hover:bg-amber-100 focus:outline-none"
            type="button"
          >
            <div className=" text-center ml-28">
              <img
                alt="Icon"
                width={100}
                height={100}
                src="/images/agencyicon.png"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-2">
                <h1 className="text-lg font-bold">Travel Agencies</h1>
              </div>
          </button>
          </a>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 border-2">
          <a href="faqq">
            <button
            className="w-full p-4 rounded-full hover:bg-amber-100 focus:outline-none"
            type="button"
          >
            <div className=" text-center ml-28">
              <img
                alt="Icon"
                width={100}
                height={100}
                src="images/flighticon.png"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-2">
                <h1 className="text-lg font-bold">Flights</h1>
              </div>
          </button>
          </a>
        </div>
      </div>


      <div className="p-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 border-2">
          <a href="faqq">
            <button
            className="w-full p-4 rounded-full hover:bg-amber-100 focus:outline-none"
            type="button"
          >
            <div className=" text-center ml-28">
              <img
                alt="Icon"
                width={100}
                height={100}
                src="images/usericon.png"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-2">
                <h1 className="text-lg font-bold">Profile</h1>
              </div>
          </button>
          </a>
        </div>
      </div>


      <div className="p-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 border-2">
          <a href="faqq">
            <button
            className="w-full p-4 rounded-full hover:bg-amber-100 focus:outline-none"
            type="button"
          >
            <div className=" text-center ml-28">
              <img
                alt="Icon"
                width={100}
                height={100}
                src="images/guideicon.png"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="mt-2">
                <h1 className="text-lg font-bold">Guiding</h1>
              </div>
          </button>
          </a>
        </div>
      </div>

     
            </div>


            <div className="mt-28 mx-[40vh] items-center text-center p-4 bg-white border shadow-lg rounded-lg ">
      <div className="flex items-center space-x-4">
        <img
          alt="check in"
          loading="lazy"
          width="200"
          height="150"
          decoding="async"
          className="w-100 h-100"
          src="images/searchfaq.png"
        />
        <div>
          <h6 className="text-xl font-semibold mb-2">
          Don't see what you're looking for ?
          </h6>
          <p className="text-gray-700">
          If the information you want is not in our help section, please send us a suggestion by e-mail.
          </p>
          <button className="px-4 py-2 mt-4 w-32 text-white bg-amber-600 rounded-md border-2">
            Send
          </button>
        </div>
      </div>
    </div>


        </div>

        <Footer/>
       <Fbfaq />

        </div>
    );
}