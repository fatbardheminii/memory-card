import Card from "./Card";
import ScoreBoard from "./ScoreBoard";

export default function GameBoard() {
  return (
    <div className="game-board">
      <ScoreBoard></ScoreBoard>
      <div className="cards-container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
