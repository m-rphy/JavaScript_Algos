/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
     if (n < 0) {
          n = 0;
     }
     if (n === 0) {
          return [];
     }
     // initialize a variable that keeps track of stair row
     let stairNum = 1
     // iterate through the levels of stairs
for (let j = 0 ; j < n; j++) {
     // initialized an array that is the stair level
     const rowArr = [];
     // populate the stair level array
     for (let i = 0; i < n; i++) {
          // if the 
          if (i >= n - stairNum) {
               rowArr.push('*')
          } else {
               rowArr.push(' ')
          }
          // console.log(rowArr)
     }
     console.log(rowArr.join(''))
     stairNum++
     }    
};
drawStairs(6)

// solution
const HHdrawstairs = function(n) {
     let stair = 1;
     while (stair <=n) {
          console.log(' '.repeat(n - stair).concat('*'.repeat(stair)));
          stair++;
     }
}
/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/

const drawStar = n => {

     let topRow = 0
     let bottomRow = n - 1
     let rowNum = 1
     const middle = Math.floor(n/2)
     let backSlash = 1
     let forwardSlash = n - 1

     if (n === 1) {
          rowArr.push('+')
          console.log(rowArr.join(''))
          return;
     }
     
     for (let i = 0 ; i < n; i++) {
          // initialize a new row array
          const rowArr = [];
          // rowArr.push('test')
          // populate the stair array level
          if (topRow === bottomRow) {
               for (let k = 0; k < n; k++) {
                    if (k === middle + 1) {
                         rowArr.push('+')
                    } else {
                         rowArr.push('-')
                    }
               }
          }
          if (i === topRow && (topRow !== bottomRow)) {
               for (let j = 0; j < n; j++) {
                    if (j === topRow) {
                         rowArr.push('\\')
                    }
                    if (j === bottomRow) {
                         rowArr.push('/')
                    }
                    if (j === middle) {
                         rowArr.push('|')
                    } else {
                         rowArr.push(' ')
                    }
               }
          }
          if (i === bottomRow && (topRow !== bottomRow)) {
               for (let j = 0; j < n; j++) {
                    if (j === bottomRow) {
                         rowArr.push('\\')
                    }
                    if (j === topRow) {
                         rowArr.push('/')
                    }
                    if (j === middle) {
                         rowArr.push('|')
                    } else {
                         rowArr.push(' ')
                    }
               }
               
          }
          console.log(rowArr.join(''))
          rowNum++;
          topRow++
          bottomRow--
     }   
};

drawStar(13);

const StepehndrawStar = n => {
  if(n % 2 === 0){
       return 'n needs to be an odd number.';
  }
  const top = Math.ceil(n/2) - 1
  let topLeftCounter = 0
  let topRightCounter = n - 1
  for (let i = top; i >= -top; i--){
       let str = ''
       
       if (i > 0) {
            for (let j = 0; j < n; j++) {
                 
                 if (j === topLeftCounter) {str += `${"\\"}`;}
                 else if (j === top) {str += '|';}
                 else if (j === topRightCounter) {str += '/';}
                 else {str += ' ';}
                
            };
            console.log(str)
       }
       if (i === 0) {
            for (let j = 0; j < n; j++) {
                 if (j === top) {
                 str += '+';
                 } else {
                 str += '-';
                 }
            }
            console.log(str)
       }
       if (i < 0) {
            for (let j = 0; j < n; j++) {
                 if (j === topRightCounter) {str += '/';}
                 else if (j === top) {str += '|';}
                 else if (j === topLeftCounter) {str += `${"\\"}`;}
                 else {str += ' ';}
            }
            console.log(str)
       }
       topLeftCounter++;
       topRightCounter--;
  }
}



console.log(drawStar(3))