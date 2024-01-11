import {Router} from 'express'
import {todo} from  '../models/todo'

type RequestBody = {
   text: string 
}

type RequestParams = {
    todoId : string
}
let todos : Array<todo> = []

const router = Router()

router.get('/',(req,res,next)=>{
     res.status(200).json({todos : todos})
})

router.post('/todo',(req,res,next)=>{
    const body = req.body as RequestBody
    const newTodo : todo = {
        id:new Date().toISOString(),
        text: body.text
    }

    todos.push(newTodo)

    return res.status(201).json({message:'added todo'})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    const params = req.params as RequestParams
     todos  = todos.filter((todo)=>todo.id !== params.todoId)
     return res.status(200).json({message:'delted todo'})
})

router.post('/todo/:todoId',(req,res,next)=>{
    const params = req.params as RequestParams

    const todoIndex = todos.findIndex(todoItem=>todoItem.id === params.todoId)

    if(todoIndex >=0){
         todos[todoIndex] = {id:todos[todoIndex].id,text:req.body.text}
         return res.status(200).json({message:'updated todo',todos:todos})
    }

    res.status(404).json({message:"no todo found"})
   
})

export default router