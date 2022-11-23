$(".header").click(function(){
    $(this).css("background-color", "red");
})

$(".sidebar").click(function(){
    // $(this).text("Leftbar");
    $("div.sidebar > p").text("Leftbar");
})

$(".extra-content").click(function(){
    $(".main-content").fadeOut();
})


//assignment -5
$(".footer").click(()=>{
    $(".popUp").css("display", "flex");
})
$("#cross").click(()=>{
    $(".popUp").css("display", "none");
})