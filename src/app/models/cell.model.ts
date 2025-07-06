export interface Cell {
  revealed: boolean;
  hasMine: boolean;
  near: number;
  marked: boolean;
}