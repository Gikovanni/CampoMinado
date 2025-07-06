import { Component, OnInit } from '@angular/core';
import { MiningSweeperService } from '../../services/mining-sweeper-service';
import { Cell } from '../../models/cell.model';

@Component({
  selector: 'app-mining-sweeper',
  standalone: false,
  templateUrl: './mining-sweeper.html',
  styleUrl: './mining-sweeper.scss'
})
export class MiningSweeper implements OnInit{
  constructor (private mineSweeperService : MiningSweeperService) {}

  board: Cell[][] = [];

  ngOnInit(): void {
    this.genNewGame();
  }

  genNewGame() {
    this.board = this.mineSweeperService.gerarTabuleiro(10, 10, 10);
  }

    onClick(i: number, j: number): void {
    const cell = this.board[i][j];
    if (cell.revealed || cell.marked) return;

    cell.revealed = true;

    if (cell.hasMine) {
      alert('💥 Você clicou em uma mina! Fim de jogo.');
      this.revealAll();
      return;
    }

    if (cell.near === 0) {
      this.revealNear(i, j);
    }
  }

  onRightClick(i: number, j: number): void {
    const cell = this.board[i][j];
    if (cell.revealed) return;
    cell.marked = !cell.marked;
  }

  revealAll(): void {
    for (let row of this.board) {
      for (let cell of row) {
        cell.revealed = true;
      }
    }
  }

  revealNear(i: number, j: number): void {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        const ni = i + x;
        const nj = j + y;
        if (
          ni >= 0 && ni < this.board.length &&
          nj >= 0 && nj < this.board[0].length
        ) {
          const near = this.board[ni][nj];
          if (!near.revealed && !near.hasMine && !near.marked) {
            near.revealed = true;
            if (near.near === 0) {
              this.revealNear(ni, nj);
            }
          }
        }
      }
    }
  }
  
}
