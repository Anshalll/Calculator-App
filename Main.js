
const Num = document.querySelectorAll("li")
const MainHeader = document.getElementById('MainHeader')

const Calculate = document.getElementById('calculate')
const Input = document.querySelector('.Inputs')

const clear = document.getElementById('clear')


const clearHistory = document.getElementById('clearHistory')
const Results = document.getElementById('results')

const Inserted_para = document.querySelector('.Inputs')

let history = []

for(let a of Num){
    a.addEventListener('click' , ()=>{
        const Main = a.children

        let value = Main[0].getAttribute('value')
        Inserted_para.append(value)



    })


}


Calculate.addEventListener('click' , () =>{
    let value_evalute = Input.innerHTML


    try{
        if (value_evalute.includes('√')) {
          
                const solve_root = Math.sqrt(value_evalute.substring(value_evalute.length - 2))

                history.push(solve_root)
                MainHeader.innerText = ""
                Results.innerHTML += `<li><p> > </p> ${solve_root}</li>`

        }
        else{
            let evaluated_value = eval(value_evalute)
        
            history.push(evaluated_value)
            MainHeader.innerText = ""

            Results.innerHTML += `<li><p> > </p> ${evaluated_value}</li>`
        }
       
    }

    catch(error){
       Input.innerHTML = error
       setTimeout(() =>{
        Input.innerHTML = null
       }, 3000)
    }

})


clearHistory.addEventListener('click' , () =>{
    MainHeader.innerText = "Anshal's Calculator"
    Results.innerHTML = ""

})



clear.addEventListener('click' , () =>{
    const innervals = Input.innerHTML
   let last_val = innervals.substring( 0 ,innervals.length - 1)
  
   Input.innerHTML = last_val

} )