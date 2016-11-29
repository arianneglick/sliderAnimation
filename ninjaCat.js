/**
 * Created by arianneglick on 11/28/16.
 */
$( function(){
    $( "#sliderDiv" ).slider({
        range: "max",
        min: 1,
        max: 20,
        val: 1,
        slide: function(event, ui){
            $("#amount").val(ui.value);
            $("#cat").attr("src", "ninjaCat/ninjaCat" + ui.value + ".png");
        }
    });
    $("#amount").val($("#sliderDiv").slider("value"));
});