const checkProductOfnumList  = (newArry,numK,numM) => {
   let finalReturnReturn = 0
   for(let i = 1 ; i < numM+1 ; i++){
     if(i % numK === 0 ){
        finalReturnReturn  = finalReturnReturn + newArry[i-1]
     }
   }
   return finalReturnReturn 
}

const convertToInt = (num_list,numK,numM) => {
    let newArry = []
    
    for(let i of num_list){
        newArry.push(parseInt(i))
    }

    const result = checkProductOfnumList(newArry,numK,numM)
    return result 
}

const num_list = ["4","8","6","6","7","9","3"]
const numK = 1
const numM = 7

const finalResult = convertToInt(num_list,numK,numM)
console.log(finalResult)
