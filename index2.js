const claculateEdgeValue = (intMatrix,row,column) => {
    let returnResult  = 0 
    for(let i = 0 ; i < row ; i++){
        for(let j = 0 ; j < column ; j++){  

            if( i === 0 || i === row-1 || j === 0 || j === column-1){
                returnResult = returnResult + intMatrix[i][j]
            }
        }
    }

    return returnResult 
}

const convertIntMatrix = (stringMatrix,row,column) => {
    let intMatrix = []
    for(let i = 0 ; i < row ; i++){
        let tempArry = []
        for(let j = 0 ; j < column; j++){
           tempArry.push(parseInt(stringMatrix[i][j]))
        }
        intMatrix.push(tempArry)
    }
    const result = claculateEdgeValue(intMatrix,row,column)
    return result 
}

const stringMatrix =   
[
["1", "2", "3", "4"],
["5", "6", "7", "8"],
["9", "10","11", "12"]
]
const row = 3 
const column = 4 

const finalResult = convertIntMatrix(stringMatrix,row,column)
console.log(finalResult)