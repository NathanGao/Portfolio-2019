function AnimateIt1() {
    var B = $("#B1"),
        content = $(".contentcolumn"),
        top = $(".topblocker")
        maxLeft = content.width() - B.width(),
        maxTop = top.height(),
        leftPos = Math.floor(Math.random() * (maxLeft + Math.random())),
        topPos = Math.floor(Math.random() * (maxTop + Math.random()));
        // imgRight = "http://f00.inventorspot.com/images/goldfish.jpg",
        // imgLeft = "http://2.bp.blogspot.com/-F8s9XEIBSsc/T41x37x9w1I/AAAAAAAAB9A/cDfFJLCERII/s1600/Goldfish-1600x1200.jpg";
    
    // if (theDiv.position().left < leftPos) {
    //     theDiv.attr("src", imgRight);
    // } else {
    //     theDiv.attr("src", imgLeft);
    // }
        
    B.animate({
        "left": leftPos,
        "top": topPos
    }, 10000, AnimateIt1);

    // B2.animate({
    //     "left": leftPos,
    //     "top": topPos
    // }, 1000, AnimateIt);    
}

function AnimateIt2() {
    var B = $("#B2"),
        content = $(".contentcolumn"),
        top = $(".topblocker")
        maxLeft = content.width() - B.width(),
        maxTop = top.height(),
        leftPos = Math.floor(Math.random() * (maxLeft + Math.random())),
        topPos = Math.floor(Math.random() * (maxTop + Math.random()));
        // imgRight = "http://f00.inventorspot.com/images/goldfish.jpg",
        // imgLeft = "http://2.bp.blogspot.com/-F8s9XEIBSsc/T41x37x9w1I/AAAAAAAAB9A/cDfFJLCERII/s1600/Goldfish-1600x1200.jpg";
    
    // if (theDiv.position().left < leftPos) {
    //     theDiv.attr("src", imgRight);
    // } else {
    //     theDiv.attr("src", imgLeft);
    // }
        
    B.animate({
        "left": leftPos,
        "top": topPos
    }, 10000, AnimateIt2);

    // B2.animate({
    //     "left": leftPos,
    //     "top": topPos
    // }, 1000, AnimateIt);    
}

AnimateIt1();
AnimateIt2();


































// $(document).ready(function(){
//     animateDiv();
    
// });

// function makeNewPosition(){
    
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $('.headercontainer').height();
//     var w = $('.headercontainer').width();

//     var nh = Math.floor(Math.random() * h + 250);
//     var nw = Math.floor(Math.random() * w) + 250;
    
//     return [nh,nw];    
    
// }

// function animateDiv(){
   
//     // var lowEnd = Number(value.split('-')[0]);
//     // var highEnd = Number(value.split('-')[1]);
//     // var boxnum = [];
//     //     for (var i = lowEnd; i <= highEnd; i++) {
//     // boxnum.push(i);
//     var newq = makeNewPosition();
//     var oldq = $('#B1').offset();
//     var oldqb = $('#B2').offset();
//     var speed = calcSpeed([oldq.top, oldq.left], newq);
    
//     $('#B1').animate({ top: newq[0], left: newq[1] }, speed, function(){
//       animateDiv();     
//     });

//     $('#B2').animate({ top: newq[1], left: newq[1] }, speed, function(){
//       animateDiv();     
    
//     });


// };


// function calcSpeed(prev, next) {
    
//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);
    
//     var greatest = x > y ? x : y;
    
//     var speedModifier = .6;

//     var speed = Math.ceil(greatest/speedModifier);

//     return speed;

// }

















// function moveDiv() {
//     var $span = $(".random");
    
//     $span.fadeOut(10, function() {
//         var maxLeft = $(window).width() - $span.width();
//         var maxTop = $(window).height() - $span.height();
//         var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//         var topPos = Math.floor(Math.random() * (maxTop + 1))
     
//         $span.css({ left: leftPos, top: topPos }).fadeIn(100);
//     });
// };

// moveDiv();
// setInterval(moveDiv, 1000);



// Box random positioning
// for (var i = 0; i < 5; i++) {
//   $('.main').append('<div class="box"></div>');
// }
// $( '.box' ).each(function( index ) {
//   $(this).css({
//     left : Math.random() * ($('.main').width() - $(this).width()),
//     top : Math.random() * ($('.main').height() - $(this).height())
//   });
// });