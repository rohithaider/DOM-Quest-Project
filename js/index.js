document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='blog.html'
})


//!blur effect on the navbar and banner
const header = document.querySelector('header');

  function toggleBlurOnScroll() {
    if (window.scrollY > 0) {
      header.classList.add('backdrop-blur-md', 'bg-opacity-60');
    } else {
      header.classList.remove('backdrop-blur-md', 'bg-opacity-60');
    }
  }

  window.addEventListener('scroll', toggleBlurOnScroll);
//!common function
const getInputById = function(id){
   const inputValue  = document.getElementById(id).value;
   return inputValue;
}
const getTextValueById = function(id){
    const inputValue  = document.getElementById(id).innerText;
   return inputValue;

}

const validationCheck = function(value){
    const newValue = parseFloat(value);
    if(typeof newValue ==='number' && !isNaN(newValue)){
        return true;
    }
    else{
        alert("Please input number only")
        return;
    }

}



//!Operation on card 1
document.getElementById('card-1-btn').addEventListener('click',function(){
    const inputValue = parseFloat(getInputById('input-1'));
    const cardBalance = parseFloat(getTextValueById('card-balance'));
    const mainBalance = parseFloat(getTextValueById('main-balance'))
    console.log(cardBalance,mainBalance);
    if(mainBalance<inputValue){
        alert("Donation amount can not be greater than main balance");
    }else{
        if(validationCheck(inputValue)){
            const newCardBalance = cardBalance+inputValue
            const newBalance = mainBalance-inputValue;
            document.getElementById('card-balance').innerText=newCardBalance;
            document.getElementById('main-balance').innerText=newBalance;
        
            my_modal.showModal();
        }
    }
    
    
    
})


//!Operations on card 2
document.getElementById('card-2-btn').addEventListener('click',function(){
    const inputValue = parseFloat(getInputById('input-2'));
    const cardBalance = parseFloat(getTextValueById('card-balance-2'));
    const mainBalance = parseFloat(getTextValueById('main-balance'))
    console.log(cardBalance,mainBalance);
    if(mainBalance<inputValue){
        alert("Donation amount can not be greater than main balance");
    }else{
        if(validationCheck(inputValue)){
            const newCardBalance = cardBalance+inputValue
            const newBalance = mainBalance-inputValue;
            document.getElementById('card-balance-2').innerText=newCardBalance;
            document.getElementById('main-balance').innerText=newBalance;
        
            my_modal.showModal();
        }
    }
})
//!Operations on card 3
document.getElementById('card-3-btn').addEventListener('click',function(){
    const inputValue = parseFloat(getInputById('input-3'));
    const cardBalance = parseFloat(getTextValueById('card-balance-3'));
    const mainBalance = parseFloat(getTextValueById('main-balance'))
    console.log(cardBalance,mainBalance);
    if(mainBalance<inputValue){
        alert("Donation amount can not be greater than main balance");
    }else{
        if(validationCheck(inputValue)){
            const newCardBalance = cardBalance+inputValue
            const newBalance = mainBalance-inputValue;
            document.getElementById('card-balance-3').innerText=newCardBalance;
            document.getElementById('main-balance').innerText=newBalance;
        
            my_modal.showModal();
        }
    }
})