import SelectedKeywordsList from "./SelectedKeywordsList";
import SourceTimer from "./SourceTimer";
import WordCloud from "./WordCloud";
import YouTubePlayer from "./YouTubePlayer";
import { useState } from "react";

//const keywordList = KeywordList.getInstance();

function MainContent() {
  //const handleWordClick = (word: string) => {
  //  console.log(`Clicked on: ${word}`);
  //};

  //const keywordList = KeywordList.getInstance();

  const [wordCloud, setWordCloud] = useState<{ text: string; value: number }[]>(
    [
      { text: "Lion", value: 34 },
      { text: "Elephant", value: 52 },
      { text: "Tiger", value: 21 },
      { text: "Giraffe", value: 66 },
      { text: "Zebra", value: 48 },
      { text: "Panda", value: 15 },
      { text: "Kangaroo", value: 28 },
    ]
  );
  const [listGroup, setListGroup] = useState<{ text: string; value: number }[]>(
    []
  );

  const handleWordClick = (word: { text: string; value: number }) => {
    setWordCloud((prev) => prev.filter((w) => w !== word));
    setListGroup((prev) => [...prev, word]);
  };

  const handleItemRemove = (item: { text: string; value: number }) => {
    setListGroup((prev) => prev.filter((i) => i !== item));
    setWordCloud((prev) => [...prev, item]);
  };

  return (
    <div className="container-fluid text-center mt-3">
      <div className="row justify-content-md-center">
        <div className="col">
          <WordCloud
            words={wordCloud} //keywordList.getWordList()}
            handleWordClick={handleWordClick}
          />
        </div>
        <div className="col-7 bg-secondary rounded">
          <br />
          <YouTubePlayer />
          <SourceTimer />
        </div>
        <div className="col">
          <SelectedKeywordsList
            items={listGroup}
            onItemRemove={handleItemRemove}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
