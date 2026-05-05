function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const result = [];
  for (const word of set) {
    if (word.startsWith(startString)) {
      result.push(word.slice(startString.length));
    }
  }
  return result.join('-');
}

export default cleanSet;
