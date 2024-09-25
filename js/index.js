document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='blog.html'
})


//!blur effect on the navbar and banner
const header = document.querySelector('header');
const navbar = document.querySelector('nav')
const navContainer = document.getElementById('navbar-container')

  function toggleBlurOnScroll() {
    if (window.scrollY > 0) {
      header.classList.add('backdrop-blur-md', 'bg-opacity-60');
      navbar.classList.remove('bg-[#F9F7F3]')
      navContainer.classList.remove('bg-[#F9F7F3]')
      

    } else {
      header.classList.remove('backdrop-blur-md', 'bg-opacity-60');
      navbar.classList.add('bg-[#F9F7F3]');
      navContainer.classList.add('bg-[#F9F7F3]');
      
    }
  }
  window.addEventListener('scroll', toggleBlurOnScroll);

//!common functions
// !........................................................................
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
        alert("Please input amount in numbers greater than zero")
        return;
    }

}

const getCurrentDate = function(){
    const currentDate = new Date();
    const formattedTime = `${currentDate}`;
    return formattedTime;


}

const resetInput = function(id){
    document.getElementById(id).value="";
}

const calculateOperation = function(inputId,cardId,stringInput){
    const inputValue = parseFloat(getInputById(inputId));
    const cardBalance = parseFloat(getTextValueById(cardId));
    const mainBalance = parseFloat(getTextValueById('main-balance'));
    const stringValue = stringInput;

    //getting current date and time from reusable function
    const currentDate = getCurrentDate();

    
    if(mainBalance<inputValue){
        alert("Donation amount can not be greater than main balance");
    }else{
        if(validationCheck(inputValue)){
            const newCardBalance = cardBalance+inputValue
            const newBalance = mainBalance-inputValue;
            
            document.getElementById(cardId).innerText=newCardBalance;
            document.getElementById('main-balance').innerText=newBalance;
            
            newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl border">
            <div class="card-body">
              <h2 class="card-title">${inputValue} Taka is Donated for ${stringValue}, Bangladesh</h2>
              <p>${currentDate}</p>
            </div>
          </div>`;
          const historyContainer = document.getElementById('history-form');
          historyContainer.innerHTML+=newHTML;

        
            my_modal.showModal();
            resetInput(inputId);
        }
        else{
            resetInput(inputId);
        }
    }
    
}


// !Operations
// !..................................................................................


//!Operation on card 1
document.getElementById('card-1-btn').addEventListener('click',function(e){
    e.preventDefault();
    calculateOperation('input-1','card-balance','Flood at Noakhali');
})

//!Operations on card 2
document.getElementById('card-2-btn').addEventListener('click',function(e){
    e.preventDefault();
    calculateOperation('input-2','card-balance-2','Flood at Feni');
   
})
//!Operations on card 3
document.getElementById('card-3-btn').addEventListener('click',function(e){
    e.preventDefault();
    calculateOperation('input-3','card-balance-3','Injured People in the Quota Movement');
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
