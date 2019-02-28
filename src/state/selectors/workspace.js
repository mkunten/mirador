/** Returns the latest error from the state
 * @param {object} state
 */
export function getLatestError(state) {
  return state.errors.items[0] && state.errors[state.errors.items[0]];
}
