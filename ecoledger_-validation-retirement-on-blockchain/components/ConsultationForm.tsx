import React, { useState } from "react";
import { CloseIcon } from './icons/CloseIcon';

const ConsultationForm: React.FC = () => {
  const [open, setOpen] = useState(false);

  // ✅ form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState<null | string>(null);

  // ✅ handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://34.207.75.185:5090/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", date: "", time: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group fixed right-6 bottom-6 z-[999] bg-eco-primary text-white 
             h-14 w-14 rounded-full shadow-lg flex items-center justify-center 
             transition-all duration-300 overflow-hidden hover:w-56 hover:rounded-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="ml-2 hidden group-hover:inline-block whitespace-nowrap font-semibold">
          Book a Consultation
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1000]">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative m-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
              Book a Consultation
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              Fill out the form below and our team will get back to you.
            </p>

            {/* ✅ changed: added value, name, onChange, and onSubmit */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-eco-primary focus:border-eco-primary outline-none transition" required />
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-eco-primary focus:border-eco-primary outline-none transition" required />
              <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number (e.g., +1 555 1234)" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-eco-primary focus:border-eco-primary outline-none transition" />
              <input name="date" value={formData.date} onChange={handleChange} type="date" className="w-full border rounded-lg p-3 text-gray-500 focus:ring-2 focus:ring-eco-primary focus:border-eco-primary outline-none transition" />
              <input name="time" value={formData.time} onChange={handleChange} type="time" className="w-full border rounded-lg p-3 text-gray-500 focus:ring-2 focus:ring-eco-primary focus:border-eco-primary outline-none transition" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message (optional)" rows={3} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-eco-primary focus:border-eco-primary outline-none transition"></textarea>
              <button type="submit" className="w-full bg-eco-primary text-white p-3 rounded-lg font-bold hover:bg-eco-dark transition-all shadow-md">
                Submit Request
              </button>
            </form>

            {/* ✅ feedback messages */}
            {status === "loading" && <p className="text-blue-500 mt-4 text-center">Submitting...</p>}
            {status === "success" && <p className="text-green-600 mt-4 text-center">✅ Request submitted!</p>}
            {status === "error" && <p className="text-red-600 mt-4 text-center">❌ Something went wrong.</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationForm;
