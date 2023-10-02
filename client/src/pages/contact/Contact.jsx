import React, { useContext } from "react";

const Contact = () => {
  
  return (
    
    <div className="container mx-auto md:p-4 border-sky-600 border ">
      <div className="flex flex-wrap  ">
        <div className="w-full md:w-1/2 p-2  ">
          <div className="flex flex-wrap pl-2 ">
            <div className="w-full mt-2  p-2 ml-2 ">
              <strong className="text-3xl ">Contact US</strong>
              <div className="mt-4 ">
                <form className="  w-full shadow-xl pl-4">
                  <div className="  flex ">
                    <input
                      className="h-12 px-4 w-60  rounded-lg flex border border-rose-300"
                      placeholder="Name"
                    ></input>
                    <input
                    type="email"
                      className="h-12 px-4 ml-6 w-60 rounded-lg border border-rose-300 flex"
                      placeholder="Email"
                    ></input>
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      className="h-12 w-9/12 rounded-lg border border-rose-300 px-4"
                      placeholder="Subject"
                    />
                    <textarea
                      rows="4"
                      className="block px-4 mt-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                    <button className="mx-2 my-2 py-2 px-4 bg-purple-950 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4  ">
         <div className="">
         <strong className="text-2xl ">DETAILS</strong>
          <h2 className="text-gray-600 mt-2"> Email: prawwwe22@gmail.com</h2>
          <h2 className="text-gray-600 "> Contact no: 9803513810</h2>
          <h2 className="text-gray-600 "> Address: Sanepa,lalitpur</h2>
          <h2 className="text-gray-600 "> Website:www.namastebazzar.com</h2>
         </div>


          <iframe
            className=" h-80 w-10/12 mt-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.073693646901!2d85.29764876185618!3d27.68411712413825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e6d6552205%3A0x2665f18346685870!2sNational%20Ayurved%20Hospital%20%26%20Research%20Centre!5e0!3m2!1sen!2snp!4v1689923235562!5m2!1sen!2snp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowfullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
