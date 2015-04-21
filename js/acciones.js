// JavaScript Document
$(document).ready(function(e) {
// que esperemos a que el dispositivo este listo
//document.addEventListener("deviceready",function(){
	$('#btndatos').on('click',function(){
		//alert('hola');
		$('body').pagecontainer("change","#datos",		{transition:"flip"});
	}); //click btndatos
//cuando el dispositivo esta listo para usarce
//}); 

// JavaScript Document

// que esperemos a que el dispositivo este listo
//document.addEventListener("deviceready",function(){
	$('#btnresultado').on('click',function(){
		//alert('hola');
		$('body').pagecontainer("change","#resultado",{transition:"flip"});
		var imc;
		var peso=$('#txtpeso').val();
		var talla=$('#txttalla').val();
		imc = peso/(talla*talla);
		alert(peso);
		alert(talla);
		
	}); //click btndatos
//cuando el dispositivo esta listo para usarce
//}); 
});


