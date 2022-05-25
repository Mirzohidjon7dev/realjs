$('.ask').on('click',  function(e){
    e.preventDefault()
    $(this).toggleClass('active')
    $('.ask')
})


$('.ask').on('click', function(e){
    e.preventDefault()
    $('.ask').removeClass('active')
    $('.answer').slideUp(500)
    $(this).toggleClass('active').next().stop(true).slideToggle(500)
  });




function typing(elem){
    let fulltext = '';
    i = 0;
    typetext = elem.html()
    let interval = setInterval(() => {
        fulltext += typetext[i]
        i++
        
        if (typetext.length - 1 < 1 ) {
           clearInterval(interval)
        }
        
    }, 500)

}    
typing($('h1'))



$('button[data-filter]').click(function(){
    const rang = $(this).attr('data-filter')
    if (rang == 'success') {
        $('.js-filter-card').not(`[data-filter=${rang}]`).slideUp(500)
    }else if(rang == 'primary'){
        $('.js-filter-card').not(`[data-filter=${rang}]`).slideUp(500)
    } else if(rang == 'danger'){
        $('.js-filter-card').not(`[data-filter=${rang}]`).slideUp(500)
    } else {
        $('.js-filter-card').slideDown(500)
    }
    $(`.js-filter-card[data-filter=${rang}]`).slideDown(500)
})

$('.read-more').click(function(){
    $(this).html('read less')
    $('.text-hidden').toggleClass('hidden')
   


})


$('.js-modal-show').click(function(){
    $('.modal').fadeIn(500)
    $('.modal').next().fadeOut(500)
})
