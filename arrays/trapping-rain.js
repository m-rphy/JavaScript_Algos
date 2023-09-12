

const case1 = [0,1,0,2,1,0,1,3,2,1,2,1];

const trap = function(height) {
    let l = 0;
    let r = height.length - 1;

    let lMax = 0;
    let rMax = 0;
    let trapped = 0

    while (l < r) {
        if (height[l] < height[r]) {
            if (height[l] >= lMax) {
                lMax = height[l];
            } else {
                trapped += lMax - height[l];
            }
            l++;
        }  else {
            if (height[r] >= rMax) {
                rMax = height[r];
            } else {
                trapped += rMax - height[r];
            }
            r--;
        }
    }
    return trapped;
};

console.log(trap(case1))