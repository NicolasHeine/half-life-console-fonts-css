var text, result, words, letters;

Array.prototype.forEach.call(document.getElementsByClassName('h-l1'), function(el){
	if(el.childNodes.length === 1){
		text = el.textContent;
		result = '<span class="h-l1__accessible">'+text+'</span>';
		words = text.split(' ');
		for(word in words){
			result += '<span class="h-l1__word">';
			letters = words[word].split('');
			for(letter in letters){
				if(letters[letter] === '"'){
					result += "<b class='h-l1:"+letters[letter]+"'></b>";
				}else{
					result += '<b class="h-l1:'+letters[letter]+'"></b>';
				}
			}
			result += '</span>';
		}
		if(el.innerHTML = result){
			console.info('Text converted with success to Half-Life Console Font 1');
		}else{
			console.error('Error during convertion to Half-Life Console Font 1');
		}
	}else{
		console.error('Error during convertion to Half-Life Console Font 1 - There is no childNodes');
	}
});

function text_to_h_l1(el){
	if(el instanceof Element){
		text = el.textContent;
		result = '<span class="h-l1__accessible">'+text+'</span>';
		words = text.split(' ');
		for(word in words){
			result += '<span class="h-l1__word">';
			letters = words[word].split('');
			for(letter in letters){
				if(letters[letter] === '"'){
					result += "<b class='h-l1:"+letters[letter]+"'></b>";
				}else{
					result += '<b class="h-l1:'+letters[letter]+'"></b>';
				}
			}
			result += '</span>';
		}
		if(el.innerHTML = result){
			el.classList.add('h-l1');
			console.info('Text converted with success to Half-Life Console Font 1');
		}else{
			console.error('Error during convertion to Half-Life Console Font 1');
		}
	}else{
		console.error('Error during convertion to Half-Life Console Font 1 - This is not a HTML Element');
	}
}
