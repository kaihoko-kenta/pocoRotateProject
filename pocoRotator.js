function rotate(key1,value1,value2){
	$('.pic').attr(key1,value1);
	$('.pic').click(function(){
		if($(this).attr('class')=='pic'){
			$(this).attr('class','pic active');
				setTimeout(function(){
					$('.pic').attr(key1,value2);
				},
			420);
			return false;
		}else{
			$(this).attr('class','pic');
				setTimeout(function(){
					$('.pic').attr(key1,value1);
				},
			420);
			return true;
		}
	});
}

function isOpen(){
	if($(".pic").attr("class")=="pic active"){
		return false;
	}else{
		return true;
	}
}

