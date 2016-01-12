
$(document).ready(function(){

  $("[rel=tooltip]").tooltip({
    animation: true,
  });

  // find filter
  $('input#filter-box').quicksearch('.filter-target', {
    'delay': 500,
    'bind': 'keyup keydown',
    'onBefore': function () {
      clearDisplay();
    }
  });
});
