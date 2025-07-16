function Characters() {
  const char = [
    { url: "New folder/chara.png", name: "Lumber Joe", joke: "Once tried to cut down a plastic tree. Still blames the axe." },
    { url: "New folder/charb.png", name: "DJ Bounce", joke: "Mixes beats by day, dodges bees by night. Allergic to silence." },
    { url: "New folder/charc.png", name: "Carl the Curious", joke: "Looked into a toaster once. Invented accidental time travel." },
    { url: "New folder/chard.png", name: "Beary Allen", joke: "Disguised as a bear to win a forest dance-off. Never broke character." },
    { url: "New folder/charh.png", name: "Glitch Hunter", joke: "Born from a broken arcade machine. Speaks fluent binary." },
    { url: "New folder/charr.png", name: "Shadow Ravi", joke: "Vanished mid-sentence once. No one knows how that story ends." },
  ];

  const charholder = char.map((char, index) => (
    <div
      key={index}
      className="char group h-95 w-64 m-4 p-4 rounded-xl border border-gray-600 text-center text-white bg-gradient-to-b from-zinc-800 to-zinc-900 hover:h-95 hover:from-white hover:to-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
    >
      <img
        src={char.url}
        alt={char.name}
        className="w-60 h-80 mx-auto mb-4 rounded-lg shadow-lg transition-all duration-100 group-hover:scale-105 hover:h-64"
      />
      <div className="text-3xl font-bold transition-colors duration-300 font-pixelgame">{char.name}</div>
      <p className="text-1xl italic mt-2 transition-colors duration-300 font-pixelgame">{char.joke}</p>
    </div>
  ));

  return (
    <div className="relative w-full py-12 px-4">
      <div className="text-4xl sm:text-5xl md:text-6xl text-blue-200 font-astroz mb-10 ml-4 sm:ml-10 typing whitespace-nowrap overflow-hidden w-fit">
        Characters..
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-screen-xl mx-auto">
        {charholder}
      </div>
    </div>
  );
}

export default Characters;
