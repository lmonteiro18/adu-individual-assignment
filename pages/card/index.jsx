import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import classes from "../../styles/card.module.scss";

export default function CardPage() {
  const router = useRouter();

  let currentIndex = -1;
  let step;
  let previous_word_count;

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    step = Number(router.query.step);
    console.log(step);
  }, [router.query.step]);

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
    if (e.keyCode === 37) {
      if (currentIndex >= 1) {
        currentIndex--;
      } else {
        //console.log(previous_word_count);
        currentIndex = previous_word_count;
        if (step < 2) {
          await router.push("/");
        } else {
          step = step - 1;
          await router.push(`/card?step=${step}`);
        }
      }
    } else if (e.keyCode === 39) {
      if (currentIndex <= all_spans.length - 2) {
        currentIndex++;
      } else {
        if (step < 10 && currentIndex !== all_spans.length) {
          previous_word_count = all_spans.length;
          currentIndex = -1;
          step = step + 1;
          await router.push(`/card?step=${step}`);
        } else {
          step = 10;
        }
      }
    }
    if (currentIndex >= 0 && currentIndex < all_spans.length) {
      all_spans[currentIndex].style.color = "mediumslateblue";
      all_spans[currentIndex].style.fontWeight = 900;
    }
  }

  if (router.query.step === "1") {
    return (
      <main className={classes.card_main}>
        <h1 className={classes.title}>
          {insertText("Accessibility Cards by Vivian Motti")}
        </h1>
      </main>
    );
  } else if (router.query.step === "2") {
    return (
      <main className={classes.card_main}>
        <h1 className={classes.title}>
          {insertText("Card 16")}
          <br />
          {insertText("Teenager who is deaf and blind")}
        </h1>
      </main>
    );
  } else if (router.query.step === "3") {
    return (
      <main className={classes.card_main}>
        <figure className={classes.figure}>
          <img
            src="/images/imagem_carta_editada_v2.png"
            alt="Girl sitting in front of computer (keyboard and bright monitor)"
          />
          <figcaption>
            {insertText(
              "Girl sitting in front of computer (keyboard and bright monitor on a table)"
            )}
          </figcaption>
        </figure>
      </main>
    );
  } else if (router.query.step === "4") {
    return (
      <main className={classes.card_main}>
        <p className={classes.text}>
          {insertText(
            "Kaseem is a teenager who is deaf and legally blind. She sees only small portions of a screen and read text when it is large."
          )}
        </p>
      </main>
    );
  } else if (router.query.step === "5") {
    return (
      <main className={classes.card_main}>
        <p className={classes.text}>
          {insertText(
            "She uses: screen magnification software to enlarge the text on websites; screen reader software that displays text on a refreshable Braille device; large computer screen with high resolution and high luminosity (brightness)."
          )}
        </p>
      </main>
    );
  } else if (router.query.step === "6") {
    return (
      <main className={classes.card_main}>
        <p className={classes.text}>
          {insertText(
            "Kaseem’s portable electronic Braille notetaker includes e-mail, web browsing, and note-taking functionality. Her smartphone includes GPS which helps her navigate around the city."
          )}
        </p>
      </main>
    );
  } else if (router.query.step === "7") {
    return (
      <main className={classes.card_main}>
        <p className={classes.text}>
          {insertText(
            "She uses the public transportation website to plan her trips and view bus schedules, but encounters problems when she enlarges the text and it does not reflow or wrap properly, making the maps difficult to use."
          )}
        </p>
      </main>
    );
  } else if (router.query.step === "8") {
    return (
      <main className={classes.card_main}>
        <p className={classes.text}>
          {insertText(
            "She has a better experience viewing the train schedules that are properly marked up and allow text reflow. Kaseem sent a message to the web team informing them of the problems she noticed in their site and described how that site would work better for her."
          )}
        </p>
      </main>
    );
  } else if (router.query.step === "9") {
    return (
      <main className={classes.card_main}>
        <p className={classes.text}>
          {insertText(
            "She received an email message thanking her for the information and informing her that the web team will improve the accessibility of their website."
          )}
        </p>
      </main>
    );
  } else if (router.query.step === "10") {
    return (
      <main className={classes.card_main}>
        <p className={classes.text}>
          {insertText("Chegaste ao fim desta carta!")}
        </p>
      </main>
    );
  }
}
