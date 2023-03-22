// Given an array of unsorted numbers, return the index of 
// the following target if the target exists in the array. 
// If the target is not found, return null
let num = [45,12,6,89,2,5]

function merge_sort(left_part,right_part)
{
	var num1= 0;
	var num2 = 0;
	var results = [];
	while (num1 < left_part.length || num2 < right_part.length) {
		if (num1 === left_part.length) {
			// j is the only index left_part
			results.push(right_part[num2]);
			j++;
		}
      else if (num2 === right_part.length || left_part[num1] <= right_part[j]) {
			results.push(left_part[num1]);
			num1++;
		} else {
			results.push(right_part[num2]);
			num2++;
		}
	}
	return results;
}
console.log(merge_sort([45,12,6], [89,2,5]));

function binary(num , target){
    let left =0;
    let right= num.length-1;

    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(num[middle]===target){
            return middle
        }
        else if (num[middle] > target){
            right= middle - 1;
        }
        else{
            left=middle + 1;
        }
    }
    return null;
}

let number=[45,12,6,89,2,5];
let target=6
console.log(binary(number, target));




