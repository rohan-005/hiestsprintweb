function Description() {
  return (
    <div>
      {/* About the Game */}
      <div className="font-astroz text-7xl text-amber-300 anim-left m-9 text-center underline">
        About the game..
      </div>
      <div className="backdrop-blur-md bg-white/10 rounded-2xl p-10 text-white font-pixelgame text-5xl text-center max-w-5xl mx-auto anim-right shadow-lg border border-white/20">
        💼 The Heist Sprint is a fast-paced, runner mini-game where you dash
        through a high-security vault, dodging traps, lasers, and guards. Time
        your jumps and slides perfectly to escape with the loot — and your life.
        <br />
        <br />
        Quick to learn, tough to master — this stylish reflex-based challenge
        consist of many levels with difficulty being increased 🏕️
        <br />
        <br />
        🛠️ Built with Unity and powered by awesome assets from 🎨 Kenney and the
        🧰 Unity Asset Store, The Heist Sprint delivers clean visuals, sharp
        animations, and intense arcade action — all 🌐 playable right in your
        browser via WebGL.
        <br />
        <p className="text-red-500 mt-4">
          ⚡ Think fast. Move faster. Escape clean.
        </p>
      </div>

      {/* About the Developer */}
      <div className="font-astroz text-7xl text-amber-300 anim-left m-9 mt-25 text-center underline">
        About the Developer..
      </div>
      <div className="backdrop-blur-md bg-white/10 rounded-2xl p-10 text-white font-pixelgame text-5xl text-center max-w-5xl mx-auto anim-right shadow-lg border border-white/20">
        🎮 Passionate indie developer blending code and creativity to build
        unique game experiences inside Unity.
        <br />
        <br />
        💡 Always exploring new ways to tell stories through interactivity — and
        committed to shipping fun, polished browser-playable games.
        <br />
        <br />
        📬 Connect with me:
        <div className="mt-6 space-y-3 text-4xl">
          <p className="flex items-center justify-center gap-3">
            <span>🔗</span>
            <a
              href="https://www.linkedin.com/in/rohan005/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </p>
          <p className="flex items-center justify-center gap-3">
            <svg
              className="w-8 h-8 fill-gray-300"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.13c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.12-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19a11.03 11.03 0 0 1 2.9-.39c.98 0 1.96.13 2.89.39 2.22-1.5 3.18-1.19 3.18-1.19.63 1.65.23 2.87.11 3.17.74.82 1.18 1.86 1.18 3.12 0 4.43-2.69 5.4-5.25 5.69.42.36.79 1.08.79 2.18v3.23c0 .31.2.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
            <a
              href="https://github.com/rohan-005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="flex items-center justify-center gap-3">
            <span>🎮</span>
            <a
              href="https://itch.io/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline"
            >
              itch.io Dashboard
            </a>
          </p>
          <p className="flex items-center justify-center gap-3">
            <span>✉️</span>
            <a
              href="mailto:rohandhanerwal@gmail.com"
              className="text-green-300 hover:underline"
            >
              rohandhanerwal@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
