// components/GameBoard.jsx
import { useState, useEffect } from "react";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import { fetchCountryData, resetUsedCountries } from "./CountryApi";

export default function GameBoard() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [round, setRound] = useState(1);

  // Utility function to shuffle an array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Fetch new country data for a round
  const loadNewRound = async () => {
    setLoading(true);
    const countries = await fetchCountryData(8);
    setCards(countries);
    setClickedCards(new Set());
    setLoading(false);
  };

  // Reset game completely
  const resetGame = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setRound(1);
    resetUsedCountries();
    loadNewRound();
  };

  // Load first round when component mounts
  useEffect(() => {
    loadNewRound();

    // Clean up function
    return () => {
      resetUsedCountries();
    };
  }, []);

  // Handle card selection
  const handleCardClick = (cardId) => {
    // Check if this card has already been clicked in this round
    if (clickedCards.has(cardId)) {
      // Game over - start new game
      resetGame();
    } else {
      // Add card to clicked cards
      const newClickedCards = new Set(clickedCards);
      newClickedCards.add(cardId);
      setClickedCards(newClickedCards);

      // Increment score
      setScore((prevScore) => prevScore + 1);

      // Shuffle the cards after each click
      setCards((prevCards) => shuffleArray(prevCards));

      // Check if round is complete (all cards clicked)
      if (newClickedCards.size === cards.length) {
        // Move to next round with new cards
        setRound((prevRound) => prevRound + 1);
        loadNewRound();
      }
    }
  };

  return (
    <div className="game-board">
      <ScoreBoard score={score} bestScore={bestScore} round={round} />

      {loading ? (
        <p>Loading countries...</p>
      ) : (
        <div className="cards-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              country={card.name}
              flagUrl={card.flagUrl}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
