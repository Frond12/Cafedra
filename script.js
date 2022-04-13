var left = document.querySelector('.left');
var right = document.querySelector('.right');
var viewport = document.querySelector('.viewport');
left.addEventListener('click', function() {
   viewport.scrollBy({
      left: -600,
      behavior: 'smooth'
   });
});
right.addEventListener('click', function() {
   viewport.scrollBy({
      left: 600,
      behavior: 'smooth'
   });
});