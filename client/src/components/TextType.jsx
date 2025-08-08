import React, { useEffect, useState } from "react";

const TextType = ({ text = [], typingSpeed = 100, pauseDuration = 1000, showCursor = true, cursorCharacter = "|", loop = true }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentText = text[index];

    if (!isDeleting) {
      // Typing logic
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting logic
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % text.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, text, typingSpeed, pauseDuration]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="ml-1 animate-pulse">{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
