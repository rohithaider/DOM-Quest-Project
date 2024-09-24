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

const getCurrentDate = function(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();          // 4-digit year (e.g., 2024)
    const month = currentDate.getMonth() + 1;        // Month (0-11, so add 1)
    const day = currentDate.getDate();               // Day of the month (1-31)
    const hours = currentDate.getHours();            // Hours (0-23)
    const minutes = currentDate.getMinutes();        // Minutes (0-59)
    const seconds = currentDate.getSeconds(); 

    const formattedTime =  `Date: ${month}-${day}-${year} ${hours}:${minutes}:${seconds} GMT +0600 (Bangladesh Standard Time)`;
    return formattedTime;


}



//!Operation on card 1
document.getElementById('card-1-btn').addEventListener('click',function(){
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
            newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl">
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
document.getElementById('card-2-btn').addEventListener('click',function(){
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
            newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl">
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
document.getElementById('card-3-btn').addEventListener('click',function(){
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
            newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">${inputValue} Taka is Donated for Aid for the injured for the Quota Movement, Bangladesh</h2>
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

    

})

//!donation button
document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
    document.getElementById('donation-form').classList.remove('hidden');
    document.getElementById('history-form').classList.add('hidden');
})
