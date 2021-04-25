$(document).ready(function() {
	const pageWidth = document.documentElement.scrollWidth
	const pageHeight = document.documentElement.scrollHeight
	$("body").css("height", pageHeight)
	$("body").css("width", pageWidth)
	$(".wrapper").css("height", pageHeight)
	$(".wrapper").css("width", pageWidth)
	let txt = [
		'You can contact me if you need a website and you can look in my portfolio <br> And I can make a not bad design as you see',
		'I can help you, I have 2 years of experience working with such sites <br> But my portfolio haven\'t got a real websites there are examples of layout quality',
		'My Telegram: <a href="https://t.me/zen_fs" style="text-decoration: none;color: black;">Zen_fs</a> <br> My Skype: live:egor891712 <br> My Gmail: pastuhov18912@gmail.com'
	]
	let title = [
		'<br>Hi, I am a Frontend developer',
		'<br>If you need a business card website or a landing page',
		'<br>Portfolio',
		'<br>Contacts'
	]

	$("#button-home").click(function() {
		$("#title").html(title[0])
		$("#text").html(txt[0])
		$("#button-home").css("background-color","rgba(255, 255, 255, 0.56)","color","black")
		$("#button-about_me").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-portfolio").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-contact").css("background-color","rgba(255, 255, 255, 0.26)")
	})
	$("#button-home").mouseover(function() {
		$("#button-home").css("color","black")
	})
	$("#button-home").mouseleave(function() {
		$("#button-home").css("color","#413E3C")
	})
	$("#button-home").trigger("click")

	$("#button-about_me").click(function() {
		$("#title").html(title[1])
		$("#text").html(txt[1])
		$("#button-about_me").css("background-color","rgba(255, 255, 255, 0.56)")
		$("#button-home").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-portfolio").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-contact").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-about_me").css("color","black")
	})
	$("#button-about_me").mouseover(function() {
		$("#button-about_me").css("color","black")
	})
	$("#button-about_me").mouseleave(function() {
		$("#button-about_me").css("color","#413E3C")
	})

	$("#button-portfolio").click(function() {
		$("#title").text(title[2])
		$("#text").html("")//см шаблон!!
		$("#button-portfolio").css("background-color","rgba(255, 255, 255, 0.56)")
		$("#button-home").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-about_me").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-contact").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-portfolio").css("color","black")
	})
	$("#button-portfolio").mouseover(function() {
		$("#button-portfolio").css("color","black")
	})
	$("#button-portfolio").mouseleave(function() {
		$("#button-portfolio").css("color","#413E3C")
	})

	$("#button-contact").click(function() {
		$("#title").html(title[3])
		$("#text").html(txt[2])
		$("#button-contact").css("background-color","rgba(255, 255, 255, 0.56)")
		$("#button-home").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-about_me").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-portfolio").css("background-color","rgba(255, 255, 255, 0.26)")
		$("#button-contact").css("color","black")
	})
	$("#button-contact").mouseover(function() {
		$("#button-contact").css("color","black")
	})
	$("#button-contact").mouseleave(function() {
		$("#button-contact").css("color","#413E3C")
	})

})