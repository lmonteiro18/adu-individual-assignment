import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import classes from "../styles/instructions.module.scss";

export default function Homepage() {
  const router = useRouter();

  let currentIndex = -1;
  let previous_word_count;

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
  }, []);

  function insertText(sentence) {
    return sentence.split(" ").map((word, i) => {
      return <span key={i}>{word} </span>;
    });
  }

  async function handleKeydown(e) {
    const all_spans = document.querySelectorAll("span");
    all_spans.forEach((item) => {
      item.style.color = "black";
      item.style.fontWeight = 400;
    });
    if (e.keyCode === 37 && currentIndex >= 1) {
      currentIndex--;
    } else if (e.keyCode === 39 && currentIndex <= all_spans.length - 2) {
      currentIndex++;
    } else if (currentIndex > all_spans.length - 2) {
      currentIndex = -1;
      await router.push(`/card?step=1`);
    }
    if (currentIndex !== -1) {
      all_spans[currentIndex].style.color = "mediumslateblue";
      all_spans[currentIndex].style.fontWeight = 900;
    }
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.title} tabIndex="1">
        Instructions
      </h1>
      <div className={classes.figures_container}>
        <figure className={classes.figure}>
          <img
            src="images/arrows-01.png"
            alt="Arrow pointing left inside rounded square."
          />
          <figcaption>
            {insertText("Press Keyboard Left Arrow")}
            <br />
            {insertText("Goes to previous section")}
          </figcaption>
        </figure>
        <figure className={classes.figure}>
          <img
            src="images/arrows-02.png"
            alt="Arrow pointing right inside rounded square."
          />
          <figcaption>
            {insertText("Press Keyboard Right Arrow")}
            <br />
            {insertText("Goes to next section / Goes to next word")}
          </figcaption>
        </figure>
      </div>
    </main>
  );
}
