/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let visited = {};
  for (let i = 0; i < s.length; i++) {
    if (typeof visited[s.charAt(i)] === "undefined") {
      visited[s.charAt(i)] = i;
    } else {
      visited[s.charAt(i)] = -1;
    }
  }
  const r = Object.values(visited)
    .filter(it => it > -1)
    .sort((a, b) => a - b);
  return r.length > 0 ? s.charAt(r[0]) : " ";
};
