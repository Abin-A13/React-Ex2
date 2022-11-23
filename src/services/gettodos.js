import axios from 'axios'

export function gettodos(){
    return axios.get('https://jsonplaceholder.typicode.com/todos')
}
export function deltodos(id){
    return axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
}
export function addtodos(title){
    return axios.post(`https://jsonplaceholder.typicode.com/todos`,{
        title,
        completed:false
    })
}
export function updatetodo(id,title){
    return axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        title,
        completed:false
    })
}