import $ from "jquery"
$(function() {
    var counter = 1;
    var price = parseFloat($('.price').text());
    var total = counter * price;
        updateTotal();

  
    function updateTotal() {
      total = counter * price;
      $('.total').text(total);
    }
  
    // Add button click event handler
    $('.add').on('click', function() {
      counter++;
      $('.counter').text(counter);
      updateTotal();
    });
  
    // Subtract button click event handler
    $('.subtract').on('click', function() {
      if (counter > 0) {
        counter--;
        $('.counter').text(counter);
        updateTotal();
      }
    });
  
    // Price change event handler
    $('.price').on('input', function() {
      price = parseFloat($(this).text());
      updateTotal();
    });
  });