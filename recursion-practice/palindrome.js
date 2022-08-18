function palindrome(i, string) {
  if (i >= (string.length - i - 1) / 2) return true;
  if (string[i] !== string[string.length - i - 1]) return false;
  return palindrome(i + 1, string);
}

console.log(palindrome(0, "madamimadam"));
