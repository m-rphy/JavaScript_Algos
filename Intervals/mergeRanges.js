/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/
const intervals = [[8, 10], [15, 18], [1, 3], [2, 6]] // -> [[1, 6], [8, 10], [15, 18]]
const testIntervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]] // --> [[0, 1], [3, 8], [9, 12]]

const mergeRanges = meetings => {

// sort the incoming meeting intervals by the start time
const sortedMeeting = [...meetings.sort((a,b) => a[0] - b[0])] // <-- sort mutates the array (NOT best practice)

// initialize a result array with the first interval-element of the sorted array
const result = [meetings[0]];

  // Loop through the remaining meetings and merge them if necessary
  for (let i = 1; i < meetings.length; i++) {
    // make a variable for currArr
    const currentMeeting = meetings[i];
    // last element of results 
    const lastMergedMeeting = results[result.length - 1]; 

    // if there is an overlapping meeting time
    if (currentMeeting[0] <= lastMergedMeeting[1]) {
      //reassing 
      lastMergedMeeting[1] = Math.max(lastMergedMeeting[1], currentMeeting[1]);
    } else {
      // The current meeting does not overlap with the last merged meeting, 
      // so add it to the merged array
      result.push(currentMeeting);
    }
  }
  console.log(result)
  return result;
}

mergeRanges(testIntervals);