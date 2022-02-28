/**
 * Adds together two numbers
 * @param seconds - input total seconds
 * @returns string format of minutes and hours
 */
function secToHour(seconds: number): string {
  return (
    Math.floor(seconds / 3600) +
    " hour(s) and " +
    Math.round((seconds % 3600) / 60) +
    " minute(s)"
  );
}

export default secToHour;
