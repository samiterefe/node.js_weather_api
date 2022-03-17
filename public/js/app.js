


// fetch('https://puzzle.mead.io/puzzle').then((response) =>{
//      response.json().then((data)=>{
//          console.log(data)
//      })
// })  //fetch and do then  run this function





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const parTextOne = document.querySelector('#text-1')
const parTextTwo = document.querySelector('#text-2')


weatherForm.addEventListener('submit', (e)=>{
   
   e.preventDefault()
   
   const location = search.value 
    
   parTextOne.textContent = 'Loading.....'
   parTextTwo.textContent = ''
  
   fetch('/weather?address='+location).then((response)=>{
    response.json().then( (data) => {
      if(data.error){
        parTextOne.textContent= data.error
      }else{
         parTextOne.textContent = data.address 
         parTextTwo.textContent = data.forecast
      }
    })
})

})