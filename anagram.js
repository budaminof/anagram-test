function Anagram(name) {
  this.name = name;
  this.anagrams = []

  this.matches = function(options) {
    var arguments;
    if (typeof options === 'string') {
      arguments = [].slice.apply(arguments);
    } else {
      arguments = options;
    }
    var nameSorted = this.name.toLowerCase().split('').sort().join('');
    for (var i = 0; i < arguments.length; i++) {
      var isAnagram = this.isItsOwnAnagram(this.name, arguments[i]);
      var tempSorted = arguments[i].toLowerCase().split('').sort().join('');
      if (tempSorted == nameSorted && isAnagram) {
        this.anagrams.push(arguments[i]);
      }
    }
    return this.anagrams;
  }

   this.isItsOwnAnagram = function(word, otherWord) {
    return (word.toLowerCase() == otherWord.toLowerCase()) ? false : true;
  }

}

module.exports = Anagram;
