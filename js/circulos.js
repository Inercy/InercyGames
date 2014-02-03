// Dibuja los circulos de manera que sean vector graphics y puedan verse bien en cualquier resolucion de pantalla
(function(){
	var paper = Raphael(-20,90,950,950);
	
		var circuloMed,circuloCh,circuloP,kinect,games,demo;
		var color = '#fff';
				
	var circuloMayor = paper.circle(470,470,421).attr('stroke',color).animate({'stroke-width':80},1800,"bounce",function(){
		circuloMed = paper.circle(470,470,300).attr('stroke',color).animate({'stroke-width':60},1300,"elastic",function(){
			circuloCh = paper.circle(470,470,140).attr('stroke',color).animate({'stroke-width':30},800,"elastic",function(){
				circuloP = paper.circle(470,470,15).attr('stroke',color).animate({'stroke-width':30},500,"elastic");
			});
		});
	});		
	
})();
