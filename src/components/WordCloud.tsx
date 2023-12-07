import ReactWordcloud from "react-wordcloud";
import "../../scss/custom.scss";

interface WordCloudProps {
  words: { text: string; value: number }[];
  handleWordClick: (word: string) => void;
}

const WordCloud: React.FC<WordCloudProps> = ({ words, handleWordClick }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    innerHeight: 500,
    outerHeight: 500,
    rotations: 0, // Disable word rotation
    scale: "sqrt", // Scale words using values
    spiral: "rectangular", // Layout strategy for words
    fontFamily: "Arial", // Font family for the words
    fontSizes: [20, 80], // Range of font sizes
    fontWeight: "bold", // Font weight for the words
    padding: 3, // Padding around words
    transitionDuration: 1000, // Animation duration for word cloud changes
  };

  const wordCloudStyle = {
    height: "700px", // Set the desired height here
    width: "100%", // Set the width or adjust as needed
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const callbacks: any = {
    onWordClick: (word: string) => {
      handleWordClick(word);
    },
  };

  return (
    <div className="container-sm bg-secondary rounded" style={wordCloudStyle}>
      <ReactWordcloud words={words} options={options} callbacks={callbacks} />
    </div>
  );
};

export default WordCloud;
