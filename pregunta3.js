// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    nums.sort();
    let greater=[];
    let counter=0;
    console.log(nums)
    if(nums.length >= 3){
        for (let i = 0; i < nums.length; i++) {
            greater[counter++] = nums[i];
            if(nums[i] == nums[i+1]) i++;          
        }
        return greater[greater.length - 3];
    }else{
        return undefined;
    }
}

// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === 4);
console.log(greater3([1,1,2,5]) === 1);