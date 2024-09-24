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
    if(typeof newValue ==='number' && !isNaN(newValue) && newValue>0){
        return true;
    }
    else{
        alert("Please input amount greater than zero")
        return;
    }

}

const getCurrentDate = function(){
    const currentDate = new Date();
    const formattedTime = `${currentDate}`;
    return formattedTime;


}



//!Operation on card 1
document.getElementById('card-1-btn').addEventListener('click',function(e){
    e.preventDefault();
    const inputValue = parseFloat(getInputById('input-1'));
    const cardBalance = parseFloat(getTextValueById('card-balance'));
    const mainBalance = parseFloat(getTextValueById('main-balance'));

    //getting current date and time from reusable function
    const currentDate = getCurrentDate();

    
    if(mainBalance<inputValue){
        alert("Donation amount can not be greater than main balance");
    }else{
        if(validationCheck(inputValue)){
            const newCardBalance = cardBalance+inputValue
            const newBalance = mainBalance-inputValue;
            
            document.getElementById('card-balance').innerText=newCardBalance;
            document.getElementById('main-balance').innerText=newBalance;
            newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl border">
            <div class="card-body">
              <h2 class="card-title">${inputValue} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
              <p>${currentDate}</p>
            </div>
          </div>`;
          const historyContainer = document.getElementById('history-form');
          historyContainer.innerHTML+=newHTML;

        
            my_modal.showModal();
            document.getElementById('input-1').value="";
        }
        else{
            document.getElementById('input-1').value="";
        }
    }
    
    
    
})

//!Operations on card 2
document.getElementById('card-2-btn').addEventListener('click',function(e){
    e.preventDefault();
    const inputValue = parseFloat(getInputById('input-2'));
    const cardBalance = parseFloat(getTextValueById('card-balance-2'));
    const mainBalance = parseFloat(getTextValueById('main-balance'))

    //getting current date and time from reusable function
    const currentDate = getCurrentDate();

    if(mainBalance<inputValue){
        alert("Donation amount can not be greater than main balance");
    }else{
        if(validationCheck(inputValue)){
            const newCardBalance = cardBalance+inputValue
            const newBalance = mainBalance-inputValue;
            document.getElementById('card-balance-2').innerText=newCardBalance;
            document.getElementById('main-balance').innerText=newBalance;

            //adding to the history
            newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl border">
            <div class="card-body">
              <h2 class="card-title">${inputValue} Taka is Donated for Flood at Feni, Bangladesh</h2>
              <p>${currentDate}</p>
            </div>
          </div>`;
          const historyContainer = document.getElementById('history-form');
          historyContainer.innerHTML+=newHTML;

            
        
            my_modal.showModal();
            document.getElementById('input-2').value="";
        }
        else{
            document.getElementById('input-2').value="";
        }
    }
})
//!Operations on card 3
document.getElementById('card-3-btn').addEventListener('click',function(e){
    e.preventDefault();
    const inputValue = parseFloat(getInputById('input-3'));
    const cardBalance = parseFloat(getTextValueById('card-balance-3'));
    //getting current date and time from reusable function
    const currentDate = getCurrentDate();

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

            //adding to the history
            newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl border">
            <div class="card-body">
              <h2 class="card-title">${inputValue} Taka is Donated for the injured people in the Quota Movement, Bangladesh</h2>
              <p>${currentDate}</p>
            </div>
          </div>`;
          const historyContainer = document.getElementById('history-form');
          historyContainer.innerHTML+=newHTML;
        
            my_modal.showModal();
            document.getElementById('input-3').value="";
        }
        else{
            document.getElementById('input-3').value="";
        }
    }
})


// !history button
document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]')
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-form').classList.remove('hidden');
    document.querySelector('footer').classList.add('hidden');

    

})

//!donation button
document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
    document.getElementById('donation-form').classList.remove('hidden');
    document.getElementById('history-form').classList.add('hidden');
    document.querySelector('footer').classList.remove('hidden');
})
