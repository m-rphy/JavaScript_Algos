// Pslindrone Checker

function palindrome(str) {
  let newStr =str.toLowerCase().replace(/[^a-z^0-9]/g, '').replace(/[\s]/g, '')
  const forArr = newStr.split('');
  const revArr = newStr.split('').reverse();
  const forStr = forArr.join('');
  const revStr = revArr.join('')
  console.log(forStr, revStr);
  if (forStr === revStr) return true;
  return false;
}

palindrome("eye");