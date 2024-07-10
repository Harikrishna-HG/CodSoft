import React from 'react';

function Contact() {
  return (
    <div>
      <section className="bg-lime-400 py-10 px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left Section (Image) */}
          <div className="md:w-1/2 md:pl-12 p-6 md:p-0">
            <img
              className="rounded-xl shadow-xl md:rounded-2xl mx-auto md:mx-0"
              src="https://img.freepik.com/free-vector/young-woman-uses-computer-work-reduce-infection_1150-34985.jpg?t=st=1720269484~exp=1720273084~hmac=f0fee507baf60451e075c41e84da73481f60ea539b415d46095196ee9866ed35&w=740"
              alt="Illustration"
            />
          </div>

          {/* Right Section (Text Content) */}
          <div className="md:w-1/2 md:pr-12 p-6 md:pl-6 flex flex-col">
            <div className="mb-3">
              <label className="block mb-2 ml-2 md:ml-0">Full Name:</label>
              <input
                type="text"
                placeholder="Type your full name"
                className="w-full px-3 py-2 rounded-md border border-gray-300"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 ml-2 md:ml-0">Email:</label>
              <input
                type="email"
                placeholder="Type your email"
                className="w-full px-3 py-2 rounded-md border border-gray-300"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 ml-2 md:ml-0">Message:</label>
              <textarea
                rows="3"
                placeholder="Type your message"
                className="w-full px-3 py-2 rounded-md border border-gray-300"
              />
            </div>

            <div className="ml-2 md:ml-0">
              <button className="w-full py-2 px-4 bg-blue-500 rounded-md text-white hover:bg-red-500 hover:text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
