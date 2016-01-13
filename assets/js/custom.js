
$(document).ready(function(){

  $("[rel=tooltip]").tooltip({
    animation: true,
  });

  function clearDisplay () {
    // $('.something').empty().hide();
  }

  // find filter
  $('input#filter-box').quicksearch('.cheat-code', {
    'delay': 500,
    'bind': 'keyup keydown',
    'onBefore': function () {
      clearDisplay();
    }
  });
});
