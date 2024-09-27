import {
  FaContao,
  FaCube,
  FaCubes,
  FaDatabase,
  FaGitter,
} from "react-icons/fa";

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
      <main className="flex flex-col justify-center items-center w-full min-h-screen">

        <div
          id="hero"
          className="w-full p-4 bg-[#444] h-[720px] flex items-center justify-around flex-col md:flex-row"
        >

          <div className="bg-[#444] p-4 rounded drop-shadow-lg flex flex-col gap-5">
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

          <img alt="welcoming logo image" src="http://placehold.co/300" />
        </div>

        <article>

          <header className="p-4 mb-5">
            <h2 className="text-5xl mb-4">You came to the right place</h2>
            <p className="text-md">
              We got you with multiple unique and relaiable extentions that will
              help towards keeping your tokens safe. Be sure to use an refferal
              code to be able to earn some rewards from signing up.
            </p>
          </header>

          <ul className=" gap-4 w-full flex flex-wrap justify-center">
            {refg.map((item) => (
              <li
                key={item.id}
                className="bg-[#222] flex items-center justify-center flex-col gap-4 text-xl p-2 rounded drop-shadow-lg hover:bg-[#111] w-[300px] h-[300px]"
              >
                <item.icon className="text-5xl" />
                <p>{item.des}</p>
                <p>
                  download today:
                  <a href={item.link} target="_blank">
                    {item.af}
                  </a>
                </p>
              </li>
            ))}
          </ul>


        </article>
        
      </main>
    </>
  );
};

export default TheWelcome;
