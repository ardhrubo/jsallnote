let names = document.getElementById('name')

names.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        document.getElementById('show-name').innerHTML = `Your name is
        ${event.target.value}`
        event.target.value = ''
    }
})

