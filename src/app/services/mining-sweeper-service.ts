import { Injectable } from '@angular/core';
import { Cell } from '../models/cell.model';

@Injectable({
  providedIn: 'root'
})
export class MiningSweeperService {

   gerarTabuleiro(rows: number, columns: number, mines: number): Cell[][] {
    const board: Cell[][] = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => ({
        revealed: false,
        hasMine: false,
        near: 0,
        marked: false
      }))
    );

    let remainingMines = mines;
    while (remainingMines > 0) {
      const i = Math.floor(Math.random() * rows);
      const j = Math.floor(Math.random() * columns);
      if (!board[i][j].hasMine) {
        board[i][j].hasMine = true;
        remainingMines--;
      }
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (!board[i][j].hasMine) {
          board[i][j].near = this.countNearMines(board, i, j);
        }
      }
    }

    return board;
  }

  private countNearMines(board: Cell[][], x: number, y: number): number {
    const direcoes = [-1, 0, 1];
    let count = 0;

    for (const dx of direcoes) {
      for (const dy of direcoes) {
        if (dx === 0 && dy === 0) continue;

        const i = x + dx;
        const j = y + dy;

        if (
          i >= 0 && i < board.length &&
          j >= 0 && j < board[0].length &&
          board[i][j].hasMine
        ) {
          count++;
        }
      }
    }

    return count;
  }
}

