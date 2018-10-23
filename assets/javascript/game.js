
var $rand_num_box = document.getElementById('rand_num_box');

//var rand_num_box;
var wins;
var losses;
var rand_num_crystal;
var running_ttl;


rand_num_box = Math.floor(Math.random() * 102) + 19;
$rand_num_box.textContent = rand_num_box;
console.log(rand_num_box);


//$("rand_num_box").html('Random Result: '+ rand_num_box);

for (var i = 0; i < 4; i++){
    var rand_num_crystal = Math.floor(Math.random() * 11) + 1;
    var crystal = $("<div>");
    console.log(rand_num_crystal)

    crystal.attr({
        "class": 'crystal',
        "data-random": rand_num_crystal
    });

    $(".crystals").append(crystal);
}

$(".crystal").on('click', function () {

console.log($(this).attr('data-random'));

});