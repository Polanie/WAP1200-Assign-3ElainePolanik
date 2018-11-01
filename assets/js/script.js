$(document).ready(function(){

    var x = 0;
    var images = ['art-graffiti-paint.jpg', 'colorful-face.jpg', 'art-basketball.jpeg'];

    //Forward

    $('#sl-right').click(function(){
        if( x < images.length - 1 ){
            x ++;
        }else{
            x = 0;
        }
    $('#image-slider').css({"background-image":"url(/assets/images/"+images[x]+")"});
    });

    //Backward

    $('#sl-left').click(function(){
        if(x > 0 ){
            x--;
        }else{
            x = images.length - 1;
        }
        $('#image-slider').css({"background-image":"url(/assets/images/"+images[x]+")"});

    });


    /* ===================================
       Tab Navigation
       =================================== */

       $('#rocky-btn').click(function(){

           $('#jeff-btn, #cherry-btn').removeClass('active');
           $('#rocky-btn').addClass('active');

           $('#jeff-pane, #cherry-pane').hide();
           $('#rocky-pane').show();

       });


       $('#cherry-btn').click(function(){

           $('#rocky-btn, #jeff-btn').removeClass('active');
           $('#cherry-btn').addClass('active');

           $('#rocky-pane, #jeff-pane').hide();
           $('#cherry-pane').show();

       });

       $('#jeff-btn').click(function(){

           $('#cherry-btn, #rocky-btn').removeClass('active');
           $('#jeff-btn').addClass('active');

           $('#cherry-pane, #rocky-pane').hide();
           $('#jeff-pane').show();

       });






    /* ===================================
       Filter Gallery
       =================================== */

// fix gallery from jumping around in catagory select


if( $(window).width() > 767 ){
    var galleryHeight = $('#home-gallery').height();
    $('#home-gallery').css({"min-height":galleryHeight+"px"});

}


    $('#all-btn').click(function(){
        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');
        $('.all').show();
    });

    $('#exterior-btn').click(function(){
        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');
            $('.all').hide();
            $('.exterior').show();
    });

    $('#interior-btn').click(function(){
        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');
            $('.all').hide();
            $('.interior').show();
    });

    $('#large-btn').click(function(){
        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');
            $('.all').hide();
            $('.large').show();
    });

    /* ===================================
       Shadow Box
       =================================== */

       var shImages = [];
       var imgIndex = 0;

       //Push all images into global array
    $('.all img').each(function(){
        var imgSrc = $(this).attr('src').replace('/thumbs/', '/large/');
        shImages.push(imgSrc);

    });


    $('.all img').click(function(){

        var imgSrc = $(this).attr('src').replace('/thumbs/', '/large/');
        $('#shadow-img').attr('src', imgSrc);

        imgIndex = $.inArray(imgSrc, shImages);

        var marginTop = $(window).scrollTop();
        $('#shadow-box').css({"margin-top":marginTop});
        $('.shadow-box-all').show();

    });

    $('#shadow-right').click(function(){

        if( imgIndex < shImages.length - 1 ){
            imgIndex++;
        }else{
            imgIndex = 0;
        }

        $('#shadow-img').attr('src',shImages[imgIndex]);

    });

    $('#shadow-left').click(function(){

        if ( imgIndex > 0){
            imgIndex--;
        }else{
            imgIndex = shImages.length - 1;
        }

        $('#shadow-img').attr('src',shImages[imgIndex]);

    })


    $('#shadow-close').click(function() {
        $('.shadow-box-all').hide();

    });




});  //END DOCUMENT READY
