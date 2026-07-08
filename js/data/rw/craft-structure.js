/* SAT Quest — ORIGINAL SAT-style Reading & Writing bank: Craft and Structure.
   Every passage and question was written from scratch for this app. None are
   copied, paraphrased, or adapted from College Board, Bluebook, Khan Academy,
   or any published test or prep book. They imitate only the STRUCTURE, tone,
   and difficulty of the digital SAT.

   Item shape: { id, domain, skill, tier, text, choices:[{letter,text}],
   answer, explanation, whyWrong:{letter:reason} }. The loader (rw/index.js)
   adds difficulty labels, time targets, and strategy tips. */

const RW_BANK_CS = [
  {
    "id": "words-context-t1-01",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "The following text is from a profile of a chef.\n\nDespite the restaurant's fame, the chef remained ______; she rarely gave interviews and disliked having her photograph taken.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "reserved"
      },
      {
        "letter": "B",
        "text": "reckless"
      },
      {
        "letter": "C",
        "text": "generous"
      },
      {
        "letter": "D",
        "text": "talkative"
      }
    ],
    "answer": "A",
    "explanation": "Avoiding interviews and photos describes someone reserved. A fits.",
    "whyWrong": {
      "B": "\"Reckless\" (careless of danger) has nothing to do with avoiding publicity.",
      "C": "\"Generous\" describes giving, not privacy.",
      "D": "\"Talkative\" is the opposite of someone who avoids interviews."
    }
  },
  {
    "id": "words-context-t1-02",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "The following text is from a report on rivers.\n\nAfter weeks of heavy rain, the once-calm stream became ______, tearing loose branches and carrying them downstream.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "shallow"
      },
      {
        "letter": "B",
        "text": "turbulent"
      },
      {
        "letter": "C",
        "text": "motionless"
      },
      {
        "letter": "D",
        "text": "transparent"
      }
    ],
    "answer": "B",
    "explanation": "Tearing loose branches and carrying them describes violent, churning water—turbulent. B fits.",
    "whyWrong": {
      "A": "\"Shallow\" would not tear loose and carry branches.",
      "C": "\"Motionless\" contradicts water that carries branches downstream.",
      "D": "\"Transparent\" describes clarity, not force."
    }
  },
  {
    "id": "words-context-t2-01",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "The following text is from a book about glaciers.\n\nThe glacier's retreat was not sudden but ______: over decades, it withdrew a few meters each year, almost imperceptibly.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "gradual"
      },
      {
        "letter": "B",
        "text": "abrupt"
      },
      {
        "letter": "C",
        "text": "accidental"
      },
      {
        "letter": "D",
        "text": "temporary"
      }
    ],
    "answer": "A",
    "explanation": "\"Not sudden,\" \"over decades,\" and \"a few meters each year\" all point to gradual. A fits.",
    "whyWrong": {
      "B": "\"Abrupt\" contradicts \"not sudden.\"",
      "C": "\"Accidental\" concerns cause, not pace.",
      "D": "\"Temporary\" concerns duration, not the slow rate described."
    }
  },
  {
    "id": "words-context-t2-02",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "The following text is from a literary essay.\n\nThe poet's later work is far more ______ than her early verse; where she once buried her meaning beneath dense imagery, she now states her ideas plainly.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "ornate"
      },
      {
        "letter": "B",
        "text": "transparent"
      },
      {
        "letter": "C",
        "text": "obscure"
      },
      {
        "letter": "D",
        "text": "lengthy"
      }
    ],
    "answer": "B",
    "explanation": "The contrast with burying meaning versus stating ideas plainly calls for a word meaning clear—transparent. B fits.",
    "whyWrong": {
      "A": "\"Ornate\" describes the earlier, denser style, not the plainer later one.",
      "C": "\"Obscure\" is the opposite of stating ideas plainly.",
      "D": "\"Lengthy\" concerns length, not the clarity contrast drawn."
    }
  },
  {
    "id": "words-context-t2-03",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "The following text is from an article about a scientist.\n\nHer colleagues found her theory ______ at first; it contradicted decades of accepted work, and few were willing to take it seriously.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "implausible"
      },
      {
        "letter": "B",
        "text": "conventional"
      },
      {
        "letter": "C",
        "text": "obvious"
      },
      {
        "letter": "D",
        "text": "appealing"
      }
    ],
    "answer": "A",
    "explanation": "Contradicting accepted work and being hard to take seriously means the theory seemed implausible. A fits.",
    "whyWrong": {
      "B": "\"Conventional\" contradicts a theory that broke with decades of work.",
      "C": "\"Obvious\" contradicts colleagues’ unwillingness to accept it.",
      "D": "\"Appealing\" contradicts their reluctance to take it seriously."
    }
  },
  {
    "id": "words-context-t3-01",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "The following text is from a science history.\n\nEarly critics dismissed the theory as mere speculation, but the discovery of confirming fossils ______ its standing, transforming a fringe idea into mainstream science.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "undermined"
      },
      {
        "letter": "B",
        "text": "questioned"
      },
      {
        "letter": "C",
        "text": "bolstered"
      },
      {
        "letter": "D",
        "text": "complicated"
      }
    ],
    "answer": "C",
    "explanation": "Fossils that turned a fringe idea into mainstream science strengthened it. \"Bolstered\" means strengthened.",
    "whyWrong": {
      "A": "\"Undermined\" means weakened, the opposite of what happened.",
      "B": "\"Questioned\" contradicts the rise to mainstream acceptance.",
      "D": "\"Complicated\" does not capture the clear improvement in standing."
    }
  },
  {
    "id": "words-context-t3-02",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "The following text is from an art review.\n\nFar from being derivative, the young sculptor's work is strikingly ______; nothing quite like these forms had been seen in the gallery before.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "original"
      },
      {
        "letter": "B",
        "text": "imitative"
      },
      {
        "letter": "C",
        "text": "traditional"
      },
      {
        "letter": "D",
        "text": "careless"
      }
    ],
    "answer": "A",
    "explanation": "\"Far from derivative\" and \"nothing quite like these forms before\" signal originality. A fits.",
    "whyWrong": {
      "B": "\"Imitative\" is a synonym for derivative, which the text rejects.",
      "C": "\"Traditional\" contradicts the novelty described.",
      "D": "\"Careless\" concerns quality of effort, not originality."
    }
  },
  {
    "id": "structure-t1-01",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from an article about sleep.\n\nMany people believe they can \"catch up\" on lost sleep over the weekend. But research suggests the body does not fully recover this way: several studies find that weekend sleep-ins leave attention and metabolism still impaired come Monday.\n\nWhich choice best describes the function of the second sentence in the text as a whole?",
    "choices": [
      {
        "letter": "A",
        "text": "It offers an example that supports the belief described in the first sentence."
      },
      {
        "letter": "B",
        "text": "It challenges the belief described in the first sentence with research findings."
      },
      {
        "letter": "C",
        "text": "It defines a term introduced in the first sentence."
      },
      {
        "letter": "D",
        "text": "It restates the first sentence in different words."
      }
    ],
    "answer": "B",
    "explanation": "The second sentence uses \"But\" and research to push back on the common belief. B names that function.",
    "whyWrong": {
      "A": "It opposes the belief rather than supporting it.",
      "C": "No term is being defined.",
      "D": "It counters, rather than restates, the first sentence."
    }
  },
  {
    "id": "structure-t2-01",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from a biography.\n\nBefore she became a celebrated architect, Lin worked for years as a draftsperson, tracing other people's designs late into the night. It was tedious labor, but it taught her to see how a building's smallest joints determine its largest forms—a lesson that would define her mature style.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It presents a problem and then proposes a solution."
      },
      {
        "letter": "B",
        "text": "It describes a formative early experience and connects it to a later achievement."
      },
      {
        "letter": "C",
        "text": "It compares two architects with opposing styles."
      },
      {
        "letter": "D",
        "text": "It lists the steps required to design a building."
      }
    ],
    "answer": "B",
    "explanation": "The text moves from Lin's early drafting work to the lesson that shaped her later style. B fits.",
    "whyWrong": {
      "A": "No problem-and-solution structure is present.",
      "C": "Only one architect is discussed.",
      "D": "It does not list design steps."
    }
  },
  {
    "id": "structure-t2-02",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from a popular-science article.\n\nFor centuries, mapmakers left blank the interiors of continents they had not explored, sometimes filling the space with imagined beasts. Today, satellites map every square mile in detail. Yet the deep ocean floor remains largely uncharted—the last great blank on our maps.\n\nWhich choice best describes the function of the final sentence?",
    "choices": [
      {
        "letter": "A",
        "text": "It qualifies the impression of complete knowledge by naming a region still unmapped."
      },
      {
        "letter": "B",
        "text": "It repeats the point that old maps contained imaginary beasts."
      },
      {
        "letter": "C",
        "text": "It argues that satellite maps are inaccurate."
      },
      {
        "letter": "D",
        "text": "It provides a step-by-step method for mapping the ocean."
      }
    ],
    "answer": "A",
    "explanation": "After noting satellites map every mile, the final sentence adds a \"Yet\" exception—the ocean floor. A names this qualification.",
    "whyWrong": {
      "B": "It moves forward to the ocean, not back to old beasts.",
      "C": "It does not claim satellite maps are inaccurate, only incomplete for the ocean.",
      "D": "No method is provided."
    }
  },
  {
    "id": "structure-t3-01",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from an essay on technology.\n\nThe author spends the first half of the essay cataloguing the conveniences of the smartphone—instant maps, translation, payment. Only in the final paragraph does she turn: each convenience, she argues, quietly transfers a skill we once held ourselves to a device we do not control.\n\nWhich choice best describes the function of the final paragraph within the essay as described?",
    "choices": [
      {
        "letter": "A",
        "text": "It summarizes the conveniences listed earlier without adding a new idea."
      },
      {
        "letter": "B",
        "text": "It provides additional examples of smartphone conveniences."
      },
      {
        "letter": "C",
        "text": "It reframes the earlier examples to reveal a cost the author sees in them."
      },
      {
        "letter": "D",
        "text": "It concedes that the author was wrong about smartphones."
      }
    ],
    "answer": "C",
    "explanation": "The essay lists conveniences, then \"turns\" to argue each carries a hidden cost—a reframing. C fits.",
    "whyWrong": {
      "A": "It adds a new critical idea, not just a summary.",
      "B": "It reinterprets the examples rather than adding more.",
      "D": "It sharpens a critique; it does not concede error."
    }
  },
  {
    "id": "cross-text-t2-01",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1\nProponents of remote work argue that it widens opportunity: workers in small towns can now hold jobs once available only in expensive cities, without uprooting their lives.\n\nText 2\nRemote work may open doors, but it also blurs them. When home becomes office, many workers report that the workday never truly ends, and the boundary that once protected personal time dissolves.\n\nBased on the texts, how would the author of Text 2 most likely respond to the argument in Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "By agreeing that remote work has benefits but noting a drawback the first author overlooks."
      },
      {
        "letter": "B",
        "text": "By denying that remote work offers any opportunity at all."
      },
      {
        "letter": "C",
        "text": "By arguing that workers in small towns cannot do remote jobs."
      },
      {
        "letter": "D",
        "text": "By claiming that expensive cities are the only place to find good jobs."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 says remote work \"may open doors\" (acknowledging Text 1) \"but it also blurs them\" (adding a drawback). A captures this.",
    "whyWrong": {
      "B": "Text 2 concedes doors do open, so it does not deny opportunity.",
      "C": "Text 2 never claims small-town workers cannot do remote jobs.",
      "D": "Text 2 does not endorse cities as the only source of jobs."
    }
  },
  {
    "id": "cross-text-t2-02",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1\nSome educators argue that handwriting should still be taught, because forming letters by hand helps young children remember them better than typing does.\n\nText 2\nOthers counter that class time is limited. Every hour spent on penmanship, they note, is an hour not spent on skills students will use far more often, such as typing and coding.\n\nBased on the texts, the author of Text 2 would most likely argue that the practice defended in Text 1 is",
    "choices": [
      {
        "letter": "A",
        "text": "valuable but not the best use of limited class time."
      },
      {
        "letter": "B",
        "text": "completely useless for young children."
      },
      {
        "letter": "C",
        "text": "more important than any other subject."
      },
      {
        "letter": "D",
        "text": "impossible for most students to learn."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 does not deny handwriting's benefit; it argues the opportunity cost in limited time is too high. A fits.",
    "whyWrong": {
      "B": "Text 2 questions priority, not whether handwriting has any value.",
      "C": "That reverses Text 2's position.",
      "D": "Difficulty of learning is not Text 2's point."
    }
  },
  {
    "id": "cross-text-t3-01",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1\nHistorian Alvarez contends that the invention of cheap paper, more than any single thinker, drove the spread of new ideas in the period: without an affordable medium, even brilliant arguments stayed local.\n\nText 2\nMartin acknowledges paper's importance but insists it is a mistake to credit the material alone. Ideas spread, she argues, only where networks of readers already existed to receive and pass them on.\n\nBased on the texts, Martin (Text 2) would most likely characterize Alvarez's explanation as",
    "choices": [
      {
        "letter": "A",
        "text": "entirely mistaken about the role of paper."
      },
      {
        "letter": "B",
        "text": "correct that paper mattered but incomplete without attention to reader networks."
      },
      {
        "letter": "C",
        "text": "identical to her own view in every respect."
      },
      {
        "letter": "D",
        "text": "focused too heavily on individual thinkers."
      }
    ],
    "answer": "B",
    "explanation": "Martin \"acknowledges paper's importance\" but says crediting \"the material alone\" is a mistake without reader networks—right but incomplete. B fits.",
    "whyWrong": {
      "A": "She agrees paper mattered, so \"entirely mistaken\" overstates it.",
      "C": "She adds a condition Alvarez omits, so views are not identical.",
      "D": "Alvarez downplays individual thinkers, so this misreads him."
    }
  },
  {
    "id": "words-context-t2-04",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "The following text is from a physics article.\n\nThe instrument was designed to be extraordinarily ______: it could detect a change in distance smaller than the width of a proton, far finer than any earlier device.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "sensitive"
      },
      {
        "letter": "B",
        "text": "durable"
      },
      {
        "letter": "C",
        "text": "affordable"
      },
      {
        "letter": "D",
        "text": "portable"
      }
    ],
    "answer": "A",
    "explanation": "Detecting extremely tiny changes describes a highly sensitive instrument. A fits.",
    "whyWrong": {
      "B": "\"Durable\" concerns toughness, not detecting small changes.",
      "C": "\"Affordable\" concerns cost, not precision.",
      "D": "\"Portable\" concerns size or weight, not sensitivity."
    }
  },
  {
    "id": "words-context-t3-03",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "The following text is from a 19th-century-style novel.\n\nHer aunt's praise was so ______ that Clara could never tell whether she was being complimented or quietly mocked; each kind word seemed to carry a second, sharper meaning.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "ambiguous"
      },
      {
        "letter": "B",
        "text": "sincere"
      },
      {
        "letter": "C",
        "text": "lavish"
      },
      {
        "letter": "D",
        "text": "brief"
      }
    ],
    "answer": "A",
    "explanation": "Praise that could be a compliment or mockery, carrying a second meaning, is ambiguous. A fits.",
    "whyWrong": {
      "B": "\"Sincere\" would rule out the hidden mockery the passage describes.",
      "C": "\"Lavish\" concerns quantity of praise, not its double meaning.",
      "D": "\"Brief\" concerns length, not the uncertainty of meaning."
    }
  },
  {
    "id": "structure-t2-03",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from a history of medicine.\n\nFor decades, physicians dismissed the idea that unseen organisms caused disease. Then, in a series of careful experiments, researchers showed that sterilizing instruments sharply reduced infections. The finding did not merely add a technique; it overturned how doctors understood illness itself.\n\nWhich choice best describes the function of the final sentence?",
    "choices": [
      {
        "letter": "A",
        "text": "It emphasizes the significance of the finding by noting it changed an entire way of thinking."
      },
      {
        "letter": "B",
        "text": "It lists the steps of the experiments in order."
      },
      {
        "letter": "C",
        "text": "It questions whether the experiments were valid."
      },
      {
        "letter": "D",
        "text": "It restates that physicians dismissed unseen organisms."
      }
    ],
    "answer": "A",
    "explanation": "The final sentence stresses that the finding overturned doctors' whole understanding — underscoring its significance. A fits.",
    "whyWrong": {
      "B": "It gives no ordered list of steps.",
      "C": "It affirms the finding's impact rather than doubting it.",
      "D": "It moves beyond the earlier dismissal to the finding's effect."
    }
  },
  {
    "id": "cross-text-t2-03",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1\nSupporters of a four-day workweek argue that workers are more productive when rested, so output need not fall even with fewer hours.\n\nText 2\nSkeptics respond that productivity gains vary widely by industry. A software team might keep pace in four days, they note, but a hospital or a bus system cannot simply close a day without cutting service.\n\nBased on the texts, how would the authors of Text 2 most likely respond to the argument in Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "By arguing that the benefits Text 1 describes may not apply equally across all industries."
      },
      {
        "letter": "B",
        "text": "By denying that rest has any effect on productivity."
      },
      {
        "letter": "C",
        "text": "By claiming that no industry could adopt a four-day week."
      },
      {
        "letter": "D",
        "text": "By agreeing fully with Text 1 without reservation."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 accepts the idea can work in some fields (software) but not others (hospitals, transit) — the benefit is not universal. A fits.",
    "whyWrong": {
      "B": "Text 2 concedes software teams could keep pace, so it does not deny rest's effect.",
      "C": "It allows that some industries could adopt the change.",
      "D": "It raises a limitation rather than agreeing fully."
    }
  },
  {
    "id": "words-context-t1-03",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "Complete the text with the most logical and precise word.\n\nThe smell of fresh bread was so ______ that customers followed it down the block to the bakery's door.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "faint"
      },
      {
        "letter": "B",
        "text": "inviting"
      },
      {
        "letter": "C",
        "text": "sudden"
      },
      {
        "letter": "D",
        "text": "ordinary"
      }
    ],
    "answer": "B",
    "explanation": "Customers following the smell shows it drew them in, so \"inviting\" fits precisely.",
    "whyWrong": {
      "A": "\"Faint\" would not pull people down a block.",
      "C": "\"Sudden\" describes timing, not appeal.",
      "D": "\"Ordinary\" would not attract a following."
    }
  },
  {
    "id": "words-context-t1-04",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "Complete the text with the most logical and precise word.\n\nAfter weeks of drought, the sudden rain was a ______ to the wilting crops, which perked up within days.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "threat"
      },
      {
        "letter": "B",
        "text": "blessing"
      },
      {
        "letter": "C",
        "text": "mystery"
      },
      {
        "letter": "D",
        "text": "delay"
      }
    ],
    "answer": "B",
    "explanation": "Crops perking up shows the rain helped, so \"blessing\" is the precise, logical word.",
    "whyWrong": {
      "A": "\"Threat\" contradicts the crops recovering.",
      "C": "Nothing puzzling is described.",
      "D": "\"Delay\" does not fit a helpful rain."
    }
  },
  {
    "id": "words-context-t1-05",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "Complete the text with the most logical and precise word.\n\nThe hikers moved with ______ across the icy ledge, testing each step before shifting their weight.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "caution"
      },
      {
        "letter": "B",
        "text": "joy"
      },
      {
        "letter": "C",
        "text": "boredom"
      },
      {
        "letter": "D",
        "text": "speed"
      }
    ],
    "answer": "A",
    "explanation": "Testing each step on ice shows careful movement, so \"caution\" fits.",
    "whyWrong": {
      "B": "\"Joy\" does not match wary testing.",
      "C": "\"Boredom\" contradicts careful attention.",
      "D": "\"Speed\" conflicts with testing each step first."
    }
  },
  {
    "id": "words-context-t1-06",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "Complete the text with the most logical and precise word.\n\nThe new manager's ______ instructions left no room for confusion; everyone knew exactly what to do.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "vague"
      },
      {
        "letter": "B",
        "text": "clear"
      },
      {
        "letter": "C",
        "text": "lengthy"
      },
      {
        "letter": "D",
        "text": "quiet"
      }
    ],
    "answer": "B",
    "explanation": "\"Left no room for confusion\" and \"knew exactly\" signal clarity, so \"clear\" fits.",
    "whyWrong": {
      "A": "\"Vague\" contradicts leaving no confusion.",
      "C": "Length is not what removes confusion.",
      "D": "Volume (\"quiet\") is unrelated to clarity."
    }
  },
  {
    "id": "words-context-t2-05",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "Complete the text with the most logical and precise word.\n\nThough the critic's review seemed harsh, her underlying aim was ______: she wanted the young author to sharpen a promising draft.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "constructive"
      },
      {
        "letter": "B",
        "text": "dismissive"
      },
      {
        "letter": "C",
        "text": "accidental"
      },
      {
        "letter": "D",
        "text": "indifferent"
      }
    ],
    "answer": "A",
    "explanation": "The critic wanted to help the author improve a promising draft, so her aim was \"constructive.\"",
    "whyWrong": {
      "B": "\"Dismissive\" contradicts wanting to help.",
      "C": "A deliberate aim is not \"accidental.\"",
      "D": "\"Indifferent\" clashes with caring about the draft."
    }
  },
  {
    "id": "words-context-t2-06",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "Complete the text with the most logical and precise word.\n\nThe treaty did not end the rivalry so much as ______ it, freezing the conflict without resolving its causes.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "resolve"
      },
      {
        "letter": "B",
        "text": "suspend"
      },
      {
        "letter": "C",
        "text": "celebrate"
      },
      {
        "letter": "D",
        "text": "ignite"
      }
    ],
    "answer": "B",
    "explanation": "\"Freezing without resolving\" means putting on hold, so \"suspend\" is precise.",
    "whyWrong": {
      "A": "\"Resolve\" is explicitly ruled out by \"without resolving.\"",
      "C": "\"Celebrate\" does not fit freezing a conflict.",
      "D": "\"Ignite\" would worsen, not pause, the rivalry."
    }
  },
  {
    "id": "words-context-t2-07",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "Complete the text with the most logical and precise word.\n\nHer explanation was admirably ______: in three sentences she captured what others took pages to say.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "concise"
      },
      {
        "letter": "B",
        "text": "confusing"
      },
      {
        "letter": "C",
        "text": "repetitive"
      },
      {
        "letter": "D",
        "text": "hesitant"
      }
    ],
    "answer": "A",
    "explanation": "Saying much in three sentences is being brief and clear—\"concise.\"",
    "whyWrong": {
      "B": "\"Confusing\" contradicts capturing the point.",
      "C": "\"Repetitive\" opposes brevity.",
      "D": "\"Hesitant\" does not fit a confident summary."
    }
  },
  {
    "id": "words-context-t3-04",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "Complete the text with the most logical and precise word.\n\nThe scholar was known for her ______ readings, drawing meaning from details other critics dismissed as trivial.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "careless"
      },
      {
        "letter": "B",
        "text": "meticulous"
      },
      {
        "letter": "C",
        "text": "reluctant"
      },
      {
        "letter": "D",
        "text": "conventional"
      }
    ],
    "answer": "B",
    "explanation": "Drawing meaning from overlooked details shows painstaking attention—\"meticulous.\"",
    "whyWrong": {
      "A": "\"Careless\" contradicts noticing fine details.",
      "C": "\"Reluctant\" does not describe her method.",
      "D": "\"Conventional\" clashes with seeing what others dismiss."
    }
  },
  {
    "id": "words-context-t3-05",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "Complete the text with the most logical and precise word.\n\nFar from being ______, the ceremony's every gesture carried inherited meaning, each movement a link to generations past.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "arbitrary"
      },
      {
        "letter": "B",
        "text": "solemn"
      },
      {
        "letter": "C",
        "text": "ancient"
      },
      {
        "letter": "D",
        "text": "public"
      }
    ],
    "answer": "A",
    "explanation": "\"Far from being ___\" sets up a contrast with carrying inherited meaning, so the word must mean \"random\"—\"arbitrary.\"",
    "whyWrong": {
      "B": "\"Solemn\" agrees with, rather than contrasts, meaningful ritual.",
      "C": "\"Ancient\" fits the tradition, not the contrast needed.",
      "D": "\"Public\" is unrelated to whether gestures are meaningful."
    }
  },
  {
    "id": "words-context-t3-06",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "Complete the text with the most logical and precise word.\n\nThe committee's praise was ______ at best—a single polite sentence buried at the end of an otherwise critical report.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "lavish"
      },
      {
        "letter": "B",
        "text": "perfunctory"
      },
      {
        "letter": "C",
        "text": "sincere"
      },
      {
        "letter": "D",
        "text": "overwhelming"
      }
    ],
    "answer": "B",
    "explanation": "A lone polite sentence amid criticism is going through the motions—\"perfunctory.\"",
    "whyWrong": {
      "A": "\"Lavish\" contradicts a single buried sentence.",
      "C": "The dismissive framing undercuts \"sincere.\"",
      "D": "\"Overwhelming\" clashes with minimal praise."
    }
  },
  {
    "id": "structure-t1-02",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from an essay about deserts.\n\nDeserts appear lifeless at noon. But at dusk, a different world stirs: foxes trot from their dens, owls glide overhead, and insects hum across the cooling sand.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It lists several unrelated facts about deserts."
      },
      {
        "letter": "B",
        "text": "It contrasts the desert's daytime stillness with its nighttime activity."
      },
      {
        "letter": "C",
        "text": "It argues that deserts should be protected."
      },
      {
        "letter": "D",
        "text": "It traces the history of desert exploration."
      }
    ],
    "answer": "B",
    "explanation": "The text sets a lifeless noon against a stirring dusk—a contrast between day and night.",
    "whyWrong": {
      "A": "The details are connected by the day/night contrast, not unrelated.",
      "C": "No argument for protection appears.",
      "D": "No history of exploration is given."
    }
  },
  {
    "id": "structure-t1-03",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from a profile of an inventor.\n\nAs a child, Mara took apart every clock in the house. In college, she studied engineering. Today, she designs the tiny motors inside surgical robots.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It presents a problem and its solution."
      },
      {
        "letter": "B",
        "text": "It traces the inventor's development over time."
      },
      {
        "letter": "C",
        "text": "It compares two different inventors."
      },
      {
        "letter": "D",
        "text": "It lists reasons clocks are important."
      }
    ],
    "answer": "B",
    "explanation": "The text moves from childhood to college to the present, tracing development chronologically.",
    "whyWrong": {
      "A": "No problem-solution pattern is present.",
      "C": "Only one person is described.",
      "D": "Clocks are a childhood detail, not the focus."
    }
  },
  {
    "id": "structure-t1-04",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from an article about a storm.\n\nThe warning came at noon. By three, winds tore at the shutters. By nightfall, the streets lay silent under fallen branches.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It describes events in the order they happened."
      },
      {
        "letter": "B",
        "text": "It weighs the costs and benefits of storms."
      },
      {
        "letter": "C",
        "text": "It defines a scientific term."
      },
      {
        "letter": "D",
        "text": "It compares two storms."
      }
    ],
    "answer": "A",
    "explanation": "The text marches from noon to three to nightfall—a time-ordered sequence.",
    "whyWrong": {
      "B": "No costs or benefits are weighed.",
      "C": "No term is defined.",
      "D": "Only one storm is described."
    }
  },
  {
    "id": "structure-t1-05",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from a book about music.\n\nA song's verse tells the story, moving forward with new words each time. The chorus, by contrast, returns unchanged, a familiar anchor the listener waits for.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It contrasts the roles of a song's verse and chorus."
      },
      {
        "letter": "B",
        "text": "It lists the steps for writing a song."
      },
      {
        "letter": "C",
        "text": "It argues that choruses are better than verses."
      },
      {
        "letter": "D",
        "text": "It describes the history of a single song."
      }
    ],
    "answer": "A",
    "explanation": "The text sets the forward-moving verse against the returning chorus—a contrast of roles.",
    "whyWrong": {
      "B": "No songwriting steps are given.",
      "C": "Neither part is ranked as better.",
      "D": "No single song's history is traced."
    }
  },
  {
    "id": "structure-t2-04",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from an essay on cities.\n\nPlanners long assumed that wider roads would ease traffic. Yet each new lane seemed to fill as fast as it opened, drawing more drivers until the jams returned. The lesson was counterintuitive: adding capacity could invite the very congestion it aimed to cure.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It presents an expectation, then shows how reality overturned it."
      },
      {
        "letter": "B",
        "text": "It lists the causes of traffic in order of importance."
      },
      {
        "letter": "C",
        "text": "It compares two cities' road systems."
      },
      {
        "letter": "D",
        "text": "It describes a solution and its many benefits."
      }
    ],
    "answer": "A",
    "explanation": "The text states the planners' assumption, then reveals the opposite outcome—an expectation-versus-reality structure.",
    "whyWrong": {
      "B": "Causes are not ranked; one paradox is explored.",
      "C": "No two cities are compared.",
      "D": "The \"solution\" backfires; it is not praised."
    }
  },
  {
    "id": "structure-t2-05",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from a nature essay.\n\nThe tide pool looks calm, a still mirror between rocks. Look closer, though, and it churns with struggle: crabs duel over shells, anemones snare drifting prey, and snails graze a shrinking film of algae.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It moves from a surface impression to the hidden reality beneath it."
      },
      {
        "letter": "B",
        "text": "It argues that tide pools are endangered."
      },
      {
        "letter": "C",
        "text": "It lists tide pools in different regions."
      },
      {
        "letter": "D",
        "text": "It explains how tide pools form over time."
      }
    ],
    "answer": "A",
    "explanation": "The text begins with the calm surface impression, then reveals underlying struggle—appearance to deeper reality.",
    "whyWrong": {
      "B": "No claim about endangerment appears.",
      "C": "Only one tide pool is described.",
      "D": "Formation over time is not discussed."
    }
  },
  {
    "id": "structure-t2-06",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is adapted from a memoir.\n\nI dreaded the recital for weeks. My hands shook as I sat down at the piano. But the moment the first notes rang out, the fear dissolved, and I played as if the bench were my own quiet room.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It traces a shift from dread to calm as the performance begins."
      },
      {
        "letter": "B",
        "text": "It compares two different recitals."
      },
      {
        "letter": "C",
        "text": "It lists tips for overcoming stage fright."
      },
      {
        "letter": "D",
        "text": "It explains why recitals are important."
      }
    ],
    "answer": "A",
    "explanation": "The passage moves from weeks of dread and shaking hands to sudden calm once playing begins—an emotional turn.",
    "whyWrong": {
      "B": "Only one recital is described.",
      "C": "No general tips are offered.",
      "D": "It recounts an experience, not an argument for importance."
    }
  },
  {
    "id": "structure-t3-02",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from a work of criticism.\n\nThe novel opens in bright comedy—mistaken identities, witty servants, a wedding planned. Midway, the tone darkens: a death, a betrayal, a family fractured. By the close, comedy and grief sit side by side, neither erasing the other.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It traces the novel's tonal movement from comedy through darkness to a blend of both."
      },
      {
        "letter": "B",
        "text": "It argues the novel is a failure."
      },
      {
        "letter": "C",
        "text": "It compares the novel to a rival work."
      },
      {
        "letter": "D",
        "text": "It summarizes only the novel's ending."
      }
    ],
    "answer": "A",
    "explanation": "The text follows the tone across three stages—comedy, darkening, and a final coexistence—describing tonal movement.",
    "whyWrong": {
      "B": "No judgment of failure is made.",
      "C": "No rival work appears.",
      "D": "It covers the whole arc, not just the ending."
    }
  },
  {
    "id": "structure-t3-03",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from an essay on science.\n\nFor centuries the stomach was imagined as a simple grinding sack. Then came evidence of acids, then enzymes, then a vast community of microbes. Each discovery did not replace the last so much as fold into it, until the \"simple sack\" had become one of the body's most intricate organs.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It shows an idea growing more complex as successive discoveries accumulate."
      },
      {
        "letter": "B",
        "text": "It lists unrelated facts about digestion."
      },
      {
        "letter": "C",
        "text": "It contrasts two competing theories and rejects both."
      },
      {
        "letter": "D",
        "text": "It argues the stomach is still poorly understood."
      }
    ],
    "answer": "A",
    "explanation": "The passage tracks how each finding folded into the last, building from a \"simple sack\" to an intricate organ—accumulating complexity.",
    "whyWrong": {
      "B": "The facts build on one another; they are not unrelated.",
      "C": "Findings combine rather than compete and get rejected.",
      "D": "It stresses growing understanding, not persistent ignorance."
    }
  },
  {
    "id": "structure-t3-04",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from a historical essay.\n\nThe canal was hailed as a triumph the year it opened: goods moved faster, towns along its banks boomed. Within decades, though, the railroad arrived, and the same towns that the canal had raised were left stranded beside still water.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It presents an early success and then its reversal by later events."
      },
      {
        "letter": "B",
        "text": "It lists the goods carried on the canal."
      },
      {
        "letter": "C",
        "text": "It compares canals in two countries."
      },
      {
        "letter": "D",
        "text": "It defines what a canal is."
      }
    ],
    "answer": "A",
    "explanation": "The text pairs the canal's triumphant opening with its later eclipse by the railroad—success followed by reversal.",
    "whyWrong": {
      "B": "Goods are mentioned only as part of the boom, not listed.",
      "C": "No second country appears.",
      "D": "No definition is offered."
    }
  },
  {
    "id": "cross-text-t1-01",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1: Community gardens turn empty lots into green spaces where neighbors grow food together. Supporters say they build friendships and provide fresh vegetables at little cost.\n\nText 2: While community gardens have benefits, they require steady volunteer labor. When a few core members move away, many gardens fall into neglect within a season.\n\nBased on the texts, how would the author of Text 2 most likely respond to the supporters mentioned in Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "By agreeing that gardens can help but warning that their success is fragile."
      },
      {
        "letter": "B",
        "text": "By denying that gardens produce any vegetables."
      },
      {
        "letter": "C",
        "text": "By arguing that empty lots should stay empty."
      },
      {
        "letter": "D",
        "text": "By claiming gardens never build friendships."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 concedes gardens \"have benefits\" but stresses their dependence on volunteers—agreement with a caution about fragility.",
    "whyWrong": {
      "B": "Text 2 does not deny the vegetables.",
      "C": "Text 2 never argues for leaving lots empty.",
      "D": "Text 2 questions durability, not friendship itself."
    }
  },
  {
    "id": "cross-text-t1-02",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1: Homework reinforces what students learn in class, giving them a chance to practice on their own.\n\nText 2: Too much homework can crowd out sleep, family time, and play—things children also need to thrive.\n\nBased on the texts, the authors would most likely agree that homework\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "should be eliminated entirely."
      },
      {
        "letter": "B",
        "text": "plays some role in student learning."
      },
      {
        "letter": "C",
        "text": "is more important than sleep."
      },
      {
        "letter": "D",
        "text": "has no effect on students."
      }
    ],
    "answer": "B",
    "explanation": "Text 1 praises practice and Text 2 warns only against \"too much,\" so both accept homework has some role.",
    "whyWrong": {
      "A": "Text 1 supports homework, so neither calls for elimination.",
      "C": "Text 2 values sleep; it doesn't rank homework above it.",
      "D": "Both texts assume homework does have effects."
    }
  },
  {
    "id": "cross-text-t1-03",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1: Zoos educate the public and help protect endangered species through breeding programs.\n\nText 2: Even well-run zoos confine animals to spaces far smaller than their natural range.\n\nBased on the texts, how do the two authors differ in their focus?",
    "choices": [
      {
        "letter": "A",
        "text": "Text 1 emphasizes zoos' benefits, while Text 2 emphasizes a drawback of zoos."
      },
      {
        "letter": "B",
        "text": "Both authors argue zoos should be closed."
      },
      {
        "letter": "C",
        "text": "Text 1 focuses on space while Text 2 focuses on education."
      },
      {
        "letter": "D",
        "text": "Both authors focus only on breeding programs."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 highlights education and conservation (benefits); Text 2 highlights confined space (a drawback)—a difference in focus.",
    "whyWrong": {
      "B": "Neither text calls for closing zoos.",
      "C": "The focuses are reversed in this option.",
      "D": "Only Text 1 mentions breeding."
    }
  },
  {
    "id": "cross-text-t1-04",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1: Electric cars produce no tailpipe emissions, making city air cleaner.\n\nText 2: The electricity that charges these cars often comes from power plants that burn fossil fuels.\n\nBased on the texts, the author of Text 2 would most likely point out that Text 1's claim about cleaner air\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "overlooks pollution created where the electricity is generated."
      },
      {
        "letter": "B",
        "text": "is completely false in every way."
      },
      {
        "letter": "C",
        "text": "applies only to gasoline cars."
      },
      {
        "letter": "D",
        "text": "proves electric cars pollute more than gasoline cars."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 notes charging power may come from fossil-fuel plants, so it would say Text 1 ignores pollution at the generation source.",
    "whyWrong": {
      "B": "Text 2 refines, not wholly rejects, Text 1.",
      "C": "Text 1 is about electric cars, not gasoline cars.",
      "D": "Text 2 does not claim electric cars pollute more overall."
    }
  },
  {
    "id": "cross-text-t2-04",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1: A study found that students who took handwritten notes remembered lecture material better than those who typed, perhaps because writing forces them to summarize.\n\nText 2: Typed notes let students capture more of a lecture word for word, which can help when reviewing dense technical material later.\n\nBased on the texts, the authors would most likely agree that the better note-taking method\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "depends in part on the learning goal."
      },
      {
        "letter": "B",
        "text": "is always handwriting."
      },
      {
        "letter": "C",
        "text": "is always typing."
      },
      {
        "letter": "D",
        "text": "does not affect learning at all."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 favors handwriting for memory; Text 2 favors typing for capturing detail—together implying the best method depends on the goal.",
    "whyWrong": {
      "B": "Text 2 gives a case for typing.",
      "C": "Text 1 gives a case for handwriting.",
      "D": "Both texts assume the method matters."
    }
  },
  {
    "id": "cross-text-t2-05",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1: The historian argues that the revolt was driven mainly by rising bread prices, which pushed ordinary people to the streets.\n\nText 2: Another scholar contends that new pamphlets spreading radical ideas were the true spark, giving the crowds a cause to rally around.\n\nBased on the texts, the two scholars primarily disagree about\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "the main cause of the revolt."
      },
      {
        "letter": "B",
        "text": "whether the revolt actually occurred."
      },
      {
        "letter": "C",
        "text": "the exact date of the revolt."
      },
      {
        "letter": "D",
        "text": "how many people took part."
      }
    ],
    "answer": "A",
    "explanation": "One credits bread prices, the other credits radical pamphlets—their disagreement is about the revolt's primary cause.",
    "whyWrong": {
      "B": "Both accept the revolt happened.",
      "C": "Neither disputes the date.",
      "D": "Participant numbers are not the point of contention."
    }
  },
  {
    "id": "cross-text-t2-06",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1: Rewilding—returning land to wild nature—can restore ecosystems and bring back lost species.\n\nText 2: Rewilding sounds appealing, but abandoning farmland can hurt rural communities that depend on it for work.\n\nBased on the texts, how would the author of Text 1 most likely respond to Text 2?",
    "choices": [
      {
        "letter": "A",
        "text": "By acknowledging the concern while still valuing rewilding's ecological gains."
      },
      {
        "letter": "B",
        "text": "By insisting rural communities do not matter."
      },
      {
        "letter": "C",
        "text": "By abandoning support for rewilding entirely."
      },
      {
        "letter": "D",
        "text": "By denying that rewilding restores ecosystems."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 champions rewilding's ecological benefits, so it would likely grant Text 2's economic worry yet keep valuing those gains.",
    "whyWrong": {
      "B": "Nothing suggests Text 1 dismisses communities.",
      "C": "Text 1 supports rewilding; it would not abandon it outright.",
      "D": "Text 1 would not deny its own central claim."
    }
  },
  {
    "id": "cross-text-t3-02",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1: A psychologist argues that willpower is like a muscle: it tires with use, so people make worse choices late in a demanding day.\n\nText 2: A later researcher counters that people's beliefs about willpower matter more; those who think willpower is unlimited show no such decline.\n\nBased on the texts, the researcher in Text 2 would most likely argue that the \"tired muscle\" pattern in Text 1\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "may reflect people's expectations rather than a fixed limit on willpower."
      },
      {
        "letter": "B",
        "text": "proves willpower cannot be studied."
      },
      {
        "letter": "C",
        "text": "occurs only in the morning."
      },
      {
        "letter": "D",
        "text": "shows willpower is truly unlimited for everyone."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 attributes the decline to beliefs, so it would recast Text 1's pattern as a product of expectations, not a fixed depletion.",
    "whyWrong": {
      "B": "Text 2 studies willpower, so it doesn't say it can't be studied.",
      "C": "Text 1's decline is described late in the day, not the morning.",
      "D": "Text 2 says only certain believers show no decline, not that willpower is unlimited for all."
    }
  },
  {
    "id": "cross-text-t3-03",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1: An economist claims that raising the minimum wage reduces the number of entry-level jobs, as businesses cut positions to control costs.\n\nText 2: Drawing on recent case studies, another economist finds that modest minimum-wage increases often leave employment steady, as higher pay reduces turnover and boosts productivity.\n\nBased on the texts, the two economists most fundamentally disagree about\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "whether raising the minimum wage necessarily cuts jobs."
      },
      {
        "letter": "B",
        "text": "whether the minimum wage exists."
      },
      {
        "letter": "C",
        "text": "how minimum wage is calculated."
      },
      {
        "letter": "D",
        "text": "whether workers deserve higher pay."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 says higher wages cut jobs; Text 2 finds employment often steady—their core dispute is whether raises necessarily reduce jobs.",
    "whyWrong": {
      "B": "Both accept the minimum wage exists.",
      "C": "Calculation method is not debated.",
      "D": "Neither text argues about desert; they debate effects."
    }
  },
  {
    "id": "cross-text-t3-04",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1: A critic praises the film for its silence, arguing that long wordless scenes let the audience feel the character's isolation directly.\n\nText 2: Another critic finds the same silences self-indulgent, claiming they stall the story and test the viewer's patience without adding meaning.\n\nBased on the texts, the two critics disagree primarily about\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "whether the film's silences serve an artistic purpose."
      },
      {
        "letter": "B",
        "text": "whether the film contains silent scenes."
      },
      {
        "letter": "C",
        "text": "the length of the film overall."
      },
      {
        "letter": "D",
        "text": "who directed the film."
      }
    ],
    "answer": "A",
    "explanation": "Both agree the silences exist; they split on whether those silences convey meaning or merely stall—an artistic-purpose dispute.",
    "whyWrong": {
      "B": "Both acknowledge the silences.",
      "C": "Total length is not the issue.",
      "D": "The director is not discussed."
    }
  },
  {
    "id": "structure-t1-06",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from a guide for new gardeners.\n\nFirst, loosen the soil with a fork. Next, mix in compost. Finally, plant the seeds at the depth listed on the packet.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It gives steps in the order they should be done."
      },
      {
        "letter": "B",
        "text": "It compares two gardening methods."
      },
      {
        "letter": "C",
        "text": "It argues that gardening is difficult."
      },
      {
        "letter": "D",
        "text": "It lists reasons compost is useful."
      }
    ],
    "answer": "A",
    "explanation": "The words \"First,\" \"Next,\" and \"Finally\" mark a sequence of steps in order.",
    "whyWrong": {
      "B": "Only one method is described.",
      "C": "No claim about difficulty is made.",
      "D": "Compost is one step, not a list of its benefits."
    }
  },
  {
    "id": "structure-t3-05",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from an essay on architecture.\n\nThe cathedral rewards the patient eye. From the plaza, it reads as a single soaring mass. Step inside, and it dissolves into parts—ribbed vaults, stained glass, a lace of stone. Look longer still, and those parts resolve again into one deliberate whole.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It guides the reader through shifting perceptions of the building, from whole to parts and back to whole."
      },
      {
        "letter": "B",
        "text": "It lists cathedrals in different cities."
      },
      {
        "letter": "C",
        "text": "It argues cathedrals are outdated."
      },
      {
        "letter": "D",
        "text": "It explains how cathedrals are funded."
      }
    ],
    "answer": "A",
    "explanation": "The passage moves the viewer from the whole (plaza) to the parts (inside) and back to a unified whole—a structured shift in perception.",
    "whyWrong": {
      "B": "Only one cathedral is described.",
      "C": "No claim of obsolescence appears.",
      "D": "Funding is not discussed."
    }
  },
  {
    "id": "structure-t3-06",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from a science essay.\n\nThe claim seemed absurd: that invisible creatures caused disease. For decades it was mocked. Then microscopes improved, cultures were grown, and one by one the objections fell. What had been ridiculed became the foundation of modern medicine.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It traces an idea's path from ridicule to acceptance as evidence accumulated."
      },
      {
        "letter": "B",
        "text": "It lists symptoms of several diseases."
      },
      {
        "letter": "C",
        "text": "It compares two competing microscopes."
      },
      {
        "letter": "D",
        "text": "It argues that mockery is always wrong."
      }
    ],
    "answer": "A",
    "explanation": "The passage follows the germ idea from being mocked to becoming foundational as evidence mounted—a rejection-to-acceptance arc.",
    "whyWrong": {
      "B": "No symptoms are listed.",
      "C": "Microscopes are a detail, not a comparison.",
      "D": "It makes no general claim about mockery."
    }
  },
  {
    "id": "cross-text-t1-05",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1: School uniforms reduce distractions and help students focus on learning rather than fashion.\n\nText 2: Uniforms can strain families' budgets and limit students' ability to express themselves.\n\nBased on the texts, the authors would most likely disagree about whether uniforms\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "are, on balance, good for students."
      },
      {
        "letter": "B",
        "text": "are worn by any students at all."
      },
      {
        "letter": "C",
        "text": "cost money to purchase."
      },
      {
        "letter": "D",
        "text": "are made of fabric."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 praises uniforms; Text 2 highlights drawbacks—so they would disagree about whether uniforms are, overall, good.",
    "whyWrong": {
      "B": "Both assume students wear uniforms.",
      "C": "Both would agree uniforms cost money.",
      "D": "Neither disputes basic facts about fabric."
    }
  },
  {
    "id": "cross-text-t1-06",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1: Video games can sharpen problem-solving and quick decision-making.\n\nText 2: Long hours of gaming can crowd out sleep and exercise, which young people need.\n\nBased on the texts, both authors would most likely agree that video games\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "have effects worth considering."
      },
      {
        "letter": "B",
        "text": "should be banned for everyone."
      },
      {
        "letter": "C",
        "text": "have no impact on players."
      },
      {
        "letter": "D",
        "text": "are only harmful."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 notes benefits and Text 2 notes costs, so both agree games have real effects worth weighing.",
    "whyWrong": {
      "B": "Text 1 sees value, so neither calls for a ban.",
      "C": "Both describe impacts.",
      "D": "Text 1 lists benefits, so not \"only harmful.\""
    }
  },
  {
    "id": "cross-text-t3-05",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1: A philosopher argues that true courage requires feeling fear and acting well despite it; the fearless are merely reckless.\n\nText 2: Another thinker holds that the most admirable figures feel no fear at all, having trained themselves until danger no longer moves them.\n\nBased on the texts, the two thinkers most fundamentally disagree about\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "whether fear is necessary for genuine courage."
      },
      {
        "letter": "B",
        "text": "whether courage is ever admirable."
      },
      {
        "letter": "C",
        "text": "whether danger exists."
      },
      {
        "letter": "D",
        "text": "whether training is possible."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 says courage requires fear; Text 2 admires the fearless—so they split on whether fear is necessary for courage.",
    "whyWrong": {
      "B": "Both treat courage as admirable.",
      "C": "Neither denies danger exists.",
      "D": "Text 2 assumes training works; it is not the dispute."
    }
  },
  {
    "id": "cross-text-t3-06",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1: A curator argues that museums should return artifacts to the communities they came from, even at the cost of thinner collections.\n\nText 2: Another argues that great museums preserve and share world heritage in one place, making artifacts accessible to millions who could never travel to see them.\n\nBased on the texts, the authors primarily disagree about\n\nWhich choice best completes the statement?",
    "choices": [
      {
        "letter": "A",
        "text": "where artifacts can best serve people."
      },
      {
        "letter": "B",
        "text": "whether artifacts have any value."
      },
      {
        "letter": "C",
        "text": "whether museums charge admission."
      },
      {
        "letter": "D",
        "text": "how old the artifacts are."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 favors returning artifacts to origin communities; Text 2 favors centralized access—their dispute is where artifacts best serve people.",
    "whyWrong": {
      "B": "Both assume artifacts are valuable.",
      "C": "Admission fees are not discussed.",
      "D": "Artifact age is not the issue."
    }
  },
];
