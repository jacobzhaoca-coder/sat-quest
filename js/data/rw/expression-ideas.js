/* SAT Quest — ORIGINAL SAT-style Reading & Writing bank: Expression of Ideas.
   Every passage and question was written from scratch for this app. None are
   copied, paraphrased, or adapted from College Board, Bluebook, Khan Academy,
   or any published test or prep book. They imitate only the STRUCTURE, tone,
   and difficulty of the digital SAT.

   Item shape: { id, domain, skill, tier, text, choices:[{letter,text}],
   answer, explanation, whyWrong:{letter:reason} }. The loader (rw/index.js)
   adds difficulty labels, time targets, and strategy tips. */

const RW_BANK_EI = [
  {
    "id": "transitions-t1-01",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "Bees are often credited as the primary pollinators of crops. ______ many plants depend just as heavily on beetles, flies, and even bats.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "However,"
      },
      {
        "letter": "B",
        "text": "Therefore,"
      },
      {
        "letter": "C",
        "text": "For example,"
      },
      {
        "letter": "D",
        "text": "Similarly,"
      }
    ],
    "answer": "A",
    "explanation": "The second sentence contrasts the credit given to bees with the role of other pollinators, so a contrast word is needed.",
    "whyWrong": {
      "B": "\"Therefore\" signals a cause-effect conclusion, not a contrast.",
      "C": "\"For example\" would introduce an instance of bees pollinating, not a contrast.",
      "D": "\"Similarly\" signals likeness, but the sentence reverses expectations."
    }
  },
  {
    "id": "transitions-t1-02",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "The museum extended its hours for the popular exhibit. ______ it added extra staff to manage the larger evening crowds.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Nevertheless,"
      },
      {
        "letter": "B",
        "text": "In addition,"
      },
      {
        "letter": "C",
        "text": "In contrast,"
      },
      {
        "letter": "D",
        "text": "Otherwise,"
      }
    ],
    "answer": "B",
    "explanation": "The second sentence adds another related action (extra staff) to the first (longer hours). \"In addition\" fits.",
    "whyWrong": {
      "A": "\"Nevertheless\" signals contrast, but both sentences point the same way.",
      "C": "\"In contrast\" signals opposition that is not present.",
      "D": "\"Otherwise\" signals an alternative outcome, which does not fit."
    }
  },
  {
    "id": "transitions-t2-01",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "The new alloy is remarkably light, which makes it attractive for aircraft design. ______ it is far more expensive to produce than the aluminum it would replace, and few manufacturers can absorb the cost.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "As a result,"
      },
      {
        "letter": "B",
        "text": "Likewise,"
      },
      {
        "letter": "C",
        "text": "Nevertheless,"
      },
      {
        "letter": "D",
        "text": "In addition,"
      }
    ],
    "answer": "C",
    "explanation": "The alloy is attractive, but its expense is a countervailing problem—a contrast. \"Nevertheless\" signals that.",
    "whyWrong": {
      "A": "\"As a result\" signals cause-effect, not the contrast intended.",
      "B": "\"Likewise\" adds a similar point, but expense opposes the appeal.",
      "D": "\"In addition\" adds a similar point rather than an opposing one."
    }
  },
  {
    "id": "transitions-t2-02",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "The volunteers cleared the trail of fallen branches and repaired the worn steps. ______ they repainted the faded trail markers so hikers would not lose their way.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Finally,"
      },
      {
        "letter": "B",
        "text": "However,"
      },
      {
        "letter": "C",
        "text": "By contrast,"
      },
      {
        "letter": "D",
        "text": "Instead,"
      }
    ],
    "answer": "A",
    "explanation": "The sentence adds the last item in a sequence of tasks the volunteers completed. \"Finally\" fits a series of actions.",
    "whyWrong": {
      "B": "\"However\" signals contrast, but this continues the list of tasks.",
      "C": "\"By contrast\" signals opposition not present here.",
      "D": "\"Instead\" signals a replacement, but repainting adds to the work."
    }
  },
  {
    "id": "transitions-t3-01",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The committee gathered detailed data on every proposed route, weighing cost, travel time, and environmental impact. ______ it recommended the route that scored highest across all three measures.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Nonetheless,"
      },
      {
        "letter": "B",
        "text": "Ultimately,"
      },
      {
        "letter": "C",
        "text": "In contrast,"
      },
      {
        "letter": "D",
        "text": "For instance,"
      }
    ],
    "answer": "B",
    "explanation": "The second sentence states the outcome reached after weighing the data. \"Ultimately\" signals that resolution.",
    "whyWrong": {
      "A": "\"Nonetheless\" signals a contrast that does not occur.",
      "C": "\"In contrast\" signals opposition, but this follows logically from the analysis.",
      "D": "\"For instance\" would introduce an example, not the final decision."
    }
  },
  {
    "id": "synthesis-t2-01",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "While researching a local river, a student took these notes:\n\n• The Maple River flows for 84 miles through three counties.\n• In 1998, a cleanup project removed two aging dams.\n• Since the dams were removed, native trout have returned to the upper river.\n• Trout had been absent from that stretch for over fifty years.\n\nThe student wants to emphasize the effect of the dam removal on native trout. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The Maple River flows for 84 miles through three counties."
      },
      {
        "letter": "B",
        "text": "A 1998 cleanup project on the Maple River removed two aging dams."
      },
      {
        "letter": "C",
        "text": "After the two dams were removed, native trout returned to a stretch of the Maple River where they had been absent for over fifty years."
      },
      {
        "letter": "D",
        "text": "The Maple River passes through three counties on its 84-mile course."
      }
    ],
    "answer": "C",
    "explanation": "The goal is to emphasize the dam removal's EFFECT on trout. C links the removal to the trout's return after fifty years' absence.",
    "whyWrong": {
      "A": "This gives geography, not the effect on trout.",
      "B": "This states the removal but omits its effect on the trout.",
      "D": "This is geography again, unrelated to the trout."
    }
  },
  {
    "id": "synthesis-t2-02",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "A student researching a painter took these notes:\n\n• Elena Ruiz was born in 1911 and trained as a muralist.\n• Her murals often depicted farm laborers at work.\n• She used bold, flat blocks of color.\n• Critics say her style influenced a generation of public artists.\n\nThe student wants to describe a distinctive feature of Ruiz's visual style. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Ruiz, who trained as a muralist, was born in 1911."
      },
      {
        "letter": "B",
        "text": "Ruiz's murals used bold, flat blocks of color."
      },
      {
        "letter": "C",
        "text": "Critics say Ruiz influenced a generation of public artists."
      },
      {
        "letter": "D",
        "text": "Ruiz often depicted farm laborers at work."
      }
    ],
    "answer": "B",
    "explanation": "A distinctive feature of her visual STYLE is the bold, flat blocks of color. B targets style directly.",
    "whyWrong": {
      "A": "Birth year and training are biography, not visual style.",
      "C": "Influence is her legacy, not a feature of her style.",
      "D": "Subject matter (laborers) is what she painted, not how it looked."
    }
  },
  {
    "id": "synthesis-t3-01",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "A student is writing about two composers and took these notes:\n\n• Composer Reyes wrote mostly for small chamber ensembles.\n• Composer Okoye wrote mostly for full orchestras.\n• Both composers drew heavily on folk melodies from their home regions.\n• Critics note the two rarely performed each other's work.\n\nThe student wants to highlight a similarity between the two composers. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Reyes wrote for small chamber ensembles, while Okoye wrote for full orchestras."
      },
      {
        "letter": "B",
        "text": "Though they worked in different formats, both Reyes and Okoye drew heavily on folk melodies from their home regions."
      },
      {
        "letter": "C",
        "text": "Reyes and Okoye rarely performed each other's work."
      },
      {
        "letter": "D",
        "text": "Okoye wrote mostly for full orchestras."
      }
    ],
    "answer": "B",
    "explanation": "The goal is to highlight a SIMILARITY. B names the shared use of folk melodies.",
    "whyWrong": {
      "A": "This emphasizes a difference, not a similarity.",
      "C": "This states a difference in their careers, not a shared trait.",
      "D": "This describes only one composer."
    }
  },
  {
    "id": "transitions-t2-03",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "Solar panels produce no emissions while generating electricity. ______ manufacturing them requires mining and energy, so their full environmental cost is not zero.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "However,"
      },
      {
        "letter": "B",
        "text": "Therefore,"
      },
      {
        "letter": "C",
        "text": "For example,"
      },
      {
        "letter": "D",
        "text": "Likewise,"
      }
    ],
    "answer": "A",
    "explanation": "The second sentence qualifies the clean image of solar panels by noting manufacturing costs — a contrast. \"However\" fits.",
    "whyWrong": {
      "B": "\"Therefore\" signals a conclusion, not the contrast being drawn.",
      "C": "\"For example\" would introduce an instance of zero emissions, not a drawback.",
      "D": "\"Likewise\" signals similarity, but the second sentence pushes back."
    }
  },
  {
    "id": "transitions-t3-02",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The city's archives had survived two wars and a flood. ______ a single careless renovation in the 1970s destroyed more records than any of those disasters combined.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Ironically,"
      },
      {
        "letter": "B",
        "text": "Consequently,"
      },
      {
        "letter": "C",
        "text": "For instance,"
      },
      {
        "letter": "D",
        "text": "Similarly,"
      }
    ],
    "answer": "A",
    "explanation": "Surviving wars and a flood only to be ruined by a renovation is an unexpected reversal — \"Ironically\" captures it.",
    "whyWrong": {
      "B": "\"Consequently\" implies the renovation resulted from the disasters, which it did not.",
      "C": "\"For instance\" would introduce an example of survival, not the loss.",
      "D": "\"Similarly\" signals likeness, but the outcome is a stark contrast."
    }
  },
  {
    "id": "synthesis-t2-03",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "A student researching coral reefs took these notes:\n\n• Coral reefs cover less than 1 percent of the ocean floor.\n• They support about 25 percent of all marine species.\n• Warmer water can cause corals to expel the algae they depend on.\n• This process is called coral bleaching.\n\nThe student wants to emphasize the ecological importance of coral reefs. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Coral bleaching occurs when warmer water causes corals to expel their algae."
      },
      {
        "letter": "B",
        "text": "Although coral reefs cover less than 1 percent of the ocean floor, they support about 25 percent of all marine species."
      },
      {
        "letter": "C",
        "text": "Coral reefs cover less than 1 percent of the ocean floor."
      },
      {
        "letter": "D",
        "text": "The process by which corals expel algae is called coral bleaching."
      }
    ],
    "answer": "B",
    "explanation": "Ecological importance is best shown by the contrast between tiny area and huge share of species. B does this.",
    "whyWrong": {
      "A": "Bleaching is a threat mechanism, not a statement of importance.",
      "C": "The small area alone understates importance without the species figure.",
      "D": "This defines a term rather than emphasizing importance."
    }
  },
  {
    "id": "transitions-t1-03",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "The café was famous for its pastries. ______, most visitors came for the coffee.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Therefore"
      },
      {
        "letter": "B",
        "text": "Still"
      },
      {
        "letter": "C",
        "text": "For example"
      },
      {
        "letter": "D",
        "text": "Likewise"
      }
    ],
    "answer": "B",
    "explanation": "The visitors came for coffee despite the pastry fame—a contrast, so \"Still\" fits.",
    "whyWrong": {
      "A": "\"Therefore\" signals a result, not a contrast.",
      "C": "\"For example\" would introduce an illustration.",
      "D": "\"Likewise\" signals similarity, not contrast."
    }
  },
  {
    "id": "transitions-t1-04",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "Maria practiced the song every day for a month. ______, she performed it flawlessly at the concert.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "However"
      },
      {
        "letter": "B",
        "text": "As a result"
      },
      {
        "letter": "C",
        "text": "In contrast"
      },
      {
        "letter": "D",
        "text": "Nevertheless"
      }
    ],
    "answer": "B",
    "explanation": "The flawless performance follows from daily practice—a cause-and-effect, so \"As a result\" fits.",
    "whyWrong": {
      "A": "\"However\" signals contrast, not a result.",
      "C": "\"In contrast\" opposes ideas.",
      "D": "\"Nevertheless\" concedes against expectation."
    }
  },
  {
    "id": "transitions-t1-05",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "The recipe calls for fresh basil. ______, dried basil can be used in a pinch.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "However"
      },
      {
        "letter": "B",
        "text": "Therefore"
      },
      {
        "letter": "C",
        "text": "For instance"
      },
      {
        "letter": "D",
        "text": "Similarly"
      }
    ],
    "answer": "A",
    "explanation": "Dried basil is offered as an alternative to the preferred fresh basil—a contrast, so \"However\" fits.",
    "whyWrong": {
      "B": "\"Therefore\" signals a result.",
      "C": "\"For instance\" introduces an example, not an alternative.",
      "D": "\"Similarly\" signals likeness."
    }
  },
  {
    "id": "transitions-t1-06",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "The museum offers many exhibits. ______, it has a hall of dinosaur skeletons, a gallery of ancient coins, and a room of live butterflies.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Nevertheless"
      },
      {
        "letter": "B",
        "text": "In particular"
      },
      {
        "letter": "C",
        "text": "By contrast"
      },
      {
        "letter": "D",
        "text": "Instead"
      }
    ],
    "answer": "B",
    "explanation": "The list of specific exhibits illustrates the general claim of \"many exhibits,\" so \"In particular\" fits.",
    "whyWrong": {
      "A": "\"Nevertheless\" signals concession.",
      "C": "\"By contrast\" opposes ideas.",
      "D": "\"Instead\" signals replacement."
    }
  },
  {
    "id": "transitions-t2-04",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "Solar panels lower electricity bills over time. ______, their high installation cost keeps some homeowners from adopting them.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Consequently"
      },
      {
        "letter": "B",
        "text": "Nonetheless"
      },
      {
        "letter": "C",
        "text": "For example"
      },
      {
        "letter": "D",
        "text": "In addition"
      }
    ],
    "answer": "B",
    "explanation": "The high cost works against the savings benefit—a concession, so \"Nonetheless\" fits.",
    "whyWrong": {
      "A": "\"Consequently\" signals a result of the savings.",
      "C": "\"For example\" would give an instance.",
      "D": "\"In addition\" adds a similar point, not a countervailing one."
    }
  },
  {
    "id": "transitions-t2-05",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "The first expedition failed to reach the summit. ______, the lessons its members recorded guided the climbers who finally succeeded a decade later.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Yet"
      },
      {
        "letter": "B",
        "text": "Therefore"
      },
      {
        "letter": "C",
        "text": "Likewise"
      },
      {
        "letter": "D",
        "text": "For instance"
      }
    ],
    "answer": "A",
    "explanation": "The failed expedition still helped later success—an unexpected upside, so \"Yet\" fits.",
    "whyWrong": {
      "B": "\"Therefore\" implies the failure caused success directly.",
      "C": "\"Likewise\" signals similarity.",
      "D": "\"For instance\" introduces an example."
    }
  },
  {
    "id": "transitions-t2-06",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "The city added dozens of bike lanes last year. ______, cycling to work rose by nearly a third.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "However"
      },
      {
        "letter": "B",
        "text": "Accordingly"
      },
      {
        "letter": "C",
        "text": "In contrast"
      },
      {
        "letter": "D",
        "text": "Regardless"
      }
    ],
    "answer": "B",
    "explanation": "The rise in cycling follows from adding bike lanes—a result, so \"Accordingly\" fits.",
    "whyWrong": {
      "A": "\"However\" signals contrast.",
      "C": "\"In contrast\" opposes ideas.",
      "D": "\"Regardless\" dismisses a prior point."
    }
  },
  {
    "id": "transitions-t3-03",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The theory elegantly explained the planets' motion. ______, it could not account for the faint wobble astronomers later measured in their orbits.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Accordingly"
      },
      {
        "letter": "B",
        "text": "However"
      },
      {
        "letter": "C",
        "text": "Similarly"
      },
      {
        "letter": "D",
        "text": "Thus"
      }
    ],
    "answer": "B",
    "explanation": "The theory's failure to explain the wobble contrasts with its earlier success, so \"However\" fits.",
    "whyWrong": {
      "A": "\"Accordingly\" signals a consequence.",
      "C": "\"Similarly\" signals likeness.",
      "D": "\"Thus\" signals a result."
    }
  },
  {
    "id": "transitions-t3-04",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "Critics dismissed the composer's early work as chaotic noise. ______, the same dissonant passages are now studied as pioneering experiments in harmony.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Today, by contrast,"
      },
      {
        "letter": "B",
        "text": "For this reason,"
      },
      {
        "letter": "C",
        "text": "In the same way,"
      },
      {
        "letter": "D",
        "text": "As a result,"
      }
    ],
    "answer": "A",
    "explanation": "The passage contrasts past dismissal with present admiration, so \"Today, by contrast,\" captures the reversal.",
    "whyWrong": {
      "B": "\"For this reason\" signals cause; there is no cause here.",
      "C": "\"In the same way\" signals similarity, not reversal.",
      "D": "\"As a result\" implies the dismissal caused the praise."
    }
  },
  {
    "id": "transitions-t3-05",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The drug performed well in early trials. ______, researchers cautioned that its long-term effects remained untested and urged patience before wider use.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Even so,"
      },
      {
        "letter": "B",
        "text": "Therefore,"
      },
      {
        "letter": "C",
        "text": "For example,"
      },
      {
        "letter": "D",
        "text": "Likewise,"
      }
    ],
    "answer": "A",
    "explanation": "The caution tempers the promising results—a concession, so \"Even so,\" fits.",
    "whyWrong": {
      "B": "\"Therefore\" would make caution a result of success, which misreads the logic.",
      "C": "\"For example\" introduces an instance.",
      "D": "\"Likewise\" signals similarity."
    }
  },
  {
    "id": "synthesis-t1-01",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "While researching sea otters, a student took these notes:\n\n• Sea otters eat sea urchins.\n• Sea urchins feed on kelp.\n• Where otters vanished, urchins multiplied and kelp forests shrank.\n\nThe student wants to explain the effect of sea otters on kelp forests. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "By eating sea urchins, sea otters protect kelp forests, which shrink when otters disappear."
      },
      {
        "letter": "B",
        "text": "Sea urchins feed on kelp in many ocean regions."
      },
      {
        "letter": "C",
        "text": "Sea otters are known to eat sea urchins."
      },
      {
        "letter": "D",
        "text": "Kelp forests are important ocean habitats."
      }
    ],
    "answer": "A",
    "explanation": "This choice links all three notes—otters eat urchins, urchins eat kelp, so otters protect kelp—matching the goal.",
    "whyWrong": {
      "B": "This uses only one note and omits the otters' effect.",
      "C": "This states a single fact without the kelp outcome.",
      "D": "This adds a claim not tied to the otters' role."
    }
  },
  {
    "id": "synthesis-t1-02",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "A student took these notes about a local bakery:\n\n• The bakery opened in 1950.\n• It is run by the founder's granddaughter.\n• It still uses the original brick oven.\n\nThe student wants to emphasize the bakery's long family tradition. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Opened in 1950 and now run by the founder's granddaughter, the bakery still bakes in its original brick oven."
      },
      {
        "letter": "B",
        "text": "The bakery uses a brick oven."
      },
      {
        "letter": "C",
        "text": "The bakery opened in 1950."
      },
      {
        "letter": "D",
        "text": "The bakery is located downtown."
      }
    ],
    "answer": "A",
    "explanation": "This choice weaves the founding date, family succession, and original oven into a single statement of long tradition.",
    "whyWrong": {
      "B": "This gives only the oven detail.",
      "C": "This gives only the opening year.",
      "D": "Location is not in the notes and does not show tradition."
    }
  },
  {
    "id": "synthesis-t1-03",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "A student researching bicycles took these notes:\n\n• The first pedal bicycle appeared in the 1860s.\n• Early models had wooden wheels.\n• They were nicknamed \"boneshakers\" for their rough ride.\n\nThe student wants to explain why early bicycles were uncomfortable. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Early bicycles, with their wooden wheels, gave such a rough ride that they were nicknamed \"boneshakers.\""
      },
      {
        "letter": "B",
        "text": "The first pedal bicycle appeared in the 1860s."
      },
      {
        "letter": "C",
        "text": "Bicycles have changed a great deal over time."
      },
      {
        "letter": "D",
        "text": "Early bicycles were nicknamed \"boneshakers.\""
      }
    ],
    "answer": "A",
    "explanation": "This choice connects the wooden wheels to the rough ride and the nickname, directly explaining the discomfort.",
    "whyWrong": {
      "B": "The date does not explain discomfort.",
      "C": "This is a vague generalization not from the notes.",
      "D": "This names the nickname without explaining why."
    }
  },
  {
    "id": "synthesis-t1-04",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "A student took these notes about a painter:\n\n• She painted mostly at night.\n• She used candlelight to study shadows.\n• Her portraits are famous for their deep contrasts of light and dark.\n\nThe student wants to explain what made the painter's portraits distinctive. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Painting by candlelight at night, she studied shadows closely, giving her portraits their famous contrasts of light and dark."
      },
      {
        "letter": "B",
        "text": "The painter often worked at night."
      },
      {
        "letter": "C",
        "text": "The painter used candles."
      },
      {
        "letter": "D",
        "text": "The painter made many portraits."
      }
    ],
    "answer": "A",
    "explanation": "This choice ties the night work and candlelight study of shadows to the distinctive light-dark contrasts.",
    "whyWrong": {
      "B": "This gives only when she worked.",
      "C": "This gives only the candle detail.",
      "D": "This states quantity, not what made them distinctive."
    }
  },
  {
    "id": "synthesis-t2-04",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "A student researching coral reefs took these notes:\n\n• Corals host tiny algae that give them color and food.\n• When water grows too warm, corals expel the algae.\n• Without the algae, corals turn white and can starve.\n\nThe student wants to explain the process of coral bleaching to a general audience. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "In coral bleaching, overly warm water drives corals to expel the algae that feed and color them, leaving the corals white and at risk of starving."
      },
      {
        "letter": "B",
        "text": "Corals host tiny algae that give them color."
      },
      {
        "letter": "C",
        "text": "Warm water can affect coral reefs in various ways."
      },
      {
        "letter": "D",
        "text": "Corals turn white when they bleach."
      }
    ],
    "answer": "A",
    "explanation": "This choice sequences all three notes—warm water, expelled algae, white and starving corals—into a clear explanation of bleaching.",
    "whyWrong": {
      "B": "This uses only the first note.",
      "C": "This is vague and omits the mechanism.",
      "D": "This names the outcome without the cause."
    }
  },
  {
    "id": "synthesis-t2-05",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "A student took these notes about two rivers:\n\n• The Nile flows north into the Mediterranean Sea.\n• The Amazon flows east into the Atlantic Ocean.\n• The Amazon carries far more water than the Nile.\n\nThe student wants to compare the two rivers' size. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Though both are among the world's great rivers, the Amazon carries far more water than the Nile."
      },
      {
        "letter": "B",
        "text": "The Nile flows north, and the Amazon flows east."
      },
      {
        "letter": "C",
        "text": "The Nile empties into the Mediterranean Sea."
      },
      {
        "letter": "D",
        "text": "The Amazon flows into the Atlantic Ocean."
      }
    ],
    "answer": "A",
    "explanation": "The goal is comparing size; this choice directly contrasts the two rivers' water volume.",
    "whyWrong": {
      "B": "Direction is not size.",
      "C": "This describes only the Nile's outlet.",
      "D": "This describes only the Amazon's outlet."
    }
  },
  {
    "id": "synthesis-t2-06",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "A student researching sleep took these notes:\n\n• During deep sleep, the brain clears certain waste proteins.\n• These proteins build up when people sleep too little.\n• High buildup is linked to memory problems.\n\nThe student wants to explain why enough sleep may protect memory. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Because deep sleep clears waste proteins that otherwise build up and harm memory, getting enough sleep may help protect it."
      },
      {
        "letter": "B",
        "text": "Deep sleep is one stage of the sleep cycle."
      },
      {
        "letter": "C",
        "text": "Waste proteins can build up in the brain."
      },
      {
        "letter": "D",
        "text": "Memory problems have many possible causes."
      }
    ],
    "answer": "A",
    "explanation": "This choice connects protein-clearing in deep sleep to preventing the buildup linked to memory problems, meeting the goal.",
    "whyWrong": {
      "B": "This gives background without the memory link.",
      "C": "This states one fact without the sleep connection.",
      "D": "This is a vague aside, not from the specific notes."
    }
  },
  {
    "id": "synthesis-t3-02",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "A student researching two economic policies took these notes:\n\n• Policy A cut taxes, aiming to spur spending.\n• Policy B raised public investment, aiming to create jobs directly.\n• Both were tried in different regions during the same downturn.\n\nThe student wants to introduce an essay comparing the two policies' approaches. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Facing the same downturn, two regions took opposite paths: one cut taxes to encourage spending, the other raised public investment to create jobs directly."
      },
      {
        "letter": "B",
        "text": "Policy A cut taxes during a downturn."
      },
      {
        "letter": "C",
        "text": "Economic downturns are difficult for many regions."
      },
      {
        "letter": "D",
        "text": "Policy B was designed to create jobs."
      }
    ],
    "answer": "A",
    "explanation": "This choice frames both policies against the shared downturn and contrasts their opposite approaches—an effective comparative introduction.",
    "whyWrong": {
      "B": "This introduces only Policy A.",
      "C": "This is a vague generality, not a comparison.",
      "D": "This introduces only Policy B."
    }
  },
  {
    "id": "synthesis-t3-03",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "A student researching a scientist took these notes:\n\n• She was refused a university post because of her gender.\n• She conducted her key experiments in a converted shed.\n• Her work later earned the field's highest honor.\n\nThe student wants to emphasize how she succeeded despite obstacles. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Denied a university post and forced to work in a converted shed, she nonetheless produced research that later won the field's highest honor."
      },
      {
        "letter": "B",
        "text": "She won the field's highest honor."
      },
      {
        "letter": "C",
        "text": "She worked in a converted shed."
      },
      {
        "letter": "D",
        "text": "She was refused a university post."
      }
    ],
    "answer": "A",
    "explanation": "This choice pairs the obstacles (denied a post, working in a shed) with her eventual top honor, stressing success against adversity.",
    "whyWrong": {
      "B": "This gives only the triumph, not the obstacles.",
      "C": "This gives only one obstacle.",
      "D": "This gives only one obstacle without the triumph."
    }
  },
  {
    "id": "synthesis-t3-04",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "A student researching language change took these notes:\n\n• The word \"nice\" once meant \"foolish.\"\n• Over centuries its meaning softened toward \"pleasant.\"\n• Such shifts happen gradually, often unnoticed by speakers.\n\nThe student wants to use \"nice\" as an example of how word meanings drift over time. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The word \"nice,\" which once meant \"foolish\" and now means \"pleasant,\" shows how meanings can drift gradually, often unnoticed by speakers."
      },
      {
        "letter": "B",
        "text": "The word \"nice\" is common in English today."
      },
      {
        "letter": "C",
        "text": "Word meanings can be complicated."
      },
      {
        "letter": "D",
        "text": "The word \"nice\" once meant \"foolish.\""
      }
    ],
    "answer": "A",
    "explanation": "This choice uses the full arc of \"nice\"—old meaning, new meaning, gradual unnoticed shift—as an example of meaning drift.",
    "whyWrong": {
      "B": "This states the word's commonness, not its drift.",
      "C": "This is vague and not tied to the example.",
      "D": "This gives only the old meaning without the shift."
    }
  },
  {
    "id": "transitions-t3-06",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The startup's app drew millions of downloads within weeks. ______, without a way to earn revenue from those users, the company burned through its funding and folded within a year.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Consequently,"
      },
      {
        "letter": "B",
        "text": "Yet,"
      },
      {
        "letter": "C",
        "text": "Likewise,"
      },
      {
        "letter": "D",
        "text": "For instance,"
      }
    ],
    "answer": "B",
    "explanation": "Massive downloads followed by collapse is an unexpected reversal, so the contrastive \"Yet,\" fits.",
    "whyWrong": {
      "A": "\"Consequently\" implies the downloads caused the collapse directly.",
      "C": "\"Likewise\" signals similarity.",
      "D": "\"For instance\" introduces an example."
    }
  },
  {
    "id": "synthesis-t1-05",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "A student took these notes about a lighthouse:\n\n• It was built in 1875.\n• Its light could be seen 20 miles out to sea.\n• It guided ships safely past a dangerous reef.\n\nThe student wants to explain the lighthouse's purpose. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "With a light visible 20 miles away, the lighthouse guided ships safely past a dangerous reef."
      },
      {
        "letter": "B",
        "text": "The lighthouse was built in 1875."
      },
      {
        "letter": "C",
        "text": "The lighthouse is a tall structure."
      },
      {
        "letter": "D",
        "text": "Many ships sail near reefs."
      }
    ],
    "answer": "A",
    "explanation": "This choice combines the light's range with its role guiding ships past the reef, explaining the purpose.",
    "whyWrong": {
      "B": "The date does not state a purpose.",
      "C": "Height is not in the notes and gives no purpose.",
      "D": "This is a vague generality, not the lighthouse's purpose."
    }
  },
  {
    "id": "synthesis-t1-06",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "A student took these notes about a chef:\n\n• He grows vegetables in a garden behind the restaurant.\n• He changes the menu with each season.\n• Diners praise how fresh the dishes taste.\n\nThe student wants to explain why the chef's dishes taste fresh. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Because the chef grows his own vegetables and updates the menu each season, diners praise how fresh his dishes taste."
      },
      {
        "letter": "B",
        "text": "The chef changes the menu each season."
      },
      {
        "letter": "C",
        "text": "The chef has a garden."
      },
      {
        "letter": "D",
        "text": "The restaurant is popular."
      }
    ],
    "answer": "A",
    "explanation": "This choice links the garden and seasonal menu to the fresh taste diners praise, meeting the goal.",
    "whyWrong": {
      "B": "This gives only the seasonal menu detail.",
      "C": "This gives only the garden detail.",
      "D": "Popularity is not in the notes and does not explain freshness."
    }
  },
  {
    "id": "synthesis-t3-05",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "A student researching two artists took these notes:\n\n• Artist X worked slowly, finishing a few large canvases a year.\n• Artist Y painted quickly, producing hundreds of small studies.\n• Both are now praised for capturing fleeting light.\n\nThe student wants to introduce an essay contrasting the artists' methods while noting their shared aim. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Though one labored over a few large canvases while the other dashed off hundreds of small studies, both artists are praised for capturing fleeting light."
      },
      {
        "letter": "B",
        "text": "Artist X finished a few large canvases each year."
      },
      {
        "letter": "C",
        "text": "Both artists are praised today."
      },
      {
        "letter": "D",
        "text": "Artist Y made many small studies."
      }
    ],
    "answer": "A",
    "explanation": "This choice contrasts the two methods and unites them under the shared aim of capturing fleeting light—exactly the goal.",
    "whyWrong": {
      "B": "This introduces only Artist X.",
      "C": "This gives the shared praise but omits the contrast.",
      "D": "This introduces only Artist Y."
    }
  },
  {
    "id": "synthesis-t3-06",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "A student researching a bridge took these notes:\n\n• Engineers doubted the design would hold.\n• The builder tested each cable under heavy loads before installing it.\n• The bridge has stood for over a century without major repair.\n\nThe student wants to argue that careful testing answered the engineers' doubts. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Though engineers doubted the design, the builder's testing of each cable under heavy loads produced a bridge that has stood for over a century without major repair."
      },
      {
        "letter": "B",
        "text": "The bridge has stood for over a century."
      },
      {
        "letter": "C",
        "text": "Engineers doubted the design."
      },
      {
        "letter": "D",
        "text": "The builder tested the cables."
      }
    ],
    "answer": "A",
    "explanation": "This choice ties the doubts, the rigorous cable testing, and the century of durability into an argument that testing answered the doubts.",
    "whyWrong": {
      "B": "This gives only the outcome, not the testing or doubts.",
      "C": "This gives only the doubts.",
      "D": "This gives only the testing step."
    }
  },
];
