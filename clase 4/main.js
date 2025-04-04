function TwoSum(array, target){
    let left = 0;
    let right = array.length - 1;

    while(left < right){
        let result = array[left] + array[right];
        if(result === target){
            return [array[left], array[right]];
        } else if(result < target){
            left++;
        } else {
            right--;
        }
    }
    return null;
}

let arr = [2, 7, 11, 15];
let newArr = [10, 15, 7, 11, 8, 2, 44, 6];

let target = 9;
let result = TwoSum(newArr, target);
console.log(result);

function improvedTwoSum(nums, target){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return [nums[i], nums[j]]
            }
        }
    }
    return null;
}

{
let improvedResult = improvedTwoSum(newArr, target);
console.log(improvedResult);

let beast = '';


}
//TAREA
{
    
let invitados =["ana", "mario", "pepe", "luis", "marta", "jose"];

function encontrarPareja(invitados){
    for(let i = 0; i < invitados.length; i++){
        for(let j = i + 1; j < invitados.length; j++){
            if(invitados[i][0] === invitados[j][0]){
                return [invitados[i], invitados[j]];
            }
        }
    }
    return null;
}

let pareja = encontrarPareja(invitados);
console.log(pareja);
}