/* =========================================================
   AKSHAR — INTERACTIVE E-BOOK ENGINE
========================================================= */

"use strict";


/* =========================================================
   STORY DATA
========================================================= */

const pages = [

  {
    id: 1,
    title: "रहस्यमयी डिब्बा",
    image: "assets/images/page1.webp",

    text:
      "एक सुबह पुद्देश की जिंदगी में कुछ ऐसा हुआ, " +
      "जिसने एक रहस्यमयी सफर की शुरुआत कर दी...",

    character: "पुद्देश",

    dialogue:
      "आज कुछ अजीब होने वाला है...",

    voice: "",

    music: "",
    sfx: []
  },


  {
    id: 2,
    title: "एक आलसी सुबह",
    image: "assets/images/page2.webp",

    text:
      "सुबह हो चुकी थी, लेकिन पुद्देश अभी भी अपने कमरे में " +
      "आराम से सो रहा था।",

    character: "पुद्देश",

    dialogue:
      "आज मैं जल्दी उठूँगा! ...कल से पक्का!",

    voice: "",

    music: "",
    sfx: []
  },


  {
    id: 3,
    title: "अजीब आवाज़",
    image: "assets/images/page3.webp",

    text:
      "अचानक कमरे के एक कोने से एक अजीब सी आवाज़ सुनाई दी। " +
      "पुद्देश ने चारों तरफ देखा।",

    character: "पुद्देश",

    dialogue:
      "ये आवाज़ किसकी थी?",

    voice: "",

    music: "",
    sfx: []
  },


  {
    id: 4,
    title: "मिस्ट्री बॉक्स",
    image: "assets/images/page4.webp",

    text:
      "पुद्देश की नजर कमरे में रखे एक रहस्यमयी डिब्बे पर पड़ी। " +
      "उस पर हल्की सी चमक दिखाई दे रही थी।",

    character: "पुद्देश",

    dialogue:
      "ये मेरे कमरे में पहले से था या मैं ही नहीं देख पाया?",

    voice: "",

    music: "",
    sfx: []
  },


  {
    id: 5,
    title: "डिब्बा खुलेगा?",
    image: "assets/images/page5.webp",

    text:
      "पुद्देश धीरे-धीरे डिब्बे के पास गया। " +
      "उसने डरते हुए अपना हाथ आगे बढ़ाया।",

    character: "पुद्देश",

    dialogue:
      "अगर अंदर भूत निकला तो? ...पहले selfie ले लेता हूँ!",

    voice: "",

    music: "",
    sfx: []
  },


  {
    id: 6,
    title: "रहस्यमयी चाबी",
    image: "assets/images/page6.webp",

    text:
      "डिब्बा खुला तो उसके अंदर एक चमकती हुई चाबी थी। " +
      "पुद्देश हैरान होकर उसे देखने लगा।",

    character: "पुद्देश",

    dialogue:
      "चाबी तो मिल गई... लेकिन ताला कहाँ है?",

    voice: "",

    music: "",
    sfx: []
  },


  {
    id: 7,
    title: "पहेली",
    image: "assets/images/page7.webp",

    text:
      "चाबी पर अचानक कुछ शब्द चमकने लगे। " +
      "पुद्देश ने उन्हें ध्यान से पढ़ा।",

    character: "पुद्देश",

    dialogue:
      "जिस दरवाज़े को तुम खोज रहे हो, वह तुम्हारे सामने है।",

    voice: "",

    music: "",
    sfx: []
  },


  {
    id: 8,
    title: "दूसरी दुनिया",
    image: "assets/images/page8.webp",

    text:
      "दरवाज़ा खुलते ही सामने एक अद्भुत दुनिया दिखाई दी। " +
      "पेड़, रोशनी, पहाड़ और एक चमकती नदी उसका इंतजार कर रहे थे।",

    character: "पुद्देश",

    dialogue:
      "वाह! ये जगह तो बिल्कुल अलग दुनिया जैसी है!",

    voice: "",

    music: "",
    sfx: []
  },


  {
    id: 9,
    title: "सफर की तैयारी",
    image: "assets/images/page9.webp",

    text:
      "पुद्देश ने आगे बढ़ने की तैयारी की। तभी उसे याद आया कि " +
      "उसे घरवालों को बताना भी जरूरी है।",

    character: "पुद्देश",

    dialogue:
      "चलो... लेकिन पहले घरवालों को बताना पड़ेगा! अरे... फोन तो कमरे में रह गया!",

    voice: "",

    music: "",
    sfx: []
  },


  {
    id: 10,
    title: "असली रहस्य",
    image: "assets/images/page10.webp",

    text:
      "सामने एक विशाल रहस्यमयी दरवाज़ा था। " +
      "पुद्देश ने चाबी को कसकर पकड़ लिया।",

    character: "पुद्देश",

    dialogue:
      "असली रहस्य अब शुरू होता है...",

    voice: "",

    music: "",
    sfx: []
  }

];


/* =========================================================
   STATE
========================================================= */

let currentPageIndex = 0;

let audioEnabled = true;

let autoStory = false;

let autoStoryTimer = null;

let touchStartX = 0;

let touchEndX = 0;


/* =========================================================
   ELEMENTS
========================================================= */

const pageImage =
  document.getElementById("pageImage");

const storyTitle =
  document.getElementById("storyTitle");

const pageTitle =
  document.getElementById("pageTitle");

const pageText =
  document.getElementById("pageText");

const characterName =
  document.getElementById("characterName");

const dialogueText =
  document.getElementById("dialogueText");

const pageCounter =
  document.getElementById("pageCounter");

const currentPage =
  document.getElementById("currentPage");

const totalPages =
  document.getElementById("totalPages");

const previousBtn =
  document.getElementById("previousBtn");

const nextBtn =
  document.getElementById("nextBtn");

const pageDots =
  document.getElementById("pageDots");

const bookStage =
  document.getElementById("bookStage");

const audioStatus =
  document.getElementById("audioStatus");

const audioToggle =
  document.getElementById("audioToggle");

const playAudioBtn =
  document.getElementById("playAudioBtn");

const pauseAudioBtn =
  document.getElementById("pauseAudioBtn");

const stopAudioBtn =
  document.getElementById("stopAudioBtn");

const autoStoryBtn =
  document.getElementById("autoStoryBtn");

const voiceVolume =
  document.getElementById("voiceVolume");

const musicVolume =
  document.getElementById("musicVolume");

const voiceAudio =
  document.getElementById("voiceAudio");

const musicAudio =
  document.getElementById("musicAudio");

const sfxAudio =
  document.getElementById("sfxAudio");


/* =========================================================
   INITIALIZE
========================================================= */

function initializeBook() {

  if (!pages.length) {
    return;
  }

  totalPages.textContent =
    pages.length;

  createPageDots();

  showPage(0);

}


/* =========================================================
   CREATE PAGE DOTS
========================================================= */

function createPageDots() {

  pageDots.innerHTML = "";

  pages.forEach((page, index) => {

    const dot =
      document.createElement("button");

    dot.type = "button";

    dot.className = "page-dot";

    dot.setAttribute(
      "aria-label",
      "पेज " + (index + 1)
    );

    dot.addEventListener(
      "click",
      () => {
        showPage(index);
      }
    );

    pageDots.appendChild(dot);

  });

}


/* =========================================================
   SHOW PAGE
========================================================= */

function showPage(index) {

  if (
    index < 0 ||
    index >= pages.length
  ) {
    return;
  }


  stopAllAudio();

  clearTimeout(autoStoryTimer);


  currentPageIndex = index;


  const page =
    pages[index];


  /* Page transition */

  bookStage.classList.add(
    "page-changing"
  );


  setTimeout(() => {

    pageImage.src =
      page.image;

    pageImage.alt =
      page.title;


    pageTitle.textContent =
      page.title;


    pageText.textContent =
      page.text;


    characterName.textContent =
      page.character;


    dialogueText.textContent =
      page.dialogue;


    currentPage.textContent =
      index + 1;


    pageCounter.textContent =
      "पेज " +
      (index + 1) +
      " / " +
      pages.length;


    updatePageDots();

    updateButtons();

    loadPageAudio(page);


    bookStage.classList.remove(
      "page-changing"
    );


  }, 180);

}


/* =========================================================
   PAGE DOT UPDATE
========================================================= */

function updatePageDots() {

  const dots =
    pageDots.querySelectorAll(
      ".page-dot"
    );

  dots.forEach(
    (dot, index) => {

      dot.classList.toggle(
        "active",
        index === currentPageIndex
      );

    }
  );

}


/* =========================================================
   BUTTON STATE
========================================================= */

function updateButtons() {

  previousBtn.disabled =
    currentPageIndex === 0;

  nextBtn.disabled =
    currentPageIndex ===
    pages.length - 1;

}


/* =========================================================
   NEXT PAGE
========================================================= */

function nextPage() {

  if (
    currentPageIndex <
    pages.length - 1
  ) {

    showPage(
      currentPageIndex + 1
    );

  } else {

    stopAutoStory();

    audioStatus.textContent =
      "कहानी समाप्त हो गई";

  }

}


/* =========================================================
   PREVIOUS PAGE
========================================================= */

function previousPage() {

  if (
    currentPageIndex > 0
  ) {

    showPage(
      currentPageIndex - 1
    );

  }

}


/* =========================================================
   BUTTON EVENTS
========================================================= */

nextBtn.addEventListener(
  "click",
  nextPage
);

previousBtn.addEventListener(
  "click",
  previousPage
);


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "ArrowRight"
    ) {

      nextPage();

    }


    if (
      event.key === "ArrowLeft"
    ) {

      previousPage();

    }

  }
);


/* =========================================================
   TOUCH / SWIPE
========================================================= */

bookStage.addEventListener(
  "touchstart",
  event => {

    touchStartX =
      event.changedTouches[0].screenX;

  },
  {
    passive: true
  }
);


bookStage.addEventListener(
  "touchend",
  event => {

    touchEndX =
      event.changedTouches[0].screenX;

    handleSwipe();

  },
  {
    passive: true
  }
);


function handleSwipe() {

  const difference =
    touchEndX -
    touchStartX;


  const minimumSwipe =
    50;


  if (
    Math.abs(difference) <
    minimumSwipe
  ) {
    return;
  }


  if (difference < 0) {

    nextPage();

  } else {

    previousPage();

  }

}


/* =========================================================
   AUDIO — LOAD PAGE
========================================================= */

function loadPageAudio(page) {

  if (!audioEnabled) {
    return;
  }


  if (page.music) {

    musicAudio.src =
      page.music;

    musicAudio.loop =
      true;

    musicAudio.volume =
      Number(
        musicVolume.value
      );

  }


  if (page.voice) {

    voiceAudio.src =
      page.voice;

    voiceAudio.volume =
      Number(
        voiceVolume.value
      );

  }


  audioStatus.textContent =
    "ऑडियो तैयार है";

}


/* =========================================================
   PLAY AUDIO
========================================================= */

function playCurrentAudio() {

  if (!audioEnabled) {

    audioStatus.textContent =
      "ऑडियो बंद है";

    return;

  }


  const page =
    pages[currentPageIndex];


  let playedSomething =
    false;


  /* Voice */

  if (page.voice) {

    playedSomething =
      true;


    voiceAudio.volume =
      Number(
        voiceVolume.value
      );


    voiceAudio
      .play()
      .then(() => {

        audioStatus.textContent =
          "🎙️ आवाज़ चल रही है";

      })
      .catch(() => {

        audioStatus.textContent =
          "ऑडियो चलाने के लिए Play दबाएँ";

      });

  }


  /* Music */

  if (page.music) {

    playedSomething =
      true;


    musicAudio.volume =
      Number(
        musicVolume.value
      );


    musicAudio
      .play()
      .catch(() => {});

  }


  /*
    फिलहाल page में actual audio files
    नहीं हैं।

    इसलिए fake beep/buzz नहीं बजाया जाएगा।
  */

  if (!playedSomething) {

    audioStatus.textContent =
      "इस पेज की ऑडियो अभी उपलब्ध नहीं है";

  }

}


/* =========================================================
   PAUSE AUDIO
========================================================= */

function pauseAllAudio() {

  voiceAudio.pause();

  musicAudio.pause();

  sfxAudio.pause();

  audioStatus.textContent =
    "ऑडियो रुका हुआ है";

}


/* =========================================================
   STOP AUDIO
========================================================= */

function stopAllAudio() {

  voiceAudio.pause();

  musicAudio.pause();

  sfxAudio.pause();


  voiceAudio.currentTime =
    0;

  musicAudio.currentTime =
    0;

  sfxAudio.currentTime =
    0;

}


/* =========================================================
   PLAY BUTTON
========================================================= */

playAudioBtn.addEventListener(
  "click",
  () => {

    playCurrentAudio();

  }
);


/* =========================================================
   PAUSE BUTTON
========================================================= */

pauseAudioBtn.addEventListener(
  "click",
  () => {

    pauseAllAudio();

  }
);


/* =========================================================
   STOP BUTTON
========================================================= */

stopAudioBtn.addEventListener(
  "click",
  () => {

    stopAllAudio();

    audioStatus.textContent =
      "ऑडियो बंद है";

  }
);


/* =========================================================
   AUDIO TOGGLE
========================================================= */

audioToggle.addEventListener(
  "click",
  () => {

    audioEnabled =
      !audioEnabled;


    if (!audioEnabled) {

      stopAllAudio();

      audioToggle.textContent =
        "🔇";

      audioStatus.textContent =
        "ऑडियो बंद है";

    } else {

      audioToggle.textContent =
        "🔊";

      audioStatus.textContent =
        "ऑडियो चालू है";

    }

  }
);


/* =========================================================
   VOICE VOLUME
========================================================= */

voiceVolume.addEventListener(
  "input",
  () => {

    voiceAudio.volume =
      Number(
        voiceVolume.value
      );

  }
);


/* =========================================================
   MUSIC VOLUME
========================================================= */

musicVolume.addEventListener(
  "input",
  () => {

    musicAudio.volume =
      Number(
        musicVolume.value
      );

  }
);


/* =========================================================
   AUTO STORY
========================================================= */

autoStoryBtn.addEventListener(
  "click",
  () => {

    if (autoStory) {

      stopAutoStory();

    } else {

      startAutoStory();

    }

  }
);


function startAutoStory() {

  autoStory =
    true;


  autoStoryBtn.textContent =
    "⏹ Auto Story बंद करें";


  playCurrentAudio();


  scheduleNextAutoPage();

}


function scheduleNextAutoPage() {

  clearTimeout(
    autoStoryTimer
  );


  /*
    अभी वास्तविक voice files नहीं हैं,
    इसलिए demonstration के लिए page
    लगभग 8 सेकंड बाद बदलता है।
  */

  autoStoryTimer =
    setTimeout(
      () => {

        if (!autoStory) {
          return;
        }


        if (
          currentPageIndex <
          pages.length - 1
        ) {

          nextPage();

          playCurrentAudio();

          scheduleNextAutoPage();

        } else {

          stopAutoStory();

        }

      },
      8000
    );

}


function stopAutoStory() {

  autoStory =
    false;


  clearTimeout(
    autoStoryTimer
  );


  autoStoryBtn.textContent =
    "▶ Auto Story शुरू करें";

}


/* =========================================================
   PAGE IMAGE ERROR
========================================================= */

pageImage.addEventListener(
  "error",
  () => {

    pageImage.style.display =
      "none";

    audioStatus.textContent =
      "इस पेज की image अभी उपलब्ध नहीं है";

  }
);


pageImage.addEventListener(
  "load",
  () => {

    pageImage.style.display =
      "block";

  }
);


/* =========================================================
   AUDIO EVENTS
========================================================= */

voiceAudio.addEventListener(
  "play",
  () => {

    audioStatus.textContent =
      "🎙️ आवाज़ चल रही है";

  }
);


voiceAudio.addEventListener(
  "ended",
  () => {

    audioStatus.textContent =
      "आवाज़ समाप्त";

  }
);


voiceAudio.addEventListener(
  "error",
  () => {

    audioStatus.textContent =
      "इस पेज की voice file उपलब्ध नहीं है";

  }
);


/* =========================================================
   START
========================================================= */

initializeBook();
