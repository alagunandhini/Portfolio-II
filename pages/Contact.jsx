import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 px-4">
      
      {/* SECTION TITLE (Top) */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-slate-800">
          Contact <span className="text-sky-500">Me</span>
        </h2>
        <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

   {/* LEFT IMAGE – Proper Alignment */}
        <div className="w-full h-[70vh] flex flex-col items-center">
          <img
            src="dev1.png"
            alt="Contact"
            className="w-full h-full object-cover "
          />
          <p className="text-slate-500 text-sm mt-2">Let's Build and Connect !</p>
        </div>
     

    

        {/* RIGHT FORM – UNCHANGED */}
        <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8">
          
          {/* Form Header (UNCHANGED) */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-800">
              Let's <span className="text-sky-500">Connect</span>
            </h2>
          
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100">
              <p className="text-[10px] uppercase tracking-widest text-sky-600 font-semibold">
                Email
              </p>
              <p className="text-xs font-medium text-slate-700 truncate">
                alagunadhini@gmail.com
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                Location
              </p>
              <p className="text-xs font-medium text-slate-700">
                Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl text-sm
                         border border-slate-200 bg-slate-50
                         focus:bg-white focus:outline-none
                         focus:ring-2 focus:ring-sky-400 placeholder:text-slate-700 "
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl text-sm
                         border border-slate-200 bg-slate-50
                         focus:bg-white focus:outline-none
                         focus:ring-2 focus:ring-sky-400 placeholder:text-slate-700"
              required
            />

            <textarea
              rows="3"
              placeholder="Message"
              className="w-full px-4 py-3 rounded-xl text-sm
                         border border-slate-200 bg-slate-50 resize-none
                         focus:bg-white focus:outline-none
                         focus:ring-2 focus:ring-sky-400 placeholder:text-slate-700"
              required
            />

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-xl text-sm font-semibold
                         bg-black text-white hover:bg-sky-600
                         transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        
      </div>
    </section>
  );
}
