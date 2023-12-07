var eraseOverlapIntervals = function(intervals) {
  if(!intervals.length) return 0;
  let flag = 0;
  intervals.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));
  let i = 0;
  console.log(intervals);
  while(i < intervals.length - 1){
      if(intervals[i][1] > intervals[i+1][0]){
          flag++;
          intervals.splice(i+1, 1)
      } else {
          i++;
      }
  }
  return flag;
};

let array = [[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]]
eraseOverlapIntervals(array);
