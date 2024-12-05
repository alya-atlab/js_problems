function rebuildSentence(words, lengths) {
  let sentences = "";
  for (let i = 0; i < words.length; i++) {
    let x = words[i].slice(0, lengths[i]);
    sentences += `${x} `;
  }
  return sentences;
}

console.log(rebuildSentence(["the", "sky", "is", "blue"], [3, 2, 2, 1]));
