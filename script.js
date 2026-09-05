const scenes = Array.from(document.querySelectorAll("[data-scene]"));
const journeyFill = document.querySelector("#journey-fill");
const soundToggle = document.querySelector("#sound-toggle");
const soundLabel = document.querySelector("#sound-label");
const introReveal = document.querySelector("#intro-reveal");
const introRevealLabel = document.querySelector("#intro-reveal-label");
const introRevealCopy = document.querySelector("#intro-reveal-copy");
const introVerdict = document.querySelector("#intro-verdict");
const introNext = document.querySelector("#intro-next");
const questionCard = document.querySelector("#question-card");
const questionKicker = document.querySelector("#question-kicker");
const questionText = document.querySelector("#question-text");
const questionCount = document.querySelector("#question-count");
const answerList = document.querySelector("#answer-list");
const deduction = document.querySelector("#deduction");
const answerRemark = document.querySelector("#answer-remark");
const deductionCopy = document.querySelector("#deduction-copy");
const deductionNext = document.querySelector("#deduction-next");
const nudgeScore = document.querySelector("#nudge-score");
const meterCard = document.querySelector("#meter-card");
const meterNumber = document.querySelector("#meter-number");
const meterFill = document.querySelector("#meter-fill");
const meterRunner = document.querySelector("#meter-runner");
const meterProgress = document.querySelector("#meter-progress");
const meterCaption = document.querySelector("#meter-caption");
const deltaBadge = document.querySelector("#delta-badge");
const finalNumber = document.querySelector("#final-number");
const confettiLayer = document.querySelector("#confetti-layer");

const introductionCopy = {
  sensible: {
    label: "The normal Abdullah says:",
    copy: "Hi, I’m Abdullah. I saw you at the webinar, thought you seemed genuinely interesting, and wanted to say hello. No elaborate agenda."
  },
  honest: {
    label: "The honest Abdullah says:",
    copy: "Hi, I’m Abdullah. I tried to write a casual DM, disliked every version, and somehow this became your problem. You seemed worth saying hello to properly.",
    verdict: "honesty, overproduced"
  },
  optimistic: {
    label: "The optimistic Abdullah says:",
    copy: "Hi, I’m Abdullah. Based on one webinar, limited evidence and frankly irresponsible optimism, I think you should text back.",
    verdict: "statistically reckless"
  },
  dramatic: {
    label: "The dramatic Abdullah says:",
    copy: "One webinar. One Instagram profile. One man who refused to type ‘hey.’ And now, against all reasonable expectations he has a website.",
    verdict: "trailer approved"
  }
};

const questions = [
  {
    kicker: "Risk assessment",
    text: "You clicked a custom website sent by a man from Instagram. What does this say about you?",
    answers: [
      {
        label: "I support the arts, including whatever this is.",
        remark: "Patron of the arts confirmed. The artist remains grateful and under observation."
      },
      {
        label: "My cybersecurity training has failed me spectacularly.",
        remark: "Cybersecurity lost. Curiosity won. Abdullah’s suspiciously convenient research continues."
      },
      {
        label: "I was promised a rigged quiz and demand it immediately!.",
        remark: "At last, a voter with a clear position."
      },
      {
        label: "I enjoy situations with excellent lore and poor risk assessment.",
        remark: "Strong choice. Every good story begins with someone ignoring perfectly sensible advice."
      }
    ]
  },
  {
    kicker: "Emergency conversation protocol",
    text: "A conversation suddenly dies. What is the correct recovery procedure?",
    answers: [
      {
        label: "Release a pigeon carrying a second topic.",
        remark: "Bold. Memorable. Completely defeated by closed windows."
      },
      {
        label: "Say ‘anyway’ and reveal an aggressively specific opinion.",
        remark: "The word ‘anyway’ has never been followed by emotional stability. Excellent choice."
      },
      {
        label: "Pretend the silence was an intentional dramatic pause.",
        remark: "Correct. Confusion delivered with confidence becomes theatre."
      },
      {
        label: "Send a meme so old it now qualifies for a pension.",
        remark: "Fourteen pixels. Three watermarks. One heroic attempt to keep the chat alive."
      }
    ]
  },
  {
    kicker: "Telecommunications law",
    text: "A voice note reaches four minutes. It is now legally classified as…",
    answers: [
      {
        label: "A podcast, and I expect an advertisement halfway through.",
        remark: "Use code ABDULLAH for 0% off a product nobody requested."
      },
      {
        label: "An audiobook with troubling pacing but strong potential.",
        remark: "Chapter one: a quick update. Chapter nine: the neighbour’s cousin enters the plot."
      },
      {
        label: "A witness statement. Nobody interrupt the testimony.",
        remark: "The court is in session. Background traffic will be entered into evidence."
      },
      {
        label: "Acceptable, provided there is character development.",
        remark: "At minute three, the voice note must introduce a villain or refund your attention."
      }
    ]
  },
  {
    kicker: "Cinema ethics",
    text: "You predict a movie’s ending ten minutes in. What is the responsible thing to do?",
    answers: [
      {
        label: "Announce it immediately and become the villain of movie night.",
        remark: "Correct prediction. Incorrect survival strategy. Future invitations are now under review."
      },
      {
        label: "Stay silent and host a private awards ceremony for my own intelligence.",
        remark: "Best Performance in Quiet Smugness. The acceptance speech is unbearable."
      },
      {
        label: "Invent a worse ending and whisper, ‘wait for it.’",
        remark: "The film was fine. You have somehow created the real psychological thriller."
      },
      {
        label: "Keep watching. I came for snacks, not narrative integrity.",
        remark: "At last, a serious critic. Popcorn remains the protagonist."
      }
    ]
  },
  {
    kicker: "Public performance assessment",
    text: "A song you love starts playing in public. You choose…",
    answers: [
      {
        label: "A full performance conducted entirely by your eyebrows.",
        remark: "Your eyebrows have secured an encore and a tiny dressing room."
      },
      {
        label: "Lip-syncing so subtle you resemble a haunted fish.",
        remark: "Nobody heard a lyric. Several people witnessed a haunting."
      },
      {
        label: "One foot launching a completely independent solo career.",
        remark: "The foot has left the group chat and signed with a label."
      },
      {
        label: "Complete stillness. The concert is internal and sold out.",
        remark: "A private stadium tour. Security remains deeply confused."
      }
    ]
  },
  {
    kicker: "Final extremely neutral inquiry",
    text: "The algorithm requires a first message. Choose the opening line.",
    answers: [
      {
        label: "‘This was ridiculous. Hi.’",
        remark: "Perfect. Concise, accurate, and impossible for Abdullah to argue with."
      },
      {
        label: "‘I have questions. Unfortunately many of them is about you.’",
        remark: "Curiosity with plausible deniability. Elegant and faintly threatening."
      },
      {
        label: "‘Top five songs. Defend your ranking.’",
        remark: "A conversation and a tribunal. The playlist is already nervous."
      },
      {
        label: "‘My lawyers want your contact information, please DM them to me.’",
        remark: "Can't we settle this outside of court?."
      }
    ]
  }
];

const meterTargets = [31, 61, 92, 121, 153, 187];
const meterCaptions = [
  "One answer in. The algorithm is already drafting your reply.",
  "Two answers. It has opened Instagram in another tab.",
  "The evidence now strongly recommends typing ‘hi.’",
  "100% was apparently a suggestion, not a limit.",
  "The meter is pointing at Abdullah with both hands.",
  "The algorithm has replaced statistics with a giant arrow."
];
const continuationLabels = [
  "Accept these impeccable findings",
  "Continue with your questionable judgement",
  "Trust the science for some reason(?)",
  "Continue, this is totally normal...",
  "Proceed despite obvious bias",
  "Reveal the conclusion"
];

let activeScene = "welcome";
let currentQuestion = 0;
let currentMeter = 3;
let answerLocked = false;
let transitionLocked = false;
let soundEnabled = true;
let audioContext = null;

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function ensureAudio() {
  if (!soundEnabled) return null;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function tone(frequency, delay = 0, duration = 0.09, type = "sine", volume = 0.045, endFrequency = null) {
  const context = ensureAudio();
  if (!context || !soundEnabled) return;
  const start = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  if (endFrequency) oscillator.frequency.exponentialRampToValueAtTime(endFrequency, start + duration);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.025);
}

function playTap() {
  tone(430, 0, 0.055, "square", 0.025, 610);
}

function playPageTurn() {
  tone(170, 0, 0.18, "triangle", 0.035, 520);
  tone(740, 0.13, 0.08, "sine", 0.03);
}

function playIntroChoice(index) {
  const notes = [440, 523, 659, 784];
  tone(notes[index], 0, 0.1, "triangle", 0.035);
  tone(notes[index] * 1.5, 0.08, 0.16, "sine", 0.032);
}

function playMeterBoost(step) {
  const base = 350 + step * 24;
  tone(base, 0, 0.09, "square", 0.025);
  tone(base * 1.25, 0.09, 0.09, "square", 0.027);
  tone(base * 1.5, 0.18, 0.11, "square", 0.03);
  tone(base * 2, 0.3, 0.14, "triangle", 0.04);
}

function playReveal() {
  [392, 494, 587, 784].forEach((frequency, index) => {
    tone(frequency, index * 0.11, 0.22, index % 2 ? "triangle" : "sine", 0.045);
  });
  tone(196, 0, 0.52, "triangle", 0.025);
}

document.addEventListener("pointerdown", ensureAudio, { once: true });

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  soundLabel.textContent = soundEnabled ? "Sound on" : "Sound off";
  if (soundEnabled) {
    ensureAudio();
    tone(520, 0, 0.08, "sine", 0.035);
    tone(780, 0.09, 0.12, "sine", 0.04);
  }
});

function showScene(name, sound = true) {
  if (transitionLocked || name === activeScene) return;
  transitionLocked = true;
  const outgoing = document.querySelector(`[data-scene="${activeScene}"]`);
  const incoming = document.querySelector(`[data-scene="${name}"]`);
  const delay = reducedMotion() ? 0 : 210;

  if (sound) playPageTurn();
  outgoing.classList.add("is-leaving");

  window.setTimeout(() => {
    outgoing.hidden = true;
    outgoing.classList.remove("is-active", "is-leaving");
    incoming.hidden = false;
    incoming.classList.remove("is-leaving");
    incoming.classList.add("is-active");
    activeScene = name;
    const progress = { welcome: "10%", intro: "34%", quiz: "67%", result: "100%" };
    journeyFill.style.width = progress[name] || "10%";
    window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" });
    const heading = incoming.querySelector("h1, h2");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      window.setTimeout(() => heading.focus({ preventScroll: true }), 60);
    }
    transitionLocked = false;
  }, delay);
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    ensureAudio();
    showScene(button.dataset.go);
  });
});

document.querySelectorAll("[data-intro-style]").forEach((button, index) => {
  button.addEventListener("click", () => {
    const introduction = introductionCopy[button.dataset.introStyle];
    document.querySelectorAll("[data-intro-style]").forEach((choice) => {
      choice.classList.remove("is-selected");
      choice.setAttribute("aria-pressed", "false");
    });

    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
    introRevealLabel.textContent = introduction.label;
    introRevealCopy.textContent = introduction.copy;
    introVerdict.textContent = introduction.verdict;
    introNext.disabled = false;
    introReveal.classList.remove("is-revealing");
    void introReveal.offsetWidth;
    introReveal.classList.add("is-revealing");
    playIntroChoice(index);
    launchConfetti(12);
  });
});

function resetQuiz() {
  currentQuestion = 0;
  currentMeter = 3;
  answerLocked = false;
  meterNumber.textContent = "3";
  meterFill.style.width = "3%";
  meterRunner.style.left = "3%";
  meterProgress.setAttribute("aria-valuenow", "3");
  meterCaption.textContent = "The algorithm has barely begun interfering.";
  nudgeScore.textContent = "Confidence: already suspicious.";
  meterCard.classList.remove("is-overflowing");
  questionCard.hidden = false;
  deduction.hidden = true;
  renderQuestion();
}

document.querySelectorAll("[data-start-quiz]").forEach((button) => {
  button.addEventListener("click", () => {
    ensureAudio();
    resetQuiz();
    showScene("quiz");
  });
});

document.querySelectorAll("[data-home]").forEach((button) => {
  button.addEventListener("click", () => {
    playTap();
    if (activeScene === "welcome") return;
    showScene("welcome", false);
  });
});

function renderQuestion() {
  const question = questions[currentQuestion];
  answerLocked = false;
  questionCard.hidden = false;
  deduction.hidden = true;
  questionKicker.textContent = question.kicker;
  questionText.textContent = question.text;
  questionCount.textContent = `${String(currentQuestion + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
  answerList.replaceChildren();

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    const marker = document.createElement("span");
    const label = document.createElement("span");
    button.type = "button";
    button.className = "answer-button";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", "false");
    marker.className = "answer-marker";
    marker.textContent = String.fromCharCode(65 + index);
    marker.setAttribute("aria-hidden", "true");
    label.textContent = answer.label;
    button.append(marker, label);
    button.addEventListener("click", () => chooseAnswer(index, button));
    answerList.append(button);
  });

  questionCard.classList.remove("is-refreshing");
  void questionCard.offsetWidth;
  questionCard.classList.add("is-refreshing");
}

function chooseAnswer(answerIndex, selectedButton) {
  if (answerLocked) return;
  answerLocked = true;
  playTap();

  const buttons = Array.from(answerList.querySelectorAll("button"));
  buttons.forEach((button) => {
    button.disabled = true;
    button.setAttribute("aria-checked", "false");
  });
  selectedButton.classList.add("is-selected");
  selectedButton.setAttribute("aria-checked", "true");

  const previous = currentMeter;
  const target = meterTargets[currentQuestion];
  const delta = target - previous;
  const chosenAnswer = questions[currentQuestion].answers[answerIndex];
  currentMeter = target;

  window.setTimeout(() => {
    boostMeter(previous, target, delta);
    answerRemark.textContent = chosenAnswer.remark;
    deductionCopy.textContent = `Based on this answer, the extremely fair and accurate algorithm has deduced that you should ${target}% text back Abdullah.`;
    nudgeScore.textContent = `Confidence: ${target}%. Subtlety: no longer available.`;
    deductionNext.innerHTML = `${continuationLabels[currentQuestion]} <span aria-hidden="true">→</span>`;
  }, reducedMotion() ? 0 : 160);

  window.setTimeout(() => {
    questionCard.hidden = true;
    deduction.hidden = false;
    deductionNext.focus({ preventScroll: true });
  }, reducedMotion() ? 0 : 780);
}

function boostMeter(from, to, delta) {
  playMeterBoost(currentQuestion);
  animateNumber(meterNumber, from, to, 850);
  const visibleValue = Math.min(100, to);
  meterFill.style.width = `${visibleValue}%`;
  meterRunner.style.left = `${visibleValue}%`;
  meterProgress.setAttribute("aria-valuenow", String(to));
  meterCaption.textContent = meterCaptions[currentQuestion];
  deltaBadge.textContent = `+${delta}%`;
  meterCard.classList.remove("is-boosting");
  meterCard.classList.toggle("is-overflowing", to > 100);
  deltaBadge.classList.remove("is-visible");
  void meterCard.offsetWidth;
  meterCard.classList.add("is-boosting");
  deltaBadge.classList.add("is-visible");
  launchConfetti(to > 100 ? 24 : 17);
}

deductionNext.addEventListener("click", () => {
  playTap();
  if (currentQuestion === questions.length - 1) {
    showFinalResult();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
});

function showFinalResult() {
  showScene("result", false);
  window.setTimeout(() => {
    playReveal();
    animateNumber(finalNumber, 0, 187, 1150);
    launchConfetti(96);
  }, reducedMotion() ? 0 : 260);
}

document.querySelectorAll("[data-restart]").forEach((button) => {
  button.addEventListener("click", () => {
    playTap();
    resetQuiz();
    showScene("welcome", false);
  });
});

function animateNumber(element, from, to, duration) {
  if (reducedMotion()) {
    element.textContent = String(to);
    return;
  }
  const start = performance.now();
  function frame(now) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = String(Math.round(from + (to - from) * eased));
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function launchConfetti(count) {
  if (reducedMotion()) return;
  const colors = ["#ff4d8d", "#ffd166", "#72ddf7", "#8068ff", "#4fd3a4", "#ff6b5f"];
  for (let index = 0; index < count; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--x", `${Math.random() * 100}%`);
    piece.style.setProperty("--w", `${7 + Math.random() * 8}px`);
    piece.style.setProperty("--h", `${10 + Math.random() * 13}px`);
    piece.style.setProperty("--color", colors[index % colors.length]);
    piece.style.setProperty("--rotation", `${Math.random() * 180}deg`);
    piece.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
    piece.style.setProperty("--duration", `${1.4 + Math.random() * 1.35}s`);
    piece.style.setProperty("--delay", `${Math.random() * 0.24}s`);
    confettiLayer.append(piece);
    window.setTimeout(() => piece.remove(), 3200);
  }
}

document.querySelector(".final-cta").addEventListener("click", () => {
  tone(620, 0, 0.08, "sine", 0.035);
  tone(930, 0.08, 0.13, "sine", 0.04);
});

resetQuiz();
