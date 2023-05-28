// $(function(){
//      $('.panel1').css({
//         color:'red',
//         fontWeight:'bold'
//      });
// }); 


// $(function(){
//    // $('.panel2').hide();
//     $('.panel2').css({
//         opacity: '0.5'
//     });
// });

$(document).ready(function(){
    $('.panel3').hide(3000).show(3000);
    $('.panel2').fadeOut(3000).fadeIn(3000);
    $('.panel1').slideUp(3000).slideDown(3000);
    //$('.panel1').fadeToggle(3000).fadeToggle(3000);
});

$(function(){
//    $('#btn1').on('mouseover',function(){
//     $('.panel1').slideUp(3000);
//     });

//     $('#btn2').on('mouseover',function(){
//         $('.panel2').slideUp(3000);
//         });

//     $('#btn3').on('mouseover',function(){
//     $('.panel3').slideUp(3000);
//     });

//     $('#btn1').on('click',function(){
//         $('.panel1').toggle(3000);
//         });
    
//     $('#btn2').on('click',function(){
//         $('.panel2').toggle(3000);
//             });
    
//     $('#btn3').on('click',function(){
//         $('.panel3').toggle(3000);
//         });
    
    $('.buttonItem').on('click',function(){
        var content = 'It\'s a bonus';
        var panel = $(this).attr('data-panel');
        $('.'+panel).slideToggle(3000);
        $('.'+panel + ' .panelBody').html(content);
    });

    // $('li').on('mousemove',function(){
    //     $(this).addClass('special');
    // });

    // $('li').on('mouseout',function(){
    //     $(this).removeClass('special');
    // });

    $('li').on('click',function(){
        $(this).filter('.orange').hide(3000);
    });  

    $('.tabs li').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var panel = $(this).attr('data-panel');
        $('#'+panel).siblings().removeClass('active');
        $('#'+panel).addClass('active');

    });


});

//pics-slider
 $(function(){

    //variable configuration
    var pause = 6000;
    var animationSpeed = 3000;
    var currentSlide = 1;
    var width = 400;

    //cache DOM
    var $container = $('.container');
    var $slides =  $container.find('.slides');
    var $slide = $slides.find('.slide');

    var myInterval;

    //roll the sildes
    function startSlide(){
            myInterval = setInterval(function(){
            $slides.animate({'margin-left':'-=' + width}, animationSpeed, function(){
                currentSlide++;
                if(currentSlide === $slide.length){
                    currentSlide = 1;
                    $slides.css('margin-left',0);
                }
            }); 
        },pause);
    }

    startSlide();

    //pause the slider
    $container.on('mouseenter',function(){
        clearInterval(myInterval);
    });

    //start the slider
    $container.on('mouseleave',function(){
        startSlide();
    });

// GET JSON
    $(function(){

        var $fruits = $("#fruits");

        $.ajax({
            type: 'GET',
            url: 'api/fruits.json',
            success: function(fruits){
               $.each(fruits, function(i, fruit){
                $fruits.append('<li>' + fruit.name + '</li>');
               });
               $fruits.append('<li>' + 'Fruits above are all my favorite.' + '</li>');
            },
            error: function(){
                alert('error loading fruits');
            }
        });
    });


    
 });