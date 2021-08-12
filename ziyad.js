const ans = document.querySelector("#ans") 
const add = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const reset = document.querySelector("#reset")

let answer = 0
add.addEventListener("click",function(){
    answer = answer + 1
    ans.textContent = answer
})
minus.addEventListener("click",function(){
    answer = answer - 1
    ans.textContent = answer
})
reset.addEventListener("click",function(){
    answer = 0
    ans.textContent = answer
})