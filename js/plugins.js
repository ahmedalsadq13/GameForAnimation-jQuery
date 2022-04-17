$(document).ready(function(){
    $(".hide").click(function(){        
        $("p").hide();    
    });

    $(".show").click(function(){        
        $("p").show();    
    });

    $(".fadeIn").click(function(){
        $("p").fadeIn(1000, function(){
            console.log("I'm Here");
        })
    });

    $(".fadeOut").click(function(){
        $("p").fadeOut(1000, function(){
            console.log("I'm Not Here")
        });
    });

    $(".fadeToggle").click(function(){

        $("p").fadeToggle(1000 , function(){
            console.log("This Toggle Don't Be Afraid")
        })
    });

    $(".fadeTo-3").click(function(){
        $("p").fadeTo(1000, .3, function(){
            console.log("This Fade To 0.3")
        });
    });
    $(".fadeTo1").click(function(){
        $("p").fadeTo(1000, 1, function(){
            console.log("This is Fade To 1  ")
        });
    });

    $(".slideUp").click(function(){
        $("p span").slideUp(1000, function(){
            console.log("I Just slide It Up")
        })
    });
    $(".slideDown").click(function(){
        $("p span").slideDown(1000, function(){
            console.log("I Just slide It Down")
        })
    });
    $(".slideToggle").click(function(){
        $("p span").slideToggle(1000,function(){
            console.log("Are You Playing With Me (! !?")
        });
    });

});