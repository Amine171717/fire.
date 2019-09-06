var gettext=document.getElementById("TX");
function bold(){
    if(gettext.style.fontWeight=="bold"){
       gettext.style.fontWeight="normal"
    }
else{ 
    gettext.style.fontWeight="bold";
}
}
function italic(){
    if(gettext.style.fontStyle=="italic"){
        gettext.style.fontStyle="normal"
    }
        else{gettext.style.fontStyle="italic";
    }
    }
    function underline(){
        if(gettext.style.textDecoration=="underline"){
            gettext.style.textDecoration="none"
        }
        else{gettext.style.textDecoration="underline";
    }
}
function sizechange(){
    var size = document.getElementById("change").value
    gettext.style.fontSize = size;
}
function stchange(){
var style = document.getElementById("st").value
    gettext.style.fontFamily=style;
 }
$(".but").hover(function(){
    $(this).css("opacity","0.5")
    $(this).find("button").show()
},function(){
    $(this).css("opacity","1")
    $(this).find("button").hide()

})
$(".but button").click(function(){
    $("#ex1").modal()
})

// $("#mybutton").click(function(){
    // $(".mypara").css("color,red");
// });
// $(document).ready(function(){
    // $("#hide").click(function(){
        // $("p").hide();
    // });
    // $("#show").click(function(){
        // $("p").show();
    // });
// });