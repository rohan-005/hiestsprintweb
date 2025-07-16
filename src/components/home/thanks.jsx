function Thanksto() {
  return (
    <div className="w-full bg-black px-4 py-12">
      <div className="text-4xl sm:text-5xl md:text-6xl  text-blue-200 font-astroz mb-10 ml-4 sm:ml-10 typing whitespace-nowrap overflow-hidden w-fit">
        Assets Used..
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-y-6 gap-x-10 px-4 ml-20">
        {/* Text Section */}
        <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-pixelgame space-y-4">
          <p>
            Characters - <a href="https://kenney.nl/assets/blocky-characters" className="text-blue-300">Blocky Characters - Kenney</a>
          </p>
          <p>
            Environment - <a href="https://kenney.nl/assets/category:3D?sort=update" className="text-blue-300">City Kit - Kenney</a>
          </p>
          <p>
            Font - <a href="https://assetstore.unity.com/packages/2d/fonts/free-retro-pixel-font-gnf-322855" className="text-blue-300">Free retro pixel font - GNF</a>
          </p>
          <p>
            Skybox - <a href="https://assetstore.unity.com/packages/3d/environments/sci-fi/real-stars-skybox-lite-116333" className="text-blue-300">Real Stars Skybox Lite - Unity</a>
          </p>
          <p>
            Sounds Pack - <a href="https://assetstore.unity.com/packages/audio/music/25-fantasy-rpg-game-tracks-music-pack-240154" className="text-blue-300">Tracks Music Pack - Unity</a>
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 flex-shrink-0 mr-20">
          <img
            src="images/preview.png"
            alt="Assets Preview"
            className="h-72 sm:h-80 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Thanksto;
