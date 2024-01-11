const ele1 = document.getElementById('num1') as HTMLInputElement
const ele2 = document.getElementById('num2') as HTMLInputElement
const btn = document.querySelector('button')! 

const numResult : Array<number> = []
const textResult : string[] = []

type numorstring = number | string

interface resultObj {
    val :number;
    timestamp:Date; 
}

function addNumber(num1:numorstring,num2 :numorstring){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
          return num1 + num2
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 +' '+num2
    }
    return +num1 + +num2
}

function printResult(resultObj : resultObj){
    console.log(resultObj.val)
}


btn.addEventListener('click',()=>{
     const num1 = ele1.value;
     const num2 = ele2.value;
     const result1  = addNumber(Number(num1),Number(num2))
     numResult.push(result1 as number)
     console.log(result1)
     const result2 = addNumber(num1,num2)
     textResult.push(result2 as string)
     printResult({val : result1 as number,timestamp : new Date()})
     console.log(numResult,textResult)
})

const promise =  new Promise<string>((res,rej)=>{
    setTimeout(()=>{
        res('working ')
    },1000)
})

promise.then((res)=>{

    console.log(res.split(''))
})
.catch((err)=>{
    console.log(err)
})