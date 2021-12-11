
// Loading page
$(document).ready(function() {  
    $("#load").fadeOut(1000 , ()=>{
        $("#loading ").fadeOut(1000,()=>{
            // $("#loading").remove();
            $("body").css("overflow-y" , "auto")
        })
    });
})
// End loading Page 


// Portfolio
var mixer = mixitup('.port');
// End Portfolio

