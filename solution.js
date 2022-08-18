let A=[3,4,3,2,3,-1,3,3]

//Function solution(A)
function solution(A){
    //if does have a dominator return -1
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
    }
    
    return maxArr;
}

console.log(solution(A));