import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const App = () => {
  const buttons = [
    {
      name: "Youtube Download",
      icon: <FaYoutube />,
      link: "https://vidssave.com/yt",
      color: "hover:bg-red-600",
    },
    {
      name: "Instagram Download",
      icon: <FaInstagram />,
      link: "https://vidssave.com/ins",
      color: "hover:bg-pink-600",
    },
    {
      name: "Facebook Download",
      icon: <FaFacebook />,
      link: "https://vidssave.com/facebook",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-center text-3xl font-bold text-white mb-6">
          Social Media Downloader
        </h1>

        <div className="flex flex-col gap-4">
          {buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`flex items-center justify-between w-full px-6 py-4 text-lg md:text-xl font-semibold text-white bg-black/70 rounded-xl transition-all duration-300 transform hover:scale-105 ${btn.color}`}
              >
                {btn.name}

                <span className="text-2xl ml-3 animate-bounce">{btn.icon}</span>
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
