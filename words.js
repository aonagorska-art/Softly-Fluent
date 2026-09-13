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
      "Najpierw kawa. Nieproszone rady nigdy.",
      "Coffee first. Unsolicited advice never.",
      "Сначала кофе. Непрошеные советы — никогда.",
      "先喝咖啡。没人问的建议就免了。"
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
      "Herbata jest gorąca. Twoje plotki są letnie.",
      "The tea is hot. Your gossip is lukewarm.",
      "Чай горячий. А твои сплетни так себе.",
      "茶很烫。你的八卦却没什么劲。"
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
      "Napij się wody. Dramatyzowanie wzmaga pragnienie.",
      "Drink some water. Being dramatic is thirsty work.",
      "Выпей воды. От драматичных сцен хочется пить.",
      "喝点水吧。演这么多戏也会口渴。"
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
      "Kupiłam chleb i nazwałam to planowaniem posiłków.",
      "I bought bread and called it meal planning.",
      "Я купила хлеб и назвала это планированием питания.",
      "我买了面包，还管这叫膳食规划。"
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
      "Ryż jest gotowy. Mój plan na życie nie.",
      "The rice is ready. My life plan is not.",
      "Рис готов. Мой план на жизнь — нет.",
      "米饭做好了。我的人生规划还没做好。"
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
      "Makaron zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "Pasta deserves a place in this story. Your unsolicited advice does not.",
      "Макароны заслуживают места в этой истории. Твои непрошеные советы — нет.",
      "意大利面值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Na ser zawsze jest miejsce. Na twoją opinię? To dyskusyjne.",
      "There is always room for cheese. For your opinion? Debatable.",
      "Для сыра место найдётся всегда. Для твоего мнения? Спорный вопрос.",
      "奶酪总有地方放。你的意见？那就不一定了。"
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
      "Czekolada mnie rozumie. Nie zadaje dodatkowych pytań.",
      "Chocolate understands me. It asks no follow-up questions.",
      "Шоколад меня понимает. Он не задаёт уточняющих вопросов.",
      "巧克力懂我。它从来不追问。"
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
      "Ta zupa ma więcej głębi niż nasza ostatnia rozmowa.",
      "This soup has more depth than our last conversation.",
      "В этом супе больше глубины, чем в нашем последнем разговоре.",
      "这碗汤比我们上次的对话还有深度。"
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
      "Śniadanie jest ważne. Tak samo jak zostawienie mnie w spokoju przed nim.",
      "Breakfast is important. So is leaving me alone before it.",
      "Завтрак важен. Как и возможность побыть в покое до него.",
      "早餐很重要。在早餐前别烦我也很重要。"
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
      "Lunch to dzisiejszy temat. Twój były może poczekać.",
      "Lunch is the topic today. Your ex can wait.",
      "Обед — сегодняшняя тема. Твой бывший может подождать.",
      "午餐是今天的话题。你的前任可以等等。"
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
      "Kolacja to nie wymówka na spóźnienie. Ale niezła próba.",
      "Dinner is not an excuse to be late. Nice try, though.",
      "Ужин — не оправдание для опоздания. Но попытка неплохая.",
      "晚餐不是迟到的借口。不过，这个借口编得还行。"
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
      "Prosiłam o cukier, nie o wykład.",
      "I asked for sugar, not a lecture.",
      "Я просила сахар, а не лекцию.",
      "我要的是糖，不是说教。"
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
      "Sól zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "Salt deserves a place in this story. Your unsolicited advice does not.",
      "Соль заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "盐值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Mleko to odpowiedź. Pytanie pewnie było dziwne.",
      "Milk is the answer. The question was probably strange.",
      "Молоко — это ответ. Вопрос, наверное, был странным.",
      "牛奶就是答案。问题大概很奇怪。"
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
      "Miód jest słodki. Moja odpowiedź nie będzie.",
      "The honey is sweet. My reply will not be.",
      "Мёд сладкий. Мой ответ таким не будет.",
      "蜂蜜很甜。我的回复可不会这么甜。"
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
      "Masło to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "Butter is not a personality trait. Someone had to say it.",
      "Масло — не черта характера. Кто-то должен был это сказать.",
      "黄油不是性格特点。总得有人说出来。"
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
      "Jogurt nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "Yogurt will not solve all your problems. Lower your expectations.",
      "Йогурт не решит всех твоих проблем. Умерь ожидания.",
      "酸奶解决不了你所有的问题。降低一点期待吧。"
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
      "Lody topnieją szybciej, niż znikają moje problemy.",
      "The ice cream is melting faster than my problems are disappearing.",
      "Мороженое тает быстрее, чем исчезают мои проблемы.",
      "冰淇淋融化的速度比我的问题消失的速度还快。"
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
      "Pizza dotarła. Nagle wierzę w szczęśliwe zakończenia.",
      "The pizza arrived. Suddenly, I believe in happy endings.",
      "Пицца приехала. Вдруг я поверила в счастливые финалы.",
      "比萨送到了。我突然相信圆满结局了。"
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
      "Jedno jabłko dziennie. Osobowość nadal bez aktualizacji.",
      "An apple a day. Still no personality upgrade.",
      "По яблоку в день. А обновления личности всё нет.",
      "每天一个苹果。性格还是没升级。"
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
      "Banan ma lepszą równowagę między pracą a życiem niż ja.",
      "The banana has a better work-life balance than I do.",
      "У банана баланс между работой и жизнью лучше, чем у меня.",
      "香蕉的工作与生活平衡都比我好。"
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
      "Pomarańcza to odpowiedź. Pytanie pewnie było dziwne.",
      "An orange is the answer. The question was probably strange.",
      "Апельсин — это ответ. Вопрос, наверное, был странным.",
      "橙子就是答案。问题大概很奇怪。"
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
      "Życie dało mi cytrynę. Poprosiłam o zwrot pieniędzy.",
      "Life gave me a lemon. I asked for a refund.",
      "Жизнь дала мне лимон. Я попросила вернуть деньги.",
      "生活给了我一个柠檬。我要求退款。"
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
      "Truskawka to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "A strawberry is not a personality trait. Someone had to say it.",
      "Клубника — не черта характера. Кто-то должен был это сказать.",
      "草莓不是性格特点。总得有人说出来。"
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
      "Ziemniak nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "A potato will not solve all your problems. Lower your expectations.",
      "Картофелина не решит всех твоих проблем. Умерь ожидания.",
      "土豆解决不了你所有的问题。降低一点期待吧。"
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
      "Pomidor to dzisiejszy temat. Twój były może poczekać.",
      "A tomato is the topic today. Your ex can wait.",
      "Помидор — сегодняшняя тема. Твой бывший может подождать.",
      "西红柿是今天的话题。你的前任可以等等。"
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
      "Marchewka to nie wymówka na spóźnienie. Ale niezła próba.",
      "A carrot is not an excuse to be late. Nice try, though.",
      "Морковь — не оправдание для опоздания. Но попытка неплохая.",
      "胡萝卜不是迟到的借口。不过，这个借口编得还行。"
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
      "Cebula to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "An onion is not the problem. Your dramatic reaction is.",
      "Луковица — не проблема. Проблема — твоя драматичная реакция.",
      "洋葱不是问题。你那夸张的反应才是问题。"
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
      "Umiem ugotować jajko. Proszę wstrzymać oklaski.",
      "I can boil an egg. Please hold your applause.",
      "Я умею варить яйцо. Прошу пока не аплодировать.",
      "我会煮鸡蛋。请先别鼓掌。"
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
      "Upiekłam ciasto. To mój wkład w społeczeństwo.",
      "I made a cake. That is my contribution to society.",
      "Я испекла торт. Это мой вклад в общество.",
      "我做了一个蛋糕。这就是我对社会的贡献。"
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
      "Jedno ciastko to przekąska. Sześć to strategia.",
      "One cookie is a snack. Six is a strategy.",
      "Одно печенье — перекус. Шесть — стратегия.",
      "一块饼干是零食。六块就是策略。"
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
      "Kanapka to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "A sandwich is not a personality trait. Someone had to say it.",
      "Бутерброд — не черта характера. Кто-то должен был это сказать.",
      "三明治不是性格特点。总得有人说出来。"
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
      "Sałatka nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "A salad will not solve all your problems. Lower your expectations.",
      "Салат не решит всех твоих проблем. Умерь ожидания.",
      "沙拉解决不了你所有的问题。降低一点期待吧。"
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
      "Sok to dzisiejszy temat. Twój były może poczekać.",
      "Juice is the topic today. Your ex can wait.",
      "Сок — сегодняшняя тема. Твой бывший может подождать.",
      "果汁是今天的话题。你的前任可以等等。"
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
      "Owoce to nie wymówka na spóźnienie. Ale niezła próba.",
      "Fruit is not an excuse to be late. Nice try, though.",
      "Фрукты — не оправдание для опоздания. Но попытка неплохая.",
      "水果不是迟到的借口。不过，这个借口编得还行。"
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
      "Przyszłam dla jedzenia. Nawiązywanie kontaktów było zasadzką.",
      "I came for the food. The networking was an ambush.",
      "Я пришла ради еды. Нетворкинг оказался засадой.",
      "我是来吃东西的。社交环节简直是埋伏。"
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
      "Głód zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "Hunger deserves a place in this story. Your unsolicited advice does not.",
      "Голод заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "饥饿值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Pragnienie to odpowiedź. Pytanie pewnie było dziwne.",
      "Thirst is the answer. The question was probably strange.",
      "Жажда — это ответ. Вопрос, наверное, был странным.",
      "口渴就是答案。问题大概很奇怪。"
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
      "Przepis to nie zamiennik zdrowego rozsądku. Niestety.",
      "A recipe is not a substitute for common sense. Unfortunately.",
      "Рецепт — не замена здравому смыслу. К сожалению.",
      "食谱代替不了常识。真遗憾。"
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
      "Moja cierpliwość jest na urlopie. Nie podała daty powrotu.",
      "My patience is on vacation. It did not leave a return date.",
      "Моё терпение в отпуске. Дату возвращения оно не сообщило.",
      "我的耐心去度假了。它没说什么时候回来。"
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
      "Twoja pewność siebie robi wrażenie. Dowodów brak.",
      "Your confidence is impressive. Your evidence is missing.",
      "Твоя уверенность впечатляет. А вот доказательств нет.",
      "你的自信令人佩服。证据却不见踪影。"
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
      "Moja motywacja pojawia się dokładnie wtedy, gdy pora spać.",
      "My motivation arrives exactly when it is time to go to bed.",
      "Моя мотивация появляется ровно тогда, когда пора спать.",
      "我的动力总是在该睡觉的时候准时出现。"
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
      "Ambicja to nie wymówka na spóźnienie. Ale niezła próba.",
      "Ambition is not an excuse to be late. Nice try, though.",
      "Амбиция — не оправдание для опоздания. Но попытка неплохая.",
      "抱负不是迟到的借口。不过，这个借口编得还行。"
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
      "Sukces jest słodki. Nierobienie absolutnie niczego też.",
      "Success is sweet. So is doing absolutely nothing.",
      "Успех сладок. Как и полное безделье.",
      "成功很甜。什么都不做也很甜。"
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
      "Ta porażka to lekcja. Kosztowna.",
      "This failure is a learning experience. An expensive one.",
      "Эта неудача — урок. Дорогой.",
      "这次失败是一堂课。学费挺贵。"
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
      "Powodzenia. Twój plan będzie tego potrzebował.",
      "Good luck. Your plan will need it.",
      "Удачи. Твоему плану она понадобится.",
      "祝你好运。你的计划会需要的。"
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
      "Radość to nie zamiennik zdrowego rozsądku. Niestety.",
      "Happiness is not a substitute for common sense. Unfortunately.",
      "Счастье — не замена здравому смыслу. К сожалению.",
      "幸福代替不了常识。真遗憾。"
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
      "Smutek to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "Sadness is not a personality trait. Someone had to say it.",
      "Грусть — не черта характера. Кто-то должен был это сказать.",
      "悲伤不是性格特点。总得有人说出来。"
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
      "Moja złość ma doskonałą pamięć.",
      "My anger has excellent memory.",
      "У моей злости отличная память.",
      "我的愤怒记性特别好。"
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
      "Strach to dzisiejszy temat. Twój były może poczekać.",
      "Fear is the topic today. Your ex can wait.",
      "Страх — сегодняшняя тема. Твой бывший может подождать.",
      "恐惧是今天的话题。你的前任可以等等。"
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
      "Nadal mam nadzieję. Najwyraźniej niczego się nie nauczyłam.",
      "I still have hope. Clearly, I have learned nothing.",
      "У меня ещё есть надежда. Видимо, я ничему не научилась.",
      "我还抱有希望。显然，我什么教训都没吸取。"
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
      "Miłość to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "Love is not the problem. Your dramatic reaction is.",
      "Любовь — не проблема. Проблема — твоя драматичная реакция.",
      "爱不是问题。你那夸张的反应才是问题。"
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
      "Prawdziwa przyjaźń przetrwa złe fryzury i jeszcze gorsze decyzje.",
      "True friendship survives bad haircuts and worse decisions.",
      "Настоящая дружба переживёт плохие стрижки и ещё худшие решения.",
      "真正的友谊经得起难看的发型和更糟的决定。"
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
      "Zaufanie to odpowiedź. Pytanie pewnie było dziwne.",
      "Trust is the answer. The question was probably strange.",
      "Доверие — это ответ. Вопрос, наверное, был странным.",
      "信任就是答案。问题大概很奇怪。"
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
      "Na szacunek trzeba zasłużyć. Głośność nie jest kwalifikacją.",
      "Respect is earned. Volume is not a qualification.",
      "Уважение нужно заслужить. Громкость — не квалификация.",
      "尊重是赢来的。嗓门大不算资格。"
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
      "Uczciwość to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "Honesty is not a personality trait. Someone had to say it.",
      "Честность — не черта характера. Кто-то должен был это сказать.",
      "诚实不是性格特点。总得有人说出来。"
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
      "Życzliwość nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "Kindness will not solve all your problems. Lower your expectations.",
      "Доброта не решит всех твоих проблем. Умерь ожидания.",
      "善良解决不了你所有的问题。降低一点期待吧。"
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
      "Trzeba odwagi, żeby wysłać tego e-maila bez sprawdzania go dwanaście razy.",
      "It takes courage to send that email without checking it twelve times.",
      "Нужна смелость, чтобы отправить это письмо, не проверив его двенадцать раз.",
      "不检查十二遍就发出那封邮件，是需要勇气的。"
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
      "Ciekawość to nie wymówka na spóźnienie. Ale niezła próba.",
      "Curiosity is not an excuse to be late. Nice try, though.",
      "Любопытство — не оправдание для опоздания. Но попытка неплохая.",
      "好奇心不是迟到的借口。不过，这个借口编得还行。"
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
      "Kreatywność to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "Creativity is not the problem. Your dramatic reaction is.",
      "Креативность — не проблема. Проблема — твоя драматичная реакция.",
      "创造力不是问题。你那夸张的反应才是问题。"
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
      "Wyobraźnia zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "Imagination deserves a place in this story. Your unsolicited advice does not.",
      "Воображение заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "想象力值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Mądrość to odpowiedź. Pytanie pewnie było dziwne.",
      "Wisdom is the answer. The question was probably strange.",
      "Мудрость — это ответ. Вопрос, наверное, был странным.",
      "智慧就是答案。问题大概很奇怪。"
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
      "Wiedza to nie zamiennik zdrowego rozsądku. Niestety.",
      "Knowledge is not a substitute for common sense. Unfortunately.",
      "Знание — не замена здравому смыслу. К сожалению.",
      "知识代替不了常识。真遗憾。"
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
      "Doświadczenie to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "Experience is not a personality trait. Someone had to say it.",
      "Опыт — не черта характера. Кто-то должен был это сказать.",
      "经验不是性格特点。总得有人说出来。"
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
      "Wolność nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "Freedom will not solve all your problems. Lower your expectations.",
      "Свобода не решит всех твоих проблем. Умерь ожидания.",
      "自由解决不了你所有的问题。降低一点期待吧。"
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
      "Spokój to dzisiejszy temat. Twój były może poczekać.",
      "Peace is the topic today. Your ex can wait.",
      "Спокойствие — сегодняшняя тема. Твой бывший может подождать.",
      "平静是今天的话题。你的前任可以等等。"
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
      "Twoja cisza to najlepszy argument, jaki dziś przedstawiłeś.",
      "Your silence is the best point you have made today.",
      "Твоя тишина — лучший аргумент за сегодня.",
      "你的沉默是你今天最有说服力的发言。"
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
      "To nie chaos. To mój system porządkowania dokumentów.",
      "This is not chaos. It is my filing system.",
      "Это не хаос. Это моя система хранения документов.",
      "这不是混乱。这是我的文件管理系统。"
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
      "Radzę sobie ze stresem, dostarczając mu więcej powodów do zmartwień.",
      "I manage stress by giving it more things to worry about.",
      "Я справляюсь со стрессом, подкидывая ему новые поводы для беспокойства.",
      "我应对压力的方式，就是给它更多值得担心的事。"
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
      "Energia to odpowiedź. Pytanie pewnie było dziwne.",
      "Energy is the answer. The question was probably strange.",
      "Энергия — это ответ. Вопрос, наверное, был странным.",
      "精力就是答案。问题大概很奇怪。"
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
      "Odpoczynek to nie zamiennik zdrowego rozsądku. Niestety.",
      "Rest is not a substitute for common sense. Unfortunately.",
      "Отдых — не замена здравому смыслу. К сожалению.",
      "休息代替不了常识。真遗憾。"
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
      "Sen to moje hobby, mój talent i mój plan na pięć lat.",
      "Sleep is my hobby, my talent and my five-year plan.",
      "Сон — моё хобби, мой талант и мой план на пять лет.",
      "睡眠是我的爱好、特长和五年规划。"
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
      "Nuda nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "Boredom will not solve all your problems. Lower your expectations.",
      "Скука не решит всех твоих проблем. Умерь ожидания.",
      "无聊解决不了你所有的问题。降低一点期待吧。"
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
      "Duma to dzisiejszy temat. Twój były może poczekać.",
      "Pride is the topic today. Your ex can wait.",
      "Гордость — сегодняшняя тема. Твой бывший может подождать.",
      "自豪是今天的话题。你的前任可以等等。"
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
      "Zazdrość to nie wymówka na spóźnienie. Ale niezła próba.",
      "Jealousy is not an excuse to be late. Nice try, though.",
      "Ревность — не оправдание для опоздания. Но попытка неплохая.",
      "嫉妒不是迟到的借口。不过，这个借口编得还行。"
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
      "Niespodzianka to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "Surprise is not the problem. Your dramatic reaction is.",
      "Сюрприз — не проблема. Проблема — твоя драматичная реакция.",
      "惊喜不是问题。你那夸张的反应才是问题。"
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
      "Nawyk zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A habit deserves a place in this story. Your unsolicited advice does not.",
      "Привычка заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "习惯值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Ta wymówka zasługuje na nagrodę za twórcze pisanie.",
      "That excuse deserves an award for creative writing.",
      "Эта отговорка заслуживает премии за творческое письмо.",
      "这个借口值得拿个创意写作奖。"
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
      "Opinia to nie zamiennik zdrowego rozsądku. Niestety.",
      "An opinion is not a substitute for common sense. Unfortunately.",
      "Мнение — не замена здравому смыслу. К сожалению.",
      "意见代替不了常识。真遗憾。"
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
      "Kupiłam kolejną książkę. Przeczytanie jej to osobny projekt.",
      "I bought another book. Reading it is a separate project.",
      "Я купила ещё одну книгу. Прочитать её — отдельный проект.",
      "我又买了一本书。读完它是另一个项目。"
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
      "Ten zeszyt zawiera trzy pomysły i siedemdziesiąt list zakupów.",
      "This notebook contains three ideas and seventy shopping lists.",
      "В этой тетради три идеи и семьдесят списков покупок.",
      "这个笔记本里有三个想法和七十份购物清单。"
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
      "Długopis to dzisiejszy temat. Twój były może poczekać.",
      "A pen is the topic today. Your ex can wait.",
      "Ручка — сегодняшняя тема. Твой бывший может подождать.",
      "圆珠笔是今天的话题。你的前任可以等等。"
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
      "Ołówek to nie wymówka na spóźnienie. Ale niezła próba.",
      "A pencil is not an excuse to be late. Nice try, though.",
      "Карандаш — не оправдание для опоздания. Но попытка неплохая.",
      "铅笔不是迟到的借口。不过，这个借口编得还行。"
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
      "Biurko to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A desk is not the problem. Your dramatic reaction is.",
      "Письменный стол — не проблема. Проблема — твоя драматичная реакция.",
      "书桌不是问题。你那夸张的反应才是问题。"
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
      "Krzesło zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A chair deserves a place in this story. Your unsolicited advice does not.",
      "Стул заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "椅子值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Stół to odpowiedź. Pytanie pewnie było dziwne.",
      "A table is the answer. The question was probably strange.",
      "Стол — это ответ. Вопрос, наверное, был странным.",
      "桌子就是答案。问题大概很奇怪。"
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
      "Moje łóżko wspiera mnie bardziej niż większość ludzi.",
      "My bed supports me more than most people do.",
      "Моя кровать поддерживает меня лучше, чем большинство людей.",
      "我的床比大多数人都更支持我。"
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
      "Poduszka to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "A pillow is not a personality trait. Someone had to say it.",
      "Подушка — не черта характера. Кто-то должен был это сказать.",
      "枕头不是性格特点。总得有人说出来。"
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
      "Koc nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "A blanket will not solve all your problems. Lower your expectations.",
      "Одеяло не решит всех твоих проблем. Умерь ожидания.",
      "毯子解决不了你所有的问题。降低一点期待吧。"
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
      "Lampa to dzisiejszy temat. Twój były może poczekać.",
      "A lamp is the topic today. Your ex can wait.",
      "Лампа — сегодняшняя тема. Твой бывший может подождать.",
      "灯是今天的话题。你的前任可以等等。"
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
      "Lustro jest szczere. Dzisiaj trochę za szczere.",
      "The mirror is honest. A little too honest today.",
      "Зеркало честное. Сегодня даже слишком.",
      "镜子很诚实。今天有点太诚实了。"
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
      "Okno to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A window is not the problem. Your dramatic reaction is.",
      "Окно — не проблема. Проблема — твоя драматичная реакция.",
      "窗户不是问题。你那夸张的反应才是问题。"
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
      "Drzwi zasługują na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A door deserves a place in this story. Your unsolicited advice does not.",
      "Дверь заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "门值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Klucz to odpowiedź. Pytanie pewnie było dziwne.",
      "A key is the answer. The question was probably strange.",
      "Ключ — это ответ. Вопрос, наверное, был странным.",
      "钥匙就是答案。问题大概很奇怪。"
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
      "Torba to nie zamiennik zdrowego rozsądku. Niestety.",
      "A bag is not a substitute for common sense. Unfortunately.",
      "Сумка — не замена здравому смыслу. К сожалению.",
      "包代替不了常识。真遗憾。"
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
      "Mój portfel jest na bardzo ścisłej diecie.",
      "My wallet is on a very strict diet.",
      "Мой кошелёк на очень строгой диете.",
      "我的钱包正在严格节食。"
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
      "Parasol nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "An umbrella will not solve all your problems. Lower your expectations.",
      "Зонт не решит всех твоих проблем. Умерь ожидания.",
      "雨伞解决不了你所有的问题。降低一点期待吧。"
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
      "Mój telefon jest inteligentny. Jego właścicielka nadal się ładuje.",
      "My phone is smart. Its owner is still buffering.",
      "Мой телефон умный. Его хозяйка всё ещё загружается.",
      "我的手机很智能。它的主人还在加载中。"
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
      "Komputer to nie wymówka na spóźnienie. Ale niezła próba.",
      "A computer is not an excuse to be late. Nice try, though.",
      "Компьютер — не оправдание для опоздания. Но попытка неплохая.",
      "电脑不是迟到的借口。不过，这个借口编得还行。"
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
      "Klawiatura to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A keyboard is not the problem. Your dramatic reaction is.",
      "Клавиатура — не проблема. Проблема — твоя драматичная реакция.",
      "键盘不是问题。你那夸张的反应才是问题。"
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
      "Ekran zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A screen deserves a place in this story. Your unsolicited advice does not.",
      "Экран заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "屏幕值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Aparat fotograficzny to odpowiedź. Pytanie pewnie było dziwne.",
      "A camera is the answer. The question was probably strange.",
      "Фотоаппарат — это ответ. Вопрос, наверное, был странным.",
      "相机就是答案。问题大概很奇怪。"
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
      "Zegar to nie zamiennik zdrowego rozsądku. Niestety.",
      "A clock is not a substitute for common sense. Unfortunately.",
      "Часы — не замена здравому смыслу. К сожалению.",
      "时钟代替不了常识。真遗憾。"
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
      "Zegarek to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "A watch is not a personality trait. Someone had to say it.",
      "Наручные часы — не черта характера. Кто-то должен был это сказать.",
      "手表不是性格特点。总得有人说出来。"
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
      "Filiżanka nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "A cup will not solve all your problems. Lower your expectations.",
      "Чашка не решит всех твоих проблем. Умерь ожидания.",
      "杯子解决不了你所有的问题。降低一点期待吧。"
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
      "Talerz to dzisiejszy temat. Twój były może poczekać.",
      "A plate is the topic today. Your ex can wait.",
      "Тарелка — сегодняшняя тема. Твой бывший может подождать.",
      "盘子是今天的话题。你的前任可以等等。"
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
      "Łyżka to nie wymówka na spóźnienie. Ale niezła próba.",
      "A spoon is not an excuse to be late. Nice try, though.",
      "Ложка — не оправдание для опоздания. Но попытка неплохая.",
      "勺子不是迟到的借口。不过，这个借口编得还行。"
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
      "Widelec to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A fork is not the problem. Your dramatic reaction is.",
      "Вилка — не проблема. Проблема — твоя драматичная реакция.",
      "叉子不是问题。你那夸张的反应才是问题。"
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
      "Nóż zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A knife deserves a place in this story. Your unsolicited advice does not.",
      "Нож заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "刀值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Butelka to odpowiedź. Pytanie pewnie było dziwne.",
      "A bottle is the answer. The question was probably strange.",
      "Бутылка — это ответ. Вопрос, наверное, был странным.",
      "瓶子就是答案。问题大概很奇怪。"
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
      "Pudełko to nie zamiennik zdrowego rozsądku. Niestety.",
      "A box is not a substitute for common sense. Unfortunately.",
      "Коробка — не замена здравому смыслу. К сожалению.",
      "盒子代替不了常识。真遗憾。"
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
      "Świeca to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "A candle is not a personality trait. Someone had to say it.",
      "Свеча — не черта характера. Кто-то должен был это сказать.",
      "蜡烛不是性格特点。总得有人说出来。"
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
      "Ręcznik nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "A towel will not solve all your problems. Lower your expectations.",
      "Полотенце не решит всех твоих проблем. Умерь ожидания.",
      "毛巾解决不了你所有的问题。降低一点期待吧。"
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
      "Szczoteczka do zębów to dzisiejszy temat. Twój były może poczekać.",
      "A toothbrush is the topic today. Your ex can wait.",
      "Зубная щётка — сегодняшняя тема. Твой бывший может подождать.",
      "牙刷是今天的话题。你的前任可以等等。"
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
      "Mydło to nie wymówka na spóźnienie. Ale niezła próba.",
      "Soap is not an excuse to be late. Nice try, though.",
      "Мыло — не оправдание для опоздания. Но попытка неплохая.",
      "肥皂不是迟到的借口。不过，这个借口编得还行。"
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
      "Koszula to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A shirt is not the problem. Your dramatic reaction is.",
      "Рубашка — не проблема. Проблема — твоя драматичная реакция.",
      "衬衫不是问题。你那夸张的反应才是问题。"
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
      "Płaszcz zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A coat deserves a place in this story. Your unsolicited advice does not.",
      "Пальто заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "大衣值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Kapelusz to odpowiedź. Pytanie pewnie było dziwne.",
      "A hat is the answer. The question was probably strange.",
      "Шляпа — это ответ. Вопрос, наверное, был странным.",
      "帽子就是答案。问题大概很奇怪。"
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
      "Szalik to nie zamiennik zdrowego rozsądku. Niestety.",
      "A scarf is not a substitute for common sense. Unfortunately.",
      "Шарф — не замена здравому смыслу. К сожалению.",
      "围巾代替不了常识。真遗憾。"
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
      "Kot nie płaci czynszu, ale ma bardzo stanowcze opinie.",
      "The cat pays no rent but has very strong opinions.",
      "Кот не платит за жильё, зато у него очень твёрдые убеждения.",
      "猫不交房租，意见倒是特别多。"
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
      "Pies we mnie wierzy. Kiepsko ocenia ludzi.",
      "The dog believes in me. A terrible judge of character.",
      "Собака в меня верит. Плохо разбирается в людях.",
      "狗相信我。它看人的眼光真不怎么样。"
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
      "Ptak to dzisiejszy temat. Twój były może poczekać.",
      "A bird is the topic today. Your ex can wait.",
      "Птица — сегодняшняя тема. Твой бывший может подождать.",
      "鸟是今天的话题。你的前任可以等等。"
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
      "Ryba to nie wymówka na spóźnienie. Ale niezła próba.",
      "A fish is not an excuse to be late. Nice try, though.",
      "Рыба — не оправдание для опоздания. Но попытка неплохая.",
      "鱼不是迟到的借口。不过，这个借口编得还行。"
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
      "Koń to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A horse is not the problem. Your dramatic reaction is.",
      "Лошадь — не проблема. Проблема — твоя драматичная реакция.",
      "马不是问题。你那夸张的反应才是问题。"
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
      "Królik zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A rabbit deserves a place in this story. Your unsolicited advice does not.",
      "Кролик заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "兔子值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Lis to odpowiedź. Pytanie pewnie było dziwne.",
      "A fox is the answer. The question was probably strange.",
      "Лиса — это ответ. Вопрос, наверное, был странным.",
      "狐狸就是答案。问题大概很奇怪。"
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
      "Niedźwiedź to nie zamiennik zdrowego rozsądku. Niestety.",
      "A bear is not a substitute for common sense. Unfortunately.",
      "Медведь — не замена здравому смыслу. К сожалению.",
      "熊代替不了常识。真遗憾。"
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
      "Wilk to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "A wolf is not a personality trait. Someone had to say it.",
      "Волк — не черта характера. Кто-то должен был это сказать.",
      "狼不是性格特点。总得有人说出来。"
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
      "Mysz nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "A mouse will not solve all your problems. Lower your expectations.",
      "Мышь не решит всех твоих проблем. Умерь ожидания.",
      "老鼠解决不了你所有的问题。降低一点期待吧。"
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
      "Motyl to dzisiejszy temat. Twój były może poczekać.",
      "A butterfly is the topic today. Your ex can wait.",
      "Бабочка — сегодняшняя тема. Твой бывший может подождать.",
      "蝴蝶是今天的话题。你的前任可以等等。"
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
      "Pszczoła to nie wymówka na spóźnienie. Ale niezła próba.",
      "A bee is not an excuse to be late. Nice try, though.",
      "Пчела — не оправдание для опоздания. Но попытка неплохая.",
      "蜜蜂不是迟到的借口。不过，这个借口编得还行。"
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
      "Drzewo to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A tree is not the problem. Your dramatic reaction is.",
      "Дерево — не проблема. Проблема — твоя драматичная реакция.",
      "树不是问题。你那夸张的反应才是问题。"
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
      "Kwiat zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A flower deserves a place in this story. Your unsolicited advice does not.",
      "Цветок заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "花值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Liść to odpowiedź. Pytanie pewnie było dziwne.",
      "A leaf is the answer. The question was probably strange.",
      "Лист — это ответ. Вопрос, наверное, был странным.",
      "叶子就是答案。问题大概很奇怪。"
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
      "Las to nie zamiennik zdrowego rozsądku. Niestety.",
      "A forest is not a substitute for common sense. Unfortunately.",
      "Лес — не замена здравому смыслу. К сожалению.",
      "森林代替不了常识。真遗憾。"
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
      "Góra to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "A mountain is not a personality trait. Someone had to say it.",
      "Гора — не черта характера. Кто-то должен был это сказать.",
      "山不是性格特点。总得有人说出来。"
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
      "Rzeka nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "A river will not solve all your problems. Lower your expectations.",
      "Река не решит всех твоих проблем. Умерь ожидания.",
      "河解决不了你所有的问题。降低一点期待吧。"
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
      "Jezioro to dzisiejszy temat. Twój były może poczekać.",
      "A lake is the topic today. Your ex can wait.",
      "Озеро — сегодняшняя тема. Твой бывший может подождать.",
      "湖是今天的话题。你的前任可以等等。"
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
      "Morze to nie wymówka na spóźnienie. Ale niezła próba.",
      "The sea is not an excuse to be late. Nice try, though.",
      "Море — не оправдание для опоздания. Но попытка неплохая.",
      "海不是迟到的借口。不过，这个借口编得还行。"
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
      "Deszcz odwołał moje plany. Wreszcie przydatna prognoza pogody.",
      "The rain cancelled my plans. Finally, a useful weather forecast.",
      "Дождь отменил мои планы. Наконец-то полезный прогноз погоды.",
      "下雨取消了我的计划。天气预报终于有用了。"
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
      "Śnieg zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "Snow deserves a place in this story. Your unsolicited advice does not.",
      "Снег заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "雪值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Wiatr to odpowiedź. Pytanie pewnie było dziwne.",
      "Wind is the answer. The question was probably strange.",
      "Ветер — это ответ. Вопрос, наверное, был странным.",
      "风就是答案。问题大概很奇怪。"
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
      "Chmura to nie zamiennik zdrowego rozsądku. Niestety.",
      "A cloud is not a substitute for common sense. Unfortunately.",
      "Облако — не замена здравому смыслу. К сожалению.",
      "云代替不了常识。真遗憾。"
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
      "Słońce to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "The sun is not a personality trait. Someone had to say it.",
      "Солнце — не черта характера. Кто-то должен был это сказать.",
      "太阳不是性格特点。总得有人说出来。"
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
      "Księżyc nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "The moon will not solve all your problems. Lower your expectations.",
      "Луна не решит всех твоих проблем. Умерь ожидания.",
      "月亮解决不了你所有的问题。降低一点期待吧。"
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
      "Gwiazda to dzisiejszy temat. Twój były może poczekać.",
      "A star is the topic today. Your ex can wait.",
      "Звезда — сегодняшняя тема. Твой бывший может подождать.",
      "星星是今天的话题。你的前任可以等等。"
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
      "Niebo to nie wymówka na spóźnienie. Ale niezła próba.",
      "The sky is not an excuse to be late. Nice try, though.",
      "Небо — не оправдание для опоздания. Но попытка неплохая.",
      "天空不是迟到的借口。不过，这个借口编得还行。"
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
      "Plaża to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A beach is not the problem. Your dramatic reaction is.",
      "Пляж — не проблема. Проблема — твоя драматичная реакция.",
      "海滩不是问题。你那夸张的反应才是问题。"
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
      "Ogród zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A garden deserves a place in this story. Your unsolicited advice does not.",
      "Сад заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "花园值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Każda podróż zaczyna się od zapomnienia ładowarki.",
      "Every journey begins with forgetting the charger.",
      "Каждое путешествие начинается с забытой зарядки.",
      "每次旅行都从忘带充电器开始。"
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
      "Bilet to nie zamiennik zdrowego rozsądku. Niestety.",
      "A ticket is not a substitute for common sense. Unfortunately.",
      "Билет — не замена здравому смыслу. К сожалению.",
      "票代替不了常识。真遗憾。"
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
      "Paszport to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "A passport is not a personality trait. Someone had to say it.",
      "Паспорт — не черта характера. Кто-то должен был это сказать.",
      "护照不是性格特点。总得有人说出来。"
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
      "Moja walizka jest pełna. Najwyraźniej potrzebuję siedmiu osobowości na ten wyjazd.",
      "My suitcase is full. Apparently, I need seven personalities for this trip.",
      "Мой чемодан полон. Видимо, для этой поездки мне нужны семь личностей.",
      "我的行李箱满了。看来这趟旅行需要七种人格。"
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
      "Mapa to dzisiejszy temat. Twój były może poczekać.",
      "A map is the topic today. Your ex can wait.",
      "Карта — сегодняшняя тема. Твой бывший может подождать.",
      "地图是今天的话题。你的前任可以等等。"
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
      "Pociąg to nie wymówka na spóźnienie. Ale niezła próba.",
      "A train is not an excuse to be late. Nice try, though.",
      "Поезд — не оправдание для опоздания. Но попытка неплохая.",
      "火车不是迟到的借口。不过，这个借口编得还行。"
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
      "Autobus to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A bus is not the problem. Your dramatic reaction is.",
      "Автобус — не проблема. Проблема — твоя драматичная реакция.",
      "公共汽车不是问题。你那夸张的反应才是问题。"
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
      "Rower zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A bicycle deserves a place in this story. Your unsolicited advice does not.",
      "Велосипед заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "自行车值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Samochód to odpowiedź. Pytanie pewnie było dziwne.",
      "A car is the answer. The question was probably strange.",
      "Машина — это ответ. Вопрос, наверное, был странным.",
      "汽车就是答案。问题大概很奇怪。"
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
      "Samolot to nie zamiennik zdrowego rozsądku. Niestety.",
      "An airplane is not a substitute for common sense. Unfortunately.",
      "Самолёт — не замена здравому смыслу. К сожалению.",
      "飞机代替不了常识。真遗憾。"
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
      "Stacja to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "A station is not a personality trait. Someone had to say it.",
      "Станция — не черта характера. Кто-то должен был это сказать.",
      "车站不是性格特点。总得有人说出来。"
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
      "Lotnisko nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "An airport will not solve all your problems. Lower your expectations.",
      "Аэропорт не решит всех твоих проблем. Умерь ожидания.",
      "机场解决不了你所有的问题。降低一点期待吧。"
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
      "Hotel to dzisiejszy temat. Twój były może poczekać.",
      "A hotel is the topic today. Your ex can wait.",
      "Отель — сегодняшняя тема. Твой бывший может подождать.",
      "酒店是今天的话题。你的前任可以等等。"
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
      "Pokój to nie wymówka na spóźnienie. Ale niezła próba.",
      "A room is not an excuse to be late. Nice try, though.",
      "Комната — не оправдание для опоздания. Но попытка неплохая.",
      "房间不是迟到的借口。不过，这个借口编得还行。"
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
      "Miasto to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A city is not the problem. Your dramatic reaction is.",
      "Город — не проблема. Проблема — твоя драматичная реакция.",
      "城市不是问题。你那夸张的反应才是问题。"
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
      "Wieś zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A village deserves a place in this story. Your unsolicited advice does not.",
      "Деревня заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "村庄值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Ulica to odpowiedź. Pytanie pewnie było dziwne.",
      "A street is the answer. The question was probably strange.",
      "Улица — это ответ. Вопрос, наверное, был странным.",
      "街道就是答案。问题大概很奇怪。"
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
      "Most to nie zamiennik zdrowego rozsądku. Niestety.",
      "A bridge is not a substitute for common sense. Unfortunately.",
      "Мост — не замена здравому смыслу. К сожалению.",
      "桥代替不了常识。真遗憾。"
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
      "Muzeum to nie cecha osobowości. Ktoś musiał to powiedzieć.",
      "A museum is not a personality trait. Someone had to say it.",
      "Музей — не черта характера. Кто-то должен был это сказать.",
      "博物馆不是性格特点。总得有人说出来。"
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
      "Park nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "A park will not solve all your problems. Lower your expectations.",
      "Парк не решит всех твоих проблем. Умерь ожидания.",
      "公园解决不了你所有的问题。降低一点期待吧。"
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
      "Lekcja to dzisiejszy temat. Twój były może poczekać.",
      "A lesson is the topic today. Your ex can wait.",
      "Урок — сегодняшняя тема. Твой бывший может подождать.",
      "课是今天的话题。你的前任可以等等。"
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
      "Język to nie wymówka na spóźnienie. Ale niezła próba.",
      "A language is not an excuse to be late. Nice try, though.",
      "Язык — не оправдание для опоздания. Но попытка неплохая.",
      "语言不是迟到的借口。不过，这个借口编得还行。"
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
      "Słowo to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A word is not the problem. Your dramatic reaction is.",
      "Слово — не проблема. Проблема — твоя драматичная реакция.",
      "单词不是问题。你那夸张的反应才是问题。"
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
      "Zdanie zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A sentence deserves a place in this story. Your unsolicited advice does not.",
      "Предложение заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "句子值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Pytanie to odpowiedź. Pytanie pewnie było dziwne.",
      "A question is the answer. The question was probably strange.",
      "Вопрос — это ответ. Вопрос, наверное, был странным.",
      "问题就是答案。问题大概很奇怪。"
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
      "Odpowiedź to nie zamiennik zdrowego rozsądku. Niestety.",
      "An answer is not a substitute for common sense. Unfortunately.",
      "Ответ — не замена здравому смыслу. К сожалению.",
      "答案代替不了常识。真遗憾。"
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
      "Popełniłam błąd. Nazwijmy go edycją limitowaną.",
      "I made a mistake. Let us call it a limited edition.",
      "Я допустила ошибку. Назовём её ограниченным тиражом.",
      "我犯了个错误。就叫它限量版吧。"
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
      "Plan nie rozwiąże wszystkich twoich problemów. Obniż oczekiwania.",
      "A plan will not solve all your problems. Lower your expectations.",
      "План не решит всех твоих проблем. Умерь ожидания.",
      "计划解决不了你所有的问题。降低一点期待吧。"
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
      "Pomysł to dzisiejszy temat. Twój były może poczekać.",
      "An idea is the topic today. Your ex can wait.",
      "Идея — сегодняшняя тема. Твой бывший может подождать.",
      "想法是今天的话题。你的前任可以等等。"
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
      "Decyzja to nie wymówka na spóźnienie. Ale niezła próba.",
      "A decision is not an excuse to be late. Nice try, though.",
      "Решение — не оправдание для опоздания. Но попытка неплохая.",
      "决定不是迟到的借口。不过，这个借口编得还行。"
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
      "Termin to po prostu straszak w kalendarzu.",
      "A deadline is just a jump scare on a calendar.",
      "Крайний срок — просто скример в календаре.",
      "截止日期就是日历上的突然惊吓。"
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
      "Spotkanie zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A meeting deserves a place in this story. Your unsolicited advice does not.",
      "Встреча заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "会面值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "E-mail to odpowiedź. Pytanie pewnie było dziwne.",
      "An email is the answer. The question was probably strange.",
      "Электронное письмо — это ответ. Вопрос, наверное, был странным.",
      "电子邮件就是答案。问题大概很奇怪。"
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
      "Wiadomość to nie zamiennik zdrowego rozsądku. Niestety.",
      "A message is not a substitute for common sense. Unfortunately.",
      "Сообщение — не замена здравому смыслу. К сожалению.",
      "消息代替不了常识。真遗憾。"
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
      "Moje hasło jest silne. Moja silna wola nie.",
      "My password is strong. My willpower is not.",
      "Мой пароль надёжный. Моя сила воли — нет.",
      "我的密码很强。我的意志力不强。"
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
      "Pieniądze szczęścia nie dają. I tak chcę to sprawdzić.",
      "Money cannot buy happiness. I would still like to test that.",
      "Деньги не приносят счастья. Всё равно хочу проверить.",
      "钱买不到幸福。我还是想验证一下。"
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
      "Czas leci, kiedy unikasz obowiązków.",
      "Time flies when you are avoiding responsibilities.",
      "Время летит, когда избегаешь обязанностей.",
      "逃避责任的时候，时间过得飞快。"
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
      "Muzyka to nie wymówka na spóźnienie. Ale niezła próba.",
      "Music is not an excuse to be late. Nice try, though.",
      "Музыка — не оправдание для опоздания. Но попытка неплохая.",
      "音乐不是迟到的借口。不过，这个借口编得还行。"
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
      "Film to nie problem. Problemem jest twoja dramatyczna reakcja.",
      "A film is not the problem. Your dramatic reaction is.",
      "Фильм — не проблема. Проблема — твоя драматичная реакция.",
      "电影不是问题。你那夸张的反应才是问题。"
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
      "Historia zasługuje na miejsce w tej historii. Twoje nieproszone rady nie.",
      "A story deserves a place in this story. Your unsolicited advice does not.",
      "История заслуживает места в этой истории. Твои непрошеные советы — нет.",
      "故事值得出现在这个故事里。你那些没人问的建议就免了。"
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
      "Obietnica to nie plan. Twój kalendarz zna różnicę.",
      "A promise is not a plan. Your calendar knows the difference.",
      "Обещание — не план. Твой календарь знает разницу.",
      "承诺不是计划。你的日历知道区别。"
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
      "Twój sekret jest u mnie bezpieczny. Prawie nie słuchałam.",
      "Your secret is safe with me. I was barely listening.",
      "Твой секрет со мной в безопасности. Я почти не слушала.",
      "你的秘密在我这里很安全。我刚才基本没听。"
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
      "Moje marzenie jest wielkie. Moja zdolność skupienia uwagi jest malutka.",
      "My dream is big. My attention span is tiny.",
      "Моя мечта огромна. Моя способность концентрироваться крошечная.",
      "我的梦想很大。我的专注力很小。"
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
      "Moje hobby to kupowanie rzeczy do innych moich hobby.",
      "My hobby is buying supplies for my other hobbies.",
      "Моё хобби — покупать принадлежности для других моих хобби.",
      "我的爱好是给其他爱好买用品。"
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
      "Ta kolejka jest dłuższa niż mój ostatni związek.",
      "This queue is longer than my last relationship.",
      "Эта очередь длиннее моих последних отношений.",
      "这支队伍比我上一段恋情还长。"
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
      "Zniżka to nie powód, żeby kupić trzecią lampę.",
      "A discount is not a reason to buy a third lamp.",
      "Скидка — не повод покупать третью лампу.",
      "有折扣不是买第三盏灯的理由。"
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
      "Zachowaj paragon. Nawet twoja pewność siebie potrzebuje możliwości zwrotu.",
      "Keep the receipt. Even your confidence needs a return policy.",
      "Сохрани чек. Даже твоей уверенности нужна возможность возврата.",
      "留好小票。连你的自信都需要退货保障。"
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
      "Weekend ma dwa dni. Moja regeneracja wymaga dwunastu.",
      "The weekend has two days. My recovery requires twelve.",
      "В выходных два дня. На восстановление мне нужно двенадцать.",
      "周末有两天。我恢复元气需要十二天。"
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
      "Potrzebuję urlopu od planowania urlopu.",
      "I need a holiday from planning my holiday.",
      "Мне нужен отпуск от планирования отпуска.",
      "我需要放个假，休息一下，不再规划假期。"
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
      "Rzeczywistość zadzwoniła. Przekierowałam ją na pocztę głosową.",
      "Reality called. I let it go to voicemail.",
      "Реальность позвонила. Я перевела звонок на голосовую почту.",
      "现实打来电话。我让它转到语音信箱了。"
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
      "Kuchnia? To jest twój wielki plan?",
      "A kitchen? That is your grand plan?",
      "Кухня? Это и есть твой великий план?",
      "厨房？这就是你的宏伟计划？"
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
      "Łazienka to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A bathroom is the subject of my presentation. Try to contain your excitement.",
      "Ванная комната — тема моей презентации. Постарайся сдержать восторг.",
      "浴室是我演示的主题。请克制一下你的激动。"
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
      "Sypialnia to nie cecha osobowości. Sprawdziłam.",
      "A bedroom is not a personality trait. I checked.",
      "Спальня — не черта характера. Я проверила.",
      "卧室不是性格特点。我查过了。"
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
      "Salon to odpowiedź. Proszę nie pytać o pytanie.",
      "A living room is the answer. Please do not ask about the question.",
      "Гостиная — это ответ. О вопросе лучше не спрашивай.",
      "客厅就是答案。请别问问题是什么。"
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
      "Balkon to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A balcony is my topic today. Your opinions are an optional extra.",
      "Балкон — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "阳台是我今天的话题。你的意见是可选项。"
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
      "Dach to nie zamiennik porządnych przeprosin.",
      "A roof is not a substitute for a decent apology.",
      "Крыша — не замена нормальному извинению.",
      "屋顶代替不了一次像样的道歉。"
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
      "Ściana to ciekawy wybór. Staram się być dyplomatyczna.",
      "A wall is an interesting choice. I am being diplomatic.",
      "Стена — интересный выбор. Я стараюсь быть дипломатичной.",
      "墙是个有趣的选择。我已经说得很委婉了。"
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
      "Podłoga to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A floor is the title of my next masterpiece. Expectations should remain low.",
      "Пол — название моего следующего шедевра. Лучше не завышать ожидания.",
      "地板是我下一部杰作的标题。期待值最好低一点。"
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
      "Sufit to nie główny problem. Problemem są twoje priorytety.",
      "A ceiling is not the main issue. Your priorities are.",
      "Потолок — не главная проблема. Проблема в твоих приоритетах.",
      "天花板不是主要问题。你的轻重缓急才是。"
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
      "Dywan to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A carpet is the theme of this conversation. Somehow, we are still talking about you.",
      "Ковёр — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "地毯是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Sofa to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A sofa is not a good reason to call me at dawn.",
      "Диван — не повод звонить мне на рассвете.",
      "沙发不是天一亮就给我打电话的好理由。"
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
      "Półka to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A shelf is just the beginning of this story. Yes, it gets stranger.",
      "Полка — только начало этой истории. Да, дальше ещё страннее.",
      "架子只是这个故事的开始。没错，后面更奇怪。"
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
      "Szafa? To jest twój wielki plan?",
      "A wardrobe? That is your grand plan?",
      "Шкаф? Это и есть твой великий план?",
      "衣柜？这就是你的宏伟计划？"
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
      "Szuflada to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A drawer is the subject of my presentation. Try to contain your excitement.",
      "Ящик — тема моей презентации. Постарайся сдержать восторг.",
      "抽屉是我演示的主题。请克制一下你的激动。"
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
      "Lodówka to nie cecha osobowości. Sprawdziłam.",
      "A fridge is not a personality trait. I checked.",
      "Холодильник — не черта характера. Я проверила.",
      "冰箱不是性格特点。我查过了。"
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
      "Piekarnik to odpowiedź. Proszę nie pytać o pytanie.",
      "An oven is the answer. Please do not ask about the question.",
      "Духовка — это ответ. О вопросе лучше не спрашивай.",
      "烤箱就是答案。请别问问题是什么。"
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
      "Czajnik to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A kettle is my topic today. Your opinions are an optional extra.",
      "Чайник — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "水壶是我今天的话题。你的意见是可选项。"
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
      "Mikrofalówka to nie zamiennik porządnych przeprosin.",
      "A microwave is not a substitute for a decent apology.",
      "Микроволновка — не замена нормальному извинению.",
      "微波炉代替不了一次像样的道歉。"
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
      "Zmywarka to ciekawy wybór. Staram się być dyplomatyczna.",
      "A dishwasher is an interesting choice. I am being diplomatic.",
      "Посудомоечная машина — интересный выбор. Я стараюсь быть дипломатичной.",
      "洗碗机是个有趣的选择。我已经说得很委婉了。"
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
      "Pralka to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A washing machine is the title of my next masterpiece. Expectations should remain low.",
      "Стиральная машина — название моего следующего шедевра. Лучше не завышать ожидания.",
      "洗衣机是我下一部杰作的标题。期待值最好低一点。"
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
      "Odkurzacz to nie główny problem. Problemem są twoje priorytety.",
      "A vacuum cleaner is not the main issue. Your priorities are.",
      "Пылесос — не главная проблема. Проблема в твоих приоритетах.",
      "吸尘器不是主要问题。你的轻重缓急才是。"
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
      "Miotła to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A broom is the theme of this conversation. Somehow, we are still talking about you.",
      "Метла — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "扫帚是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Wiadro to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A bucket is not a good reason to call me at dawn.",
      "Ведро — не повод звонить мне на рассвете.",
      "水桶不是天一亮就给我打电话的好理由。"
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
      "Gąbka to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A sponge is just the beginning of this story. Yes, it gets stranger.",
      "Губка — только начало этой истории. Да, дальше ещё страннее.",
      "海绵只是这个故事的开始。没错，后面更奇怪。"
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
      "Zasłona? To jest twój wielki plan?",
      "A curtain? That is your grand plan?",
      "Штора? Это и есть твой великий план?",
      "窗帘？这就是你的宏伟计划？"
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
      "Wazon to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A vase is the subject of my presentation. Try to contain your excitement.",
      "Ваза — тема моей презентации. Постарайся сдержать восторг.",
      "花瓶是我演示的主题。请克制一下你的激动。"
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
      "Obraz to nie cecha osobowości. Sprawdziłam.",
      "A painting is not a personality trait. I checked.",
      "Картина — не черта характера. Я проверила.",
      "画不是性格特点。我查过了。"
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
      "Gniazdko to odpowiedź. Proszę nie pytać o pytanie.",
      "A socket is the answer. Please do not ask about the question.",
      "Розетка — это ответ. О вопросе лучше не спрашивай.",
      "插座就是答案。请别问问题是什么。"
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
      "Ładowarka to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A charger is my topic today. Your opinions are an optional extra.",
      "Зарядное устройство — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "充电器是我今天的话题。你的意见是可选项。"
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
      "Pilot to nie zamiennik porządnych przeprosin.",
      "A remote control is not a substitute for a decent apology.",
      "Пульт — не замена нормальному извинению.",
      "遥控器代替不了一次像样的道歉。"
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
      "Sukienka to ciekawy wybór. Staram się być dyplomatyczna.",
      "A dress is an interesting choice. I am being diplomatic.",
      "Платье — интересный выбор. Я стараюсь быть дипломатичной.",
      "连衣裙是个有趣的选择。我已经说得很委婉了。"
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
      "Spódnica to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A skirt is the title of my next masterpiece. Expectations should remain low.",
      "Юбка — название моего следующего шедевра. Лучше не завышать ожидания.",
      "裙子是我下一部杰作的标题。期待值最好低一点。"
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
      "Kurtka to nie główny problem. Problemem są twoje priorytety.",
      "A jacket is not the main issue. Your priorities are.",
      "Куртка — не главная проблема. Проблема в твоих приоритетах.",
      "夹克不是主要问题。你的轻重缓急才是。"
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
      "Sweter to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A sweater is the theme of this conversation. Somehow, we are still talking about you.",
      "Свитер — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "毛衣是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Koszulka to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A T-shirt is not a good reason to call me at dawn.",
      "Футболка — не повод звонить мне на рассвете.",
      "T恤不是天一亮就给我打电话的好理由。"
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
      "Garnitur to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A suit is just the beginning of this story. Yes, it gets stranger.",
      "Костюм — только начало этой истории. Да, дальше ещё страннее.",
      "西装只是这个故事的开始。没错，后面更奇怪。"
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
      "Krawat? To jest twój wielki plan?",
      "A tie? That is your grand plan?",
      "Галстук? Это и есть твой великий план?",
      "领带？这就是你的宏伟计划？"
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
      "Pasek to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A belt is the subject of my presentation. Try to contain your excitement.",
      "Ремень — тема моей презентации. Постарайся сдержать восторг.",
      "腰带是我演示的主题。请克制一下你的激动。"
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
      "But to nie cecha osobowości. Sprawdziłam.",
      "A shoe is not a personality trait. I checked.",
      "Ботинок — не черта характера. Я проверила.",
      "鞋子不是性格特点。我查过了。"
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
      "Skarpetka to odpowiedź. Proszę nie pytać o pytanie.",
      "A sock is the answer. Please do not ask about the question.",
      "Носок — это ответ. О вопросе лучше не спрашивай.",
      "袜子就是答案。请别问问题是什么。"
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
      "Rękawiczka to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A glove is my topic today. Your opinions are an optional extra.",
      "Перчатка — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "手套是我今天的话题。你的意见是可选项。"
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
      "Kieszeń to nie zamiennik porządnych przeprosin.",
      "A pocket is not a substitute for a decent apology.",
      "Карман — не замена нормальному извинению.",
      "口袋代替不了一次像样的道歉。"
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
      "Guzik to ciekawy wybór. Staram się być dyplomatyczna.",
      "A button is an interesting choice. I am being diplomatic.",
      "Пуговица — интересный выбор. Я стараюсь быть дипломатичной.",
      "纽扣是个有趣的选择。我已经说得很委婉了。"
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
      "Zamek błyskawiczny to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A zipper is the title of my next masterpiece. Expectations should remain low.",
      "Молния — название моего следующего шедевра. Лучше не завышать ожидания.",
      "拉链是我下一部杰作的标题。期待值最好低一点。"
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
      "Pierścionek to nie główny problem. Problemem są twoje priorytety.",
      "A ring is not the main issue. Your priorities are.",
      "Кольцо — не главная проблема. Проблема в твоих приоритетах.",
      "戒指不是主要问题。你的轻重缓急才是。"
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
      "Naszyjnik to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A necklace is the theme of this conversation. Somehow, we are still talking about you.",
      "Ожерелье — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "项链是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Bransoletka to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A bracelet is not a good reason to call me at dawn.",
      "Браслет — не повод звонить мне на рассвете.",
      "手链不是天一亮就给我打电话的好理由。"
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
      "Kolczyk to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "An earring is just the beginning of this story. Yes, it gets stranger.",
      "Серьга — только начало этой истории. Да, дальше ещё страннее.",
      "耳环只是这个故事的开始。没错，后面更奇怪。"
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
      "Grzebień? To jest twój wielki plan?",
      "A comb? That is your grand plan?",
      "Расчёска? Это и есть твой великий план?",
      "梳子？这就是你的宏伟计划？"
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
      "Szczotka do włosów to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A hairbrush is the subject of my presentation. Try to contain your excitement.",
      "Щётка для волос — тема моей презентации. Постарайся сдержать восторг.",
      "发刷是我演示的主题。请克制一下你的激动。"
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
      "Szampon to nie cecha osobowości. Sprawdziłam.",
      "Shampoo is not a personality trait. I checked.",
      "Шампунь — не черта характера. Я проверила.",
      "洗发水不是性格特点。我查过了。"
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
      "Pasta do zębów to odpowiedź. Proszę nie pytać o pytanie.",
      "Toothpaste is the answer. Please do not ask about the question.",
      "Зубная паста — это ответ. О вопросе лучше не спрашивай.",
      "牙膏就是答案。请别问问题是什么。"
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
      "Perfumy to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "Perfume is my topic today. Your opinions are an optional extra.",
      "Духи — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "香水是我今天的话题。你的意见是可选项。"
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
      "Szminka to nie zamiennik porządnych przeprosin.",
      "Lipstick is not a substitute for a decent apology.",
      "Помада — не замена нормальному извинению.",
      "口红代替不了一次像样的道歉。"
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
      "Krem przeciwsłoneczny to ciekawy wybór. Staram się być dyplomatyczna.",
      "Sunscreen is an interesting choice. I am being diplomatic.",
      "Солнцезащитный крем — интересный выбор. Я стараюсь быть дипломатичной.",
      "防晒霜是个有趣的选择。我已经说得很委婉了。"
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
      "Maszynka do golenia to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A razor is the title of my next masterpiece. Expectations should remain low.",
      "Бритва — название моего следующего шедевра. Лучше не завышать ожидания.",
      "剃须刀是我下一部杰作的标题。期待值最好低一点。"
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
      "Paznokieć to nie główny problem. Problemem są twoje priorytety.",
      "A nail is not the main issue. Your priorities are.",
      "Ноготь — не главная проблема. Проблема в твоих приоритетах.",
      "指甲不是主要问题。你的轻重缓急才是。"
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
      "Fryzura to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A haircut is the theme of this conversation. Somehow, we are still talking about you.",
      "Стрижка — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "发型是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Plama to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A stain is not a good reason to call me at dawn.",
      "Пятно — не повод звонить мне на рассвете.",
      "污渍不是天一亮就给我打电话的好理由。"
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
      "Pranie to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "Laundry is just the beginning of this story. Yes, it gets stranger.",
      "Стирка — только начало этой истории. Да, дальше ещё страннее.",
      "洗衣只是这个故事的开始。没错，后面更奇怪。"
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
      "Głowa? To jest twój wielki plan?",
      "A head? That is your grand plan?",
      "Голова? Это и есть твой великий план?",
      "头？这就是你的宏伟计划？"
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
      "Twarz to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A face is the subject of my presentation. Try to contain your excitement.",
      "Лицо — тема моей презентации. Постарайся сдержать восторг.",
      "脸是我演示的主题。请克制一下你的激动。"
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
      "Oko to nie cecha osobowości. Sprawdziłam.",
      "An eye is not a personality trait. I checked.",
      "Глаз — не черта характера. Я проверила.",
      "眼睛不是性格特点。我查过了。"
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
      "Ucho to odpowiedź. Proszę nie pytać o pytanie.",
      "An ear is the answer. Please do not ask about the question.",
      "Ухо — это ответ. О вопросе лучше не спрашивай.",
      "耳朵就是答案。请别问问题是什么。"
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
      "Nos to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A nose is my topic today. Your opinions are an optional extra.",
      "Нос — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "鼻子是我今天的话题。你的意见是可选项。"
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
      "Usta to nie zamiennik porządnych przeprosin.",
      "A mouth is not a substitute for a decent apology.",
      "Рот — не замена нормальному извинению.",
      "嘴代替不了一次像样的道歉。"
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
      "Ząb to ciekawy wybór. Staram się być dyplomatyczna.",
      "A tooth is an interesting choice. I am being diplomatic.",
      "Зуб — интересный выбор. Я стараюсь быть дипломатичной.",
      "牙齿是个有趣的选择。我已经说得很委婉了。"
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
      "Szyja to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A neck is the title of my next masterpiece. Expectations should remain low.",
      "Шея — название моего следующего шедевра. Лучше не завышать ожидания.",
      "脖子是我下一部杰作的标题。期待值最好低一点。"
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
      "Ramię to nie główny problem. Problemem są twoje priorytety.",
      "A shoulder is not the main issue. Your priorities are.",
      "Плечо — не главная проблема. Проблема в твоих приоритетах.",
      "肩膀不是主要问题。你的轻重缓急才是。"
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
      "Łokieć to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "An elbow is the theme of this conversation. Somehow, we are still talking about you.",
      "Локоть — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "肘部是这次谈话的主题。不知怎么，我们还是在聊你。"
    ]
  },
  {
    "id": 270,
    "category": "More to explore",
    "words": [
      "dłoń",
      "a hand",
      "кисть руки",
      "手"
    ],
    "pinyin": "shǒu",
    "examples": [
      "Dłoń to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A hand is not a good reason to call me at dawn.",
      "Кисть руки — не повод звонить мне на рассвете.",
      "手不是天一亮就给我打电话的好理由。"
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
      "Palec to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A finger is just the beginning of this story. Yes, it gets stranger.",
      "Палец — только начало этой истории. Да, дальше ещё страннее.",
      "手指只是这个故事的开始。没错，后面更奇怪。"
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
      "Kolano? To jest twój wielki plan?",
      "A knee? That is your grand plan?",
      "Колено? Это и есть твой великий план?",
      "膝盖？这就是你的宏伟计划？"
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
      "Stopa to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A foot is the subject of my presentation. Try to contain your excitement.",
      "Ступня — тема моей презентации. Постарайся сдержать восторг.",
      "脚是我演示的主题。请克制一下你的激动。"
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
      "Serce to nie cecha osobowości. Sprawdziłam.",
      "A heart is not a personality trait. I checked.",
      "Сердце — не черта характера. Я проверила.",
      "心脏不是性格特点。我查过了。"
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
      "Mózg to odpowiedź. Proszę nie pytać o pytanie.",
      "A brain is the answer. Please do not ask about the question.",
      "Мозг — это ответ. О вопросе лучше не спрашивай.",
      "大脑就是答案。请别问问题是什么。"
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
      "Żołądek to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A stomach is my topic today. Your opinions are an optional extra.",
      "Желудок — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "胃是我今天的话题。你的意见是可选项。"
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
      "Skóra to nie zamiennik porządnych przeprosin.",
      "Skin is not a substitute for a decent apology.",
      "Кожа — не замена нормальному извинению.",
      "皮肤代替不了一次像样的道歉。"
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
      "Kość to ciekawy wybór. Staram się być dyplomatyczna.",
      "A bone is an interesting choice. I am being diplomatic.",
      "Кость — интересный выбор. Я стараюсь быть дипломатичной.",
      "骨头是个有趣的选择。我已经说得很委婉了。"
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
      "Mięsień to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A muscle is the title of my next masterpiece. Expectations should remain low.",
      "Мышца — название моего следующего шедевра. Лучше не завышать ожидания.",
      "肌肉是我下一部杰作的标题。期待值最好低一点。"
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
      "Uśmiech to nie główny problem. Problemem są twoje priorytety.",
      "A smile is not the main issue. Your priorities are.",
      "Улыбка — не главная проблема. Проблема в твоих приоритетах.",
      "微笑不是主要问题。你的轻重缓急才是。"
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
      "Śmiech to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A laugh is the theme of this conversation. Somehow, we are still talking about you.",
      "Смех — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "笑声是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Łza to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A tear is not a good reason to call me at dawn.",
      "Слеза — не повод звонить мне на рассвете.",
      "眼泪不是天一亮就给我打电话的好理由。"
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
      "Ból głowy to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A headache is just the beginning of this story. Yes, it gets stranger.",
      "Головная боль — только начало этой истории. Да, дальше ещё страннее.",
      "头痛只是这个故事的开始。没错，后面更奇怪。"
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
      "Gorączka? To jest twój wielki plan?",
      "A fever? That is your grand plan?",
      "Жар? Это и есть твой великий план?",
      "发烧？这就是你的宏伟计划？"
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
      "Kaszel to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A cough is the subject of my presentation. Try to contain your excitement.",
      "Кашель — тема моей презентации. Постарайся сдержать восторг.",
      "咳嗽是我演示的主题。请克制一下你的激动。"
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
      "Kichnięcie to nie cecha osobowości. Sprawdziłam.",
      "A sneeze is not a personality trait. I checked.",
      "Чихание — не черта характера. Я проверила.",
      "喷嚏不是性格特点。我查过了。"
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
      "Oddech to odpowiedź. Proszę nie pytać o pytanie.",
      "A breath is the answer. Please do not ask about the question.",
      "Вдох — это ответ. О вопросе лучше не спрашивай.",
      "呼吸就是答案。请别问问题是什么。"
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
      "Głos to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A voice is my topic today. Your opinions are an optional extra.",
      "Голос — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "声音是我今天的话题。你的意见是可选项。"
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
      "Blizna to nie zamiennik porządnych przeprosin.",
      "A scar is not a substitute for a decent apology.",
      "Шрам — не замена нормальному извинению.",
      "疤痕代替不了一次像样的道歉。"
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
      "Szkoła to ciekawy wybór. Staram się być dyplomatyczna.",
      "A school is an interesting choice. I am being diplomatic.",
      "Школа — интересный выбор. Я стараюсь быть дипломатичной.",
      "学校是个有趣的选择。我已经说得很委婉了。"
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
      "Uniwersytet to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A university is the title of my next masterpiece. Expectations should remain low.",
      "Университет — название моего следующего шедевра. Лучше не завышать ожидания.",
      "大学是我下一部杰作的标题。期待值最好低一点。"
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
      "Biblioteka to nie główny problem. Problemem są twoje priorytety.",
      "A library is not the main issue. Your priorities are.",
      "Библиотека — не главная проблема. Проблема в твоих приоритетах.",
      "图书馆不是主要问题。你的轻重缓急才是。"
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
      "Sala lekcyjna to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A classroom is the theme of this conversation. Somehow, we are still talking about you.",
      "Класс — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "教室是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Słownik to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A dictionary is not a good reason to call me at dawn.",
      "Словарь — не повод звонить мне на рассвете.",
      "词典不是天一亮就给我打电话的好理由。"
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
      "Podręcznik to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A textbook is just the beginning of this story. Yes, it gets stranger.",
      "Учебник — только начало этой истории. Да, дальше ещё страннее.",
      "课本只是这个故事的开始。没错，后面更奇怪。"
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
      "Praca domowa? To jest twój wielki plan?",
      "Homework? That is your grand plan?",
      "Домашнее задание? Это и есть твой великий план?",
      "家庭作业？这就是你的宏伟计划？"
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
      "Egzamin to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "An exam is the subject of my presentation. Try to contain your excitement.",
      "Экзамен — тема моей презентации. Постарайся сдержать восторг.",
      "考试是我演示的主题。请克制一下你的激动。"
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
      "Ocena to nie cecha osobowości. Sprawdziłam.",
      "A grade is not a personality trait. I checked.",
      "Оценка — не черта характера. Я проверила.",
      "成绩不是性格特点。我查过了。"
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
      "Dyplom to odpowiedź. Proszę nie pytać o pytanie.",
      "A diploma is the answer. Please do not ask about the question.",
      "Диплом — это ответ. О вопросе лучше не спрашивай.",
      "文凭就是答案。请别问问题是什么。"
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
      "Wykład to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A lecture is my topic today. Your opinions are an optional extra.",
      "Лекция — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "讲座是我今天的话题。你的意见是可选项。"
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
      "Kurs to nie zamiennik porządnych przeprosin.",
      "A course is not a substitute for a decent apology.",
      "Курс — не замена нормальному извинению.",
      "课程代替不了一次像样的道歉。"
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
      "Akapit to ciekawy wybór. Staram się być dyplomatyczna.",
      "A paragraph is an interesting choice. I am being diplomatic.",
      "Абзац — интересный выбор. Я стараюсь быть дипломатичной.",
      "段落是个有趣的选择。我已经说得很委婉了。"
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
      "Rozdział to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A chapter is the title of my next masterpiece. Expectations should remain low.",
      "Глава — название моего следующего шедевра. Лучше не завышать ожидания.",
      "章节是我下一部杰作的标题。期待值最好低一点。"
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
      "Strona to nie główny problem. Problemem są twoje priorytety.",
      "A page is not the main issue. Your priorities are.",
      "Страница — не главная проблема. Проблема в твоих приоритетах.",
      "页不是主要问题。你的轻重缓急才是。"
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
      "Tytuł to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A title is the theme of this conversation. Somehow, we are still talking about you.",
      "Заголовок — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "标题是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Litera to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A letter is not a good reason to call me at dawn.",
      "Буква — не повод звонить мне на рассвете.",
      "字母不是天一亮就给我打电话的好理由。"
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
      "Sylaba to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A syllable is just the beginning of this story. Yes, it gets stranger.",
      "Слог — только начало этой истории. Да, дальше ещё страннее.",
      "音节只是这个故事的开始。没错，后面更奇怪。"
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
      "Samogłoska? To jest twój wielki plan?",
      "A vowel? That is your grand plan?",
      "Гласный звук? Это и есть твой великий план?",
      "元音？这就是你的宏伟计划？"
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
      "Spółgłoska to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A consonant is the subject of my presentation. Try to contain your excitement.",
      "Согласный звук — тема моей презентации. Постарайся сдержать восторг.",
      "辅音是我演示的主题。请克制一下你的激动。"
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
      "Gramatyka to nie cecha osobowości. Sprawdziłam.",
      "Grammar is not a personality trait. I checked.",
      "Грамматика — не черта характера. Я проверила.",
      "语法不是性格特点。我查过了。"
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
      "Wymowa to odpowiedź. Proszę nie pytać o pytanie.",
      "Pronunciation is the answer. Please do not ask about the question.",
      "Произношение — это ответ. О вопросе лучше не спрашивай.",
      "发音就是答案。请别问问题是什么。"
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
      "Słownictwo to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "Vocabulary is my topic today. Your opinions are an optional extra.",
      "Словарный запас — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "词汇是我今天的话题。你的意见是可选项。"
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
      "Tłumaczenie to nie zamiennik porządnych przeprosin.",
      "A translation is not a substitute for a decent apology.",
      "Перевод — не замена нормальному извинению.",
      "翻译代替不了一次像样的道歉。"
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
      "Akcent to ciekawy wybór. Staram się być dyplomatyczna.",
      "An accent is an interesting choice. I am being diplomatic.",
      "Акцент — интересный выбор. Я стараюсь быть дипломатичной.",
      "口音是个有趣的选择。我已经说得很委婉了。"
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
      "Dialog to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A dialogue is the title of my next masterpiece. Expectations should remain low.",
      "Диалог — название моего следующего шедевра. Лучше не завышать ожидания.",
      "对话是我下一部杰作的标题。期待值最好低一点。"
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
      "Definicja to nie główny problem. Problemem są twoje priorytety.",
      "A definition is not the main issue. Your priorities are.",
      "Определение — не главная проблема. Проблема в твоих приоритетах.",
      "定义不是主要问题。你的轻重缓急才是。"
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
      "Przykład to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "An example is the theme of this conversation. Somehow, we are still talking about you.",
      "Пример — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "例子是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Reguła to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A rule is not a good reason to call me at dawn.",
      "Правило — не повод звонить мне на рассвете.",
      "规则不是天一亮就给我打电话的好理由。"
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
      "Wyjątek to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "An exception is just the beginning of this story. Yes, it gets stranger.",
      "Исключение — только начало этой истории. Да, дальше ещё страннее.",
      "例外只是这个故事的开始。没错，后面更奇怪。"
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
      "Biuro? To jest twój wielki plan?",
      "An office? That is your grand plan?",
      "Офис? Это и есть твой великий план?",
      "办公室？这就是你的宏伟计划？"
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
      "Praca to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A job is the subject of my presentation. Try to contain your excitement.",
      "Работа — тема моей презентации. Постарайся сдержать восторг.",
      "工作是我演示的主题。请克制一下你的激动。"
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
      "Kariera to nie cecha osobowości. Sprawdziłam.",
      "A career is not a personality trait. I checked.",
      "Карьера — не черта характера. Я проверила.",
      "职业生涯不是性格特点。我查过了。"
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
      "Pensja to odpowiedź. Proszę nie pytać o pytanie.",
      "A salary is the answer. Please do not ask about the question.",
      "Зарплата — это ответ. О вопросе лучше не спрашивай.",
      "工资就是答案。请别问问题是什么。"
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
      "Umowa to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A contract is my topic today. Your opinions are an optional extra.",
      "Договор — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "合同是我今天的话题。你的意见是可选项。"
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
      "Rozmowa kwalifikacyjna to nie zamiennik porządnych przeprosin.",
      "An interview is not a substitute for a decent apology.",
      "Собеседование — не замена нормальному извинению.",
      "面试代替不了一次像样的道歉。"
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
      "Projekt to ciekawy wybór. Staram się być dyplomatyczna.",
      "A project is an interesting choice. I am being diplomatic.",
      "Проект — интересный выбор. Я стараюсь быть дипломатичной.",
      "项目是个有趣的选择。我已经说得很委婉了。"
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
      "Zadanie to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A task is the title of my next masterpiece. Expectations should remain low.",
      "Задача — название моего следующего шедевра. Лучше не завышать ожидания.",
      "任务是我下一部杰作的标题。期待值最好低一点。"
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
      "Raport to nie główny problem. Problemem są twoje priorytety.",
      "A report is not the main issue. Your priorities are.",
      "Отчёт — не главная проблема. Проблема в твоих приоритетах.",
      "报告不是主要问题。你的轻重缓急才是。"
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
      "Prezentacja to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A presentation is the theme of this conversation. Somehow, we are still talking about you.",
      "Презентация — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "演示是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Dokument to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A document is not a good reason to call me at dawn.",
      "Документ — не повод звонить мне на рассвете.",
      "文件不是天一亮就给我打电话的好理由。"
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
      "Folder to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A folder is just the beginning of this story. Yes, it gets stranger.",
      "Папка — только начало этой истории. Да, дальше ещё страннее.",
      "文件夹只是这个故事的开始。没错，后面更奇怪。"
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
      "Drukarka? To jest twój wielki plan?",
      "A printer? That is your grand plan?",
      "Принтер? Это и есть твой великий план?",
      "打印机？这就是你的宏伟计划？"
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
      "Zszywacz to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A stapler is the subject of my presentation. Try to contain your excitement.",
      "Степлер — тема моей презентации. Постарайся сдержать восторг.",
      "订书机是我演示的主题。请克制一下你的激动。"
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
      "Spinacz to nie cecha osobowości. Sprawdziłam.",
      "A paper clip is not a personality trait. I checked.",
      "Скрепка — не черта характера. Я проверила.",
      "回形针不是性格特点。我查过了。"
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
      "Kalkulator to odpowiedź. Proszę nie pytać o pytanie.",
      "A calculator is the answer. Please do not ask about the question.",
      "Калькулятор — это ответ. О вопросе лучше не спрашивай.",
      "计算器就是答案。请别问问题是什么。"
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
      "Kalendarz to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A calendar is my topic today. Your opinions are an optional extra.",
      "Календарь — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "日历是我今天的话题。你的意见是可选项。"
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
      "Harmonogram to nie zamiennik porządnych przeprosin.",
      "A schedule is not a substitute for a decent apology.",
      "Расписание — не замена нормальному извинению.",
      "日程表代替不了一次像样的道歉。"
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
      "Przerwa to ciekawy wybór. Staram się być dyplomatyczna.",
      "A break is an interesting choice. I am being diplomatic.",
      "Перерыв — интересный выбор. Я стараюсь быть дипломатичной.",
      "休息时间是个有趣的选择。我已经说得很委婉了。"
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
      "Awans to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A promotion is the title of my next masterpiece. Expectations should remain low.",
      "Повышение — название моего следующего шедевра. Лучше не завышать ожидания.",
      "晋升是我下一部杰作的标题。期待值最好低一点。"
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
      "Budżet to nie główny problem. Problemem są twoje priorytety.",
      "A budget is not the main issue. Your priorities are.",
      "Бюджет — не главная проблема. Проблема в твоих приоритетах.",
      "预算不是主要问题。你的轻重缓急才是。"
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
      "Faktura to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "An invoice is the theme of this conversation. Somehow, we are still talking about you.",
      "Счёт на оплату — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "发票是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Płatność to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A payment is not a good reason to call me at dawn.",
      "Платёж — не повод звонить мне на рассвете.",
      "付款不是天一亮就给我打电话的好理由。"
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
      "Dług to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A debt is just the beginning of this story. Yes, it gets stranger.",
      "Долг — только начало этой истории. Да, дальше ещё страннее.",
      "债务只是这个故事的开始。没错，后面更奇怪。"
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
      "Pożyczka? To jest twój wielki plan?",
      "A loan? That is your grand plan?",
      "Заём? Это и есть твой великий план?",
      "贷款？这就是你的宏伟计划？"
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
      "Zysk to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A profit is the subject of my presentation. Try to contain your excitement.",
      "Прибыль — тема моей презентации. Постарайся сдержать восторг.",
      "利润是我演示的主题。请克制一下你的激动。"
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
      "Strata to nie cecha osobowości. Sprawdziłam.",
      "A loss is not a personality trait. I checked.",
      "Убыток — не черта характера. Я проверила.",
      "亏损不是性格特点。我查过了。"
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
      "Cena to odpowiedź. Proszę nie pytać o pytanie.",
      "A price is the answer. Please do not ask about the question.",
      "Цена — это ответ. О вопросе лучше не спрашивай.",
      "价格就是答案。请别问问题是什么。"
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
      "Moneta to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A coin is my topic today. Your opinions are an optional extra.",
      "Монета — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "硬币是我今天的话题。你的意见是可选项。"
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
      "Banknot to nie zamiennik porządnych przeprosin.",
      "A banknote is not a substitute for a decent apology.",
      "Банкнота — не замена нормальному извинению.",
      "纸币代替不了一次像样的道歉。"
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
      "Sklep to ciekawy wybór. Staram się być dyplomatyczna.",
      "A shop is an interesting choice. I am being diplomatic.",
      "Магазин — интересный выбор. Я стараюсь быть дипломатичной.",
      "商店是个有趣的选择。我已经说得很委婉了。"
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
      "Targ to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A market is the title of my next masterpiece. Expectations should remain low.",
      "Рынок — название моего следующего шедевра. Лучше не завышать ожидания.",
      "市场是我下一部杰作的标题。期待值最好低一点。"
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
      "Supermarket to nie główny problem. Problemem są twoje priorytety.",
      "A supermarket is not the main issue. Your priorities are.",
      "Супермаркет — не главная проблема. Проблема в твоих приоритетах.",
      "超市不是主要问题。你的轻重缓急才是。"
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
      "Piekarnia to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A bakery is the theme of this conversation. Somehow, we are still talking about you.",
      "Пекарня — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "面包店是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Apteka to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A pharmacy is not a good reason to call me at dawn.",
      "Аптека — не повод звонить мне на рассвете.",
      "药店不是天一亮就给我打电话的好理由。"
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
      "Szpital to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A hospital is just the beginning of this story. Yes, it gets stranger.",
      "Больница — только начало этой истории. Да, дальше ещё страннее.",
      "医院只是这个故事的开始。没错，后面更奇怪。"
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
      "Bank? To jest twój wielki plan?",
      "A bank? That is your grand plan?",
      "Банк? Это и есть твой великий план?",
      "银行？这就是你的宏伟计划？"
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
      "Poczta to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A post office is the subject of my presentation. Try to contain your excitement.",
      "Почта — тема моей презентации. Постарайся сдержать восторг.",
      "邮局是我演示的主题。请克制一下你的激动。"
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
      "Restauracja to nie cecha osobowości. Sprawdziłam.",
      "A restaurant is not a personality trait. I checked.",
      "Ресторан — не черта характера. Я проверила.",
      "餐厅不是性格特点。我查过了。"
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
      "Kawiarnia to odpowiedź. Proszę nie pytać o pytanie.",
      "A café is the answer. Please do not ask about the question.",
      "Кафе — это ответ. О вопросе лучше не спрашивай.",
      "咖啡馆就是答案。请别问问题是什么。"
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
      "Kino to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A cinema is my topic today. Your opinions are an optional extra.",
      "Кинотеатр — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "电影院是我今天的话题。你的意见是可选项。"
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
      "Teatr to nie zamiennik porządnych przeprosin.",
      "A theatre is not a substitute for a decent apology.",
      "Театр — не замена нормальному извинению.",
      "剧院代替不了一次像样的道歉。"
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
      "Stadion to ciekawy wybór. Staram się być dyplomatyczna.",
      "A stadium is an interesting choice. I am being diplomatic.",
      "Стадион — интересный выбор. Я стараюсь быть дипломатичной.",
      "体育场是个有趣的选择。我已经说得很委婉了。"
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
      "Basen to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A swimming pool is the title of my next masterpiece. Expectations should remain low.",
      "Бассейн — название моего следующего шедевра. Лучше не завышать ожидания.",
      "游泳池是我下一部杰作的标题。期待值最好低一点。"
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
      "Siłownia to nie główny problem. Problemem są twoje priorytety.",
      "A gym is not the main issue. Your priorities are.",
      "Тренажёрный зал — не главная проблема. Проблема в твоих приоритетах.",
      "健身房不是主要问题。你的轻重缓急才是。"
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
      "Plac zabaw to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A playground is the theme of this conversation. Somehow, we are still talking about you.",
      "Детская площадка — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "儿童游乐场是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Plac to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A square is not a good reason to call me at dawn.",
      "Площадь — не повод звонить мне на рассвете.",
      "广场不是天一亮就给我打电话的好理由。"
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
      "Fontanna to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A fountain is just the beginning of this story. Yes, it gets stranger.",
      "Фонтан — только начало этой истории. Да, дальше ещё страннее.",
      "喷泉只是这个故事的开始。没错，后面更奇怪。"
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
      "Pomnik? To jest twój wielki plan?",
      "A monument? That is your grand plan?",
      "Памятник? Это и есть твой великий план?",
      "纪念碑？这就是你的宏伟计划？"
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
      "Zamek to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A castle is the subject of my presentation. Try to contain your excitement.",
      "Замок — тема моей презентации. Постарайся сдержать восторг.",
      "城堡是我演示的主题。请克制一下你的激动。"
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
      "Wieża to nie cecha osobowości. Sprawdziłam.",
      "A tower is not a personality trait. I checked.",
      "Башня — не черта характера. Я проверила.",
      "塔不是性格特点。我查过了。"
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
      "Kościół to odpowiedź. Proszę nie pytać o pytanie.",
      "A church is the answer. Please do not ask about the question.",
      "Церковь — это ответ. О вопросе лучше не спрашивай.",
      "教堂就是答案。请别问问题是什么。"
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
      "Świątynia to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A temple is my topic today. Your opinions are an optional extra.",
      "Храм — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "寺庙是我今天的话题。你的意见是可选项。"
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
      "Tunel to nie zamiennik porządnych przeprosin.",
      "A tunnel is not a substitute for a decent apology.",
      "Туннель — не замена нормальному извинению.",
      "隧道代替不了一次像样的道歉。"
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
      "Chodnik to ciekawy wybór. Staram się być dyplomatyczna.",
      "A pavement is an interesting choice. I am being diplomatic.",
      "Тротуар — интересный выбор. Я стараюсь быть дипломатичной.",
      "人行道是个有趣的选择。我已经说得很委婉了。"
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
      "Przejście dla pieszych to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A crossing is the title of my next masterpiece. Expectations should remain low.",
      "Пешеходный переход — название моего следующего шедевра. Лучше не завышать ожидания.",
      "人行横道是我下一部杰作的标题。期待值最好低一点。"
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
      "Korek uliczny to nie główny problem. Problemem są twoje priorytety.",
      "A traffic jam is not the main issue. Your priorities are.",
      "Пробка — не главная проблема. Проблема в твоих приоритетах.",
      "堵车不是主要问题。你的轻重缓急才是。"
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
      "Taksówka to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A taxi is the theme of this conversation. Somehow, we are still talking about you.",
      "Такси — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "出租车是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Prom to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A ferry is not a good reason to call me at dawn.",
      "Паром — не повод звонить мне на рассвете.",
      "渡轮不是天一亮就给我打电话的好理由。"
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
      "Port to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A port is just the beginning of this story. Yes, it gets stranger.",
      "Порт — только начало этой истории. Да, дальше ещё страннее.",
      "港口只是这个故事的开始。没错，后面更奇怪。"
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
      "Krowa? To jest twój wielki plan?",
      "A cow? That is your grand plan?",
      "Корова? Это и есть твой великий план?",
      "奶牛？这就是你的宏伟计划？"
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
      "Świnia to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A pig is the subject of my presentation. Try to contain your excitement.",
      "Свинья — тема моей презентации. Постарайся сдержать восторг.",
      "猪是我演示的主题。请克制一下你的激动。"
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
      "Owca to nie cecha osobowości. Sprawdziłam.",
      "A sheep is not a personality trait. I checked.",
      "Овца — не черта характера. Я проверила.",
      "绵羊不是性格特点。我查过了。"
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
      "Koza to odpowiedź. Proszę nie pytać o pytanie.",
      "A goat is the answer. Please do not ask about the question.",
      "Коза — это ответ. О вопросе лучше не спрашивай.",
      "山羊就是答案。请别问问题是什么。"
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
      "Kura to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A chicken is my topic today. Your opinions are an optional extra.",
      "Курица — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "鸡是我今天的话题。你的意见是可选项。"
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
      "Kaczka to nie zamiennik porządnych przeprosin.",
      "A duck is not a substitute for a decent apology.",
      "Утка — не замена нормальному извинению.",
      "鸭子代替不了一次像样的道歉。"
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
      "Gęś to ciekawy wybór. Staram się być dyplomatyczna.",
      "A goose is an interesting choice. I am being diplomatic.",
      "Гусь — интересный выбор. Я стараюсь быть дипломатичной.",
      "鹅是个有趣的选择。我已经说得很委婉了。"
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
      "Indyk to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A turkey is the title of my next masterpiece. Expectations should remain low.",
      "Индюк — название моего следующего шедевра. Лучше не завышать ожидания.",
      "火鸡是我下一部杰作的标题。期待值最好低一点。"
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
      "Jeleń to nie główny problem. Problemem są twoje priorytety.",
      "A deer is not the main issue. Your priorities are.",
      "Олень — не главная проблема. Проблема в твоих приоритетах.",
      "鹿不是主要问题。你的轻重缓急才是。"
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
      "Wiewiórka to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A squirrel is the theme of this conversation. Somehow, we are still talking about you.",
      "Белка — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "松鼠是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Jeż to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A hedgehog is not a good reason to call me at dawn.",
      "Ёж — не повод звонить мне на рассвете.",
      "刺猬不是天一亮就给我打电话的好理由。"
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
      "Nietoperz to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A bat is just the beginning of this story. Yes, it gets stranger.",
      "Летучая мышь — только начало этой истории. Да, дальше ещё страннее.",
      "蝙蝠只是这个故事的开始。没错，后面更奇怪。"
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
      "Żaba? To jest twój wielki plan?",
      "A frog? That is your grand plan?",
      "Лягушка? Это и есть твой великий план?",
      "青蛙？这就是你的宏伟计划？"
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
      "Wąż to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A snake is the subject of my presentation. Try to contain your excitement.",
      "Змея — тема моей презентации. Постарайся сдержать восторг.",
      "蛇是我演示的主题。请克制一下你的激动。"
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
      "Żółw to nie cecha osobowości. Sprawdziłam.",
      "A turtle is not a personality trait. I checked.",
      "Черепаха — не черта характера. Я проверила.",
      "龟不是性格特点。我查过了。"
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
      "Jaszczurka to odpowiedź. Proszę nie pytać o pytanie.",
      "A lizard is the answer. Please do not ask about the question.",
      "Ящерица — это ответ. О вопросе лучше не спрашивай.",
      "蜥蜴就是答案。请别问问题是什么。"
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
      "Krokodyl to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A crocodile is my topic today. Your opinions are an optional extra.",
      "Крокодил — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "鳄鱼是我今天的话题。你的意见是可选项。"
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
      "Słoń to nie zamiennik porządnych przeprosin.",
      "An elephant is not a substitute for a decent apology.",
      "Слон — не замена нормальному извинению.",
      "大象代替不了一次像样的道歉。"
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
      "Lew to ciekawy wybór. Staram się być dyplomatyczna.",
      "A lion is an interesting choice. I am being diplomatic.",
      "Лев — интересный выбор. Я стараюсь быть дипломатичной.",
      "狮子是个有趣的选择。我已经说得很委婉了。"
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
      "Tygrys to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A tiger is the title of my next masterpiece. Expectations should remain low.",
      "Тигр — название моего следующего шедевра. Лучше не завышать ожидания.",
      "老虎是我下一部杰作的标题。期待值最好低一点。"
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
      "Żyrafa to nie główny problem. Problemem są twoje priorytety.",
      "A giraffe is not the main issue. Your priorities are.",
      "Жираф — не главная проблема. Проблема в твоих приоритетах.",
      "长颈鹿不是主要问题。你的轻重缓急才是。"
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
      "Zebra to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A zebra is the theme of this conversation. Somehow, we are still talking about you.",
      "Зебра — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "斑马是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Małpa to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A monkey is not a good reason to call me at dawn.",
      "Обезьяна — не повод звонить мне на рассвете.",
      "猴子不是天一亮就给我打电话的好理由。"
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
      "Panda to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A panda is just the beginning of this story. Yes, it gets stranger.",
      "Панда — только начало этой истории. Да, дальше ещё страннее.",
      "熊猫只是这个故事的开始。没错，后面更奇怪。"
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
      "Pingwin? To jest twój wielki plan?",
      "A penguin? That is your grand plan?",
      "Пингвин? Это и есть твой великий план?",
      "企鹅？这就是你的宏伟计划？"
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
      "Delfin to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A dolphin is the subject of my presentation. Try to contain your excitement.",
      "Дельфин — тема моей презентации. Постарайся сдержать восторг.",
      "海豚是我演示的主题。请克制一下你的激动。"
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
      "Wieloryb to nie cecha osobowości. Sprawdziłam.",
      "A whale is not a personality trait. I checked.",
      "Кит — не черта характера. Я проверила.",
      "鲸不是性格特点。我查过了。"
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
      "Rekin to odpowiedź. Proszę nie pytać o pytanie.",
      "A shark is the answer. Please do not ask about the question.",
      "Акула — это ответ. О вопросе лучше не спрашивай.",
      "鲨鱼就是答案。请别问问题是什么。"
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
      "Ośmiornica to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "An octopus is my topic today. Your opinions are an optional extra.",
      "Осьминог — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "章鱼是我今天的话题。你的意见是可选项。"
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
      "Krab to nie zamiennik porządnych przeprosin.",
      "A crab is not a substitute for a decent apology.",
      "Краб — не замена нормальному извинению.",
      "螃蟹代替不了一次像样的道歉。"
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
      "Wyspa to ciekawy wybór. Staram się być dyplomatyczna.",
      "An island is an interesting choice. I am being diplomatic.",
      "Остров — интересный выбор. Я стараюсь быть дипломатичной.",
      "岛是个有趣的选择。我已经说得很委婉了。"
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
      "Pustynia to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A desert is the title of my next masterpiece. Expectations should remain low.",
      "Пустыня — название моего следующего шедевра. Лучше не завышать ожидания.",
      "沙漠是我下一部杰作的标题。期待值最好低一点。"
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
      "Dolina to nie główny problem. Problemem są twoje priorytety.",
      "A valley is not the main issue. Your priorities are.",
      "Долина — не главная проблема. Проблема в твоих приоритетах.",
      "山谷不是主要问题。你的轻重缓急才是。"
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
      "Wzgórze to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A hill is the theme of this conversation. Somehow, we are still talking about you.",
      "Холм — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "小山是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Wodospad to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A waterfall is not a good reason to call me at dawn.",
      "Водопад — не повод звонить мне на рассвете.",
      "瀑布不是天一亮就给我打电话的好理由。"
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
      "Jaskinia to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A cave is just the beginning of this story. Yes, it gets stranger.",
      "Пещера — только начало этой истории. Да, дальше ещё страннее.",
      "洞穴只是这个故事的开始。没错，后面更奇怪。"
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
      "Wulkan? To jest twój wielki plan?",
      "A volcano? That is your grand plan?",
      "Вулкан? Это и есть твой великий план?",
      "火山？这就是你的宏伟计划？"
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
      "Skała to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A rock is the subject of my presentation. Try to contain your excitement.",
      "Скала — тема моей презентации. Постарайся сдержать восторг.",
      "岩石是我演示的主题。请克制一下你的激动。"
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
      "Kamień to nie cecha osobowości. Sprawdziłam.",
      "A stone is not a personality trait. I checked.",
      "Камень — не черта характера. Я проверила.",
      "石头不是性格特点。我查过了。"
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
      "Piasek to odpowiedź. Proszę nie pytać o pytanie.",
      "Sand is the answer. Please do not ask about the question.",
      "Песок — это ответ. О вопросе лучше не спрашивай.",
      "沙子就是答案。请别问问题是什么。"
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
      "Gleba to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "Soil is my topic today. Your opinions are an optional extra.",
      "Почва — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "土壤是我今天的话题。你的意见是可选项。"
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
      "Trawa to nie zamiennik porządnych przeprosin.",
      "Grass is not a substitute for a decent apology.",
      "Трава — не замена нормальному извинению.",
      "草代替不了一次像样的道歉。"
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
      "Nasiono to ciekawy wybór. Staram się być dyplomatyczna.",
      "A seed is an interesting choice. I am being diplomatic.",
      "Семя — интересный выбор. Я стараюсь быть дипломатичной.",
      "种子是个有趣的选择。我已经说得很委婉了。"
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
      "Korzeń to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A root is the title of my next masterpiece. Expectations should remain low.",
      "Корень — название моего следующего шедевра. Лучше не завышать ожидания.",
      "根是我下一部杰作的标题。期待值最好低一点。"
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
      "Gałąź to nie główny problem. Problemem są twoje priorytety.",
      "A branch is not the main issue. Your priorities are.",
      "Ветка — не главная проблема. Проблема в твоих приоритетах.",
      "树枝不是主要问题。你的轻重缓急才是。"
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
      "Grzyb to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A mushroom is the theme of this conversation. Somehow, we are still talking about you.",
      "Гриб — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "蘑菇是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Róża to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A rose is not a good reason to call me at dawn.",
      "Роза — не повод звонить мне на рассвете.",
      "玫瑰不是天一亮就给我打电话的好理由。"
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
      "Tulipan to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A tulip is just the beginning of this story. Yes, it gets stranger.",
      "Тюльпан — только начало этой истории. Да, дальше ещё страннее.",
      "郁金香只是这个故事的开始。没错，后面更奇怪。"
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
      "Słonecznik? To jest twój wielki plan?",
      "A sunflower? That is your grand plan?",
      "Подсолнух? Это и есть твой великий план?",
      "向日葵？这就是你的宏伟计划？"
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
      "Bambus to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "Bamboo is the subject of my presentation. Try to contain your excitement.",
      "Бамбук — тема моей презентации. Постарайся сдержать восторг.",
      "竹子是我演示的主题。请克制一下你的激动。"
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
      "Mgła to nie cecha osobowości. Sprawdziłam.",
      "Fog is not a personality trait. I checked.",
      "Туман — не черта характера. Я проверила.",
      "雾不是性格特点。我查过了。"
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
      "Szron to odpowiedź. Proszę nie pytać o pytanie.",
      "Frost is the answer. Please do not ask about the question.",
      "Иней — это ответ. О вопросе лучше не спрашивай.",
      "霜就是答案。请别问问题是什么。"
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
      "Grzmot to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "Thunder is my topic today. Your opinions are an optional extra.",
      "Гром — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "雷声是我今天的话题。你的意见是可选项。"
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
      "Błyskawica to nie zamiennik porządnych przeprosin.",
      "Lightning is not a substitute for a decent apology.",
      "Молния — не замена нормальному извинению.",
      "闪电代替不了一次像样的道歉。"
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
      "Tęcza to ciekawy wybór. Staram się być dyplomatyczna.",
      "A rainbow is an interesting choice. I am being diplomatic.",
      "Радуга — интересный выбор. Я стараюсь быть дипломатичной.",
      "彩虹是个有趣的选择。我已经说得很委婉了。"
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
      "Burza to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A storm is the title of my next masterpiece. Expectations should remain low.",
      "Гроза — название моего следующего шедевра. Лучше не завышать ожидания.",
      "雷暴是我下一部杰作的标题。期待值最好低一点。"
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
      "Wschód słońca to nie główny problem. Problemem są twoje priorytety.",
      "A sunrise is not the main issue. Your priorities are.",
      "Восход солнца — не главная проблема. Проблема в твоих приоритетах.",
      "日出不是主要问题。你的轻重缓急才是。"
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
      "Zachód słońca to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A sunset is the theme of this conversation. Somehow, we are still talking about you.",
      "Закат — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "日落是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Cień to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A shadow is not a good reason to call me at dawn.",
      "Тень — не повод звонить мне на рассвете.",
      "影子不是天一亮就给我打电话的好理由。"
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
      "Fala to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A wave is just the beginning of this story. Yes, it gets stranger.",
      "Волна — только начало этой истории. Да, дальше ещё страннее.",
      "波浪只是这个故事的开始。没错，后面更奇怪。"
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
      "Brzoskwinia? To jest twój wielki plan?",
      "A peach? That is your grand plan?",
      "Персик? Это и есть твой великий план?",
      "桃子？这就是你的宏伟计划？"
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
      "Gruszka to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A pear is the subject of my presentation. Try to contain your excitement.",
      "Груша — тема моей презентации. Постарайся сдержать восторг.",
      "梨是我演示的主题。请克制一下你的激动。"
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
      "Śliwka to nie cecha osobowości. Sprawdziłam.",
      "A plum is not a personality trait. I checked.",
      "Слива — не черта характера. Я проверила.",
      "李子不是性格特点。我查过了。"
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
      "Czereśnia to odpowiedź. Proszę nie pytać o pytanie.",
      "A cherry is the answer. Please do not ask about the question.",
      "Черешня — это ответ. О вопросе лучше не спрашивай.",
      "樱桃就是答案。请别问问题是什么。"
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
      "Malina to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A raspberry is my topic today. Your opinions are an optional extra.",
      "Малина — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "树莓是我今天的话题。你的意见是可选项。"
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
      "Borówka to nie zamiennik porządnych przeprosin.",
      "A blueberry is not a substitute for a decent apology.",
      "Голубика — не замена нормальному извинению.",
      "蓝莓代替不了一次像样的道歉。"
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
      "Arbuz to ciekawy wybór. Staram się być dyplomatyczna.",
      "A watermelon is an interesting choice. I am being diplomatic.",
      "Арбуз — интересный выбор. Я стараюсь быть дипломатичной.",
      "西瓜是个有趣的选择。我已经说得很委婉了。"
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
      "Melon to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A melon is the title of my next masterpiece. Expectations should remain low.",
      "Дыня — название моего следующего шедевра. Лучше не завышать ожидания.",
      "甜瓜是我下一部杰作的标题。期待值最好低一点。"
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
      "Ananas to nie główny problem. Problemem są twoje priorytety.",
      "A pineapple is not the main issue. Your priorities are.",
      "Ананас — не главная проблема. Проблема в твоих приоритетах.",
      "菠萝不是主要问题。你的轻重缓急才是。"
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
      "Mango to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A mango is the theme of this conversation. Somehow, we are still talking about you.",
      "Манго — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "芒果是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Kokos to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A coconut is not a good reason to call me at dawn.",
      "Кокос — не повод звонить мне на рассвете.",
      "椰子不是天一亮就给我打电话的好理由。"
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
      "Awokado to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "An avocado is just the beginning of this story. Yes, it gets stranger.",
      "Авокадо — только начало этой истории. Да, дальше ещё страннее.",
      "牛油果只是这个故事的开始。没错，后面更奇怪。"
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
      "Ogórek? To jest twój wielki plan?",
      "A cucumber? That is your grand plan?",
      "Огурец? Это и есть твой великий план?",
      "黄瓜？这就是你的宏伟计划？"
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
      "Dynia to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A pumpkin is the subject of my presentation. Try to contain your excitement.",
      "Тыква — тема моей презентации. Постарайся сдержать восторг.",
      "南瓜是我演示的主题。请克制一下你的激动。"
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
      "Kapusta to nie cecha osobowości. Sprawdziłam.",
      "Cabbage is not a personality trait. I checked.",
      "Капуста — не черта характера. Я проверила.",
      "卷心菜不是性格特点。我查过了。"
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
      "Sałata to odpowiedź. Proszę nie pytać o pytanie.",
      "Lettuce is the answer. Please do not ask about the question.",
      "Салат-латук — это ответ. О вопросе лучше не спрашивай.",
      "生菜就是答案。请别问问题是什么。"
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
      "Szpinak to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "Spinach is my topic today. Your opinions are an optional extra.",
      "Шпинат — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "菠菜是我今天的话题。你的意见是可选项。"
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
      "Brokuł to nie zamiennik porządnych przeprosin.",
      "Broccoli is not a substitute for a decent apology.",
      "Брокколи — не замена нормальному извинению.",
      "西兰花代替不了一次像样的道歉。"
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
      "Kalafior to ciekawy wybór. Staram się być dyplomatyczna.",
      "Cauliflower is an interesting choice. I am being diplomatic.",
      "Цветная капуста — интересный выбор. Я стараюсь быть дипломатичной.",
      "花椰菜是个有趣的选择。我已经说得很委婉了。"
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
      "Czosnek to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "Garlic is the title of my next masterpiece. Expectations should remain low.",
      "Чеснок — название моего следующего шедевра. Лучше не завышать ожидания.",
      "大蒜是我下一部杰作的标题。期待值最好低一点。"
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
      "Imbir to nie główny problem. Problemem są twoje priorytety.",
      "Ginger is not the main issue. Your priorities are.",
      "Имбирь — не главная проблема. Проблема в твоих приоритетах.",
      "姜不是主要问题。你的轻重缓急才是。"
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
      "Cynamon to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "Cinnamon is the theme of this conversation. Somehow, we are still talking about you.",
      "Корица — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "肉桂是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Pieprz to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "Pepper is not a good reason to call me at dawn.",
      "Перец — не повод звонить мне на рассвете.",
      "胡椒不是天一亮就给我打电话的好理由。"
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
      "Ocet to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "Vinegar is just the beginning of this story. Yes, it gets stranger.",
      "Уксус — только начало этой истории. Да, дальше ещё страннее.",
      "醋只是这个故事的开始。没错，后面更奇怪。"
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
      "Oliwa? To jest twój wielki plan?",
      "Olive oil? That is your grand plan?",
      "Оливковое масло? Это и есть твой великий план?",
      "橄榄油？这就是你的宏伟计划？"
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
      "Mąka to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "Flour is the subject of my presentation. Try to contain your excitement.",
      "Мука — тема моей презентации. Постарайся сдержать восторг.",
      "面粉是我演示的主题。请克制一下你的激动。"
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
      "Śmietanka to nie cecha osobowości. Sprawdziłam.",
      "Cream is not a personality trait. I checked.",
      "Сливки — не черта характера. Я проверила.",
      "奶油不是性格特点。我查过了。"
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
      "Dżem to odpowiedź. Proszę nie pytać o pytanie.",
      "Jam is the answer. Please do not ask about the question.",
      "Джем — это ответ. О вопросе лучше не спрашивай.",
      "果酱就是答案。请别问问题是什么。"
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
      "Musztarda to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "Mustard is my topic today. Your opinions are an optional extra.",
      "Горчица — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "芥末酱是我今天的话题。你的意见是可选项。"
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
      "Naleśnik to nie zamiennik porządnych przeprosin.",
      "A pancake is not a substitute for a decent apology.",
      "Блин — не замена нормальному извинению.",
      "薄饼代替不了一次像样的道歉。"
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
      "Zaproszenie to ciekawy wybór. Staram się być dyplomatyczna.",
      "An invitation is an interesting choice. I am being diplomatic.",
      "Приглашение — интересный выбор. Я стараюсь быть дипломатичной.",
      "邀请是个有趣的选择。我已经说得很委婉了。"
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
      "Świętowanie to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A celebration is the title of my next masterpiece. Expectations should remain low.",
      "Празднование — название моего следующего шедевра. Лучше не завышать ожидания.",
      "庆祝是我下一部杰作的标题。期待值最好低一点。"
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
      "Urodziny to nie główny problem. Problemem są twoje priorytety.",
      "A birthday is not the main issue. Your priorities are.",
      "День рождения — не главная проблема. Проблема в твоих приоритетах.",
      "生日不是主要问题。你的轻重缓急才是。"
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
      "Ślub to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A wedding is the theme of this conversation. Somehow, we are still talking about you.",
      "Свадьба — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "婚礼是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Prezent to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A gift is not a good reason to call me at dawn.",
      "Подарок — не повод звонить мне на рассвете.",
      "礼物不是天一亮就给我打电话的好理由。"
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
      "Komplement to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A compliment is just the beginning of this story. Yes, it gets stranger.",
      "Комплимент — только начало этой истории. Да, дальше ещё страннее.",
      "赞美只是这个故事的开始。没错，后面更奇怪。"
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
      "Przeprosiny? To jest twój wielki plan?",
      "An apology? That is your grand plan?",
      "Извинение? Это и есть твой великий план?",
      "道歉？这就是你的宏伟计划？"
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
      "Rozmowa to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A conversation is the subject of my presentation. Try to contain your excitement.",
      "Разговор — тема моей презентации. Постарайся сдержать восторг.",
      "交谈是我演示的主题。请克制一下你的激动。"
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
      "Kłótnia to nie cecha osobowości. Sprawdziłam.",
      "An argument is not a personality trait. I checked.",
      "Ссора — не черта характера. Я проверила.",
      "争吵不是性格特点。我查过了。"
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
      "Żart to odpowiedź. Proszę nie pytać o pytanie.",
      "A joke is the answer. Please do not ask about the question.",
      "Шутка — это ответ. О вопросе лучше не спрашивай.",
      "笑话就是答案。请别问问题是什么。"
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
      "Sarkazm to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "Sarcasm is my topic today. Your opinions are an optional extra.",
      "Сарказм — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "讽刺是我今天的话题。你的意见是可选项。"
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
      "Ironia to nie zamiennik porządnych przeprosin.",
      "Irony is not a substitute for a decent apology.",
      "Ирония — не замена нормальному извинению.",
      "反讽代替不了一次像样的道歉。"
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
      "Humor to ciekawy wybór. Staram się być dyplomatyczna.",
      "Humour is an interesting choice. I am being diplomatic.",
      "Юмор — интересный выбор. Я стараюсь быть дипломатичной.",
      "幽默是个有趣的选择。我已经说得很委婉了。"
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
      "Plotka to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A rumour is the title of my next masterpiece. Expectations should remain low.",
      "Слух — название моего следующего шедевра. Лучше не завышать ожидания.",
      "谣言是我下一部杰作的标题。期待值最好低一点。"
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
      "Wspomnienie to nie główny problem. Problemem są twoje priorytety.",
      "A memory is not the main issue. Your priorities are.",
      "Воспоминание — не главная проблема. Проблема в твоих приоритетах.",
      "回忆不是主要问题。你的轻重缓急才是。"
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
      "Wybór to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A choice is the theme of this conversation. Somehow, we are still talking about you.",
      "Выбор — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "选择是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Szansa to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "A chance is not a good reason to call me at dawn.",
      "Шанс — не повод звонить мне на рассвете.",
      "机会不是天一亮就给我打电话的好理由。"
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
      "Ryzyko to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A risk is just the beginning of this story. Yes, it gets stranger.",
      "Риск — только начало этой истории. Да, дальше ещё страннее.",
      "风险只是这个故事的开始。没错，后面更奇怪。"
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
      "Wyzwanie? To jest twój wielki plan?",
      "A challenge? That is your grand plan?",
      "Вызов? Это и есть твой великий план?",
      "挑战？这就是你的宏伟计划？"
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
      "Rozwiązanie to temat mojej prezentacji. Spróbuj opanować ekscytację.",
      "A solution is the subject of my presentation. Try to contain your excitement.",
      "Решение задачи — тема моей презентации. Постарайся сдержать восторг.",
      "解决办法是我演示的主题。请克制一下你的激动。"
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
      "Powód to nie cecha osobowości. Sprawdziłam.",
      "A reason is not a personality trait. I checked.",
      "Причина — не черта характера. Я проверила.",
      "原因不是性格特点。我查过了。"
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
      "Wynik to odpowiedź. Proszę nie pytać o pytanie.",
      "A result is the answer. Please do not ask about the question.",
      "Результат — это ответ. О вопросе лучше не спрашивай.",
      "结果就是答案。请别问问题是什么。"
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
      "Cel to mój dzisiejszy temat. Twoje opinie to opcjonalny dodatek.",
      "A purpose is my topic today. Your opinions are an optional extra.",
      "Цель — моя тема на сегодня. Твои мнения — необязательное дополнение.",
      "目的是我今天的话题。你的意见是可选项。"
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
      "Priorytet to nie zamiennik porządnych przeprosin.",
      "A priority is not a substitute for a decent apology.",
      "Приоритет — не замена нормальному извинению.",
      "优先事项代替不了一次像样的道歉。"
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
      "Osiągnięcie to ciekawy wybór. Staram się być dyplomatyczna.",
      "An achievement is an interesting choice. I am being diplomatic.",
      "Достижение — интересный выбор. Я стараюсь быть дипломатичной.",
      "成就是个有趣的选择。我已经说得很委婉了。"
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
      "Granica to tytuł mojego kolejnego arcydzieła. Lepiej nie mieć wielkich oczekiwań.",
      "A boundary is the title of my next masterpiece. Expectations should remain low.",
      "Граница — название моего следующего шедевра. Лучше не завышать ожидания.",
      "界限是我下一部杰作的标题。期待值最好低一点。"
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
      "Kompromis to nie główny problem. Problemem są twoje priorytety.",
      "A compromise is not the main issue. Your priorities are.",
      "Компромисс — не главная проблема. Проблема в твоих приоритетах.",
      "妥协不是主要问题。你的轻重缓急才是。"
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
      "Konsekwencja to temat tej rozmowy. Jakimś cudem nadal rozmawiamy o tobie.",
      "A consequence is the theme of this conversation. Somehow, we are still talking about you.",
      "Последствие — тема этого разговора. Но почему-то мы всё ещё говорим о тебе.",
      "后果是这次谈话的主题。不知怎么，我们还是在聊你。"
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
      "Założenie to nie dobry powód, żeby dzwonić do mnie o świcie.",
      "An assumption is not a good reason to call me at dawn.",
      "Предположение — не повод звонить мне на рассвете.",
      "假设不是天一亮就给我打电话的好理由。"
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
      "Zbieg okoliczności to dopiero początek tej historii. Tak, dalej robi się dziwniej.",
      "A coincidence is just the beginning of this story. Yes, it gets stranger.",
      "Совпадение — только начало этой истории. Да, дальше ещё страннее.",
      "巧合只是这个故事的开始。没错，后面更奇怪。"
    ]
  }
];
