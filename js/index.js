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


//!Operation on card 1
document.getElementById('card-1-btn').addEventListener('click',function(){
    my_modal_1.showModal();
})


//!Operations on card 2
document.getElementById('card-2-btn').addEventListener('click',function(){
    my_modal_1.showModal();
})
//!Operations on card 3