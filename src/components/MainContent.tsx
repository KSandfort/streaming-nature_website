import SelectedKeywordsList from "./SelectedKeywordsList";
import WordCloud from "./WordCloud";
import { useEffect, useState } from "react";
import axios from "axios";
import StreamFrame from "./StreamFrame";

function MainContent() {
  //const keywordList = KeywordList.getInstance();

  interface DataItem {
    text: string;
    value: number;
  }

  const [dataList, setDataList] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/v1/word-cloud");
        const responseData: DataItem[] = response.data;

        setDataList(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      console.log(word.text);
      axios
        .post("http://127.0.0.1/v1/word_cloud/votes", word)
        .then((response) => {
          console.log("Response:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleListItemClick = (item: { text: string; value: number }) => {
    setListGroup((prev) => prev.filter((i) => i !== item));
  };

  return (
    <div className="container-fluid text-center mt-3">
      <div className="row justify-content-md-center">
        <div className="col">
          <WordCloud words={dataList} handleWordClick={handleWordCloudClick} />
        </div>
        <div className="col-7 bg-secondary rounded">
          <br />
          <StreamFrame />
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
