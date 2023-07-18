const string =
  'Regular expressions, abbreviated as regex, or sometimes regexp, are one of those concepts that you probably know is really powerful and useful. But they can be daunting, especially for beginning programmers. JavaScript includes several helpful methods that make using regular expressions much more manageable. Of the included methods, the .match(), .matchAll(), and .replace() methods are probably the ones you\'ll use most often. But say you want to see how many times the word "are" occurs in a string. To do that, just add the global search flag to your regular expression.';
const pattern = /dog/gi;
console.log(string.match(pattern));
