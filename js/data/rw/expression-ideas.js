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
  {
    "id": "transitions-t1-07",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "The museum stays open late on Fridays. ______ visitors who work during the day can still see the new exhibit.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "As a result,"
      },
      {
        "letter": "B",
        "text": "However,"
      },
      {
        "letter": "C",
        "text": "In contrast,"
      },
      {
        "letter": "D",
        "text": "Nevertheless,"
      }
    ],
    "answer": "A",
    "explanation": "The late Friday hours cause the result that daytime workers can still visit. 'As a result' signals that cause-and-effect. A fits.",
    "whyWrong": {
      "B": "'However' signals contrast, but the second sentence follows from the first.",
      "C": "'In contrast' marks opposition that is not present here.",
      "D": "'Nevertheless' signals concession, not a straightforward result."
    }
  },
  {
    "id": "transitions-t1-08",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "Maya trained for months before the race. ______ she felt ready when the starting gun finally fired.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Instead,"
      },
      {
        "letter": "B",
        "text": "Therefore,"
      },
      {
        "letter": "C",
        "text": "In contrast,"
      },
      {
        "letter": "D",
        "text": "For example,"
      }
    ],
    "answer": "B",
    "explanation": "Months of training lead to her feeling ready—a result. 'Therefore' signals that consequence. B fits.",
    "whyWrong": {
      "A": "'Instead' signals a substitution, which does not fit.",
      "C": "'In contrast' marks opposition not present here.",
      "D": "'For example' introduces an illustration, not a result."
    }
  },
  {
    "id": "transitions-t1-09",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "The town's printed newspaper reaches fewer readers every year. ______ its website now draws a larger audience than the paper ever had.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Likewise,"
      },
      {
        "letter": "B",
        "text": "As a result,"
      },
      {
        "letter": "C",
        "text": "However,"
      },
      {
        "letter": "D",
        "text": "Furthermore,"
      }
    ],
    "answer": "C",
    "explanation": "The shrinking print readership is set against the growing website audience—a contrast. 'However' signals that. C fits.",
    "whyWrong": {
      "A": "'Likewise' adds a similar point, but the website's growth opposes the print decline.",
      "B": "'As a result' signals cause-effect, but the website's rise is not caused by the paper's decline.",
      "D": "'Furthermore' adds a related point rather than marking the contrast."
    }
  },
  {
    "id": "transitions-t1-10",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "The garden attracts many pollinators. Bees visit the lavender all morning. ______ butterflies gather at the coneflowers by afternoon.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Nevertheless,"
      },
      {
        "letter": "B",
        "text": "Similarly,"
      },
      {
        "letter": "C",
        "text": "On the other hand,"
      },
      {
        "letter": "D",
        "text": "In conclusion,"
      }
    ],
    "answer": "B",
    "explanation": "Butterflies at the coneflowers add a second example of pollinators, matching the bees. 'Similarly' signals a like addition. B fits.",
    "whyWrong": {
      "A": "'Nevertheless' signals concession, but this simply adds a similar case.",
      "C": "'On the other hand' marks contrast, not a parallel example.",
      "D": "'In conclusion' signals a summary, but this adds new detail."
    }
  },
  {
    "id": "transitions-t1-11",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "The store lowered its prices last month. ______ it began offering free delivery on large orders.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "In addition,"
      },
      {
        "letter": "B",
        "text": "However,"
      },
      {
        "letter": "C",
        "text": "As a result,"
      },
      {
        "letter": "D",
        "text": "Otherwise,"
      }
    ],
    "answer": "A",
    "explanation": "Free delivery is a second thing the store did, added to lowering prices. 'In addition' signals that addition. A fits.",
    "whyWrong": {
      "B": "'However' signals contrast, but both are similar customer benefits.",
      "C": "'As a result' would make delivery a consequence of the price cut, which is not stated.",
      "D": "'Otherwise' signals an alternative outcome, which does not fit."
    }
  },
  {
    "id": "transitions-t1-12",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "text": "The hikers reached the summit by noon. ______ thick clouds rolled in and blocked the view they had climbed to see.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Therefore,"
      },
      {
        "letter": "B",
        "text": "Unfortunately,"
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
    "explanation": "The clouds spoiled the view they wanted, a disappointing turn. 'Unfortunately' fits that unwelcome development. B fits.",
    "whyWrong": {
      "A": "'Therefore' signals a result, but clouds do not follow from reaching the summit.",
      "C": "'Likewise' adds a similar point, but this contrasts with their goal.",
      "D": "'For instance' introduces an example, not an unwelcome event."
    }
  },
  {
    "id": "transitions-t2-07",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "The vaccine trial showed strong results in adults. ______ it had not yet been tested in children, so the researchers cautioned against assuming it would work the same way for them.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Consequently,"
      },
      {
        "letter": "B",
        "text": "However,"
      },
      {
        "letter": "C",
        "text": "Similarly,"
      },
      {
        "letter": "D",
        "text": "For example,"
      }
    ],
    "answer": "B",
    "explanation": "Strong adult results are set against the untested children—a limitation. 'However' signals that contrast. B fits.",
    "whyWrong": {
      "A": "'Consequently' signals a result, but the lack of child testing is a contrasting caveat.",
      "C": "'Similarly' adds a like point, but this introduces a gap in the evidence.",
      "D": "'For example' introduces an illustration, not a limitation."
    }
  },
  {
    "id": "transitions-t2-08",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "The city's older subway cars are noisy and prone to breakdowns. The newest cars, ______ run quietly and rarely fail, thanks to a redesigned motor.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "in addition,"
      },
      {
        "letter": "B",
        "text": "therefore,"
      },
      {
        "letter": "C",
        "text": "by contrast,"
      },
      {
        "letter": "D",
        "text": "for instance,"
      }
    ],
    "answer": "C",
    "explanation": "The new cars are set against the old, noisy ones—an opposition. 'By contrast' signals it. C fits.",
    "whyWrong": {
      "A": "'In addition' adds a similar point, but the new cars differ from the old.",
      "B": "'Therefore' signals a result, not the contrast between car types.",
      "D": "'For instance' introduces an example, not a comparison."
    }
  },
  {
    "id": "transitions-t2-09",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "The committee gathered detailed feedback from residents over several months. ______ it revised the park plan three times before presenting a final version.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Accordingly,"
      },
      {
        "letter": "B",
        "text": "Nonetheless,"
      },
      {
        "letter": "C",
        "text": "In contrast,"
      },
      {
        "letter": "D",
        "text": "Meanwhile,"
      }
    ],
    "answer": "A",
    "explanation": "Because it gathered feedback, the committee revised the plan—a result. 'Accordingly' signals that consequence. A fits.",
    "whyWrong": {
      "B": "'Nonetheless' signals a concession, but the revision follows naturally from the feedback.",
      "C": "'In contrast' marks opposition not present here.",
      "D": "'Meanwhile' marks simultaneous events, but this is a consequence."
    }
  },
  {
    "id": "transitions-t2-10",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "Solar panels have become far cheaper over the past decade. Batteries to store the power they generate, ______ remain costly, limiting how much homeowners can rely on solar alone.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "as a result,"
      },
      {
        "letter": "B",
        "text": "likewise,"
      },
      {
        "letter": "C",
        "text": "however,"
      },
      {
        "letter": "D",
        "text": "in fact,"
      }
    ],
    "answer": "C",
    "explanation": "Cheap panels are contrasted with still-costly batteries. 'However' signals that opposition. C fits.",
    "whyWrong": {
      "A": "'As a result' signals a consequence, but costly batteries do not follow from cheap panels.",
      "B": "'Likewise' would suggest batteries also fell in price, contradicting 'remain costly.'",
      "D": "'In fact' intensifies a prior point rather than marking this contrast."
    }
  },
  {
    "id": "transitions-t2-11",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "The author spent years researching the port city's archives. ______ she interviewed dozens of descendants of the sailors whose logs she had studied.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Nevertheless,"
      },
      {
        "letter": "B",
        "text": "Moreover,"
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
    "explanation": "The interviews are an additional research method beyond the archives. 'Moreover' signals that addition. B fits.",
    "whyWrong": {
      "A": "'Nevertheless' signals concession, but both are complementary efforts.",
      "C": "'In contrast' marks opposition, but the two methods work together.",
      "D": "'Otherwise' signals an alternative, not an addition."
    }
  },
  {
    "id": "transitions-t2-12",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "Most of the volunteers had never planted a tree before. By the end of the day, ______ they had put nearly two hundred saplings into the ground.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "for example,"
      },
      {
        "letter": "B",
        "text": "similarly,"
      },
      {
        "letter": "C",
        "text": "nonetheless,"
      },
      {
        "letter": "D",
        "text": "therefore,"
      }
    ],
    "answer": "C",
    "explanation": "Despite their inexperience, they planted many saplings—an unexpected success. 'Nonetheless' signals that concession. C fits.",
    "whyWrong": {
      "A": "'For example' introduces an illustration, not a contrast.",
      "B": "'Similarly' adds a like point, but this contrasts with their inexperience.",
      "D": "'Therefore' signals a result, but the outcome runs against expectation."
    }
  },
  {
    "id": "transitions-t3-07",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The study found that participants who napped briefly solved the puzzles faster. The improvement appeared only among those who reached deep sleep, ______ participants who merely rested with closed eyes showed no such gain.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "whereas"
      },
      {
        "letter": "B",
        "text": "therefore"
      },
      {
        "letter": "C",
        "text": "in addition,"
      },
      {
        "letter": "D",
        "text": "likewise,"
      }
    ],
    "answer": "A",
    "explanation": "Deep-sleep nappers improved while mere resters did not—a direct contrast joining the two clauses. 'Whereas' signals it. A fits.",
    "whyWrong": {
      "B": "'Therefore' signals a result, but this contrasts two groups.",
      "C": "'In addition' adds a like point, but the resters differ from the nappers.",
      "D": "'Likewise' would suggest resters gained too, contradicting 'no such gain.'"
    }
  },
  {
    "id": "transitions-t3-08",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "Critics predicted the small independent bookstore would fail within a year. A decade later, ______ it has outlasted two of the chain stores that once towered over it.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "consequently,"
      },
      {
        "letter": "B",
        "text": "however,"
      },
      {
        "letter": "C",
        "text": "for instance,"
      },
      {
        "letter": "D",
        "text": "in summary,"
      }
    ],
    "answer": "B",
    "explanation": "The store's survival defies the prediction of failure—a reversal. 'However' signals that contrast. B fits.",
    "whyWrong": {
      "A": "'Consequently' signals a result, but survival contradicts the prediction.",
      "C": "'For instance' introduces an example, not a reversal.",
      "D": "'In summary' signals a conclusion, but new information is given."
    }
  },
  {
    "id": "transitions-t3-09",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The new policy was designed to reduce paperwork for teachers. In practice, ______ it required so many progress reports that teachers spent more time on documentation than before.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "similarly,"
      },
      {
        "letter": "B",
        "text": "as a result,"
      },
      {
        "letter": "C",
        "text": "ironically,"
      },
      {
        "letter": "D",
        "text": "for example,"
      }
    ],
    "answer": "C",
    "explanation": "A policy meant to cut paperwork increased it—an outcome opposite to its aim. 'Ironically' captures that reversal. C fits.",
    "whyWrong": {
      "A": "'Similarly' adds a like point, but the result opposes the intent.",
      "B": "'As a result' would imply the outcome followed from the design as intended, which it did not.",
      "D": "'For example' introduces an illustration, not an ironic reversal."
    }
  },
  {
    "id": "transitions-t3-10",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The two economists analyzed the same data set. Where the first saw evidence of a coming recession, the second read the numbers as a temporary slowdown; ______ their disagreement was not about the facts but about how to interpret them.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "in other words,"
      },
      {
        "letter": "B",
        "text": "nevertheless,"
      },
      {
        "letter": "C",
        "text": "by contrast,"
      },
      {
        "letter": "D",
        "text": "for example,"
      }
    ],
    "answer": "A",
    "explanation": "The final clause restates the point: same facts, different interpretations. 'In other words' signals that clarifying restatement. A fits.",
    "whyWrong": {
      "B": "'Nevertheless' signals concession, but this rephrases rather than concedes.",
      "C": "'By contrast' marks opposition, but the clause summarizes the prior sentence.",
      "D": "'For example' introduces an instance, but this is a restatement."
    }
  },
  {
    "id": "transitions-t3-11",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The bridge's original cables were expected to last fifty years. Regular inspections and timely repairs, ______ have kept them sound for nearly ninety, well beyond their designers' most hopeful estimates.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "in contrast,"
      },
      {
        "letter": "B",
        "text": "however,"
      },
      {
        "letter": "C",
        "text": "as it happens,"
      },
      {
        "letter": "D",
        "text": "instead,"
      }
    ],
    "answer": "B",
    "explanation": "The cables lasting nearly ninety years contrasts with the fifty-year expectation. 'However' signals that the outcome exceeded the prediction. B fits.",
    "whyWrong": {
      "A": "'In contrast' typically compares two things, not one outcome exceeding an expectation within the same subject.",
      "C": "'As it happens' notes coincidence, not the contrast with the expected lifespan.",
      "D": "'Instead' signals a substitution, but the cables were not replaced by something else."
    }
  },
  {
    "id": "transitions-t3-12",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The composer claimed her symphony had no hidden meaning, that it was 'only music.' Her private letters, ______ describe in detail the childhood memories each movement was meant to evoke.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "likewise,"
      },
      {
        "letter": "B",
        "text": "therefore,"
      },
      {
        "letter": "C",
        "text": "however,"
      },
      {
        "letter": "D",
        "text": "in addition,"
      }
    ],
    "answer": "C",
    "explanation": "The letters, detailing intended meanings, contradict her public claim of 'only music.' 'However' signals that contrast. C fits.",
    "whyWrong": {
      "A": "'Likewise' adds a like point, but the letters oppose her claim.",
      "B": "'Therefore' signals a result, not a contradiction.",
      "D": "'In addition' adds a supporting point, but the letters undercut the claim."
    }
  },
  {
    "id": "synthesis-t1-07",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "While researching a bird, a student took these notes:\n\n• The Arctic tern is a small seabird.\n• Each year it flies from the Arctic to the Antarctic and back.\n• This round trip can total more than 40,000 miles.\n• It is the longest known migration of any animal.\n\nThe student wants to emphasize the extraordinary distance of the tern's migration. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The Arctic tern is a small seabird."
      },
      {
        "letter": "B",
        "text": "The Arctic tern's yearly round trip can total more than 40,000 miles, the longest known migration of any animal."
      },
      {
        "letter": "C",
        "text": "The Arctic tern flies from the Arctic to the Antarctic."
      },
      {
        "letter": "D",
        "text": "The Arctic tern is a bird that migrates each year."
      }
    ],
    "answer": "B",
    "explanation": "To emphasize the distance, the choice should highlight the 40,000-mile trip and its record. B does both.",
    "whyWrong": {
      "A": "Its size does not emphasize distance.",
      "C": "This names the route but omits the striking mileage.",
      "D": "This is a general statement without the impressive distance."
    }
  },
  {
    "id": "synthesis-t1-08",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "While researching a building, a student took these notes:\n\n• The town hall was built in 1901.\n• It was designed by architect Clara Bynum.\n• It was the first building in the town made of poured concrete.\n• Many later buildings copied its concrete design.\n\nThe student wants to emphasize the town hall's influence on later construction. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The town hall was built in 1901."
      },
      {
        "letter": "B",
        "text": "The town hall was designed by architect Clara Bynum."
      },
      {
        "letter": "C",
        "text": "As the first poured-concrete building in town, the town hall inspired many later buildings to copy its design."
      },
      {
        "letter": "D",
        "text": "The town hall is located in the town."
      }
    ],
    "answer": "C",
    "explanation": "Influence on later construction is emphasized by the town hall being first in concrete and being copied. C captures both.",
    "whyWrong": {
      "A": "The build date does not show influence.",
      "B": "The architect's name does not emphasize influence on later buildings.",
      "D": "Its location is irrelevant to its influence."
    }
  },
  {
    "id": "synthesis-t1-09",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "While researching a plant, a student took these notes:\n\n• Bamboo is a type of grass.\n• Some bamboo species can grow up to 35 inches in a single day.\n• This makes bamboo one of the fastest-growing plants on Earth.\n• Bamboo is used for building and furniture.\n\nThe student wants to emphasize how quickly bamboo grows. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Bamboo, which can grow up to 35 inches in a single day, is one of the fastest-growing plants on Earth."
      },
      {
        "letter": "B",
        "text": "Bamboo is a type of grass."
      },
      {
        "letter": "C",
        "text": "Bamboo is used for building and furniture."
      },
      {
        "letter": "D",
        "text": "Bamboo is a plant found in many regions."
      }
    ],
    "answer": "A",
    "explanation": "To emphasize speed of growth, the choice should give the daily growth figure and the 'fastest-growing' claim. A does both.",
    "whyWrong": {
      "B": "Being a grass says nothing about growth speed.",
      "C": "Its uses are unrelated to how fast it grows.",
      "D": "Where it is found does not emphasize its speed."
    }
  },
  {
    "id": "synthesis-t1-10",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "While researching an athlete, a student took these notes:\n\n• Junko Tabei was a Japanese mountaineer.\n• In 1975 she climbed Mount Everest.\n• She was the first woman to reach the summit of Everest.\n• She later climbed the highest peak on every continent.\n\nThe student wants to introduce Junko Tabei to an audience unfamiliar with her. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Junko Tabei was a mountaineer."
      },
      {
        "letter": "B",
        "text": "Junko Tabei, a Japanese mountaineer, became the first woman to reach the summit of Mount Everest in 1975."
      },
      {
        "letter": "C",
        "text": "Junko Tabei climbed a mountain in 1975."
      },
      {
        "letter": "D",
        "text": "Junko Tabei was from Japan."
      }
    ],
    "answer": "B",
    "explanation": "A strong introduction gives who she was and her landmark achievement. B names her nationality, profession, and first-woman Everest feat.",
    "whyWrong": {
      "A": "This is too vague to introduce her memorably.",
      "C": "This omits her name-making achievement and identity.",
      "D": "Her origin alone does not introduce her accomplishments."
    }
  },
  {
    "id": "synthesis-t1-11",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "While researching a food, a student took these notes:\n\n• Honey is made by bees from flower nectar.\n• Archaeologists have found honey in ancient Egyptian tombs.\n• That honey was more than 3,000 years old.\n• It was still safe to eat.\n\nThe student wants to emphasize how long honey can last. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Honey is made by bees from flower nectar."
      },
      {
        "letter": "B",
        "text": "Honey found in ancient Egyptian tombs was more than 3,000 years old and still safe to eat."
      },
      {
        "letter": "C",
        "text": "Honey has been found by archaeologists."
      },
      {
        "letter": "D",
        "text": "Bees gather nectar from flowers."
      }
    ],
    "answer": "B",
    "explanation": "To emphasize honey's long life, the choice should note the 3,000-year-old honey that was still edible. B does exactly that.",
    "whyWrong": {
      "A": "How honey is made says nothing about how long it lasts.",
      "C": "That honey was found omits its remarkable age and edibility.",
      "D": "Nectar gathering does not address longevity."
    }
  },
  {
    "id": "synthesis-t1-12",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "text": "While researching a river, a student took these notes:\n\n• The Nile is a river in Africa.\n• It flows for about 4,100 miles.\n• It is often described as the longest river in the world.\n• It passes through eleven countries.\n\nThe student wants to emphasize the great length of the Nile. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The Nile is a river in Africa."
      },
      {
        "letter": "B",
        "text": "The Nile passes through eleven countries."
      },
      {
        "letter": "C",
        "text": "The Nile flows for about 4,100 miles and is often described as the longest river in the world."
      },
      {
        "letter": "D",
        "text": "The Nile is located in Africa and elsewhere."
      }
    ],
    "answer": "C",
    "explanation": "To emphasize length, the choice should give the 4,100-mile figure and the 'longest river' description. C does both.",
    "whyWrong": {
      "A": "Its location does not emphasize length.",
      "B": "Passing through countries is about reach, not overall length.",
      "D": "This restates location, not length."
    }
  },
  {
    "id": "synthesis-t2-07",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "While researching an invention, a student took these notes:\n\n• Early refrigerators used toxic gases as coolants.\n• Leaks of these gases occasionally poisoned people in their homes.\n• In the 1920s, researchers sought a safer coolant.\n• They developed a non-toxic compound that made home refrigerators far safer.\n\nThe student wants to explain why the 1920s research was important. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Early refrigerators used gases as coolants."
      },
      {
        "letter": "B",
        "text": "Because early coolants were toxic and sometimes poisoned people, the 1920s development of a non-toxic compound made home refrigerators far safer."
      },
      {
        "letter": "C",
        "text": "In the 1920s, researchers studied refrigerators."
      },
      {
        "letter": "D",
        "text": "Refrigerators keep food cold."
      }
    ],
    "answer": "B",
    "explanation": "To explain the research's importance, the choice should link the toxic hazard to the safer replacement. B connects the danger and the fix.",
    "whyWrong": {
      "A": "This states a fact without explaining why the research mattered.",
      "C": "This says research occurred but not why it was important.",
      "D": "This is a general fact unrelated to the safety breakthrough."
    }
  },
  {
    "id": "synthesis-t2-08",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "While researching a scientist, a student took these notes:\n\n• Katherine Johnson was a mathematician at NASA.\n• She calculated flight paths for early space missions.\n• Astronauts trusted her calculations over early computers.\n• Before one mission, an astronaut asked her to check the computer's numbers by hand.\n\nThe student wants to emphasize the trust placed in Johnson's work. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Katherine Johnson was a mathematician at NASA."
      },
      {
        "letter": "B",
        "text": "Katherine Johnson calculated flight paths."
      },
      {
        "letter": "C",
        "text": "So trusted were Johnson's calculations that before one mission an astronaut asked her to verify the computer's numbers by hand."
      },
      {
        "letter": "D",
        "text": "Katherine Johnson worked with computers."
      }
    ],
    "answer": "C",
    "explanation": "The trust in her work is best shown by the astronaut asking her to check the computer by hand. C uses that telling detail.",
    "whyWrong": {
      "A": "Her job title does not convey the trust placed in her.",
      "B": "This states her task without showing the trust.",
      "D": "This is vague and does not emphasize trust."
    }
  },
  {
    "id": "synthesis-t2-09",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "While researching a discovery, a student took these notes:\n\n• A shepherd found ancient scrolls in a cave in 1947.\n• The scrolls were about 2,000 years old.\n• They included some of the oldest known copies of certain texts.\n• Scholars had never seen versions this old before.\n\nThe student wants to emphasize the historical value of the scrolls. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "A shepherd found the scrolls in a cave in 1947."
      },
      {
        "letter": "B",
        "text": "The scrolls, about 2,000 years old, included some of the oldest known copies of certain texts—versions scholars had never seen before."
      },
      {
        "letter": "C",
        "text": "The scrolls were found in a cave."
      },
      {
        "letter": "D",
        "text": "A shepherd found some old scrolls."
      }
    ],
    "answer": "B",
    "explanation": "Historical value is emphasized by the scrolls' age and their status as the oldest known copies. B captures both.",
    "whyWrong": {
      "A": "Who found them and when does not convey their value.",
      "C": "The location says nothing about historical importance.",
      "D": "This is too vague to emphasize their value."
    }
  },
  {
    "id": "synthesis-t2-10",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "While researching an animal, a student took these notes:\n\n• The axolotl is a type of salamander.\n• It can regrow lost limbs, and even parts of its heart and brain.\n• Most other animals cannot regrow such complex body parts.\n• Scientists study the axolotl to learn how healing works.\n\nThe student wants to explain why scientists find the axolotl valuable to study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The axolotl is a type of salamander."
      },
      {
        "letter": "B",
        "text": "The axolotl can regrow limbs and even parts of its heart and brain—abilities most animals lack—which is why scientists study it to understand healing."
      },
      {
        "letter": "C",
        "text": "The axolotl is studied by scientists."
      },
      {
        "letter": "D",
        "text": "The axolotl is an unusual animal."
      }
    ],
    "answer": "B",
    "explanation": "To explain the scientific value, the choice should link the rare regrowth ability to why scientists study it. B does this.",
    "whyWrong": {
      "A": "Classifying it as a salamander does not explain its value.",
      "C": "This says it is studied but not why it is valuable.",
      "D": "Calling it 'unusual' is vague and unsupported here."
    }
  },
  {
    "id": "synthesis-t2-11",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "While researching a tradition, a student took these notes:\n\n• In some coastal villages, fishers once sang while hauling nets.\n• The songs set a shared rhythm for the heavy work.\n• Working in time made the hauling easier and faster.\n• As engines replaced hand-hauling, the songs faded.\n\nThe student wants to explain the practical purpose the songs once served. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Fishers in some coastal villages used to sing."
      },
      {
        "letter": "B",
        "text": "The fishers' songs set a shared rhythm that made the heavy hauling of nets easier and faster."
      },
      {
        "letter": "C",
        "text": "The songs faded as engines replaced hand-hauling."
      },
      {
        "letter": "D",
        "text": "The songs were sung in coastal villages."
      }
    ],
    "answer": "B",
    "explanation": "The practical purpose is that the songs coordinated the work, easing the hauling. B states that function directly.",
    "whyWrong": {
      "A": "That they sang does not explain the songs' purpose.",
      "C": "This explains the decline, not the original purpose.",
      "D": "The location does not convey the practical function."
    }
  },
  {
    "id": "synthesis-t2-12",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "While researching a material, a student took these notes:\n\n• Cork comes from the bark of the cork oak tree.\n• The bark can be harvested without cutting down the tree.\n• The tree regrows its bark and can be harvested again for centuries.\n• This makes cork a renewable material.\n\nThe student wants to emphasize why cork is considered environmentally sustainable. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Cork comes from the bark of the cork oak tree."
      },
      {
        "letter": "B",
        "text": "Because cork bark can be harvested without cutting down the tree, which regrows its bark for centuries, cork is a renewable material."
      },
      {
        "letter": "C",
        "text": "Cork oak trees have thick bark."
      },
      {
        "letter": "D",
        "text": "Cork is used to make many products."
      }
    ],
    "answer": "B",
    "explanation": "Sustainability is emphasized by the tree surviving harvest and regrowing bark, making cork renewable. B links these facts.",
    "whyWrong": {
      "A": "The source of cork alone does not explain sustainability.",
      "C": "Bark thickness does not address renewability.",
      "D": "Cork's uses are unrelated to why it is sustainable."
    }
  },
  {
    "id": "synthesis-t3-07",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "While researching two artists, a student took these notes:\n\n• Both painters worked in the same city in the 1890s.\n• Painter A used thick, visible brushstrokes and bright color.\n• Painter B used smooth, blended surfaces and muted tones.\n• Critics at the time praised A for energy and B for calm.\n\nThe student wants to highlight a key difference in the two painters' styles. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Both painters worked in the same city in the 1890s."
      },
      {
        "letter": "B",
        "text": "Painter A worked with thick, bright brushstrokes, while Painter B used smooth, muted, blended surfaces."
      },
      {
        "letter": "C",
        "text": "Critics praised both painters."
      },
      {
        "letter": "D",
        "text": "The two painters were active at the same time."
      }
    ],
    "answer": "B",
    "explanation": "A key stylistic difference is best shown by contrasting A's thick, bright strokes with B's smooth, muted surfaces. B draws that contrast.",
    "whyWrong": {
      "A": "Sharing a city and decade is a similarity, not a stylistic difference.",
      "C": "That both were praised does not highlight how their styles differed.",
      "D": "Working at the same time is a similarity, not a difference."
    }
  },
  {
    "id": "synthesis-t3-08",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "While researching a public health effort, a student took these notes:\n\n• A city added wide, protected lanes for bicycles downtown.\n• Cycling downtown rose by 60 percent within two years.\n• Reported injuries to cyclists fell over the same period.\n• Air quality readings downtown improved slightly.\n\nThe student wants to make a single claim, supported by the notes, about the effects of the protected lanes. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The city added protected bicycle lanes downtown."
      },
      {
        "letter": "B",
        "text": "After the protected lanes were added, downtown cycling rose 60 percent while cyclist injuries fell and air quality improved slightly."
      },
      {
        "letter": "C",
        "text": "Cycling is a popular activity in many cities."
      },
      {
        "letter": "D",
        "text": "The lanes were built to be wide and protected."
      }
    ],
    "answer": "B",
    "explanation": "A single claim about effects should draw together the outcomes: more cycling, fewer injuries, better air. B synthesizes all three.",
    "whyWrong": {
      "A": "This describes the action, not its effects.",
      "C": "This is a general statement, not supported by these specific notes about effects.",
      "D": "This describes the lanes, not what they accomplished."
    }
  },
  {
    "id": "synthesis-t3-09",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "While researching a writer, a student took these notes:\n\n• The poet published only twelve poems during her lifetime.\n• After her death, nearly 1,800 poems were found in her papers.\n• The discovered poems are now considered her greatest work.\n• She is today regarded as a major poet.\n\nThe student wants to emphasize the contrast between the poet's obscurity in life and her later fame. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The poet wrote nearly 1,800 poems."
      },
      {
        "letter": "B",
        "text": "Though she published only twelve poems in her lifetime, the nearly 1,800 found after her death are now considered her greatest work, making her a major poet."
      },
      {
        "letter": "C",
        "text": "The poet's papers contained many poems."
      },
      {
        "letter": "D",
        "text": "The poet is regarded as a major figure today."
      }
    ],
    "answer": "B",
    "explanation": "The contrast is between publishing only twelve poems in life and posthumous acclaim for the 1,800 found later. B holds both sides.",
    "whyWrong": {
      "A": "The total count alone omits her obscurity in life.",
      "C": "This notes the papers but not the contrast with her lifetime obscurity.",
      "D": "This gives only the later fame, not the earlier obscurity."
    }
  },
  {
    "id": "synthesis-t3-10",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "While researching two studies, a student took these notes:\n\n• Study 1 found that plants near a highway grew more slowly than plants far from it.\n• Study 1 attributed the slow growth to air pollution.\n• Study 2 found that highway-side soil was also drier and more compacted.\n• Study 2 suggested soil conditions, not only pollution, might explain the slow growth.\n\nThe student wants to note how Study 2 refines the conclusion of Study 1. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Study 1 examined plants near a highway."
      },
      {
        "letter": "B",
        "text": "Study 2 suggests that the slow growth Study 1 blamed on pollution may also owe to the drier, more compacted highway-side soil."
      },
      {
        "letter": "C",
        "text": "Both studies looked at plants near highways."
      },
      {
        "letter": "D",
        "text": "Study 1 found that some plants grew slowly."
      }
    ],
    "answer": "B",
    "explanation": "Refining Study 1 means showing Study 2 adds soil conditions as an alternative to pollution alone. B expresses that refinement.",
    "whyWrong": {
      "A": "This describes Study 1 without showing the refinement.",
      "C": "Noting a shared topic does not capture how Study 2 refines Study 1.",
      "D": "This restates a Study 1 finding without Study 2's contribution."
    }
  },
  {
    "id": "synthesis-t3-11",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "While researching a historical debate, a student took these notes:\n\n• Some historians say the canal caused the town's rapid growth.\n• Others note the town was already growing before the canal opened.\n• Census records show growth accelerated sharply after the canal opened.\n• The canal cut shipping costs to the town by half.\n\nThe student wants to present a balanced conclusion that both sides could accept. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The canal caused all of the town's growth."
      },
      {
        "letter": "B",
        "text": "Though the town was already growing, its growth accelerated sharply after the canal halved shipping costs, suggesting the canal intensified an existing trend."
      },
      {
        "letter": "C",
        "text": "The town would have grown just as fast without the canal."
      },
      {
        "letter": "D",
        "text": "The canal cut shipping costs to the town."
      }
    ],
    "answer": "B",
    "explanation": "A balanced conclusion acknowledges prior growth and the canal's boost. B grants the town was already growing yet credits the canal with accelerating it.",
    "whyWrong": {
      "A": "Crediting the canal with all growth ignores the prior trend, so one side would reject it.",
      "C": "Denying the canal any role ignores the sharp post-canal acceleration.",
      "D": "The cost fact alone does not form a conclusion both sides could accept."
    }
  },
  {
    "id": "synthesis-t3-12",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "While researching a technology, a student took these notes:\n\n• Early electric streetlights were far brighter than gas lamps.\n• Cities that installed them saw nighttime street activity increase.\n• Some shopkeepers extended their hours into the evening.\n• Critics complained the constant light disturbed sleep and wildlife.\n\nThe student wants to convey that electric streetlights had mixed effects on city life. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Electric streetlights were brighter than gas lamps."
      },
      {
        "letter": "B",
        "text": "Electric streetlights extended evening activity and business hours, but critics said their constant glow disturbed sleep and wildlife."
      },
      {
        "letter": "C",
        "text": "Electric streetlights were installed in many cities."
      },
      {
        "letter": "D",
        "text": "Some shopkeepers stayed open later in the evening."
      }
    ],
    "answer": "B",
    "explanation": "'Mixed effects' calls for both the benefits (more activity, longer hours) and the drawbacks (disturbed sleep and wildlife). B presents both.",
    "whyWrong": {
      "A": "Brightness alone does not show mixed effects.",
      "C": "That they were installed widely omits the effects entirely.",
      "D": "This gives only one positive effect, not the mixed picture."
    }
  },
  {
    "id": "transitions-t2-13",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "text": "The factory installed sensors to catch defects early. Within a year, ______ the share of flawed products leaving the line had dropped by half.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "however,"
      },
      {
        "letter": "B",
        "text": "as a result,"
      },
      {
        "letter": "C",
        "text": "in contrast,"
      },
      {
        "letter": "D",
        "text": "for example,"
      }
    ],
    "answer": "B",
    "explanation": "The drop in defects follows from installing the sensors—a result. 'As a result' signals that consequence. B fits.",
    "whyWrong": {
      "A": "'However' signals contrast, but the outcome follows from the sensors.",
      "C": "'In contrast' marks opposition not present here.",
      "D": "'For example' introduces an illustration, not a result."
    }
  },
  {
    "id": "synthesis-t2-13",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "text": "While researching a bridge, a student took these notes:\n\n• The footbridge was built in 1930 using local timber.\n• By 2015 the timber had rotted and the bridge was closed.\n• In 2018 the town rebuilt it using weather-resistant steel.\n• The new bridge is expected to last at least a century.\n\nThe student wants to explain why the town chose steel for the rebuilt bridge. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The footbridge was originally built in 1930."
      },
      {
        "letter": "B",
        "text": "Because the original timber had rotted and forced the bridge's closure, the town rebuilt it in weather-resistant steel expected to last a century."
      },
      {
        "letter": "C",
        "text": "The footbridge was built using local timber."
      },
      {
        "letter": "D",
        "text": "The town rebuilt the bridge in 2018."
      }
    ],
    "answer": "B",
    "explanation": "The reason for choosing steel is that timber rotted and closed the bridge, so durable steel was used. B links the problem to the material choice.",
    "whyWrong": {
      "A": "The original build date does not explain the steel choice.",
      "C": "The original material does not explain why steel was chosen later.",
      "D": "This states the rebuild happened but not why steel was used."
    }
  },
  {
    "id": "transitions-t3-13",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "text": "The manuscript was long thought to be a modern forgery. Chemical analysis of its ink, ______ dated the parchment's writing to within decades of the events it describes.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "similarly,"
      },
      {
        "letter": "B",
        "text": "however,"
      },
      {
        "letter": "C",
        "text": "therefore,"
      },
      {
        "letter": "D",
        "text": "in addition,"
      }
    ],
    "answer": "B",
    "explanation": "The analysis dating the writing to the era contradicts the belief that it was a modern forgery. 'However' signals that contrast. B fits.",
    "whyWrong": {
      "A": "'Similarly' adds a like point, but this reverses the forgery belief.",
      "C": "'Therefore' signals a result, not a contradiction of the prior claim.",
      "D": "'In addition' adds a supporting point, but this undercuts the forgery idea."
    }
  },
  {
    "id": "synthesis-t3-13",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "text": "While researching two experiments, a student took these notes:\n\n• Experiment A tested a drug on mice and found reduced inflammation.\n• Experiment A used a very high dose relative to body weight.\n• Experiment B tested the drug on humans at a normal dose.\n• Experiment B found no measurable reduction in inflammation.\n\nThe student wants to caution readers about drawing conclusions from Experiment A alone. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Experiment A found reduced inflammation in mice."
      },
      {
        "letter": "B",
        "text": "Although Experiment A reduced inflammation in mice, it used a very high dose, and Experiment B found no effect in humans at a normal dose."
      },
      {
        "letter": "C",
        "text": "The drug was tested in two experiments."
      },
      {
        "letter": "D",
        "text": "Experiment B tested the drug on humans."
      }
    ],
    "answer": "B",
    "explanation": "The caution requires noting Experiment A's high dose and Experiment B's null result in humans, which together temper A's finding. B does this.",
    "whyWrong": {
      "A": "Reporting A's result alone is exactly the incautious conclusion to avoid.",
      "C": "Saying there were two experiments does not caution about A's limits.",
      "D": "This states B's subject without conveying its cautionary contrast."
    }
  },
  {
    "id": "transitions-t1-bp01",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The bakery sells out of croissants most mornings. ______ it now takes phone orders so regulars can reserve them in advance.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "However,"
      },
      {
        "letter": "B",
        "text": "For this reason,"
      },
      {
        "letter": "C",
        "text": "In contrast,"
      },
      {
        "letter": "D",
        "text": "For example,"
      }
    ],
    "answer": "B",
    "explanation": "Taking phone orders is a response to selling out—a result. 'For this reason' signals that cause-and-effect. B fits.",
    "whyWrong": {
      "A": "'However' signals contrast, but the second sentence follows from the first.",
      "C": "'In contrast' marks opposition not present here.",
      "D": "'For example' introduces an illustration, not a result."
    }
  },
  {
    "id": "transitions-t1-bp02",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The trail was steep and rocky the whole way up. ______ the view from the summit made every step worthwhile.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Therefore,"
      },
      {
        "letter": "B",
        "text": "Likewise,"
      },
      {
        "letter": "C",
        "text": "Still,"
      },
      {
        "letter": "D",
        "text": "For instance,"
      }
    ],
    "answer": "C",
    "explanation": "The reward is set against the difficult climb—a contrast. 'Still' signals that. C fits.",
    "whyWrong": {
      "A": "'Therefore' signals a result, but the view does not follow from the trail's difficulty.",
      "B": "'Likewise' adds a similar point, but this contrasts with the hardship.",
      "D": "'For instance' introduces an example, not a contrast."
    }
  },
  {
    "id": "transitions-t1-bp03",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The library added a quiet study floor last year. ______ it opened a small café on the ground floor for group work.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "In addition,"
      },
      {
        "letter": "B",
        "text": "However,"
      },
      {
        "letter": "C",
        "text": "As a result,"
      },
      {
        "letter": "D",
        "text": "Otherwise,"
      }
    ],
    "answer": "A",
    "explanation": "The café is a second addition alongside the study floor. 'In addition' signals that. A fits.",
    "whyWrong": {
      "B": "'However' signals contrast, but both are similar improvements.",
      "C": "'As a result' would make the café a consequence of the study floor, which is not stated.",
      "D": "'Otherwise' signals an alternative outcome, which does not fit."
    }
  },
  {
    "id": "transitions-t1-bp04",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Ferns thrive in the shade beneath the tall trees. Mosses, ______ carpet the damp stones along the same forest floor.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "however,"
      },
      {
        "letter": "B",
        "text": "similarly,"
      },
      {
        "letter": "C",
        "text": "as a result,"
      },
      {
        "letter": "D",
        "text": "in conclusion,"
      }
    ],
    "answer": "B",
    "explanation": "Mosses carpeting the floor is a parallel example of shade-loving plants, like the ferns. 'Similarly' signals that. B fits.",
    "whyWrong": {
      "A": "'However' marks contrast, but this adds a similar case.",
      "C": "'As a result' signals cause-effect, not a parallel example.",
      "D": "'In conclusion' signals a summary, but this adds new detail."
    }
  },
  {
    "id": "transitions-t1-bp05",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The bus broke down halfway to the stadium. ______ the fans missed the first quarter of the game.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Nevertheless,"
      },
      {
        "letter": "B",
        "text": "As a result,"
      },
      {
        "letter": "C",
        "text": "Similarly,"
      },
      {
        "letter": "D",
        "text": "For example,"
      }
    ],
    "answer": "B",
    "explanation": "Missing the first quarter follows from the breakdown—a result. 'As a result' signals that. B fits.",
    "whyWrong": {
      "A": "'Nevertheless' signals concession, but the outcome follows directly.",
      "C": "'Similarly' adds a like point, not a consequence.",
      "D": "'For example' introduces an illustration, not a result."
    }
  },
  {
    "id": "transitions-t1-bp06",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The store advertised a huge weekend sale. ______ most of the best items were gone within the first hour.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Likewise,"
      },
      {
        "letter": "B",
        "text": "In fact,"
      },
      {
        "letter": "C",
        "text": "By contrast,"
      },
      {
        "letter": "D",
        "text": "Therefore,"
      }
    ],
    "answer": "B",
    "explanation": "The rapid sellout intensifies and confirms how big the sale was. 'In fact' signals that emphatic reinforcement. B fits.",
    "whyWrong": {
      "A": "'Likewise' adds a separate similar point rather than reinforcing this one.",
      "C": "'By contrast' marks opposition not present here.",
      "D": "'Therefore' signals a logical result, but this reinforces rather than concludes."
    }
  },
  {
    "id": "transitions-t1-bp07",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "First, the students gathered soil samples from the field. ______ they measured each sample's moisture back in the lab.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Instead,"
      },
      {
        "letter": "B",
        "text": "Next,"
      },
      {
        "letter": "C",
        "text": "However,"
      },
      {
        "letter": "D",
        "text": "In contrast,"
      }
    ],
    "answer": "B",
    "explanation": "Measuring moisture is the following step after gathering samples. 'Next' signals sequence. B fits.",
    "whyWrong": {
      "A": "'Instead' signals a substitution, not the next step.",
      "C": "'However' marks contrast, not sequence.",
      "D": "'In contrast' marks opposition, not the order of steps."
    }
  },
  {
    "id": "transitions-t1-bp08",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The city planned to repave the avenue this summer. ______ a water-main break forced crews to dig it up first.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Therefore,"
      },
      {
        "letter": "B",
        "text": "However,"
      },
      {
        "letter": "C",
        "text": "Likewise,"
      },
      {
        "letter": "D",
        "text": "In addition,"
      }
    ],
    "answer": "B",
    "explanation": "The water-main break disrupts the paving plan—a contrast to the intention. 'However' signals that. B fits.",
    "whyWrong": {
      "A": "'Therefore' signals a result, but the break did not follow from the plan.",
      "C": "'Likewise' adds a similar point, but this complicates the plan.",
      "D": "'In addition' adds a supporting point, not an obstacle."
    }
  },
  {
    "id": "transitions-t1-bp09",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The coach wanted the team to build endurance. ______ she added a long run to the end of every practice.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Accordingly,"
      },
      {
        "letter": "B",
        "text": "Nevertheless,"
      },
      {
        "letter": "C",
        "text": "In contrast,"
      },
      {
        "letter": "D",
        "text": "For example,"
      }
    ],
    "answer": "A",
    "explanation": "Adding the run follows from the goal of building endurance—a result. 'Accordingly' signals that. A fits.",
    "whyWrong": {
      "B": "'Nevertheless' signals concession, but the action follows the goal.",
      "C": "'In contrast' marks opposition not present here.",
      "D": "'For example' introduces an illustration, not a consequence."
    }
  },
  {
    "id": "transitions-t2-bp01",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The medication relieved the patients' symptoms within days. ______ it caused mild drowsiness that some found hard to tolerate.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Consequently,"
      },
      {
        "letter": "B",
        "text": "However,"
      },
      {
        "letter": "C",
        "text": "Similarly,"
      },
      {
        "letter": "D",
        "text": "For instance,"
      }
    ],
    "answer": "B",
    "explanation": "The side effect is set against the benefit—a contrast. 'However' signals that. B fits.",
    "whyWrong": {
      "A": "'Consequently' signals a result, but the drowsiness is a contrasting drawback.",
      "C": "'Similarly' adds a like point, but this introduces a downside.",
      "D": "'For instance' introduces an example, not a drawback."
    }
  },
  {
    "id": "transitions-t2-bp02",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The old factory was demolished to make way for apartments. The developer, ______ preserved its brick smokestack as a landmark for the new plaza.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "as a result,"
      },
      {
        "letter": "B",
        "text": "in addition,"
      },
      {
        "letter": "C",
        "text": "however,"
      },
      {
        "letter": "D",
        "text": "therefore,"
      }
    ],
    "answer": "C",
    "explanation": "Preserving the smokestack contrasts with demolishing the factory. 'However' signals that. C fits.",
    "whyWrong": {
      "A": "'As a result' signals a consequence, but preservation opposes demolition.",
      "B": "'In addition' adds a similar point, but this is a contrasting choice.",
      "D": "'Therefore' signals a result, not the contrast intended."
    }
  },
  {
    "id": "transitions-t2-bp03",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The museum's older wing focuses on paintings and sculpture. The new wing, ______ is devoted entirely to digital and interactive art.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "by contrast,"
      },
      {
        "letter": "B",
        "text": "as a result,"
      },
      {
        "letter": "C",
        "text": "likewise,"
      },
      {
        "letter": "D",
        "text": "for example,"
      }
    ],
    "answer": "A",
    "explanation": "The new wing is opposed to the old in focus—a contrast. 'By contrast' signals it. A fits.",
    "whyWrong": {
      "B": "'As a result' signals cause-effect, not the difference between wings.",
      "C": "'Likewise' would suggest the wings are similar, contradicting the shift in focus.",
      "D": "'For example' introduces an illustration, not a comparison."
    }
  },
  {
    "id": "transitions-t2-bp04",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The startup gathered months of user feedback before its launch. ______ it ran a series of small pilot tests in three different cities.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Nevertheless,"
      },
      {
        "letter": "B",
        "text": "Moreover,"
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
    "explanation": "The pilot tests are an additional preparation alongside the feedback. 'Moreover' signals that addition. B fits.",
    "whyWrong": {
      "A": "'Nevertheless' signals concession, but both are complementary preparations.",
      "C": "'In contrast' marks opposition, but the two efforts work together.",
      "D": "'Otherwise' signals an alternative, not an addition."
    }
  },
  {
    "id": "transitions-t2-bp05",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The region's rivers freeze solid for months each winter. ______ the towns along them once depended on ice, cutting and storing it to sell in summer.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Historically,"
      },
      {
        "letter": "B",
        "text": "However,"
      },
      {
        "letter": "C",
        "text": "In contrast,"
      },
      {
        "letter": "D",
        "text": "Nonetheless,"
      }
    ],
    "answer": "A",
    "explanation": "The second sentence explains a past practice that arose from the freezing rivers—a continuation set in the past. 'Historically' fits that time-based extension. A fits.",
    "whyWrong": {
      "B": "'However' signals contrast, but this continues and explains the first idea.",
      "C": "'In contrast' marks opposition not present here.",
      "D": "'Nonetheless' signals concession, but the practice follows from the freezing, not against it."
    }
  },
  {
    "id": "transitions-t2-bp06",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The lecture covered the causes of the drought in detail. The speaker, ______ said almost nothing about how the region eventually recovered.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "as a result,"
      },
      {
        "letter": "B",
        "text": "similarly,"
      },
      {
        "letter": "C",
        "text": "however,"
      },
      {
        "letter": "D",
        "text": "in fact,"
      }
    ],
    "answer": "C",
    "explanation": "The gap about recovery contrasts with the detailed coverage of causes. 'However' signals that. C fits.",
    "whyWrong": {
      "A": "'As a result' signals a consequence, not a contrast in coverage.",
      "B": "'Similarly' adds a like point, but this notes an omission.",
      "D": "'In fact' reinforces a prior point rather than marking this contrast."
    }
  },
  {
    "id": "transitions-t2-bp07",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The new tax credit was meant to help small farms. ______ most of its benefits flowed to large agricultural companies instead.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Similarly,"
      },
      {
        "letter": "B",
        "text": "In practice,"
      },
      {
        "letter": "C",
        "text": "As a result,"
      },
      {
        "letter": "D",
        "text": "For example,"
      }
    ],
    "answer": "B",
    "explanation": "The actual outcome differs from the intent. 'In practice' signals that gap between plan and reality. B fits.",
    "whyWrong": {
      "A": "'Similarly' adds a like point, but the result opposes the intent.",
      "C": "'As a result' would imply the outcome was the intended consequence, which it was not.",
      "D": "'For example' introduces an illustration, not a reversal of intent."
    }
  },
  {
    "id": "transitions-t2-bp08",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Wind power now supplies a large share of the country's electricity. ______ its share is expected to grow further as older coal plants retire.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Furthermore,"
      },
      {
        "letter": "B",
        "text": "Nevertheless,"
      },
      {
        "letter": "C",
        "text": "In contrast,"
      },
      {
        "letter": "D",
        "text": "Instead,"
      }
    ],
    "answer": "A",
    "explanation": "The expected growth adds to the point about wind's large current share. 'Furthermore' signals that addition. A fits.",
    "whyWrong": {
      "B": "'Nevertheless' signals concession, but the growth reinforces the point.",
      "C": "'In contrast' marks opposition not present here.",
      "D": "'Instead' signals a substitution, which does not fit."
    }
  },
  {
    "id": "transitions-t2-bp09",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The author spent years mastering traditional oil painting. ______ she abandoned the brush entirely, building her later works from cut paper alone.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "Likewise,"
      },
      {
        "letter": "B",
        "text": "Eventually,"
      },
      {
        "letter": "C",
        "text": "Therefore,"
      },
      {
        "letter": "D",
        "text": "For example,"
      }
    ],
    "answer": "B",
    "explanation": "Abandoning the brush is a later development after years of mastery. 'Eventually' signals that passage of time. B fits.",
    "whyWrong": {
      "A": "'Likewise' adds a similar point, but this marks a turn away from oil painting.",
      "C": "'Therefore' signals a result, but abandoning the brush does not follow logically from mastering it.",
      "D": "'For example' introduces an illustration, not a later shift."
    }
  },
  {
    "id": "transitions-t3-bp01",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The gains from the new farming method appeared only in fields with rich soil. On thin, sandy plots, ______ yields barely changed, suggesting the method depends heavily on existing conditions.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "consequently,"
      },
      {
        "letter": "B",
        "text": "by contrast,"
      },
      {
        "letter": "C",
        "text": "likewise,"
      },
      {
        "letter": "D",
        "text": "in addition,"
      }
    ],
    "answer": "B",
    "explanation": "The thin-soil result is opposed to the rich-soil gains—a contrast between two conditions. 'By contrast' signals it. B fits.",
    "whyWrong": {
      "A": "'Consequently' signals a result, but this contrasts two outcomes.",
      "C": "'Likewise' would suggest thin soil behaved like rich soil, contradicting 'barely changed.'",
      "D": "'In addition' adds a like point, but the outcomes differ."
    }
  },
  {
    "id": "transitions-t3-bp02",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Skeptics doubted the ancient city had ever existed. When the survey team uncovered its walls beneath the hillside, ______ the doubts gave way to a rush of new expeditions.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "however,"
      },
      {
        "letter": "B",
        "text": "nonetheless,"
      },
      {
        "letter": "C",
        "text": "predictably,"
      },
      {
        "letter": "D",
        "text": "for instance,"
      }
    ],
    "answer": "C",
    "explanation": "The surge of expeditions is the natural, expected response to the discovery. 'Predictably' signals that anticipated result. C fits.",
    "whyWrong": {
      "A": "'However' signals contrast, but the outcome follows from the discovery.",
      "B": "'Nonetheless' signals concession, but nothing here runs against expectation.",
      "D": "'For instance' introduces an example, not an expected consequence."
    }
  },
  {
    "id": "transitions-t3-bp03",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The policy reduced traffic in the city center as intended. Its designers were less prepared for a second effect: ______ nearby residential streets grew far busier as drivers sought to avoid the tolls.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "similarly,"
      },
      {
        "letter": "B",
        "text": "namely,"
      },
      {
        "letter": "C",
        "text": "therefore,"
      },
      {
        "letter": "D",
        "text": "in contrast,"
      }
    ],
    "answer": "B",
    "explanation": "The clause specifies the 'second effect' just named. 'Namely' introduces that specification. B fits.",
    "whyWrong": {
      "A": "'Similarly' adds a like point, but this identifies the specific effect.",
      "C": "'Therefore' signals a result, but the clause defines the effect rather than concluding.",
      "D": "'In contrast' marks opposition, but this explains the mentioned effect."
    }
  },
  {
    "id": "transitions-t3-bp04",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Critics assumed the two writers, working an ocean apart, could not have influenced each other. Their letters, ______ reveal a decade of ideas passed back and forth across the Atlantic.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "as expected,"
      },
      {
        "letter": "B",
        "text": "however,"
      },
      {
        "letter": "C",
        "text": "therefore,"
      },
      {
        "letter": "D",
        "text": "likewise,"
      }
    ],
    "answer": "B",
    "explanation": "The letters contradict the assumption of no influence. 'However' signals that reversal. B fits.",
    "whyWrong": {
      "A": "'As expected' would mean the letters confirmed the assumption, but they overturn it.",
      "C": "'Therefore' signals a result, not a contradiction.",
      "D": "'Likewise' adds a similar point, but the letters undercut the assumption."
    }
  },
  {
    "id": "transitions-t3-bp05",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The vaccine proved highly effective in the laboratory. Delivering it to remote villages without steady refrigeration, ______ posed a challenge the researchers had not fully anticipated.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "for example,"
      },
      {
        "letter": "B",
        "text": "as a result,"
      },
      {
        "letter": "C",
        "text": "however,"
      },
      {
        "letter": "D",
        "text": "similarly,"
      }
    ],
    "answer": "C",
    "explanation": "The delivery challenge contrasts with the lab success. 'However' signals that shift from success to difficulty. C fits.",
    "whyWrong": {
      "A": "'For example' introduces an illustration, not a contrasting difficulty.",
      "B": "'As a result' signals a consequence, but the challenge is a separate obstacle.",
      "D": "'Similarly' adds a like point, but this opposes the lab success."
    }
  },
  {
    "id": "transitions-t3-bp06",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Early economists treated trust as too vague to measure. Recent studies, ______ have found ways to quantify it, linking a region's level of trust to its rate of new business formation.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "likewise,"
      },
      {
        "letter": "B",
        "text": "by contrast,"
      },
      {
        "letter": "C",
        "text": "as a result,"
      },
      {
        "letter": "D",
        "text": "in short,"
      }
    ],
    "answer": "B",
    "explanation": "Recent studies measuring trust oppose the earlier view that it could not be measured. 'By contrast' signals that. B fits.",
    "whyWrong": {
      "A": "'Likewise' would suggest agreement with the earlier view, which is being overturned.",
      "C": "'As a result' signals a consequence, not the contrast between old and new views.",
      "D": "'In short' signals a summary, but new information is introduced."
    }
  },
  {
    "id": "transitions-t3-bp07",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The bird's song sounds like a single continuous note to the human ear. Slowed down in a recording, ______ it resolves into a rapid sequence of dozens of distinct tones.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "therefore,"
      },
      {
        "letter": "B",
        "text": "however,"
      },
      {
        "letter": "C",
        "text": "likewise,"
      },
      {
        "letter": "D",
        "text": "in addition,"
      }
    ],
    "answer": "B",
    "explanation": "The slowed recording reveals something opposite to the 'single note' impression—a contrast. 'However' signals it. B fits.",
    "whyWrong": {
      "A": "'Therefore' signals a result, but the finding contradicts the initial impression.",
      "C": "'Likewise' adds a similar point, but this reverses the impression.",
      "D": "'In addition' adds a supporting point, but the recording undercuts the first impression."
    }
  },
  {
    "id": "transitions-t3-bp08",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The report documents how the wetland filters pollutants, stores floodwater, and shelters rare birds. In dollar terms, ______ these unpriced services may exceed the value of the crops that would replace them.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "nevertheless,"
      },
      {
        "letter": "B",
        "text": "indeed,"
      },
      {
        "letter": "C",
        "text": "in contrast,"
      },
      {
        "letter": "D",
        "text": "for example,"
      }
    ],
    "answer": "B",
    "explanation": "The dollar comparison strengthens and confirms the value of the services just listed. 'Indeed' signals that emphatic reinforcement. B fits.",
    "whyWrong": {
      "A": "'Nevertheless' signals concession, but this reinforces the point.",
      "C": "'In contrast' marks opposition not present here.",
      "D": "'For example' introduces one instance, but this is a summarizing intensification."
    }
  },
  {
    "id": "transitions-t3-bp09",
    "domain": "rw-ei",
    "skill": "transitions",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The two theories predict the same outcome in ordinary conditions, so no experiment could tell them apart. At extreme temperatures, ______ they diverge sharply, offering physicists a rare chance to test which is correct.\n\nWhich choice completes the text with the most logical transition?",
    "choices": [
      {
        "letter": "A",
        "text": "likewise,"
      },
      {
        "letter": "B",
        "text": "however,"
      },
      {
        "letter": "C",
        "text": "as a result,"
      },
      {
        "letter": "D",
        "text": "in other words,"
      }
    ],
    "answer": "B",
    "explanation": "At extreme temperatures the theories differ, unlike in ordinary conditions—a contrast. 'However' signals it. B fits.",
    "whyWrong": {
      "A": "'Likewise' would suggest the same agreement, contradicting 'diverge sharply.'",
      "C": "'As a result' signals a consequence, not the contrast between conditions.",
      "D": "'In other words' signals a restatement, but this introduces a new, differing case."
    }
  },
  {
    "id": "synthesis-t1-bp01",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "While researching a landmark, a student took these notes:\n\n• The Eiffel Tower was completed in 1889 in Paris.\n• It was built as the entrance arch for a world's fair.\n• Many Parisians at first thought it was ugly.\n• It is now one of the most visited monuments in the world.\n\nThe student wants to emphasize how public opinion of the tower changed over time. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The Eiffel Tower was completed in 1889."
      },
      {
        "letter": "B",
        "text": "Though many Parisians first found the Eiffel Tower ugly, it is now one of the most visited monuments in the world."
      },
      {
        "letter": "C",
        "text": "The Eiffel Tower is located in Paris."
      },
      {
        "letter": "D",
        "text": "The Eiffel Tower was built for a world's fair."
      }
    ],
    "answer": "B",
    "explanation": "The change in opinion is shown by contrasting the early dislike with its later popularity. B captures both.",
    "whyWrong": {
      "A": "The completion date does not show a change in opinion.",
      "C": "Its location says nothing about changing opinion.",
      "D": "Its original purpose does not show how opinion shifted."
    }
  },
  {
    "id": "synthesis-t1-bp02",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "While researching an animal, a student took these notes:\n\n• The cheetah is the fastest land animal.\n• It can reach speeds of about 70 miles per hour.\n• It can maintain that speed only for short bursts.\n• After a sprint, it needs time to rest and cool down.\n\nThe student wants to emphasize a limitation of the cheetah's speed. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The cheetah is the fastest land animal."
      },
      {
        "letter": "B",
        "text": "The cheetah can reach about 70 miles per hour."
      },
      {
        "letter": "C",
        "text": "The cheetah can hold its top speed only in short bursts and must rest afterward."
      },
      {
        "letter": "D",
        "text": "The cheetah is a fast animal."
      }
    ],
    "answer": "C",
    "explanation": "A limitation is shown by the short bursts and the need to rest. C states that constraint.",
    "whyWrong": {
      "A": "Being the fastest emphasizes strength, not a limitation.",
      "B": "The top speed is a strength, not a limitation.",
      "D": "This is vague and does not identify a limitation."
    }
  },
  {
    "id": "synthesis-t1-bp03",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "While researching an inventor, a student took these notes:\n\n• Mary Anderson patented the windshield wiper in 1903.\n• At the time, drivers had to stop to wipe rain off the glass by hand.\n• Her device let drivers clear the glass from inside the car.\n• Wipers later became standard on all cars.\n\nThe student wants to explain the problem Anderson's invention solved. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Before Anderson's wiper, drivers had to stop and clear rain from the glass by hand; her device let them do it from inside the car."
      },
      {
        "letter": "B",
        "text": "Mary Anderson patented her invention in 1903."
      },
      {
        "letter": "C",
        "text": "Wipers later became standard on all cars."
      },
      {
        "letter": "D",
        "text": "Mary Anderson was an inventor."
      }
    ],
    "answer": "A",
    "explanation": "The problem solved is shown by contrasting the old hand-wiping with the new inside-the-car device. A does this.",
    "whyWrong": {
      "B": "The patent date does not explain the problem.",
      "C": "This describes later adoption, not the problem solved.",
      "D": "This is too vague to explain the problem."
    }
  },
  {
    "id": "synthesis-t1-bp04",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "While researching a food, a student took these notes:\n\n• Chocolate is made from the seeds of the cacao tree.\n• The seeds are bitter when raw.\n• They are fermented, dried, roasted, and ground.\n• Only after these steps does chocolate develop its familiar flavor.\n\nThe student wants to emphasize how much processing chocolate requires. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Chocolate comes from the cacao tree."
      },
      {
        "letter": "B",
        "text": "Raw cacao seeds must be fermented, dried, roasted, and ground before chocolate develops its familiar flavor."
      },
      {
        "letter": "C",
        "text": "Raw cacao seeds are bitter."
      },
      {
        "letter": "D",
        "text": "Chocolate has a familiar flavor."
      }
    ],
    "answer": "B",
    "explanation": "The amount of processing is emphasized by listing the required steps before the flavor appears. B does this.",
    "whyWrong": {
      "A": "The source of chocolate does not emphasize the processing.",
      "C": "Bitterness alone does not show how much processing is needed.",
      "D": "The flavor alone does not convey the processing involved."
    }
  },
  {
    "id": "synthesis-t1-bp05",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "While researching a place, a student took these notes:\n\n• The Dead Sea lies between Jordan and Israel.\n• Its water is nearly ten times saltier than the ocean.\n• The high salt makes swimmers float easily.\n• Very few organisms can live in such salty water.\n\nThe student wants to introduce the Dead Sea to readers unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The Dead Sea, a lake between Jordan and Israel, is nearly ten times saltier than the ocean."
      },
      {
        "letter": "B",
        "text": "Swimmers float easily in the Dead Sea."
      },
      {
        "letter": "C",
        "text": "Few organisms live in the Dead Sea."
      },
      {
        "letter": "D",
        "text": "The Dead Sea is very salty."
      }
    ],
    "answer": "A",
    "explanation": "A clear introduction gives what and where the Dead Sea is plus its defining trait. A names its location and extreme saltiness.",
    "whyWrong": {
      "B": "This gives one effect without introducing what the Dead Sea is.",
      "C": "This gives a consequence without the basic introduction.",
      "D": "This is vague and omits location and context."
    }
  },
  {
    "id": "synthesis-t1-bp06",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "While researching a musician, a student took these notes:\n\n• Ella began playing violin at age five.\n• She practiced two hours every day for a decade.\n• At fifteen, she won a national competition.\n• She now teaches young violinists herself.\n\nThe student wants to emphasize the role of practice in Ella's success. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Ella now teaches young violinists."
      },
      {
        "letter": "B",
        "text": "After practicing two hours a day for a decade, Ella won a national competition at fifteen."
      },
      {
        "letter": "C",
        "text": "Ella started playing violin at age five."
      },
      {
        "letter": "D",
        "text": "Ella plays the violin."
      }
    ],
    "answer": "B",
    "explanation": "The role of practice is emphasized by linking her decade of daily practice to her competition win. B does this.",
    "whyWrong": {
      "A": "Her teaching does not emphasize her own practice.",
      "C": "Her starting age alone does not show the role of practice.",
      "D": "This is vague and omits the practice entirely."
    }
  },
  {
    "id": "synthesis-t1-bp07",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "While researching a natural event, a student took these notes:\n\n• Fireflies produce light in their lower abdomen.\n• The light comes from a chemical reaction, not heat.\n• Because it gives off almost no heat, it is called 'cold light.'\n• Fireflies use the flashes to attract mates.\n\nThe student wants to explain why a firefly's light is unusual compared with most light sources. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Fireflies produce light in their abdomen."
      },
      {
        "letter": "B",
        "text": "Unlike most light sources, a firefly's light comes from a chemical reaction and gives off almost no heat."
      },
      {
        "letter": "C",
        "text": "Fireflies flash to attract mates."
      },
      {
        "letter": "D",
        "text": "Fireflies make light."
      }
    ],
    "answer": "B",
    "explanation": "What makes the light unusual is that it is chemical and nearly heatless, unlike ordinary light. B captures that contrast.",
    "whyWrong": {
      "A": "Where the light is produced does not explain what makes it unusual.",
      "C": "The purpose of the flashes does not address the unusual nature of the light.",
      "D": "This is vague and states nothing distinctive."
    }
  },
  {
    "id": "synthesis-t1-bp08",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "While researching a structure, a student took these notes:\n\n• The Great Wall of China was built over many centuries.\n• Different dynasties added and repaired sections.\n• Together the sections stretch thousands of miles.\n• Materials ranged from packed earth to cut stone.\n\nThe student wants to emphasize that the wall was built gradually by many groups. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The Great Wall stretches thousands of miles."
      },
      {
        "letter": "B",
        "text": "The Great Wall was built over many centuries, with different dynasties adding and repairing sections."
      },
      {
        "letter": "C",
        "text": "The wall was made of earth and stone."
      },
      {
        "letter": "D",
        "text": "The Great Wall is in China."
      }
    ],
    "answer": "B",
    "explanation": "Gradual construction by many groups is shown by the centuries of work and the different dynasties. B captures both.",
    "whyWrong": {
      "A": "The length does not show that it was built gradually by many groups.",
      "C": "The materials do not convey the gradual, multi-group construction.",
      "D": "Its location does not address how it was built."
    }
  },
  {
    "id": "synthesis-t2-bp01",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "While researching a technology, a student took these notes:\n\n• Early car engines were started with a hand crank.\n• Cranking was hard and sometimes caused injuries.\n• In 1912, the electric self-starter was introduced.\n• Drivers could then start a car with the push of a button.\n\nThe student wants to explain why the electric self-starter was an important improvement. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Early cars were started with a hand crank."
      },
      {
        "letter": "B",
        "text": "Because hand cranking was hard and sometimes caused injuries, the 1912 electric self-starter let drivers start a car with the push of a button."
      },
      {
        "letter": "C",
        "text": "The electric self-starter was introduced in 1912."
      },
      {
        "letter": "D",
        "text": "Cars have engines."
      }
    ],
    "answer": "B",
    "explanation": "The importance is shown by linking the difficult, injury-prone crank to the easy button start that replaced it. B does this.",
    "whyWrong": {
      "A": "This states the old method without showing why the change mattered.",
      "C": "The date alone does not explain the improvement's importance.",
      "D": "This is a general fact unrelated to the improvement."
    }
  },
  {
    "id": "synthesis-t2-bp02",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "While researching a scientist, a student took these notes:\n\n• Barbara McClintock studied corn genetics.\n• She proposed that some genes could move within a chromosome.\n• At first, many scientists doubted her idea.\n• Decades later, her work was confirmed and won a Nobel Prize.\n\nThe student wants to emphasize that McClintock's idea was accepted only after a long delay. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Barbara McClintock studied corn genetics."
      },
      {
        "letter": "B",
        "text": "Though many scientists first doubted McClintock's idea that genes could move, her work was confirmed decades later and won a Nobel Prize."
      },
      {
        "letter": "C",
        "text": "McClintock proposed that genes could move within a chromosome."
      },
      {
        "letter": "D",
        "text": "McClintock won a Nobel Prize."
      }
    ],
    "answer": "B",
    "explanation": "The long delay is shown by the early doubt and the confirmation decades later. B captures both.",
    "whyWrong": {
      "A": "Her field of study does not show the delay in acceptance.",
      "C": "The idea itself omits how long acceptance took.",
      "D": "The prize alone does not convey the decades of doubt."
    }
  },
  {
    "id": "synthesis-t2-bp03",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "While researching a city project, a student took these notes:\n\n• A neighborhood replaced an empty lot with a community garden.\n• Neighbors who had never spoken began working side by side.\n• The garden also supplied fresh vegetables to a nearby food bank.\n• Reports of vandalism on the block dropped afterward.\n\nThe student wants to convey that the garden had several different kinds of benefits. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The garden replaced an empty lot."
      },
      {
        "letter": "B",
        "text": "The community garden brought neighbors together, supplied vegetables to a food bank, and coincided with a drop in vandalism."
      },
      {
        "letter": "C",
        "text": "The garden was built on an empty lot in the neighborhood."
      },
      {
        "letter": "D",
        "text": "Neighbors worked in the garden."
      }
    ],
    "answer": "B",
    "explanation": "Several kinds of benefits are conveyed by combining the social, food, and safety effects. B does this.",
    "whyWrong": {
      "A": "This gives only the setup, not the benefits.",
      "C": "The location does not convey the benefits.",
      "D": "This gives one detail, not the range of benefits."
    }
  },
  {
    "id": "synthesis-t2-bp04",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "While researching a discovery, a student took these notes:\n\n• In 1928, Alexander Fleming noticed mold had killed bacteria in a dish.\n• The mold produced a substance he named penicillin.\n• It took more than a decade to turn it into a usable medicine.\n• Penicillin went on to save millions of lives.\n\nThe student wants to explain that the discovery was not immediately useful as a medicine. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Penicillin has saved millions of lives."
      },
      {
        "letter": "B",
        "text": "Although Fleming noticed penicillin's effect in 1928, it took more than a decade to turn it into a usable medicine."
      },
      {
        "letter": "C",
        "text": "Fleming noticed mold killing bacteria in a dish."
      },
      {
        "letter": "D",
        "text": "Fleming named the substance penicillin."
      }
    ],
    "answer": "B",
    "explanation": "The delay is shown by pairing the 1928 discovery with the decade-plus it took to become a medicine. B does this.",
    "whyWrong": {
      "A": "The lives saved emphasize impact, not the delay in usefulness.",
      "C": "The observation alone does not show the delay.",
      "D": "Naming the substance does not convey the delay."
    }
  },
  {
    "id": "synthesis-t2-bp05",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "While researching a species, a student took these notes:\n\n• Sea otters eat large numbers of sea urchins.\n• Sea urchins graze on kelp.\n• Where otters vanish, urchins multiply and strip the kelp forests bare.\n• Kelp forests shelter many other marine species.\n\nThe student wants to explain how sea otters help protect kelp forests. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Sea otters eat sea urchins."
      },
      {
        "letter": "B",
        "text": "By eating sea urchins, which would otherwise strip the kelp bare, sea otters help protect the kelp forests that shelter many species."
      },
      {
        "letter": "C",
        "text": "Kelp forests shelter many marine species."
      },
      {
        "letter": "D",
        "text": "Sea urchins graze on kelp."
      }
    ],
    "answer": "B",
    "explanation": "How otters protect kelp is explained by the chain: otters eat urchins, which keeps the urchins from destroying the kelp. B connects the links.",
    "whyWrong": {
      "A": "This gives one fact without connecting it to protecting kelp.",
      "C": "This describes kelp's role but not the otters' effect.",
      "D": "This describes the threat without the otters' protective role."
    }
  },
  {
    "id": "synthesis-t2-bp06",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "While researching an artist, a student took these notes:\n\n• Hokusai made thousands of prints over his long life.\n• He changed his artistic name more than thirty times.\n• He said he did not create anything worthwhile until after age seventy.\n• His most famous work was made in his early seventies.\n\nThe student wants to emphasize that Hokusai valued his later work over his earlier work. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Hokusai made thousands of prints."
      },
      {
        "letter": "B",
        "text": "Hokusai said he created nothing worthwhile until after seventy, and his most famous work came in his early seventies."
      },
      {
        "letter": "C",
        "text": "Hokusai changed his name more than thirty times."
      },
      {
        "letter": "D",
        "text": "Hokusai was a printmaker."
      }
    ],
    "answer": "B",
    "explanation": "His valuing of later work is shown by his own statement plus the fact that his best-known work came late. B captures both.",
    "whyWrong": {
      "A": "The number of prints does not show he valued later work more.",
      "C": "His name changes do not address which work he valued.",
      "D": "This is vague and omits his view of his work."
    }
  },
  {
    "id": "synthesis-t2-bp07",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "While researching a material, a student took these notes:\n\n• Bamboo is technically a grass, not a tree.\n• It is as strong as some types of steel by weight.\n• It grows back quickly after being cut.\n• Builders use it for scaffolding and flooring.\n\nThe student wants to explain why bamboo is a practical building material. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Bamboo is a type of grass."
      },
      {
        "letter": "B",
        "text": "Bamboo is strong for its weight and grows back quickly after cutting, which makes it practical for building."
      },
      {
        "letter": "C",
        "text": "Bamboo is not a tree."
      },
      {
        "letter": "D",
        "text": "Builders use bamboo."
      }
    ],
    "answer": "B",
    "explanation": "Practicality is explained by combining bamboo's strength and fast regrowth. B links these to its use in building.",
    "whyWrong": {
      "A": "Its classification does not explain its practicality.",
      "C": "That it is not a tree does not address why it is useful.",
      "D": "This states its use without explaining why it is practical."
    }
  },
  {
    "id": "synthesis-t2-bp08",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "While researching a program, a student took these notes:\n\n• A town gave residents free tree seedlings to plant.\n• Thousands of trees were planted along the streets.\n• Summer temperatures on the shaded blocks dropped noticeably.\n• Residents reported spending more time outdoors.\n\nThe student wants to make a single claim about the effects of the tree program. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The town gave out free tree seedlings."
      },
      {
        "letter": "B",
        "text": "After thousands of donated trees were planted, shaded blocks grew cooler in summer and residents spent more time outdoors."
      },
      {
        "letter": "C",
        "text": "Trees were planted along the streets."
      },
      {
        "letter": "D",
        "text": "Residents received seedlings from the town."
      }
    ],
    "answer": "B",
    "explanation": "A single claim about effects combines the cooler temperatures and increased outdoor time. B synthesizes both outcomes.",
    "whyWrong": {
      "A": "This states the action, not its effects.",
      "C": "This describes what was done, not the results.",
      "D": "This restates the giveaway without the effects."
    }
  },
  {
    "id": "synthesis-t3-bp01",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "While researching two studies, a student took these notes:\n\n• Study 1 found that city birds sing at a higher pitch than country birds.\n• Study 1 attributed the higher pitch to low-frequency traffic noise.\n• Study 2 found that city birds also sing more loudly, not just higher.\n• Study 2 argued that loudness, not pitch alone, helps their songs carry over noise.\n\nThe student wants to note how Study 2 extends the findings of Study 1. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Study 1 examined city birds and country birds."
      },
      {
        "letter": "B",
        "text": "Study 2 extends Study 1 by showing that city birds sing not only at a higher pitch but also more loudly to carry over traffic noise."
      },
      {
        "letter": "C",
        "text": "City birds sing at a higher pitch than country birds."
      },
      {
        "letter": "D",
        "text": "Both studies looked at birdsong."
      }
    ],
    "answer": "B",
    "explanation": "Extending Study 1 means adding Study 2's finding about loudness to the pitch finding. B expresses that extension.",
    "whyWrong": {
      "A": "This describes Study 1 without Study 2's addition.",
      "C": "This restates a Study 1 finding without the extension.",
      "D": "Noting a shared topic does not capture how Study 2 extends Study 1."
    }
  },
  {
    "id": "synthesis-t3-bp02",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "While researching a debate, a student took these notes:\n\n• Some scholars credit the printing press with spreading literacy.\n• Others note that literacy rose fastest where schools were also expanding.\n• Records show presses and new schools often appeared in the same decades.\n• In regions with presses but few schools, literacy rose only slowly.\n\nThe student wants to present a balanced conclusion that both sides could accept. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The printing press alone caused literacy to rise."
      },
      {
        "letter": "B",
        "text": "Literacy rose fastest where presses and expanding schools appeared together, suggesting the press mattered most alongside schooling."
      },
      {
        "letter": "C",
        "text": "Schools, not presses, were the only cause of rising literacy."
      },
      {
        "letter": "D",
        "text": "Presses and schools appeared in the same decades."
      }
    ],
    "answer": "B",
    "explanation": "A balanced conclusion credits the press but ties its effect to schooling, which both sides could accept. B does this.",
    "whyWrong": {
      "A": "Crediting the press alone ignores the role of schools, so one side would reject it.",
      "C": "Denying the press any role ignores the evidence that it mattered alongside schools.",
      "D": "The timing fact alone is not a conclusion both sides could accept."
    }
  },
  {
    "id": "synthesis-t3-bp03",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "While researching two experiments, a student took these notes:\n\n• Experiment A tested a fertilizer on greenhouse plants and found faster growth.\n• Experiment A used ideal light and watering.\n• Experiment B tested the same fertilizer on outdoor field plants.\n• Experiment B found no clear growth benefit under real weather.\n\nThe student wants to caution against relying on Experiment A alone. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Experiment A found faster growth in the greenhouse."
      },
      {
        "letter": "B",
        "text": "Although Experiment A found faster growth under ideal greenhouse conditions, Experiment B found no clear benefit outdoors under real weather."
      },
      {
        "letter": "C",
        "text": "The fertilizer was tested in two experiments."
      },
      {
        "letter": "D",
        "text": "Experiment B used outdoor field plants."
      }
    ],
    "answer": "B",
    "explanation": "The caution requires noting A's ideal conditions and B's null field result, which together temper A's finding. B does this.",
    "whyWrong": {
      "A": "Reporting A alone is exactly the incautious step to avoid.",
      "C": "Saying there were two experiments does not caution about A's limits.",
      "D": "This states B's setup without conveying the cautionary contrast."
    }
  },
  {
    "id": "synthesis-t3-bp04",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "While researching a poet, a student took these notes:\n\n• The poet wrote in a plain, everyday vocabulary.\n• Critics of her time dismissed the poems as too simple.\n• Later critics praised the same plainness as bold and modern.\n• Her reputation rose sharply a generation after her death.\n\nThe student wants to emphasize how critical opinion of the poet's plain style reversed over time. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The poet wrote in plain, everyday vocabulary."
      },
      {
        "letter": "B",
        "text": "The plainness that critics of her time dismissed as too simple was later praised as bold and modern, lifting her reputation."
      },
      {
        "letter": "C",
        "text": "The poet used everyday words."
      },
      {
        "letter": "D",
        "text": "Her reputation rose after her death."
      }
    ],
    "answer": "B",
    "explanation": "The reversal is shown by the same plain style being dismissed then praised. B captures both sides of the shift.",
    "whyWrong": {
      "A": "Her vocabulary alone does not show the reversal in opinion.",
      "C": "This restates her style without the change in reception.",
      "D": "This gives the later result without the earlier dismissal."
    }
  },
  {
    "id": "synthesis-t3-bp05",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "While researching a policy, a student took these notes:\n\n• A city made its downtown buses free to ride.\n• Bus ridership downtown rose by half within a year.\n• Traffic congestion in the core fell modestly.\n• The lost fare revenue strained the transit budget.\n\nThe student wants to convey that the free-fare policy had both benefits and a drawback. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The city made downtown buses free."
      },
      {
        "letter": "B",
        "text": "Free downtown buses raised ridership by half and eased congestion, but the lost fares strained the transit budget."
      },
      {
        "letter": "C",
        "text": "Bus ridership rose by half."
      },
      {
        "letter": "D",
        "text": "The buses were free to ride."
      }
    ],
    "answer": "B",
    "explanation": "Both benefits and a drawback are conveyed by pairing higher ridership and less congestion with the budget strain. B does this.",
    "whyWrong": {
      "A": "This states the policy without its mixed effects.",
      "C": "This gives one benefit, not the mixed picture.",
      "D": "This restates the policy without any effects."
    }
  },
  {
    "id": "synthesis-t3-bp06",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "While researching two regions, a student took these notes:\n\n• Region X and Region Y both introduced the same reading program.\n• In Region X, teachers received weeks of training first.\n• In Region Y, teachers got the materials but little training.\n• Reading scores rose sharply in Region X but changed little in Region Y.\n\nThe student wants to argue that teacher training shaped the program's success. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Both regions used the same reading program."
      },
      {
        "letter": "B",
        "text": "Scores rose sharply in Region X, where teachers were trained, but changed little in Region Y, where they were not—pointing to training as key."
      },
      {
        "letter": "C",
        "text": "Region X introduced a reading program."
      },
      {
        "letter": "D",
        "text": "Region Y gave teachers the materials."
      }
    ],
    "answer": "B",
    "explanation": "The argument that training mattered is made by contrasting trained Region X's gains with untrained Region Y's flat scores. B does this.",
    "whyWrong": {
      "A": "The shared program is what training explains the difference within, not the argument itself.",
      "C": "This describes Region X without the comparison that shows training's role.",
      "D": "This states one detail about Region Y without the contrast."
    }
  },
  {
    "id": "synthesis-t3-bp07",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "While researching a building method, a student took these notes:\n\n• Ancient Roman concrete has lasted two thousand years.\n• Modern concrete often cracks within decades.\n• Roman concrete contained seawater and volcanic ash.\n• Recent tests show these ingredients let it slowly heal its own cracks.\n\nThe student wants to explain why Roman concrete has outlasted modern concrete. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "Roman concrete is two thousand years old."
      },
      {
        "letter": "B",
        "text": "Roman concrete has outlasted modern concrete because its seawater and volcanic ash let it slowly heal its own cracks."
      },
      {
        "letter": "C",
        "text": "Modern concrete cracks within decades."
      },
      {
        "letter": "D",
        "text": "Roman concrete contained volcanic ash."
      }
    ],
    "answer": "B",
    "explanation": "The reason for the longer life is explained by the self-healing ingredients. B ties the ingredients to the durability.",
    "whyWrong": {
      "A": "Its age states the outcome without explaining the cause.",
      "C": "This describes modern concrete's flaw without the Roman explanation.",
      "D": "This names one ingredient without explaining the self-healing effect."
    }
  },
  {
    "id": "synthesis-t3-bp08",
    "domain": "rw-ei",
    "skill": "synthesis",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "While researching a claim, a student took these notes:\n\n• A company advertised that its app improved users' memory.\n• Its study tested only people who used the app daily for months.\n• Those users also tended to sleep more and exercise regularly.\n• No comparison group of non-users was included.\n\nThe student wants to explain why the company's evidence is weak. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      {
        "letter": "A",
        "text": "The app was advertised as improving memory."
      },
      {
        "letter": "B",
        "text": "The company's evidence is weak because it lacked a non-user comparison group and its users also slept and exercised more, offering other explanations for any gains."
      },
      {
        "letter": "C",
        "text": "The study tested daily users for months."
      },
      {
        "letter": "D",
        "text": "The users exercised regularly."
      }
    ],
    "answer": "B",
    "explanation": "The weakness is explained by the missing comparison group and the confounding habits that could explain any improvement. B captures both.",
    "whyWrong": {
      "A": "The advertised claim is what the weak evidence supports, not the explanation of the weakness.",
      "C": "This describes the sample without naming the flaws.",
      "D": "This gives one confounding factor without the missing-control-group point."
    }
  },
];
