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

    //!checking if input amount is greater than main balance or not
    if(mainBalance<inputValue){
        alert("Donation amount can not be greater than main balance");
    }else{
        if(validationCheck(inputValue)){          //!if the validation check return true
            const newCardBalance = cardBalance+inputValue
            const newBalance = mainBalance-inputValue;

            //!if balance is equal to zero, then disabling buttons
            if(newBalance===0){
                document.getElementById('card-1-btn').disabled=true;
                document.getElementById('card-2-btn').disabled=true;
                document.getElementById('card-3-btn').disabled=true;
            }

            //!assigning new values to the card balance and main balance
            document.getElementById(cardId).innerText=newCardBalance;
            document.getElementById('main-balance').innerText=newBalance;

            //!creating a new html card and appending it to the history page
            const newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl border">
            <div class="card-body">
              <h2 class="card-title">${inputValue} Taka is Donated for ${stringValue}, Bangladesh</h2>
              <p>${currentDate}</p>
            </div>
          </div>`;
          const historyContainer = document.getElementById('history-form');
          historyContainer.innerHTML+=newHTML;

            //!calling modal 
            my_modal.showModal();
            //!resetting input after adding the values and operations
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


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      }, function(err) {
        console.log('Service Worker registration failed:', err);
      });
    });
  }

  
  let deferredPrompt; // Store the event for later use
const installButton = document.getElementById('install-btn');

//code for mobile installation

// Hide the install button initially
installButton.style.display = 'none';

// Listen for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Save the event so it can be triggered later
  deferredPrompt = e;
  // Show the install button
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    // Hide the button once the prompt is triggered
    // installButton.style.display = 'none';
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      // Clear the deferredPrompt variable since it can't be used again
      deferredPrompt = null;
    });
  });
});

// Optionally, listen for the app being installed
window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
});
