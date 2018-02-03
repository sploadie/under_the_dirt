"use strict";

const directionIncrement = {
	up: (pos, side) => pos - side,
	down: (pos, side) => pos + side,
	left: (pos, side) => pos - 1,
	right: (pos, side) => pos + 1,
}

function doMove(boardState, move) {

	const gridSize = Math.sqrt(boardState.length);
	if (gridSize !== Math.floor(gridSize)) {
		console.error(`Board has size ${boardState.length}??`)
	}

	if (move.pos >= boardState.length) {
		console.error("[UNKNOWN ACTION]");
		return boardState;
	}

	const newBoard = boardState.slice();
	let pos = move.pos;

	const eats = {
		w: 'f',
		g: 'w',
		f: 'g',
	}

	for (let i = 1; i < gridSize; i++) {
		pos = directionIncrement[move.direction](pos, gridSize);
		console.log('Pos:', pos);
		if (newBoard[pos] != eats[move.element]) {
			break;
		}
		newBoard[pos] = move.element;
	}

	return newBoard;
}

// const boardState = [
// 	'w', 'w', 'w',
// 	'w', 'w', 'g',
// 	'w', 'f', 'f'
// ];
//
// const move = {
// 	element: 'w',
// 	pos: 1,
// 	direction: 'down'
// }
//
// console.log(doMove(boardState, move))

export default doMove
