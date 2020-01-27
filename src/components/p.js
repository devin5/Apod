function removeVowels(str) {
  const vx = ["a", "e", " i", "o", " u"];
  const newStr = [];

  str.split("").forEach(item => {
    if (!vx.includes(item)) {
      newStr.push(item);
    } else {
      return null;
    }
  });

  return newStr.join("");
}

console.log(removeVowels("avavavavav"));
