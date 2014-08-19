
$(window).load(function() {



function getRandomInt(min, max) { 
    var num =  Math.floor(Math.random() * (max - min + 1)) + min; 
    return num
  };

 
    var timer = setInterval(function(){
      name= getRandomInt(1, 14);
      var filename = "flag" + name.toString() + ".png";
      $("#one").attr({src:  imagePath + filename});
      }, 12000);

    var timer2 = setInterval(function(){
      name= getRandomInt(15, 29);
      var filename1 = "flag" + name.toString() + ".png";
      $("#two").attr({src:  imagePath + filename1});
      }, 12200);
      
    var timer3 = setInterval(function(){ 
      name= getRandomInt(30, 44);
      var filename2 = "flag" + name.toString() + ".png";
      $("#three").attr({src:  imagePath + filename2});
      }, 12400);

    var timer4 = setInterval(function(){ 
      name= getRandomInt(45, 59);
      var filename3 = "flag" + name.toString() + ".png";
      $("#four").attr({src:  imagePath + filename3});
      }, 12600);

    var timer5 = setInterval(function(){ 
      name= getRandomInt(60, 74);
      var filename4 = "flag" + name.toString() + ".png";
      $("#five").attr({src:  imagePath + filename4});
      }, 12800);
    
    var timer6 = setInterval(function(){   
      name= getRandomInt(75, 89);
      var filename5 = "flag" + name.toString() + ".png";
      $("#six").attr({src:  imagePath + filename5});
      }, 13000);
  
    var timer7 = setInterval(function(){ 
      name= getRandomInt(90, 104);
      var filename6 = "flag" + name.toString() + ".png";
      $("#seven").attr({src:  imagePath + filename6});
      }, 13200);

    var timer8 = setInterval(function(){ 
      name= getRandomInt(105, 119);
      var filename7 = "flag" + name.toString() + ".png";
      $("#eight").attr({src:  imagePath + filename7});
      }, 13400);
    

    var timer9 = setInterval(function(){ 
      name= getRandomInt(135, 149);
      var filename9 = "flag" + name.toString() + ".png";
      $("#one1").attr({src:  imagePath + filename9});
      }, 12000);

    var time10 = setInterval(function(){ 
      name= getRandomInt(150, 164);
      var filename10 = "flag" + name.toString() + ".png";
      $("#two1").attr({src:  imagePath + filename10});
      }, 12200);

    var timer11 = setInterval(function(){ 
      name= getRandomInt(165, 179);
      var filename11 = "flag" + name.toString() + ".png";
      $("#three1").attr({src:  imagePath + filename11});
      }, 12400);
    
    var timer12 = setInterval(function(){ 
      name= getRandomInt(180, 194);
      var filename12 = "flag" + name.toString() + ".png";
      $("#four1").attr({src:  imagePath + filename12});
      }, 12600);

    var timer13 = setInterval(function(){ 
      name= getRandomInt(195, 209);
      var filename13 = "flag" + name.toString() + ".png";
      $("#five1").attr({src:  imagePath + filename13});
      }, 12800);

    var timer14 = setInterval(function(){ 
      name= getRandomInt(210, 224);
      var filename14 = "flag" + name.toString() + ".png";
      $("#six1").attr({src:  imagePath + filename14});
      }, 13000);

    var timer15 = setInterval(function(){ 
      name= getRandomInt(225, 239);
      var filename15 = "flag" + name.toString() + ".png";
      $("#seven1").attr({src:  imagePath + filename15});
      }, 13200);

    var timer16 = setInterval(function(){ 
      name= getRandomInt(240, 241);
      var filename16 = "flag" + name.toString() + ".png";
      $("#eight1").attr({src:  imagePath + filename16});
      }, 13400);




   var imagePath = "images/circulate/countryflags/"; 

   function displayLogo() {
     
     var filename = "flag" + getRandomInt(1, 14).toString() + ".png";
     var filename1 = "flag" + getRandomInt(15, 29).toString() + ".png";
     var filename2 = "flag" + getRandomInt(30, 44).toString() + ".png";
     var filename3 = "flag" + getRandomInt(45, 59).toString() + ".png";
     var filename4 = "flag" + getRandomInt(60, 74).toString() + ".png";
     var filename5 = "flag" + getRandomInt(75, 89).toString() + ".png";
     var filename6 = "flag" + getRandomInt(90, 104).toString() + ".png";
     var filename7 = "flag" + getRandomInt(105, 119).toString() + ".png";
     var filename8 = "flag" + getRandomInt(120, 134).toString() + ".png";
     var filename9 = "flag" + getRandomInt(135, 149).toString() + ".png";
     var filename10 = "flag" + getRandomInt(150, 164).toString() + ".png";
     var filename11 = "flag" + getRandomInt(165, 179).toString() + ".png";
     var filename12 = "flag" + getRandomInt(180, 194).toString() + ".png";
     var filename13 = "flag" + getRandomInt(195, 209).toString() + ".png";
     var filename14 = "flag" + getRandomInt(210, 224).toString() + ".png";
     var filename15 = "flag" + getRandomInt(225, 239).toString() + ".png";
     var filename16 = "flag" + getRandomInt(240, 241).toString() + ".png";

         
        $("#one").attr({src:  imagePath + filename}).hide();
        $("#two").attr({src:  imagePath + filename1}).hide();
        $("#three").attr({src:  imagePath + filename2}).hide();
        $("#four").attr({src:  imagePath + filename3}).hide();
        $("#five").attr({src:  imagePath + filename4}).hide();
        $("#six").attr({src:  imagePath + filename5}).hide(); 
        $("#seven").attr({src:  imagePath + filename6}).hide();
        $("#eight").attr({src:  imagePath + filename7}).hide();
        $("#one1").attr({src:  imagePath + filename8}).hide();
        $("#two1").attr({src:  imagePath + filename9}).hide();
        $("#three1").attr({src:  imagePath + filename10}).hide();
        $("#four1").attr({src:  imagePath + filename11}).hide();
        $("#five1").attr({src:  imagePath + filename12}).hide();
        $("#six1").attr({src:  imagePath + filename13}).hide(); 
        $("#seven1").attr({src:  imagePath + filename14}).hide();
        $("#eight1").attr({src:  imagePath + filename15}).hide();
        $("#nine1").attr({src:  imagePath + filename16}).hide();


    function one(){
    $("#one").show();
    $("#one").circulate({
            sizeAdjustment: 180,
            speed: 3500,
            width: -520,
            height: 20,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function two(){
    $("#two").show();
    $("#two").circulate({
            sizeAdjustment: 155,
            speed:3500,
            width: -750,
            height: 25,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })

    }

    function three(){
    $("#three").show();
    $("#three").circulate({
            sizeAdjustment: 150,
            speed:3500,
            width: -750,
            height: 30,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function four(){
    $("#four").show();
    $("#four").circulate({
            sizeAdjustment: 145,
            speed:3500,
            width: -750,
            height: 35,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function five(){
    $("#five").show();
    $("#five").circulate({
            sizeAdjustment: 140,
            speed:3500,
            width: -750,
            height: 40,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function six(){
    $("#six").show();
    $("#six").circulate({
            sizeAdjustment: 135,
            speed:3500,
            width: -750,
            height: 45,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function seven(){
    $("#seven").show();
    $("#seven").circulate({
            sizeAdjustment: 130,
            speed:3500,
            width: -750,
            height: 50,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function eight(){
    $("#eight").show();
    $("#eight").circulate({
            sizeAdjustment: 125,
            speed:3500,
            width: -750,
            height: 55,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function one1(){
    $("#one1").show();
    $("#one1").circulate({
            sizeAdjustment: 160,
            speed:3500,
            width: -750,
            height: 20,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })

    }


    function two1(){
    $("#two1").show();
    $("#two1").circulate({
            sizeAdjustment: 155,
            speed:3500,
            width: -750,
            height: 25,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })

    }

    function three1(){
    $("#three1").show();
    $("#three1").circulate({
            sizeAdjustment: 150,
            speed:3500,
            width: -750,
            height: 30,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function four1(){
    $("#four1").show();
    $("#four1").circulate({
            sizeAdjustment: 145,
            speed:3500,
            width: -750,
            height: 35,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function five1(){
    $("#five1").show();
    $("#five1").circulate({
            sizeAdjustment: 140,
            speed:3500,
            width: -750,
            height: 40,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function six1(){
    $("#six1").show();
    $("#six1").circulate({
            sizeAdjustment: 135,
            speed:3500,
            width: -750,
            height: 45,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function seven1(){
    $("#seven1").show();
    $("#seven1").circulate({
            sizeAdjustment: 130,
            speed:3500,
            width: -750,
            height: 50,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function eight1(){
    $("#eight1").show();
    $("#eight1").circulate({
            sizeAdjustment: 125,
            speed:3500,
            width: -750,
            height: 55,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
    }

    function nine1(){
    $("#nine1").show();
    $("#nine1").circulate({
            sizeAdjustment: 120,
            speed:3500,
            width: -750,
            height: 60,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    })
}
    //one();
    // one1();

    setTimeout(one,2000);
    setTimeout(two,3000);
    setTimeout(three,4000);
    setTimeout(four,5000);
    setTimeout(five,6000);
    setTimeout(six,7000);
    setTimeout(seven,8000);
    setTimeout(eight,9000);
    
    setTimeout(one1,2500);
    setTimeout(two1,3500);
    setTimeout(three1,4500);
    setTimeout(four1,5500);
    setTimeout(five1,6500);
    setTimeout(six1,7500);
    setTimeout(seven1,8500);
    setTimeout(eight1,9500);
    // setTimeout(nine1,10500);

}

displayLogo();



});


    






    

