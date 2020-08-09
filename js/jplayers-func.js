// Volume
$(function($) {
	$("#sound1").knob({change : function (value) { $("#jplayer_1").jPlayer("volume", value); },})
	$("#sound2").knob({change : function (value) { $("#jplayer_2").jPlayer("volume", value); },})
	$("#sound3").knob({change : function (value) { $("#jplayer_3").jPlayer("volume", value); },})
	$("#sound4").knob({change : function (value) { $("#jplayer_4").jPlayer("volume", value); },})
	$("#sound5").knob({change : function (value) { $("#jplayer_5").jPlayer("volume", value); },})
	$("#sound6").knob({change : function (value) { $("#jplayer_6").jPlayer("volume", value); },})
	$("#sound7").knob({change : function (value) { $("#jplayer_7").jPlayer("volume", value); },})
	$("#sound8").knob({change : function (value) { $("#jplayer_8").jPlayer("volume", value); },})
	$("#sound9").knob({change : function (value) { $("#jplayer_9").jPlayer("volume", value); },})
	$("#sound10").knob({change : function (value) { $("#jplayer_10").jPlayer("volume", value); },})
	$("#sound11").knob({change : function (value) { $("#jplayer_11").jPlayer("volume", value); },})
	$("#sound12").knob({change : function (value) { $("#jplayer_12").jPlayer("volume", value); },})
	$("#sound13").knob({change : function (value) { $("#jplayer_13").jPlayer("volume", value); },})
	$("#sound14").knob({change : function (value) { $("#jplayer_14").jPlayer("volume", value); },})
});

// tests data-fgColor="#FFFFFF"
/*
$("#sound1").knob({
	'change' : function (v) { 
		console.log("change");
		$('#sound1').trigger(
			'configure',{"fgColor":"#00FF00"}
		);
	},
	'release' : function (v) { 
		console.log("release");
		$('#sound1').trigger(
			'configure',{"fgColor":"#FFFFFF"}
		);
	}
});*/

// Mute Button
$("#mute").click(function() { 
	$("#unmute").css( "visibility", "visible" );
	$("#mute").css( "visibility", "hidden" );
	$("#jplayer_1").jPlayer("mute");
	$("#jplayer_2").jPlayer("mute");
	$("#jplayer_3").jPlayer("mute");
	$("#jplayer_4").jPlayer("mute");
	$("#jplayer_5").jPlayer("mute");
	$("#jplayer_6").jPlayer("mute");
	$("#jplayer_7").jPlayer("mute");
	$("#jplayer_8").jPlayer("mute");
	$("#jplayer_9").jPlayer("mute");
	$("#jplayer_10").jPlayer("mute");
	$("#jplayer_11").jPlayer("mute");
	$("#jplayer_12").jPlayer("mute");
	$("#jplayer_13").jPlayer("mute");
	$("#jplayer_14").jPlayer("mute");
});
$("#unmute").click(function() { 
	$("#unmute").css( "visibility", "hidden" );
	$("#mute").css( "visibility", "visible" );
	$("#jplayer_1").jPlayer("unmute");
	$("#jplayer_2").jPlayer("unmute");
	$("#jplayer_3").jPlayer("unmute");
	$("#jplayer_4").jPlayer("unmute");
	$("#jplayer_5").jPlayer("unmute");
	$("#jplayer_6").jPlayer("unmute");
	$("#jplayer_7").jPlayer("unmute");
	$("#jplayer_8").jPlayer("unmute");
	$("#jplayer_9").jPlayer("unmute");
	$("#jplayer_10").jPlayer("unmute");
	$("#jplayer_11").jPlayer("unmute");
	$("#jplayer_12").jPlayer("unmute");
	$("#jplayer_13").jPlayer("unmute");
	$("#jplayer_14").jPlayer("unmute");
});

// Buttons opacity
/* opacity: 0.5;
$("#jp-play-hide1").click(function() {
	$("#sound1").css("visibility", "hidden");
});
$("#jp-play-show1").click(function() {
	$("#sound1").css("visibility", "visible");
}); */

$( "#jp-play-hide1" ).click(function() { $('#jp_wrapper_1').css("opacity", "0.5"); });
$( "#jp-play-show1" ).click(function() { $('#jp_wrapper_1').css("opacity", "1"); });
$( "#jp-play-hide2" ).click(function() { $('#jp_wrapper_2').css("opacity", "0.5"); });
$( "#jp-play-show2" ).click(function() { $('#jp_wrapper_2').css("opacity", "1"); });
$( "#jp-play-hide3" ).click(function() { $('#jp_wrapper_3').css("opacity", "0.5"); });
$( "#jp-play-show3" ).click(function() { $('#jp_wrapper_3').css("opacity", "1"); });
$( "#jp-play-hide4" ).click(function() { $('#jp_wrapper_4').css("opacity", "0.5"); });
$( "#jp-play-show4" ).click(function() { $('#jp_wrapper_4').css("opacity", "1"); });
$( "#jp-play-hide5" ).click(function() { $('#jp_wrapper_5').css("opacity", "0.5"); });
$( "#jp-play-show5" ).click(function() { $('#jp_wrapper_5').css("opacity", "1"); });
$( "#jp-play-hide6" ).click(function() { $('#jp_wrapper_6').css("opacity", "0.5"); });
$( "#jp-play-show6" ).click(function() { $('#jp_wrapper_6').css("opacity", "1"); });
$( "#jp-play-hide7" ).click(function() { $('#jp_wrapper_7').css("opacity", "0.5"); });
$( "#jp-play-show7" ).click(function() { $('#jp_wrapper_7').css("opacity", "1"); });
$( "#jp-play-hide8" ).click(function() { $('#jp_wrapper_8').css("opacity", "0.5"); });
$( "#jp-play-show8" ).click(function() { $('#jp_wrapper_8').css("opacity", "1"); });
$( "#jp-play-hide9" ).click(function() { $('#jp_wrapper_9').css("opacity", "0.5"); });
$( "#jp-play-show9" ).click(function() { $('#jp_wrapper_9').css("opacity", "1"); });
$( "#jp-play-hide10" ).click(function() { $('#jp_wrapper_10').css("opacity", "0.5"); });
$( "#jp-play-show10" ).click(function() { $('#jp_wrapper_10').css("opacity", "1"); });
$( "#jp-play-hide11" ).click(function() { $('#jp_wrapper_11').css("opacity", "0.5"); });
$( "#jp-play-show11" ).click(function() { $('#jp_wrapper_11').css("opacity", "1"); });
$( "#jp-play-hide12" ).click(function() { $('#jp_wrapper_12').css("opacity", "0.5"); });
$( "#jp-play-show12" ).click(function() { $('#jp_wrapper_12').css("opacity", "1"); });
$( "#jp-play-hide13" ).click(function() { $('#jp_wrapper_13').css("opacity", "0.5"); });
$( "#jp-play-show13" ).click(function() { $('#jp_wrapper_13').css("opacity", "1"); });
$( "#jp-play-hide14" ).click(function() { $('#jp_wrapper_14').css("opacity", "0.5"); });
$( "#jp-play-show14" ).click(function() { $('#jp_wrapper_14').css("opacity", "1"); });

