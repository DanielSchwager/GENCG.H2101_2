let lines;
let source;
let words;
let dictionary = {};
let p;

function setup() {
  createCanvas(720, 720);
  // background(150);

  let button = createButton("Generate");
  button.mousePressed(generateRandomText);
  button.position(280, 500);
  // button.dragOver();
  // let button2 = createButton("delete");
  // button2.mousePressed(p.remove());
  // button2.position(280, 550);
}

function mouseHover() {}

function generateRandomText() {
  lines = loadStrings("xaver.txt", () => {
    // convert string array to simple string
    lines.forEach((line) => {
      source += line;
      source += " ";
    });

    // create array containing all words
    words = splitTokens(source, [" "]);

    // for every word of our text
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let nextWord;
      if (i + 1 < words.length) {
        nextWord = words[i + 1];
      }

      // create an attribute in our dictionary for each word
      if (dictionary[word] === undefined) {
        dictionary[word] = [];
      }

      // add the next word to the list of possible following words
      dictionary[word].push(nextWord);
    }

    // random text generation
    let generatedText = "";
    let currentWord = words[Math.floor(Math.random() * words.length)];
    generatedText += currentWord;
    generatedText += " ";
    for (let i = 0; i < 70; i++) {
      currentWord =
        dictionary[currentWord][
          Math.floor(Math.random() * dictionary[currentWord].length)
        ];
      generatedText += currentWord;
      generatedText += " ";
    }

    // display text
    if (p != undefined) {
      p.remove();
    }
    p = createP(generatedText);
    p.position(10, 10);
  });
}
