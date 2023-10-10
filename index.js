start_game=false;
choice = prompt("Хотите ли вы начать игру: да/нет")
var table = $(".table tr")
function report(rowindex, colindex) {
	console.log("You won starting at this row,col");
	console.log(rowindex);
	console.log(colindex);
}
function setSymbol(rowindex, colindex, symbol) {
	return table.eq(rowindex).find("td").eq(colindex).text(symbol);
}
function getSymbol(rowindex, colindex) {
	return table.eq(rowindex).find("td").eq(colindex).text();
}

	function symbolMatchCheck(one,two,three){
		return (one===two && one===three  && one !== '' && one !== undefined);
		}
	function horizontalWinCheck() {
		for (var row = 0; row < 3; row++) {
			var col=0;
			//for (var col = 0; col < 3; col++) {
			if (symbolMatchCheck(getSymbol(row,col), getSymbol(row,col+1) ,getSymbol(row,col+2))) {
			console.log('horiz');
			report(row,col);
			return true;
			}else {
			continue;
			}
			//}
			}
	}
	function verticalWinCheck() {
			for (var col = 0; col < 3; col++) {
				var row = 0;
				//for (var row = 0; row < 3; row++) {
			if (symbolMatchCheck(getSymbol(row,col), getSymbol(row+1,col) ,getSymbol(row+2,col))) {
			console.log('vertical');
			report(row,col);
			return true;
			}else {
			continue;
			}
			//}
			}
	}
	function diagonalWinCheck() {
		for (var col = 0; col < 3; col++) {
			//if(col==2) continue;
			var row=0;
			for (var row = 0; row < 3; row++) {
			if (symbolMatchCheck(getSymbol(row,col), getSymbol(row+1,col+1) ,getSymbol(row+2,col+2))) {
			console.log('diag');
			report(row,col);
			return true;
			}else if (symbolMatchCheck(getSymbol(row,col), getSymbol(row-1,col+1) ,getSymbol(row-2,col+2))) {
			console.log('diag');
			report(row,col);
			return true;
			}else {
			continue;
			}
			}
			}
}
function setdefault() {
	start_game=true;
	player_1=prompt("Введите имя первого игрока:")
	player_1_symbol='X'
	player_2=prompt("Введите имя второго игрока:")
	player_2_symbol='O'
	current_player=1
	current_symbol=player_1_symbol
	current_name=player_1
	$('h3').text(current_name+": ваш ход, выберите ячейку");
}
if(choice=='да'){
	setdefault()
	$('.table td').on('click',function() {
		if(start_game!=false){
		let rowindex = $(this).closest('tr').index();
  	let colindex = $(this).index();
		setSymbol(rowindex,colindex,current_symbol);}
		
		
		if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
			$('h3').text(current_name+" Вы выиграли, нажмите кнопку очистить для новой игры");

				start_game=false;
			
			}
			current_player = current_player * -1 ;
			if(start_game==true){
		if (current_player === 1) {
			current_name = player_1;
			$('h3').text(current_name+": ваш ход, выберите ячейку");
			current_symbol = player_1_symbol;
			}else {
			current_name = player_2
			$('h3').text(current_name+": ваш ход, выберите ячейку");
			current_symbol = player_2_symbol;
			}
		}
		})		
		$('button').on("click", function () {
			for (var row = 0; row < 3; row++) {
				for (var col = 0; col < 3; col++) {
					setSymbol(row,col,'');
				}}
				setdefault()
		})

}
	
else{
	location.reload(true);
}