const PluginCore = {
  async request(url, options = {}) {
    try {
      const res = await fetch(url, options);
      return await res.json();
    } catch (e) {
      console.error("Plugin API error:", e);
      return { error: true };
    }
  },

  playSoftSound() {
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a2c4b1.mp3?filename=soft-click-11097.mp3");
    audio.volume = 0.2;
    audio.play();
  }
};
