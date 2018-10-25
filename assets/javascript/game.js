

var losses = 0;
var wins = 0;
var images = ['assets/images/img1.png', 
    'assets/images/img2.png', 
    'assets/images/img3.png', 
    'assets/images/img4.png']



reset ();

function reset () {
    $("crystals").empty();

    var rand_num_crystal;
    var running_ttl = 0;

    rand_num_box = Math.floor(Math.random() * 102) + 19;
    console.log(rand_num_box);
    
    $(".randomNumber").html(rand_num_box);
    $(".running_ttl").html([running_ttl]); 


for (var i = 0; i < 4; i++){
    var rand_num_crystal = Math.floor(Math.random() * 11) + 1;
    var crystal = $("<div>");

    console.log(rand_num_crystal)

    crystal.attr({
        "class": 'crystal',
        "data-random": rand_num_crystal
    });

    crystal.css({
         "background-image":"url('" + (images[i]) + "')",
         "background-size":"cover"
    });

    $(".crystals").append(crystal);
}


$(".crystal").on('click', function () {
    var num = parseInt($(this).attr('data-random'));
    running_ttl += num;
    $(".running_ttl").html([running_ttl]); 

    if(running_ttl > rand_num_box) {
        losses++;
        $("crystals").empty();
        $(".losses").html("Losses: " + losses);
        reset();
    }
    else if (running_ttl === rand_num_box){
        wins++;
        $("crystals").empty();
        $(".wins").html("Wins: " + wins);
        reset();
    }

});
}




// var wins = 0; 
// console.log("wins: " + wins); 

// var losses = 0; 
// console.log("losses: " + losses); 

// var score = 0; 
// console.log("score: " + score); 
// $(".running_ttl").html(score); 

// $(".crystal").on('click', function () {
//     var newScore = score += parseInt($(this).attr("rand_num_crystal")); 
//     console.log("New Score: " + newScore); 
//     $(".running_ttl").html(newScore);

//     console.log($(this).attr('rand_num_crystal'));

// });


        
        // $("img").on("click", function () {
        //     var newScore = score += parseInt($(this).attr("value")); 
        //         console.log("New Score: " + newScore); 
        //     $(".running_ttl").html(newScore)});