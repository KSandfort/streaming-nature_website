import "../../scss/custom.scss";

import { useState, useEffect } from "react";

function SubtitleFrame() {
  const [displayedText, setDisplayedText] = useState("");
  const displayDelayMS = 400;
  const text =
    "This is a subtitle demonstration and will be replaced with actual subtitles!";

  function getSubstringUpToIthWord(inputString: string, i: number): string {
    // Todo: Return not just the substring but also the current word length to adjust the timer accordingly
    const words = inputString.split(/\s+/);
    if (i >= 0 && i < words.length) {
      const substring = words.slice(0, i + 1).join(" ");
      return substring;
    } else {
      return text;
    }
  }

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(getSubstringUpToIthWord(text, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, displayDelayMS);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <div>
      <p className="display-6 text-light">{displayedText}</p>
    </div>
  );
}

export default SubtitleFrame;
