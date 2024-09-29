"use client";

import { EmailSend } from "../lib/action";

const ContactForm = () => {
  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const gg = await EmailSend(formData);

      console.log(gg);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      e.currentTarget.reset();
    }
  };

  return (
    <form className="mb-8 p-4 w-[20%]" onSubmit={send} >

      <div className="mb-4">
        <label htmlFor="email" className="block text-black text-2xl mb-2 ">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full text-black px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-black text-2xl mb-2">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full text-black px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-black text-2xl mb-2">
          Your Message:
        </label>
        <textarea
          id="content"
          name="content"
          className="w-full text-black px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400 h-[300px] overflow-auto resize-none"
        ></textarea>
      </div>

      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
