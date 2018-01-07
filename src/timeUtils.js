export default function convertElapsedTime(inputSeconds) {
  let seconds = Math.floor(inputSeconds % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let minutes = Math.floor(inputSeconds / 60);
  return minutes + ":" + seconds;
}
