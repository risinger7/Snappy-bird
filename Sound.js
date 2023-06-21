import { Audio } from "expo-av";

export default function audioScoreUp() {
  async function playSound() {
    const sound = new Audio.Sound();
    console.log("playin");
    try {
      await sound.loadAsync(require("./assets/sounds/positive.mp3"));
      await sound.playAsync();
      // Your sound is playing!

      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      // await sound.unloadAsync();
    } catch (error) {
      console.log("error: ", error);
      // An error occurred!
    }
  }
  playSound();

  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);
}
