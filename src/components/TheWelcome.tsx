import {
  FaContao,
  FaCube,
  FaCubes,
  FaDatabase,
  FaGitter,
} from "react-icons/fa";

import ImgME from "../assets/image/iron.png";
import { EmailSignUp } from "../lib/action";
import ContactForm from "./ContactForm";

const TheWelcome = () => {
  const refg = [
    {
      id: "1",
      af: "crypto.com",
      link: "https://crypto.com/app/y8yjabr8my",
      code: "31498es",
      des: `An app that allows you to manage your assets on at the touch of
                your finger tips.`,
      icon: FaContao,
    },
    {
      id: "2",
      af: "CashApp",
      link: "https://cash.app/app/H1W6G6Z",
      code: "31498es",
      des: `An app that allows you to manage your assets on at the touch of
                your finger tips.`,
      icon: FaCube,
    },
    {
      id: "3",
      af: "Coinbase",
      link: "https://cash.app/app/H1W6G6Z",
      code: "31498es",
      des: `An app that allows you to manage your assets on at the touch of
                your finger tips.`,
      icon: FaCubes,
    },
    {
      id: "4",
      af: "Kraken",
      des: `An app that allows you to manage your assets on at the touch of
                your finger tips.`,
      link: "https://cash.app/app/H1W6G6Z",
      code: "31498es",
      icon: FaGitter,
    },
    {
      id: "5",
      af: "Kukoin",
      des: `An app that allows you to manage your assets on at the touch of
                your finger tips.`,
      link: "https://cash.app/app/H1W6G6Z",
      code: "31498es",
      icon: FaDatabase,
    },
  ];

  return (
    <>
      <main className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-r from-[#f02fa6] to-[#ffef59]">
        <div
          id="hero"
          className="w-full p-4  h-[720px] flex items-center justify-around flex-col md:flex-row bg-[#2425]"
        >
          <div className="bg-[#4125] p-4 rounded drop-shadow-lg flex flex-col gap-5">
            <h2 className="text-5xl capitalize">
              Looking to get into the crypto space safely
            </h2>
            <div>
              <p className="text-md text-gray-300">
                Want to make friends, money, profit, and build a sustainable
                portfolio
              </p>
              <p className="text-md text-gray-300">
                Signup for email for future drop and excuslive crypto news.
              </p>
            </div>
            <a
              href="#"
              className="bg-emerald-500 hover:bg-emerald-800 font-bold p-4 w-[20%] font-bold"
            >
              Learn More
            </a>
          </div>

          <img
            alt="welcoming logo image"
            src={ImgME}
            className="w-[300px] h-[300px]"
          />
        </div>

        <article className="w-full  h-[720px] flex flex-col items-center justify-around">
          <header className="p-4 mb-5 text-black">
            <h2 className="text-5xl mb-4 capitalize">
              You came to the right place
            </h2>
            <p className="text-lg">
              We got you with multiple unique and relaiable extentions that will
              help towards keeping your tokens safe. Be sure to use an refferal
              code to be able to earn some rewards from signing up.
            </p>
          </header>

          <ul className=" gap-4 w-full flex flex-wrap justify-center">
            {refg.map((item) => (
              <li
                key={item.id}
                className="bg-[#222] flex items-center text-center justify-center flex-col gap-4 text-xl p-2 rounded drop-shadow-lg hover:bg-[#111] w-[300px] h-[300px]"
              >
                <a href={item.link} target="_blank">
                  <item.icon className="text-6xl mx-auto mb-4" />
                  <p>{item.des}</p>
                  <p className="flex items-center flex-col">
                    <span className="underline mb-2 uppercase">
                      download today:
                    </span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="w-full  h-[720px] flex  items-center justify-around bg-[#344]">
          <header className=" w-[50%] h-[500px] ">
            <div className="bg-[#444] flex items-center flex-col justify-around h-full p-5 rounded drop-shadow-lg">
              <div className="text-center">
                <h2 className="text-3xl md:text-6xl font-bold mb-4 capitalize">
                  Want to know more?
                </h2>
                <p className=" text-gray-500 text-lg md:text-xl underline">
                  Sign up on our email list
                </p>
              </div>

              <div className="p-1">
                <span className="text-4xl font-bold mb-2">About:</span>
                <p className="text-sm text-gray-300">
                  The place where you are able to get on the latest app that
                  support crypto as well as join up on a mailing list. You will
                  be be able to get weekly emails about upcoming dApps and even
                  certain events that may take place. Be sure to share with your
                  friends and use my refferal code so we can both earn some
                  money. If you ever feel the needs to communicate with someone
                  about something be sure to connact me in the contact section,
                  ill try to get to you as soon as a can.
                </p>
              </div>
            </div>
          </header>

          <form
            onSubmit={EmailSignUp}
            className="flex items-center flex-col p-4 bg-[#444] gap-5 rounded drop-shadow-lg"
          >
            <label
              htmlFor="emailUser"
              className="flex items-center justify-between flex-col gap-5"
            >
              <span className="text-xl">Enter Email:</span>
              <input
                type="email"
                placeholder="email enter"
                className="w-full p-2 bg-[#6725]"
              />
            </label>

            <button className="bg-[#111] hover:bg-[#411] p-2">submit</button>
          </form>
        </article>

        <article className="w-full border  h-[720px] flex  items-center justify-around bg-[#3444]">
          <ContactForm />

          <header className="  w-[50%] h-[400px] bg-[#444] rounded drop-shadow-lg">
            <div className="h-full flex items-center flex-col justify-around">
              <div className="w-full p-4 text-center">
                <h2 className="text-3xl md:text-6xl mb-4 capitalize">
                  Contact us today
                </h2>
                <p className="text-lg text-gray-500 underline">
                  Sign up on our email list
                </p>
              </div>

              <div className="p-4">
                <span className="text-2xl font-bold">
                  Additional Information:
                </span>
                <p className="text-sm text-gray-300">
                  Getting started can be a little hard at first but #1 rule you
                  need to rememeber is to keep your wallet and menophonic phrase
                  key safe. OR you will loose.... everything limited ways of
                  retrieve your goods..
                </p>
              </div>
            </div>
          </header>
        </article>
      </main>
    </>
  );
};

export default TheWelcome;
