const TheAbout = () => {
  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-center">
      <section className="max-w-3xl p-8 rounded-lg border-2 border-gray-800">
        <header className="flex items-center justify-between">
          <h1 className="text-4xl">About page</h1>
        </header>

        <div className="flex flex-col gap-5 p-5 text-gray-500 text-shadow-lg">
          <p>
            When you step into something for the first time you may not know
            what to do or have the program to allow you to access the page. Well
            you came to the right place for any new beginier. We are here to
            make your start a little easy, fun, and informative.
          </p>
          <p>
            We like to help others and so we are always looking for better weays
            to improve. We have curiated a list for some applications that you
            are able to use that will allow you to be able to get through your
            crypto journey. If you have questions you can always check out our
            contact page and send a email.
          </p>
          <p>
            Be sure to vist and use our links to be able to get yourself rewards
            when signing up with them. Just remeber to save everything neatly
            you wouldnt want to loose your rewards or account.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TheAbout;
