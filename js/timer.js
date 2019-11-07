//timer script
(function(){var days=$('.js-days'),hours=$('.js-hours'),minutes=$('.js-minutes'),seconds=$('.js-seconds');$(document).on('click','.js-download-button',function(){$('html, body').animate({scrollTop:$('.form-wrapper').offset().top},700);});function addZero(num){return('0'+num).slice(-2);}
function countDown(){var t=new Date();t.setDate(t.getDate()+1);var tl=new Date(t.getFullYear()+'/'+(t.getMonth()+1)+'/'+t.getDate()+' 00:00:00');var today=(new Date()).getTime()+60*1000;var timer='';var hour=Math.floor(((tl-today)%(24*60*60*1000))/(60*60*1000));var min=Math.floor(((tl-today)%(24*60*60*1000))/(60*1000))%60;var sec=Math.floor(((tl-today)%(24*60*60*1000))/1000)%60%60;days.html(addZero(3));hours.html(addZero(hour));minutes.html(addZero(min));seconds.html(addZero(sec));}
setInterval(function(){countDown();},10);})();
// download btn animation handler
$(document).ready(function(){
	$('.intro__btn').on('click', function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#sendForm").offset().top
		}, 1000);
	})
})