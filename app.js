// Данные адвента. Все шансы хранятся долями, без округления.
const ordinaryData = [
["Ракушка +20 ПУ",1000],["Ракушка +30 ПУ",500],["Ракушка −8 мин сна",600],["Ракушка +15 ПУ",1000],["Ракушка +28 ПУ",1000],["Перо −2% урон падения",500],["Перо +8% получения ЛУ",400],["Перо +20 ЛУ",75],["Красивые кораллы",50],["Переплетение морских водорослей",50],["Юз смесей",80],["Плашка в профиль на 2 недели без выбора",20],["Смена имени на неделю",20],["Костюм активиста сферы на неделю",20],
["Юз баффа: Архарёнок",132],["Юз баффа: Белый бельчонок",24],["Юз баффа: Бурундучонок",31],["Юз баффа: Волчонок",84],["Юз баффа: Выдрёнок",27],["Юз баффа: Кабанёнок",44],["Юз баффа: Котёнок каракала",26],["Юз баффа: Красная пиранга",73],["Юз баффа: Кремовый тюленёнок",65],["Юз баффа: Маленькая землероечка",32],["Юз баффа: Медвежонок",12],["Юз баффа: Норка",15],["Юз баффа: Птенец песочника",8],["Юз баффа: Птенец сороки",67],["Юз баффа: Рысёнок",75],["Юз баффа: Утёнок мандаринки",58],["Юз баффа: Чёрный стрижонок",76],["Юз баффа: Щенок красной крестовки",46],["Юз баффа: Щенок песца",39],["Юз баффа: Ягнёнок",12]
].map(([name,qty])=>({name,qty,cat:"ordinary"}));
const rareData = [
["Клон ивента",40],["Декор из ачивок",35],["Плашка лора в ачивках",20],["Клон в ачивках",15],["Снижение требований 10%",30],["Снижение требований 20%",20],["Снижение требований 30%",10],["Плашка на выбор на 2 недели",20],["Смена имени на 2 недели",20],["Постоянное ДИ/отречение на выбор",20],["Костюм активиста сферы на 2 недели",30],
["Бафф целиком: Архарёнок",30],["Бафф целиком: Белый бельчонок",5],["Бафф целиком: Бурундучонок",5],["Бафф целиком: Волчонок",30],["Бафф целиком: Выдрёнок",21],["Бафф целиком: Кабанёнок",25],["Бафф целиком: Котёнок каракала",1],["Бафф целиком: Красная пиранга",40],["Бафф целиком: Кремовый тюленёнок",25],["Бафф целиком: Маленькая землероечка",20],["Бафф целиком: Медвежонок",5],["Бафф целиком: Норка",3],["Бафф целиком: Птенец песочника",7],["Бафф целиком: Птенец сороки",20],["Бафф целиком: Рысёнок",9],["Бафф целиком: Чёрный стрижонок",24],["Бафф целиком: Щенок красной крестовки",20],["Бафф целиком: Щенок песца",12],["Бафф целиком: Ягнёнок",5],
["Виновник торжества",3],["Звёздная мышь",28],["Огненная ящерица",6]
].map(([name,qty])=>({name,qty,cat:"rare"}));
const kittenRare={name:"Закрытие одного/пары заданий для котят в сорванцах",qty:10,cat:"rare",kittenOnly:true};
const legendaryData=[
["Личный декор в ачивках",4],["Сладкий подарок от верха",3],["Арт на выбор от предложенных худов",4],["Личный костюм на 2 недели",6],["Личная плашка на 2 недели",2],
["Бафф целиком: Аксолотлёнок в банке",1],["Бафф целиком: Барсучонок",1],["Бафф целиком: Бельчонок",3],["Бафф целиком: Ежонок",1],["Бафф целиком: Зайчонок",3],["Бафф целиком: Змейка",1],["Бафф целиком: Маленькая шиншилла",5],["Бафф целиком: Маленький хорёк",1],["Бафф целиком: Рыбка в банке",1],["Бафф целиком: Цыплёнок",1],["Бафф целиком: Эублефарёнок",2],
["Крольчонок с бантиком",1],["Леденец Системолапа",3],["Леденец Транзакции",1],["Тёмная душа",4],["Воспоминание о былых приключениях",4],["Инь",2],["Ледяная роза",2],["Манускрипт (1 юз из 2)",2],["Манускрипт (3 юза)",1],["Новогодняя открытка",2],["Носок",1],["Робо-Мурка",2],["Роботизированный Чарли",2],["Свинка Мурра",6],["Ян",3],["Частичка силы... Фамильяра?",1],["Воспоминание об ужасе ночи (0 из 3 юзов)",1],["Воспоминание об ужасе ночи (2 из 3 юзов)",1],["Декабрин",1],["Кинжал-спаситель Ксавье 2",2],["Кинжал-спаситель Ксавье (фулл)",1],["Кораблик в бутылочке",4],["Наделённый духовной силой амулет",2],["Оберег змеи",1],["Хэллоуинский котёл с украшениями",2],["Чемодан старшего детектива",3],["Дар небес",4],["Чёрный кролик",1]
].map(([name,qty])=>({name,qty,cat:"legendary"}));
const pearls=[15,25,35,45,55].map(v=>({name:`Жемчуг ${v}`,qty:Infinity,cat:"pearl"}));
const sum=a=>a.reduce((s,x)=>s+x,0), ORD_TOTAL=sum(ordinaryData.map(x=>x.qty)), RARE_COMMON=sum(rareData.map(x=>x.qty)), RARE_KITTEN=RARE_COMMON+10, LEG_TOTAL=sum(legendaryData.map(x=>x.qty));
const config={kitten:{days:14,yellow:2,red:0},warrior:{days:31,yellow:4,red:1}};
const dayOdds={green:{ord:.5,rare:0,leg:0,pearl:.5},yellow:{ord:.5,rare:.03,leg:0,pearl:.47},red:{ord:.5,rare:.03,leg:.001,pearl:.469}};
let mode="kitten";
const $=id=>document.getElementById(id), pct=n=>(n*100).toFixed(5).replace(/0+$/,"").replace(/\.$/,"")+"%";
function pick(entries){let r=Math.random()*sum(entries.map(e=>e.w));for(const e of entries){r-=e.w;if(r<0)return e.v;}return entries.at(-1).v;}
function makeDays(){const c=config[mode],a=Array(c.days-c.yellow-c.red).fill("green").concat(Array(c.yellow).fill("yellow"),Array(c.red).fill("red"));for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function inventory(){return {ord:ordinaryData.map(x=>({...x,left:x.qty})),rare:rareData.concat(mode==="kitten"?[kittenRare]:[]).map(x=>({...x,left:x.qty})),leg:legendaryData.map(x=>({...x,left:x.qty}))};}
function draw(type,inv){const o=dayOdds[type],e=[],ordLeft=sum(inv.ord.map(x=>x.left));let pearl=o.pearl+(ordLeft===0?o.ord:0);
if(ordLeft)e.push({w:o.ord,v:{bucket:"ord"}});
const denom=mode==="kitten"?RARE_KITTEN:RARE_COMMON;
for(const x of inv.rare){let p=o.rare*x.qty/denom;if(x.left&&p)e.push({w:p,v:x});else pearl+=p;}
for(const x of inv.leg){let p=o.leg*x.qty/LEG_TOTAL;if(x.left&&p)e.push({w:p,v:x});else pearl+=p;}
for(const x of pearls)e.push({w:pearl/5,v:x});
let x=pick(e);if(x.bucket){x=pick(inv.ord.filter(a=>a.left).map(a=>({w:a.left,v:a})));x.left--;}else if(x.cat!=="pearl")x.left--;
return {name:x.name,cat:x.cat,type};}
function run(){let inv=inventory();return makeDays().map((type,i)=>({day:i+1,...draw(type,inv)}));}
function label(c){return ({ordinary:"Обычная",rare:"Редкая",legendary:"Легендарная",pearl:"Жемчуг"})[c];}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function showResults(a){$("windows").className="windows";$("windows").innerHTML=a.map(x=>`<div class="window ${x.type}"><span class="day">ДЕНЬ ${x.day}</span><span class="kind">${x.type==="green"?"обычный":x.type==="yellow"?"редкий пул":"легендарный пул"}</span><span class="prize">${esc(x.name)}</span><span class="tag">${label(x.cat)}</span></div>`).join("");let c={};a.forEach(x=>c[x.name]=(c[x.name]||0)+1);$("outcomes").innerHTML=`<div class="outlist">${Object.entries(c).sort((a,b)=>b[1]-a[1]).map(([n,v])=>`<div class="out"><span>${esc(n)}</span><b>× ${v}</b></div>`).join("")}</div>`;}
function catalog(){const denom=mode==="kitten"?RARE_KITTEN:RARE_COMMON;return [
...ordinaryData.map(x=>({...x,p:.5*x.qty/ORD_TOTAL})),
...rareData.map(x=>({...x,p:.03*x.qty/denom})),
...(mode==="kitten"?[{...kittenRare,p:.03*10/denom}]:[]),
...legendaryData.map(x=>({...x,p:.001*x.qty/LEG_TOTAL})),
...pearls.map(x=>({...x,p:null}))
];}
function showCatalog(){let q=$("search").value.toLocaleLowerCase("ru"),f=$("filter").value;let a=catalog().filter(x=>(f==="all"||x.cat===f)&&x.name.toLocaleLowerCase("ru").includes(q));$("catalog").innerHTML=a.map(x=>`<tr><td>${esc(x.name)}</td><td>${label(x.cat)}</td><td>${x.qty===Infinity?"∞":x.qty}</td><td>${x.cat==="pearl"?"10% / 9,4% / 9,38%*":pct(x.p)}</td></tr>`).join("")||'<tr><td colspan="4">Ничего не найдено</td></tr>';}
function batch(){
  let n=Math.max(1,Math.min(10000,Number($("runs").value)||1)),counts={},draws=0;
  for(let i=0;i<n;i++){for(const x of run()){counts[x.name]=(counts[x.name]||0)+1;draws++;}}
  const c=config[mode], dayCount={green:c.days-c.yellow-c.red,yellow:c.yellow,red:c.red};
  const theoretical=x=>{
    if(x.cat==="ordinary") return x.p;
    if(x.cat==="rare") return x.p*(dayCount.yellow+dayCount.red)/c.days;
    if(x.cat==="legendary") return x.p*dayCount.red/c.days;
    const base=(dayCount.green*.5+dayCount.yellow*.47+dayCount.red*.469)/(c.days*5);
    return base;
  };
  let a=catalog().filter(x=>x.cat!=="pearl"||counts[x.name]);
  $("batch").innerHTML=`<p class="muted">${n.toLocaleString("ru-RU")} адвентов · ${draws.toLocaleString("ru-RU")} открытий</p>
  <div class="tablewrap"><table><thead><tr><th>Награда</th><th>Выпало</th><th>Фактическая частота</th><th>Теоретическая частота*</th></tr></thead>
  <tbody>${a.map(x=>`<tr><td>${esc(x.name)}</td><td>${counts[x.name]||0}</td><td>${pct((counts[x.name]||0)/draws)}</td><td>${pct(theoretical(x))}</td></tr>`).join("")}</tbody></table></div>
  <p class="muted">* Теоретическая частота усреднена по всем дням выбранного режима: редкие учитываются только в жёлтые/красный дни, легендарные — только в красный. Для жемчуга показан базовый шанс без добавок от исчерпанных предметов. Фактическая частота учитывает всё перераспределение и расход запасов.</p>`;
}
function updateMode(){mode=document.querySelector('input[name=mode]:checked').value;$("days").textContent=config[mode].days;$("legend").textContent=mode==="warrior"?"0,1%":"—";showCatalog();$("windows").className="windows muted";$("windows").textContent="Нажми «Сгенерировать адвент»";$("outcomes").textContent="Здесь появится список наград.";$("batch").innerHTML="";}
$("generate").onclick=()=>showResults(run());$("simulate").onclick=batch;$("reset").onclick=updateMode;document.querySelectorAll('input[name=mode]').forEach(x=>x.onchange=updateMode);$("search").oninput=showCatalog;$("filter").onchange=showCatalog;updateMode();