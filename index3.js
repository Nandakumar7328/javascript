const getBestApartment = (blocks,reqs) => {
    const lenOfBlocks = blocks.length
    const lenOfReqs = reqs.length
    let count = 0 
    let indexOfApartment = 0
    for(let i = 0 ; i < lenOfBlocks; i++){
        let temp = 0 
        for(let j = 0 ; j < lenOfReqs; j++){
            if(blocks[i][reqs[j]]=== true){
                temp = temp+ 1
            }

         
        }
        
        if(temp > count){
            count = temp 
            indexOfApartment = i 
        }
    }

    return indexOfApartment
}



const blocks = [
    {
        "gym": false,
        "school": true,
        "store": true,
        "school": false,
    },
    {
        "gym": true,
        "school": false,
        "store": false,
        "school": false,
    },
    {
        "gym": true,
        "school": true,
        "store": false,
        "school": true,
    },
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
    "gym": true,
    "school": true,
    "store": false,
    "school": true,
    }
    ]
const reqs = ["gym", "school", "store"]


const finalResult = getBestApartment(blocks,reqs)
console.log(finalResult)