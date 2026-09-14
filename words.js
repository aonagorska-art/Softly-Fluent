const WORDS = [
  {
    "id": 0,
    "category": "Little comforts",
    "words": [
      "kawa",
      "coffee",
      "кофе",
      "咖啡"
    ],
    "pinyin": "kāfēi",
    "examples": [
      "Robię kawę, zanim otworzę pocztę.",
      "I make coffee before opening my email.",
      "Я готовлю кофе, прежде чем открыть почту.",
      "我先煮咖啡，再打开邮箱。"
    ]
  },
  {
    "id": 1,
    "category": "Little comforts",
    "words": [
      "herbata",
      "tea",
      "чай",
      "茶"
    ],
    "pinyin": "chá",
    "examples": [
      "Chcesz herbaty z cytryną?",
      "Would you like some tea with lemon?",
      "Хочешь чаю с лимоном?",
      "你想喝点柠檬茶吗？"
    ]
  },
  {
    "id": 2,
    "category": "Little comforts",
    "words": [
      "woda",
      "water",
      "вода",
      "水"
    ],
    "pinyin": "shuǐ",
    "examples": [
      "Zawsze zabieram wodę na długie spacery.",
      "I always carry water on long walks.",
      "Я всегда беру воду на долгие прогулки.",
      "长时间散步时，我总会带水。"
    ]
  },
  {
    "id": 3,
    "category": "Little comforts",
    "words": [
      "chleb",
      "bread",
      "хлеб",
      "面包"
    ],
    "pinyin": "miànbāo",
    "examples": [
      "Ten chleb jest jeszcze ciepły po wyjęciu z pieca.",
      "This bread is still warm from the oven.",
      "Этот хлеб ещё тёплый из печи.",
      "这面包刚出炉，还热着呢。"
    ]
  },
  {
    "id": 4,
    "category": "Little comforts",
    "words": [
      "ryż",
      "rice",
      "рис",
      "米饭"
    ],
    "pinyin": "mǐfàn",
    "examples": [
      "Na kolację podaliśmy ryż z warzywami.",
      "We served rice with vegetables for dinner.",
      "На ужин мы подали рис с овощами.",
      "晚餐我们准备了米饭配蔬菜。"
    ]
  },
  {
    "id": 5,
    "category": "Little comforts",
    "words": [
      "makaron",
      "pasta",
      "макароны",
      "意大利面"
    ],
    "pinyin": "Yìdàlìmiàn",
    "examples": [
      "Makaron potrzebuje jeszcze dwóch minut.",
      "The pasta needs two more minutes.",
      "Макароны нужно варить ещё две минуты.",
      "意大利面还需要再煮两分钟。"
    ]
  },
  {
    "id": 6,
    "category": "Little comforts",
    "words": [
      "ser",
      "cheese",
      "сыр",
      "奶酪"
    ],
    "pinyin": "nǎilào",
    "examples": [
      "Kładę plaster sera na kanapkę.",
      "I put a slice of cheese on my sandwich.",
      "Я кладу ломтик сыра на бутерброд.",
      "我在三明治里放了一片奶酪。"
    ]
  },
  {
    "id": 7,
    "category": "Little comforts",
    "words": [
      "czekolada",
      "chocolate",
      "шоколад",
      "巧克力"
    ],
    "pinyin": "qiǎokèlì",
    "examples": [
      "Zostawiłam trochę czekolady na później. Później nadeszło szybko.",
      "I saved some chocolate for later. Later came quickly.",
      "Я оставила немного шоколада на потом. Потом наступило быстро.",
      "我留了点巧克力等会儿吃。这个“等会儿”来得很快。"
    ]
  },
  {
    "id": 8,
    "category": "Little comforts",
    "words": [
      "zupa",
      "soup",
      "суп",
      "汤"
    ],
    "pinyin": "tāng",
    "examples": [
      "Miska gorącej zupy jest idealna na zimny dzień.",
      "A bowl of hot soup is perfect on a cold day.",
      "Тарелка горячего супа идеальна в холодный день.",
      "冷天喝一碗热汤再合适不过了。"
    ]
  },
  {
    "id": 9,
    "category": "Little comforts",
    "words": [
      "śniadanie",
      "breakfast",
      "завтрак",
      "早餐"
    ],
    "pinyin": "zǎocān",
    "examples": [
      "W każdą niedzielę jemy razem śniadanie.",
      "We eat breakfast together every Sunday.",
      "Каждое воскресенье мы вместе едим завтрак.",
      "我们每周日一起吃早餐。"
    ]
  },
  {
    "id": 10,
    "category": "Little comforts",
    "words": [
      "lunch",
      "lunch",
      "обед",
      "午餐"
    ],
    "pinyin": "wǔcān",
    "examples": [
      "Zjedzmy lunch po spotkaniu.",
      "Let's have lunch after the meeting.",
      "Давай пообедаем после встречи.",
      "我们开完会再吃午餐吧。"
    ]
  },
  {
    "id": 11,
    "category": "Little comforts",
    "words": [
      "kolacja",
      "dinner",
      "ужин",
      "晚餐"
    ],
    "pinyin": "wǎncān",
    "examples": [
      "Kolacja jest gotowa, ale wszyscy nadal siedzą w telefonach.",
      "Dinner is ready, but everyone is still on their phone.",
      "Ужин готов, но все ещё сидят в телефонах.",
      "晚餐做好了，大家却还在看手机。"
    ]
  },
  {
    "id": 12,
    "category": "Little comforts",
    "words": [
      "cukier",
      "sugar",
      "сахар",
      "糖"
    ],
    "pinyin": "táng",
    "examples": [
      "Piję kawę bez cukru.",
      "I take my coffee without sugar.",
      "Я пью кофе без сахара.",
      "我喝咖啡不加糖。"
    ]
  },
  {
    "id": 13,
    "category": "Little comforts",
    "words": [
      "sól",
      "salt",
      "соль",
      "盐"
    ],
    "pinyin": "yán",
    "examples": [
      "Dodaj trochę soli do zupy.",
      "Add a little salt to the soup.",
      "Добавь немного соли в суп.",
      "往汤里加一点盐。"
    ]
  },
  {
    "id": 14,
    "category": "Little comforts",
    "words": [
      "mleko",
      "milk",
      "молоко",
      "牛奶"
    ],
    "pinyin": "niúnǎi",
    "examples": [
      "W lodówce nie ma już mleka.",
      "There is no milk left in the fridge.",
      "В холодильнике больше нет молока.",
      "冰箱里没有牛奶了。"
    ]
  },
  {
    "id": 15,
    "category": "Little comforts",
    "words": [
      "miód",
      "honey",
      "мёд",
      "蜂蜜"
    ],
    "pinyin": "fēngmì",
    "examples": [
      "Dodaję miód do jogurtu.",
      "I add honey to my yogurt.",
      "Я добавляю мёд в йогурт.",
      "我往酸奶里加蜂蜜。"
    ]
  },
  {
    "id": 16,
    "category": "Little comforts",
    "words": [
      "masło",
      "butter",
      "масло",
      "黄油"
    ],
    "pinyin": "huángyóu",
    "examples": [
      "Zostaw masło poza lodówką, żeby zmiękło.",
      "Leave the butter out so it softens.",
      "Оставь масло вне холодильника, чтобы оно размягчилось.",
      "把黄油放在冰箱外，让它变软。"
    ]
  },
  {
    "id": 17,
    "category": "Little comforts",
    "words": [
      "jogurt",
      "yogurt",
      "йогурт",
      "酸奶"
    ],
    "pinyin": "suānnǎi",
    "examples": [
      "Jogurt naturalny pasuje do świeżych owoców.",
      "Plain yogurt goes well with fresh fruit.",
      "Натуральный йогурт хорошо сочетается со свежими фруктами.",
      "原味酸奶很适合搭配新鲜水果。"
    ]
  },
  {
    "id": 18,
    "category": "Little comforts",
    "words": [
      "lody",
      "ice cream",
      "мороженое",
      "冰淇淋"
    ],
    "pinyin": "bīngqílín",
    "examples": [
      "Moje lody stopniały, zanim zdążyłam zrobić zdjęcie.",
      "My ice cream melted before I could take a photo.",
      "Моё мороженое растаяло, прежде чем я успела сделать фото.",
      "我还没来得及拍照，冰淇淋就化了。"
    ]
  },
  {
    "id": 19,
    "category": "Little comforts",
    "words": [
      "pizza",
      "pizza",
      "пицца",
      "比萨"
    ],
    "pinyin": "bǐsà",
    "examples": [
      "Zamówiliśmy pizzę, bo nikt nie chciał gotować.",
      "We ordered pizza because nobody wanted to cook.",
      "Мы заказали пиццу, потому что никто не хотел готовить.",
      "我们点了比萨，因为谁都不想做饭。"
    ]
  },
  {
    "id": 20,
    "category": "Little comforts",
    "words": [
      "jabłko",
      "an apple",
      "яблоко",
      "苹果"
    ],
    "pinyin": "píngguǒ",
    "examples": [
      "Spakowałam jabłko na przekąskę.",
      "I packed an apple for a snack.",
      "Я взяла яблоко на перекус.",
      "我带了一个苹果当零食。"
    ]
  },
  {
    "id": 21,
    "category": "Little comforts",
    "words": [
      "banan",
      "a banana",
      "банан",
      "香蕉"
    ],
    "pinyin": "xiāngjiāo",
    "examples": [
      "Ten banan jest wystarczająco dojrzały na koktajl.",
      "This banana is ripe enough for a smoothie.",
      "Этот банан уже достаточно спелый для смузи.",
      "这根香蕉已经熟了，可以做奶昔。"
    ]
  },
  {
    "id": 22,
    "category": "Little comforts",
    "words": [
      "pomarańcza",
      "an orange",
      "апельсин",
      "橙子"
    ],
    "pinyin": "chéngzi",
    "examples": [
      "Obierz pomarańczę, zanim dodasz ją do sałatki.",
      "Peel the orange before adding it to the salad.",
      "Очисти апельсин, прежде чем добавить его в салат.",
      "先剥橙子，再把它放进沙拉里。"
    ]
  },
  {
    "id": 23,
    "category": "Little comforts",
    "words": [
      "cytryna",
      "a lemon",
      "лимон",
      "柠檬"
    ],
    "pinyin": "níngméng",
    "examples": [
      "Wyciśnij pół cytryny do wody.",
      "Squeeze half a lemon into the water.",
      "Выжми половину лимона в воду.",
      "把半个柠檬的汁挤进水里。"
    ]
  },
  {
    "id": 24,
    "category": "Little comforts",
    "words": [
      "truskawka",
      "a strawberry",
      "клубника",
      "草莓"
    ],
    "pinyin": "cǎoméi",
    "examples": [
      "Pierwsza truskawka z naszego ogrodu była bardzo słodka.",
      "The first strawberry from our garden was very sweet.",
      "Первая клубника из нашего сада была очень сладкой.",
      "我们花园里的第一颗草莓特别甜。"
    ]
  },
  {
    "id": 25,
    "category": "Little comforts",
    "words": [
      "ziemniak",
      "a potato",
      "картофелина",
      "土豆"
    ],
    "pinyin": "tǔdòu",
    "examples": [
      "Piecz ziemniaka, aż będzie miękki.",
      "Bake the potato until it is soft.",
      "Запекай картофелину, пока она не станет мягкой.",
      "把土豆烤到变软。"
    ]
  },
  {
    "id": 26,
    "category": "Little comforts",
    "words": [
      "pomidor",
      "a tomato",
      "помидор",
      "西红柿"
    ],
    "pinyin": "xīhóngshì",
    "examples": [
      "Pokrój pomidora w cienkie plasterki.",
      "Cut the tomato into thin slices.",
      "Нарежь помидор тонкими ломтиками.",
      "把西红柿切成薄片。"
    ]
  },
  {
    "id": 27,
    "category": "Little comforts",
    "words": [
      "marchewka",
      "a carrot",
      "морковь",
      "胡萝卜"
    ],
    "pinyin": "húluóbo",
    "examples": [
      "Starłam marchewkę do sałatki.",
      "I grated a carrot into the salad.",
      "Я натёрла морковь в салат.",
      "我把胡萝卜擦成丝，放进沙拉里。"
    ]
  },
  {
    "id": 28,
    "category": "Little comforts",
    "words": [
      "cebula",
      "an onion",
      "луковица",
      "洋葱"
    ],
    "pinyin": "yángcōng",
    "examples": [
      "Krojenie cebuli zawsze doprowadza mnie do łez.",
      "Chopping an onion always makes me cry.",
      "Когда я режу лук, у меня всегда текут слёзы.",
      "切洋葱总让我流泪。"
    ]
  },
  {
    "id": 29,
    "category": "Little comforts",
    "words": [
      "jajko",
      "an egg",
      "яйцо",
      "鸡蛋"
    ],
    "pinyin": "jīdàn",
    "examples": [
      "Ugotowałam jajko na śniadanie.",
      "I boiled an egg for breakfast.",
      "Я сварила яйцо на завтрак.",
      "我早餐煮了一个鸡蛋。"
    ]
  },
  {
    "id": 30,
    "category": "Little comforts",
    "words": [
      "ciasto",
      "a cake",
      "торт",
      "蛋糕"
    ],
    "pinyin": "dàngāo",
    "examples": [
      "Upiekliśmy ciasto na jej urodziny.",
      "We baked a cake for her birthday.",
      "Мы испекли торт на её день рождения.",
      "我们为她的生日做了一个蛋糕。"
    ]
  },
  {
    "id": 31,
    "category": "Little comforts",
    "words": [
      "ciastko",
      "a cookie",
      "печенье",
      "饼干"
    ],
    "pinyin": "bǐnggān",
    "examples": [
      "Zostało jedno ciastko, więc oczywiście je zjadłam.",
      "There was one cookie left, so naturally I ate it.",
      "Осталось одно печенье, и я, конечно, его съела.",
      "只剩一块饼干了，我当然把它吃了。"
    ]
  },
  {
    "id": 32,
    "category": "Little comforts",
    "words": [
      "kanapka",
      "a sandwich",
      "бутерброд",
      "三明治"
    ],
    "pinyin": "sānmíngzhì",
    "examples": [
      "Zrobiłam kanapkę na podróż pociągiem.",
      "I made a sandwich for the train journey.",
      "Я приготовила бутерброд в дорогу на поезд.",
      "我做了一个三明治，准备在火车上吃。"
    ]
  },
  {
    "id": 33,
    "category": "Little comforts",
    "words": [
      "sałatka",
      "a salad",
      "салат",
      "沙拉"
    ],
    "pinyin": "shālā",
    "examples": [
      "Ta sałatka potrzebuje odrobiny oliwy.",
      "This salad needs a little olive oil.",
      "В этот салат нужно добавить немного оливкового масла.",
      "这份沙拉需要加一点橄榄油。"
    ]
  },
  {
    "id": 34,
    "category": "Little comforts",
    "words": [
      "sok",
      "juice",
      "сок",
      "果汁"
    ],
    "pinyin": "guǒzhī",
    "examples": [
      "Chcesz sok czy wodę?",
      "Would you like juice or water?",
      "Хочешь сок или воду?",
      "你想喝果汁还是水？"
    ]
  },
  {
    "id": 35,
    "category": "Little comforts",
    "words": [
      "owoce",
      "fruit",
      "фрукты",
      "水果"
    ],
    "pinyin": "shuǐguǒ",
    "examples": [
      "Kupujemy świeże owoce na targu.",
      "We buy fresh fruit at the market.",
      "Мы покупаем свежие фрукты на рынке.",
      "我们在市场买新鲜水果。"
    ]
  },
  {
    "id": 36,
    "category": "Little comforts",
    "words": [
      "jedzenie",
      "food",
      "еда",
      "食物"
    ],
    "pinyin": "shíwù",
    "examples": [
      "Jedzenie pachnie pysznie.",
      "The food smells delicious.",
      "Еда пахнет очень вкусно.",
      "食物闻起来很香。"
    ]
  },
  {
    "id": 37,
    "category": "Little comforts",
    "words": [
      "głód",
      "hunger",
      "голод",
      "饥饿"
    ],
    "pinyin": "jī'è",
    "examples": [
      "Po wędrówce mój głód był silniejszy niż dobre maniery.",
      "After the hike, my hunger was stronger than my manners.",
      "После похода голод оказался сильнее моих хороших манер.",
      "徒步之后，饥饿战胜了我的餐桌礼仪。"
    ]
  },
  {
    "id": 38,
    "category": "Little comforts",
    "words": [
      "pragnienie",
      "thirst",
      "жажда",
      "口渴"
    ],
    "pinyin": "kǒukě",
    "examples": [
      "Szklanka wody ugasiła moje pragnienie.",
      "A glass of water quenched my thirst.",
      "Стакан воды утолил мою жажду.",
      "我口渴了，喝了一杯水就好了。"
    ]
  },
  {
    "id": 39,
    "category": "Little comforts",
    "words": [
      "przepis",
      "a recipe",
      "рецепт",
      "食谱"
    ],
    "pinyin": "shípǔ",
    "examples": [
      "Ten przepis jest na cztery porcje.",
      "This recipe serves four people.",
      "Этот рецепт рассчитан на четыре порции.",
      "这个食谱可以做四人份。"
    ]
  },
  {
    "id": 40,
    "category": "Inner world",
    "words": [
      "cierpliwość",
      "patience",
      "терпение",
      "耐心"
    ],
    "pinyin": "nàixīn",
    "examples": [
      "Nauka języka wymaga cierpliwości.",
      "Learning a language takes patience.",
      "Изучение языка требует терпения.",
      "学语言需要耐心。"
    ]
  },
  {
    "id": 41,
    "category": "Inner world",
    "words": [
      "pewność siebie",
      "confidence",
      "уверенность в себе",
      "自信"
    ],
    "pinyin": "zìxìn",
    "examples": [
      "Codzienne mówienie choćby przez chwilę buduje pewność siebie.",
      "Speaking a little every day builds confidence.",
      "Если говорить понемногу каждый день, уверенность в себе растёт.",
      "每天开口说一点，就能增强自信。"
    ]
  },
  {
    "id": 42,
    "category": "Inner world",
    "words": [
      "motywacja",
      "motivation",
      "мотивация",
      "动力"
    ],
    "pinyin": "dònglì",
    "examples": [
      "Moja motywacja rośnie, gdy zauważam postępy.",
      "My motivation improves when I notice progress.",
      "Моя мотивация растёт, когда я замечаю прогресс.",
      "看到进步时，我就更有动力。"
    ]
  },
  {
    "id": 43,
    "category": "Inner world",
    "words": [
      "ambicja",
      "ambition",
      "амбиция",
      "抱负"
    ],
    "pinyin": "bàofù",
    "examples": [
      "Jej ambicją jest otwarcie małej księgarni.",
      "Her ambition is to open a small bookshop.",
      "Её амбиция — открыть небольшой книжный магазин.",
      "她的抱负是开一家小书店。"
    ]
  },
  {
    "id": 44,
    "category": "Inner world",
    "words": [
      "sukces",
      "success",
      "успех",
      "成功"
    ],
    "pinyin": "chénggōng",
    "examples": [
      "Przeczytanie pierwszej książki po angielsku było dla mnie sukcesem.",
      "Finishing my first book in English felt like a success.",
      "Прочитать первую книгу на английском стало для меня успехом.",
      "读完第一本英文书让我感受到了成功。"
    ]
  },
  {
    "id": 45,
    "category": "Inner world",
    "words": [
      "porażka",
      "failure",
      "неудача",
      "失败"
    ],
    "pinyin": "shībài",
    "examples": [
      "Jedna porażka nie oznacza, że trzeba się poddać.",
      "One failure does not mean you should give up.",
      "Одна неудача не означает, что нужно сдаваться.",
      "一次失败不代表你应该放弃。"
    ]
  },
  {
    "id": 46,
    "category": "Inner world",
    "words": [
      "szczęście",
      "luck",
      "удача",
      "运气"
    ],
    "pinyin": "yùnqi",
    "examples": [
      "Cały tydzień było słonecznie. Co za szczęście!",
      "We had sunshine all week. What luck!",
      "Всю неделю было солнечно. Какая удача!",
      "整个星期都是晴天，运气真好！"
    ]
  },
  {
    "id": 47,
    "category": "Inner world",
    "words": [
      "radość",
      "happiness",
      "счастье",
      "幸福"
    ],
    "pinyin": "xìngfú",
    "examples": [
      "Spotkanie starego przyjaciela napełniło mnie radością.",
      "Seeing an old friend filled me with happiness.",
      "Встреча со старым другом наполнила меня счастьем.",
      "见到老朋友让我感到很幸福。"
    ]
  },
  {
    "id": 48,
    "category": "Inner world",
    "words": [
      "smutek",
      "sadness",
      "грусть",
      "悲伤"
    ],
    "pinyin": "bēishāng",
    "examples": [
      "Poczułam smutek, gdy podróż się skończyła.",
      "I felt sadness when the trip ended.",
      "Когда путешествие закончилось, я почувствовала грусть.",
      "旅行结束时，我感到悲伤。"
    ]
  },
  {
    "id": 49,
    "category": "Inner world",
    "words": [
      "złość",
      "anger",
      "злость",
      "愤怒"
    ],
    "pinyin": "fènnù",
    "examples": [
      "Poszłam na spacer, żeby uspokoić złość.",
      "I went for a walk to calm my anger.",
      "Я пошла гулять, чтобы справиться со злостью.",
      "我去散步，让自己的愤怒平息下来。"
    ]
  },
  {
    "id": 50,
    "category": "Inner world",
    "words": [
      "strach",
      "fear",
      "страх",
      "恐惧"
    ],
    "pinyin": "kǒngjù",
    "examples": [
      "Strach przed błędami powstrzymuje mnie przed mówieniem.",
      "My fear of making mistakes stops me from speaking.",
      "Страх ошибок мешает мне говорить.",
      "对犯错的恐惧让我不敢开口。"
    ]
  },
  {
    "id": 51,
    "category": "Inner world",
    "words": [
      "nadzieja",
      "hope",
      "надежда",
      "希望"
    ],
    "pinyin": "xīwàng",
    "examples": [
      "Nadal mam nadzieję, że pociąg przyjedzie punktualnie.",
      "I still have hope that the train will arrive on time.",
      "У меня ещё есть надежда, что поезд придёт вовремя.",
      "我仍然希望火车能准时到达。"
    ]
  },
  {
    "id": 52,
    "category": "Inner world",
    "words": [
      "miłość",
      "love",
      "любовь",
      "爱"
    ],
    "pinyin": "ài",
    "examples": [
      "Okazuje nam miłość, gotując dla nas.",
      "She shows her love by cooking for us.",
      "Она показывает свою любовь, готовя для нас.",
      "她通过给我们做饭表达爱。"
    ]
  },
  {
    "id": 53,
    "category": "Inner world",
    "words": [
      "przyjaźń",
      "friendship",
      "дружба",
      "友谊"
    ],
    "pinyin": "yǒuyì",
    "examples": [
      "Nasza przyjaźń zaczęła się w szkole.",
      "Our friendship began at school.",
      "Наша дружба началась в школе.",
      "我们的友谊始于学校。"
    ]
  },
  {
    "id": 54,
    "category": "Inner world",
    "words": [
      "zaufanie",
      "trust",
      "доверие",
      "信任"
    ],
    "pinyin": "xìnrèn",
    "examples": [
      "Zaufanie rośnie, gdy ludzie dotrzymują obietnic.",
      "Trust grows when people keep their promises.",
      "Доверие растёт, когда люди выполняют обещания.",
      "人们信守承诺，信任就会增加。"
    ]
  },
  {
    "id": 55,
    "category": "Inner world",
    "words": [
      "szacunek",
      "respect",
      "уважение",
      "尊重"
    ],
    "pinyin": "zūnzhòng",
    "examples": [
      "Słuchanie bez przerywania jest oznaką szacunku.",
      "Listening without interrupting is a sign of respect.",
      "Слушать, не перебивая, — знак уважения.",
      "认真听别人说话、不打断，是尊重的表现。"
    ]
  },
  {
    "id": 56,
    "category": "Inner world",
    "words": [
      "uczciwość",
      "honesty",
      "честность",
      "诚实"
    ],
    "pinyin": "chéngshí",
    "examples": [
      "Doceniam twoją uczciwość, nawet gdy prawda jest trudna.",
      "I appreciate your honesty, even when the truth is difficult.",
      "Я ценю твою честность, даже когда правду трудно принять.",
      "即使真相难以接受，我也感谢你的诚实。"
    ]
  },
  {
    "id": 57,
    "category": "Inner world",
    "words": [
      "życzliwość",
      "kindness",
      "доброта",
      "善良"
    ],
    "pinyin": "shànliáng",
    "examples": [
      "Mały gest życzliwości może odmienić czyjś dzień.",
      "A small act of kindness can change someone's day.",
      "Небольшой добрый поступок может изменить чей-то день.",
      "一个小小的善良举动就能改变别人一天的心情。"
    ]
  },
  {
    "id": 58,
    "category": "Inner world",
    "words": [
      "odwaga",
      "courage",
      "смелость",
      "勇气"
    ],
    "pinyin": "yǒngqì",
    "examples": [
      "Zabranie głosu przed klasą wymagało odwagi.",
      "It took courage to speak in front of the class.",
      "Чтобы выступить перед классом, понадобилась смелость.",
      "在全班面前发言需要勇气。"
    ]
  },
  {
    "id": 59,
    "category": "Inner world",
    "words": [
      "ciekawość",
      "curiosity",
      "любопытство",
      "好奇心"
    ],
    "pinyin": "hàoqíxīn",
    "examples": [
      "Ciekawość sprawiła, że otworzyłam stare pudełko.",
      "Curiosity made me open the old box.",
      "Любопытство заставило меня открыть старую коробку.",
      "好奇心让我打开了那个旧盒子。"
    ]
  },
  {
    "id": 60,
    "category": "Inner world",
    "words": [
      "kreatywność",
      "creativity",
      "креативность",
      "创造力"
    ],
    "pinyin": "chuàngzàolì",
    "examples": [
      "Ten projekt daje mi przestrzeń na kreatywność.",
      "This project gives me room for creativity.",
      "Этот проект даёт мне простор для креативности.",
      "这个项目给了我发挥创造力的空间。"
    ]
  },
  {
    "id": 61,
    "category": "Inner world",
    "words": [
      "wyobraźnia",
      "imagination",
      "воображение",
      "想象力"
    ],
    "pinyin": "xiǎngxiànglì",
    "examples": [
      "Dzieci często mają bujną wyobraźnię.",
      "Children often have a vivid imagination.",
      "У детей часто богатое воображение.",
      "孩子们往往有丰富的想象力。"
    ]
  },
  {
    "id": 62,
    "category": "Inner world",
    "words": [
      "mądrość",
      "wisdom",
      "мудрость",
      "智慧"
    ],
    "pinyin": "zhìhuì",
    "examples": [
      "Moja babcia dzieliła się mądrością poprzez opowieści.",
      "My grandmother shared her wisdom through stories.",
      "Моя бабушка делилась мудростью через рассказы.",
      "奶奶通过故事分享她的智慧。"
    ]
  },
  {
    "id": 63,
    "category": "Inner world",
    "words": [
      "wiedza",
      "knowledge",
      "знание",
      "知识"
    ],
    "pinyin": "zhīshi",
    "examples": [
      "Czytanie poszerza naszą wiedzę o świecie.",
      "Reading expands our knowledge of the world.",
      "Чтение расширяет наши знания о мире.",
      "阅读能增长我们对世界的知识。"
    ]
  },
  {
    "id": 64,
    "category": "Inner world",
    "words": [
      "doświadczenie",
      "experience",
      "опыт",
      "经验"
    ],
    "pinyin": "jīngyàn",
    "examples": [
      "Nie potrzebujesz doświadczenia, żeby dołączyć do tego kursu.",
      "You do not need experience to join this course.",
      "Чтобы записаться на этот курс, опыт не нужен.",
      "参加这门课程不需要经验。"
    ]
  },
  {
    "id": 65,
    "category": "Inner world",
    "words": [
      "wolność",
      "freedom",
      "свобода",
      "自由"
    ],
    "pinyin": "zìyóu",
    "examples": [
      "Praca zdalna daje mi więcej wolności.",
      "Working remotely gives me more freedom.",
      "Удалённая работа даёт мне больше свободы.",
      "远程工作给了我更多自由。"
    ]
  },
  {
    "id": 66,
    "category": "Inner world",
    "words": [
      "spokój",
      "peace",
      "спокойствие",
      "平静"
    ],
    "pinyin": "píngjìng",
    "examples": [
      "Po pracy odnajduję spokój w ogrodzie.",
      "I find peace in the garden after work.",
      "После работы я нахожу спокойствие в саду.",
      "下班后，我在花园里找到平静。"
    ]
  },
  {
    "id": 67,
    "category": "Inner world",
    "words": [
      "cisza",
      "silence",
      "тишина",
      "安静"
    ],
    "pinyin": "ānjìng",
    "examples": [
      "Cisza w bibliotece pomaga mi się skupić.",
      "The silence in the library helps me concentrate.",
      "Тишина в библиотеке помогает мне сосредоточиться.",
      "图书馆里的安静让我能集中注意力。"
    ]
  },
  {
    "id": 68,
    "category": "Inner world",
    "words": [
      "chaos",
      "chaos",
      "хаос",
      "混乱"
    ],
    "pinyin": "hùnluàn",
    "examples": [
      "Na moim biurku panuje chaos, ale wiem, gdzie wszystko jest.",
      "My desk is chaos, but I know where everything is.",
      "На моём столе хаос, но я знаю, где что лежит.",
      "我的书桌一片混乱，但我知道每样东西在哪儿。"
    ]
  },
  {
    "id": 69,
    "category": "Inner world",
    "words": [
      "stres",
      "stress",
      "стресс",
      "压力"
    ],
    "pinyin": "yālì",
    "examples": [
      "Zbyt wiele terminów wywołuje u mnie stres.",
      "Too many deadlines cause me stress.",
      "Слишком много сроков вызывают у меня стресс.",
      "太多截止日期让我感到压力。"
    ]
  },
  {
    "id": 70,
    "category": "Inner world",
    "words": [
      "energia",
      "energy",
      "энергия",
      "精力"
    ],
    "pinyin": "jīnglì",
    "examples": [
      "Po dobrze przespanej nocy mam więcej energii.",
      "After a good night's sleep, I have more energy.",
      "После хорошего сна у меня больше энергии.",
      "睡个好觉之后，我更有精力。"
    ]
  },
  {
    "id": 71,
    "category": "Inner world",
    "words": [
      "odpoczynek",
      "rest",
      "отдых",
      "休息"
    ],
    "pinyin": "xiūxi",
    "examples": [
      "Po długiej podróży potrzebowaliśmy odpoczynku.",
      "After the long journey, we needed rest.",
      "После долгой дороги нам нужен был отдых.",
      "长途旅行后，我们需要休息。"
    ]
  },
  {
    "id": 72,
    "category": "Inner world",
    "words": [
      "sen",
      "sleep",
      "сон",
      "睡眠"
    ],
    "pinyin": "shuìmián",
    "examples": [
      "Potrzebuję więcej snu i mniej nocnych filmików.",
      "I need more sleep and fewer late-night videos.",
      "Мне нужно больше сна и меньше ночных видео.",
      "我需要更多睡眠，少在深夜看视频。"
    ]
  },
  {
    "id": 73,
    "category": "Inner world",
    "words": [
      "nuda",
      "boredom",
      "скука",
      "无聊"
    ],
    "pinyin": "wúliáo",
    "examples": [
      "Zaczęłam rysować, żeby uciec od nudy.",
      "I started drawing to escape boredom.",
      "Я начала рисовать, чтобы избавиться от скуки.",
      "我开始画画，摆脱无聊。"
    ]
  },
  {
    "id": 74,
    "category": "Inner world",
    "words": [
      "duma",
      "pride",
      "гордость",
      "自豪"
    ],
    "pinyin": "zìháo",
    "examples": [
      "Poczułam dumę, gdy skończyłam projekt.",
      "I felt pride when I finished the project.",
      "Я почувствовала гордость, когда закончила проект.",
      "完成项目时，我感到自豪。"
    ]
  },
  {
    "id": 75,
    "category": "Inner world",
    "words": [
      "zazdrość",
      "jealousy",
      "ревность",
      "嫉妒"
    ],
    "pinyin": "jídù",
    "examples": [
      "Zazdrość może zniszczyć związek.",
      "Jealousy can damage a relationship.",
      "Ревность может разрушить отношения.",
      "嫉妒会伤害一段关系。"
    ]
  },
  {
    "id": 76,
    "category": "Inner world",
    "words": [
      "niespodzianka",
      "surprise",
      "сюрприз",
      "惊喜"
    ],
    "pinyin": "jīngxǐ",
    "examples": [
      "Przyjęcie było całkowitą niespodzianką.",
      "The party was a complete surprise.",
      "Вечеринка стала полным сюрпризом.",
      "这场聚会完全是个惊喜。"
    ]
  },
  {
    "id": 77,
    "category": "Inner world",
    "words": [
      "nawyk",
      "a habit",
      "привычка",
      "习惯"
    ],
    "pinyin": "xíguàn",
    "examples": [
      "Czytanie przed snem stało się nawykiem.",
      "Reading before bed has become a habit.",
      "Чтение перед сном стало привычкой.",
      "睡前阅读已经成了习惯。"
    ]
  },
  {
    "id": 78,
    "category": "Inner world",
    "words": [
      "wymówka",
      "an excuse",
      "отговорка",
      "借口"
    ],
    "pinyin": "jièkǒu",
    "examples": [
      "Muszę się uczyć, a nie wymyślać kolejną wymówkę.",
      "I need to study, not invent another excuse.",
      "Мне нужно учиться, а не придумывать очередную отговорку.",
      "我需要学习，而不是再找一个借口。"
    ]
  },
  {
    "id": 79,
    "category": "Inner world",
    "words": [
      "opinia",
      "an opinion",
      "мнение",
      "意见"
    ],
    "pinyin": "yìjiàn",
    "examples": [
      "Moim zdaniem drugi projekt jest czytelniejszy.",
      "In my opinion, the second design is clearer.",
      "По моему мнению, второй вариант понятнее.",
      "我的意见是，第二个设计更清楚。"
    ]
  },
  {
    "id": 80,
    "category": "Everyday things",
    "words": [
      "książka",
      "a book",
      "книга",
      "书"
    ],
    "pinyin": "shū",
    "examples": [
      "Pożyczyłam książkę z biblioteki.",
      "I borrowed a book from the library.",
      "Я взяла книгу в библиотеке.",
      "我从图书馆借了一本书。"
    ]
  },
  {
    "id": 81,
    "category": "Everyday things",
    "words": [
      "zeszyt",
      "a notebook",
      "тетрадь",
      "笔记本"
    ],
    "pinyin": "bǐjìběn",
    "examples": [
      "Zapisuję nowe słowa w zeszycie.",
      "I write new words in a notebook.",
      "Я записываю новые слова в тетрадь.",
      "我把新单词写在笔记本里。"
    ]
  },
  {
    "id": 82,
    "category": "Everyday things",
    "words": [
      "długopis",
      "a pen",
      "ручка",
      "圆珠笔"
    ],
    "pinyin": "yuánzhūbǐ",
    "examples": [
      "Mogę pożyczyć twój długopis?",
      "Can I borrow your pen?",
      "Можно одолжить твою ручку?",
      "我可以借一下你的圆珠笔吗？"
    ]
  },
  {
    "id": 83,
    "category": "Everyday things",
    "words": [
      "ołówek",
      "a pencil",
      "карандаш",
      "铅笔"
    ],
    "pinyin": "qiānbǐ",
    "examples": [
      "Narysuj kontur ołówkiem.",
      "Draw the outline with a pencil.",
      "Нарисуй контур карандашом.",
      "用铅笔画出轮廓。"
    ]
  },
  {
    "id": 84,
    "category": "Everyday things",
    "words": [
      "biurko",
      "a desk",
      "письменный стол",
      "书桌"
    ],
    "pinyin": "shūzhuō",
    "examples": [
      "Moje biurko stoi przy oknie.",
      "My desk is next to the window.",
      "Мой письменный стол стоит у окна.",
      "我的书桌在窗边。"
    ]
  },
  {
    "id": 85,
    "category": "Everyday things",
    "words": [
      "krzesło",
      "a chair",
      "стул",
      "椅子"
    ],
    "pinyin": "yǐzi",
    "examples": [
      "To krzesło jest wystarczająco wygodne na długie lekcje.",
      "This chair is comfortable enough for long lessons.",
      "Этот стул достаточно удобен для долгих уроков.",
      "这把椅子很舒服，适合上长课。"
    ]
  },
  {
    "id": 86,
    "category": "Everyday things",
    "words": [
      "stół",
      "a table",
      "стол",
      "桌子"
    ],
    "pinyin": "zhuōzi",
    "examples": [
      "Nakrywamy do stołu przed kolacją.",
      "We set the table before dinner.",
      "Мы накрываем на стол перед ужином.",
      "晚餐前，我们摆好桌子。"
    ]
  },
  {
    "id": 87,
    "category": "Everyday things",
    "words": [
      "łóżko",
      "a bed",
      "кровать",
      "床"
    ],
    "pinyin": "chuáng",
    "examples": [
      "Wczoraj wieczorem wcześnie położyłam się do łóżka.",
      "I went to bed early last night.",
      "Вчера вечером я рано легла в кровать.",
      "昨晚我很早就上床了。"
    ]
  },
  {
    "id": 88,
    "category": "Everyday things",
    "words": [
      "poduszka",
      "a pillow",
      "подушка",
      "枕头"
    ],
    "pinyin": "zhěntou",
    "examples": [
      "Ta poduszka jest dla mnie za miękka.",
      "This pillow is too soft for me.",
      "Эта подушка для меня слишком мягкая.",
      "这个枕头对我来说太软了。"
    ]
  },
  {
    "id": 89,
    "category": "Everyday things",
    "words": [
      "koc",
      "a blanket",
      "одеяло",
      "毯子"
    ],
    "pinyin": "tǎnzi",
    "examples": [
      "Otuliłam się kocem i otworzyłam książkę.",
      "I wrapped myself in a blanket and opened a book.",
      "Я завернулась в одеяло и открыла книгу.",
      "我裹着毯子，打开了一本书。"
    ]
  },
  {
    "id": 90,
    "category": "Everyday things",
    "words": [
      "lampa",
      "a lamp",
      "лампа",
      "灯"
    ],
    "pinyin": "dēng",
    "examples": [
      "Włącz lampę, żeby móc czytać.",
      "Turn on the lamp so you can read.",
      "Включи лампу, чтобы можно было читать.",
      "打开灯，这样你就能看书了。"
    ]
  },
  {
    "id": 91,
    "category": "Everyday things",
    "words": [
      "lustro",
      "a mirror",
      "зеркало",
      "镜子"
    ],
    "pinyin": "jìngzi",
    "examples": [
      "Sprawdziłam fryzurę w lustrze.",
      "I checked my hair in the mirror.",
      "Я посмотрела на свою причёску в зеркало.",
      "我照镜子看了看头发。"
    ]
  },
  {
    "id": 92,
    "category": "Everyday things",
    "words": [
      "okno",
      "a window",
      "окно",
      "窗户"
    ],
    "pinyin": "chuānghu",
    "examples": [
      "Otwórz okno, żeby wpuścić świeże powietrze.",
      "Open the window to let some fresh air in.",
      "Открой окно, чтобы впустить свежий воздух.",
      "打开窗户，让新鲜空气进来。"
    ]
  },
  {
    "id": 93,
    "category": "Everyday things",
    "words": [
      "drzwi",
      "a door",
      "дверь",
      "门"
    ],
    "pinyin": "mén",
    "examples": [
      "Zamknij drzwi po cichu.",
      "Please close the door quietly.",
      "Пожалуйста, закрой дверь тихо.",
      "请轻轻关门。"
    ]
  },
  {
    "id": 94,
    "category": "Everyday things",
    "words": [
      "klucz",
      "a key",
      "ключ",
      "钥匙"
    ],
    "pinyin": "yàoshi",
    "examples": [
      "Zostawiłam klucz w kieszeni płaszcza.",
      "I left the key in my coat pocket.",
      "Я оставила ключ в кармане пальто.",
      "我把钥匙放在大衣口袋里了。"
    ]
  },
  {
    "id": 95,
    "category": "Everyday things",
    "words": [
      "torba",
      "a bag",
      "сумка",
      "包"
    ],
    "pinyin": "bāo",
    "examples": [
      "Ta torba jest wystarczająco duża na mój laptop.",
      "This bag is big enough for my laptop.",
      "Эта сумка достаточно большая для моего ноутбука.",
      "这个包足够大，能装下我的笔记本电脑。"
    ]
  },
  {
    "id": 96,
    "category": "Everyday things",
    "words": [
      "portfel",
      "a wallet",
      "кошелёк",
      "钱包"
    ],
    "pinyin": "qiánbāo",
    "examples": [
      "Mój portfel jest w przedniej kieszeni torby.",
      "My wallet is in the front pocket of my bag.",
      "Мой кошелёк в переднем кармане сумки.",
      "我的钱包在包前面的口袋里。"
    ]
  },
  {
    "id": 97,
    "category": "Everyday things",
    "words": [
      "parasol",
      "an umbrella",
      "зонт",
      "雨伞"
    ],
    "pinyin": "yǔsǎn",
    "examples": [
      "Jutro ma padać, więc wezmę parasol.",
      "It will rain tomorrow, so I will take an umbrella.",
      "Завтра будет дождь, поэтому я возьму зонт.",
      "明天会下雨，所以我要带雨伞。"
    ]
  },
  {
    "id": 98,
    "category": "Everyday things",
    "words": [
      "telefon",
      "a phone",
      "телефон",
      "手机"
    ],
    "pinyin": "shǒujī",
    "examples": [
      "Bateria w moim telefonie jest prawie rozładowana.",
      "My phone battery is almost empty.",
      "Батарея моего телефона почти разрядилась.",
      "我的手机快没电了。"
    ]
  },
  {
    "id": 99,
    "category": "Everyday things",
    "words": [
      "komputer",
      "a computer",
      "компьютер",
      "电脑"
    ],
    "pinyin": "diànnǎo",
    "examples": [
      "Używam komputera do ćwiczenia pisania.",
      "I use my computer to practise writing.",
      "Я использую компьютер, чтобы практиковаться в письме.",
      "我用电脑练习写作。"
    ]
  },
  {
    "id": 100,
    "category": "Everyday things",
    "words": [
      "klawiatura",
      "a keyboard",
      "клавиатура",
      "键盘"
    ],
    "pinyin": "jiànpán",
    "examples": [
      "Cicha klawiatura ułatwia pracę nocą.",
      "A quiet keyboard makes late-night work easier.",
      "Тихая клавиатура облегчает работу ночью.",
      "安静的键盘让深夜工作更方便。"
    ]
  },
  {
    "id": 101,
    "category": "Everyday things",
    "words": [
      "ekran",
      "a screen",
      "экран",
      "屏幕"
    ],
    "pinyin": "píngmù",
    "examples": [
      "Ekran jest za jasny w tym ciemnym pokoju.",
      "The screen is too bright for this dark room.",
      "Экран слишком яркий для этой тёмной комнаты.",
      "在这个暗房间里，屏幕太亮了。"
    ]
  },
  {
    "id": 102,
    "category": "Everyday things",
    "words": [
      "aparat fotograficzny",
      "a camera",
      "фотоаппарат",
      "相机"
    ],
    "pinyin": "xiàngjī",
    "examples": [
      "Zabrałam aparat fotograficzny w podróż.",
      "I took my camera on the trip.",
      "Я взяла фотоаппарат в поездку.",
      "我旅行时带了相机。"
    ]
  },
  {
    "id": 103,
    "category": "Everyday things",
    "words": [
      "zegar",
      "a clock",
      "часы",
      "时钟"
    ],
    "pinyin": "shízhōng",
    "examples": [
      "Zegar na ścianie spóźnia się o pięć minut.",
      "The clock on the wall is five minutes slow.",
      "Часы на стене отстают на пять минут.",
      "墙上的时钟慢了五分钟。"
    ]
  },
  {
    "id": 104,
    "category": "Everyday things",
    "words": [
      "zegarek",
      "a watch",
      "наручные часы",
      "手表"
    ],
    "pinyin": "shǒubiǎo",
    "examples": [
      "Mój zegarek zatrzymał się podczas spotkania.",
      "My watch stopped during the meeting.",
      "Мои наручные часы остановились во время встречи.",
      "开会时，我的手表停了。"
    ]
  },
  {
    "id": 105,
    "category": "Everyday things",
    "words": [
      "filiżanka",
      "a cup",
      "чашка",
      "杯子"
    ],
    "pinyin": "bēizi",
    "examples": [
      "Ogrzałam dłonie o filiżankę herbaty.",
      "I warmed my hands around a cup of tea.",
      "Я согрела руки о чашку чая.",
      "我捧着一杯茶暖手。"
    ]
  },
  {
    "id": 106,
    "category": "Everyday things",
    "words": [
      "talerz",
      "a plate",
      "тарелка",
      "盘子"
    ],
    "pinyin": "pánzi",
    "examples": [
      "Połóż czysty talerz na półce.",
      "Put the clean plate on the shelf.",
      "Поставь чистую тарелку на полку.",
      "把干净的盘子放到架子上。"
    ]
  },
  {
    "id": 107,
    "category": "Everyday things",
    "words": [
      "łyżka",
      "a spoon",
      "ложка",
      "勺子"
    ],
    "pinyin": "sháozi",
    "examples": [
      "Użyj łyżki do wymieszania zupy.",
      "Use a spoon to stir the soup.",
      "Помешай суп ложкой.",
      "用勺子搅拌汤。"
    ]
  },
  {
    "id": 108,
    "category": "Everyday things",
    "words": [
      "widelec",
      "a fork",
      "вилка",
      "叉子"
    ],
    "pinyin": "chāzi",
    "examples": [
      "Upuściłam widelec pod stół.",
      "I dropped my fork under the table.",
      "Я уронила вилку под стол.",
      "我的叉子掉到桌子下面了。"
    ]
  },
  {
    "id": 109,
    "category": "Everyday things",
    "words": [
      "nóż",
      "a knife",
      "нож",
      "刀"
    ],
    "pinyin": "dāo",
    "examples": [
      "Ten nóż łatwo kroi chleb.",
      "This knife cuts bread easily.",
      "Этим ножом легко резать хлеб.",
      "这把刀切面包很轻松。"
    ]
  },
  {
    "id": 110,
    "category": "Everyday things",
    "words": [
      "butelka",
      "a bottle",
      "бутылка",
      "瓶子"
    ],
    "pinyin": "píngzi",
    "examples": [
      "Napełnij butelkę, zanim wyjdziemy.",
      "Fill the bottle before we leave.",
      "Наполни бутылку, прежде чем мы уйдём.",
      "出发前把瓶子装满。"
    ]
  },
  {
    "id": 111,
    "category": "Everyday things",
    "words": [
      "pudełko",
      "a box",
      "коробка",
      "盒子"
    ],
    "pinyin": "hézi",
    "examples": [
      "Kot woli pudełko od drogiej zabawki.",
      "The cat prefers the box to the expensive toy.",
      "Кот предпочитает коробку дорогой игрушке.",
      "猫更喜欢盒子，而不是昂贵的玩具。"
    ]
  },
  {
    "id": 112,
    "category": "Everyday things",
    "words": [
      "świeca",
      "a candle",
      "свеча",
      "蜡烛"
    ],
    "pinyin": "làzhú",
    "examples": [
      "Zapaliliśmy świecę, gdy wyłączono prąd.",
      "We lit a candle when the power went out.",
      "Мы зажгли свечу, когда отключили электричество.",
      "停电时，我们点了一支蜡烛。"
    ]
  },
  {
    "id": 113,
    "category": "Everyday things",
    "words": [
      "ręcznik",
      "a towel",
      "полотенце",
      "毛巾"
    ],
    "pinyin": "máojīn",
    "examples": [
      "Powieś ręcznik, żeby wysechł.",
      "Hang the towel up to dry.",
      "Повесь полотенце сушиться.",
      "把毛巾挂起来晾干。"
    ]
  },
  {
    "id": 114,
    "category": "Everyday things",
    "words": [
      "szczoteczka do zębów",
      "a toothbrush",
      "зубная щётка",
      "牙刷"
    ],
    "pinyin": "yáshuā",
    "examples": [
      "Zapomniałam spakować szczoteczkę do zębów.",
      "I forgot to pack my toothbrush.",
      "Я забыла взять зубную щётку.",
      "我忘记把牙刷放进行李了。"
    ]
  },
  {
    "id": 115,
    "category": "Everyday things",
    "words": [
      "mydło",
      "soap",
      "мыло",
      "肥皂"
    ],
    "pinyin": "féizào",
    "examples": [
      "Umyj ręce mydłem.",
      "Wash your hands with soap.",
      "Вымой руки с мылом.",
      "用肥皂洗手。"
    ]
  },
  {
    "id": 116,
    "category": "Everyday things",
    "words": [
      "koszula",
      "a shirt",
      "рубашка",
      "衬衫"
    ],
    "pinyin": "chènshān",
    "examples": [
      "Wyprasowałam koszulę przed rozmową kwalifikacyjną.",
      "I ironed my shirt before the interview.",
      "Я погладила рубашку перед собеседованием.",
      "面试前，我熨好了衬衫。"
    ]
  },
  {
    "id": 117,
    "category": "Everyday things",
    "words": [
      "płaszcz",
      "a coat",
      "пальто",
      "大衣"
    ],
    "pinyin": "dàyī",
    "examples": [
      "Weź płaszcz, na dworze jest zimno.",
      "Take your coat; it is cold outside.",
      "Возьми пальто, на улице холодно.",
      "带上大衣，外面很冷。"
    ]
  },
  {
    "id": 118,
    "category": "Everyday things",
    "words": [
      "kapelusz",
      "a hat",
      "шляпа",
      "帽子"
    ],
    "pinyin": "màozi",
    "examples": [
      "Wiatr porwał mój kapelusz.",
      "The wind blew my hat away.",
      "Ветер унёс мою шляпу.",
      "风把我的帽子吹走了。"
    ]
  },
  {
    "id": 119,
    "category": "Everyday things",
    "words": [
      "szalik",
      "a scarf",
      "шарф",
      "围巾"
    ],
    "pinyin": "wéijīn",
    "examples": [
      "Ten szalik ogrzewa mi szyję.",
      "This scarf keeps my neck warm.",
      "Этот шарф согревает мне шею.",
      "这条围巾让我的脖子很暖和。"
    ]
  },
  {
    "id": 120,
    "category": "Outside & beyond",
    "words": [
      "kot",
      "a cat",
      "кот",
      "猫"
    ],
    "pinyin": "māo",
    "examples": [
      "Kot znowu śpi na moich notatkach.",
      "The cat is sleeping on my notes again.",
      "Кот опять спит на моих записях.",
      "猫又睡在我的笔记上了。"
    ]
  },
  {
    "id": 121,
    "category": "Outside & beyond",
    "words": [
      "pies",
      "a dog",
      "собака",
      "狗"
    ],
    "pinyin": "gǒu",
    "examples": [
      "Pies potrzebuje spaceru przed śniadaniem.",
      "The dog needs a walk before breakfast.",
      "Собаке нужна прогулка перед завтраком.",
      "狗需要在早餐前出去散步。"
    ]
  },
  {
    "id": 122,
    "category": "Outside & beyond",
    "words": [
      "ptak",
      "a bird",
      "птица",
      "鸟"
    ],
    "pinyin": "niǎo",
    "examples": [
      "Ptak zbudował gniazdo za naszym oknem.",
      "A bird built a nest outside our window.",
      "Птица свила гнездо за нашим окном.",
      "一只鸟在我们窗外筑了巢。"
    ]
  },
  {
    "id": 123,
    "category": "Outside & beyond",
    "words": [
      "ryba",
      "a fish",
      "рыба",
      "鱼"
    ],
    "pinyin": "yú",
    "examples": [
      "Mała ryba przepłynęła pod łódką.",
      "A small fish swam under the boat.",
      "Маленькая рыба проплыла под лодкой.",
      "一条小鱼游到了船下面。"
    ]
  },
  {
    "id": 124,
    "category": "Outside & beyond",
    "words": [
      "koń",
      "a horse",
      "лошадь",
      "马"
    ],
    "pinyin": "mǎ",
    "examples": [
      "Koń je trawę na polu.",
      "The horse is eating grass in the field.",
      "Лошадь ест траву в поле.",
      "马正在田里吃草。"
    ]
  },
  {
    "id": 125,
    "category": "Outside & beyond",
    "words": [
      "królik",
      "a rabbit",
      "кролик",
      "兔子"
    ],
    "pinyin": "tùzi",
    "examples": [
      "Królik schował się za krzakiem.",
      "The rabbit hid behind the bush.",
      "Кролик спрятался за кустом.",
      "兔子躲到了灌木后面。"
    ]
  },
  {
    "id": 126,
    "category": "Outside & beyond",
    "words": [
      "lis",
      "a fox",
      "лиса",
      "狐狸"
    ],
    "pinyin": "húli",
    "examples": [
      "Widzieliśmy lisa przy lesie.",
      "We saw a fox near the forest.",
      "Мы видели лису возле леса.",
      "我们在森林附近看见了一只狐狸。"
    ]
  },
  {
    "id": 127,
    "category": "Outside & beyond",
    "words": [
      "niedźwiedź",
      "a bear",
      "медведь",
      "熊"
    ],
    "pinyin": "xióng",
    "examples": [
      "Niedźwiedź zostawił ślady na śniegu.",
      "A bear left tracks in the snow.",
      "Медведь оставил следы на снегу.",
      "一只熊在雪地上留下了脚印。"
    ]
  },
  {
    "id": 128,
    "category": "Outside & beyond",
    "words": [
      "wilk",
      "a wolf",
      "волк",
      "狼"
    ],
    "pinyin": "láng",
    "examples": [
      "Słyszeliśmy wilka wyjącego w oddali.",
      "We heard a wolf howling in the distance.",
      "Мы слышали, как вдали выл волк.",
      "我们听见远处有狼在嚎叫。"
    ]
  },
  {
    "id": 129,
    "category": "Outside & beyond",
    "words": [
      "mysz",
      "a mouse",
      "мышь",
      "老鼠"
    ],
    "pinyin": "lǎoshǔ",
    "examples": [
      "Mysz przebiegła za szafką.",
      "A mouse ran behind the cupboard.",
      "Мышь пробежала за шкафом.",
      "一只老鼠跑到了柜子后面。"
    ]
  },
  {
    "id": 130,
    "category": "Outside & beyond",
    "words": [
      "motyl",
      "a butterfly",
      "бабочка",
      "蝴蝶"
    ],
    "pinyin": "húdié",
    "examples": [
      "Motyl usiadł na kwiatku.",
      "A butterfly landed on the flower.",
      "Бабочка села на цветок.",
      "一只蝴蝶落在花上。"
    ]
  },
  {
    "id": 131,
    "category": "Outside & beyond",
    "words": [
      "pszczoła",
      "a bee",
      "пчела",
      "蜜蜂"
    ],
    "pinyin": "mìfēng",
    "examples": [
      "Pszczoła przeleciała obok mojej filiżanki.",
      "A bee flew past my cup.",
      "Пчела пролетела мимо моей чашки.",
      "一只蜜蜂从我的杯子旁飞过。"
    ]
  },
  {
    "id": 132,
    "category": "Outside & beyond",
    "words": [
      "drzewo",
      "a tree",
      "дерево",
      "树"
    ],
    "pinyin": "shù",
    "examples": [
      "Odpoczywaliśmy w cieniu drzewa.",
      "We rested in the shade of a tree.",
      "Мы отдыхали в тени дерева.",
      "我们在树荫下休息。"
    ]
  },
  {
    "id": 133,
    "category": "Outside & beyond",
    "words": [
      "kwiat",
      "a flower",
      "цветок",
      "花"
    ],
    "pinyin": "huā",
    "examples": [
      "Ten kwiat potrzebuje więcej światła słonecznego.",
      "This flower needs more sunlight.",
      "Этому цветку нужно больше солнечного света.",
      "这朵花需要更多阳光。"
    ]
  },
  {
    "id": 134,
    "category": "Outside & beyond",
    "words": [
      "liść",
      "a leaf",
      "лист",
      "叶子"
    ],
    "pinyin": "yèzi",
    "examples": [
      "Żółty liść spadł na mój zeszyt.",
      "A yellow leaf fell onto my notebook.",
      "Жёлтый лист упал на мою тетрадь.",
      "一片黄叶落在我的笔记本上。"
    ]
  },
  {
    "id": 135,
    "category": "Outside & beyond",
    "words": [
      "las",
      "a forest",
      "лес",
      "森林"
    ],
    "pinyin": "sēnlín",
    "examples": [
      "Szliśmy wąską ścieżką przez las.",
      "We followed a narrow path through the forest.",
      "Мы шли по узкой тропинке через лес.",
      "我们沿着一条小路穿过森林。"
    ]
  },
  {
    "id": 136,
    "category": "Outside & beyond",
    "words": [
      "góra",
      "a mountain",
      "гора",
      "山"
    ],
    "pinyin": "shān",
    "examples": [
      "Szczyt góry był pokryty śniegiem.",
      "The top of the mountain was covered in snow.",
      "Вершина горы была покрыта снегом.",
      "山顶覆盖着白雪。"
    ]
  },
  {
    "id": 137,
    "category": "Outside & beyond",
    "words": [
      "rzeka",
      "a river",
      "река",
      "河"
    ],
    "pinyin": "hé",
    "examples": [
      "Rzeka płynie przez miasto.",
      "The river flows through the city.",
      "Река течёт через город.",
      "这条河流经城市。"
    ]
  },
  {
    "id": 138,
    "category": "Outside & beyond",
    "words": [
      "jezioro",
      "a lake",
      "озеро",
      "湖"
    ],
    "pinyin": "hú",
    "examples": [
      "Pływaliśmy w jeziorze przed obiadem.",
      "We swam in the lake before lunch.",
      "Мы купались в озере перед обедом.",
      "午饭前，我们在湖里游泳。"
    ]
  },
  {
    "id": 139,
    "category": "Outside & beyond",
    "words": [
      "morze",
      "the sea",
      "море",
      "海"
    ],
    "pinyin": "hǎi",
    "examples": [
      "Z mojego pokoju słychać morze.",
      "I can hear the sea from my room.",
      "Из моей комнаты слышно море.",
      "在我的房间里能听见海的声音。"
    ]
  },
  {
    "id": 140,
    "category": "Outside & beyond",
    "words": [
      "deszcz",
      "rain",
      "дождь",
      "雨"
    ],
    "pinyin": "yǔ",
    "examples": [
      "Deszcz zaczął padać, gdy wyszliśmy z domu.",
      "The rain started just as we left home.",
      "Дождь начался, как только мы вышли из дома.",
      "我们刚出门就下雨了。"
    ]
  },
  {
    "id": 141,
    "category": "Outside & beyond",
    "words": [
      "śnieg",
      "snow",
      "снег",
      "雪"
    ],
    "pinyin": "xuě",
    "examples": [
      "Świeży śnieg pokrył ogród.",
      "Fresh snow covered the garden.",
      "Свежий снег покрыл сад.",
      "新下的雪覆盖了花园。"
    ]
  },
  {
    "id": 142,
    "category": "Outside & beyond",
    "words": [
      "wiatr",
      "wind",
      "ветер",
      "风"
    ],
    "pinyin": "fēng",
    "examples": [
      "Wiatr utrudniał mi jazdę na rowerze.",
      "The wind made it difficult to ride my bicycle.",
      "Из-за ветра было трудно ехать на велосипеде.",
      "风让我骑自行车变得很吃力。"
    ]
  },
  {
    "id": 143,
    "category": "Outside & beyond",
    "words": [
      "chmura",
      "a cloud",
      "облако",
      "云"
    ],
    "pinyin": "yún",
    "examples": [
      "Chmura na chwilę zasłoniła słońce.",
      "A cloud hid the sun for a moment.",
      "Облако на минуту закрыло солнце.",
      "一朵云暂时遮住了太阳。"
    ]
  },
  {
    "id": 144,
    "category": "Outside & beyond",
    "words": [
      "słońce",
      "the sun",
      "солнце",
      "太阳"
    ],
    "pinyin": "tàiyáng",
    "examples": [
      "Dzisiaj jest gorąco i cały czas świeci słońce.",
      "It is hot today, and the sun has been shining all day.",
      "Сегодня жарко, и солнце светит весь день.",
      "今天很热，太阳一整天都在照耀。"
    ]
  },
  {
    "id": 145,
    "category": "Outside & beyond",
    "words": [
      "księżyc",
      "the moon",
      "луна",
      "月亮"
    ],
    "pinyin": "yuèliang",
    "examples": [
      "Księżyc jasno dziś świeci.",
      "The moon looks bright tonight.",
      "Сегодня ночью луна ярко светит.",
      "今晚的月亮很明亮。"
    ]
  },
  {
    "id": 146,
    "category": "Outside & beyond",
    "words": [
      "gwiazda",
      "a star",
      "звезда",
      "星星"
    ],
    "pinyin": "xīngxing",
    "examples": [
      "Zauważyłam jasną gwiazdę nad dachem.",
      "I spotted a bright star above the roof.",
      "Я заметила яркую звезду над крышей.",
      "我看见屋顶上方有一颗明亮的星星。"
    ]
  },
  {
    "id": 147,
    "category": "Outside & beyond",
    "words": [
      "niebo",
      "the sky",
      "небо",
      "天空"
    ],
    "pinyin": "tiānkōng",
    "examples": [
      "Po zachodzie słońca niebo zrobiło się różowe.",
      "The sky turned pink after sunset.",
      "После заката небо стало розовым.",
      "日落后，天空变成了粉色。"
    ]
  },
  {
    "id": 148,
    "category": "Outside & beyond",
    "words": [
      "plaża",
      "a beach",
      "пляж",
      "海滩"
    ],
    "pinyin": "hǎitān",
    "examples": [
      "Spacerowaliśmy po plaży o zachodzie słońca.",
      "We walked along the beach at sunset.",
      "Мы гуляли по пляжу на закате.",
      "日落时，我们沿着海滩散步。"
    ]
  },
  {
    "id": 149,
    "category": "Outside & beyond",
    "words": [
      "ogród",
      "a garden",
      "сад",
      "花园"
    ],
    "pinyin": "huāyuán",
    "examples": [
      "Uprawiam pomidory w ogrodzie.",
      "I grow tomatoes in my garden.",
      "Я выращиваю помидоры в саду.",
      "我在花园里种西红柿。"
    ]
  },
  {
    "id": 150,
    "category": "Places to go",
    "words": [
      "podróż",
      "a journey",
      "путешествие",
      "旅行"
    ],
    "pinyin": "lǚxíng",
    "examples": [
      "Podróż trwała dłużej, niż się spodziewaliśmy.",
      "The journey took longer than we expected.",
      "Путешествие заняло больше времени, чем мы ожидали.",
      "这次旅行比我们预想的时间更长。"
    ]
  },
  {
    "id": 151,
    "category": "Places to go",
    "words": [
      "bilet",
      "a ticket",
      "билет",
      "票"
    ],
    "pinyin": "piào",
    "examples": [
      "Kupiłam bilet przez internet.",
      "I bought my ticket online.",
      "Я купила билет онлайн.",
      "我在网上买了票。"
    ]
  },
  {
    "id": 152,
    "category": "Places to go",
    "words": [
      "paszport",
      "a passport",
      "паспорт",
      "护照"
    ],
    "pinyin": "hùzhào",
    "examples": [
      "Sprawdź, czy paszport jest w torbie.",
      "Check that your passport is in your bag.",
      "Проверь, лежит ли паспорт в сумке.",
      "检查一下护照是不是在包里。"
    ]
  },
  {
    "id": 153,
    "category": "Places to go",
    "words": [
      "walizka",
      "a suitcase",
      "чемодан",
      "行李箱"
    ],
    "pinyin": "xínglixiāng",
    "examples": [
      "Moja walizka jest ciężka, ale połowę zajmują książki.",
      "My suitcase is heavy, but half of it is books.",
      "Мой чемодан тяжёлый, но половину занимают книги.",
      "我的行李箱很重，不过里面一半是书。"
    ]
  },
  {
    "id": 154,
    "category": "Places to go",
    "words": [
      "mapa",
      "a map",
      "карта",
      "地图"
    ],
    "pinyin": "dìtú",
    "examples": [
      "Użyliśmy mapy, żeby znaleźć stację.",
      "We used a map to find the station.",
      "Мы нашли станцию по карте.",
      "我们用地图找到了车站。"
    ]
  },
  {
    "id": 155,
    "category": "Places to go",
    "words": [
      "pociąg",
      "a train",
      "поезд",
      "火车"
    ],
    "pinyin": "huǒchē",
    "examples": [
      "Pociąg odjeżdża za dziesięć minut.",
      "The train leaves in ten minutes.",
      "Поезд отправляется через десять минут.",
      "火车十分钟后出发。"
    ]
  },
  {
    "id": 156,
    "category": "Places to go",
    "words": [
      "autobus",
      "a bus",
      "автобус",
      "公共汽车"
    ],
    "pinyin": "gōnggòng qìchē",
    "examples": [
      "Spóźniłam się na autobus o kilka sekund.",
      "I missed the bus by a few seconds.",
      "Я опоздала на автобус на несколько секунд.",
      "我差几秒就赶上公共汽车了。"
    ]
  },
  {
    "id": 157,
    "category": "Places to go",
    "words": [
      "rower",
      "a bicycle",
      "велосипед",
      "自行车"
    ],
    "pinyin": "zìxíngchē",
    "examples": [
      "Jeżdżę rowerem do biblioteki.",
      "I ride my bicycle to the library.",
      "Я езжу в библиотеку на велосипеде.",
      "我骑自行车去图书馆。"
    ]
  },
  {
    "id": 158,
    "category": "Places to go",
    "words": [
      "samochód",
      "a car",
      "машина",
      "汽车"
    ],
    "pinyin": "qìchē",
    "examples": [
      "Zaparkowaliśmy samochód przy hotelu.",
      "We parked the car near the hotel.",
      "Мы припарковали машину возле отеля.",
      "我们把汽车停在酒店附近。"
    ]
  },
  {
    "id": 159,
    "category": "Places to go",
    "words": [
      "samolot",
      "an airplane",
      "самолёт",
      "飞机"
    ],
    "pinyin": "fēijī",
    "examples": [
      "Samolot wystartował punktualnie.",
      "The airplane took off on time.",
      "Самолёт вылетел вовремя.",
      "飞机准时起飞了。"
    ]
  },
  {
    "id": 160,
    "category": "Places to go",
    "words": [
      "stacja",
      "a station",
      "станция",
      "车站"
    ],
    "pinyin": "chēzhàn",
    "examples": [
      "Spotkajmy się przed stacją.",
      "Let's meet outside the station.",
      "Давай встретимся перед станцией.",
      "我们在车站外面见吧。"
    ]
  },
  {
    "id": 161,
    "category": "Places to go",
    "words": [
      "lotnisko",
      "an airport",
      "аэропорт",
      "机场"
    ],
    "pinyin": "jīchǎng",
    "examples": [
      "Dotarliśmy na lotnisko wcześnie.",
      "We arrived at the airport early.",
      "Мы приехали в аэропорт рано.",
      "我们很早就到机场了。"
    ]
  },
  {
    "id": 162,
    "category": "Places to go",
    "words": [
      "hotel",
      "a hotel",
      "отель",
      "酒店"
    ],
    "pinyin": "jiǔdiàn",
    "examples": [
      "Nasz hotel jest blisko plaży.",
      "Our hotel is close to the beach.",
      "Наш отель находится рядом с пляжем.",
      "我们的酒店离海滩很近。"
    ]
  },
  {
    "id": 163,
    "category": "Places to go",
    "words": [
      "pokój",
      "a room",
      "комната",
      "房间"
    ],
    "pinyin": "fángjiān",
    "examples": [
      "Ten pokój ma piękny widok.",
      "This room has a lovely view.",
      "Из этой комнаты прекрасный вид.",
      "这个房间的景色很好。"
    ]
  },
  {
    "id": 164,
    "category": "Places to go",
    "words": [
      "miasto",
      "a city",
      "город",
      "城市"
    ],
    "pinyin": "chéngshì",
    "examples": [
      "Lubię poznawać nowe miasto pieszo.",
      "I like exploring a new city on foot.",
      "Мне нравится исследовать новый город пешком.",
      "我喜欢步行探索一座新城市。"
    ]
  },
  {
    "id": 165,
    "category": "Places to go",
    "words": [
      "wieś",
      "a village",
      "деревня",
      "村庄"
    ],
    "pinyin": "cūnzhuāng",
    "examples": [
      "Moi dziadkowie mieszkają w małej wsi.",
      "My grandparents live in a small village.",
      "Мои бабушка и дедушка живут в маленькой деревне.",
      "我的爷爷奶奶住在一个小村庄里。"
    ]
  },
  {
    "id": 166,
    "category": "Places to go",
    "words": [
      "ulica",
      "a street",
      "улица",
      "街道"
    ],
    "pinyin": "jiēdào",
    "examples": [
      "Ta ulica jest rano spokojna.",
      "This street is quiet in the morning.",
      "На этой улице утром тихо.",
      "这条街道早上很安静。"
    ]
  },
  {
    "id": 167,
    "category": "Places to go",
    "words": [
      "most",
      "a bridge",
      "мост",
      "桥"
    ],
    "pinyin": "qiáo",
    "examples": [
      "Przeszliśmy przez most, żeby dotrzeć do parku.",
      "We crossed the bridge to reach the park.",
      "Мы перешли мост, чтобы попасть в парк.",
      "我们过了桥，走到了公园。"
    ]
  },
  {
    "id": 168,
    "category": "Places to go",
    "words": [
      "muzeum",
      "a museum",
      "музей",
      "博物馆"
    ],
    "pinyin": "bówùguǎn",
    "examples": [
      "Muzeum jest zamknięte w poniedziałki.",
      "The museum is closed on Mondays.",
      "Музей закрыт по понедельникам.",
      "博物馆星期一不开放。"
    ]
  },
  {
    "id": 169,
    "category": "Places to go",
    "words": [
      "park",
      "a park",
      "парк",
      "公园"
    ],
    "pinyin": "gōngyuán",
    "examples": [
      "Zrobiliśmy piknik w parku.",
      "We had a picnic in the park.",
      "Мы устроили пикник в парке.",
      "我们在公园里野餐。"
    ]
  },
  {
    "id": 170,
    "category": "Life, unscripted",
    "words": [
      "lekcja",
      "a lesson",
      "урок",
      "课"
    ],
    "pinyin": "kè",
    "examples": [
      "Dzisiejsza lekcja dotyczy zamawiania jedzenia.",
      "Today's lesson is about ordering food.",
      "Сегодняшний урок посвящён заказу еды.",
      "今天的课是关于点餐的。"
    ]
  },
  {
    "id": 171,
    "category": "Life, unscripted",
    "words": [
      "język",
      "a language",
      "язык",
      "语言"
    ],
    "pinyin": "yǔyán",
    "examples": [
      "Chcę codziennie używać każdego języka choć przez chwilę.",
      "I want to use each language a little every day.",
      "Я хочу каждый день понемногу пользоваться каждым языком.",
      "我想每天都用一用每种语言。"
    ]
  },
  {
    "id": 172,
    "category": "Life, unscripted",
    "words": [
      "słowo",
      "a word",
      "слово",
      "单词"
    ],
    "pinyin": "dāncí",
    "examples": [
      "Nauczyłam się nowego słowa podczas naszej rozmowy.",
      "I learned a new word during our conversation.",
      "Во время нашего разговора я выучила новое слово.",
      "我们聊天时，我学到了一个新单词。"
    ]
  },
  {
    "id": 173,
    "category": "Life, unscripted",
    "words": [
      "zdanie",
      "a sentence",
      "предложение",
      "句子"
    ],
    "pinyin": "jùzi",
    "examples": [
      "Napisz zdanie z tym czasownikiem.",
      "Write a sentence using this verb.",
      "Напиши предложение с этим глаголом.",
      "用这个动词写一个句子。"
    ]
  },
  {
    "id": 174,
    "category": "Life, unscripted",
    "words": [
      "pytanie",
      "a question",
      "вопрос",
      "问题"
    ],
    "pinyin": "wèntí",
    "examples": [
      "Czy mogę zadać pytanie?",
      "May I ask a question?",
      "Можно задать вопрос?",
      "我可以问一个问题吗？"
    ]
  },
  {
    "id": 175,
    "category": "Life, unscripted",
    "words": [
      "odpowiedź",
      "an answer",
      "ответ",
      "答案"
    ],
    "pinyin": "dá'àn",
    "examples": [
      "Znam odpowiedź, ale potrzebuję chwili, żeby ją wypowiedzieć.",
      "I know the answer, but I need a moment to say it.",
      "Я знаю ответ, но мне нужна минутка, чтобы его произнести.",
      "我知道答案，但需要一点时间说出来。"
    ]
  },
  {
    "id": 176,
    "category": "Life, unscripted",
    "words": [
      "błąd",
      "a mistake",
      "ошибка",
      "错误"
    ],
    "pinyin": "cuòwù",
    "examples": [
      "Znalazłam błąd w pracy domowej.",
      "I found a mistake in my homework.",
      "Я нашла ошибку в домашнем задании.",
      "我在家庭作业里发现了一个错误。"
    ]
  },
  {
    "id": 177,
    "category": "Life, unscripted",
    "words": [
      "plan",
      "a plan",
      "план",
      "计划"
    ],
    "pinyin": "jìhuà",
    "examples": [
      "Mój plan to nauka przed kolacją.",
      "My plan is to study before dinner.",
      "Мой план — позаниматься перед ужином.",
      "我的计划是在晚餐前学习。"
    ]
  },
  {
    "id": 178,
    "category": "Life, unscripted",
    "words": [
      "pomysł",
      "an idea",
      "идея",
      "想法"
    ],
    "pinyin": "xiǎngfǎ",
    "examples": [
      "Zapisałam pomysł, zanim go zapomniałam.",
      "I wrote down the idea before I forgot it.",
      "Я записала идею, пока не забыла её.",
      "我把想法记了下来，免得忘记。"
    ]
  },
  {
    "id": 179,
    "category": "Life, unscripted",
    "words": [
      "decyzja",
      "a decision",
      "решение",
      "决定"
    ],
    "pinyin": "juédìng",
    "examples": [
      "To była trudna decyzja, ale cieszę się, że ją podjęłam.",
      "It was a difficult decision, but I am glad I made it.",
      "Это было трудное решение, но я рада, что его приняла.",
      "这是个艰难的决定，但我很高兴自己做出了决定。"
    ]
  },
  {
    "id": 180,
    "category": "Life, unscripted",
    "words": [
      "termin",
      "a deadline",
      "крайний срок",
      "截止日期"
    ],
    "pinyin": "jiézhǐ rìqī",
    "examples": [
      "Termin jest w piątek, więc zacznę dzisiaj.",
      "The deadline is Friday, so I will start today.",
      "Крайний срок — пятница, поэтому я начну сегодня.",
      "截止日期是星期五，所以我今天就开始。"
    ]
  },
  {
    "id": 181,
    "category": "Life, unscripted",
    "words": [
      "spotkanie",
      "a meeting",
      "встреча",
      "会面"
    ],
    "pinyin": "huìmiàn",
    "examples": [
      "Nasze spotkanie zaczyna się o dziewiątej.",
      "Our meeting starts at nine.",
      "Наша встреча начинается в девять.",
      "我们的会面在九点开始。"
    ]
  },
  {
    "id": 182,
    "category": "Life, unscripted",
    "words": [
      "e-mail",
      "an email",
      "электронное письмо",
      "电子邮件"
    ],
    "pinyin": "diànzǐ yóujiàn",
    "examples": [
      "Wysłałam e-mail z pytaniem o kurs.",
      "I sent an email to ask about the course.",
      "Я отправила электронное письмо с вопросом о курсе.",
      "我发了一封电子邮件，询问课程的情况。"
    ]
  },
  {
    "id": 183,
    "category": "Life, unscripted",
    "words": [
      "wiadomość",
      "a message",
      "сообщение",
      "消息"
    ],
    "pinyin": "xiāoxi",
    "examples": [
      "Zostaw mi wiadomość, jeśli nie odbiorę.",
      "Leave me a message if I do not answer.",
      "Оставь мне сообщение, если я не отвечу.",
      "如果我没接电话，就给我留个消息。"
    ]
  },
  {
    "id": 184,
    "category": "Life, unscripted",
    "words": [
      "hasło",
      "a password",
      "пароль",
      "密码"
    ],
    "pinyin": "mìmǎ",
    "examples": [
      "Znowu zapomniałam hasła.",
      "I forgot my password again.",
      "Я снова забыла пароль.",
      "我又忘了密码。"
    ]
  },
  {
    "id": 185,
    "category": "Life, unscripted",
    "words": [
      "pieniądze",
      "money",
      "деньги",
      "钱"
    ],
    "pinyin": "qián",
    "examples": [
      "Oszczędzam pieniądze na podróż.",
      "I am saving money for a trip.",
      "Я коплю деньги на поездку.",
      "我在存钱准备旅行。"
    ]
  },
  {
    "id": 186,
    "category": "Life, unscripted",
    "words": [
      "czas",
      "time",
      "время",
      "时间"
    ],
    "pinyin": "shíjiān",
    "examples": [
      "Każdego wieczoru znajduję czas na czytanie.",
      "I make time for reading every evening.",
      "Каждый вечер я нахожу время для чтения.",
      "我每天晚上都会留出时间看书。"
    ]
  },
  {
    "id": 187,
    "category": "Life, unscripted",
    "words": [
      "muzyka",
      "music",
      "музыка",
      "音乐"
    ],
    "pinyin": "yīnyuè",
    "examples": [
      "Spokojna muzyka pomaga mi się zrelaksować.",
      "Quiet music helps me relax.",
      "Спокойная музыка помогает мне расслабиться.",
      "轻柔的音乐让我放松。"
    ]
  },
  {
    "id": 188,
    "category": "Life, unscripted",
    "words": [
      "film",
      "a film",
      "фильм",
      "电影"
    ],
    "pinyin": "diànyǐng",
    "examples": [
      "Obejrzeliśmy film z angielskimi napisami.",
      "We watched a film with English subtitles.",
      "Мы посмотрели фильм с английскими субтитрами.",
      "我们看了一部带英文字幕的电影。"
    ]
  },
  {
    "id": 189,
    "category": "Life, unscripted",
    "words": [
      "historia",
      "a story",
      "история",
      "故事"
    ],
    "pinyin": "gùshi",
    "examples": [
      "Opowiedz mi tę historię od początku.",
      "Tell me the story from the beginning.",
      "Расскажи мне эту историю с самого начала.",
      "从头给我讲这个故事吧。"
    ]
  },
  {
    "id": 190,
    "category": "Life, unscripted",
    "words": [
      "obietnica",
      "a promise",
      "обещание",
      "承诺"
    ],
    "pinyin": "chéngnuò",
    "examples": [
      "Dotrzymałam obietnicy i zadzwoniłam do niej.",
      "I kept my promise and called her.",
      "Я сдержала обещание и позвонила ей.",
      "我遵守承诺，给她打了电话。"
    ]
  },
  {
    "id": 191,
    "category": "Life, unscripted",
    "words": [
      "sekret",
      "a secret",
      "секрет",
      "秘密"
    ],
    "pinyin": "mìmì",
    "examples": [
      "Przyjęcie urodzinowe jest sekretem.",
      "The birthday party is a secret.",
      "Вечеринка на день рождения — секрет.",
      "生日聚会是个秘密。"
    ]
  },
  {
    "id": 192,
    "category": "Life, unscripted",
    "words": [
      "marzenie",
      "a dream",
      "мечта",
      "梦想"
    ],
    "pinyin": "mèngxiǎng",
    "examples": [
      "Moim marzeniem jest czytanie powieści w czterech językach.",
      "My dream is to read novels in four languages.",
      "Моя мечта — читать романы на четырёх языках.",
      "我的梦想是用四种语言读小说。"
    ]
  },
  {
    "id": 193,
    "category": "Life, unscripted",
    "words": [
      "hobby",
      "a hobby",
      "хобби",
      "爱好"
    ],
    "pinyin": "àihào",
    "examples": [
      "Fotografia to moje ulubione hobby.",
      "Photography is my favourite hobby.",
      "Фотография — моё любимое хобби.",
      "摄影是我最喜欢的爱好。"
    ]
  },
  {
    "id": 194,
    "category": "Life, unscripted",
    "words": [
      "kolejka",
      "a queue",
      "очередь",
      "队伍"
    ],
    "pinyin": "duìwu",
    "examples": [
      "Czekaliśmy w kolejce przez pół godziny.",
      "We waited in the queue for half an hour.",
      "Мы стояли в очереди полчаса.",
      "我们在队伍里等了半个小时。"
    ]
  },
  {
    "id": 195,
    "category": "Life, unscripted",
    "words": [
      "zniżka",
      "a discount",
      "скидка",
      "折扣"
    ],
    "pinyin": "zhékòu",
    "examples": [
      "Studenci mogą dostać zniżkę na bilety.",
      "Students can get a discount on tickets.",
      "Студенты могут получить скидку на билеты.",
      "学生买票可以享受折扣。"
    ]
  },
  {
    "id": 196,
    "category": "Life, unscripted",
    "words": [
      "paragon",
      "a receipt",
      "чек",
      "小票"
    ],
    "pinyin": "xiǎopiào",
    "examples": [
      "Zachowaj paragon na wypadek zwrotu.",
      "Keep the receipt in case you want to return it.",
      "Сохрани чек на случай возврата.",
      "留好小票，以防需要退货。"
    ]
  },
  {
    "id": 197,
    "category": "Life, unscripted",
    "words": [
      "weekend",
      "a weekend",
      "выходные",
      "周末"
    ],
    "pinyin": "zhōumò",
    "examples": [
      "Spędzam weekend z przyjaciółmi.",
      "I am spending the weekend with friends.",
      "Я провожу выходные с друзьями.",
      "我这个周末和朋友们一起过。"
    ]
  },
  {
    "id": 198,
    "category": "Life, unscripted",
    "words": [
      "urlop",
      "a holiday",
      "отпуск",
      "假期"
    ],
    "pinyin": "jiàqī",
    "examples": [
      "Zarezerwowałam urlop nad morzem.",
      "I booked a holiday by the sea.",
      "Я забронировала отпуск у моря.",
      "我预订了海边的假期。"
    ]
  },
  {
    "id": 199,
    "category": "Life, unscripted",
    "words": [
      "rzeczywistość",
      "reality",
      "реальность",
      "现实"
    ],
    "pinyin": "xiànshí",
    "examples": [
      "Pokój wyglądał na większy w internecie niż w rzeczywistości.",
      "The room looked bigger online than in reality.",
      "В интернете комната выглядела больше, чем в реальности.",
      "房间在网上看起来比现实中大。"
    ]
  },
  {
    "id": 200,
    "category": "More to explore",
    "words": [
      "kuchnia",
      "a kitchen",
      "кухня",
      "厨房"
    ],
    "pinyin": "chúfáng",
    "examples": [
      "Gotujemy razem w kuchni.",
      "We cook together in the kitchen.",
      "Мы готовим вместе на кухне.",
      "我们一起在厨房做饭。"
    ]
  },
  {
    "id": 201,
    "category": "More to explore",
    "words": [
      "łazienka",
      "a bathroom",
      "ванная комната",
      "浴室"
    ],
    "pinyin": "yùshì",
    "examples": [
      "Łazienka jest na końcu korytarza.",
      "The bathroom is at the end of the hallway.",
      "Ванная комната находится в конце коридора.",
      "浴室在走廊尽头。"
    ]
  },
  {
    "id": 202,
    "category": "More to explore",
    "words": [
      "sypialnia",
      "a bedroom",
      "спальня",
      "卧室"
    ],
    "pinyin": "wòshì",
    "examples": [
      "Moja sypialnia jest rano nasłoneczniona.",
      "My bedroom gets sunlight in the morning.",
      "Утром в мою спальню попадает солнечный свет.",
      "早上阳光会照进我的卧室。"
    ]
  },
  {
    "id": 203,
    "category": "More to explore",
    "words": [
      "salon",
      "a living room",
      "гостиная",
      "客厅"
    ],
    "pinyin": "kètīng",
    "examples": [
      "Oglądamy filmy w salonie.",
      "We watch films in the living room.",
      "Мы смотрим фильмы в гостиной.",
      "我们在客厅看电影。"
    ]
  },
  {
    "id": 204,
    "category": "More to explore",
    "words": [
      "balkon",
      "a balcony",
      "балкон",
      "阳台"
    ],
    "pinyin": "yángtái",
    "examples": [
      "Piję poranną kawę na balkonie.",
      "I drink my morning coffee on the balcony.",
      "Я пью утренний кофе на балконе.",
      "我早上在阳台喝咖啡。"
    ]
  },
  {
    "id": 205,
    "category": "More to explore",
    "words": [
      "dach",
      "a roof",
      "крыша",
      "屋顶"
    ],
    "pinyin": "wūdǐng",
    "examples": [
      "Dach wymaga naprawy po burzy.",
      "The roof needs repairs after the storm.",
      "После бури крыша нуждается в ремонте.",
      "暴风雨过后，屋顶需要修理。"
    ]
  },
  {
    "id": 206,
    "category": "More to explore",
    "words": [
      "ściana",
      "a wall",
      "стена",
      "墙"
    ],
    "pinyin": "qiáng",
    "examples": [
      "Pomalowaliśmy ścianę na niebiesko.",
      "We painted the wall blue.",
      "Мы покрасили стену в синий цвет.",
      "我们把墙漆成了蓝色。"
    ]
  },
  {
    "id": 207,
    "category": "More to explore",
    "words": [
      "podłoga",
      "a floor",
      "пол",
      "地板"
    ],
    "pinyin": "dìbǎn",
    "examples": [
      "Podłoga jest mokra, idź ostrożnie.",
      "The floor is wet; walk carefully.",
      "Пол мокрый, иди осторожно.",
      "地板湿了，走路小心。"
    ]
  },
  {
    "id": 208,
    "category": "More to explore",
    "words": [
      "sufit",
      "a ceiling",
      "потолок",
      "天花板"
    ],
    "pinyin": "tiānhuābǎn",
    "examples": [
      "Lampa zwisa z sufitu.",
      "A lamp hangs from the ceiling.",
      "С потолка свисает лампа.",
      "天花板上吊着一盏灯。"
    ]
  },
  {
    "id": 209,
    "category": "More to explore",
    "words": [
      "dywan",
      "a carpet",
      "ковёр",
      "地毯"
    ],
    "pinyin": "dìtǎn",
    "examples": [
      "Dywan jest miękki pod stopami.",
      "The carpet feels soft under my feet.",
      "Ковёр мягкий под ногами.",
      "地毯踩上去很软。"
    ]
  },
  {
    "id": 210,
    "category": "More to explore",
    "words": [
      "sofa",
      "a sofa",
      "диван",
      "沙发"
    ],
    "pinyin": "shāfā",
    "examples": [
      "Znowu zasnęłam na sofie.",
      "I fell asleep on the sofa again.",
      "Я опять уснула на диване.",
      "我又在沙发上睡着了。"
    ]
  },
  {
    "id": 211,
    "category": "More to explore",
    "words": [
      "półka",
      "a shelf",
      "полка",
      "架子"
    ],
    "pinyin": "jiàzi",
    "examples": [
      "Połóż książki na górnej półce.",
      "Put the books on the top shelf.",
      "Поставь книги на верхнюю полку.",
      "把书放在架子的最上层。"
    ]
  },
  {
    "id": 212,
    "category": "More to explore",
    "words": [
      "szafa",
      "a wardrobe",
      "шкаф",
      "衣柜"
    ],
    "pinyin": "yīguì",
    "examples": [
      "Moje zimowe ubrania są w szafie.",
      "My winter clothes are in the wardrobe.",
      "Моя зимняя одежда в шкафу.",
      "我的冬装都在衣柜里。"
    ]
  },
  {
    "id": 213,
    "category": "More to explore",
    "words": [
      "szuflada",
      "a drawer",
      "ящик",
      "抽屉"
    ],
    "pinyin": "chōuti",
    "examples": [
      "Nożyczki są w szufladzie.",
      "The scissors are in the drawer.",
      "Ножницы лежат в ящике.",
      "剪刀在抽屉里。"
    ]
  },
  {
    "id": 214,
    "category": "More to explore",
    "words": [
      "lodówka",
      "a fridge",
      "холодильник",
      "冰箱"
    ],
    "pinyin": "bīngxiāng",
    "examples": [
      "Włóż mleko z powrotem do lodówki.",
      "Put the milk back in the fridge.",
      "Убери молоко обратно в холодильник.",
      "把牛奶放回冰箱。"
    ]
  },
  {
    "id": 215,
    "category": "More to explore",
    "words": [
      "piekarnik",
      "an oven",
      "духовка",
      "烤箱"
    ],
    "pinyin": "kǎoxiāng",
    "examples": [
      "Rozgrzej piekarnik przed pieczeniem ciasta.",
      "Preheat the oven before baking the cake.",
      "Разогрей духовку перед выпечкой торта.",
      "烤蛋糕之前，先预热烤箱。"
    ]
  },
  {
    "id": 216,
    "category": "More to explore",
    "words": [
      "czajnik",
      "a kettle",
      "чайник",
      "水壶"
    ],
    "pinyin": "shuǐhú",
    "examples": [
      "Napełnij czajnik świeżą wodą.",
      "Fill the kettle with fresh water.",
      "Наполни чайник свежей водой.",
      "往水壶里装入新鲜的水。"
    ]
  },
  {
    "id": 217,
    "category": "More to explore",
    "words": [
      "mikrofalówka",
      "a microwave",
      "микроволновка",
      "微波炉"
    ],
    "pinyin": "wēibōlú",
    "examples": [
      "Podgrzałam zupę w mikrofalówce.",
      "I heated the soup in the microwave.",
      "Я разогрела суп в микроволновке.",
      "我用微波炉热了汤。"
    ]
  },
  {
    "id": 218,
    "category": "More to explore",
    "words": [
      "zmywarka",
      "a dishwasher",
      "посудомоечная машина",
      "洗碗机"
    ],
    "pinyin": "xǐwǎnjī",
    "examples": [
      "Zmywarka jest pełna czystych talerzy.",
      "The dishwasher is full of clean plates.",
      "Посудомоечная машина полна чистых тарелок.",
      "洗碗机里装满了干净的盘子。"
    ]
  },
  {
    "id": 219,
    "category": "More to explore",
    "words": [
      "pralka",
      "a washing machine",
      "стиральная машина",
      "洗衣机"
    ],
    "pinyin": "xǐyījī",
    "examples": [
      "Pralka jest głośniejsza niż telewizor.",
      "The washing machine is louder than the television.",
      "Стиральная машина громче телевизора.",
      "洗衣机比电视还吵。"
    ]
  },
  {
    "id": 220,
    "category": "More to explore",
    "words": [
      "odkurzacz",
      "a vacuum cleaner",
      "пылесос",
      "吸尘器"
    ],
    "pinyin": "xīchénqì",
    "examples": [
      "Odkurzacz przestraszył kota.",
      "The vacuum cleaner scared the cat.",
      "Пылесос напугал кота.",
      "吸尘器吓到了猫。"
    ]
  },
  {
    "id": 221,
    "category": "More to explore",
    "words": [
      "miotła",
      "a broom",
      "метла",
      "扫帚"
    ],
    "pinyin": "sàozhou",
    "examples": [
      "Użyj miotły, żeby zamieść okruszki.",
      "Use the broom to sweep up the crumbs.",
      "Подмети крошки метлой.",
      "用扫帚把碎屑扫起来。"
    ]
  },
  {
    "id": 222,
    "category": "More to explore",
    "words": [
      "wiadro",
      "a bucket",
      "ведро",
      "水桶"
    ],
    "pinyin": "shuǐtǒng",
    "examples": [
      "Napełniliśmy wiadro wodą.",
      "We filled a bucket with water.",
      "Мы наполнили ведро водой.",
      "我们把水桶装满了水。"
    ]
  },
  {
    "id": 223,
    "category": "More to explore",
    "words": [
      "gąbka",
      "a sponge",
      "губка",
      "海绵"
    ],
    "pinyin": "hǎimián",
    "examples": [
      "Przetrzyj stół wilgotną gąbką.",
      "Wipe the table with a damp sponge.",
      "Протри стол влажной губкой.",
      "用湿海绵擦桌子。"
    ]
  },
  {
    "id": 224,
    "category": "More to explore",
    "words": [
      "zasłona",
      "a curtain",
      "штора",
      "窗帘"
    ],
    "pinyin": "chuānglián",
    "examples": [
      "Zasuń zasłonę, zanim włączysz światło.",
      "Close the curtain before turning on the light.",
      "Закрой штору, прежде чем включить свет.",
      "开灯前先拉上窗帘。"
    ]
  },
  {
    "id": 225,
    "category": "More to explore",
    "words": [
      "wazon",
      "a vase",
      "ваза",
      "花瓶"
    ],
    "pinyin": "huāpíng",
    "examples": [
      "Włożyłam świeże kwiaty do wazonu.",
      "I put fresh flowers in the vase.",
      "Я поставила свежие цветы в вазу.",
      "我把鲜花插进花瓶里。"
    ]
  },
  {
    "id": 226,
    "category": "More to explore",
    "words": [
      "obraz",
      "a painting",
      "картина",
      "画"
    ],
    "pinyin": "huà",
    "examples": [
      "Ten obraz przypomina mi morze.",
      "This painting reminds me of the sea.",
      "Эта картина напоминает мне о море.",
      "这幅画让我想起了海。"
    ]
  },
  {
    "id": 227,
    "category": "More to explore",
    "words": [
      "gniazdko",
      "a socket",
      "розетка",
      "插座"
    ],
    "pinyin": "chāzuò",
    "examples": [
      "Obok biurka jest gniazdko.",
      "There is a socket next to the desk.",
      "Рядом с письменным столом есть розетка.",
      "书桌旁边有插座。"
    ]
  },
  {
    "id": 228,
    "category": "More to explore",
    "words": [
      "ładowarka",
      "a charger",
      "зарядное устройство",
      "充电器"
    ],
    "pinyin": "chōngdiànqì",
    "examples": [
      "Czy ta ładowarka pasuje do twojego telefonu?",
      "Does this charger work with your phone?",
      "Это зарядное устройство подходит к твоему телефону?",
      "这个充电器能给你的手机充电吗？"
    ]
  },
  {
    "id": 229,
    "category": "More to explore",
    "words": [
      "pilot",
      "a remote control",
      "пульт",
      "遥控器"
    ],
    "pinyin": "yáokòngqì",
    "examples": [
      "Pilot był pod poduszką.",
      "The remote control was under the cushion.",
      "Пульт лежал под подушкой.",
      "遥控器在靠垫下面。"
    ]
  },
  {
    "id": 230,
    "category": "More to explore",
    "words": [
      "sukienka",
      "a dress",
      "платье",
      "连衣裙"
    ],
    "pinyin": "liányīqún",
    "examples": [
      "Założyła niebieską sukienkę na przyjęcie.",
      "She wore a blue dress to the party.",
      "Она надела синее платье на вечеринку.",
      "她穿着蓝色连衣裙去参加聚会。"
    ]
  },
  {
    "id": 231,
    "category": "More to explore",
    "words": [
      "spódnica",
      "a skirt",
      "юбка",
      "裙子"
    ],
    "pinyin": "qúnzi",
    "examples": [
      "Ta spódnica ma kieszenie.",
      "This skirt has pockets.",
      "У этой юбки есть карманы.",
      "这条裙子有口袋。"
    ]
  },
  {
    "id": 232,
    "category": "More to explore",
    "words": [
      "kurtka",
      "a jacket",
      "куртка",
      "夹克"
    ],
    "pinyin": "jiákè",
    "examples": [
      "Weź kurtkę na wieczór.",
      "Take a jacket for the evening.",
      "Возьми куртку на вечер.",
      "带件夹克，晚上穿。"
    ]
  },
  {
    "id": 233,
    "category": "More to explore",
    "words": [
      "sweter",
      "a sweater",
      "свитер",
      "毛衣"
    ],
    "pinyin": "máoyī",
    "examples": [
      "Moja babcia zrobiła ten sweter na drutach.",
      "My grandmother knitted this sweater.",
      "Моя бабушка связала этот свитер.",
      "这件毛衣是我奶奶织的。"
    ]
  },
  {
    "id": 234,
    "category": "More to explore",
    "words": [
      "koszulka",
      "a T-shirt",
      "футболка",
      "T恤"
    ],
    "pinyin": "T xù",
    "examples": [
      "Rozlałam kawę na białą koszulkę.",
      "I spilled coffee on my white T-shirt.",
      "Я пролила кофе на белую футболку.",
      "我把咖啡洒在白色T恤上了。"
    ]
  },
  {
    "id": 235,
    "category": "More to explore",
    "words": [
      "garnitur",
      "a suit",
      "костюм",
      "西装"
    ],
    "pinyin": "xīzhuāng",
    "examples": [
      "Kupił garnitur na ślub.",
      "He bought a suit for the wedding.",
      "Он купил костюм на свадьбу.",
      "他为婚礼买了一套西装。"
    ]
  },
  {
    "id": 236,
    "category": "More to explore",
    "words": [
      "krawat",
      "a tie",
      "галстук",
      "领带"
    ],
    "pinyin": "lǐngdài",
    "examples": [
      "Ten krawat pasuje do twojej koszuli.",
      "This tie matches your shirt.",
      "Этот галстук подходит к твоей рубашке.",
      "这条领带和你的衬衫很配。"
    ]
  },
  {
    "id": 237,
    "category": "More to explore",
    "words": [
      "pasek",
      "a belt",
      "ремень",
      "腰带"
    ],
    "pinyin": "yāodài",
    "examples": [
      "Potrzebuję paska do tych spodni.",
      "I need a belt for these trousers.",
      "Мне нужен ремень для этих брюк.",
      "这条裤子需要配一条腰带。"
    ]
  },
  {
    "id": 238,
    "category": "More to explore",
    "words": [
      "but",
      "a shoe",
      "ботинок",
      "鞋子"
    ],
    "pinyin": "xiézi",
    "examples": [
      "W moim bucie jest mały kamień.",
      "There is a small stone in my shoe.",
      "В моём ботинке маленький камень.",
      "我的鞋子里有一颗小石头。"
    ]
  },
  {
    "id": 239,
    "category": "More to explore",
    "words": [
      "skarpetka",
      "a sock",
      "носок",
      "袜子"
    ],
    "pinyin": "wàzi",
    "examples": [
      "Jedna skarpetka zniknęła w praniu, jak zwykle.",
      "One sock disappeared in the wash, as usual.",
      "Один носок исчез после стирки, как обычно.",
      "和往常一样，一只袜子洗完就不见了。"
    ]
  },
  {
    "id": 240,
    "category": "More to explore",
    "words": [
      "rękawiczka",
      "a glove",
      "перчатка",
      "手套"
    ],
    "pinyin": "shǒutào",
    "examples": [
      "Znalazłam twoją rękawiczkę w autobusie.",
      "I found your glove on the bus.",
      "Я нашла твою перчатку в автобусе.",
      "我在公共汽车上找到了你的手套。"
    ]
  },
  {
    "id": 241,
    "category": "More to explore",
    "words": [
      "kieszeń",
      "a pocket",
      "карман",
      "口袋"
    ],
    "pinyin": "kǒudài",
    "examples": [
      "Mój bilet jest w kieszeni.",
      "My ticket is in my pocket.",
      "Мой билет в кармане.",
      "我的票在口袋里。"
    ]
  },
  {
    "id": 242,
    "category": "More to explore",
    "words": [
      "guzik",
      "a button",
      "пуговица",
      "纽扣"
    ],
    "pinyin": "niǔkòu",
    "examples": [
      "Od koszuli odpadł mi guzik.",
      "A button came off my shirt.",
      "У моей рубашки оторвалась пуговица.",
      "我的衬衫掉了一颗纽扣。"
    ]
  },
  {
    "id": 243,
    "category": "More to explore",
    "words": [
      "zamek błyskawiczny",
      "a zipper",
      "молния",
      "拉链"
    ],
    "pinyin": "lāliàn",
    "examples": [
      "Zamek błyskawiczny w mojej torbie się zaciął.",
      "The zipper on my bag is stuck.",
      "Молния на моей сумке заела.",
      "我包上的拉链卡住了。"
    ]
  },
  {
    "id": 244,
    "category": "More to explore",
    "words": [
      "pierścionek",
      "a ring",
      "кольцо",
      "戒指"
    ],
    "pinyin": "jièzhi",
    "examples": [
      "Nosi srebrny pierścionek.",
      "She wears a silver ring.",
      "Она носит серебряное кольцо.",
      "她戴着一枚银戒指。"
    ]
  },
  {
    "id": 245,
    "category": "More to explore",
    "words": [
      "naszyjnik",
      "a necklace",
      "ожерелье",
      "项链"
    ],
    "pinyin": "xiàngliàn",
    "examples": [
      "Ten naszyjnik był prezentem od mojej siostry.",
      "This necklace was a gift from my sister.",
      "Это ожерелье — подарок от моей сестры.",
      "这条项链是我姐姐送的礼物。"
    ]
  },
  {
    "id": 246,
    "category": "More to explore",
    "words": [
      "bransoletka",
      "a bracelet",
      "браслет",
      "手链"
    ],
    "pinyin": "shǒuliàn",
    "examples": [
      "Zrobiłam bransoletkę z kolorowych koralików.",
      "I made a bracelet from colourful beads.",
      "Я сделала браслет из разноцветных бусин.",
      "我用彩色珠子做了一条手链。"
    ]
  },
  {
    "id": 247,
    "category": "More to explore",
    "words": [
      "kolczyk",
      "an earring",
      "серьга",
      "耳环"
    ],
    "pinyin": "ěrhuán",
    "examples": [
      "Zgubiłam kolczyk na przyjęciu.",
      "I lost an earring at the party.",
      "Я потеряла серьгу на вечеринке.",
      "我在聚会上丢了一只耳环。"
    ]
  },
  {
    "id": 248,
    "category": "More to explore",
    "words": [
      "grzebień",
      "a comb",
      "расчёска",
      "梳子"
    ],
    "pinyin": "shūzi",
    "examples": [
      "Trzymam grzebień w torbie.",
      "I keep a comb in my bag.",
      "Я ношу расчёску в сумке.",
      "我包里放着一把梳子。"
    ]
  },
  {
    "id": 249,
    "category": "More to explore",
    "words": [
      "szczotka do włosów",
      "a hairbrush",
      "щётка для волос",
      "发刷"
    ],
    "pinyin": "fàshuā",
    "examples": [
      "Dziś rano wyczyściłam szczotkę do włosów.",
      "I cleaned my hairbrush this morning.",
      "Сегодня утром я почистила щётку для волос.",
      "今天早上我清理了发刷。"
    ]
  },
  {
    "id": 250,
    "category": "More to explore",
    "words": [
      "szampon",
      "shampoo",
      "шампунь",
      "洗发水"
    ],
    "pinyin": "xǐfàshuǐ",
    "examples": [
      "Ten szampon pachnie kokosem.",
      "This shampoo smells like coconut.",
      "Этот шампунь пахнет кокосом.",
      "这款洗发水有椰子的香味。"
    ]
  },
  {
    "id": 251,
    "category": "More to explore",
    "words": [
      "pasta do zębów",
      "toothpaste",
      "зубная паста",
      "牙膏"
    ],
    "pinyin": "yágāo",
    "examples": [
      "Musimy kupić więcej pasty do zębów.",
      "We need to buy more toothpaste.",
      "Нам нужно купить ещё зубной пасты.",
      "我们需要再买些牙膏。"
    ]
  },
  {
    "id": 252,
    "category": "More to explore",
    "words": [
      "perfumy",
      "perfume",
      "духи",
      "香水"
    ],
    "pinyin": "xiāngshuǐ",
    "examples": [
      "Jej perfumy mają lekki kwiatowy zapach.",
      "Her perfume has a light floral scent.",
      "У её духов лёгкий цветочный аромат.",
      "她的香水有淡淡的花香。"
    ]
  },
  {
    "id": 253,
    "category": "More to explore",
    "words": [
      "szminka",
      "lipstick",
      "помада",
      "口红"
    ],
    "pinyin": "kǒuhóng",
    "examples": [
      "Wybrałam czerwoną szminkę na wieczór.",
      "I chose a red lipstick for the evening.",
      "Я выбрала красную помаду на вечер.",
      "我选了一支红色口红，晚上用。"
    ]
  },
  {
    "id": 254,
    "category": "More to explore",
    "words": [
      "krem przeciwsłoneczny",
      "sunscreen",
      "солнцезащитный крем",
      "防晒霜"
    ],
    "pinyin": "fángshàishuāng",
    "examples": [
      "Spakowałam krem przeciwsłoneczny na wyjazd na plażę.",
      "I packed sunscreen for our beach trip.",
      "Я взяла солнцезащитный крем для поездки на пляж.",
      "去海滩旅行，我带了防晒霜。"
    ]
  },
  {
    "id": 255,
    "category": "More to explore",
    "words": [
      "maszynka do golenia",
      "a razor",
      "бритва",
      "剃须刀"
    ],
    "pinyin": "tìxūdāo",
    "examples": [
      "Spakował maszynkę do golenia do kosmetyczki.",
      "He packed his razor in the washbag.",
      "Он положил бритву в косметичку.",
      "他把剃须刀放进了洗漱包。"
    ]
  },
  {
    "id": 256,
    "category": "More to explore",
    "words": [
      "paznokieć",
      "a nail",
      "ноготь",
      "指甲"
    ],
    "pinyin": "zhǐjia",
    "examples": [
      "Złamałam paznokieć podczas otwierania pudełka.",
      "I broke a nail while opening the box.",
      "Я сломала ноготь, открывая коробку.",
      "打开盒子时，我弄断了一片指甲。"
    ]
  },
  {
    "id": 257,
    "category": "More to explore",
    "words": [
      "fryzura",
      "a haircut",
      "стрижка",
      "发型"
    ],
    "pinyin": "fàxíng",
    "examples": [
      "Twoja nowa fryzura bardzo ci pasuje.",
      "Your new haircut really suits you.",
      "Тебе очень идёт новая стрижка.",
      "你的新发型很适合你。"
    ]
  },
  {
    "id": 258,
    "category": "More to explore",
    "words": [
      "plama",
      "a stain",
      "пятно",
      "污渍"
    ],
    "pinyin": "wūzì",
    "examples": [
      "Na obrusie jest plama z kawy.",
      "There is a coffee stain on the tablecloth.",
      "На скатерти кофейное пятно.",
      "桌布上有一块咖啡污渍。"
    ]
  },
  {
    "id": 259,
    "category": "More to explore",
    "words": [
      "pranie",
      "laundry",
      "стирка",
      "洗衣"
    ],
    "pinyin": "xǐyī",
    "examples": [
      "Robię pranie w sobotnie poranki.",
      "I do the laundry on Saturday mornings.",
      "Я занимаюсь стиркой по субботам утром.",
      "我星期六早上洗衣。"
    ]
  },
  {
    "id": 260,
    "category": "More to explore",
    "words": [
      "głowa",
      "a head",
      "голова",
      "头"
    ],
    "pinyin": "tóu",
    "examples": [
      "Uderzyłam głową w niską framugę.",
      "I bumped my head on the low doorway.",
      "Я ударилась головой о низкий дверной проём.",
      "我的头撞到了低矮的门框。"
    ]
  },
  {
    "id": 261,
    "category": "More to explore",
    "words": [
      "twarz",
      "a face",
      "лицо",
      "脸"
    ],
    "pinyin": "liǎn",
    "examples": [
      "Umyj twarz chłodną wodą.",
      "Wash your face with cool water.",
      "Умой лицо прохладной водой.",
      "用凉水洗脸。"
    ]
  },
  {
    "id": 262,
    "category": "More to explore",
    "words": [
      "oko",
      "an eye",
      "глаз",
      "眼睛"
    ],
    "pinyin": "yǎnjing",
    "examples": [
      "Coś wpadło mi do oka.",
      "Something got into my eye.",
      "Мне что-то попало в глаз.",
      "我的眼睛里进了东西。"
    ]
  },
  {
    "id": 263,
    "category": "More to explore",
    "words": [
      "ucho",
      "an ear",
      "ухо",
      "耳朵"
    ],
    "pinyin": "ěrduo",
    "examples": [
      "Lewe ucho marznie mi na wietrze.",
      "My left ear feels cold in the wind.",
      "У меня на ветру мёрзнет левое ухо.",
      "风一吹，我的左耳朵就觉得冷。"
    ]
  },
  {
    "id": 264,
    "category": "More to explore",
    "words": [
      "nos",
      "a nose",
      "нос",
      "鼻子"
    ],
    "pinyin": "bízi",
    "examples": [
      "Mój nos robi się czerwony na zimnie.",
      "My nose turns red in cold weather.",
      "На холоде у меня краснеет нос.",
      "天气冷时，我的鼻子会变红。"
    ]
  },
  {
    "id": 265,
    "category": "More to explore",
    "words": [
      "usta",
      "a mouth",
      "рот",
      "嘴"
    ],
    "pinyin": "zuǐ",
    "examples": [
      "Zasłaniaj usta, gdy kaszlesz.",
      "Please cover your mouth when you cough.",
      "Пожалуйста, прикрывай рот, когда кашляешь.",
      "咳嗽时请捂住嘴。"
    ]
  },
  {
    "id": 266,
    "category": "More to explore",
    "words": [
      "ząb",
      "a tooth",
      "зуб",
      "牙齿"
    ],
    "pinyin": "yáchǐ",
    "examples": [
      "Dentysta sprawdził mój ząb.",
      "The dentist checked my tooth.",
      "Стоматолог осмотрел мой зуб.",
      "牙医检查了我的牙齿。"
    ]
  },
  {
    "id": 267,
    "category": "More to explore",
    "words": [
      "szyja",
      "a neck",
      "шея",
      "脖子"
    ],
    "pinyin": "bózi",
    "examples": [
      "Po długim locie mam sztywną szyję.",
      "My neck feels stiff after the long flight.",
      "После долгого перелёта у меня затекла шея.",
      "长途飞行后，我的脖子有些僵硬。"
    ]
  },
  {
    "id": 268,
    "category": "More to explore",
    "words": [
      "ramię",
      "a shoulder",
      "плечо",
      "肩膀"
    ],
    "pinyin": "jiānbǎng",
    "examples": [
      "Położyła mi dłoń na ramieniu.",
      "She put a hand on my shoulder.",
      "Она положила руку мне на плечо.",
      "她把手放在我的肩膀上。"
    ]
  },
  {
    "id": 269,
    "category": "More to explore",
    "words": [
      "łokieć",
      "an elbow",
      "локоть",
      "肘部"
    ],
    "pinyin": "zhǒubù",
    "examples": [
      "Oparłam łokieć na biurku.",
      "I rested my elbow on the desk.",
      "Я опёрлась локтем на стол.",
      "我把肘部靠在书桌上。"
    ]
  },
  {
    "id": 270,
    "category": "More to explore",
    "words": [
      "dłoń",
      "a hand",
      "ладонь",
      "手"
    ],
    "pinyin": "shǒu",
    "examples": [
      "Moja dłoń jest zimna po spacerze.",
      "My hand is cold after the walk.",
      "После прогулки моя ладонь холодная.",
      "散步后，我的手很冷。"
    ]
  },
  {
    "id": 271,
    "category": "More to explore",
    "words": [
      "palec",
      "a finger",
      "палец",
      "手指"
    ],
    "pinyin": "shǒuzhǐ",
    "examples": [
      "Wskazałam obrazek palcem.",
      "I pointed at the picture with my finger.",
      "Я указала на картинку пальцем.",
      "我用手指指着那幅图。"
    ]
  },
  {
    "id": 272,
    "category": "More to explore",
    "words": [
      "kolano",
      "a knee",
      "колено",
      "膝盖"
    ],
    "pinyin": "xīgài",
    "examples": [
      "Otarłam kolano podczas upadku.",
      "I scraped my knee when I fell.",
      "Я ободрала колено, когда упала.",
      "摔倒时，我擦伤了膝盖。"
    ]
  },
  {
    "id": 273,
    "category": "More to explore",
    "words": [
      "stopa",
      "a foot",
      "ступня",
      "脚"
    ],
    "pinyin": "jiǎo",
    "examples": [
      "Moja stopa nie mieści się w tym bucie.",
      "My foot does not fit in this shoe.",
      "Моя ступня не помещается в этот ботинок.",
      "我的脚穿不进这只鞋。"
    ]
  },
  {
    "id": 274,
    "category": "More to explore",
    "words": [
      "serce",
      "a heart",
      "сердце",
      "心脏"
    ],
    "pinyin": "xīnzàng",
    "examples": [
      "Moje serce bije szybciej, gdy biegam.",
      "My heart beats faster when I run.",
      "Когда я бегаю, моё сердце бьётся быстрее.",
      "跑步时，我的心脏跳得更快。"
    ]
  },
  {
    "id": 275,
    "category": "More to explore",
    "words": [
      "mózg",
      "a brain",
      "мозг",
      "大脑"
    ],
    "pinyin": "dànǎo",
    "examples": [
      "Mój mózg potrzebuje przerwy po tej lekcji.",
      "My brain needs a break after this lesson.",
      "Моему мозгу нужен перерыв после этого урока.",
      "这节课后，我的大脑需要休息一下。"
    ]
  },
  {
    "id": 276,
    "category": "More to explore",
    "words": [
      "żołądek",
      "a stomach",
      "желудок",
      "胃"
    ],
    "pinyin": "wèi",
    "examples": [
      "Burczy mi w żołądku, bo nie zjadłam obiadu.",
      "My stomach is rumbling because I skipped lunch.",
      "У меня урчит в желудке, потому что я пропустила обед.",
      "我没吃午饭，胃都咕咕叫了。"
    ]
  },
  {
    "id": 277,
    "category": "More to explore",
    "words": [
      "skóra",
      "skin",
      "кожа",
      "皮肤"
    ],
    "pinyin": "pífū",
    "examples": [
      "Zimą moja skóra staje się sucha.",
      "My skin gets dry in winter.",
      "Зимой моя кожа становится сухой.",
      "冬天我的皮肤会变干。"
    ]
  },
  {
    "id": 278,
    "category": "More to explore",
    "words": [
      "kość",
      "a bone",
      "кость",
      "骨头"
    ],
    "pinyin": "gǔtou",
    "examples": [
      "Zdjęcie rentgenowskie pokazało złamaną kość.",
      "The X-ray showed a broken bone.",
      "На рентгеновском снимке была видна сломанная кость.",
      "X光片显示一根骨头断了。"
    ]
  },
  {
    "id": 279,
    "category": "More to explore",
    "words": [
      "mięsień",
      "a muscle",
      "мышца",
      "肌肉"
    ],
    "pinyin": "jīròu",
    "examples": [
      "Naciągnęłam mięsień podczas treningu.",
      "I pulled a muscle during training.",
      "Я потянула мышцу на тренировке.",
      "我训练时拉伤了肌肉。"
    ]
  },
  {
    "id": 280,
    "category": "More to explore",
    "words": [
      "uśmiech",
      "a smile",
      "улыбка",
      "微笑"
    ],
    "pinyin": "wēixiào",
    "examples": [
      "Jej uśmiech sprawił, że poczułam się mile widziana.",
      "Her smile made me feel welcome.",
      "Её улыбка помогла мне почувствовать себя желанной гостьей.",
      "她的微笑让我感到很受欢迎。"
    ]
  },
  {
    "id": 281,
    "category": "More to explore",
    "words": [
      "śmiech",
      "a laugh",
      "смех",
      "笑声"
    ],
    "pinyin": "xiàoshēng",
    "examples": [
      "Jego śmiech wypełnił pokój.",
      "His laugh filled the room.",
      "Его смех наполнил комнату.",
      "他的笑声传遍了整个房间。"
    ]
  },
  {
    "id": 282,
    "category": "More to explore",
    "words": [
      "łza",
      "a tear",
      "слеза",
      "眼泪"
    ],
    "pinyin": "yǎnlèi",
    "examples": [
      "Łza spłynęła po jej policzku.",
      "A tear rolled down her cheek.",
      "Слеза скатилась по её щеке.",
      "一滴眼泪顺着她的脸颊流下来。"
    ]
  },
  {
    "id": 283,
    "category": "More to explore",
    "words": [
      "ból głowy",
      "a headache",
      "головная боль",
      "头痛"
    ],
    "pinyin": "tóutòng",
    "examples": [
      "Boli mnie głowa, więc odpocznę.",
      "I have a headache, so I will rest.",
      "У меня головная боль, поэтому я отдохну.",
      "我头痛，所以要休息一下。"
    ]
  },
  {
    "id": 284,
    "category": "More to explore",
    "words": [
      "gorączka",
      "a fever",
      "жар",
      "发烧"
    ],
    "pinyin": "fāshāo",
    "examples": [
      "Została w domu, bo miała gorączkę.",
      "She stayed home because she had a fever.",
      "Она осталась дома, потому что у неё был жар.",
      "她发烧了，所以待在家里。"
    ]
  },
  {
    "id": 285,
    "category": "More to explore",
    "words": [
      "kaszel",
      "a cough",
      "кашель",
      "咳嗽"
    ],
    "pinyin": "késou",
    "examples": [
      "Kaszel nie dawał mu wczoraj w nocy spać.",
      "His cough kept him awake last night.",
      "Прошлой ночью кашель не давал ему уснуть.",
      "昨晚咳嗽让他睡不着。"
    ]
  },
  {
    "id": 286,
    "category": "More to explore",
    "words": [
      "kichnięcie",
      "a sneeze",
      "чихание",
      "喷嚏"
    ],
    "pinyin": "pēntì",
    "examples": [
      "Głośne kichnięcie przerwało ciszę.",
      "A loud sneeze interrupted the silence.",
      "Громкое чихание нарушило тишину.",
      "一个响亮的喷嚏打破了安静。"
    ]
  },
  {
    "id": 287,
    "category": "More to explore",
    "words": [
      "oddech",
      "a breath",
      "вдох",
      "呼吸"
    ],
    "pinyin": "hūxī",
    "examples": [
      "Weź spokojny oddech, zanim zaczniesz.",
      "Take a slow breath before you begin.",
      "Сделай медленный вдох, прежде чем начать.",
      "开始之前，慢慢呼吸一下。"
    ]
  },
  {
    "id": 288,
    "category": "More to explore",
    "words": [
      "głos",
      "a voice",
      "голос",
      "声音"
    ],
    "pinyin": "shēngyīn",
    "examples": [
      "Rozpoznałam jej głos przez telefon.",
      "I recognised her voice on the phone.",
      "Я узнала её голос по телефону.",
      "我在电话里认出了她的声音。"
    ]
  },
  {
    "id": 289,
    "category": "More to explore",
    "words": [
      "blizna",
      "a scar",
      "шрам",
      "疤痕"
    ],
    "pinyin": "bāhén",
    "examples": [
      "Ma małą bliznę na brodzie.",
      "He has a small scar on his chin.",
      "У него небольшой шрам на подбородке.",
      "他的下巴上有一道小疤痕。"
    ]
  },
  {
    "id": 290,
    "category": "More to explore",
    "words": [
      "szkoła",
      "a school",
      "школа",
      "学校"
    ],
    "pinyin": "xuéxiào",
    "examples": [
      "Szkoła jest naprzeciwko parku.",
      "The school is across from the park.",
      "Школа находится напротив парка.",
      "学校在公园对面。"
    ]
  },
  {
    "id": 291,
    "category": "More to explore",
    "words": [
      "uniwersytet",
      "a university",
      "университет",
      "大学"
    ],
    "pinyin": "dàxué",
    "examples": [
      "Studiuje języki na uniwersytecie.",
      "She studies languages at university.",
      "Она изучает языки в университете.",
      "她在大学学习语言。"
    ]
  },
  {
    "id": 292,
    "category": "More to explore",
    "words": [
      "biblioteka",
      "a library",
      "библиотека",
      "图书馆"
    ],
    "pinyin": "túshūguǎn",
    "examples": [
      "Biblioteka jest otwarta do ósmej.",
      "The library stays open until eight.",
      "Библиотека открыта до восьми.",
      "图书馆一直开到八点。"
    ]
  },
  {
    "id": 293,
    "category": "More to explore",
    "words": [
      "sala lekcyjna",
      "a classroom",
      "класс",
      "教室"
    ],
    "pinyin": "jiàoshì",
    "examples": [
      "Nasza sala lekcyjna ma duże okna.",
      "Our classroom has large windows.",
      "В нашем классе большие окна.",
      "我们的教室有很大的窗户。"
    ]
  },
  {
    "id": 294,
    "category": "More to explore",
    "words": [
      "słownik",
      "a dictionary",
      "словарь",
      "词典"
    ],
    "pinyin": "cídiǎn",
    "examples": [
      "Sprawdziłam słowo w słowniku.",
      "I looked up the word in a dictionary.",
      "Я посмотрела слово в словаре.",
      "我在词典里查了这个单词。"
    ]
  },
  {
    "id": 295,
    "category": "More to explore",
    "words": [
      "podręcznik",
      "a textbook",
      "учебник",
      "课本"
    ],
    "pinyin": "kèběn",
    "examples": [
      "Otwórz podręcznik na następnym rozdziale.",
      "Open your textbook to the next chapter.",
      "Открой учебник на следующей главе.",
      "把课本翻到下一章。"
    ]
  },
  {
    "id": 296,
    "category": "More to explore",
    "words": [
      "praca domowa",
      "homework",
      "домашнее задание",
      "家庭作业"
    ],
    "pinyin": "jiātíng zuòyè",
    "examples": [
      "Skończyłam pracę domową przed kolacją.",
      "I finished my homework before dinner.",
      "Я закончила домашнее задание до ужина.",
      "我晚饭前做完了家庭作业。"
    ]
  },
  {
    "id": 297,
    "category": "More to explore",
    "words": [
      "egzamin",
      "an exam",
      "экзамен",
      "考试"
    ],
    "pinyin": "kǎoshì",
    "examples": [
      "Egzamin zaczyna się jutro o dziesiątej.",
      "The exam starts at ten tomorrow.",
      "Экзамен начнётся завтра в десять.",
      "考试明天十点开始。"
    ]
  },
  {
    "id": 298,
    "category": "More to explore",
    "words": [
      "ocena",
      "a grade",
      "оценка",
      "成绩"
    ],
    "pinyin": "chéngjì",
    "examples": [
      "Moja ocena poprawiła się po miesiącu ćwiczeń.",
      "My grade improved after a month of practice.",
      "Моя оценка улучшилась после месяца практики.",
      "练习了一个月后，我的成绩提高了。"
    ]
  },
  {
    "id": 299,
    "category": "More to explore",
    "words": [
      "dyplom",
      "a diploma",
      "диплом",
      "文凭"
    ],
    "pinyin": "wénpíng",
    "examples": [
      "Otrzymała dyplom w czerwcu.",
      "She received her diploma in June.",
      "Она получила диплом в июне.",
      "她在六月拿到了文凭。"
    ]
  },
  {
    "id": 300,
    "category": "More to explore",
    "words": [
      "wykład",
      "a lecture",
      "лекция",
      "讲座"
    ],
    "pinyin": "jiǎngzuò",
    "examples": [
      "Robiłam notatki podczas wykładu.",
      "I took notes during the lecture.",
      "Я делала записи во время лекции.",
      "我在讲座期间做了笔记。"
    ]
  },
  {
    "id": 301,
    "category": "More to explore",
    "words": [
      "kurs",
      "a course",
      "курс",
      "课程"
    ],
    "pinyin": "kèchéng",
    "examples": [
      "Ten kurs jest odpowiedni dla początkujących.",
      "This course is suitable for beginners.",
      "Этот курс подходит для начинающих.",
      "这门课程适合初学者。"
    ]
  },
  {
    "id": 302,
    "category": "More to explore",
    "words": [
      "akapit",
      "a paragraph",
      "абзац",
      "段落"
    ],
    "pinyin": "duànluò",
    "examples": [
      "Przeczytaj pierwszy akapit na głos.",
      "Read the first paragraph aloud.",
      "Прочитай первый абзац вслух.",
      "把第一段落大声读出来。"
    ]
  },
  {
    "id": 303,
    "category": "More to explore",
    "words": [
      "rozdział",
      "a chapter",
      "глава",
      "章节"
    ],
    "pinyin": "zhāngjié",
    "examples": [
      "Czytam jeden rozdział przed snem.",
      "I read one chapter before bed.",
      "Я читаю одну главу перед сном.",
      "我睡前读一个章节。"
    ]
  },
  {
    "id": 304,
    "category": "More to explore",
    "words": [
      "strona",
      "a page",
      "страница",
      "页"
    ],
    "pinyin": "yè",
    "examples": [
      "Na następnej stronie jest obrazek.",
      "There is a picture on the next page.",
      "На следующей странице есть картинка.",
      "下一页有一幅图。"
    ]
  },
  {
    "id": 305,
    "category": "More to explore",
    "words": [
      "tytuł",
      "a title",
      "заголовок",
      "标题"
    ],
    "pinyin": "biāotí",
    "examples": [
      "Tytuł zachęcił mnie do przeczytania artykułu.",
      "The title made me want to read the article.",
      "Заголовок вызвал у меня желание прочитать статью.",
      "这个标题让我想读这篇文章。"
    ]
  },
  {
    "id": 306,
    "category": "More to explore",
    "words": [
      "litera",
      "a letter",
      "буква",
      "字母"
    ],
    "pinyin": "zìmǔ",
    "examples": [
      "W tym słowie brakuje ci litery.",
      "You missed a letter in this word.",
      "Ты пропустила букву в этом слове.",
      "这个单词里少了一个字母。"
    ]
  },
  {
    "id": 307,
    "category": "More to explore",
    "words": [
      "sylaba",
      "a syllable",
      "слог",
      "音节"
    ],
    "pinyin": "yīnjié",
    "examples": [
      "Klaśnij raz przy każdej sylabie.",
      "Clap once for each syllable.",
      "Хлопни один раз на каждый слог.",
      "每读一个音节，就拍一次手。"
    ]
  },
  {
    "id": 308,
    "category": "More to explore",
    "words": [
      "samogłoska",
      "a vowel",
      "гласный звук",
      "元音"
    ],
    "pinyin": "yuányīn",
    "examples": [
      "Posłuchaj uważnie samogłoski w tym słowie.",
      "Listen carefully to the vowel in this word.",
      "Внимательно послушай гласный звук в этом слове.",
      "仔细听这个单词里的元音。"
    ]
  },
  {
    "id": 309,
    "category": "More to explore",
    "words": [
      "spółgłoska",
      "a consonant",
      "согласный звук",
      "辅音"
    ],
    "pinyin": "fǔyīn",
    "examples": [
      "Ostatnią spółgłoskę trudno usłyszeć.",
      "The final consonant is difficult to hear.",
      "Последний согласный звук трудно услышать.",
      "最后一个辅音很难听清。"
    ]
  },
  {
    "id": 310,
    "category": "More to explore",
    "words": [
      "gramatyka",
      "grammar",
      "грамматика",
      "语法"
    ],
    "pinyin": "yǔfǎ",
    "examples": [
      "Gramatyka staje się jaśniejsza, gdy widzę przykłady.",
      "Grammar becomes clearer when I see examples.",
      "Грамматика становится понятнее, когда я вижу примеры.",
      "看到例子时，语法就更清楚了。"
    ]
  },
  {
    "id": 311,
    "category": "More to explore",
    "words": [
      "wymowa",
      "pronunciation",
      "произношение",
      "发音"
    ],
    "pinyin": "fāyīn",
    "examples": [
      "Nagrywam się, żeby ćwiczyć wymowę.",
      "I record myself to practise pronunciation.",
      "Я записываю себя, чтобы тренировать произношение.",
      "我录下自己的声音来练习发音。"
    ]
  },
  {
    "id": 312,
    "category": "More to explore",
    "words": [
      "słownictwo",
      "vocabulary",
      "словарный запас",
      "词汇"
    ],
    "pinyin": "cíhuì",
    "examples": [
      "Czytanie krótkich opowiadań pomaga poszerzać słownictwo.",
      "Reading short stories helps expand my vocabulary.",
      "Чтение коротких рассказов помогает расширять словарный запас.",
      "读短篇故事有助于扩充我的词汇。"
    ]
  },
  {
    "id": 313,
    "category": "More to explore",
    "words": [
      "tłumaczenie",
      "a translation",
      "перевод",
      "翻译"
    ],
    "pinyin": "fānyì",
    "examples": [
      "To tłumaczenie brzmi bardziej naturalnie.",
      "This translation sounds more natural.",
      "Этот перевод звучит естественнее.",
      "这个翻译听起来更自然。"
    ]
  },
  {
    "id": 314,
    "category": "More to explore",
    "words": [
      "akcent",
      "an accent",
      "акцент",
      "口音"
    ],
    "pinyin": "kǒuyīn",
    "examples": [
      "Lubię słuchać różnych akcentów.",
      "I enjoy listening to different accents.",
      "Мне нравится слушать разные акценты.",
      "我喜欢听不同的口音。"
    ]
  },
  {
    "id": 315,
    "category": "More to explore",
    "words": [
      "dialog",
      "a dialogue",
      "диалог",
      "对话"
    ],
    "pinyin": "duìhuà",
    "examples": [
      "Ćwiczyliśmy dialog w parach.",
      "We practised a dialogue in pairs.",
      "Мы разыгрывали диалог в парах.",
      "我们两人一组练习对话。"
    ]
  },
  {
    "id": 316,
    "category": "More to explore",
    "words": [
      "definicja",
      "a definition",
      "определение",
      "定义"
    ],
    "pinyin": "dìngyì",
    "examples": [
      "Czy możesz wyjaśnić tę definicję prostszymi słowami?",
      "Can you explain this definition in simpler words?",
      "Можешь объяснить это определение проще?",
      "你能用更简单的话解释这个定义吗？"
    ]
  },
  {
    "id": 317,
    "category": "More to explore",
    "words": [
      "przykład",
      "an example",
      "пример",
      "例子"
    ],
    "pinyin": "lìzi",
    "examples": [
      "Nauczyciel podał nam przydatny przykład.",
      "The teacher gave us a useful example.",
      "Учитель привёл нам полезный пример.",
      "老师给了我们一个有用的例子。"
    ]
  },
  {
    "id": 318,
    "category": "More to explore",
    "words": [
      "reguła",
      "a rule",
      "правило",
      "规则"
    ],
    "pinyin": "guīzé",
    "examples": [
      "Rozumiem regułę, ale zapominam jej używać.",
      "I understand the rule but forget to use it.",
      "Я понимаю правило, но забываю его применять.",
      "我理解这个规则，但总忘记运用。"
    ]
  },
  {
    "id": 319,
    "category": "More to explore",
    "words": [
      "wyjątek",
      "an exception",
      "исключение",
      "例外"
    ],
    "pinyin": "lìwài",
    "examples": [
      "Ten czasownik jest wyjątkiem od reguły.",
      "This verb is an exception to the rule.",
      "Этот глагол — исключение из правила.",
      "这个动词是规则的一个例外。"
    ]
  },
  {
    "id": 320,
    "category": "More to explore",
    "words": [
      "biuro",
      "an office",
      "офис",
      "办公室"
    ],
    "pinyin": "bàngōngshì",
    "examples": [
      "W biurze jest cicho, zanim wszyscy przyjdą.",
      "The office is quiet before everyone arrives.",
      "В офисе тихо, пока все не пришли.",
      "大家还没到时，办公室很安静。"
    ]
  },
  {
    "id": 321,
    "category": "More to explore",
    "words": [
      "praca",
      "a job",
      "работа",
      "工作"
    ],
    "pinyin": "gōngzuò",
    "examples": [
      "Znalazła pracę blisko domu.",
      "She found a job close to home.",
      "Она нашла работу рядом с домом.",
      "她找到了一份离家近的工作。"
    ]
  },
  {
    "id": 322,
    "category": "More to explore",
    "words": [
      "kariera",
      "a career",
      "карьера",
      "职业生涯"
    ],
    "pinyin": "zhíyè shēngyá",
    "examples": [
      "Chce zrobić karierę w projektowaniu.",
      "He wants a career in design.",
      "Он хочет сделать карьеру в дизайне.",
      "他想在设计领域发展自己的职业生涯。"
    ]
  },
  {
    "id": 323,
    "category": "More to explore",
    "words": [
      "pensja",
      "a salary",
      "зарплата",
      "工资"
    ],
    "pinyin": "gōngzī",
    "examples": [
      "Moja pensja wpływa pod koniec miesiąca.",
      "My salary arrives at the end of the month.",
      "Моя зарплата приходит в конце месяца.",
      "我的工资在月底到账。"
    ]
  },
  {
    "id": 324,
    "category": "More to explore",
    "words": [
      "umowa",
      "a contract",
      "договор",
      "合同"
    ],
    "pinyin": "hétong",
    "examples": [
      "Przeczytaj uważnie umowę przed podpisaniem.",
      "Read the contract carefully before signing.",
      "Внимательно прочитай договор перед подписанием.",
      "签字前仔细阅读合同。"
    ]
  },
  {
    "id": 325,
    "category": "More to explore",
    "words": [
      "rozmowa kwalifikacyjna",
      "an interview",
      "собеседование",
      "面试"
    ],
    "pinyin": "miànshì",
    "examples": [
      "Przygotowałam odpowiedzi przed rozmową kwalifikacyjną.",
      "I prepared answers before the interview.",
      "Я подготовила ответы перед собеседованием.",
      "面试前，我准备好了回答。"
    ]
  },
  {
    "id": 326,
    "category": "More to explore",
    "words": [
      "projekt",
      "a project",
      "проект",
      "项目"
    ],
    "pinyin": "xiàngmù",
    "examples": [
      "Podzieliliśmy projekt na mniejsze etapy.",
      "We divided the project into smaller steps.",
      "Мы разделили проект на небольшие этапы.",
      "我们把项目分成了几个小步骤。"
    ]
  },
  {
    "id": 327,
    "category": "More to explore",
    "words": [
      "zadanie",
      "a task",
      "задача",
      "任务"
    ],
    "pinyin": "rènwu",
    "examples": [
      "Skończę to zadanie przed przerwą.",
      "I will finish this task before taking a break.",
      "Я закончу эту задачу перед перерывом.",
      "我会先完成这个任务再休息。"
    ]
  },
  {
    "id": 328,
    "category": "More to explore",
    "words": [
      "raport",
      "a report",
      "отчёт",
      "报告"
    ],
    "pinyin": "bàogào",
    "examples": [
      "Raport zawiera wyniki z zeszłego miesiąca.",
      "The report includes last month's results.",
      "Отчёт содержит результаты прошлого месяца.",
      "报告包括上个月的结果。"
    ]
  },
  {
    "id": 329,
    "category": "More to explore",
    "words": [
      "prezentacja",
      "a presentation",
      "презентация",
      "演示"
    ],
    "pinyin": "yǎnshì",
    "examples": [
      "Moja prezentacja ma więcej obrazków niż tekstu.",
      "My presentation has more pictures than text.",
      "В моей презентации больше картинок, чем текста.",
      "我的演示中图片比文字多。"
    ]
  },
  {
    "id": 330,
    "category": "More to explore",
    "words": [
      "dokument",
      "a document",
      "документ",
      "文件"
    ],
    "pinyin": "wénjiàn",
    "examples": [
      "Zapisz dokument, zanim go zamkniesz.",
      "Please save the document before closing it.",
      "Сохрани документ, прежде чем закрыть его.",
      "关闭文件前请先保存。"
    ]
  },
  {
    "id": 331,
    "category": "More to explore",
    "words": [
      "folder",
      "a folder",
      "папка",
      "文件夹"
    ],
    "pinyin": "wénjiànjiā",
    "examples": [
      "Trzymam wszystkie zdjęcia w jednym folderze.",
      "I keep all the photos in one folder.",
      "Я храню все фотографии в одной папке.",
      "我把所有照片放在一个文件夹里。"
    ]
  },
  {
    "id": 332,
    "category": "More to explore",
    "words": [
      "drukarka",
      "a printer",
      "принтер",
      "打印机"
    ],
    "pinyin": "dǎyìnjī",
    "examples": [
      "W drukarce znowu skończył się papier.",
      "The printer ran out of paper again.",
      "В принтере снова закончилась бумага.",
      "打印机又没纸了。"
    ]
  },
  {
    "id": 333,
    "category": "More to explore",
    "words": [
      "zszywacz",
      "a stapler",
      "степлер",
      "订书机"
    ],
    "pinyin": "dìngshūjī",
    "examples": [
      "Użyj zszywacza, żeby połączyć te strony.",
      "Use the stapler to attach these pages.",
      "Скрепи эти страницы степлером.",
      "用订书机把这些页订在一起。"
    ]
  },
  {
    "id": 334,
    "category": "More to explore",
    "words": [
      "spinacz",
      "a paper clip",
      "скрепка",
      "回形针"
    ],
    "pinyin": "huíxíngzhēn",
    "examples": [
      "Spinacz trzyma notatki razem.",
      "A paper clip holds the notes together.",
      "Скрепка держит записи вместе.",
      "回形针把这些笔记夹在一起。"
    ]
  },
  {
    "id": 335,
    "category": "More to explore",
    "words": [
      "kalkulator",
      "a calculator",
      "калькулятор",
      "计算器"
    ],
    "pinyin": "jìsuànqì",
    "examples": [
      "Sprawdziłam sumę na kalkulatorze.",
      "I checked the total with a calculator.",
      "Я проверила сумму на калькуляторе.",
      "我用计算器核对了总数。"
    ]
  },
  {
    "id": 336,
    "category": "More to explore",
    "words": [
      "kalendarz",
      "a calendar",
      "календарь",
      "日历"
    ],
    "pinyin": "rìlì",
    "examples": [
      "Zaznaczyłam datę w kalendarzu.",
      "I marked the date on my calendar.",
      "Я отметила дату в календаре.",
      "我在日历上标出了日期。"
    ]
  },
  {
    "id": 337,
    "category": "More to explore",
    "words": [
      "harmonogram",
      "a schedule",
      "расписание",
      "日程表"
    ],
    "pinyin": "rìchéngbiǎo",
    "examples": [
      "W moim harmonogramie jest czas na krótki spacer.",
      "My schedule leaves time for a short walk.",
      "В моём расписании есть время для короткой прогулки.",
      "我的日程表里留出了短暂散步的时间。"
    ]
  },
  {
    "id": 338,
    "category": "More to explore",
    "words": [
      "przerwa",
      "a break",
      "перерыв",
      "休息时间"
    ],
    "pinyin": "xiūxi shíjiān",
    "examples": [
      "Zróbmy przerwę po tym ćwiczeniu.",
      "Let's take a break after this exercise.",
      "Давай сделаем перерыв после этого упражнения.",
      "做完这个练习，我们安排一点休息时间吧。"
    ]
  },
  {
    "id": 339,
    "category": "More to explore",
    "words": [
      "awans",
      "a promotion",
      "повышение",
      "晋升"
    ],
    "pinyin": "jìnshēng",
    "examples": [
      "Świętowała awans z przyjaciółmi.",
      "She celebrated her promotion with friends.",
      "Она отметила повышение с друзьями.",
      "她和朋友们一起庆祝晋升。"
    ]
  },
  {
    "id": 340,
    "category": "More to explore",
    "words": [
      "budżet",
      "a budget",
      "бюджет",
      "预算"
    ],
    "pinyin": "yùsuàn",
    "examples": [
      "Ustaliliśmy budżet na podróż.",
      "We set a budget for the trip.",
      "Мы составили бюджет поездки.",
      "我们为旅行制定了预算。"
    ]
  },
  {
    "id": 341,
    "category": "More to explore",
    "words": [
      "faktura",
      "an invoice",
      "счёт на оплату",
      "发票"
    ],
    "pinyin": "fāpiào",
    "examples": [
      "Faktura przyszła e-mailem.",
      "The invoice arrived by email.",
      "Счёт на оплату пришёл по электронной почте.",
      "发票通过电子邮件发来了。"
    ]
  },
  {
    "id": 342,
    "category": "More to explore",
    "words": [
      "płatność",
      "a payment",
      "платёж",
      "付款"
    ],
    "pinyin": "fùkuǎn",
    "examples": [
      "Płatność została zrealizowana dziś rano.",
      "The payment went through this morning.",
      "Платёж прошёл сегодня утром.",
      "付款今天早上完成了。"
    ]
  },
  {
    "id": 343,
    "category": "More to explore",
    "words": [
      "dług",
      "a debt",
      "долг",
      "债务"
    ],
    "pinyin": "zhàiwù",
    "examples": [
      "Spłacił dług w zeszłym roku.",
      "He paid off the debt last year.",
      "Он погасил долг в прошлом году.",
      "他去年还清了债务。"
    ]
  },
  {
    "id": 344,
    "category": "More to explore",
    "words": [
      "pożyczka",
      "a loan",
      "заём",
      "贷款"
    ],
    "pinyin": "dàikuǎn",
    "examples": [
      "Wzięli pożyczkę na remont domu.",
      "They took out a loan to renovate the house.",
      "Они взяли заём на ремонт дома.",
      "他们申请了贷款来翻新房子。"
    ]
  },
  {
    "id": 345,
    "category": "More to explore",
    "words": [
      "zysk",
      "a profit",
      "прибыль",
      "利润"
    ],
    "pinyin": "lìrùn",
    "examples": [
      "Sklep osiągnął niewielki zysk w tym miesiącu.",
      "The shop made a small profit this month.",
      "Магазин получил небольшую прибыль в этом месяце.",
      "商店这个月获得了少量利润。"
    ]
  },
  {
    "id": 346,
    "category": "More to explore",
    "words": [
      "strata",
      "a loss",
      "убыток",
      "亏损"
    ],
    "pinyin": "kuīsǔn",
    "examples": [
      "Firma zgłosiła stratę w tym roku.",
      "The company reported a loss this year.",
      "Компания сообщила об убытке в этом году.",
      "公司报告今年出现了亏损。"
    ]
  },
  {
    "id": 347,
    "category": "More to explore",
    "words": [
      "cena",
      "a price",
      "цена",
      "价格"
    ],
    "pinyin": "jiàgé",
    "examples": [
      "Cena obejmuje śniadanie.",
      "The price includes breakfast.",
      "В цену включён завтрак.",
      "价格包含早餐。"
    ]
  },
  {
    "id": 348,
    "category": "More to explore",
    "words": [
      "moneta",
      "a coin",
      "монета",
      "硬币"
    ],
    "pinyin": "yìngbì",
    "examples": [
      "Znalazłam monetę pod sofą.",
      "I found a coin under the sofa.",
      "Я нашла монету под диваном.",
      "我在沙发下面找到了一枚硬币。"
    ]
  },
  {
    "id": 349,
    "category": "More to explore",
    "words": [
      "banknot",
      "a banknote",
      "банкнота",
      "纸币"
    ],
    "pinyin": "zhǐbì",
    "examples": [
      "Ta maszyna nie przyjmuje banknotów.",
      "This machine does not accept banknotes.",
      "Этот автомат не принимает банкноты.",
      "这台机器不收纸币。"
    ]
  },
  {
    "id": 350,
    "category": "More to explore",
    "words": [
      "sklep",
      "a shop",
      "магазин",
      "商店"
    ],
    "pinyin": "shāngdiàn",
    "examples": [
      "Sklep zamyka się o szóstej.",
      "The shop closes at six.",
      "Магазин закрывается в шесть.",
      "商店六点关门。"
    ]
  },
  {
    "id": 351,
    "category": "More to explore",
    "words": [
      "targ",
      "a market",
      "рынок",
      "市场"
    ],
    "pinyin": "shìchǎng",
    "examples": [
      "Kupiliśmy warzywa na targu.",
      "We bought vegetables at the market.",
      "Мы купили овощи на рынке.",
      "我们在市场买了蔬菜。"
    ]
  },
  {
    "id": 352,
    "category": "More to explore",
    "words": [
      "supermarket",
      "a supermarket",
      "супермаркет",
      "超市"
    ],
    "pinyin": "chāoshì",
    "examples": [
      "W soboty w supermarkecie jest tłoczno.",
      "The supermarket is busy on Saturdays.",
      "По субботам в супермаркете много людей.",
      "星期六超市里人很多。"
    ]
  },
  {
    "id": 353,
    "category": "More to explore",
    "words": [
      "piekarnia",
      "a bakery",
      "пекарня",
      "面包店"
    ],
    "pinyin": "miànbāodiàn",
    "examples": [
      "W piekarni pachnie świeżym chlebem.",
      "The bakery smells of fresh bread.",
      "В пекарне пахнет свежим хлебом.",
      "面包店里飘着新鲜面包的香味。"
    ]
  },
  {
    "id": 354,
    "category": "More to explore",
    "words": [
      "apteka",
      "a pharmacy",
      "аптека",
      "药店"
    ],
    "pinyin": "yàodiàn",
    "examples": [
      "Czy w pobliżu jest apteka?",
      "Is there a pharmacy nearby?",
      "Поблизости есть аптека?",
      "附近有药店吗？"
    ]
  },
  {
    "id": 355,
    "category": "More to explore",
    "words": [
      "szpital",
      "a hospital",
      "больница",
      "医院"
    ],
    "pinyin": "yīyuàn",
    "examples": [
      "Odwiedziliśmy przyjaciela w szpitalu.",
      "We visited our friend in hospital.",
      "Мы навестили друга в больнице.",
      "我们去医院看望了朋友。"
    ]
  },
  {
    "id": 356,
    "category": "More to explore",
    "words": [
      "bank",
      "a bank",
      "банк",
      "银行"
    ],
    "pinyin": "yínháng",
    "examples": [
      "Bank jest obok poczty.",
      "The bank is next to the post office.",
      "Банк находится рядом с почтой.",
      "银行就在邮局旁边。"
    ]
  },
  {
    "id": 357,
    "category": "More to explore",
    "words": [
      "poczta",
      "a post office",
      "почта",
      "邮局"
    ],
    "pinyin": "yóujú",
    "examples": [
      "Wysłałam paczkę na poczcie.",
      "I sent the parcel from the post office.",
      "Я отправила посылку на почте.",
      "我在邮局寄了包裹。"
    ]
  },
  {
    "id": 358,
    "category": "More to explore",
    "words": [
      "restauracja",
      "a restaurant",
      "ресторан",
      "餐厅"
    ],
    "pinyin": "cāntīng",
    "examples": [
      "Zarezerwowaliśmy stolik w restauracji.",
      "We booked a table at the restaurant.",
      "Мы забронировали столик в ресторане.",
      "我们在餐厅订了一张桌子。"
    ]
  },
  {
    "id": 359,
    "category": "More to explore",
    "words": [
      "kawiarnia",
      "a café",
      "кафе",
      "咖啡馆"
    ],
    "pinyin": "kāfēiguǎn",
    "examples": [
      "Ta kawiarnia ma cichy kącik do czytania.",
      "This café has a quiet corner for reading.",
      "В этом кафе есть тихий уголок для чтения.",
      "这家咖啡馆有个安静的阅读角落。"
    ]
  },
  {
    "id": 360,
    "category": "More to explore",
    "words": [
      "kino",
      "a cinema",
      "кинотеатр",
      "电影院"
    ],
    "pinyin": "diànyǐngyuàn",
    "examples": [
      "Dzisiaj wieczorem idziemy do kina.",
      "We are going to the cinema tonight.",
      "Сегодня вечером мы идём в кинотеатр.",
      "我们今晚去电影院。"
    ]
  },
  {
    "id": 361,
    "category": "More to explore",
    "words": [
      "teatr",
      "a theatre",
      "театр",
      "剧院"
    ],
    "pinyin": "jùyuàn",
    "examples": [
      "Teatr wystawia nową sztukę.",
      "The theatre is showing a new play.",
      "В театре идёт новая пьеса.",
      "剧院正在上演一部新戏。"
    ]
  },
  {
    "id": 362,
    "category": "More to explore",
    "words": [
      "stadion",
      "a stadium",
      "стадион",
      "体育场"
    ],
    "pinyin": "tǐyùchǎng",
    "examples": [
      "Stadion był pełen kibicujących fanów.",
      "The stadium was full of cheering fans.",
      "Стадион был полон болельщиков.",
      "体育场里坐满了欢呼的球迷。"
    ]
  },
  {
    "id": 363,
    "category": "More to explore",
    "words": [
      "basen",
      "a swimming pool",
      "бассейн",
      "游泳池"
    ],
    "pinyin": "yóuyǒngchí",
    "examples": [
      "Basen otwiera się wcześnie.",
      "The swimming pool opens early.",
      "Бассейн открывается рано.",
      "游泳池很早就开门。"
    ]
  },
  {
    "id": 364,
    "category": "More to explore",
    "words": [
      "siłownia",
      "a gym",
      "тренажёрный зал",
      "健身房"
    ],
    "pinyin": "jiànshēnfáng",
    "examples": [
      "Chodzę na siłownię po pracy.",
      "I go to the gym after work.",
      "После работы я хожу в тренажёрный зал.",
      "我下班后去健身房。"
    ]
  },
  {
    "id": 365,
    "category": "More to explore",
    "words": [
      "plac zabaw",
      "a playground",
      "детская площадка",
      "儿童游乐场"
    ],
    "pinyin": "értóng yóulèchǎng",
    "examples": [
      "Dzieci bawią się na placu zabaw.",
      "The children are playing at the playground.",
      "Дети играют на детской площадке.",
      "孩子们在儿童游乐场玩。"
    ]
  },
  {
    "id": 366,
    "category": "More to explore",
    "words": [
      "plac",
      "a square",
      "площадь",
      "广场"
    ],
    "pinyin": "guǎngchǎng",
    "examples": [
      "Spotkaliśmy się na głównym placu.",
      "We met in the main square.",
      "Мы встретились на главной площади.",
      "我们在主广场见面了。"
    ]
  },
  {
    "id": 367,
    "category": "More to explore",
    "words": [
      "fontanna",
      "a fountain",
      "фонтан",
      "喷泉"
    ],
    "pinyin": "pēnquán",
    "examples": [
      "Usiedliśmy obok fontanny.",
      "We sat beside the fountain.",
      "Мы сели рядом с фонтаном.",
      "我们坐在喷泉旁边。"
    ]
  },
  {
    "id": 368,
    "category": "More to explore",
    "words": [
      "pomnik",
      "a monument",
      "памятник",
      "纪念碑"
    ],
    "pinyin": "jìniànbēi",
    "examples": [
      "Pomnik stoi w centrum miasta.",
      "The monument stands in the centre of town.",
      "Памятник стоит в центре города.",
      "纪念碑坐落在市中心。"
    ]
  },
  {
    "id": 369,
    "category": "More to explore",
    "words": [
      "zamek",
      "a castle",
      "замок",
      "城堡"
    ],
    "pinyin": "chéngbǎo",
    "examples": [
      "Zwiedziliśmy stary zamek.",
      "We explored the old castle.",
      "Мы осмотрели старый замок.",
      "我们参观了古老的城堡。"
    ]
  },
  {
    "id": 370,
    "category": "More to explore",
    "words": [
      "wieża",
      "a tower",
      "башня",
      "塔"
    ],
    "pinyin": "tǎ",
    "examples": [
      "Z wieży widać całe miasto.",
      "The tower offers a view of the whole city.",
      "С башни виден весь город.",
      "从塔上可以看到整座城市。"
    ]
  },
  {
    "id": 371,
    "category": "More to explore",
    "words": [
      "kościół",
      "a church",
      "церковь",
      "教堂"
    ],
    "pinyin": "jiàotáng",
    "examples": [
      "Słyszeliśmy dzwony z kościoła.",
      "We heard bells from the church.",
      "Мы слышали колокола церкви.",
      "我们听见了教堂的钟声。"
    ]
  },
  {
    "id": 372,
    "category": "More to explore",
    "words": [
      "świątynia",
      "a temple",
      "храм",
      "寺庙"
    ],
    "pinyin": "sìmiào",
    "examples": [
      "Zwiedzający zdjęli buty przed wejściem do świątyni.",
      "Visitors removed their shoes before entering the temple.",
      "Посетители сняли обувь перед входом в храм.",
      "游客进入寺庙前脱了鞋。"
    ]
  },
  {
    "id": 373,
    "category": "More to explore",
    "words": [
      "tunel",
      "a tunnel",
      "туннель",
      "隧道"
    ],
    "pinyin": "suìdào",
    "examples": [
      "Pociąg przejechał przez długi tunel.",
      "The train went through a long tunnel.",
      "Поезд проехал через длинный туннель.",
      "火车穿过了一条长隧道。"
    ]
  },
  {
    "id": 374,
    "category": "More to explore",
    "words": [
      "chodnik",
      "a pavement",
      "тротуар",
      "人行道"
    ],
    "pinyin": "rénxíngdào",
    "examples": [
      "Nie wjeżdżaj rowerem na chodnik.",
      "Keep your bicycle off the pavement.",
      "Не заезжай на велосипеде на тротуар.",
      "不要把自行车骑到人行道上。"
    ]
  },
  {
    "id": 375,
    "category": "More to explore",
    "words": [
      "przejście dla pieszych",
      "a crossing",
      "пешеходный переход",
      "人行横道"
    ],
    "pinyin": "rénxíng héngdào",
    "examples": [
      "Skorzystaj z przejścia dla pieszych, żeby przejść na drugą stronę.",
      "Use the crossing to get to the other side.",
      "Воспользуйся пешеходным переходом, чтобы попасть на другую сторону.",
      "走人行横道到对面去。"
    ]
  },
  {
    "id": 376,
    "category": "More to explore",
    "words": [
      "korek uliczny",
      "a traffic jam",
      "пробка",
      "堵车"
    ],
    "pinyin": "dǔchē",
    "examples": [
      "Utknęliśmy w korku ulicznym na godzinę.",
      "We were stuck in a traffic jam for an hour.",
      "Мы простояли в пробке целый час.",
      "我们堵车堵了一个小时。"
    ]
  },
  {
    "id": 377,
    "category": "More to explore",
    "words": [
      "taksówka",
      "a taxi",
      "такси",
      "出租车"
    ],
    "pinyin": "chūzūchē",
    "examples": [
      "Pojechaliśmy taksówką na lotnisko.",
      "We took a taxi to the airport.",
      "Мы поехали в аэропорт на такси.",
      "我们坐出租车去了机场。"
    ]
  },
  {
    "id": 378,
    "category": "More to explore",
    "words": [
      "prom",
      "a ferry",
      "паром",
      "渡轮"
    ],
    "pinyin": "dùlún",
    "examples": [
      "Prom zabiera nas na wyspę.",
      "The ferry takes us to the island.",
      "Паром везёт нас на остров.",
      "渡轮载我们去岛上。"
    ]
  },
  {
    "id": 379,
    "category": "More to explore",
    "words": [
      "port",
      "a port",
      "порт",
      "港口"
    ],
    "pinyin": "gǎngkǒu",
    "examples": [
      "Statek dotarł do portu o świcie.",
      "The ship arrived at the port at dawn.",
      "Корабль прибыл в порт на рассвете.",
      "船在黎明时抵达港口。"
    ]
  },
  {
    "id": 380,
    "category": "More to explore",
    "words": [
      "krowa",
      "a cow",
      "корова",
      "奶牛"
    ],
    "pinyin": "nǎiniú",
    "examples": [
      "Krowa pasie się przy płocie.",
      "A cow is grazing beside the fence.",
      "Корова пасётся у забора.",
      "一头奶牛在围栏旁吃草。"
    ]
  },
  {
    "id": 381,
    "category": "More to explore",
    "words": [
      "świnia",
      "a pig",
      "свинья",
      "猪"
    ],
    "pinyin": "zhū",
    "examples": [
      "Świnia odpoczywa w cieniu.",
      "The pig is resting in the shade.",
      "Свинья отдыхает в тени.",
      "猪在阴凉处休息。"
    ]
  },
  {
    "id": 382,
    "category": "More to explore",
    "words": [
      "owca",
      "a sheep",
      "овца",
      "绵羊"
    ],
    "pinyin": "miányáng",
    "examples": [
      "Owca weszła na ścieżkę.",
      "A sheep wandered onto the path.",
      "Овца вышла на тропинку.",
      "一只绵羊走到了小路上。"
    ]
  },
  {
    "id": 383,
    "category": "More to explore",
    "words": [
      "koza",
      "a goat",
      "коза",
      "山羊"
    ],
    "pinyin": "shānyáng",
    "examples": [
      "Koza wspięła się na skałę.",
      "The goat climbed onto a rock.",
      "Коза забралась на скалу.",
      "山羊爬上了一块岩石。"
    ]
  },
  {
    "id": 384,
    "category": "More to explore",
    "words": [
      "kura",
      "a chicken",
      "курица",
      "鸡"
    ],
    "pinyin": "jī",
    "examples": [
      "Kura zniosła dziś rano jajko.",
      "The chicken laid an egg this morning.",
      "Курица снесла яйцо сегодня утром.",
      "这只鸡今天早上下了一个蛋。"
    ]
  },
  {
    "id": 385,
    "category": "More to explore",
    "words": [
      "kaczka",
      "a duck",
      "утка",
      "鸭子"
    ],
    "pinyin": "yāzi",
    "examples": [
      "Kaczka przepłynęła przez staw.",
      "A duck swam across the pond.",
      "Утка переплыла пруд.",
      "一只鸭子游过了池塘。"
    ]
  },
  {
    "id": 386,
    "category": "More to explore",
    "words": [
      "gęś",
      "a goose",
      "гусь",
      "鹅"
    ],
    "pinyin": "é",
    "examples": [
      "Gęś zablokowała ścieżkę i nie chciała się ruszyć.",
      "A goose blocked the path and refused to move.",
      "Гусь перегородил тропинку и не хотел уходить.",
      "一只鹅挡住了小路，怎么也不肯走。"
    ]
  },
  {
    "id": 387,
    "category": "More to explore",
    "words": [
      "indyk",
      "a turkey",
      "индюк",
      "火鸡"
    ],
    "pinyin": "huǒjī",
    "examples": [
      "Indyk rozłożył pióra ogona.",
      "The turkey spread its tail feathers.",
      "Индюк распустил хвост.",
      "火鸡展开了尾羽。"
    ]
  },
  {
    "id": 388,
    "category": "More to explore",
    "words": [
      "jeleń",
      "a deer",
      "олень",
      "鹿"
    ],
    "pinyin": "lù",
    "examples": [
      "Obserwowaliśmy jelenia na skraju lasu.",
      "We watched a deer at the edge of the forest.",
      "Мы наблюдали за оленем на опушке леса.",
      "我们看着森林边缘的一只鹿。"
    ]
  },
  {
    "id": 389,
    "category": "More to explore",
    "words": [
      "wiewiórka",
      "a squirrel",
      "белка",
      "松鼠"
    ],
    "pinyin": "sōngshǔ",
    "examples": [
      "Wiewiórka schowała orzech pod drzewem.",
      "A squirrel hid a nut under the tree.",
      "Белка спрятала орех под деревом.",
      "松鼠把一颗坚果藏在树下。"
    ]
  },
  {
    "id": 390,
    "category": "More to explore",
    "words": [
      "jeż",
      "a hedgehog",
      "ёж",
      "刺猬"
    ],
    "pinyin": "cìwei",
    "examples": [
      "Jeż pojawił się w ogrodzie o zmierzchu.",
      "A hedgehog appeared in the garden at dusk.",
      "Ёж появился в саду в сумерках.",
      "黄昏时，一只刺猬出现在花园里。"
    ]
  },
  {
    "id": 391,
    "category": "More to explore",
    "words": [
      "nietoperz",
      "a bat",
      "летучая мышь",
      "蝙蝠"
    ],
    "pinyin": "biānfú",
    "examples": [
      "Nietoperz wyleciał z jaskini.",
      "A bat flew out of the cave.",
      "Летучая мышь вылетела из пещеры.",
      "一只蝙蝠从洞穴里飞出来。"
    ]
  },
  {
    "id": 392,
    "category": "More to explore",
    "words": [
      "żaba",
      "a frog",
      "лягушка",
      "青蛙"
    ],
    "pinyin": "qīngwā",
    "examples": [
      "Żaba wskoczyła do stawu.",
      "A frog jumped into the pond.",
      "Лягушка прыгнула в пруд.",
      "青蛙跳进了池塘。"
    ]
  },
  {
    "id": 393,
    "category": "More to explore",
    "words": [
      "wąż",
      "a snake",
      "змея",
      "蛇"
    ],
    "pinyin": "shé",
    "examples": [
      "Wąż zniknął w trawie.",
      "The snake disappeared into the grass.",
      "Змея исчезла в траве.",
      "蛇消失在草丛中。"
    ]
  },
  {
    "id": 394,
    "category": "More to explore",
    "words": [
      "żółw",
      "a turtle",
      "черепаха",
      "龟"
    ],
    "pinyin": "guī",
    "examples": [
      "Żółw powoli szedł w stronę wody.",
      "The turtle moved slowly towards the water.",
      "Черепаха медленно двигалась к воде.",
      "龟慢慢地向水边移动。"
    ]
  },
  {
    "id": 395,
    "category": "More to explore",
    "words": [
      "jaszczurka",
      "a lizard",
      "ящерица",
      "蜥蜴"
    ],
    "pinyin": "xīyì",
    "examples": [
      "Jaszczurka wygrzewała się na kamieniu.",
      "A lizard warmed itself on a stone.",
      "Ящерица грелась на камне.",
      "蜥蜴在石头上晒太阳。"
    ]
  },
  {
    "id": 396,
    "category": "More to explore",
    "words": [
      "krokodyl",
      "a crocodile",
      "крокодил",
      "鳄鱼"
    ],
    "pinyin": "èyú",
    "examples": [
      "Krokodyl leżał nieruchomo przy rzece.",
      "The crocodile lay motionless by the river.",
      "Крокодил неподвижно лежал у реки.",
      "鳄鱼一动不动地趴在河边。"
    ]
  },
  {
    "id": 397,
    "category": "More to explore",
    "words": [
      "słoń",
      "an elephant",
      "слон",
      "大象"
    ],
    "pinyin": "dàxiàng",
    "examples": [
      "Słoń rozpryskiwał wodę trąbą.",
      "The elephant sprayed water with its trunk.",
      "Слон брызгал водой из хобота.",
      "大象用鼻子喷水。"
    ]
  },
  {
    "id": 398,
    "category": "More to explore",
    "words": [
      "lew",
      "a lion",
      "лев",
      "狮子"
    ],
    "pinyin": "shīzi",
    "examples": [
      "Lew odpoczywał pod drzewem.",
      "The lion rested under a tree.",
      "Лев отдыхал под деревом.",
      "狮子在树下休息。"
    ]
  },
  {
    "id": 399,
    "category": "More to explore",
    "words": [
      "tygrys",
      "a tiger",
      "тигр",
      "老虎"
    ],
    "pinyin": "lǎohǔ",
    "examples": [
      "Tygrys cicho szedł przez wysoką trawę.",
      "The tiger walked quietly through the tall grass.",
      "Тигр тихо шёл сквозь высокую траву.",
      "老虎悄悄穿过高高的草丛。"
    ]
  },
  {
    "id": 400,
    "category": "More to explore",
    "words": [
      "żyrafa",
      "a giraffe",
      "жираф",
      "长颈鹿"
    ],
    "pinyin": "chángjǐnglù",
    "examples": [
      "Żyrafa dosięgnęła najwyższych liści.",
      "The giraffe reached the highest leaves.",
      "Жираф дотянулся до самых высоких листьев.",
      "长颈鹿够到了最高处的叶子。"
    ]
  },
  {
    "id": 401,
    "category": "More to explore",
    "words": [
      "zebra",
      "a zebra",
      "зебра",
      "斑马"
    ],
    "pinyin": "bānmǎ",
    "examples": [
      "Zebra stała obok wodopoju.",
      "A zebra stood beside the watering hole.",
      "Зебра стояла у водопоя.",
      "斑马站在水塘旁边。"
    ]
  },
  {
    "id": 402,
    "category": "More to explore",
    "words": [
      "małpa",
      "a monkey",
      "обезьяна",
      "猴子"
    ],
    "pinyin": "hóuzi",
    "examples": [
      "Małpa przeskakiwała z gałęzi na gałąź.",
      "The monkey climbed from branch to branch.",
      "Обезьяна перебиралась с ветки на ветку.",
      "猴子在树枝之间爬来爬去。"
    ]
  },
  {
    "id": 403,
    "category": "More to explore",
    "words": [
      "panda",
      "a panda",
      "панда",
      "熊猫"
    ],
    "pinyin": "xióngmāo",
    "examples": [
      "Panda cały dzień jadła bambus.",
      "The panda ate bamboo all day.",
      "Панда весь день ела бамбук.",
      "熊猫一整天都在吃竹子。"
    ]
  },
  {
    "id": 404,
    "category": "More to explore",
    "words": [
      "pingwin",
      "a penguin",
      "пингвин",
      "企鹅"
    ],
    "pinyin": "qǐ'é",
    "examples": [
      "Pingwin zanurkował w zimnej wodzie.",
      "The penguin dived into the cold water.",
      "Пингвин нырнул в холодную воду.",
      "企鹅跳进了冰冷的水里。"
    ]
  },
  {
    "id": 405,
    "category": "More to explore",
    "words": [
      "delfin",
      "a dolphin",
      "дельфин",
      "海豚"
    ],
    "pinyin": "hǎitún",
    "examples": [
      "Delfin wyskoczył obok naszej łodzi.",
      "A dolphin jumped beside our boat.",
      "Дельфин выпрыгнул рядом с нашей лодкой.",
      "一只海豚在我们的船旁跃出水面。"
    ]
  },
  {
    "id": 406,
    "category": "More to explore",
    "words": [
      "wieloryb",
      "a whale",
      "кит",
      "鲸"
    ],
    "pinyin": "jīng",
    "examples": [
      "Zobaczyliśmy wieloryba ze statku.",
      "We saw a whale from the ship.",
      "Мы увидели кита с корабля.",
      "我们从船上看见了一头鲸。"
    ]
  },
  {
    "id": 407,
    "category": "More to explore",
    "words": [
      "rekin",
      "a shark",
      "акула",
      "鲨鱼"
    ],
    "pinyin": "shāyú",
    "examples": [
      "Rekin przepłynął obok podwodnej kamery.",
      "A shark swam past the underwater camera.",
      "Акула проплыла мимо подводной камеры.",
      "一条鲨鱼游过水下相机旁。"
    ]
  },
  {
    "id": 408,
    "category": "More to explore",
    "words": [
      "ośmiornica",
      "an octopus",
      "осьминог",
      "章鱼"
    ],
    "pinyin": "zhāngyú",
    "examples": [
      "Ośmiornica ukryła się między skałami.",
      "The octopus hid between the rocks.",
      "Осьминог спрятался между камнями.",
      "章鱼躲在岩石之间。"
    ]
  },
  {
    "id": 409,
    "category": "More to explore",
    "words": [
      "krab",
      "a crab",
      "краб",
      "螃蟹"
    ],
    "pinyin": "pángxiè",
    "examples": [
      "Krab przeszedł bokiem po piasku.",
      "A crab walked sideways across the sand.",
      "Краб боком прошёл по песку.",
      "螃蟹横着爬过沙地。"
    ]
  },
  {
    "id": 410,
    "category": "More to explore",
    "words": [
      "wyspa",
      "an island",
      "остров",
      "岛"
    ],
    "pinyin": "dǎo",
    "examples": [
      "Dotarliśmy na wyspę łodzią.",
      "We reached the island by boat.",
      "Мы добрались до острова на лодке.",
      "我们坐船到了岛上。"
    ]
  },
  {
    "id": 411,
    "category": "More to explore",
    "words": [
      "pustynia",
      "a desert",
      "пустыня",
      "沙漠"
    ],
    "pinyin": "shāmò",
    "examples": [
      "Pustynia wyglądała złociście o zachodzie słońca.",
      "The desert looked golden at sunset.",
      "На закате пустыня казалась золотой.",
      "日落时，沙漠看起来金灿灿的。"
    ]
  },
  {
    "id": 412,
    "category": "More to explore",
    "words": [
      "dolina",
      "a valley",
      "долина",
      "山谷"
    ],
    "pinyin": "shāngǔ",
    "examples": [
      "Przez dolinę płynie wąska rzeka.",
      "A narrow river runs through the valley.",
      "По долине течёт узкая река.",
      "一条窄窄的河流经山谷。"
    ]
  },
  {
    "id": 413,
    "category": "More to explore",
    "words": [
      "wzgórze",
      "a hill",
      "холм",
      "小山"
    ],
    "pinyin": "xiǎoshān",
    "examples": [
      "Weszliśmy na wzgórze, żeby zobaczyć widok.",
      "We climbed the hill to see the view.",
      "Мы поднялись на холм, чтобы полюбоваться видом.",
      "我们爬上小山看风景。"
    ]
  },
  {
    "id": 414,
    "category": "More to explore",
    "words": [
      "wodospad",
      "a waterfall",
      "водопад",
      "瀑布"
    ],
    "pinyin": "pùbù",
    "examples": [
      "Usłyszeliśmy wodospad, zanim go zobaczyliśmy.",
      "We heard the waterfall before we saw it.",
      "Мы услышали водопад раньше, чем увидели его.",
      "还没看见瀑布，我们就听见了它的声音。"
    ]
  },
  {
    "id": 415,
    "category": "More to explore",
    "words": [
      "jaskinia",
      "a cave",
      "пещера",
      "洞穴"
    ],
    "pinyin": "dòngxué",
    "examples": [
      "W jaskini było chłodno i ciemno.",
      "The cave was cool and dark inside.",
      "Внутри пещеры было прохладно и темно.",
      "洞穴里又凉又暗。"
    ]
  },
  {
    "id": 416,
    "category": "More to explore",
    "words": [
      "wulkan",
      "a volcano",
      "вулкан",
      "火山"
    ],
    "pinyin": "huǒshān",
    "examples": [
      "Ze wsi było widać wulkan.",
      "We could see the volcano from the village.",
      "Из деревни был виден вулкан.",
      "从村庄能看到火山。"
    ]
  },
  {
    "id": 417,
    "category": "More to explore",
    "words": [
      "skała",
      "a rock",
      "скала",
      "岩石"
    ],
    "pinyin": "yánshí",
    "examples": [
      "Usiedliśmy na płaskiej skale, żeby odpocząć.",
      "We sat on a flat rock to rest.",
      "Мы сели отдохнуть на плоской скале.",
      "我们坐在平坦的岩石上休息。"
    ]
  },
  {
    "id": 418,
    "category": "More to explore",
    "words": [
      "kamień",
      "a stone",
      "камень",
      "石头"
    ],
    "pinyin": "shítou",
    "examples": [
      "Znalazłam gładki kamień przy rzece.",
      "I found a smooth stone by the river.",
      "Я нашла гладкий камень у реки.",
      "我在河边找到了一块光滑的石头。"
    ]
  },
  {
    "id": 419,
    "category": "More to explore",
    "words": [
      "piasek",
      "sand",
      "песок",
      "沙子"
    ],
    "pinyin": "shāzi",
    "examples": [
      "W moich butach jest piasek.",
      "There is sand in my shoes.",
      "В моих ботинках песок.",
      "我的鞋里有沙子。"
    ]
  },
  {
    "id": 420,
    "category": "More to explore",
    "words": [
      "gleba",
      "soil",
      "почва",
      "土壤"
    ],
    "pinyin": "tǔrǎng",
    "examples": [
      "Gleba jest jeszcze wilgotna po deszczu.",
      "The soil is still damp after the rain.",
      "После дождя почва ещё влажная.",
      "下雨后，土壤还是湿的。"
    ]
  },
  {
    "id": 421,
    "category": "More to explore",
    "words": [
      "trawa",
      "grass",
      "трава",
      "草"
    ],
    "pinyin": "cǎo",
    "examples": [
      "Trawa wymaga skoszenia.",
      "The grass needs cutting.",
      "Траву нужно подстричь.",
      "草该修剪了。"
    ]
  },
  {
    "id": 422,
    "category": "More to explore",
    "words": [
      "nasiono",
      "a seed",
      "семя",
      "种子"
    ],
    "pinyin": "zhǒngzi",
    "examples": [
      "Zasadziliśmy nasiono w małej doniczce.",
      "We planted a seed in a small pot.",
      "Мы посадили семя в маленький горшок.",
      "我们在小花盆里种下了一颗种子。"
    ]
  },
  {
    "id": 423,
    "category": "More to explore",
    "words": [
      "korzeń",
      "a root",
      "корень",
      "根"
    ],
    "pinyin": "gēn",
    "examples": [
      "Korzeń wystawał ze ścieżki.",
      "A root was sticking out of the path.",
      "Из тропинки торчал корень.",
      "一条树根从小路上露了出来。"
    ]
  },
  {
    "id": 424,
    "category": "More to explore",
    "words": [
      "gałąź",
      "a branch",
      "ветка",
      "树枝"
    ],
    "pinyin": "shùzhī",
    "examples": [
      "Ptak usiadł na gałęzi.",
      "A bird landed on the branch.",
      "Птица села на ветку.",
      "一只鸟落在树枝上。"
    ]
  },
  {
    "id": 425,
    "category": "More to explore",
    "words": [
      "grzyb",
      "a mushroom",
      "гриб",
      "蘑菇"
    ],
    "pinyin": "mógu",
    "examples": [
      "Grzyb wyrósł obok starego drzewa.",
      "A mushroom grew beside the old tree.",
      "Гриб вырос рядом со старым деревом.",
      "老树旁长出了一朵蘑菇。"
    ]
  },
  {
    "id": 426,
    "category": "More to explore",
    "words": [
      "róża",
      "a rose",
      "роза",
      "玫瑰"
    ],
    "pinyin": "méigui",
    "examples": [
      "Włożyła czerwoną różę do szklanki.",
      "She placed a red rose in a glass.",
      "Она поставила красную розу в стакан.",
      "她把一朵红玫瑰放进玻璃杯里。"
    ]
  },
  {
    "id": 427,
    "category": "More to explore",
    "words": [
      "tulipan",
      "a tulip",
      "тюльпан",
      "郁金香"
    ],
    "pinyin": "yùjīnxiāng",
    "examples": [
      "Pierwszy tulipan rozkwitł dziś rano.",
      "The first tulip opened this morning.",
      "Первый тюльпан раскрылся сегодня утром.",
      "第一朵郁金香今天早上开了。"
    ]
  },
  {
    "id": 428,
    "category": "More to explore",
    "words": [
      "słonecznik",
      "a sunflower",
      "подсолнух",
      "向日葵"
    ],
    "pinyin": "xiàngrìkuí",
    "examples": [
      "Słonecznik wyrósł ponad płot.",
      "The sunflower grew taller than the fence.",
      "Подсолнух вырос выше забора.",
      "向日葵长得比围栏还高。"
    ]
  },
  {
    "id": 429,
    "category": "More to explore",
    "words": [
      "bambus",
      "bamboo",
      "бамбук",
      "竹子"
    ],
    "pinyin": "zhúzi",
    "examples": [
      "Bambus rośnie wzdłuż ogrodowej ścieżki.",
      "Bamboo grows along the garden path.",
      "Бамбук растёт вдоль садовой дорожки.",
      "竹子沿着花园小路生长。"
    ]
  },
  {
    "id": 430,
    "category": "More to explore",
    "words": [
      "mgła",
      "fog",
      "туман",
      "雾"
    ],
    "pinyin": "wù",
    "examples": [
      "Mgła zasłoniła góry.",
      "The fog hid the mountains.",
      "Туман скрыл горы.",
      "雾遮住了群山。"
    ]
  },
  {
    "id": 431,
    "category": "More to explore",
    "words": [
      "szron",
      "frost",
      "иней",
      "霜"
    ],
    "pinyin": "shuāng",
    "examples": [
      "Szron pokrył dziś rano okna.",
      "Frost covered the windows this morning.",
      "Сегодня утром иней покрыл окна.",
      "今天早上，窗户上结了霜。"
    ]
  },
  {
    "id": 432,
    "category": "More to explore",
    "words": [
      "grzmot",
      "thunder",
      "гром",
      "雷声"
    ],
    "pinyin": "léishēng",
    "examples": [
      "Obudził mnie głośny grzmot.",
      "A loud clap of thunder woke me up.",
      "Меня разбудил громкий раскат грома.",
      "一声响亮的雷声把我吵醒了。"
    ]
  },
  {
    "id": 433,
    "category": "More to explore",
    "words": [
      "błyskawica",
      "lightning",
      "молния",
      "闪电"
    ],
    "pinyin": "shǎndiàn",
    "examples": [
      "Błyskawica rozświetliła niebo.",
      "Lightning lit up the sky.",
      "Молния осветила небо.",
      "闪电照亮了天空。"
    ]
  },
  {
    "id": 434,
    "category": "More to explore",
    "words": [
      "tęcza",
      "a rainbow",
      "радуга",
      "彩虹"
    ],
    "pinyin": "cǎihóng",
    "examples": [
      "Po deszczu pojawiła się tęcza.",
      "A rainbow appeared after the rain.",
      "После дождя появилась радуга.",
      "雨后出现了彩虹。"
    ]
  },
  {
    "id": 435,
    "category": "More to explore",
    "words": [
      "burza",
      "a storm",
      "гроза",
      "雷暴"
    ],
    "pinyin": "léibào",
    "examples": [
      "Podczas burzy zostaliśmy w domu.",
      "We stayed indoors during the storm.",
      "Во время грозы мы остались дома.",
      "雷暴期间，我们待在家里。"
    ]
  },
  {
    "id": 436,
    "category": "More to explore",
    "words": [
      "wschód słońca",
      "a sunrise",
      "восход солнца",
      "日出"
    ],
    "pinyin": "rìchū",
    "examples": [
      "Obudziliśmy się wcześnie, żeby zobaczyć wschód słońca.",
      "We woke up early to watch the sunrise.",
      "Мы проснулись рано, чтобы посмотреть восход солнца.",
      "我们早早起床看日出。"
    ]
  },
  {
    "id": 437,
    "category": "More to explore",
    "words": [
      "zachód słońca",
      "a sunset",
      "закат",
      "日落"
    ],
    "pinyin": "rìluò",
    "examples": [
      "Zachód słońca zabarwił chmury na pomarańczowo.",
      "The sunset turned the clouds orange.",
      "Закат окрасил облака в оранжевый цвет.",
      "日落把云染成了橙色。"
    ]
  },
  {
    "id": 438,
    "category": "More to explore",
    "words": [
      "cień",
      "a shadow",
      "тень",
      "影子"
    ],
    "pinyin": "yǐngzi",
    "examples": [
      "Mój cień rozciągał się po chodniku.",
      "My shadow stretched across the pavement.",
      "Моя тень растянулась по тротуару.",
      "我的影子长长地铺在人行道上。"
    ]
  },
  {
    "id": 439,
    "category": "More to explore",
    "words": [
      "fala",
      "a wave",
      "волна",
      "波浪"
    ],
    "pinyin": "bōlàng",
    "examples": [
      "Fala zmoczyła mi stopy.",
      "A wave soaked my feet.",
      "Волна намочила мне ноги.",
      "一道波浪打湿了我的脚。"
    ]
  },
  {
    "id": 440,
    "category": "More to explore",
    "words": [
      "brzoskwinia",
      "a peach",
      "персик",
      "桃子"
    ],
    "pinyin": "táozi",
    "examples": [
      "Ta brzoskwinia jest miękka i soczysta.",
      "This peach is soft and juicy.",
      "Этот персик мягкий и сочный.",
      "这个桃子又软又多汁。"
    ]
  },
  {
    "id": 441,
    "category": "More to explore",
    "words": [
      "gruszka",
      "a pear",
      "груша",
      "梨"
    ],
    "pinyin": "lí",
    "examples": [
      "Pokroiłam gruszkę na kawałki na deser.",
      "I cut a pear into pieces for dessert.",
      "Я нарезала грушу кусочками на десерт.",
      "我把梨切成块当甜点。"
    ]
  },
  {
    "id": 442,
    "category": "More to explore",
    "words": [
      "śliwka",
      "a plum",
      "слива",
      "李子"
    ],
    "pinyin": "lǐzi",
    "examples": [
      "Wyjmij pestkę ze śliwki.",
      "Remove the stone from the plum.",
      "Вынь косточку из сливы.",
      "把李子的核去掉。"
    ]
  },
  {
    "id": 443,
    "category": "More to explore",
    "words": [
      "czereśnia",
      "a cherry",
      "черешня",
      "樱桃"
    ],
    "pinyin": "yīngtáo",
    "examples": [
      "Położyła czereśnię na wierzchu ciasta.",
      "She put a cherry on top of the cake.",
      "Она положила черешню на торт.",
      "她在蛋糕上放了一颗樱桃。"
    ]
  },
  {
    "id": 444,
    "category": "More to explore",
    "words": [
      "malina",
      "a raspberry",
      "малина",
      "树莓"
    ],
    "pinyin": "shùméi",
    "examples": [
      "Malina wpadła do mojego jogurtu.",
      "A raspberry fell into my yogurt.",
      "Малина упала в мой йогурт.",
      "一颗树莓掉进了我的酸奶里。"
    ]
  },
  {
    "id": 445,
    "category": "More to explore",
    "words": [
      "borówka",
      "a blueberry",
      "голубика",
      "蓝莓"
    ],
    "pinyin": "lánméi",
    "examples": [
      "Znalazłam jedną borówkę na dnie miski.",
      "I found one blueberry at the bottom of the bowl.",
      "Я нашла одну ягоду голубики на дне миски.",
      "我在碗底找到了一颗蓝莓。"
    ]
  },
  {
    "id": 446,
    "category": "More to explore",
    "words": [
      "arbuz",
      "a watermelon",
      "арбуз",
      "西瓜"
    ],
    "pinyin": "xīguā",
    "examples": [
      "Podzieliliśmy się zimnym arbuzem na plaży.",
      "We shared a cold watermelon on the beach.",
      "Мы разделили холодный арбуз на пляже.",
      "我们在海滩上分着吃了一个冰西瓜。"
    ]
  },
  {
    "id": 447,
    "category": "More to explore",
    "words": [
      "melon",
      "a melon",
      "дыня",
      "甜瓜"
    ],
    "pinyin": "tiánguā",
    "examples": [
      "Ten melon słodko pachnie.",
      "This melon smells sweet.",
      "Эта дыня сладко пахнет.",
      "这个甜瓜闻起来很甜。"
    ]
  },
  {
    "id": 448,
    "category": "More to explore",
    "words": [
      "ananas",
      "a pineapple",
      "ананас",
      "菠萝"
    ],
    "pinyin": "bōluó",
    "examples": [
      "Obierz ananasa przed pokrojeniem.",
      "Peel the pineapple before slicing it.",
      "Очисти ананас, прежде чем нарезать его.",
      "切菠萝前先削皮。"
    ]
  },
  {
    "id": 449,
    "category": "More to explore",
    "words": [
      "mango",
      "a mango",
      "манго",
      "芒果"
    ],
    "pinyin": "mángguǒ",
    "examples": [
      "Zmiksowałam mango z jogurtem.",
      "I blended a mango with yogurt.",
      "Я взбила манго с йогуртом.",
      "我把芒果和酸奶一起搅拌了。"
    ]
  },
  {
    "id": 450,
    "category": "More to explore",
    "words": [
      "kokos",
      "a coconut",
      "кокос",
      "椰子"
    ],
    "pinyin": "yēzi",
    "examples": [
      "Otwieranie tego kokosa trwało dłużej niż jego zjedzenie.",
      "Opening this coconut took longer than eating it.",
      "Открыть этот кокос заняло больше времени, чем съесть его.",
      "打开这个椰子花的时间比吃掉它还长。"
    ]
  },
  {
    "id": 451,
    "category": "More to explore",
    "words": [
      "awokado",
      "an avocado",
      "авокадо",
      "牛油果"
    ],
    "pinyin": "niúyóuguǒ",
    "examples": [
      "Awokado wreszcie dojrzało.",
      "The avocado is finally ripe.",
      "Авокадо наконец созрел.",
      "牛油果终于熟了。"
    ]
  },
  {
    "id": 452,
    "category": "More to explore",
    "words": [
      "ogórek",
      "a cucumber",
      "огурец",
      "黄瓜"
    ],
    "pinyin": "huángguā",
    "examples": [
      "Pokrój ogórek do sałatki.",
      "Slice the cucumber for the salad.",
      "Нарежь огурец для салата.",
      "把黄瓜切片做沙拉。"
    ]
  },
  {
    "id": 453,
    "category": "More to explore",
    "words": [
      "dynia",
      "a pumpkin",
      "тыква",
      "南瓜"
    ],
    "pinyin": "nánguā",
    "examples": [
      "Zrobiliśmy zupę z dyni.",
      "We made soup from a pumpkin.",
      "Мы приготовили суп из тыквы.",
      "我们用南瓜做了汤。"
    ]
  },
  {
    "id": 454,
    "category": "More to explore",
    "words": [
      "kapusta",
      "cabbage",
      "капуста",
      "卷心菜"
    ],
    "pinyin": "juǎnxīncài",
    "examples": [
      "Poszatkowałam kapustę na kolację.",
      "I chopped cabbage for dinner.",
      "Я нашинковала капусту на ужин.",
      "我把卷心菜切碎，准备做晚饭。"
    ]
  },
  {
    "id": 455,
    "category": "More to explore",
    "words": [
      "sałata",
      "lettuce",
      "салат-латук",
      "生菜"
    ],
    "pinyin": "shēngcài",
    "examples": [
      "Umyj sałatę przed podaniem.",
      "Wash the lettuce before serving it.",
      "Вымой салат-латук перед подачей.",
      "上桌前先洗生菜。"
    ]
  },
  {
    "id": 456,
    "category": "More to explore",
    "words": [
      "szpinak",
      "spinach",
      "шпинат",
      "菠菜"
    ],
    "pinyin": "bōcài",
    "examples": [
      "Dodałam szpinak do omletu.",
      "I added spinach to the omelette.",
      "Я добавила шпинат в омлет.",
      "我在煎蛋里加了菠菜。"
    ]
  },
  {
    "id": 457,
    "category": "More to explore",
    "words": [
      "brokuł",
      "broccoli",
      "брокколи",
      "西兰花"
    ],
    "pinyin": "xīlánhuā",
    "examples": [
      "Gotuj brokuł na parze, aż zmięknie.",
      "Steam the broccoli until it is tender.",
      "Готовь брокколи на пару до мягкости.",
      "把西兰花蒸到变软。"
    ]
  },
  {
    "id": 458,
    "category": "More to explore",
    "words": [
      "kalafior",
      "cauliflower",
      "цветная капуста",
      "花椰菜"
    ],
    "pinyin": "huāyēcài",
    "examples": [
      "Pieczony kalafior z przyprawami smakuje pysznie.",
      "Roasted cauliflower tastes delicious with spices.",
      "Запечённая цветная капуста со специями очень вкусная.",
      "烤花椰菜加上香料很好吃。"
    ]
  },
  {
    "id": 459,
    "category": "More to explore",
    "words": [
      "czosnek",
      "garlic",
      "чеснок",
      "大蒜"
    ],
    "pinyin": "dàsuàn",
    "examples": [
      "W kuchni pachnie czosnkiem.",
      "The kitchen smells of garlic.",
      "На кухне пахнет чесноком.",
      "厨房里有大蒜的香味。"
    ]
  },
  {
    "id": 460,
    "category": "More to explore",
    "words": [
      "imbir",
      "ginger",
      "имбирь",
      "姜"
    ],
    "pinyin": "jiāng",
    "examples": [
      "Dodałam świeży imbir do herbaty.",
      "I put fresh ginger in my tea.",
      "Я добавила свежий имбирь в чай.",
      "我在茶里放了新鲜的姜。"
    ]
  },
  {
    "id": 461,
    "category": "More to explore",
    "words": [
      "cynamon",
      "cinnamon",
      "корица",
      "肉桂"
    ],
    "pinyin": "ròuguì",
    "examples": [
      "Odrobina cynamonu poprawia smak owsianki.",
      "A little cinnamon makes the porridge taste better.",
      "Немного корицы делает овсянку вкуснее.",
      "加一点肉桂，燕麦粥就更好吃了。"
    ]
  },
  {
    "id": 462,
    "category": "More to explore",
    "words": [
      "pieprz",
      "pepper",
      "перец",
      "胡椒"
    ],
    "pinyin": "hújiāo",
    "examples": [
      "Chcesz trochę pieprzu do zupy?",
      "Would you like some pepper on your soup?",
      "Хочешь немного перца в суп?",
      "你的汤里要加点胡椒吗？"
    ]
  },
  {
    "id": 463,
    "category": "More to explore",
    "words": [
      "ocet",
      "vinegar",
      "уксус",
      "醋"
    ],
    "pinyin": "cù",
    "examples": [
      "Wymieszaj ocet z oliwą na sos.",
      "Mix vinegar with olive oil for the dressing.",
      "Смешай уксус с оливковым маслом для заправки.",
      "把醋和橄榄油混合，做成沙拉酱汁。"
    ]
  },
  {
    "id": 464,
    "category": "More to explore",
    "words": [
      "oliwa",
      "olive oil",
      "оливковое масло",
      "橄榄油"
    ],
    "pinyin": "gǎnlǎnyóu",
    "examples": [
      "Rozgrzej odrobinę oliwy na patelni.",
      "Heat a little olive oil in the pan.",
      "Разогрей немного оливкового масла на сковороде.",
      "在平底锅里加热一点橄榄油。"
    ]
  },
  {
    "id": 465,
    "category": "More to explore",
    "words": [
      "mąka",
      "flour",
      "мука",
      "面粉"
    ],
    "pinyin": "miànfěn",
    "examples": [
      "Na całym blacie kuchennym jest mąka.",
      "There is flour all over the kitchen counter.",
      "Вся кухонная столешница в муке.",
      "厨房台面上全是面粉。"
    ]
  },
  {
    "id": 466,
    "category": "More to explore",
    "words": [
      "śmietanka",
      "cream",
      "сливки",
      "奶油"
    ],
    "pinyin": "nǎiyóu",
    "examples": [
      "Dodałam śmietankę do sosu.",
      "I added cream to the sauce.",
      "Я добавила сливки в соус.",
      "我在酱汁里加了奶油。"
    ]
  },
  {
    "id": 467,
    "category": "More to explore",
    "words": [
      "dżem",
      "jam",
      "джем",
      "果酱"
    ],
    "pinyin": "guǒjiàng",
    "examples": [
      "Posmaruj tost dżemem.",
      "Spread some jam on the toast.",
      "Намажь тост джемом.",
      "在吐司上涂点果酱。"
    ]
  },
  {
    "id": 468,
    "category": "More to explore",
    "words": [
      "musztarda",
      "mustard",
      "горчица",
      "芥末酱"
    ],
    "pinyin": "jièmojiàng",
    "examples": [
      "Ta musztarda jest ostrzejsza, niż się spodziewałam.",
      "This mustard is stronger than I expected.",
      "Эта горчица острее, чем я ожидала.",
      "这个芥末酱比我想的辣。"
    ]
  },
  {
    "id": 469,
    "category": "More to explore",
    "words": [
      "naleśnik",
      "a pancake",
      "блин",
      "薄饼"
    ],
    "pinyin": "báobǐng",
    "examples": [
      "Nadziałam naleśnik owocami.",
      "I filled a pancake with fruit.",
      "Я начинила блин фруктами.",
      "我在薄饼里包了水果。"
    ]
  },
  {
    "id": 470,
    "category": "More to explore",
    "words": [
      "zaproszenie",
      "an invitation",
      "приглашение",
      "邀请"
    ],
    "pinyin": "yāoqǐng",
    "examples": [
      "Dostałam zaproszenie na jej ślub.",
      "I received an invitation to her wedding.",
      "Я получила приглашение на её свадьбу.",
      "我收到了她婚礼的邀请。"
    ]
  },
  {
    "id": 471,
    "category": "More to explore",
    "words": [
      "świętowanie",
      "a celebration",
      "празднование",
      "庆祝"
    ],
    "pinyin": "qìngzhù",
    "examples": [
      "Świętowanie trwało do późnej nocy.",
      "The celebration continued late into the night.",
      "Празднование продолжалось до поздней ночи.",
      "庆祝活动一直持续到深夜。"
    ]
  },
  {
    "id": 472,
    "category": "More to explore",
    "words": [
      "urodziny",
      "a birthday",
      "день рождения",
      "生日"
    ],
    "pinyin": "shēngrì",
    "examples": [
      "Upiekliśmy ciasto na jego urodziny.",
      "We baked a cake for his birthday.",
      "Мы испекли торт на его день рождения.",
      "我们为他的生日做了一个蛋糕。"
    ]
  },
  {
    "id": 473,
    "category": "More to explore",
    "words": [
      "ślub",
      "a wedding",
      "свадьба",
      "婚礼"
    ],
    "pinyin": "hūnlǐ",
    "examples": [
      "Ich ślub odbył się w ogrodzie.",
      "Their wedding took place in a garden.",
      "Их свадьба прошла в саду.",
      "他们的婚礼在花园里举行。"
    ]
  },
  {
    "id": 474,
    "category": "More to explore",
    "words": [
      "prezent",
      "a gift",
      "подарок",
      "礼物"
    ],
    "pinyin": "lǐwù",
    "examples": [
      "Zapakowałam prezent w niebieski papier.",
      "I wrapped the gift in blue paper.",
      "Я завернула подарок в синюю бумагу.",
      "我用蓝色纸包好了礼物。"
    ]
  },
  {
    "id": 475,
    "category": "More to explore",
    "words": [
      "komplement",
      "a compliment",
      "комплимент",
      "赞美"
    ],
    "pinyin": "zànměi",
    "examples": [
      "Jej komplement wywołał u mnie uśmiech.",
      "Her compliment made me smile.",
      "Её комплимент заставил меня улыбнуться.",
      "她的赞美让我笑了。"
    ]
  },
  {
    "id": 476,
    "category": "More to explore",
    "words": [
      "przeprosiny",
      "an apology",
      "извинение",
      "道歉"
    ],
    "pinyin": "dàoqiàn",
    "examples": [
      "Przyjęłam jego przeprosiny za spóźnienie.",
      "I accepted his apology for being late.",
      "Я приняла его извинение за опоздание.",
      "我接受了他为迟到所作的道歉。"
    ]
  },
  {
    "id": 477,
    "category": "More to explore",
    "words": [
      "rozmowa",
      "a conversation",
      "разговор",
      "交谈"
    ],
    "pinyin": "jiāotán",
    "examples": [
      "Nasza rozmowa trwała dłużej, niż starczyło kawy.",
      "Our conversation lasted longer than the coffee.",
      "Наш разговор продолжался дольше, чем хватило кофе.",
      "我们的交谈还没结束，咖啡就喝完了。"
    ]
  },
  {
    "id": 478,
    "category": "More to explore",
    "words": [
      "kłótnia",
      "an argument",
      "ссора",
      "争吵"
    ],
    "pinyin": "zhēngchǎo",
    "examples": [
      "Nasza kłótnia dotyczyła tego, czyja kolej na gotowanie.",
      "We had an argument about whose turn it was to cook.",
      "У нас была ссора из-за того, чья очередь готовить.",
      "我们为了轮到谁做饭而争吵。"
    ]
  },
  {
    "id": 479,
    "category": "More to explore",
    "words": [
      "żart",
      "a joke",
      "шутка",
      "笑话"
    ],
    "pinyin": "xiàohua",
    "examples": [
      "Wreszcie zrozumiałam żart bez tłumaczenia.",
      "I finally understood the joke without a translation.",
      "Я наконец поняла шутку без перевода.",
      "我终于不用翻译就听懂了这个笑话。"
    ]
  },
  {
    "id": 480,
    "category": "More to explore",
    "words": [
      "sarkazm",
      "sarcasm",
      "сарказм",
      "讽刺"
    ],
    "pinyin": "fěngcì",
    "examples": [
      "Jego sarkazm był oczywisty, gdy nazwał opóźnienie cudownym.",
      "His sarcasm was clear when he called the delay wonderful.",
      "Его сарказм был очевиден, когда он назвал задержку прекрасной.",
      "他说延误“太棒了”的时候，讽刺意味很明显。"
    ]
  },
  {
    "id": 481,
    "category": "More to explore",
    "words": [
      "ironia",
      "irony",
      "ирония",
      "反讽"
    ],
    "pinyin": "fǎnfěng",
    "examples": [
      "Ironia polega na tym, że kurs zarządzania czasem zaczął się z opóźnieniem.",
      "The irony is that the time-management course started late.",
      "Ирония в том, что курс по управлению временем начался с опозданием.",
      "反讽的是，时间管理课程居然迟到了才开始。"
    ]
  },
  {
    "id": 482,
    "category": "More to explore",
    "words": [
      "humor",
      "humour",
      "юмор",
      "幽默"
    ],
    "pinyin": "yōumò",
    "examples": [
      "Jej poczucie humoru ułatwia przetrwanie długich spotkań.",
      "Her sense of humour makes long meetings easier.",
      "Её чувство юмора помогает пережить долгие встречи.",
      "她的幽默感让漫长的会议轻松了些。"
    ]
  },
  {
    "id": 483,
    "category": "More to explore",
    "words": [
      "plotka",
      "a rumour",
      "слух",
      "谣言"
    ],
    "pinyin": "yáoyán",
    "examples": [
      "Plotka szybko rozeszła się po biurze.",
      "The rumour spread quickly through the office.",
      "Слух быстро разошёлся по офису.",
      "谣言很快传遍了办公室。"
    ]
  },
  {
    "id": 484,
    "category": "More to explore",
    "words": [
      "wspomnienie",
      "a memory",
      "воспоминание",
      "回忆"
    ],
    "pinyin": "huíyì",
    "examples": [
      "Ta piosenka przywołuje szczęśliwe wspomnienie.",
      "This song brings back a happy memory.",
      "Эта песня вызывает счастливое воспоминание.",
      "这首歌唤起了一段快乐的回忆。"
    ]
  },
  {
    "id": 485,
    "category": "More to explore",
    "words": [
      "wybór",
      "a choice",
      "выбор",
      "选择"
    ],
    "pinyin": "xuǎnzé",
    "examples": [
      "Mamy wybór między pociągiem a autobusem.",
      "We have a choice between the train and the bus.",
      "У нас есть выбор между поездом и автобусом.",
      "我们可以在火车和公共汽车之间作选择。"
    ]
  },
  {
    "id": 486,
    "category": "More to explore",
    "words": [
      "szansa",
      "a chance",
      "шанс",
      "机会"
    ],
    "pinyin": "jīhuì",
    "examples": [
      "Ta podróż to szansa na ćwiczenie mówienia.",
      "This trip is a chance to practise speaking.",
      "Эта поездка — шанс попрактиковаться в разговоре.",
      "这次旅行是练习口语的机会。"
    ]
  },
  {
    "id": 487,
    "category": "More to explore",
    "words": [
      "ryzyko",
      "a risk",
      "риск",
      "风险"
    ],
    "pinyin": "fēngxiǎn",
    "examples": [
      "Po południu jest ryzyko deszczu.",
      "There is a risk of rain this afternoon.",
      "Сегодня днём есть риск дождя.",
      "今天下午有下雨的风险。"
    ]
  },
  {
    "id": 488,
    "category": "More to explore",
    "words": [
      "wyzwanie",
      "a challenge",
      "вызов",
      "挑战"
    ],
    "pinyin": "tiǎozhàn",
    "examples": [
      "Przeczytanie pierwszej powieści po chińsku to wyzwanie.",
      "Reading my first novel in Chinese is a challenge.",
      "Прочитать первый роман на китайском — настоящий вызов.",
      "读完第一本中文小说是个挑战。"
    ]
  },
  {
    "id": 489,
    "category": "More to explore",
    "words": [
      "rozwiązanie",
      "a solution",
      "решение задачи",
      "解决办法"
    ],
    "pinyin": "jiějué bànfǎ",
    "examples": [
      "Znaleźliśmy proste rozwiązanie problemu.",
      "We found a simple solution to the problem.",
      "Мы нашли простое решение задачи.",
      "我们找到了一个简单的解决办法。"
    ]
  },
  {
    "id": 490,
    "category": "More to explore",
    "words": [
      "powód",
      "a reason",
      "причина",
      "原因"
    ],
    "pinyin": "yuányīn",
    "examples": [
      "Jaki jest powód opóźnienia?",
      "What is the reason for the delay?",
      "В чём причина задержки?",
      "延误的原因是什么？"
    ]
  },
  {
    "id": 491,
    "category": "More to explore",
    "words": [
      "wynik",
      "a result",
      "результат",
      "结果"
    ],
    "pinyin": "jiéguǒ",
    "examples": [
      "Jestem zadowolona z wyniku swojej pracy.",
      "I am happy with the result of my work.",
      "Я довольна результатом своей работы.",
      "我对自己的工作结果很满意。"
    ]
  },
  {
    "id": 492,
    "category": "More to explore",
    "words": [
      "cel",
      "a purpose",
      "цель",
      "目的"
    ],
    "pinyin": "mùdì",
    "examples": [
      "Celem tego ćwiczenia jest ćwiczenie słuchania.",
      "The purpose of this exercise is to practise listening.",
      "Цель этого упражнения — тренировка понимания на слух.",
      "这个练习的目的是练习听力。"
    ]
  },
  {
    "id": 493,
    "category": "More to explore",
    "words": [
      "priorytet",
      "a priority",
      "приоритет",
      "优先事项"
    ],
    "pinyin": "yōuxiān shìxiàng",
    "examples": [
      "Wysypianie się jest moim priorytetem w tym tygodniu.",
      "Getting enough sleep is my priority this week.",
      "Высыпаться — мой приоритет на этой неделе.",
      "这周，睡够觉是我的优先事项。"
    ]
  },
  {
    "id": 494,
    "category": "More to explore",
    "words": [
      "osiągnięcie",
      "an achievement",
      "достижение",
      "成就"
    ],
    "pinyin": "chéngjiù",
    "examples": [
      "Ukończenie kursu było ważnym osiągnięciem.",
      "Finishing the course was an important achievement.",
      "Завершение курса стало важным достижением.",
      "完成课程是一项重要成就。"
    ]
  },
  {
    "id": 495,
    "category": "More to explore",
    "words": [
      "granica",
      "a boundary",
      "граница",
      "界限"
    ],
    "pinyin": "jièxiàn",
    "examples": [
      "Wyznaczyłam wyraźną granicę między pracą a odpoczynkiem.",
      "I set a clear boundary between work and rest.",
      "Я установила чёткую границу между работой и отдыхом.",
      "我在工作和休息之间划定了明确的界限。"
    ]
  },
  {
    "id": 496,
    "category": "More to explore",
    "words": [
      "kompromis",
      "a compromise",
      "компромисс",
      "妥协"
    ],
    "pinyin": "tuǒxié",
    "examples": [
      "Osiągnęliśmy kompromis w sprawie dat podróży.",
      "We reached a compromise about the travel dates.",
      "Мы достигли компромисса по поводу дат поездки.",
      "我们对旅行日期达成了妥协。"
    ]
  },
  {
    "id": 497,
    "category": "More to explore",
    "words": [
      "konsekwencja",
      "a consequence",
      "последствие",
      "后果"
    ],
    "pinyin": "hòuguǒ",
    "examples": [
      "Spóźnienie na autobus było konsekwencją późnego wyjścia.",
      "Missing the bus was a consequence of leaving late.",
      "Опоздание на автобус стало последствием позднего выхода.",
      "没赶上公共汽车是出门太晚的后果。"
    ]
  },
  {
    "id": 498,
    "category": "More to explore",
    "words": [
      "założenie",
      "an assumption",
      "предположение",
      "假设"
    ],
    "pinyin": "jiǎshè",
    "examples": [
      "Moje założenie dotyczące godzin otwarcia było błędne.",
      "My assumption about the opening hours was wrong.",
      "Моё предположение о часах работы было неверным.",
      "我对营业时间的假设是错的。"
    ]
  },
  {
    "id": 499,
    "category": "More to explore",
    "words": [
      "zbieg okoliczności",
      "a coincidence",
      "совпадение",
      "巧合"
    ],
    "pinyin": "qiǎohé",
    "examples": [
      "Spotkanie cię tutaj to miły zbieg okoliczności.",
      "Meeting you here is a lovely coincidence.",
      "Встретить тебя здесь — приятное совпадение.",
      "在这里遇见你真是个美好的巧合。"
    ]
  }
];
