let A=[1,2,3,4,4,5,6,7]


function solution(A){

    if(!A || A.length === 0){
        return -1;
    }
    if(A.length === 1){
        return A[0];
    }
    
    let obj = {};
    
    A.forEach((item,index)=>{
        let objArr = obj[item+''];
        
        if(objArr){
            objArr.push(index);
        }
        else{
            objArr = [index];
        }
        
        obj[item+''] = objArr;
    })
    
    let maxArr = [];
    
    for( let key in obj){
        if(obj[key].length > maxArr.length){
            maxArr = obj[key];
        }
        if (maxArr<2){
            return -1;
        }
    }
    
    return maxArr;
}

console.log(solution(A));