const MainContent = () => {
  return (
    <section className="">
      <div className={"text-center"}>
        <h1 className="text-5xl lg:text-7xl font-bold mb-5">
        Anonymity at your fingertips
        </h1>
        <p className="text-xl lg:text-2xl font-light">
          Share your thoughts freely and without fear of judgement
        </p>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/3 lg:pr-6 mb-8 lg:mb-0">
            <img
              src="https://anonymous.falci.me/static/media/feature.invite.png"
              alt="image1"
              className="rounded-md shadow-md"
            />
            <h2 className="text-md font-semibold text-white mt-4 bg-indigo-500 rounded-full p-2 max-w-[8rem] text-center">
              FREE VERSION
            </h2>
            <h2 className="text-2xl font-semibold mt-4 text-left">
              Allowed channels
            </h2>
            <p className="text-gray-500 mt-2">
              Avoid chaos. Invite the bot to specific channels.
            </p>
          </div>
          <div className="w-full lg:w-1/3 lg:px-3 mb-8 lg:mb-0">
            <img
              src="https://anonymous.falci.me/static/media/feature.modal.png"
              alt="image2"
              className="rounded-md shadow-md"
            />
            <h2 className="text-md font-semibold mt-4 bg-indigo-500 rounded-full text-white p-2 max-w-[8rem] text-center">
              FREE VERSION
            </h2>
            <h2 className="text-2xl font-semibold mt-4 text-left">
              Completely anonymous
            </h2>
            <p className="text-gray-500 mt-2">No "user is typing" hint.</p>
          </div>
          <div className="w-full lg:w-1/3 lg:pl-6">
            <img
              src="https://anonymous.falci.me/static/media/feature.reply.gif"
              alt="image3"
              className="rounded-md shadow-md"
            />
            <h2 className="text-md font-semibold mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white p-2 max-w-[8rem] text-center">
              PLUS VERSION
            </h2>
            <h2 className="text-2xl font-semibold mt-4 text-left">
              Respond to Thread
            </h2>
            <p className="text-gray-500 mt-2">
              Send anonymous message to a thread
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
