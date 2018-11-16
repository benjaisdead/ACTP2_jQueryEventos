$(function() {

  $('.cards').on('click', '.card', function(){
    $(this).toggleClass('card--open');
  });

  $('.card').on('click', '.card__like', function(){
    $(this).toggleClass('card__like--red');
    event.preventDefault();
    event.stopPropagation();
  })
  $('.card__follow-btn').on('click', function(){
    $(this).toggleClass('card__follow-btn--following')
    event.preventDefault();
    event.stopPropagation();
  })

});
