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
  $('#image').on('change', function (){
    var image = 'assets/images/squared/' + $(this).val();
    $('.create__image .create__img').attr('src', image);
  })
  $('#author').on('change', function (){
    var image = 'assets/images/profiles/' + $(this).val();
    $('.create__profile .create__img').attr('src', image);
  })
});
