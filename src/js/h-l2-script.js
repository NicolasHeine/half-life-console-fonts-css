Array.prototype.forEach.call(document.getElementsByClassName("h-l2"), function(el){
	if(el.childNodes.length === 1){
		var text = el.textContent;
		var result = '<span class="h-l2__accessible">'+text+'</span>';
		var words = text.split(' ');
		for(word in words){
			result += '<span class="h-l2__word">';
			var letters = words[word].split('');
			for(letter in letters){
				if(letters[letter] === '"'){
					result += "<b class='h-l2:"+letters[letter]+"'>"+letters[letter]+"</b>";
				}else{
					result += '<b class="h-l2:'+letters[letter]+'">'+letters[letter]+'</b>';
				}
			}
			result += '</span>';
		}
		el.innerHTML = result;
	}
});
