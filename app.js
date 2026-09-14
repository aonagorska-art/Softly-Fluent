'use strict';
const KEY = 'softly-fluent-deck-v1';
const names = ['Polish', 'English', 'Russian', 'Chinese · Mandarin'];
const langs = ['pl', 'en', 'ru', 'zh-CN'];
const codes = ['PL', 'EN', 'RU', '中'];
const validIds = new Set(WORDS.map(word => word.id));
const $ = id => document.getElementById(id);
let seen = [], current = null, cycle = 1, storageAvailable = true;
let buttonLanguage = 0;
const nextLabels = ['Find another', 'Следующее слово', 'Następne słowo', '下一个词'];
const nextLabelLangs = ['en', 'ru', 'pl', 'zh-CN'];

function readSaved() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (!saved || !Array.isArray(saved.seen)) return null;
    return {
      seen: [...new Set(saved.seen.filter(id => validIds.has(id)))],
      current: WORDS.find(word => word.id === saved.current) || null,
      cycle: Number.isInteger(saved.cycle) && saved.cycle > 0 ? saved.cycle : 1
    };
  } catch { storageAvailable = false; return null; }
}
const saved = readSaved();
if (saved) {
  seen = saved.seen; current = saved.current || WORDS.find(word => word.id === seen[seen.length - 1]) || null; cycle = saved.cycle;
  if (current && !seen.includes(current.id)) seen.push(current.id);
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify({ seen, current: current?.id, cycle })); }
  catch { storageAvailable = false; }
  $('storage-note').hidden = storageAvailable;
  if (!storageAvailable) $('storage-note').textContent = 'Progress stays in this tab while it is open.';
}
function render() {
  $('welcome').hidden = true;
  $('results').hidden = false;
  const cards = names.map((name, i) => {
    const card = document.createElement('article'); card.className = 'word-card';
    const label = document.createElement('div'); label.className = 'lang';
    const badge = document.createElement('span'); badge.className = 'lang-code'; badge.textContent = codes[i];
    label.append(badge, document.createTextNode(name));
    const word = document.createElement('h2'); word.className = 'word'; word.lang = langs[i];
    word.textContent = current.words[i].replace(/^(a|an|the) /, '');
    const longest = Math.max(...word.textContent.split(/\s+/).map(part => part.length));
    if (longest > 12) word.className += longest > 16 ? ' very-long-word' : ' long-word';
    card.append(label, word);
    if (i === 3) {
      const pinyin = document.createElement('p'); pinyin.className = 'pinyin'; pinyin.lang = 'zh-Latn';
      pinyin.textContent = current.pinyin; card.append(pinyin);
    }
    const example = document.createElement('p'); example.className = 'example'; example.lang = langs[i];
    example.textContent = current.examples[i]; card.append(example);
    return card;
  });
  $('grid').replaceChildren(...cards);
  $('grid').classList.remove('reveal'); void $('grid').offsetWidth; $('grid').classList.add('reveal');
  const finished = seen.length === WORDS.length;
  $('button-label').textContent = finished ? 'Start a fresh session' : nextLabels[buttonLanguage];
  $('button-label').lang = finished ? 'en' : nextLabelLangs[buttonLanguage];
  $('session-note').hidden = !finished;
  $('session-note').textContent = finished ? 'All done for now. A fresh session will revisit the words.' : '';
}
function draw() {
  // Merge progress from another tab in the same session before selecting a word.
  const other = readSaved();
  if (other && other.cycle === cycle) seen = [...new Set([...seen, ...other.seen])];
  let available = WORDS.filter(word => !seen.includes(word.id));
  if (!available.length) {
    // Reaching the end never resets automatically; this is a separate explicit action.
    if ($('button-label').textContent !== 'Start a fresh session') { if(current) render(); return current; }
    seen = []; cycle++;
    available = WORDS.filter(word => word.id !== current?.id);
  }
  current = available[Math.floor(Math.random() * available.length)];
  seen.push(current.id); save(); render(); return current;
}
$('draw').addEventListener('click', () => {
  if (current && seen.length < WORDS.length) buttonLanguage = (buttonLanguage + 1) % nextLabels.length;
  draw();
});
if (current) render();
if (navigator.modelContext?.registerTool) {
  navigator.modelContext.registerTool({
    name: 'discover_word', description: 'Draw an unseen word with Polish, English, Russian and Mandarin examples. At the end, return the final word; starting a new session requires the on-page button.',
    inputSchema: { type: 'object', properties: {} },
    execute: async () => ({ content: [{ type: 'text', text: JSON.stringify(seen.length === WORDS.length ? current : draw()) }] })
  });
}
