'use strict';
const KEY='softly-fluent-deck-v1';
const names=['Polish','English','Russian','Chinese · Mandarin'];
const langs=['pl','en','ru','zh-CN'];
const codes=['PL','EN','RU','中'];
let seen=[],current=null,cycle=1,storageAvailable=true;
try { const saved=JSON.parse(localStorage.getItem(KEY)); if(saved && Array.isArray(saved.seen)){seen=[...new Set(saved.seen.filter(id=>Number.isInteger(id)&&id>=0&&id<WORDS.length))]; current=WORDS.find(w=>w.id===saved.current)||null; cycle=Number.isInteger(saved.cycle)&&saved.cycle>0?saved.cycle:1;} } catch{storageAvailable=false;}
const $=id=>document.getElementById(id);
function save(){try{localStorage.setItem(KEY,JSON.stringify({seen,current:current.id,cycle}));}catch{storageAvailable=false;} if(!storageAvailable){$('storage-note').hidden=false;$('storage-note').textContent='Browser storage is unavailable. No repeats during this visit.';}}
function render(){
 $('welcome').hidden=true;$('results').hidden=false;
 const cards=names.map((name,i)=>{const card=document.createElement('article');card.className='word-card';const label=document.createElement('div');label.className='lang';const badge=document.createElement('span');badge.className='lang-code';badge.textContent=codes[i];label.append(badge,document.createTextNode(name));const word=document.createElement('h2');word.className='word';word.lang=langs[i];word.textContent=current.words[i].replace(/^(a|an|the) /,'');card.append(label,word);if(i===3){const py=document.createElement('p');py.className='pinyin';py.lang='zh-Latn';py.textContent=current.pinyin;card.append(py);}const ex=document.createElement('p');ex.className='example';ex.lang=langs[i];ex.textContent=current.examples[i];card.append(ex);return card;});
 $('grid').replaceChildren(...cards);$('grid').classList.remove('reveal');void $('grid').offsetWidth;$('grid').classList.add('reveal');
 $('button-label').textContent='Find another';
}
function draw(){let available=WORDS.filter(w=>!seen.includes(w.id));if(!available.length){seen=[];cycle++;available=WORDS.filter(w=>w.id!==current?.id);}current=available[Math.floor(Math.random()*available.length)];seen.push(current.id);save();render();return current;}
$('draw').addEventListener('click',draw);
if(current)render();
if(navigator.modelContext?.registerTool){navigator.modelContext.registerTool({name:'discover_word',description:'Draw an unseen vocabulary word with Polish, English, Russian and Mandarin translations and example sentences.',inputSchema:{type:'object',properties:{}},execute:async()=>({content:[{type:'text',text:JSON.stringify(draw())}]})});}
