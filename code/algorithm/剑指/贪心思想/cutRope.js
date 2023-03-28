/**
 * G(n,m)=k * G(n-k)(m-1)
 */
function cutRope(number) {
  let max = 1
  for (let index = 1; index <= number; index++) {
    if (max < index * cutRope(number - index)) {
      max = index * cutRope(number - index)
    }
  }
  return max
}


console.log(cutRope(8))
