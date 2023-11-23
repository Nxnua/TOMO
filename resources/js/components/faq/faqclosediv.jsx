import { Disclosure } from "@headlessui/react";
import Fbfaq from "./Fbfaq";

export default function FaqIcon() { 
	return ( 

        <div>
   
            <Fbfaq/>

   
        <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white shadow-md rounded-lg w-full md:w-96">
       

      <div className='text-[black] font-medium text-center'>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h6 className="text-xl font-semibold">Hotspot</h6>
            
            <a href="faq" className="text-gray-500 hover:text-amber-700">
              
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                className=" h-5 w-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"> 
                <path d= 
"M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />         
                </svg>
            </a>
          </div>
      


      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
      <Disclosure>
                  {({ open }) => (
                      <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                              <span>What is your refund policy?</span>
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className={`${
                                      open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-purple-500`}
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                              </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                              If you're unhappy with your purchase for any
                              reason, email us within 90 days and we'll refund
                              you in full, no questions asked.
                          </Disclosure.Panel>
                      </>
                  )}
              </Disclosure>
      </div>
     
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
      <Disclosure>
                  {({ open }) => (
                      <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                              <span>What is your refund policy?</span>
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className={`${
                                      open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-purple-500`}
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                              </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                              If you're unhappy with your purchase for any
                              reason, email us within 90 days and we'll refund
                              you in full, no questions asked.
                          </Disclosure.Panel>
                      </>
                  )}
              </Disclosure>
      </div>

        </div>
       </div>
       </div>
       </div>
  

    <div>
       
        </div>
        </div>


        

    );
};