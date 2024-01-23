import KeywordList from "../utils/KeywordList";
import SelectedKeywordsList from "./SelectedKeywordsList";
import SourceTimer from "./SourceTimer";
import WordCloud from "./WordCloud";
import YouTubePlayer from "./YouTubePlayer";
import { useEffect, useState } from "react";

function MainContent() {
  const keywordList = KeywordList.getInstance();

  useEffect(() => {
    console.log(listGroup);
  });

  const [listGroup, setListGroup] = useState<{ text: string; value: number }[]>(
    []
  );

  const handleWordCloudClick = (word: { text: string; value: number }) => {
    //setWordCloud((prev) => prev.filter((w) => w !== word));
    //listGroup.some((obj) => obj.text.includes(word.text));
    if (!listGroup.some((obj) => obj.text.includes(word.text))) {
      setListGroup((prev) => [...prev, word]);
      console.log(listGroup);
      console.log(listGroup.length);
      console.log(word.text);
    }
  };

  const handleListItemClick = (item: { text: string; value: number }) => {
    setListGroup((prev) => prev.filter((i) => i !== item));
    //setWordCloud((prev) => [...prev, item]);
  };

  return (
    <div className="container-fluid text-center mt-3">
      <div className="row justify-content-md-center">
        <div className="col">
          <WordCloud
            words={keywordList.getWordList()}
            handleWordClick={handleWordCloudClick}
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
            onItemRemove={handleListItemClick}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
