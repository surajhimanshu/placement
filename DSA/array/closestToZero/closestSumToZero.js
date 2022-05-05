function main(input) {
  input = input.trim().split("\n");
  let t = Number(input[0]);
  let n = 1;
  let pos = 2;
  for (let i = 0; i < t; i++) {
    let b = supermain(Number(input[n]), input[pos]);
    process.stdout.write(b + "\n");
    n += 2;
    pos += 2;
  }
}
function supermain(n,arr) {
arr = arr.split(" ").map(Number);
  arr.sort((a, b) => a - b);
  if (arr[n - 1] < 0) {
    return arr[n - 2] + " " + arr[n - 1];
  }
  if (arr[0] > 0) {
    return arr[0] + " " + arr[1];
  }
  let l = 0,
    h = n - 1,
    min_l = l,
    min_r = n - 1;
  let minSum = Number.MAX_SAFE_INTEGER;
  while (l <= h) {
    let sum = arr[l] + arr[h];
    if (sum === 0) {
      return `${arr[l]} ${arr[h]}`;
    }
    if (Math.abs(sum) < Math.abs(minSum)) {
      minSum = sum;
      min_l = l;
      min_r = h;
    }
    if (sum < 0) l++;
    else h--;
  }

  return `${arr[min_l]} ${arr[min_r]}`;
}
main(`4
5
5 -2 1 -7 4
5
5 -2 2 -7 4
5
-5 -2 -1 -7 -4
5
5 2 1 7 4`);

//brute force
// function supermain(n,arr) {
//     arr = arr.split(" ").map(Number);
//      let str = "";
//      let absClosest = Number.MAX_SAFE_INTEGER;
//      let closest;
//      for (let i = 0; i < arr.length; i++) {
//        for (let j = i + 1; j < arr.length; j++) {
//          let sum = arr[i] + arr[j];
//          if (Math.abs(sum) <= absClosest) {
//            str =""
//            str += arr[i] + " " + arr[j];
//            absClosest = Math.abs(sum - 0);
//            closest = sum;
//          }
//        }
//      }
//      return str;
//    }
