
const $ = (id) => document.getElementById(id);

const topics = [
  {
    name: "Birthday", emoji: "🎂", subtitle: "Make their day",
    kicker: "A LITTLE BIRTHDAY MAGIC",
    messages: [
      "Today is all about you and the wonderful person you are. I hope your day is filled with laughter, love, and little moments that make you smile.",
      "Some of my favourite memories have you in them. I hope we create a hundred more beautiful memories together.",
      "You deserve the kind of happiness that stays even after the candles are blown out. Never forget how special you are.",
      "May this new chapter bring you courage for your dreams, peace for your heart, and people who celebrate the real you.",
      "Here is to another year of becoming, growing, laughing, and discovering beautiful things. Happy birthday, you wonderful human! ♡",
      "I hope every wish you make today takes you one step closer to the life you dream about.",
      "You make ordinary days brighter just by being yourself. The world is lucky to have you in it.",
      "May your favourite songs play, your favourite food appear, and your heart feel extra loved today.",
      "No gift could fully explain how much you mean to me, so here are a few words from my heart instead.",
      "One last birthday hug through this little card. Keep smiling, keep dreaming, and keep being beautifully you. ♡"
    ]
  },
  {
    name: "Friendship", emoji: "🫶", subtitle: "For your person",
    kicker: "A NOTE FOR MY PERSON",
    messages: [
      "Some people enter your life quietly and somehow become part of your favourite memories. You are one of those people.",
      "Thank you for the laughs that made my stomach hurt and the conversations that made difficult days easier.",
      "I love that I can be completely myself around you. That kind of comfort is rare, and I never take it for granted.",
      "Even when life gets busy and our conversations get shorter, I hope you always know that you matter to me.",
      "Here is to a friendship that keeps growing, a thousand more inside jokes, and memories we have not made yet. ♡",
      "Thank you for listening to stories you have probably heard a hundred times and still caring about the ending.",
      "You have seen different versions of me, and I am grateful that our friendship keeps finding its way forward.",
      "If you ever forget your worth, borrow my eyes for a moment. I hope you see the wonderful person I see.",
      "Distance, busy schedules, and changing seasons cannot erase the good memories we have made together.",
      "Whatever the future looks like, I am cheering for you. Always remember that you have someone in your corner."
    ]
  },
  {
    name: "Love", emoji: "💗", subtitle: "Say it softly",
    kicker: "A LITTLE LOVE LETTER",
    messages: [
      "There is something beautiful about finding someone whose presence makes an ordinary day feel a little softer.",
      "I love the little things about you, especially the things you do without even realising how much they mean to me.",
      "You have become part of so many of my favourite thoughts, songs, smiles, and quiet moments.",
      "I do not need every day to be perfect. I just hope we keep choosing kindness, honesty, and understanding.",
      "If I could give you one thing, it would be the chance to see yourself through my eyes. You would understand why you matter so much. ♡",
      "You make me smile at my phone for absolutely no reason, and honestly, that is a little embarrassing and very sweet.",
      "I want to celebrate your happy days and be gentle with you on the difficult ones, too.",
      "The smallest moments with you sometimes become the memories I treasure the most.",
      "Thank you for being yourself with me. I hope our connection always has room for honesty, growth, and laughter.",
      "So here is my little reminder: you are appreciated, you are cared for, and you make my world a little brighter."
    ]
  },
  {
    name: "Proposal", emoji: "💍", subtitle: "A brave question",
    kicker: "SOMETHING FROM MY HEART",
    messages: [
      "There is something I have wanted to say, and I finally want to give these feelings the courage they deserve.",
      "It is the little things about you that stayed with me: your smile, your kindness, and the way you make conversations feel special.",
      "Somewhere between ordinary conversations and unexpected smiles, you became someone I wanted to know more deeply.",
      "I cannot promise a perfect story, but I believe a beautiful connection begins with honesty and respect.",
      "So, with a slightly nervous heart and a hopeful smile, I want to ask you something important. ♡",
      "I admire the person you are and the person you are becoming. That means more to me than a perfect first impression.",
      "I would love the chance to know you better, one honest conversation at a time.",
      "There is no pressure to give me an answer immediately. Your comfort and your feelings matter, too.",
      "Whatever your answer is, I am glad I chose to be honest instead of wondering what might have been.",
      "Would you like to take a little step toward something special with me? 💗"
    ]
  },
  {
    name: "Invitation", emoji: "💌", subtitle: "Come celebrate",
    kicker: "YOU ARE INVITED",
    messages: [
      "I am planning a little something special, and this occasion would feel incomplete without you there.",
      "Imagine good company, happy conversations, and little moments we will remember long after the day ends.",
      "Your presence would add something wonderful to this celebration. That is why I wanted you to be part of it.",
      "Come as you are, bring your lovely smile, and get ready to make a few happy memories with us.",
      "Save a little time for us! I would absolutely love to celebrate this special moment together. ♡",
      "The plan is simple: spend time together, enjoy the moment, and leave with a smile.",
      "I hope you can join us for this little celebration. Having you there would mean a lot.",
      "There is room for laughter, stories, photographs, and all the little things that make a gathering special.",
      "Please let me know if you can make it. I am looking forward to sharing this day with you.",
      "With lots of excitement and a warm invitation, I hope to see you soon! 💌"
    ]
  },
  {
    name: "Thank You", emoji: "🌸", subtitle: "Show gratitude",
    kicker: "A HEARTFELT THANK YOU",
    messages: [
      "I wanted to pause for a moment and tell you something simple that deserves to be said more often: thank you.",
      "Your kindness made a difference, even if you did not realise it at the time.",
      "I appreciate the time, effort, patience, and thoughtfulness you shared with me.",
      "Little acts of kindness can stay in someone's heart for a long time. Yours certainly stayed in mine.",
      "I may not always find the perfect words, but I hope you know how genuinely grateful I am. ♡",
      "Thank you for showing up when it mattered and for making things feel a little easier.",
      "Your support reminded me that good people can make even uncertain days feel brighter.",
      "I appreciate not only what you did, but also the care and intention behind it.",
      "I hope the kindness you give so freely finds its way back to you in beautiful ways.",
      "This little card is a small way to say something much bigger: I appreciate you. Thank you!"
    ]
  },
  {
    name: "Apology", emoji: "🕊️", subtitle: "Make things right",
    kicker: "A SINCERE NOTE",
    messages: [
      "I have been thinking about what happened, and I want to acknowledge that my words or actions may have hurt you.",
      "I am sorry for my part in what happened. I understand that intentions do not erase the impact of our actions.",
      "You deserved patience and understanding, and I recognise that I could have handled things better.",
      "I do not expect everything to feel okay immediately. Your feelings deserve time, space, and respect.",
      "I am genuinely sorry. If you are willing, I would like to listen, learn, and do better moving forward. ♡",
      "I have thought about what I could have done differently, and I want to take that lesson seriously.",
      "I will not ask you to ignore how you feel. I only hope I can show change through my actions.",
      "You matter to me, and that is why I do not want to dismiss something that hurt you.",
      "Whenever you feel ready, I am open to an honest conversation without pressure or excuses.",
      "I am sorry, and I hope that with time and understanding, we can find a healthier way forward."
    ]
  },
  {
    name: "Anniversary", emoji: "🌹", subtitle: "Celebrate your story",
    kicker: "ANOTHER CHAPTER TOGETHER",
    messages: [
      "Today is a lovely reminder of the time, memories, and little moments that have brought us here.",
      "When I look back, it is often the smallest memories that make me smile the most.",
      "Every chapter has taught us something, and I am grateful for the moments that helped us grow.",
      "I hope the future brings us more laughter, meaningful conversations, and reasons to appreciate one another.",
      "Here is to the memories we cherish, the lessons we carry, and all the beautiful pages still waiting to be written. ♡",
      "Thank you for being part of this chapter of my life. It means more than a date on a calendar can express.",
      "The photographs capture some moments, but the feelings behind them are what make them unforgettable.",
      "May we continue to celebrate progress, forgive imperfections, and make space for new memories.",
      "Today I am celebrating not just how far we have come, but the care that made the journey meaningful.",
      "Happy anniversary! May the next chapter be full of warmth, patience, joy, and countless little reasons to smile."
    ]
  },
  {
    name: "Congratulations", emoji: "🎉", subtitle: "Celebrate a win",
    kicker: "LOOK AT YOU GO",
    messages: [
      "You did it! Take a moment to appreciate how far you have come and everything it took to reach this point.",
      "Your effort matters. The quiet work, the practice, and the moments when you kept going all count.",
      "I hope you give yourself the same encouragement that you so easily give to other people.",
      "This achievement is a wonderful milestone, but it is also a reminder of what you can do when you keep learning.",
      "Congratulations! I am proud of your progress, excited for your future, and cheering for what comes next. ♡",
      "Celebrate this moment properly. You worked for it, and you deserve to enjoy it.",
      "Every success has a story behind it, and I hope you remember all the effort that helped you get here.",
      "May this achievement open doors to new opportunities, new experiences, and even bigger dreams.",
      "You do not need to have everything figured out to be proud of how far you have travelled.",
      "Here is to your hard work, your courage, and all the wonderful things still ahead. Congratulations!"
    ]
  },
  {
    name: "Just Because", emoji: "🧸", subtitle: "A random little note",
    kicker: "NO REASON. JUST YOU.",
    messages: [
      "There is no special occasion today. I just thought you deserved a little reminder that you are appreciated.",
      "If today has been a lot, take a breath. You do not have to solve your entire life in one afternoon.",
      "I hope something unexpectedly lovely happens to you today, even if it is just your favourite song playing.",
      "You are allowed to rest, change your mind, start again, and grow at your own pace.",
      "This is your reminder that you matter even on ordinary days when you have not achieved anything special. ♡",
      "Drink some water, stretch your shoulders, and give yourself a little credit for making it through today.",
      "Some people make the world warmer simply by being in it. I hope you know you are one of them.",
      "May you find a reason to laugh today and a little peace when the day gets quiet.",
      "You do not need to be perfect, productive, or impressive to deserve kindness.",
      "Just because I can, and just because you are you, I am sending a little love your way. 💗"
    ]
  }
];

const designs = [
  { name: "Blush", emoji: "🌷", kicker: "A LITTLE NOTE FOR YOU", theme: "pink", swatch: "linear-gradient(135deg,#fff0f7,#f2b5d2)" },
  { name: "Dreamy", emoji: "🦋", kicker: "A DREAMY LITTLE WISH", theme: "lavender", swatch: "linear-gradient(135deg,#f9f4ff,#c7b3f3)" },
  { name: "Vintage", emoji: "🌼", kicker: "A NOTE TO TREASURE", theme: "cream", swatch: "linear-gradient(135deg,#fffdf3,#e6c98e)" },
  { name: "Peachy", emoji: "🍑", kicker: "SOMETHING SWEET", theme: "peach", swatch: "linear-gradient(135deg,#fff5ed,#f5b7a5)" },
  { name: "Midnight", emoji: "🌙", kicker: "A LITTLE MIDNIGHT MAGIC", theme: "night", swatch: "linear-gradient(135deg,#25233c,#8d7bc0)" },
  { name: "Garden", emoji: "🌿", kicker: "GROWING WITH LOVE", theme: "mint", swatch: "linear-gradient(135deg,#effff5,#a9dfbf)" },
  { name: "Rose", emoji: "🌹", kicker: "FROM THE HEART", theme: "rose", swatch: "linear-gradient(135deg,#fff0f1,#e5a0b0)" },
  { name: "Sky", emoji: "☁️", kicker: "A WISH FOR YOU", theme: "sky", swatch: "linear-gradient(135deg,#f4fbff,#a9d5f6)" },
  { name: "Berry", emoji: "🫐", kicker: "SWEET LITTLE THOUGHTS", theme: "berry", swatch: "linear-gradient(135deg,#fff3ff,#d5a8df)" },
  { name: "Golden", emoji: "✨", kicker: "YOU ARE A LITTLE MAGIC", theme: "gold", swatch: "linear-gradient(135deg,#fffde9,#e8cb69)" }
];

const state = {
  topicIndex: 0,
  designIndex: 0,
  currentPage: 0,
  pages: [],
  toastTimer: null
};

function defaultPages(topic) {
  return Array.from({ length: 5 }, (_, index) => ({
    message: topic.messages[index] || "",
    photo: ""
  }));
}

function getTopic() {
  return topics[state.topicIndex];
}

function getDesign() {
  return designs[state.designIndex];
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderTopics() {
  const grid = $("topicGrid");
  grid.replaceChildren();

  topics.forEach((topic, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-card" + (index === state.topicIndex ? " active" : "");
    button.setAttribute("aria-pressed", String(index === state.topicIndex));

    const emoji = document.createElement("span");
    emoji.className = "topic-emoji";
    emoji.textContent = topic.emoji;

    const name = document.createElement("span");
    name.className = "topic-name";
    name.textContent = topic.name;

    const subtitle = document.createElement("span");
    subtitle.className = "topic-subtitle";
    subtitle.textContent = topic.subtitle;

    button.append(emoji, name, subtitle);
    button.addEventListener("click", () => selectTopic(index));
    grid.append(button);
  });
}

function selectTopic(index) {
  if (index < 0 || index >= topics.length) return;

  state.topicIndex = index;
  state.currentPage = 0;
  state.pages = defaultPages(getTopic());

  $("message").value = state.pages[0].message;
  $("pagePhoto").value = "";

  renderTopics();
  updatePreview();
  showToast(`${getTopic().name} story selected ♡`);
}

function renderDesigns() {
  const grid = $("designGrid");
  grid.replaceChildren();

  designs.forEach((design, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "design-option" + (index === state.designIndex ? " active" : "");
    button.setAttribute("aria-pressed", String(index === state.designIndex));
    button.setAttribute("aria-label", `Choose ${design.name} design`);

    const swatch = document.createElement("span");
    swatch.className = "design-swatch";
    swatch.style.background = design.swatch;

    const label = document.createElement("span");
    label.textContent = design.name;

    button.append(swatch, label);
    button.addEventListener("click", () => {
      state.designIndex = index;
      $("cardTheme").value = design.theme;
      renderDesigns();
      updatePreview();
    });
    grid.append(button);
  });
}

function saveCurrentPage() {
  if (!state.pages[state.currentPage]) return;
  state.pages[state.currentPage].message = $("message").value;
}

function loadCurrentPage() {
  const page = state.pages[state.currentPage];
  $("message").value = page.message;
  $("pagePhoto").value = "";
  updatePreview();
}

function updatePageLabels() {
  const number = state.currentPage + 1;

  $("editorPageLabel").textContent = `Page ${number} of 5`;
  $("editorProgress").textContent = `${number} / 5`;
  $("previewPageLabel").textContent = `${number} / 5`;

  $("editorPrev").disabled = number === 1;
  $("previewPrev").disabled = number === 1;

  const last = number === 5;
  $("editorNext").textContent = last ? "Start again ↻" : "Next →";
  $("previewNext").textContent = last ? "Start again ↻" : "Next page →";

  const dots = $("pageDots");
  dots.replaceChildren();

  for (let index = 0; index < 5; index++) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "page-dot" + (index === state.currentPage ? " active" : "");
    dot.setAttribute("aria-label", `Go to page ${index + 1}`);
    dot.setAttribute("aria-pressed", String(index === state.currentPage));
    dot.addEventListener("click", () => goToPage(index, false));
    dots.append(dot);
  }
}

function goToPage(index, scrollToPreview = false) {
  saveCurrentPage();
  state.currentPage = (index + 5) % 5;
  loadCurrentPage();

  if (scrollToPreview) {
    $("cardPreview").scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function updatePreview() {
  const design = getDesign();
  const topic = getTopic();
  const page = state.pages[state.currentPage];

  $("previewEmoji").textContent = design.emoji;
  $("previewKicker").textContent = state.currentPage === 0
    ? design.kicker
    : `${topic.name.toUpperCase()} · PAGE ${state.currentPage + 1}`;

  $("previewRecipient").textContent =
    $("recipient").value.trim() || "Someone Special";

  $("previewMessage").textContent =
    page.message || "Your lovely message will appear here.";

  const sender = $("sender").value.trim();
  $("previewSender").textContent = sender ? `With love, ${sender}` : "With love ♡";

  const photo = $("previewPhoto");
  if (page.photo) {
    photo.src = page.photo;
    photo.hidden = false;
  } else {
    photo.removeAttribute("src");
    photo.hidden = true;
  }

  $("charCount").textContent = String($("message").value.length);
  $("cardPreview").className = `greeting-card theme-${$("cardTheme").value}`;

  renderDesignSelectionState();
  updatePageLabels();
}

function renderDesignSelectionState() {
  document.querySelectorAll(".design-option").forEach((button, index) => {
    const selected = index === state.designIndex;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function handlePhotoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast("Please choose an image file.");
    event.target.value = "";
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    showToast("Choose a picture smaller than 5 MB.");
    event.target.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    if (typeof reader.result !== "string") {
      showToast("Could not read this picture. Try another one.");
      return;
    }

    state.pages[state.currentPage].photo = reader.result;
    updatePreview();
    showToast("Picture added to this page! ♡");
  };

  reader.onerror = () => showToast("Could not read this picture. Try another one.");
  reader.readAsDataURL(file);
}

function removeCurrentPhoto() {
  state.pages[state.currentPage].photo = "";
  $("pagePhoto").value = "";
  updatePreview();
  showToast("Picture removed from this page.");
}

function buildShareURL() {
  saveCurrentPage();

  const shareData = {
    version: 1,
    topicIndex: state.topicIndex,
    designIndex: state.designIndex,
    theme: $("cardTheme").value,
    recipient: $("recipient").value.trim(),
    sender: $("sender").value.trim(),
    pages: state.pages.map((page) => ({ message: page.message }))
  };

  // Photos are intentionally excluded: local pictures are not online-hosted.
  return `${window.location.href.split("#")[0]}#card=${encodeURIComponent(JSON.stringify(shareData))}`;
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.append(helper);
      helper.select();
      const copied = document.execCommand("copy");
      helper.remove();
      if (!copied) throw new Error("Copy failed");
    }

    showToast("Share link copied! Send it to someone special ♡");
  } catch (error) {
    window.prompt("Copy your share link:", text);
  }
}

async function shareStory() {
  const url = buildShareURL();

  if (navigator.share) {
    try {
      await navigator.share({
        title: "A little story from Wishly ♡",
        text: "Someone made a little five-page story for you.",
        url
      });
      return;
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }

  await copyText(url);
}

function loadSharedCard() {
  const prefix = "#card=";
  if (!window.location.hash.startsWith(prefix)) return;

  try {
    const encoded = window.location.hash.slice(prefix.length);
    const data = JSON.parse(decodeURIComponent(encoded));

    if (!data || data.version !== 1) throw new Error("Unsupported card");

    state.topicIndex = Number.isInteger(data.topicIndex) &&
      data.topicIndex >= 0 && data.topicIndex < topics.length
      ? data.topicIndex : 0;

    state.designIndex = Number.isInteger(data.designIndex) &&
      data.designIndex >= 0 && data.designIndex < designs.length
      ? data.designIndex : 0;

    const topic = getTopic();

    state.pages = Array.from({ length: 5 }, (_, index) => ({
      message: typeof data.pages?.[index]?.message === "string"
        ? data.pages[index].message.slice(0, 600)
        : topic.messages[index],
      photo: ""
    }));

    $("recipient").value = typeof data.recipient === "string" ? data.recipient.slice(0, 60) : "";
    $("sender").value = typeof data.sender === "string" ? data.sender.slice(0, 60) : "";
    $("cardTheme").value = designs[state.designIndex].theme;
    $("message").value = state.pages[0].message;

    if (designs[state.designIndex].theme !== data.theme) {
      const validTheme = [
        "pink", "lavender", "cream", "peach", "night",
        "mint", "rose", "sky", "berry", "gold"
      ];
      if (validTheme.includes(data.theme)) $("cardTheme").value = data.theme;
    }

    renderTopics();
    renderDesigns();
  } catch (error) {
    showToast("This share link could not be opened. Start a new card instead.");
  }
}

function printStory() {
  saveCurrentPage();

  const printContainer = $("printStory");
  printContainer.replaceChildren();

  state.pages.forEach((page, index) => {
    const sheet = document.createElement("section");
    sheet.className = `print-page theme-${$("cardTheme").value}`;

    const emoji = document.createElement("div");
    emoji.className = "card-top-decor";
    emoji.textContent = index === 0 ? getDesign().emoji : "♡";

    const kicker = document.createElement("div");
    kicker.className = "preview-kicker";
    kicker.textContent = index === 0
      ? getDesign().kicker
      : `${getTopic().name.toUpperCase()} · PAGE ${index + 1}`;

    const heading = document.createElement("h2");
    heading.textContent = $("recipient").value.trim() || "Someone Special";

    sheet.append(emoji, kicker, heading);

    if (page.photo) {
      const photo = document.createElement("img");
      photo.className = "page-photo";
      photo.src = page.photo;
      photo.alt = `Picture on page ${index + 1}`;
      sheet.append(photo);
    }

    const message = document.createElement("p");
    message.className = "print-message";
    message.textContent = page.message || "A little message just for you.";
    sheet.append(message);

    const from = document.createElement("div");
    from.className = "preview-from";
    from.textContent = $("sender").value.trim()
      ? `With love, ${$("sender").value.trim()}`
      : "With love ♡";

    const footer = document.createElement("div");
    footer.className = "card-bottom-decor";
    footer.textContent = `✿ · ${index + 1} / 5 · ✿`;

    sheet.append(from, footer);
    printContainer.append(sheet);
  });

  window.print();
}

function setupEditor() {
  $("recipient").addEventListener("input", updatePreview);
  $("sender").addEventListener("input", updatePreview);

  $("message").addEventListener("input", () => {
    saveCurrentPage();
    updatePreview();
  });

  $("cardTheme").addEventListener("change", () => {
    const selectedIndex = designs.findIndex(
      (design) => design.theme === $("cardTheme").value
    );

    if (selectedIndex >= 0) state.designIndex = selectedIndex;

    renderDesigns();
    updatePreview();
  });

  $("editorPrev").addEventListener("click", () => goToPage(state.currentPage - 1));
  $("editorNext").addEventListener("click", () => goToPage(state.currentPage + 1));

  $("previewPrev").addEventListener("click", () => {
    goToPage(state.currentPage - 1, true);
  });
  $("previewNext").addEventListener("click", () => {
    goToPage(state.currentPage + 1, true);
  });

  $("pagePhoto").addEventListener("change", handlePhotoUpload);
  $("removePhoto").addEventListener("click", removeCurrentPhoto);
  $("shareButton").addEventListener("click", shareStory);
  $("copyButton").addEventListener("click", () => copyText(buildShareURL()));
  $("printButton").addEventListener("click", printStory);
}

function init() {
  state.pages = defaultPages(getTopic());

  loadSharedCard();

  $("cardTheme").value = getDesign().theme;
  $("message").value = state.pages[0].message;
  $("currentYear").textContent = String(new Date().getFullYear());

  renderTopics();
  renderDesigns();
  setupEditor();
  updatePreview();
}

document.addEventListener("DOMContentLoaded", init);
