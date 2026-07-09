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
  {
    "id": "words-context-t1-07",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "The following text is from an article about a marathon runner.\n\nEven after twenty miles, Dara's pace remained ______; she crossed each mile marker at almost exactly the same time, never speeding up or slowing down.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "steady"
      },
      {
        "letter": "B",
        "text": "reckless"
      },
      {
        "letter": "C",
        "text": "sudden"
      },
      {
        "letter": "D",
        "text": "hesitant"
      }
    ],
    "answer": "A",
    "explanation": "Hitting each marker at almost the same time, never speeding up or slowing, describes a steady pace. A fits.",
    "whyWrong": {
      "B": "'Reckless' suggests carelessness, not the even pace described.",
      "C": "'Sudden' implies abrupt change, the opposite of a constant pace.",
      "D": "'Hesitant' suggests uncertainty, not consistent timing."
    }
  },
  {
    "id": "words-context-t1-08",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "The following text is from a review of a documentary.\n\nThe film's images were so ______ that audiences left the theater still picturing them hours later, unable to shake the scenes from their minds.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "forgettable"
      },
      {
        "letter": "B",
        "text": "vivid"
      },
      {
        "letter": "C",
        "text": "silent"
      },
      {
        "letter": "D",
        "text": "brief"
      }
    ],
    "answer": "B",
    "explanation": "Images that audiences keep picturing for hours are striking and memorable—vivid. B fits.",
    "whyWrong": {
      "A": "'Forgettable' contradicts images people could not shake.",
      "C": "'Silent' describes sound, not the images' strength.",
      "D": "'Brief' describes length, not why the images lingered."
    }
  },
  {
    "id": "words-context-t1-09",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "The following text is from a story about a young inventor.\n\nHer first design failed, and so did the second, but Priya was ______: she rebuilt the machine again and again until at last it worked.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "persistent"
      },
      {
        "letter": "B",
        "text": "careless"
      },
      {
        "letter": "C",
        "text": "fortunate"
      },
      {
        "letter": "D",
        "text": "distracted"
      }
    ],
    "answer": "A",
    "explanation": "Rebuilding again and again after failures until success describes persistence. A fits.",
    "whyWrong": {
      "B": "'Careless' does not match her repeated, deliberate effort.",
      "C": "'Fortunate' credits luck, but her success came from effort.",
      "D": "'Distracted' contradicts her focused, repeated work."
    }
  },
  {
    "id": "words-context-t1-10",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "The following text is from an article about coral reefs.\n\nThe reef supports a ______ range of life: thousands of species of fish, crabs, worms, and coral crowd into a single stretch of shallow water.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "narrow"
      },
      {
        "letter": "B",
        "text": "diverse"
      },
      {
        "letter": "C",
        "text": "silent"
      },
      {
        "letter": "D",
        "text": "empty"
      }
    ],
    "answer": "B",
    "explanation": "Thousands of species crowding into one place describes a diverse range of life. B fits.",
    "whyWrong": {
      "A": "'Narrow' contradicts thousands of species.",
      "C": "'Silent' describes sound, not variety.",
      "D": "'Empty' contradicts the crowded life described."
    }
  },
  {
    "id": "words-context-t1-11",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "The following text is from a biography of a diplomat.\n\nKnown for his ______ manner, Ansari could calm a heated negotiation simply by lowering his voice and speaking slowly, refusing to be rushed.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "frantic"
      },
      {
        "letter": "B",
        "text": "hostile"
      },
      {
        "letter": "C",
        "text": "calm"
      },
      {
        "letter": "D",
        "text": "loud"
      }
    ],
    "answer": "C",
    "explanation": "Someone who cools tempers by speaking slowly and refusing to be rushed has a calm manner. C fits.",
    "whyWrong": {
      "A": "'Frantic' contradicts his slow, unhurried style.",
      "B": "'Hostile' contradicts his ability to calm others.",
      "D": "The text says he lowered his voice, not that he was loud."
    }
  },
  {
    "id": "words-context-t1-12",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "The following text is from an article about note-taking.\n\nRather than copying the lecture word for word, effective students write a ______ version, capturing only the main points in a few short lines.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "condensed"
      },
      {
        "letter": "B",
        "text": "complicated"
      },
      {
        "letter": "C",
        "text": "decorative"
      },
      {
        "letter": "D",
        "text": "identical"
      }
    ],
    "answer": "A",
    "explanation": "Capturing only main points in a few short lines describes a condensed version. A fits.",
    "whyWrong": {
      "B": "'Complicated' contradicts a short, main-points summary.",
      "C": "'Decorative' concerns appearance, not brevity.",
      "D": "'Identical' would mean copying word for word, which the text rejects."
    }
  },
  {
    "id": "words-context-t2-08",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "The following text is from an essay on scientific writing.\n\nA good abstract does not merely shorten a paper; it ______ it, distilling pages of argument into a few sentences that preserve the essential findings.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "distorts"
      },
      {
        "letter": "B",
        "text": "distills"
      },
      {
        "letter": "C",
        "text": "ignores"
      },
      {
        "letter": "D",
        "text": "repeats"
      }
    ],
    "answer": "B",
    "explanation": "Reducing pages to a few sentences that keep the essentials describes distilling. The phrase 'distilling pages of argument' confirms it. B fits.",
    "whyWrong": {
      "A": "'Distorts' implies misrepresenting, but the abstract preserves the findings.",
      "C": "'Ignores' contradicts preserving the essential findings.",
      "D": "'Repeats' misses the reduction; an abstract is far shorter than the paper."
    }
  },
  {
    "id": "words-context-t2-09",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "The following text is from a history of exploration.\n\nThe expedition's success was often credited to its leader, but her reputation for boldness was in fact ______ by careful planning: every daring crossing rested on weeks of quiet preparation.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "undermined"
      },
      {
        "letter": "B",
        "text": "underpinned"
      },
      {
        "letter": "C",
        "text": "exaggerated"
      },
      {
        "letter": "D",
        "text": "concealed"
      }
    ],
    "answer": "B",
    "explanation": "The daring rested on weeks of preparation, so planning supported the boldness from beneath—underpinned. B fits.",
    "whyWrong": {
      "A": "'Undermined' means weakened, but planning enabled the boldness.",
      "C": "'Exaggerated' concerns overstating, not the support planning gave.",
      "D": "'Concealed' means hidden, but the point is that planning supported the daring."
    }
  },
  {
    "id": "words-context-t2-10",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "The following text is from a novel.\n\nThe old clockmaker spoke of his craft with such ______ that even visitors who had never cared about gears found themselves leaning in, caught up in his delight.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "reluctance"
      },
      {
        "letter": "B",
        "text": "indifference"
      },
      {
        "letter": "C",
        "text": "enthusiasm"
      },
      {
        "letter": "D",
        "text": "confusion"
      }
    ],
    "answer": "C",
    "explanation": "His 'delight' draws in even the uninterested, so he spoke with enthusiasm. C fits.",
    "whyWrong": {
      "A": "'Reluctance' contradicts his evident delight.",
      "B": "'Indifference' cannot catch listeners up in his feeling.",
      "D": "'Confusion' does not explain why visitors leaned in eagerly."
    }
  },
  {
    "id": "words-context-t2-11",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "The following text is from an article about ecology.\n\nThe wetland acts as a natural ______ for the river: during heavy rains it absorbs the excess flow, releasing it slowly and sparing the towns downstream from sudden floods.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "buffer"
      },
      {
        "letter": "B",
        "text": "barrier"
      },
      {
        "letter": "C",
        "text": "source"
      },
      {
        "letter": "D",
        "text": "rival"
      }
    ],
    "answer": "A",
    "explanation": "Absorbing excess water and releasing it slowly to soften floods describes a buffer. A fits.",
    "whyWrong": {
      "B": "'Barrier' implies blocking flow entirely, but the wetland releases water slowly.",
      "C": "'Source' would mean supplying the water, not moderating it.",
      "D": "'Rival' does not fit a physical moderating function."
    }
  },
  {
    "id": "words-context-t2-12",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "The following text is from a discussion of art restoration.\n\nThe restorer's touch was so ______ that no viewer could tell where the original paint ended and her repairs began; the seam simply vanished.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "clumsy"
      },
      {
        "letter": "B",
        "text": "seamless"
      },
      {
        "letter": "C",
        "text": "hurried"
      },
      {
        "letter": "D",
        "text": "visible"
      }
    ],
    "answer": "B",
    "explanation": "Repairs no one can distinguish from the original, with the seam vanishing, are seamless. B fits.",
    "whyWrong": {
      "A": "'Clumsy' contradicts repairs that cannot be detected.",
      "C": "'Hurried' does not describe the invisible quality of the work.",
      "D": "'Visible' is the opposite of a seam that vanished."
    }
  },
  {
    "id": "words-context-t3-07",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "The following text is from a work of criticism.\n\nThe critic praised the poet's restraint, noting that her most powerful lines were ______ ones—brief, unadorned statements whose plainness only sharpened their force.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "ornate"
      },
      {
        "letter": "B",
        "text": "austere"
      },
      {
        "letter": "C",
        "text": "verbose"
      },
      {
        "letter": "D",
        "text": "ambiguous"
      }
    ],
    "answer": "B",
    "explanation": "'Brief, unadorned' and 'plainness' describe a spare, stripped-down style—austere. B fits.",
    "whyWrong": {
      "A": "'Ornate' means heavily decorated, contradicting 'unadorned.'",
      "C": "'Verbose' means wordy, but the lines are brief.",
      "D": "'Ambiguous' concerns unclear meaning, not plainness of style."
    }
  },
  {
    "id": "words-context-t3-08",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "The following text is from an essay on public debate.\n\nWhat looked like agreement was only ______: the two sides used the same words but meant such different things by them that their apparent consensus dissolved the moment either tried to act on it.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "superficial"
      },
      {
        "letter": "B",
        "text": "permanent"
      },
      {
        "letter": "C",
        "text": "sincere"
      },
      {
        "letter": "D",
        "text": "unanimous"
      }
    ],
    "answer": "A",
    "explanation": "The agreement was only on the surface of shared words and collapsed when tested—superficial. A fits.",
    "whyWrong": {
      "B": "'Permanent' contradicts an agreement that dissolved.",
      "C": "'Sincere' misses that the agreement was illusory.",
      "D": "'Unanimous' describes how many agreed, not that the agreement was shallow."
    }
  },
  {
    "id": "words-context-t3-09",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "The following text is from a study of political rhetoric.\n\nThe senator's speeches were masterfully ______: broad enough that listeners of opposing views each heard their own hopes echoed, yet specific enough to seem like firm promises.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "monotonous"
      },
      {
        "letter": "B",
        "text": "calibrated"
      },
      {
        "letter": "C",
        "text": "careless"
      },
      {
        "letter": "D",
        "text": "abrupt"
      }
    ],
    "answer": "B",
    "explanation": "Speeches finely balanced between broad and specific were carefully adjusted—calibrated. B fits.",
    "whyWrong": {
      "A": "'Monotonous' means dull, not skillfully balanced.",
      "C": "'Careless' contradicts the deliberate balancing described.",
      "D": "'Abrupt' concerns suddenness, not the tuning of the message."
    }
  },
  {
    "id": "words-context-t3-10",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "The following text is from a memoir.\n\nMy grandmother's advice was rarely direct; she preferred to ______, letting a story about someone else carry the lesson she would never state outright.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "insist"
      },
      {
        "letter": "B",
        "text": "imply"
      },
      {
        "letter": "C",
        "text": "command"
      },
      {
        "letter": "D",
        "text": "boast"
      }
    ],
    "answer": "B",
    "explanation": "Letting a story carry a lesson she never states outright is to imply it. B fits.",
    "whyWrong": {
      "A": "'Insist' is direct, the opposite of her indirect way.",
      "C": "'Command' is explicit and forceful, unlike the unstated lesson.",
      "D": "'Boast' concerns self-praise, not conveying advice indirectly."
    }
  },
  {
    "id": "words-context-t3-11",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "The following text is from a history of science.\n\nFar from settling the question, the new data ______ it, opening lines of inquiry the researchers had not known existed and leaving the field busier than before.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "resolved"
      },
      {
        "letter": "B",
        "text": "simplified"
      },
      {
        "letter": "C",
        "text": "complicated"
      },
      {
        "letter": "D",
        "text": "concluded"
      }
    ],
    "answer": "C",
    "explanation": "'Far from settling' plus new unforeseen questions means the data made the question more tangled—complicated. C fits.",
    "whyWrong": {
      "A": "'Resolved' contradicts 'far from settling the question.'",
      "B": "'Simplified' is the opposite of opening new lines of inquiry.",
      "D": "'Concluded' would end the inquiry, but it expanded."
    }
  },
  {
    "id": "words-context-t3-12",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "text": "The following text is from an essay on architecture.\n\nThe building's grandeur is deceptive; its soaring columns are ______, hollow shells of painted plaster that support nothing and merely gesture at the solidity of stone.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "structural"
      },
      {
        "letter": "B",
        "text": "ornamental"
      },
      {
        "letter": "C",
        "text": "ancient"
      },
      {
        "letter": "D",
        "text": "massive"
      }
    ],
    "answer": "B",
    "explanation": "Columns that support nothing and only 'gesture at' solidity are decorative—ornamental. B fits.",
    "whyWrong": {
      "A": "'Structural' contradicts columns that 'support nothing.'",
      "C": "'Ancient' concerns age, not their decorative, non-supporting role.",
      "D": "'Massive' contradicts 'hollow shells of painted plaster.'"
    }
  },
  {
    "id": "structure-t1-07",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from an article about volcanoes.\n\nMost people picture a volcano as a mountain that suddenly explodes. In truth, many volcanoes erupt gently for years, with lava seeping out slowly and rarely threatening anyone. The dramatic blast is only one of the ways a volcano can behave.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It corrects a common assumption by presenting a fuller picture."
      },
      {
        "letter": "B",
        "text": "It lists the steps of a volcanic eruption in order."
      },
      {
        "letter": "C",
        "text": "It compares two different mountains."
      },
      {
        "letter": "D",
        "text": "It argues that volcanoes should be avoided."
      }
    ],
    "answer": "A",
    "explanation": "The text states a common belief (sudden explosion), then corrects it with the reality of gentle eruptions. A fits.",
    "whyWrong": {
      "B": "No ordered steps of an eruption are listed.",
      "C": "It discusses volcanoes generally, not two specific mountains.",
      "D": "It never advises avoiding volcanoes."
    }
  },
  {
    "id": "structure-t1-08",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from a profile of a chef.\n\nGrowing up, Marco hated the crowded family kitchen and swore he would never cook for a living. Years later, running his own restaurant, he laughs at that promise. The very noise and chaos he once fled, he says, are what he now loves most about his work.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It presents a scientific hypothesis and tests it."
      },
      {
        "letter": "B",
        "text": "It contrasts an earlier attitude with a later, opposite one."
      },
      {
        "letter": "C",
        "text": "It lists a recipe's ingredients."
      },
      {
        "letter": "D",
        "text": "It describes a single day in the restaurant."
      }
    ],
    "answer": "B",
    "explanation": "The text sets Marco's youthful vow against his opposite feelings today. B captures that contrast.",
    "whyWrong": {
      "A": "No hypothesis is proposed or tested.",
      "C": "No ingredients or recipe appear.",
      "D": "It spans years, not a single day."
    }
  },
  {
    "id": "structure-t1-09",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from an article about bridges.\n\nEngineers faced a stubborn problem: the river was too wide for a single span, yet the riverbed was too soft to hold heavy supports in the middle. Their solution was a series of lightweight arches, each resting on shallow footings that spread the weight without sinking.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It presents a problem and then describes a solution."
      },
      {
        "letter": "B",
        "text": "It compares two rivers."
      },
      {
        "letter": "C",
        "text": "It lists famous bridges in history."
      },
      {
        "letter": "D",
        "text": "It defines the word 'arch.'"
      }
    ],
    "answer": "A",
    "explanation": "The text states the engineering problem (wide river, soft bed), then gives the solution (lightweight arches on shallow footings). A fits.",
    "whyWrong": {
      "B": "Only one river is discussed.",
      "C": "No historical bridges are listed.",
      "D": "It does not define 'arch.'"
    }
  },
  {
    "id": "structure-t1-10",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from a nature essay.\n\nAt first the meadow seems a single sheet of green. Kneel closer, though, and it separates into dozens of distinct plants—clover, fescue, plantain, sorrel—each with its own leaf and habit, all woven into what from standing height looked like one thing.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It argues for protecting meadows."
      },
      {
        "letter": "B",
        "text": "It moves from a distant impression to a closer, more detailed view."
      },
      {
        "letter": "C",
        "text": "It traces the meadow's changes across seasons."
      },
      {
        "letter": "D",
        "text": "It compares a meadow to a forest."
      }
    ],
    "answer": "B",
    "explanation": "The text shifts from the far view (a sheet of green) to the close view (distinct plants). B captures that movement in perspective.",
    "whyWrong": {
      "A": "No argument for protection is made.",
      "C": "It describes one moment, not seasonal change.",
      "D": "No forest is mentioned."
    }
  },
  {
    "id": "structure-t1-11",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from an article about sleep.\n\nWe often treat sleep as lost time, hours subtracted from a busy life. Yet during those hours the brain is far from idle: it sorts the day's memories, clears away waste, and readies itself for what comes next. Sleep is less a pause than a kind of work.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It challenges a common view and offers a reinterpretation."
      },
      {
        "letter": "B",
        "text": "It gives instructions for sleeping better."
      },
      {
        "letter": "C",
        "text": "It compares two people's sleep schedules."
      },
      {
        "letter": "D",
        "text": "It lists the stages of sleep in order."
      }
    ],
    "answer": "A",
    "explanation": "The text names a common view (sleep is lost time), then reinterprets it as productive work. A fits.",
    "whyWrong": {
      "B": "No sleep tips are given.",
      "C": "No two schedules are compared.",
      "D": "The stages of sleep are not listed."
    }
  },
  {
    "id": "structure-t1-12",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "text": "The following text is from a story.\n\nThe letter sat unopened on the table for three days. Tomas would pick it up, turn it over, and set it down again, telling himself he would read it later. On the fourth morning, before he could talk himself out of it, he tore the envelope open.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It builds through a period of delay to a moment of action."
      },
      {
        "letter": "B",
        "text": "It compares two letters."
      },
      {
        "letter": "C",
        "text": "It explains how to write a letter."
      },
      {
        "letter": "D",
        "text": "It lists reasons letters are important."
      }
    ],
    "answer": "A",
    "explanation": "The text lingers on Tomas's days of hesitation, then arrives at the moment he finally opens the letter. A captures that build to action.",
    "whyWrong": {
      "B": "Only one letter is involved.",
      "C": "It does not explain letter-writing.",
      "D": "No list of reasons appears."
    }
  },
  {
    "id": "structure-t2-07",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from an essay on technology.\n\nThe printing press is usually celebrated for spreading knowledge, and rightly so. But the same machine that carried new ideas also carried old errors faster and farther than before, reproducing a mistaken map or a false rumor in thousands of identical copies. Its power, in other words, was indifferent to the truth of what it printed.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It acknowledges a familiar praise and then complicates it."
      },
      {
        "letter": "B",
        "text": "It lists the parts of a printing press."
      },
      {
        "letter": "C",
        "text": "It compares two inventors."
      },
      {
        "letter": "D",
        "text": "It gives directions for printing a book."
      }
    ],
    "answer": "A",
    "explanation": "The text grants the usual praise for the press, then complicates it by noting it spread errors just as fast. A fits.",
    "whyWrong": {
      "B": "No parts of the press are described.",
      "C": "No inventors are compared.",
      "D": "It gives no printing instructions."
    }
  },
  {
    "id": "structure-t2-08",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from an article about medicine.\n\nFor decades, doctors assumed that ulcers were caused by stress and diet. Then two researchers proposed that a bacterium was to blame—an idea so unexpected that one of them swallowed the microbe himself to prove it could sicken a healthy person. His illness, and his recovery after treatment, helped overturn the older explanation.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It presents an established belief, then a challenge that displaced it."
      },
      {
        "letter": "B",
        "text": "It lists symptoms of ulcers."
      },
      {
        "letter": "C",
        "text": "It compares two unrelated diseases."
      },
      {
        "letter": "D",
        "text": "It argues that stress is harmless."
      }
    ],
    "answer": "A",
    "explanation": "The text gives the old stress-and-diet belief, then the bacterial challenge that overturned it. A fits.",
    "whyWrong": {
      "B": "It does not list ulcer symptoms.",
      "C": "Only ulcers are discussed.",
      "D": "It never claims stress is harmless."
    }
  },
  {
    "id": "structure-t2-09",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from a biography.\n\nRosa spent her twenties translating other writers, a job she found both humbling and instructive. It taught her to weigh every word, to feel how a sentence balanced. When she finally turned to her own fiction, readers marveled at her precise, unwasteful prose—never guessing where that discipline had been learned.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It presents two opposing arguments and weighs them."
      },
      {
        "letter": "B",
        "text": "It connects an early apprenticeship to a later strength."
      },
      {
        "letter": "C",
        "text": "It lists the books Rosa translated."
      },
      {
        "letter": "D",
        "text": "It describes a disagreement between two writers."
      }
    ],
    "answer": "B",
    "explanation": "The text ties Rosa's years of translation to the precise prose readers later admired. B captures that cause-and-later-effect link.",
    "whyWrong": {
      "A": "No opposing arguments are weighed.",
      "C": "No specific translated books are listed.",
      "D": "There is no disagreement between writers."
    }
  },
  {
    "id": "structure-t2-10",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from an article about cities.\n\nThe plan promised to ease congestion by widening the highway. For a year it worked. But the extra lanes, by making driving easier, drew still more drivers onto the road, until the highway was as clogged as before—only wider. The fix had quietly undone itself.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It describes a solution that produced the very problem it aimed to solve."
      },
      {
        "letter": "B",
        "text": "It lists the costs of building a highway."
      },
      {
        "letter": "C",
        "text": "It compares two different cities' traffic."
      },
      {
        "letter": "D",
        "text": "It explains how to drive in heavy traffic."
      }
    ],
    "answer": "A",
    "explanation": "The text traces how widening the road drew more drivers and restored the congestion it was meant to cure. A fits.",
    "whyWrong": {
      "B": "No construction costs are listed.",
      "C": "Only one highway is discussed.",
      "D": "It gives no driving advice."
    }
  },
  {
    "id": "structure-t2-11",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from a science article.\n\nA single ant seems almost mindless, wandering with no plan. Watch the colony, though, and order emerges: without any leader directing them, thousands of these simple wanderers together build tunnels, farm fungus, and defend a nest. Intelligence here belongs not to the individual but to the crowd.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It moves from a limited view of one ant to a broader claim about the colony."
      },
      {
        "letter": "B",
        "text": "It lists the tasks of a single ant."
      },
      {
        "letter": "C",
        "text": "It compares ants with bees."
      },
      {
        "letter": "D",
        "text": "It argues that ants are harmful pests."
      }
    ],
    "answer": "A",
    "explanation": "The text starts with the seemingly mindless single ant, then widens to the colony's collective intelligence. A captures that shift.",
    "whyWrong": {
      "B": "It contrasts one ant with the colony rather than listing an ant's tasks.",
      "C": "Bees are never mentioned.",
      "D": "It does not call ants pests."
    }
  },
  {
    "id": "structure-t2-12",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "text": "The following text is from an essay on reading.\n\nWe like to think we choose our books freely. Yet each title we finish shapes the next one we reach for—an image lingers, a question opens, a name recurs—so that our reading forms less a series of separate choices than a single, branching path we only half-consciously follow.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It questions an assumption and replaces it with a more connected picture."
      },
      {
        "letter": "B",
        "text": "It lists recommended books to read."
      },
      {
        "letter": "C",
        "text": "It describes how a book is printed."
      },
      {
        "letter": "D",
        "text": "It compares two authors' styles."
      }
    ],
    "answer": "A",
    "explanation": "The text questions the idea of freely chosen books, then offers the picture of reading as a connected, branching path. A fits.",
    "whyWrong": {
      "B": "No books are recommended.",
      "C": "Printing is not discussed.",
      "D": "No two authors are compared."
    }
  },
  {
    "id": "structure-t3-07",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from an essay on justice.\n\nThe law, we are told, treats everyone the same. That neutrality is its pride—and, the essay argues, sometimes its blindness. For a rule applied identically to people in unequal situations does not erase the inequality; it can quietly entrench it, dressing an unequal outcome in the language of fairness.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It praises a principle and then shows how that same principle can undercut its own aim."
      },
      {
        "letter": "B",
        "text": "It lists the branches of government."
      },
      {
        "letter": "C",
        "text": "It compares two court cases in detail."
      },
      {
        "letter": "D",
        "text": "It explains how a law is passed."
      }
    ],
    "answer": "A",
    "explanation": "The text names the law's prized neutrality, then argues that same neutrality can entrench inequality. A captures the turn from pride to critique.",
    "whyWrong": {
      "B": "Government branches are not listed.",
      "C": "No specific cases are compared.",
      "D": "The lawmaking process is not described."
    }
  },
  {
    "id": "structure-t3-08",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from a literary essay.\n\nThe narrator insists, again and again, that he feels nothing at his brother's funeral—that he is calm, detached, unmoved. Yet the prose around these denials grows clipped and breathless, sentences fracturing mid-thought. The story's meaning lives precisely in the gap between what the narrator claims and what his own voice betrays.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It identifies a tension between a character's stated feelings and the way they are expressed."
      },
      {
        "letter": "B",
        "text": "It summarizes the plot of the story in order."
      },
      {
        "letter": "C",
        "text": "It compares the narrator to his brother."
      },
      {
        "letter": "D",
        "text": "It lists the story's settings."
      }
    ],
    "answer": "A",
    "explanation": "The text sets the narrator's claim of feeling nothing against the fracturing prose that reveals otherwise, locating meaning in that gap. A fits.",
    "whyWrong": {
      "B": "It analyzes a tension, not a plot summary.",
      "C": "The brother is barely mentioned; no comparison is drawn.",
      "D": "Settings are not listed."
    }
  },
  {
    "id": "structure-t3-09",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from an essay on progress.\n\nEach generation tends to measure progress by the problems it has solved. But the essay proposes a different yardstick: the quality of the new problems a solution creates. A society that cures one disease only to face the harder questions its cure raises has not stalled, on this view—it has advanced to a more demanding stage of its own inquiry.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It replaces one measure of progress with an unexpected alternative and explains the new measure."
      },
      {
        "letter": "B",
        "text": "It lists diseases that have been cured."
      },
      {
        "letter": "C",
        "text": "It compares two generations' technologies."
      },
      {
        "letter": "D",
        "text": "It argues that progress is impossible."
      }
    ],
    "answer": "A",
    "explanation": "The text swaps the usual yardstick (problems solved) for a new one (the quality of new problems) and explains it. A fits.",
    "whyWrong": {
      "B": "No diseases are listed.",
      "C": "No technologies are compared.",
      "D": "It reframes progress rather than denying it."
    }
  },
  {
    "id": "structure-t3-10",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from a history of ideas.\n\nMap in hand, the young naturalist set out to catalog every species on the island, certain the task had a limit he would one day reach. Decades later, his notebooks filled a room, and the list was longer than ever—not because he had failed, but because each answered question had bred a dozen new ones. Completion, he came to see, was never the point.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It follows a figure's expectation and its reversal, ending in a changed understanding."
      },
      {
        "letter": "B",
        "text": "It lists the species the naturalist found."
      },
      {
        "letter": "C",
        "text": "It compares two islands."
      },
      {
        "letter": "D",
        "text": "It explains how to make a map."
      }
    ],
    "answer": "A",
    "explanation": "The text traces the naturalist's early certainty of a finishable task to his later realization that completion was never the point. A captures that arc of reversal.",
    "whyWrong": {
      "B": "No species are listed.",
      "C": "Only one island appears.",
      "D": "Mapmaking is not explained."
    }
  },
  {
    "id": "structure-t3-11",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from an essay on memory and place.\n\nReturning after thirty years, she expected the town to feel smaller, and it did. What surprised her was that the shrinking ran the other way too: the vast, frightening square of her childhood was now a modest courtyard, but the modest courtyard had swallowed the enormous square, leaving her unsure which version was the real one.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It sets up an expected observation and then deepens it into a more unsettling paradox."
      },
      {
        "letter": "B",
        "text": "It lists the buildings around the square."
      },
      {
        "letter": "C",
        "text": "It compares two different towns."
      },
      {
        "letter": "D",
        "text": "It gives directions to the square."
      }
    ],
    "answer": "A",
    "explanation": "The text begins with the expected 'smaller' impression, then turns it into a disorienting paradox about which version is real. A fits.",
    "whyWrong": {
      "B": "No buildings are listed.",
      "C": "Only one town is involved.",
      "D": "No directions are given."
    }
  },
  {
    "id": "structure-t3-12",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from an essay on craft.\n\nThe apprentice imagines mastery as the moment the rules fall away, when the maker finally works on instinct alone. His teacher gently corrects him: the rules do not vanish with mastery but sink beneath awareness, still guiding every motion. Freedom, she says, is not the absence of the rules but their becoming second nature.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It states a belief held by one figure and then presents another's correction of it."
      },
      {
        "letter": "B",
        "text": "It lists the steps of learning a craft."
      },
      {
        "letter": "C",
        "text": "It compares two crafts."
      },
      {
        "letter": "D",
        "text": "It argues that rules should be abolished."
      }
    ],
    "answer": "A",
    "explanation": "The text gives the apprentice's belief about mastery, then the teacher's correcting reinterpretation of freedom. A fits.",
    "whyWrong": {
      "B": "No sequential steps are listed.",
      "C": "No two crafts are compared.",
      "D": "The teacher reframes the rules rather than abolishing them."
    }
  },
  {
    "id": "cross-text-t1-07",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1\nZoos play a vital role in conservation. By breeding endangered animals in safety, they keep species alive that might otherwise vanish from the wild entirely.\n\nText 2\nNo enclosure, however well designed, can match the range an animal would roam in the wild. Keeping large species in confined spaces, some argue, sacrifices their well-being for human purposes.\n\nBased on the texts, both authors would most likely agree with which statement?",
    "choices": [
      {
        "letter": "A",
        "text": "Zoos have a significant effect on the animals they hold."
      },
      {
        "letter": "B",
        "text": "Zoos should be closed immediately."
      },
      {
        "letter": "C",
        "text": "Zoos are unable to breed endangered animals."
      },
      {
        "letter": "D",
        "text": "Wild animals are better off in every zoo."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 stresses zoos' conservation impact; Text 2 stresses their impact on well-being. Both agree zoos affect their animals significantly. A fits.",
    "whyWrong": {
      "B": "Only Text 2 is critical, and it does not call for immediate closure.",
      "C": "Text 1 says zoos successfully breed endangered animals.",
      "D": "Text 2 disputes that confinement is good for animals."
    }
  },
  {
    "id": "cross-text-t1-08",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1\nHomework reinforces what students learn in class. Practicing on their own helps children build the discipline and skills that classroom time alone cannot provide.\n\nText 2\nAfter a full day of school, children need time to rest, play, and be with family. Piling on homework, research suggests, offers little benefit and much stress for younger students.\n\nWhich choice best describes the relationship between the two texts?",
    "choices": [
      {
        "letter": "A",
        "text": "Text 2 offers a view that conflicts with the position in Text 1."
      },
      {
        "letter": "B",
        "text": "Text 2 provides evidence that proves Text 1 correct."
      },
      {
        "letter": "C",
        "text": "Text 2 restates the same argument as Text 1."
      },
      {
        "letter": "D",
        "text": "Text 2 is about a completely unrelated topic."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 praises homework; Text 2 questions its value for young children. Text 2 conflicts with Text 1. A fits.",
    "whyWrong": {
      "B": "Text 2 undercuts, rather than proves, Text 1.",
      "C": "The two texts take opposing positions, not the same one.",
      "D": "Both texts are about homework."
    }
  },
  {
    "id": "cross-text-t1-09",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1\nElectric cars are a clear win for the environment. Because they burn no gasoline, they release no exhaust as they drive.\n\nText 2\nAn electric car is only as clean as the electricity that charges it. Where power comes largely from coal, the pollution simply moves from the tailpipe to the power plant.\n\nBased on the texts, how would the author of Text 2 most likely respond to the claim in Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "By noting that an electric car's cleanliness depends on how its electricity is produced."
      },
      {
        "letter": "B",
        "text": "By agreeing that electric cars produce no pollution of any kind."
      },
      {
        "letter": "C",
        "text": "By arguing that electric cars burn more gasoline than regular cars."
      },
      {
        "letter": "D",
        "text": "By claiming that electric cars cannot be charged at all."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 argues an electric car is only as clean as its power source. It would answer Text 1 by pointing to how the electricity is generated. A fits.",
    "whyWrong": {
      "B": "Text 2 disputes the 'no pollution' claim.",
      "C": "Text 2 never says electric cars burn gasoline.",
      "D": "Text 2 assumes the cars are charged, just from varied sources."
    }
  },
  {
    "id": "cross-text-t1-10",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1\nSocial media keeps people connected. Friends and relatives separated by great distances can share news and photos instantly, staying part of one another's daily lives.\n\nText 2\nScrolling through others' highlight reels can leave people feeling left out and inadequate, lonelier after logging off than before.\n\nBased on the texts, the two authors would most likely disagree about whether social media",
    "choices": [
      {
        "letter": "A",
        "text": "on balance helps people feel more connected to others."
      },
      {
        "letter": "B",
        "text": "is used by people around the world."
      },
      {
        "letter": "C",
        "text": "allows people to share photos."
      },
      {
        "letter": "D",
        "text": "exists at all."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 says social media connects people; Text 2 says it can leave them lonelier. They disagree about whether it helps people feel connected. A fits.",
    "whyWrong": {
      "B": "Neither text disputes its global use.",
      "C": "Text 1 mentions sharing photos and Text 2 does not deny it.",
      "D": "Both texts assume social media exists."
    }
  },
  {
    "id": "cross-text-t1-11",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1\nCities should build more bike lanes. They give people a cheap, healthy way to travel and take cars off crowded streets.\n\nText 2\nBike lanes sound appealing, but in our hilly, rainy city few people will ride year-round. The space might serve more residents as wider sidewalks or bus lanes.\n\nWhich choice best describes the relationship between the two texts?",
    "choices": [
      {
        "letter": "A",
        "text": "Text 2 questions whether the benefit Text 1 promotes will apply in a particular setting."
      },
      {
        "letter": "B",
        "text": "Text 2 fully supports building the bike lanes Text 1 recommends."
      },
      {
        "letter": "C",
        "text": "Text 2 argues that cars should be banned."
      },
      {
        "letter": "D",
        "text": "Text 2 repeats Text 1's argument in different words."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 favors bike lanes generally; Text 2 doubts they will work in a hilly, rainy city. Text 2 questions the benefit in that setting. A fits.",
    "whyWrong": {
      "B": "Text 2 is skeptical, not supportive.",
      "C": "Text 2 never calls for banning cars.",
      "D": "Text 2 opposes rather than restates Text 1."
    }
  },
  {
    "id": "cross-text-t1-12",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "text": "Text 1\nReading printed books is best for deep focus. Without the pings and links of a screen, a reader can sink fully into a story.\n\nText 2\nE-readers let people carry a whole library in one hand, adjust text size for tired eyes, and download a book anywhere. For many readers, that convenience is priceless.\n\nBased on the texts, both authors would most likely agree that",
    "choices": [
      {
        "letter": "A",
        "text": "the format in which people read can shape their reading experience."
      },
      {
        "letter": "B",
        "text": "printed books will soon disappear."
      },
      {
        "letter": "C",
        "text": "no one enjoys reading on screens."
      },
      {
        "letter": "D",
        "text": "e-readers cannot store more than one book."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 favors print for focus; Text 2 favors e-readers for convenience. Both treat the format as shaping the reading experience. A fits.",
    "whyWrong": {
      "B": "Neither text predicts print's disappearance.",
      "C": "Text 2 praises screen reading, so this is false.",
      "D": "Text 2 says an e-reader holds a whole library."
    }
  },
  {
    "id": "cross-text-t2-07",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1\nThe historian argues that the city's rapid growth in the 1880s was driven mainly by the new railroad, which let goods and people move in and out cheaply for the first time.\n\nText 2\nRailroads mattered, but the city grew because of its river port, which had drawn merchants for decades before any track was laid. The railroad accelerated a boom already underway.\n\nBased on the texts, how would the author of Text 2 most likely characterize the explanation in Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "As overstating the railroad's role by ignoring an earlier cause of growth."
      },
      {
        "letter": "B",
        "text": "As correct that the railroad was the sole cause of growth."
      },
      {
        "letter": "C",
        "text": "As wrong to think the railroad affected the city at all."
      },
      {
        "letter": "D",
        "text": "As focused on the wrong century entirely."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 credits the river port as the earlier driver and says the railroad only accelerated an existing boom, so it sees Text 1 as overstating the railroad. A fits.",
    "whyWrong": {
      "B": "Text 2 denies the railroad was the sole cause.",
      "C": "Text 2 agrees railroads mattered and accelerated growth.",
      "D": "Both texts concern the same period."
    }
  },
  {
    "id": "cross-text-t2-08",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1\nStudies of a songbird found that males with the most elaborate songs attracted the most mates, suggesting that females prefer complex songs as a sign of a fit partner.\n\nText 2\nIn our population of the same species, song complexity and mating success were unrelated. What mattered was territory quality: males holding the richest feeding grounds mated most, whatever their songs sounded like.\n\nBased on the texts, the findings in Text 2 most directly complicate which idea from Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "That song complexity itself is what drives female choice."
      },
      {
        "letter": "B",
        "text": "That the songbird sings at all."
      },
      {
        "letter": "C",
        "text": "That males compete for mates."
      },
      {
        "letter": "D",
        "text": "That females of the species exist."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 says complex song drives female choice; Text 2 finds song irrelevant and territory decisive, complicating the song-preference idea. A fits.",
    "whyWrong": {
      "B": "Both texts assume the birds sing.",
      "C": "Neither text disputes that males compete.",
      "D": "Both texts refer to females; that is not in question."
    }
  },
  {
    "id": "cross-text-t2-09",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1\nRemote learning can widen access to education, letting students in distant or underserved areas take courses that were never available to them locally.\n\nText 2\nThe promise of remote learning depends on reliable internet and quiet study space—resources unevenly distributed. Without them, online courses may widen the very gaps they claim to close.\n\nBased on the texts, the author of Text 2 would most likely add which caution to the claim in Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "That remote learning widens access only for students who have the needed resources."
      },
      {
        "letter": "B",
        "text": "That remote learning has no benefits whatsoever."
      },
      {
        "letter": "C",
        "text": "That distant areas do not need education."
      },
      {
        "letter": "D",
        "text": "That online courses cannot be created."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 warns that access depends on internet and study space, so it would qualify Text 1: the benefit reaches only students with those resources. A fits.",
    "whyWrong": {
      "B": "Text 2 acknowledges a 'promise,' not zero benefit.",
      "C": "Text 2 never says distant areas do not need education.",
      "D": "Text 2 assumes online courses exist."
    }
  },
  {
    "id": "cross-text-t2-10",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1\nThe novelist claimed she never planned her books, discovering the plot only as she wrote. She saw outlining as a cage that would kill a story's spontaneity.\n\nText 2\nA later biographer found detailed chapter outlines among the novelist's papers, some heavily revised before she began drafting. Her image as a purely intuitive writer, it seems, was partly a myth she cultivated.\n\nBased on the texts, the evidence in Text 2 most directly challenges which claim in Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "That the novelist wrote without any planning."
      },
      {
        "letter": "B",
        "text": "That the novelist wrote novels."
      },
      {
        "letter": "C",
        "text": "That the novelist valued spontaneity in fiction."
      },
      {
        "letter": "D",
        "text": "That the novelist kept papers."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 has the novelist claim she never planned; Text 2's discovery of detailed outlines directly contradicts that no-planning claim. A fits.",
    "whyWrong": {
      "B": "Both texts agree she wrote novels.",
      "C": "Text 2 does not dispute what she valued, only whether she planned.",
      "D": "Her keeping papers is how Text 2 makes its case, not what it challenges."
    }
  },
  {
    "id": "cross-text-t2-11",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1\nPlanting trees is among the simplest ways to fight climate change. As they grow, trees pull carbon dioxide from the air and lock it away in wood.\n\nText 2\nWhere and what we plant matters enormously. Trees planted in the wrong place—darkening once-reflective snowfields, for instance—can trap more heat than the carbon they store offsets.\n\nBased on the texts, the author of Text 2 would most likely respond to Text 1 by",
    "choices": [
      {
        "letter": "A",
        "text": "cautioning that tree planting helps only when done in suitable locations."
      },
      {
        "letter": "B",
        "text": "denying that trees absorb carbon dioxide."
      },
      {
        "letter": "C",
        "text": "arguing that no trees should ever be planted."
      },
      {
        "letter": "D",
        "text": "claiming that climate change is not real."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 stresses that location and species matter and that poorly placed trees can backfire, so it would qualify Text 1 as helpful only in suitable places. A fits.",
    "whyWrong": {
      "B": "Text 2 accepts that trees store carbon.",
      "C": "Text 2 warns about placement, not against all planting.",
      "D": "Text 2 treats climate change as real."
    }
  },
  {
    "id": "cross-text-t2-12",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "text": "Text 1\nRaising the minimum wage lifts workers out of poverty. When the lowest-paid earn more, they can better afford housing, food, and other necessities.\n\nText 2\nSupporters point to higher paychecks, but some employers respond by cutting hours or hiring fewer people. Whether workers gain overall depends on how these effects balance out.\n\nBased on the texts, the author of Text 2 differs from the author of Text 1 mainly by",
    "choices": [
      {
        "letter": "A",
        "text": "emphasizing that a wage increase can have offsetting effects on workers."
      },
      {
        "letter": "B",
        "text": "denying that low-paid workers exist."
      },
      {
        "letter": "C",
        "text": "arguing that wages should be lowered."
      },
      {
        "letter": "D",
        "text": "claiming that housing and food are unimportant."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 sees the wage increase as straightforwardly helpful; Text 2 stresses offsetting effects like cut hours, so it differs by weighing both sides. A fits.",
    "whyWrong": {
      "B": "Text 2 assumes low-paid workers exist.",
      "C": "Text 2 does not call for lowering wages.",
      "D": "Neither text dismisses necessities."
    }
  },
  {
    "id": "cross-text-t3-07",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1\nThe economist argues that automation ultimately creates more jobs than it destroys. Each wave of machinery, from looms to computers, has displaced some workers while opening new industries that employ far more.\n\nText 2\nHistory offers comfort only in the long run. In the decades between a technology's arrival and the rise of the jobs that replace the old ones, real workers can face lasting hardship. An aggregate gain spread over generations is little consolation to those displaced within a single lifetime.\n\nBased on the texts, the author of Text 2 would most likely say that Text 1's argument",
    "choices": [
      {
        "letter": "A",
        "text": "overlooks the hardship experienced during the transition, even if the long-term total is positive."
      },
      {
        "letter": "B",
        "text": "is wrong that new industries ever emerge from automation."
      },
      {
        "letter": "C",
        "text": "understates how quickly displaced workers find new jobs."
      },
      {
        "letter": "D",
        "text": "correctly proves that automation harms workers permanently."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 accepts the long-run gain but stresses hardship in the intervening decades, so it faults Text 1 for overlooking the transition. A fits.",
    "whyWrong": {
      "B": "Text 2 grants that replacement jobs eventually arise.",
      "C": "Text 2 argues the opposite—that the wait can be long and painful.",
      "D": "Text 2 sees the harm as transitional, not permanent."
    }
  },
  {
    "id": "cross-text-t3-08",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1\nThe curator defends displaying the ancient mosaics in the national museum, where climate control and expert care preserve them and millions of visitors can study them safely.\n\nText 2\nA mosaic removed from the courtyard it was made for loses part of its meaning. Preserved perfectly but severed from its place, it becomes a beautiful fragment of a story no longer whole.\n\nBased on the texts, the disagreement between the two authors is best described as a difference over whether",
    "choices": [
      {
        "letter": "A",
        "text": "physical preservation or preservation of an object's original context should take priority."
      },
      {
        "letter": "B",
        "text": "the mosaics are genuinely ancient."
      },
      {
        "letter": "C",
        "text": "museums should charge admission."
      },
      {
        "letter": "D",
        "text": "the mosaics are beautiful."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 prizes physical preservation and access; Text 2 prizes the mosaic's original context. The disagreement is over which should take priority. A fits.",
    "whyWrong": {
      "B": "Both treat the mosaics as ancient.",
      "C": "Admission fees are not discussed.",
      "D": "Text 2 calls the mosaic beautiful; beauty is not the dispute."
    }
  },
  {
    "id": "cross-text-t3-09",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1\nThe researcher concludes that the community's remarkable longevity stems from its traditional diet, rich in vegetables, beans, and fish and low in processed food.\n\nText 2\nDiet is surely part of the story, but the same community is marked by tight social bonds, daily physical labor, and low stress. Isolating the diet as the cause risks crediting one thread for a pattern woven from many.\n\nBased on the texts, the author of Text 2 responds to Text 1 primarily by",
    "choices": [
      {
        "letter": "A",
        "text": "arguing that the single cause Text 1 identifies is likely one of several interacting factors."
      },
      {
        "letter": "B",
        "text": "denying that the community is unusually long-lived."
      },
      {
        "letter": "C",
        "text": "claiming that diet has no effect on health."
      },
      {
        "letter": "D",
        "text": "insisting that social bonds are the sole cause."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 grants diet's role but adds social bonds, labor, and low stress, warning against crediting one thread, so it recasts the cause as multiple factors. A fits.",
    "whyWrong": {
      "B": "Text 2 accepts the community's longevity.",
      "C": "Text 2 says diet is 'surely part of the story.'",
      "D": "Text 2 avoids naming any single sole cause."
    }
  },
  {
    "id": "cross-text-t3-10",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1\nThe philosopher maintains that a promise binds absolutely: once given, it must be kept, whatever the cost, for a promise made conditional on convenience is no promise at all.\n\nText 2\nSurely a promise to meet a friend does not bind me if keeping it means ignoring a stranger bleeding at my feet. A promise carries real weight, but weight is not the same as absolute command.\n\nBased on the texts, the author of Text 2 would most likely argue that the position in Text 1",
    "choices": [
      {
        "letter": "A",
        "text": "treats a promise as more unconditional than competing moral demands allow."
      },
      {
        "letter": "B",
        "text": "is right that promises can never be broken for any reason."
      },
      {
        "letter": "C",
        "text": "wrongly claims that promises have no weight at all."
      },
      {
        "letter": "D",
        "text": "concerns a topic unrelated to promises."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 argues a promise can yield to a greater moral demand, so it sees Text 1 as making promises too unconditional. A fits.",
    "whyWrong": {
      "B": "Text 2 rejects the never-broken view.",
      "C": "Text 2 says a promise carries 'real weight.'",
      "D": "Both texts are about promises."
    }
  },
  {
    "id": "cross-text-t3-11",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1\nThe editor argues that a great translation should read as though originally written in the new language, its foreign origins invisible, so that nothing interrupts the reader's flow.\n\nText 2\nTo smooth every strangeness away is to quietly erase the source culture, delivering a text that flatters the reader's expectations while hiding how differently the original saw the world. Some friction, kept deliberately, is a form of honesty.\n\nBased on the texts, the two authors most fundamentally disagree about whether a translation should",
    "choices": [
      {
        "letter": "A",
        "text": "conceal or preserve the marks of the original language and culture."
      },
      {
        "letter": "B",
        "text": "be published at all."
      },
      {
        "letter": "C",
        "text": "be read by many people."
      },
      {
        "letter": "D",
        "text": "contain any words from the new language."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 wants foreign origins made invisible; Text 2 wants some strangeness preserved as honesty. They disagree over concealing versus preserving those marks. A fits.",
    "whyWrong": {
      "B": "Neither questions whether translations should be published.",
      "C": "Readership size is not the dispute.",
      "D": "Both assume the translation is in the new language."
    }
  },
  {
    "id": "cross-text-t3-12",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1\nThe biologist argues that labeling animal behavior with human emotions—saying an elephant 'grieves,' for instance—is unscientific, projecting our feelings onto creatures whose inner lives we cannot access.\n\nText 2\nRefusing all such language has its own bias. When an elephant returns for years to a dead companion's bones, insisting we call this anything but grief may reveal less caution than a stubborn wish to keep humans unique.\n\nBased on the texts, the author of Text 2 suggests that the caution urged in Text 1 may",
    "choices": [
      {
        "letter": "A",
        "text": "reflect its own assumption rather than pure objectivity."
      },
      {
        "letter": "B",
        "text": "be the only truly scientific approach."
      },
      {
        "letter": "C",
        "text": "prove that animals have no inner lives."
      },
      {
        "letter": "D",
        "text": "show that elephants do not return to bones."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 argues that refusing emotional language can mask a 'stubborn wish to keep humans unique,' so Text 1's caution carries its own bias. A fits.",
    "whyWrong": {
      "B": "Text 2 questions, rather than endorses, that caution as the scientific standard.",
      "C": "Text 2 leans toward animals having inner lives.",
      "D": "Text 2 cites elephants returning to bones as fact."
    }
  },
  {
    "id": "words-context-t2-13",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "text": "The following text is from an article about design.\n\nThe engineer favored ______ solutions, stripping each device to the fewest possible parts so that there was less to break and less to explain.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "elaborate"
      },
      {
        "letter": "B",
        "text": "spare"
      },
      {
        "letter": "C",
        "text": "expensive"
      },
      {
        "letter": "D",
        "text": "decorative"
      }
    ],
    "answer": "B",
    "explanation": "Stripping devices to the fewest parts describes spare, minimal design. B fits.",
    "whyWrong": {
      "A": "'Elaborate' means complex, the opposite of the fewest parts.",
      "C": "'Expensive' concerns cost, not simplicity.",
      "D": "'Decorative' concerns ornament, not paring down."
    }
  },
  {
    "id": "structure-t3-13",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "text": "The following text is from an essay on cities.\n\nWe map a city by its landmarks—the tower, the bridge, the square. But ask residents how they find their way, and the landmarks recede: they steer by a certain bakery's smell, a stretch of uneven pavement, the corner where the wind always turns cold. The official map and the lived one, it seems, are rarely the same city.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It contrasts a formal way of knowing a place with an informal, experiential one."
      },
      {
        "letter": "B",
        "text": "It lists the landmarks of a famous city."
      },
      {
        "letter": "C",
        "text": "It gives directions to the city square."
      },
      {
        "letter": "D",
        "text": "It argues that maps should be redrawn."
      }
    ],
    "answer": "A",
    "explanation": "The text sets the landmark 'official map' against residents' sensory, lived navigation, concluding they differ. A captures that contrast.",
    "whyWrong": {
      "B": "The landmarks are examples, not the point; no famous city is catalogued.",
      "C": "No directions are given.",
      "D": "It observes the two maps differ, not that maps must be redrawn."
    }
  },
  {
    "id": "cross-text-t3-13",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "text": "Text 1\nThe scholar argues that folktales survive because they carry practical lessons—warnings about danger, models of clever problem-solving—that helped listeners live better.\n\nText 2\nMany enduring tales teach nothing usable at all; their heroes succeed by luck or magic no listener could imitate. What such stories offer is not instruction but delight, and delight alone can be enough to keep a tale alive.\n\nBased on the texts, the author of Text 2 would most likely respond to Text 1 by",
    "choices": [
      {
        "letter": "A",
        "text": "contending that a tale's survival need not depend on any practical lesson."
      },
      {
        "letter": "B",
        "text": "agreeing that all folktales teach useful skills."
      },
      {
        "letter": "C",
        "text": "denying that folktales endure over time."
      },
      {
        "letter": "D",
        "text": "arguing that folktales should be forgotten."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 says many lasting tales teach nothing usable and survive on delight alone, so it disputes Text 1's claim that practical lessons keep tales alive. A fits.",
    "whyWrong": {
      "B": "Text 2 argues many tales teach nothing usable, the opposite of B.",
      "C": "Text 2 accepts that tales endure; it disputes why.",
      "D": "Text 2 values the tales' delight, not their forgetting."
    }
  },
  {
    "id": "words-context-t1-13",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "text": "The following text is from a story.\n\nThe crowd fell ______ the moment the conductor raised her baton; not a cough or a whisper broke the sudden hush.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "silent"
      },
      {
        "letter": "B",
        "text": "restless"
      },
      {
        "letter": "C",
        "text": "cheerful"
      },
      {
        "letter": "D",
        "text": "crowded"
      }
    ],
    "answer": "A",
    "explanation": "'Not a cough or a whisper' and 'sudden hush' describe the crowd becoming silent. A fits.",
    "whyWrong": {
      "B": "'Restless' contradicts the described hush.",
      "C": "'Cheerful' does not match the quiet, expectant moment.",
      "D": "'Crowded' describes numbers, not the sudden quiet."
    }
  },
  {
    "id": "words-context-t1-bp01",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from an article about a chef.\n\nMarcus was known for his ______ approach in the kitchen: he measured every ingredient to the gram and timed each step to the second.\n\nWhich choice completes the text with the most logical and precise word?",
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
        "text": "cheerful"
      },
      {
        "letter": "D",
        "text": "sudden"
      }
    ],
    "answer": "B",
    "explanation": "Measuring to the gram and timing to the second describes a meticulous, exacting approach. B fits.",
    "whyWrong": {
      "A": "'Careless' contradicts the precise measuring described.",
      "C": "'Cheerful' describes mood, not precision.",
      "D": "'Sudden' describes speed, not carefulness."
    }
  },
  {
    "id": "words-context-t1-bp02",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a nature article.\n\nThe desert appears ______ at midday, but at dusk it comes alive with foxes, owls, and insects emerging from the cooling sand.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "crowded"
      },
      {
        "letter": "B",
        "text": "lifeless"
      },
      {
        "letter": "C",
        "text": "noisy"
      },
      {
        "letter": "D",
        "text": "colorful"
      }
    ],
    "answer": "B",
    "explanation": "The contrast with the dusk activity shows the midday desert seems empty of life—lifeless. B fits.",
    "whyWrong": {
      "A": "'Crowded' contradicts the coming-alive-later contrast.",
      "C": "'Noisy' contradicts the still midday implied here.",
      "D": "'Colorful' describes appearance, not the absence of activity."
    }
  },
  {
    "id": "words-context-t1-bp03",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a story.\n\nThe crowd's cheer was so ______ that the players could feel the stands shaking beneath their feet.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "faint"
      },
      {
        "letter": "B",
        "text": "thunderous"
      },
      {
        "letter": "C",
        "text": "brief"
      },
      {
        "letter": "D",
        "text": "polite"
      }
    ],
    "answer": "B",
    "explanation": "A cheer that shakes the stands is enormously loud—thunderous. B fits.",
    "whyWrong": {
      "A": "'Faint' contradicts the shaking stands.",
      "C": "'Brief' describes length, not loudness.",
      "D": "'Polite' is too mild to shake the stands."
    }
  },
  {
    "id": "words-context-t1-bp04",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a biography.\n\nDespite winning many awards, the scientist remained ______, always crediting her students and collaborators for the discoveries.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "boastful"
      },
      {
        "letter": "B",
        "text": "modest"
      },
      {
        "letter": "C",
        "text": "anxious"
      },
      {
        "letter": "D",
        "text": "wealthy"
      }
    ],
    "answer": "B",
    "explanation": "Crediting others rather than herself describes a modest attitude. B fits.",
    "whyWrong": {
      "A": "'Boastful' is the opposite of crediting others.",
      "C": "'Anxious' concerns worry, not humility.",
      "D": "'Wealthy' concerns money, not her attitude."
    }
  },
  {
    "id": "words-context-t1-bp05",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from an article about rivers.\n\nAfter weeks of heavy rain, the once-gentle stream became ______, tearing branches from the banks as it rushed downstream.\n\nWhich choice completes the text with the most logical and precise word?",
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
        "text": "frozen"
      },
      {
        "letter": "D",
        "text": "narrow"
      }
    ],
    "answer": "B",
    "explanation": "Rushing water that tears branches from the banks is violently churning—turbulent. B fits.",
    "whyWrong": {
      "A": "'Shallow' contradicts the powerful rushing described.",
      "C": "'Frozen' contradicts the rushing water.",
      "D": "'Narrow' describes width, not the violent flow."
    }
  },
  {
    "id": "words-context-t1-bp06",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a review.\n\nThe mystery novel kept readers ______: each chapter ended on a question that made it nearly impossible to put the book down.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "bored"
      },
      {
        "letter": "B",
        "text": "engaged"
      },
      {
        "letter": "C",
        "text": "confused"
      },
      {
        "letter": "D",
        "text": "sleepy"
      }
    ],
    "answer": "B",
    "explanation": "Chapters that make it hard to stop reading keep readers absorbed—engaged. B fits.",
    "whyWrong": {
      "A": "'Bored' contradicts not being able to put the book down.",
      "C": "'Confused' is not implied by suspenseful chapter endings.",
      "D": "'Sleepy' contradicts the gripping effect described."
    }
  },
  {
    "id": "words-context-t1-bp07",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from an article about design.\n\nThe new phone's layout is refreshingly ______: a single button controls nearly everything, so first-time users need no instructions.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "simple"
      },
      {
        "letter": "B",
        "text": "expensive"
      },
      {
        "letter": "C",
        "text": "fragile"
      },
      {
        "letter": "D",
        "text": "colorful"
      }
    ],
    "answer": "A",
    "explanation": "A single button that needs no instructions describes a simple design. A fits.",
    "whyWrong": {
      "B": "'Expensive' concerns cost, not ease of use.",
      "C": "'Fragile' concerns durability, not simplicity.",
      "D": "'Colorful' concerns appearance, not simplicity."
    }
  },
  {
    "id": "words-context-t1-bp08",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a memoir.\n\nMy uncle told the same stories every holiday, yet his ______ delivery—full of pauses and sly grins—made us laugh as if we were hearing them for the first time.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "dull"
      },
      {
        "letter": "B",
        "text": "lively"
      },
      {
        "letter": "C",
        "text": "silent"
      },
      {
        "letter": "D",
        "text": "hurried"
      }
    ],
    "answer": "B",
    "explanation": "Pauses, sly grins, and laughter describe a spirited, animated delivery—lively. B fits.",
    "whyWrong": {
      "A": "'Dull' contradicts the laughter he provoked.",
      "C": "'Silent' contradicts his storytelling.",
      "D": "'Hurried' contradicts the pauses described."
    }
  },
  {
    "id": "words-context-t1-bp09",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from an article about weather.\n\nThe forecast had promised sun, so the ______ arrival of dark clouds caught the picnickers completely off guard.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "expected"
      },
      {
        "letter": "B",
        "text": "unexpected"
      },
      {
        "letter": "C",
        "text": "gradual"
      },
      {
        "letter": "D",
        "text": "welcome"
      }
    ],
    "answer": "B",
    "explanation": "Clouds that catch people off guard after a sunny forecast were unforeseen—unexpected. B fits.",
    "whyWrong": {
      "A": "'Expected' contradicts being caught off guard.",
      "C": "'Gradual' concerns pace, not surprise.",
      "D": "'Welcome' contradicts spoiling a picnic."
    }
  },
  {
    "id": "words-context-t2-bp01",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on science.\n\nThe theory was initially ______ by the community, but as evidence mounted, even its harshest critics came to accept it.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "embraced"
      },
      {
        "letter": "B",
        "text": "resisted"
      },
      {
        "letter": "C",
        "text": "ignored"
      },
      {
        "letter": "D",
        "text": "funded"
      }
    ],
    "answer": "B",
    "explanation": "The contrast with critics later accepting it shows the theory was first opposed—resisted. B fits.",
    "whyWrong": {
      "A": "'Embraced' contradicts the later 'came to accept it.'",
      "C": "'Ignored' does not fit critics who had strong reactions.",
      "D": "'Funded' concerns money, not the theory's reception."
    }
  },
  {
    "id": "words-context-t2-bp02",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a history of trade.\n\nThe port's location made it a natural ______ for goods moving between three continents, and merchants of many languages met daily on its docks.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "barrier"
      },
      {
        "letter": "B",
        "text": "crossroads"
      },
      {
        "letter": "C",
        "text": "secret"
      },
      {
        "letter": "D",
        "text": "ruin"
      }
    ],
    "answer": "B",
    "explanation": "A place where goods and people from three continents meet is a meeting point—a crossroads. B fits.",
    "whyWrong": {
      "A": "'Barrier' contradicts goods moving through freely.",
      "C": "'Secret' contradicts a busy, public port.",
      "D": "'Ruin' contradicts a thriving port."
    }
  },
  {
    "id": "words-context-t2-bp03",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a book about writing.\n\nGood revision is rarely about adding; more often it means ______ the draft, cutting every word the sentence can do without.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "expanding"
      },
      {
        "letter": "B",
        "text": "trimming"
      },
      {
        "letter": "C",
        "text": "copying"
      },
      {
        "letter": "D",
        "text": "praising"
      }
    ],
    "answer": "B",
    "explanation": "Cutting every unnecessary word describes trimming the draft. The phrase 'cutting every word' confirms it. B fits.",
    "whyWrong": {
      "A": "'Expanding' contradicts cutting words.",
      "C": "'Copying' is unrelated to reducing the draft.",
      "D": "'Praising' concerns approval, not editing."
    }
  },
  {
    "id": "words-context-t2-bp04",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an article about ecology.\n\nThe two species are so closely ______ that the health of one can be read almost directly from the health of the other.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "separated"
      },
      {
        "letter": "B",
        "text": "intertwined"
      },
      {
        "letter": "C",
        "text": "opposed"
      },
      {
        "letter": "D",
        "text": "forgotten"
      }
    ],
    "answer": "B",
    "explanation": "Two species whose health tracks each other are tightly linked—intertwined. B fits.",
    "whyWrong": {
      "A": "'Separated' contradicts their linked health.",
      "C": "'Opposed' contradicts their mutual dependence.",
      "D": "'Forgotten' does not describe a relationship between species."
    }
  },
  {
    "id": "words-context-t2-bp05",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a profile.\n\nHer arguments were hard to counter because they were so ______: each claim followed necessarily from the one before it.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "rambling"
      },
      {
        "letter": "B",
        "text": "coherent"
      },
      {
        "letter": "C",
        "text": "decorative"
      },
      {
        "letter": "D",
        "text": "quiet"
      }
    ],
    "answer": "B",
    "explanation": "Claims that each follow necessarily from the last form a tightly connected, logical whole—coherent. B fits.",
    "whyWrong": {
      "A": "'Rambling' contradicts the tight logical order.",
      "C": "'Decorative' concerns ornament, not logical structure.",
      "D": "'Quiet' concerns volume, not argument structure."
    }
  },
  {
    "id": "words-context-t2-bp06",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an article about medicine.\n\nThe drug's benefits were real but ______: they faded within hours, so patients needed several doses a day.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "permanent"
      },
      {
        "letter": "B",
        "text": "fleeting"
      },
      {
        "letter": "C",
        "text": "imaginary"
      },
      {
        "letter": "D",
        "text": "expensive"
      }
    ],
    "answer": "B",
    "explanation": "Benefits that fade within hours are short-lived—fleeting. B fits.",
    "whyWrong": {
      "A": "'Permanent' contradicts the benefits fading.",
      "C": "'Imaginary' contradicts 'the benefits were real.'",
      "D": "'Expensive' concerns cost, not how long the effect lasts."
    }
  },
  {
    "id": "words-context-t2-bp07",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a study of language.\n\nThe word's meaning has ______ over centuries: what once described a coward now describes a hero, an almost complete reversal.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "vanished"
      },
      {
        "letter": "B",
        "text": "shifted"
      },
      {
        "letter": "C",
        "text": "repeated"
      },
      {
        "letter": "D",
        "text": "survived"
      }
    ],
    "answer": "B",
    "explanation": "A meaning that reverses from coward to hero has changed—shifted. B fits.",
    "whyWrong": {
      "A": "'Vanished' would mean the word lost meaning, but it gained a new one.",
      "C": "'Repeated' contradicts the change described.",
      "D": "'Survived' implies staying the same, not reversing."
    }
  },
  {
    "id": "words-context-t2-bp08",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a review of a documentary.\n\nRather than taking sides, the filmmaker remained ______, presenting each viewpoint fairly and letting the audience judge.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "biased"
      },
      {
        "letter": "B",
        "text": "impartial"
      },
      {
        "letter": "C",
        "text": "confused"
      },
      {
        "letter": "D",
        "text": "famous"
      }
    ],
    "answer": "B",
    "explanation": "Presenting each viewpoint fairly without taking sides describes an impartial stance. B fits.",
    "whyWrong": {
      "A": "'Biased' contradicts not taking sides.",
      "C": "'Confused' does not follow from presenting views fairly.",
      "D": "'Famous' concerns reputation, not fairness."
    }
  },
  {
    "id": "words-context-t2-bp09",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an article about architecture.\n\nThe hall's design was praised for being ______: its clean lines and open space made every part of the room easy to take in at a glance.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "cluttered"
      },
      {
        "letter": "B",
        "text": "uncluttered"
      },
      {
        "letter": "C",
        "text": "crumbling"
      },
      {
        "letter": "D",
        "text": "hidden"
      }
    ],
    "answer": "B",
    "explanation": "Clean lines and open space that are easy to take in describe an uncluttered design. B fits.",
    "whyWrong": {
      "A": "'Cluttered' contradicts clean lines and open space.",
      "C": "'Crumbling' concerns decay, not clarity of design.",
      "D": "'Hidden' contradicts being easy to take in at a glance."
    }
  },
  {
    "id": "words-context-t3-bp01",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a work of criticism.\n\nThe memoir's power lies in its ______: rather than explaining her grief, the author simply records the small, ordinary acts that carried her through it.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "restraint"
      },
      {
        "letter": "B",
        "text": "exaggeration"
      },
      {
        "letter": "C",
        "text": "confusion"
      },
      {
        "letter": "D",
        "text": "repetition"
      }
    ],
    "answer": "A",
    "explanation": "Choosing not to explain grief and instead recording plain details describes emotional restraint. A fits.",
    "whyWrong": {
      "B": "'Exaggeration' is the opposite of the understated approach described.",
      "C": "'Confusion' does not fit a deliberate, controlled choice.",
      "D": "'Repetition' concerns recurrence, not the withholding described."
    }
  },
  {
    "id": "words-context-t3-bp02",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on history.\n\nThe treaty's language was deliberately ______, worded so that each side could read into it the outcome it hoped for.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "precise"
      },
      {
        "letter": "B",
        "text": "ambiguous"
      },
      {
        "letter": "C",
        "text": "brief"
      },
      {
        "letter": "D",
        "text": "cheerful"
      }
    ],
    "answer": "B",
    "explanation": "Wording that lets each side read in a different outcome is open to multiple meanings—ambiguous. B fits.",
    "whyWrong": {
      "A": "'Precise' contradicts allowing different readings.",
      "C": "'Brief' concerns length, not multiple meanings.",
      "D": "'Cheerful' describes tone, not interpretive openness."
    }
  },
  {
    "id": "words-context-t3-bp03",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a study of scientific progress.\n\nThe finding was not a sudden leap but the ______ of decades of small, patient measurements by many hands.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "culmination"
      },
      {
        "letter": "B",
        "text": "beginning"
      },
      {
        "letter": "C",
        "text": "rejection"
      },
      {
        "letter": "D",
        "text": "imitation"
      }
    ],
    "answer": "A",
    "explanation": "A finding that caps off decades of accumulated work is the high point that results from it—culmination. B is wrong; A fits.",
    "whyWrong": {
      "B": "'Beginning' contradicts decades of prior measurements.",
      "C": "'Rejection' contradicts a finding built on that work.",
      "D": "'Imitation' does not fit an original result of long effort."
    }
  },
  {
    "id": "words-context-t3-bp04",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on public life.\n\nThe mayor's apology felt ______: it named no specific wrong, promised no change, and seemed designed mainly to end the conversation.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "heartfelt"
      },
      {
        "letter": "B",
        "text": "hollow"
      },
      {
        "letter": "C",
        "text": "detailed"
      },
      {
        "letter": "D",
        "text": "lengthy"
      }
    ],
    "answer": "B",
    "explanation": "An apology with no specifics, no promise, and no real feeling behind it is empty—hollow. B fits.",
    "whyWrong": {
      "A": "'Heartfelt' contradicts an apology meant only to end talk.",
      "C": "'Detailed' contradicts naming no specific wrong.",
      "D": "'Lengthy' concerns length, not emptiness."
    }
  },
  {
    "id": "words-context-t3-bp05",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a nature essay.\n\nThe old forest has a ______ order that no planner designed: each species has found, over centuries, the exact place where it thrives.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "imposed"
      },
      {
        "letter": "B",
        "text": "spontaneous"
      },
      {
        "letter": "C",
        "text": "temporary"
      },
      {
        "letter": "D",
        "text": "artificial"
      }
    ],
    "answer": "B",
    "explanation": "An order that no planner designed and arose on its own over centuries is spontaneous. B fits.",
    "whyWrong": {
      "A": "'Imposed' contradicts 'no planner designed.'",
      "C": "'Temporary' contradicts an order built over centuries.",
      "D": "'Artificial' contradicts a naturally arising order."
    }
  },
  {
    "id": "words-context-t3-bp06",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a study of rhetoric.\n\nThe speech drew its force not from grand claims but from ______ ones—concrete, verifiable details that a listener could check and therefore trust.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "vague"
      },
      {
        "letter": "B",
        "text": "modest"
      },
      {
        "letter": "C",
        "text": "grandiose"
      },
      {
        "letter": "D",
        "text": "secret"
      }
    ],
    "answer": "B",
    "explanation": "Set against 'grand claims,' the trustworthy, concrete details are small and unassuming—modest. B fits.",
    "whyWrong": {
      "A": "'Vague' contradicts 'concrete, verifiable details.'",
      "C": "'Grandiose' repeats the grand claims the sentence contrasts against.",
      "D": "'Secret' contradicts details a listener could check."
    }
  },
  {
    "id": "words-context-t3-bp07",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on cities.\n\nThe plan promised renewal but delivered only ______: the same shuttered storefronts, now merely repainted, lined the same empty street.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "transformation"
      },
      {
        "letter": "B",
        "text": "stagnation"
      },
      {
        "letter": "C",
        "text": "celebration"
      },
      {
        "letter": "D",
        "text": "expansion"
      }
    ],
    "answer": "B",
    "explanation": "The same shuttered, empty street with only new paint shows nothing really changed—stagnation. B fits.",
    "whyWrong": {
      "A": "'Transformation' contradicts the unchanged street.",
      "C": "'Celebration' does not fit the bleak scene.",
      "D": "'Expansion' contradicts an empty, unchanged block."
    }
  },
  {
    "id": "words-context-t3-bp08",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a work of criticism.\n\nThe painter's late style grew increasingly ______: forms dissolved into loose patches of color that only resolve into a scene when viewed from across the room.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "precise"
      },
      {
        "letter": "B",
        "text": "abstract"
      },
      {
        "letter": "C",
        "text": "cautious"
      },
      {
        "letter": "D",
        "text": "traditional"
      }
    ],
    "answer": "B",
    "explanation": "Forms dissolving into loose patches of color describe an increasingly abstract style. B fits.",
    "whyWrong": {
      "A": "'Precise' contradicts forms dissolving into loose patches.",
      "C": "'Cautious' concerns attitude, not the style described.",
      "D": "'Traditional' contradicts the experimental dissolving of forms."
    }
  },
  {
    "id": "words-context-t3-bp09",
    "domain": "rw-cs",
    "skill": "words-context",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on ethics.\n\nThe principle sounds simple, but applying it is ______: nearly every real case pits it against some equally reasonable rule.\n\nWhich choice completes the text with the most logical and precise word?",
    "choices": [
      {
        "letter": "A",
        "text": "effortless"
      },
      {
        "letter": "B",
        "text": "fraught"
      },
      {
        "letter": "C",
        "text": "cheerful"
      },
      {
        "letter": "D",
        "text": "rapid"
      }
    ],
    "answer": "B",
    "explanation": "Application that constantly pits the rule against equally reasonable rules is full of tension and difficulty—fraught. B fits.",
    "whyWrong": {
      "A": "'Effortless' contradicts the difficulty described.",
      "C": "'Cheerful' describes mood, not the difficulty of applying a rule.",
      "D": "'Rapid' concerns speed, not the conflict described."
    }
  },
  {
    "id": "structure-t1-bp01",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from an article about bees.\n\nA beehive can look chaotic, with thousands of insects crawling over one another. Look longer, and the order appears: nurses tend the young, foragers bring nectar, and guards watch the entrance, each bee doing a single job that keeps the whole hive alive.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It moves from a first impression of disorder to the underlying order beneath it."
      },
      {
        "letter": "B",
        "text": "It lists the steps of making honey in order."
      },
      {
        "letter": "C",
        "text": "It compares two different hives."
      },
      {
        "letter": "D",
        "text": "It argues that bees should be protected."
      }
    ],
    "answer": "A",
    "explanation": "The text starts with the hive looking chaotic, then reveals the organized roles beneath. A captures that shift.",
    "whyWrong": {
      "B": "No honey-making steps are listed.",
      "C": "Only one hive is discussed.",
      "D": "No argument for protection is made."
    }
  },
  {
    "id": "structure-t1-bp02",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a profile.\n\nAs a boy, Diego was terrified of the ocean and refused to wade past his knees. Today he is a marine biologist who spends weeks at a time on research ships. The fear that once kept him ashore, he says, is what first made him want to understand the sea.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It lists the tools a marine biologist uses."
      },
      {
        "letter": "B",
        "text": "It contrasts an early fear with a later career shaped by it."
      },
      {
        "letter": "C",
        "text": "It compares the ocean to a research ship."
      },
      {
        "letter": "D",
        "text": "It explains how to become a marine biologist."
      }
    ],
    "answer": "B",
    "explanation": "The text sets Diego's boyhood fear against his later ocean career and links the two. B captures that contrast-and-connection.",
    "whyWrong": {
      "A": "No tools are listed.",
      "C": "The ocean and ship are not compared.",
      "D": "No career instructions are given."
    }
  },
  {
    "id": "structure-t1-bp03",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from an article about roads.\n\nThe town's main road flooded every spring, stranding drivers for days. Engineers solved the problem by raising the roadbed and adding wide drainage channels on both sides, so the water now flows past instead of over it.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It presents a recurring problem and then the solution to it."
      },
      {
        "letter": "B",
        "text": "It compares two towns' roads."
      },
      {
        "letter": "C",
        "text": "It lists famous roads in history."
      },
      {
        "letter": "D",
        "text": "It defines the word 'drainage.'"
      }
    ],
    "answer": "A",
    "explanation": "The text states the spring flooding problem, then the engineers' solution. A fits.",
    "whyWrong": {
      "B": "Only one town's road is discussed.",
      "C": "No historical roads are listed.",
      "D": "It does not define 'drainage.'"
    }
  },
  {
    "id": "structure-t1-bp04",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a nature essay.\n\nFrom the trailhead, the mountain looks like a single gray wall. As you climb, it separates into distinct zones: a belt of pine, then bare rock, then a cap of snow that never fully melts, each with its own plants, birds, and weather.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It argues that the mountain should be preserved."
      },
      {
        "letter": "B",
        "text": "It moves from a distant, simple impression to a closer, more detailed one."
      },
      {
        "letter": "C",
        "text": "It traces the mountain's formation over time."
      },
      {
        "letter": "D",
        "text": "It compares the mountain to a valley."
      }
    ],
    "answer": "B",
    "explanation": "The text shifts from the far 'single gray wall' to the detailed zones seen while climbing. B captures that movement.",
    "whyWrong": {
      "A": "No preservation argument appears.",
      "C": "It describes the present view, not the mountain's formation.",
      "D": "No valley is mentioned."
    }
  },
  {
    "id": "structure-t1-bp05",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a story.\n\nThe recipe card sat in the drawer for years, its ink fading. Whenever Priya opened the drawer, she promised herself she would finally bake her grandmother's bread. One rainy Sunday, with nowhere to be, she took out the card and turned on the oven.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It builds through a long delay to a moment of action."
      },
      {
        "letter": "B",
        "text": "It compares two recipes."
      },
      {
        "letter": "C",
        "text": "It explains how to bake bread step by step."
      },
      {
        "letter": "D",
        "text": "It lists reasons to keep old recipes."
      }
    ],
    "answer": "A",
    "explanation": "The text dwells on years of postponement, then arrives at the moment Priya finally acts. A captures that build to action.",
    "whyWrong": {
      "B": "Only one recipe is involved.",
      "C": "No baking steps are given.",
      "D": "No list of reasons appears."
    }
  },
  {
    "id": "structure-t1-bp06",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from an article about tools.\n\nWe tend to think of the wheel as an obvious invention. Yet many advanced societies never used it for transport, and the wheel appears late in the human story. Its 'obviousness,' it turns out, is something we read backward from a world already full of wheels.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It challenges a common assumption and reinterprets it."
      },
      {
        "letter": "B",
        "text": "It gives directions for building a wheel."
      },
      {
        "letter": "C",
        "text": "It compares two ancient societies in detail."
      },
      {
        "letter": "D",
        "text": "It lists the parts of a wheel."
      }
    ],
    "answer": "A",
    "explanation": "The text names the assumption that the wheel is obvious, then reinterprets that as hindsight. A fits.",
    "whyWrong": {
      "B": "No building directions are given.",
      "C": "No two societies are compared in detail.",
      "D": "No parts of a wheel are listed."
    }
  },
  {
    "id": "structure-t2-bp01",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on science.\n\nThe common story credits a single inventor with the light bulb. The fuller record shows dozens of experimenters, across several countries, each solving part of the problem. Crediting one name is tidy, but it hides how much invention is a relay rather than a race.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It replaces a simplified account with a more complicated one and draws a lesson from the difference."
      },
      {
        "letter": "B",
        "text": "It lists the parts of a light bulb."
      },
      {
        "letter": "C",
        "text": "It compares two inventors' personalities."
      },
      {
        "letter": "D",
        "text": "It gives instructions for an experiment."
      }
    ],
    "answer": "A",
    "explanation": "The text swaps the single-inventor story for the many-experimenters record and draws a lesson about invention. A fits.",
    "whyWrong": {
      "B": "No parts are listed.",
      "C": "No personalities are compared.",
      "D": "No experiment instructions are given."
    }
  },
  {
    "id": "structure-t2-bp02",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a biography.\n\nFor years, Amina kept detailed weather journals as a hobby, recording temperature and rainfall each dawn. Only later, when a researcher needed decades of local data, did those private notebooks become a scientific resource that reshaped the region's climate record.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It compares two researchers' methods."
      },
      {
        "letter": "B",
        "text": "It shows how a private habit later gained an unforeseen public value."
      },
      {
        "letter": "C",
        "text": "It lists the instruments used to measure weather."
      },
      {
        "letter": "D",
        "text": "It argues that everyone should keep a journal."
      }
    ],
    "answer": "B",
    "explanation": "The text moves from Amina's private hobby to its later scientific value. B captures that development.",
    "whyWrong": {
      "A": "Only Amina's records are central; no two methods are compared.",
      "C": "No instruments are listed.",
      "D": "It does not urge everyone to journal."
    }
  },
  {
    "id": "structure-t2-bp03",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an article about cities.\n\nThe program aimed to cut litter by adding hundreds of new bins. Litter did fall near the bins, but it rose on the blocks between them, where people now assumed cleanup was someone else's job. The fix had moved the problem more than solved it.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It describes a solution whose benefit was offset by an unintended effect."
      },
      {
        "letter": "B",
        "text": "It lists the costs of buying bins."
      },
      {
        "letter": "C",
        "text": "It compares two cities' litter laws."
      },
      {
        "letter": "D",
        "text": "It explains how bins are manufactured."
      }
    ],
    "answer": "A",
    "explanation": "The text presents the bin solution, then its unintended effect of shifting litter elsewhere. A fits.",
    "whyWrong": {
      "B": "No costs are listed.",
      "C": "Only one program is discussed.",
      "D": "Manufacturing is not explained."
    }
  },
  {
    "id": "structure-t2-bp04",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a science article.\n\nA drop of pond water seems like nothing. Under a microscope, it becomes a crowded world: single-celled hunters chase smaller prey, algae drift like green clouds, and rotifers spin their crowns of cilia—an entire food web in a single drop.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It moves from an ordinary object to the hidden complexity a closer look reveals."
      },
      {
        "letter": "B",
        "text": "It lists the steps of using a microscope."
      },
      {
        "letter": "C",
        "text": "It compares pond water with river water."
      },
      {
        "letter": "D",
        "text": "It argues that ponds are endangered."
      }
    ],
    "answer": "A",
    "explanation": "The text starts with the plain drop of water, then reveals the teeming world under magnification. A captures that shift.",
    "whyWrong": {
      "B": "No steps for using a microscope are listed.",
      "C": "No river water is compared.",
      "D": "No endangerment argument appears."
    }
  },
  {
    "id": "structure-t2-bp05",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on art.\n\nWe praise museums for keeping art safe. Yet a painting made to hang in a candlelit chapel was meant to flicker and glow, not to sit under even white light behind glass. Preservation, the essay suggests, can quietly change the very thing it saves.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It grants a common view, then complicates it with a drawback."
      },
      {
        "letter": "B",
        "text": "It lists famous museums."
      },
      {
        "letter": "C",
        "text": "It compares two painters."
      },
      {
        "letter": "D",
        "text": "It explains how paintings are cleaned."
      }
    ],
    "answer": "A",
    "explanation": "The text accepts that museums keep art safe, then complicates that by noting preservation can alter the work. A fits.",
    "whyWrong": {
      "B": "No museums are listed.",
      "C": "No painters are compared.",
      "D": "Cleaning is not explained."
    }
  },
  {
    "id": "structure-t2-bp06",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an article about language.\n\nAt first, the children's invented playground slang seems random. Study it, and rules emerge: sounds shift in regular ways, new words follow set patterns, and outsiders who break the rules are quickly corrected. What looked like nonsense is a small grammar of its own.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It moves from an appearance of randomness to an underlying system."
      },
      {
        "letter": "B",
        "text": "It lists slang words in alphabetical order."
      },
      {
        "letter": "C",
        "text": "It compares two playgrounds."
      },
      {
        "letter": "D",
        "text": "It argues that slang harms language."
      }
    ],
    "answer": "A",
    "explanation": "The text starts with slang looking random, then reveals its consistent rules. A captures that shift.",
    "whyWrong": {
      "B": "No word list is given.",
      "C": "No two playgrounds are compared.",
      "D": "No harm argument appears."
    }
  },
  {
    "id": "structure-t3-bp01",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on freedom.\n\nWe imagine freedom as the removal of limits—the fewer the rules, the freer we are. Yet a musician is freed, not bound, by mastering scales, and a language opens a world only once its grammar is fixed. Some constraints, the essay argues, are not the opposite of freedom but its precondition.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It states a common definition, then argues that its opposite is partly true."
      },
      {
        "letter": "B",
        "text": "It lists the rules of music."
      },
      {
        "letter": "C",
        "text": "It compares two musicians."
      },
      {
        "letter": "D",
        "text": "It explains how to learn a language."
      }
    ],
    "answer": "A",
    "explanation": "The text gives the usual 'freedom = no limits' view, then argues some constraints enable freedom. A captures that inversion.",
    "whyWrong": {
      "B": "No rules of music are listed.",
      "C": "No two musicians are compared.",
      "D": "No language-learning method is given."
    }
  },
  {
    "id": "structure-t3-bp02",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a literary essay.\n\nThe narrator assures us, chapter after chapter, that she has forgiven her rival completely. Yet she returns to the man's small cruelties in ever finer detail, lingering where forgiveness would move on. The novel's real subject lives in that gap between what she claims and what she cannot stop revisiting.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It identifies a tension between a narrator's stated feeling and her behavior."
      },
      {
        "letter": "B",
        "text": "It summarizes the plot in order."
      },
      {
        "letter": "C",
        "text": "It compares the narrator to her rival."
      },
      {
        "letter": "D",
        "text": "It lists the novel's settings."
      }
    ],
    "answer": "A",
    "explanation": "The text sets the narrator's claim of forgiveness against her dwelling on the wrongs, locating meaning in that gap. A fits.",
    "whyWrong": {
      "B": "It analyzes a tension, not a plot summary.",
      "C": "The rival is not compared to the narrator.",
      "D": "No settings are listed."
    }
  },
  {
    "id": "structure-t3-bp03",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on knowledge.\n\nWe treat a map's blank spaces as failures, gaps to be filled. But the best explorers read the blanks as questions, letting emptiness guide them to what no one had yet thought to ask. Ignorance, mapped honestly, becomes less a wall than a compass.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It reinterprets something usually seen as a lack into a source of direction."
      },
      {
        "letter": "B",
        "text": "It lists the tools mapmakers use."
      },
      {
        "letter": "C",
        "text": "It compares two explorers."
      },
      {
        "letter": "D",
        "text": "It explains how maps are printed."
      }
    ],
    "answer": "A",
    "explanation": "The text turns the map's blanks from failures into guiding questions—reinterpreting a lack as direction. A fits.",
    "whyWrong": {
      "B": "No mapmaking tools are listed.",
      "C": "No two explorers are compared.",
      "D": "Printing is not explained."
    }
  },
  {
    "id": "structure-t3-bp04",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a history of ideas.\n\nThe young reformer set out to abolish the old guild, certain it only held craft back. Years inside it changed his view: the rules he had scorned, he found, quietly preserved skills that no market would have paid to keep. He left not to destroy the guild but to defend it.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It follows a figure's initial position and its reversal through experience."
      },
      {
        "letter": "B",
        "text": "It lists the crafts the guild taught."
      },
      {
        "letter": "C",
        "text": "It compares two guilds."
      },
      {
        "letter": "D",
        "text": "It explains how to join a guild."
      }
    ],
    "answer": "A",
    "explanation": "The text traces the reformer from wanting to abolish the guild to defending it. A captures that reversal.",
    "whyWrong": {
      "B": "No crafts are listed.",
      "C": "Only one guild is discussed.",
      "D": "No joining instructions are given."
    }
  },
  {
    "id": "structure-t3-bp05",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on attention.\n\nWe blame distraction on our devices, as if focus were simply stolen from us. But the essay turns the picture around: attention is less a possession to be guarded than a muscle to be trained, and a mind that has never practiced stillness will wander with or without a screen.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It rejects a common explanation and offers a different underlying account."
      },
      {
        "letter": "B",
        "text": "It lists the features of a phone."
      },
      {
        "letter": "C",
        "text": "It compares two devices."
      },
      {
        "letter": "D",
        "text": "It gives steps for turning off notifications."
      }
    ],
    "answer": "A",
    "explanation": "The text rejects the 'devices steal focus' explanation and reframes attention as a trainable capacity. A fits.",
    "whyWrong": {
      "B": "No phone features are listed.",
      "C": "No two devices are compared.",
      "D": "No notification steps are given."
    }
  },
  {
    "id": "structure-t3-bp06",
    "domain": "rw-cs",
    "skill": "structure",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on translation.\n\nThe first translator rendered the poem word for word and produced something correct but dead. The second broke nearly every literal rule and produced something alive. The essay uses the pair to ask an uncomfortable question: whether faithfulness to a text can require betraying its words.\n\nWhich choice best describes the overall structure of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "It contrasts two approaches to raise a larger question about the first."
      },
      {
        "letter": "B",
        "text": "It lists the poem's rhymes."
      },
      {
        "letter": "C",
        "text": "It explains how to learn a second language."
      },
      {
        "letter": "D",
        "text": "It argues that poems cannot be translated."
      }
    ],
    "answer": "A",
    "explanation": "The text sets the literal translation against the freer one, then uses the contrast to pose a question about fidelity. A fits.",
    "whyWrong": {
      "B": "No rhymes are listed.",
      "C": "No language-learning method is given.",
      "D": "It questions how to translate, not whether it is possible."
    }
  },
  {
    "id": "cross-text-t1-bp01",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Text 1\nSchool uniforms reduce distractions and help students focus on learning rather than on clothing.\n\nText 2\nUniforms can erase the individuality that helps young people discover who they are. Choosing what to wear is a small but real form of self-expression.\n\nWhich choice best describes the relationship between the two texts?",
    "choices": [
      {
        "letter": "A",
        "text": "Text 2 presents a concern that conflicts with the benefit Text 1 emphasizes."
      },
      {
        "letter": "B",
        "text": "Text 2 provides evidence proving Text 1 correct."
      },
      {
        "letter": "C",
        "text": "Text 2 restates Text 1's argument."
      },
      {
        "letter": "D",
        "text": "Text 2 is about an unrelated topic."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 praises uniforms for focus; Text 2 worries they erase individuality. Text 2 conflicts with Text 1. A fits.",
    "whyWrong": {
      "B": "Text 2 opposes rather than proves Text 1.",
      "C": "The two take opposing positions.",
      "D": "Both texts are about uniforms."
    }
  },
  {
    "id": "cross-text-t1-bp02",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Text 1\nKeeping a pet teaches children responsibility, as they learn to feed, walk, and care for another living thing.\n\nText 2\nA pet is a serious commitment. Families who take one on without enough time or money can end up unable to care for it properly.\n\nBased on the texts, both authors would most likely agree that pets",
    "choices": [
      {
        "letter": "A",
        "text": "require real care and responsibility from the people who keep them."
      },
      {
        "letter": "B",
        "text": "should never be kept by families."
      },
      {
        "letter": "C",
        "text": "teach children nothing of value."
      },
      {
        "letter": "D",
        "text": "are inexpensive to care for."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 stresses the responsibility of care; Text 2 stresses the commitment care requires. Both agree pets need real care. A fits.",
    "whyWrong": {
      "B": "Only Text 2 is cautionary, and it does not oppose all pet ownership.",
      "C": "Text 1 says pets teach responsibility.",
      "D": "Text 2 notes pets can require money, not that they are cheap."
    }
  },
  {
    "id": "cross-text-t1-bp03",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Text 1\nStreaming services are a boon for music lovers, offering millions of songs for a low monthly fee.\n\nText 2\nStreaming pays most musicians only tiny fractions of a cent per play, making it hard for all but the biggest artists to earn a living.\n\nBased on the texts, how would the author of Text 2 most likely respond to Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "By noting that the low price for listeners can come at the expense of the artists."
      },
      {
        "letter": "B",
        "text": "By agreeing that streaming benefits everyone equally."
      },
      {
        "letter": "C",
        "text": "By arguing that streaming offers too few songs."
      },
      {
        "letter": "D",
        "text": "By claiming that no one listens to streamed music."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 stresses that streaming pays musicians very little, so it would answer Text 1 by pointing to the cost to artists. A fits.",
    "whyWrong": {
      "B": "Text 2 disputes that streaming benefits everyone.",
      "C": "Text 2 does not claim too few songs; it grants millions.",
      "D": "Text 2 assumes people stream music."
    }
  },
  {
    "id": "cross-text-t1-bp04",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Text 1\nTelling students exactly what will be on a test helps them study efficiently and lowers their anxiety.\n\nText 2\nWhen students know the precise questions in advance, they often memorize narrowly and forget the material soon after the test.\n\nBased on the texts, the two authors would most likely disagree about whether telling students what is on a test",
    "choices": [
      {
        "letter": "A",
        "text": "is, on balance, good for their learning."
      },
      {
        "letter": "B",
        "text": "is something teachers can do."
      },
      {
        "letter": "C",
        "text": "reduces students' anxiety."
      },
      {
        "letter": "D",
        "text": "involves a test at all."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 says it helps; Text 2 says it leads to shallow memorizing. They disagree about whether it benefits learning. A fits.",
    "whyWrong": {
      "B": "Neither disputes that teachers can do it.",
      "C": "Text 1 says anxiety drops; Text 2 does not dispute that point.",
      "D": "Both assume a test."
    }
  },
  {
    "id": "cross-text-t1-bp05",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Text 1\nOnline reviews help shoppers by pooling the experiences of thousands of buyers into a single rating.\n\nText 2\nOnline ratings can be gamed by fake reviews, so a high score does not always mean a product is good.\n\nWhich choice best describes the relationship between the two texts?",
    "choices": [
      {
        "letter": "A",
        "text": "Text 2 qualifies the usefulness that Text 1 highlights."
      },
      {
        "letter": "B",
        "text": "Text 2 fully agrees with Text 1."
      },
      {
        "letter": "C",
        "text": "Text 2 argues shoppers should ignore products entirely."
      },
      {
        "letter": "D",
        "text": "Text 2 is about a different subject."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 praises reviews' usefulness; Text 2 warns fake reviews can mislead, qualifying that usefulness. A fits.",
    "whyWrong": {
      "B": "Text 2 adds a caution rather than fully agreeing.",
      "C": "Text 2 warns about ratings, not products themselves.",
      "D": "Both texts are about online reviews."
    }
  },
  {
    "id": "cross-text-t2-bp01",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Text 1\nThe economist argues that a city's new stadium will boost the local economy, drawing crowds who spend at nearby shops and restaurants.\n\nText 2\nMuch of the money spent at a stadium would have been spent elsewhere in the same city anyway. Stadiums often move spending around more than they create it.\n\nBased on the texts, how would the author of Text 2 most likely characterize Text 1's argument?",
    "choices": [
      {
        "letter": "A",
        "text": "As overstating new economic activity by ignoring spending merely shifted from elsewhere."
      },
      {
        "letter": "B",
        "text": "As correct that stadiums create entirely new spending."
      },
      {
        "letter": "C",
        "text": "As wrong to think anyone attends stadium events."
      },
      {
        "letter": "D",
        "text": "As focused on the wrong city."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 argues stadiums mostly relocate spending, so it sees Text 1 as overstating new activity. A fits.",
    "whyWrong": {
      "B": "Text 2 disputes that the spending is new.",
      "C": "Text 2 assumes people attend events.",
      "D": "Both texts concern the same city."
    }
  },
  {
    "id": "cross-text-t2-bp02",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Text 1\nA study of one wolf pack found that pups raised by many adults, not just their parents, grew more socially skilled, suggesting shared care benefits development.\n\nText 2\nIn our study of the same species, pups raised by many adults fared no better socially than those raised mainly by their parents. What mattered was the amount of food available, not the number of caregivers.\n\nBased on the texts, the findings in Text 2 most directly complicate which idea from Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "That shared care by many adults is what improves pups' social development."
      },
      {
        "letter": "B",
        "text": "That wolves live in packs."
      },
      {
        "letter": "C",
        "text": "That pups have parents."
      },
      {
        "letter": "D",
        "text": "That wolves eat food."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 credits shared care for social skills; Text 2 finds food, not the number of caregivers, mattered—complicating that idea. A fits.",
    "whyWrong": {
      "B": "Both texts assume wolves live in packs.",
      "C": "Neither disputes that pups have parents.",
      "D": "That wolves eat is not in question."
    }
  },
  {
    "id": "cross-text-t2-bp03",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Text 1\nRequiring students to learn a musical instrument sharpens skills like discipline and pattern recognition that carry over into other subjects.\n\nText 2\nThe benefits of music education depend on sustained, quality instruction. Where classes are large and teachers few, simply requiring an instrument may yield little.\n\nBased on the texts, the author of Text 2 would most likely add which caution to Text 1's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "That the carryover benefits appear only where instruction is sustained and well supported."
      },
      {
        "letter": "B",
        "text": "That music education has no benefits at all."
      },
      {
        "letter": "C",
        "text": "That students should not study other subjects."
      },
      {
        "letter": "D",
        "text": "That instruments cannot be taught in schools."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 stresses that benefits depend on quality instruction, so it would qualify Text 1: carryover appears only with real support. A fits.",
    "whyWrong": {
      "B": "Text 2 grants benefits under the right conditions.",
      "C": "Text 2 never says to drop other subjects.",
      "D": "Text 2 assumes instruments are taught in schools."
    }
  },
  {
    "id": "cross-text-t2-bp04",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Text 1\nThe biographer claimed the composer wrote his final symphony in a single feverish month, driven by grief.\n\nText 2\nNewly found sketches for the symphony are dated across more than two years, several long before the loss the biographer names as its trigger.\n\nBased on the texts, the evidence in Text 2 most directly challenges which claim in Text 1?",
    "choices": [
      {
        "letter": "A",
        "text": "That the symphony was written quickly and only after the composer's grief."
      },
      {
        "letter": "B",
        "text": "That the composer wrote a symphony."
      },
      {
        "letter": "C",
        "text": "That the composer experienced grief."
      },
      {
        "letter": "D",
        "text": "That sketches can be dated."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 says the work was written in one month after grief; Text 2's two-year sketches predating the loss contradict that timing. A fits.",
    "whyWrong": {
      "B": "Both texts agree a symphony was written.",
      "C": "Text 2 does not dispute the grief, only the timeline.",
      "D": "Dating sketches is how Text 2 makes its case, not what it challenges."
    }
  },
  {
    "id": "cross-text-t2-bp05",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Text 1\nAllowing employees to work from home cuts commuting time and lets people arrange work around their lives.\n\nText 2\nRemote work can blur the line between job and home so thoroughly that some workers end up on call at all hours, gaining flexibility but losing rest.\n\nBased on the texts, the author of Text 2 differs from the author of Text 1 mainly by",
    "choices": [
      {
        "letter": "A",
        "text": "emphasizing a cost of remote work that can offset its flexibility."
      },
      {
        "letter": "B",
        "text": "denying that commuting takes time."
      },
      {
        "letter": "C",
        "text": "arguing that no one should work from home."
      },
      {
        "letter": "D",
        "text": "claiming that rest is unimportant."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 highlights flexibility; Text 2 stresses lost rest that can offset it, so it differs by weighing a cost. A fits.",
    "whyWrong": {
      "B": "Text 2 does not dispute that commuting takes time.",
      "C": "Text 2 warns of a downside, not a ban.",
      "D": "Text 2 treats lost rest as a real cost, valuing rest."
    }
  },
  {
    "id": "cross-text-t3-bp01",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Text 1\nThe scholar argues that anonymity online frees people to speak honestly, without fear of social or professional punishment for unpopular views.\n\nText 2\nThe same shield that protects honest dissent also protects cruelty. Freed from consequences, some say things anonymously they would never own in their own name—and honesty is not always what emerges.\n\nBased on the texts, the author of Text 2 would most likely say that Text 1's argument",
    "choices": [
      {
        "letter": "A",
        "text": "captures one effect of anonymity while overlooking that the same freedom enables harm."
      },
      {
        "letter": "B",
        "text": "is wrong that anonymity affects how people speak."
      },
      {
        "letter": "C",
        "text": "understates how honest anonymous speech tends to be."
      },
      {
        "letter": "D",
        "text": "correctly proves anonymity should be banned."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 grants that anonymity frees speech but stresses it also frees cruelty, so it faults Text 1 for overlooking the harm. A fits.",
    "whyWrong": {
      "B": "Text 2 agrees anonymity changes how people speak.",
      "C": "Text 2 argues the opposite—that honesty is not always what emerges.",
      "D": "Text 2 does not call for a ban."
    }
  },
  {
    "id": "cross-text-t3-bp02",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Text 1\nThe curator argues that returning looted artifacts to their countries of origin is a simple matter of justice, whatever the cost to the museums that now hold them.\n\nText 2\nJustice is rarely simple here. Some origin sites lack the facilities to preserve fragile works, and borders have shifted so often that 'country of origin' can be genuinely unclear.\n\nBased on the texts, the disagreement between the authors is best described as a difference over whether returning artifacts is",
    "choices": [
      {
        "letter": "A",
        "text": "a straightforward duty or a question complicated by practical and historical difficulties."
      },
      {
        "letter": "B",
        "text": "something museums are physically able to do."
      },
      {
        "letter": "C",
        "text": "a topic worth discussing at all."
      },
      {
        "letter": "D",
        "text": "related to artifacts."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 calls return a simple duty; Text 2 stresses practical and historical complications. The dispute is over whether it is straightforward. A fits.",
    "whyWrong": {
      "B": "Neither disputes that museums could physically return works.",
      "C": "Both treat the topic as worth discussing.",
      "D": "Both texts are about artifacts."
    }
  },
  {
    "id": "cross-text-t3-bp03",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Text 1\nThe historian concludes that the empire fell chiefly because of pressure from invaders along its long borders.\n\nText 2\nInvaders had pressed those borders for centuries without toppling the empire. What changed was internal: currency collapse, political infighting, and overtaxed farmers who no longer supported the state.\n\nBased on the texts, the author of Text 2 responds to Text 1 primarily by",
    "choices": [
      {
        "letter": "A",
        "text": "arguing that the cause Text 1 stresses was long present, so internal changes better explain the fall."
      },
      {
        "letter": "B",
        "text": "denying that the empire ever fell."
      },
      {
        "letter": "C",
        "text": "claiming there were no invaders."
      },
      {
        "letter": "D",
        "text": "insisting the empire's borders were short."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 notes invaders were a constant, so it points to internal factors as the real cause—reframing Text 1's explanation. A fits.",
    "whyWrong": {
      "B": "Text 2 accepts that the empire fell.",
      "C": "Text 2 acknowledges invaders existed.",
      "D": "Text 2 refers to the long borders, not short ones."
    }
  },
  {
    "id": "cross-text-t3-bp04",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Text 1\nThe critic maintains that a work of art should be judged entirely on its own terms, apart from anything known about the artist's life.\n\nText 2\nA poem written from a prison cell and the same poem imagined by a comfortable observer are not, in the end, the same poem. What we know of its making shapes what the words can mean.\n\nBased on the texts, the author of Text 2 would most likely argue that the position in Text 1",
    "choices": [
      {
        "letter": "A",
        "text": "wrongly excludes context that can genuinely affect a work's meaning."
      },
      {
        "letter": "B",
        "text": "is right that an artist's life never matters."
      },
      {
        "letter": "C",
        "text": "claims art has no meaning at all."
      },
      {
        "letter": "D",
        "text": "concerns a subject unrelated to art."
      }
    ],
    "answer": "A",
    "explanation": "Text 2 argues that knowledge of a work's making shapes its meaning, so it sees Text 1 as wrongly excluding context. A fits.",
    "whyWrong": {
      "B": "Text 2 rejects the view that the artist's life never matters.",
      "C": "Text 2 is about how meaning is shaped, not that meaning is absent.",
      "D": "Both texts are about judging art."
    }
  },
  {
    "id": "cross-text-t3-bp05",
    "domain": "rw-cs",
    "skill": "cross-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Text 1\nThe planner argues that a truly walkable city should ban cars from its center entirely, freeing the streets for people.\n\nText 2\nA blanket ban can strand the elderly, the disabled, and those hauling heavy loads, for whom a car is not a luxury but a necessity. Access, not just openness, is part of what makes a street humane.\n\nBased on the texts, the two authors most fundamentally disagree about whether a car-free center would",
    "choices": [
      {
        "letter": "A",
        "text": "serve everyone equally or leave some residents worse off."
      },
      {
        "letter": "B",
        "text": "contain any streets."
      },
      {
        "letter": "C",
        "text": "be located in a city."
      },
      {
        "letter": "D",
        "text": "involve cars in any way."
      }
    ],
    "answer": "A",
    "explanation": "Text 1 sees a car-free center as freeing streets for people; Text 2 warns it could strand those who depend on cars. They disagree over whether it serves everyone. A fits.",
    "whyWrong": {
      "B": "Both assume the center has streets.",
      "C": "Both assume it is in a city.",
      "D": "Both texts discuss cars; that is not the dispute."
    }
  },
];
