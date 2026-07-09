/* SAT Quest — ORIGINAL SAT-style Reading & Writing bank: Standard English Conventions.
   Every passage and question was written from scratch for this app. None are
   copied, paraphrased, or adapted from College Board, Bluebook, Khan Academy,
   or any published test or prep book. They imitate only the STRUCTURE, tone,
   and difficulty of the digital SAT.

   Item shape: { id, domain, skill, tier, text, choices:[{letter,text}],
   answer, explanation, whyWrong:{letter:reason} }. The loader (rw/index.js)
   adds difficulty labels, time targets, and strategy tips. */

const RW_BANK_SEC = [
  {
    "id": "boundaries-t1-01",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe museum's newest wing houses a collection of rare maps ______ some of them date back more than four hundred years.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", and"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": " and, "
      },
      {
        "letter": "D",
        "text": "; furthermore"
      }
    ],
    "answer": "A",
    "explanation": "Both sides are complete sentences. A comma plus the conjunction \"and\" legally joins them.",
    "whyWrong": {
      "B": "A comma alone between two complete sentences is a comma splice.",
      "C": "This misplaces the comma after \"and.\"",
      "D": "This would need \"; furthermore,\" with a comma after the transition."
    }
  },
  {
    "id": "boundaries-t1-02",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe hikers reached the summit at dawn ______ the view stretched for miles in every direction.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": " and"
      },
      {
        "letter": "D",
        "text": " but"
      }
    ],
    "answer": "A",
    "explanation": "Both sides are complete sentences with no conjunction, so a semicolon correctly joins them.",
    "whyWrong": {
      "B": "A comma alone creates a comma splice between two sentences.",
      "C": "\"and\" would need a comma before it to join two clauses.",
      "D": "\"but\" would need a preceding comma and signals a contrast that is not there."
    }
  },
  {
    "id": "boundaries-t2-01",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nAfter months of testing in the desert ______ the engineers were finally confident that the rover could survive extreme heat.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " —"
      }
    ],
    "answer": "B",
    "explanation": "The opening is an introductory phrase, not a complete sentence, so a comma sets it off from the main clause.",
    "whyWrong": {
      "A": "A semicolon requires a complete clause before it.",
      "C": "A colon requires a complete clause before it.",
      "D": "A dash is not conventional after this short introductory phrase."
    }
  },
  {
    "id": "boundaries-t2-02",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe recipe calls for three ______ flour, butter, and a pinch of salt.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "ingredients:"
      },
      {
        "letter": "B",
        "text": "ingredients,"
      },
      {
        "letter": "C",
        "text": "ingredients;"
      },
      {
        "letter": "D",
        "text": "ingredients"
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes a list that explains \"three ingredients,\" so a colon is correct.",
    "whyWrong": {
      "B": "A comma is too weak to introduce this explanatory list.",
      "C": "A semicolon requires a complete clause after it, but a list follows.",
      "D": "Some punctuation is needed to introduce the list."
    }
  },
  {
    "id": "boundaries-t2-03",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe documentary was praised for its stunning ______ it won three awards for cinematography alone.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "visuals;"
      },
      {
        "letter": "B",
        "text": "visuals,"
      },
      {
        "letter": "C",
        "text": "visuals"
      },
      {
        "letter": "D",
        "text": "visuals, and, "
      }
    ],
    "answer": "A",
    "explanation": "Both sides are complete sentences, so a semicolon correctly joins them.",
    "whyWrong": {
      "B": "A comma alone between two sentences is a comma splice.",
      "C": "Two complete sentences cannot run together with no punctuation.",
      "D": "This misplaces commas and adds an unneeded conjunction."
    }
  },
  {
    "id": "boundaries-t3-01",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe novelist ______ whose debut had won a major prize ______ struggled for years to finish a second book.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", ... ,"
      },
      {
        "letter": "B",
        "text": " ... ,"
      },
      {
        "letter": "C",
        "text": ", ..."
      },
      {
        "letter": "D",
        "text": " ... "
      }
    ],
    "answer": "A",
    "explanation": "The phrase \"whose debut had won a major prize\" is nonessential and must be enclosed by a pair of commas.",
    "whyWrong": {
      "B": "This leaves off the opening comma, unbalancing the interrupter.",
      "C": "This leaves off the closing comma, unbalancing the interrupter.",
      "D": "A nonessential clause needs commas, not zero punctuation."
    }
  },
  {
    "id": "form-sense-t1-01",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe box of old photographs ______ been sitting in the attic for decades.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "has"
      },
      {
        "letter": "B",
        "text": "have"
      },
      {
        "letter": "C",
        "text": "were"
      },
      {
        "letter": "D",
        "text": "are"
      }
    ],
    "answer": "A",
    "explanation": "The subject is \"box\" (singular), not \"photographs,\" which sits inside a prepositional phrase. A singular subject takes \"has.\"",
    "whyWrong": {
      "B": "\"have\" agrees with the plural \"photographs,\" not the true subject \"box.\"",
      "C": "\"were\" is plural and past; the subject is singular.",
      "D": "\"are\" is plural and does not fit the singular subject \"box.\""
    }
  },
  {
    "id": "form-sense-t1-02",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe team of scientists ______ presenting its findings at the conference next week.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "is"
      },
      {
        "letter": "B",
        "text": "are"
      },
      {
        "letter": "C",
        "text": "were"
      },
      {
        "letter": "D",
        "text": "have been"
      }
    ],
    "answer": "A",
    "explanation": "The subject \"team\" is singular (a single unit), and \"its\" later confirms singular, so \"is\" agrees.",
    "whyWrong": {
      "B": "\"are\" treats \"team\" as plural, but it is a singular collective here.",
      "C": "\"were\" is plural and past, conflicting with \"next week.\"",
      "D": "\"have been\" is plural and does not fit the singular subject."
    }
  },
  {
    "id": "form-sense-t2-01",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nEach of the volunteers ______ responsible for setting up one section of the fair.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "are"
      },
      {
        "letter": "B",
        "text": "is"
      },
      {
        "letter": "C",
        "text": "were"
      },
      {
        "letter": "D",
        "text": "have been"
      }
    ],
    "answer": "B",
    "explanation": "\"Each\" is singular and controls the verb, despite the plural \"volunteers\" that follows. A singular subject takes \"is.\"",
    "whyWrong": {
      "A": "\"are\" agrees with \"volunteers,\" but the subject is \"each.\"",
      "C": "\"were\" is plural and does not match \"each.\"",
      "D": "\"have been\" is plural and mismatches the singular \"each.\""
    }
  },
  {
    "id": "form-sense-t2-02",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nBy the time the storm reached the coast, residents ______ already boarded their windows and moved inland.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "have"
      },
      {
        "letter": "B",
        "text": "has"
      },
      {
        "letter": "C",
        "text": "had"
      },
      {
        "letter": "D",
        "text": "will have"
      }
    ],
    "answer": "C",
    "explanation": "The boarding happened before the past-tense arrival of the storm, so the past perfect \"had boarded\" is required.",
    "whyWrong": {
      "A": "\"have\" is present perfect, but the frame is entirely in the past.",
      "B": "\"has\" is singular and present perfect; the subject is plural and the time is past.",
      "D": "\"will have\" points to the future, not before a past event."
    }
  },
  {
    "id": "form-sense-t2-03",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe committee reviewed the proposals carefully before ______ announced the winner.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "it"
      },
      {
        "letter": "B",
        "text": "they"
      },
      {
        "letter": "C",
        "text": "them"
      },
      {
        "letter": "D",
        "text": "we"
      }
    ],
    "answer": "A",
    "explanation": "The pronoun refers to \"committee,\" a singular collective noun, so the singular \"it\" agrees.",
    "whyWrong": {
      "B": "\"they\" is plural and does not agree with the singular \"committee.\"",
      "C": "\"them\" is an object pronoun and cannot serve as the subject of \"announced.\"",
      "D": "\"we\" has no antecedent in the sentence."
    }
  },
  {
    "id": "form-sense-t3-01",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nNeither the director nor the actors ______ satisfied with the first cut of the film.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "was"
      },
      {
        "letter": "B",
        "text": "were"
      },
      {
        "letter": "C",
        "text": "is"
      },
      {
        "letter": "D",
        "text": "has been"
      }
    ],
    "answer": "B",
    "explanation": "With \"neither...nor,\" the verb agrees with the nearer subject—here \"actors,\" which is plural—so \"were\" is correct.",
    "whyWrong": {
      "A": "\"was\" would fit only if the nearer subject were singular.",
      "C": "\"is\" is singular and present; the nearer subject is plural.",
      "D": "\"has been\" is singular and mismatches the plural \"actors.\""
    }
  },
  {
    "id": "form-sense-t3-02",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nHaving studied the migration patterns for years, ______ able to predict the birds' arrival almost to the day.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "the researcher was"
      },
      {
        "letter": "B",
        "text": "the data showed the researcher was"
      },
      {
        "letter": "C",
        "text": "it was clear the researcher was"
      },
      {
        "letter": "D",
        "text": "the prediction was"
      }
    ],
    "answer": "A",
    "explanation": "The opening modifier \"Having studied...for years\" must describe the person who studied—the researcher. A places that noun right after the modifier.",
    "whyWrong": {
      "B": "\"the data\" did not study migration for years, so the modifier dangles.",
      "C": "\"it\" did not do the studying, leaving the modifier misplaced.",
      "D": "\"the prediction\" did not study anything, so the modifier is dangling."
    }
  },
  {
    "id": "boundaries-t2-04",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe telescope captured light from a galaxy so distant ______ the image showed the galaxy as it appeared billions of years ago.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "that"
      },
      {
        "letter": "B",
        "text": "that,"
      },
      {
        "letter": "C",
        "text": ". That"
      },
      {
        "letter": "D",
        "text": "; that"
      }
    ],
    "answer": "A",
    "explanation": "The clause \"so distant that the image showed...\" is a single connected structure; no punctuation belongs before \"that.\"",
    "whyWrong": {
      "B": "A comma after \"that\" wrongly separates it from its clause.",
      "C": "A period creates a fragment (\"That the image...\").",
      "D": "A semicolon requires a complete clause before it, but \"so distant\" is not complete."
    }
  },
  {
    "id": "boundaries-t3-02",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe treaty was signed by three leaders ______ each of whom would later be honored in their home country ______ and it ended a decade of conflict.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", ... ,"
      },
      {
        "letter": "B",
        "text": " ... ,"
      },
      {
        "letter": "C",
        "text": ", ..."
      },
      {
        "letter": "D",
        "text": " ... "
      }
    ],
    "answer": "A",
    "explanation": "The clause \"each of whom would later be honored...\" is nonessential and must be set off by a pair of commas.",
    "whyWrong": {
      "B": "This omits the opening comma, leaving the interrupter unbalanced.",
      "C": "This omits the closing comma before \"and.\"",
      "D": "A nonessential clause needs enclosing commas, not none."
    }
  },
  {
    "id": "form-sense-t2-04",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe results of the experiment ______ published only after three other labs confirmed them.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "were"
      },
      {
        "letter": "B",
        "text": "was"
      },
      {
        "letter": "C",
        "text": "has been"
      },
      {
        "letter": "D",
        "text": "is"
      }
    ],
    "answer": "A",
    "explanation": "The subject is \"results\" (plural); \"of the experiment\" is a prepositional phrase. A plural subject takes \"were.\"",
    "whyWrong": {
      "B": "\"was\" is singular and agrees with \"experiment,\" not the true subject \"results.\"",
      "C": "\"has been\" is singular.",
      "D": "\"is\" is singular and present; the subject is plural."
    }
  },
  {
    "id": "form-sense-t3-03",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nWalking home through the empty streets, ______ seemed louder than usual to the poet.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "every small sound"
      },
      {
        "letter": "B",
        "text": "the streets"
      },
      {
        "letter": "C",
        "text": "it"
      },
      {
        "letter": "D",
        "text": "there"
      }
    ],
    "answer": "A",
    "explanation": "The introductory modifier \"Walking home...\" should describe whoever is walking; among the choices, only a noun the poet perceives (\"every small sound\") lets the sentence read sensibly with \"to the poet.\" The sounds are what seemed louder.",
    "whyWrong": {
      "B": "\"the streets\" being louder than usual is illogical, and the streets are not walking.",
      "C": "\"it\" has no clear antecedent to attach the modifier to.",
      "D": "\"there\" cannot serve as the subject that \"seemed louder.\""
    }
  },
  {
    "id": "boundaries-t1-03",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe library closes at nine ______ the café next door stays open until midnight.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", but"
      },
      {
        "letter": "B",
        "text": " but"
      },
      {
        "letter": "C",
        "text": ", and but"
      },
      {
        "letter": "D",
        "text": " but,"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses joined by \"but\" need a comma before the coordinating conjunction: \"..., but...\".",
    "whyWrong": {
      "B": "A comma is required before \"but\" joining two independent clauses.",
      "C": "\"and but\" pairs two conjunctions incorrectly.",
      "D": "The comma is misplaced after \"but.\""
    }
  },
  {
    "id": "boundaries-t1-04",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Choose the option that conforms to Standard English conventions.\n\nAfter the long hike ______ the campers were ready for a hot meal.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": " —and"
      },
      {
        "letter": "D",
        "text": " :"
      }
    ],
    "answer": "A",
    "explanation": "An introductory phrase (\"After the long hike\") is set off from the main clause with a comma.",
    "whyWrong": {
      "B": "A semicolon joins two independent clauses; the opener is not one.",
      "C": "A dash with \"and\" is ungrammatical here.",
      "D": "A colon does not fit after an introductory phrase."
    }
  },
  {
    "id": "boundaries-t1-05",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe recipe needs three ______ eggs, flour, and sugar.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "ingredients:"
      },
      {
        "letter": "B",
        "text": "ingredients"
      },
      {
        "letter": "C",
        "text": "ingredients,"
      },
      {
        "letter": "D",
        "text": "ingredients;"
      }
    ],
    "answer": "A",
    "explanation": "A colon properly introduces the list that explains the \"three ingredients.\"",
    "whyWrong": {
      "B": "Without punctuation the list runs into the sentence.",
      "C": "A comma is too weak to introduce this explanatory list.",
      "D": "A semicolon does not introduce a list."
    }
  },
  {
    "id": "boundaries-t1-06",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe storm knocked out the ______ we lit candles and waited.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "power;"
      },
      {
        "letter": "B",
        "text": "power"
      },
      {
        "letter": "C",
        "text": "power,"
      },
      {
        "letter": "D",
        "text": "power and"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses (\"The storm... power\" and \"we lit candles...\") can be joined by a semicolon.",
    "whyWrong": {
      "B": "With no punctuation the clauses form a run-on.",
      "C": "A comma alone creates a comma splice.",
      "D": "\"and\" without a comma is awkward and here changes the meaning."
    }
  },
  {
    "id": "boundaries-t2-05",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe novel, which took her a decade to ______ became an instant bestseller.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "write,"
      },
      {
        "letter": "B",
        "text": "write"
      },
      {
        "letter": "C",
        "text": "write;"
      },
      {
        "letter": "D",
        "text": "write:"
      }
    ],
    "answer": "A",
    "explanation": "The nonrestrictive clause \"which took her a decade to write\" must be closed with a comma before the sentence continues.",
    "whyWrong": {
      "B": "Omitting the comma leaves the inserted clause unclosed.",
      "C": "A semicolon cannot close a mid-sentence nonrestrictive clause.",
      "D": "A colon does not fit here."
    }
  },
  {
    "id": "boundaries-t2-06",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Choose the option that conforms to Standard English conventions.\n\nShe had one goal that ______ to finish the marathon before sunset.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "day:"
      },
      {
        "letter": "B",
        "text": "day"
      },
      {
        "letter": "C",
        "text": "day,"
      },
      {
        "letter": "D",
        "text": "day;"
      }
    ],
    "answer": "A",
    "explanation": "A colon introduces the explanation of her \"one goal.\"",
    "whyWrong": {
      "B": "No punctuation runs the explanation into the clause.",
      "C": "A comma is too weak to introduce this explanatory statement.",
      "D": "A semicolon would need an independent clause; the aim reads as an explanation."
    }
  },
  {
    "id": "boundaries-t2-07",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe hikers reached the ______ however, clouds hid the view they had climbed to see.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "summit;"
      },
      {
        "letter": "B",
        "text": "summit,"
      },
      {
        "letter": "C",
        "text": "summit"
      },
      {
        "letter": "D",
        "text": "summit:"
      }
    ],
    "answer": "A",
    "explanation": "Before the conjunctive adverb \"however\" joining two independent clauses, a semicolon is required.",
    "whyWrong": {
      "B": "A comma before \"however\" here creates a comma splice.",
      "C": "No punctuation makes a run-on.",
      "D": "A colon does not fit before \"however.\""
    }
  },
  {
    "id": "boundaries-t3-03",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe committee approved three ______ a new library, a bike path, and a community garden—each funded for five years.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "projects—"
      },
      {
        "letter": "B",
        "text": "projects,"
      },
      {
        "letter": "C",
        "text": "projects"
      },
      {
        "letter": "D",
        "text": "projects;"
      }
    ],
    "answer": "A",
    "explanation": "A dash introduces the list, matching the closing dash after \"garden\" to set off the parenthetical list.",
    "whyWrong": {
      "B": "A comma does not pair with the later dash.",
      "C": "No punctuation runs the list together.",
      "D": "A semicolon would not pair with the closing dash."
    }
  },
  {
    "id": "boundaries-t3-04",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Choose the option that conforms to Standard English conventions.\n\nAlthough the bridge looked ______ engineers found hairline cracks that forced its closure.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "sound,"
      },
      {
        "letter": "B",
        "text": "sound"
      },
      {
        "letter": "C",
        "text": "sound;"
      },
      {
        "letter": "D",
        "text": "sound:"
      }
    ],
    "answer": "A",
    "explanation": "The dependent opener \"Although the bridge looked sound\" is set off from the main clause by a comma.",
    "whyWrong": {
      "B": "Without the comma the clauses run together.",
      "C": "A semicolon needs two independent clauses; the opener is dependent.",
      "D": "A colon does not fit after a dependent clause."
    }
  },
  {
    "id": "boundaries-t3-05",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe results were ______ the treatment worked in every trial, and the effect grew stronger over time.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "remarkable:"
      },
      {
        "letter": "B",
        "text": "remarkable"
      },
      {
        "letter": "C",
        "text": "remarkable,"
      },
      {
        "letter": "D",
        "text": "remarkable, and"
      }
    ],
    "answer": "A",
    "explanation": "A colon fits because what follows explains why the results were \"remarkable.\"",
    "whyWrong": {
      "B": "No punctuation creates a run-on.",
      "C": "A comma alone splices two independent clauses.",
      "D": "\"and\" is redundant with the later \"and\" and misjoins the explanation."
    }
  },
  {
    "id": "form-sense-t1-03",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Choose the option that conforms to Standard English conventions.\n\nEach of the students ______ a copy of the schedule.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "receive"
      },
      {
        "letter": "B",
        "text": "receives"
      },
      {
        "letter": "C",
        "text": "receiving"
      },
      {
        "letter": "D",
        "text": "have received"
      }
    ],
    "answer": "B",
    "explanation": "\"Each\" is singular, so it takes the singular verb \"receives.\"",
    "whyWrong": {
      "A": "\"receive\" is plural and disagrees with singular \"Each.\"",
      "C": "\"receiving\" is not a finite verb.",
      "D": "\"have received\" is plural, disagreeing with \"Each.\""
    }
  },
  {
    "id": "form-sense-t1-04",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe team ______ its new uniforms yesterday.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "receive"
      },
      {
        "letter": "B",
        "text": "received"
      },
      {
        "letter": "C",
        "text": "receiving"
      },
      {
        "letter": "D",
        "text": "have received"
      }
    ],
    "answer": "B",
    "explanation": "The simple past \"received\" fits \"yesterday,\" and agrees with the singular collective \"team.\"",
    "whyWrong": {
      "A": "\"receive\" is present tense and clashes with \"yesterday.\"",
      "C": "\"receiving\" is not a finite verb.",
      "D": "\"have received\" (present perfect) does not fit a specific past time."
    }
  },
  {
    "id": "form-sense-t1-05",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe scientist recorded her data carefully, and then ______ shared it with the class.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "she"
      },
      {
        "letter": "B",
        "text": "her"
      },
      {
        "letter": "C",
        "text": "hers"
      },
      {
        "letter": "D",
        "text": "them"
      }
    ],
    "answer": "A",
    "explanation": "The subject of \"shared\" needs the subject pronoun \"she.\"",
    "whyWrong": {
      "B": "\"her\" is an object pronoun.",
      "C": "\"hers\" is possessive.",
      "D": "\"them\" is plural and objective."
    }
  },
  {
    "id": "form-sense-t1-06",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Choose the option that conforms to Standard English conventions.\n\nNeither the coach nor the players ______ satisfied with the referee's call.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "was"
      },
      {
        "letter": "B",
        "text": "were"
      },
      {
        "letter": "C",
        "text": "is"
      },
      {
        "letter": "D",
        "text": "has been"
      }
    ],
    "answer": "B",
    "explanation": "With \"neither...nor,\" the verb agrees with the nearer subject, \"players,\" which is plural—so \"were.\"",
    "whyWrong": {
      "A": "\"was\" is singular and disagrees with the nearer plural \"players.\"",
      "C": "\"is\" is singular and present, doubly wrong.",
      "D": "\"has been\" is singular."
    }
  },
  {
    "id": "form-sense-t2-05",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe collection of rare stamps, gathered over many ______ worth a fortune today.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "years, is"
      },
      {
        "letter": "B",
        "text": "years, are"
      },
      {
        "letter": "C",
        "text": "years is"
      },
      {
        "letter": "D",
        "text": "years; is"
      }
    ],
    "answer": "A",
    "explanation": "The subject \"collection\" is singular (\"is\"), and the interrupting phrase needs a closing comma after \"years.\"",
    "whyWrong": {
      "B": "\"are\" disagrees with singular \"collection.\"",
      "C": "The nonrestrictive phrase needs a closing comma.",
      "D": "A semicolon cannot separate the subject from its verb."
    }
  },
  {
    "id": "form-sense-t2-06",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Choose the option that conforms to Standard English conventions.\n\nBy the time the guests arrived, the host ______ the entire meal.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "had prepared"
      },
      {
        "letter": "B",
        "text": "prepared"
      },
      {
        "letter": "C",
        "text": "prepares"
      },
      {
        "letter": "D",
        "text": "has prepared"
      }
    ],
    "answer": "A",
    "explanation": "The past perfect \"had prepared\" shows the cooking finished before the guests arrived.",
    "whyWrong": {
      "B": "Simple past loses the \"before\" relationship between the two past events.",
      "C": "Present tense clashes with the past setting.",
      "D": "Present perfect does not fit a completed action before another past event."
    }
  },
  {
    "id": "form-sense-t2-07",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe report compares this year's rainfall with ______ recorded a decade ago.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "that"
      },
      {
        "letter": "B",
        "text": "those"
      },
      {
        "letter": "C",
        "text": "them"
      },
      {
        "letter": "D",
        "text": "it"
      }
    ],
    "answer": "A",
    "explanation": "\"Rainfall\" is singular, so the singular \"that\" correctly stands in for \"the rainfall.\"",
    "whyWrong": {
      "B": "\"those\" is plural.",
      "C": "\"them\" is plural and does not fit a comparison of one quantity.",
      "D": "\"it\" cannot follow \"with...recorded\" as a comparison stand-in here."
    }
  },
  {
    "id": "form-sense-t3-04",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe mayor, along with several council members, ______ the revised plan at the meeting.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "supports"
      },
      {
        "letter": "B",
        "text": "support"
      },
      {
        "letter": "C",
        "text": "supporting"
      },
      {
        "letter": "D",
        "text": "have supported"
      }
    ],
    "answer": "A",
    "explanation": "The subject is the singular \"mayor\"; the interrupting phrase \"along with several council members\" does not change agreement, so the singular \"supports\" is correct.",
    "whyWrong": {
      "B": "\"support\" is plural and disagrees with singular \"mayor.\"",
      "C": "\"supporting\" is not a finite verb.",
      "D": "\"have supported\" is plural, agreeing wrongly with the interrupting phrase."
    }
  },
  {
    "id": "form-sense-t3-05",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Choose the option that conforms to Standard English conventions.\n\nNot only ______ the museum expand its galleries, but it also lowered its admission price.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "did"
      },
      {
        "letter": "B",
        "text": "it did"
      },
      {
        "letter": "C",
        "text": "does"
      },
      {
        "letter": "D",
        "text": "has"
      }
    ],
    "answer": "A",
    "explanation": "After the introductory \"Not only,\" the auxiliary inverts before the subject: \"Not only did the museum expand...,\" matching the past-tense \"lowered.\"",
    "whyWrong": {
      "B": "Adding \"it\" breaks the required inversion.",
      "C": "\"does\" is present tense and clashes with \"lowered.\"",
      "D": "\"has\" would need \"expanded\" and mismatches the parallel past tense."
    }
  },
  {
    "id": "form-sense-t3-06",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe author's early novels, unlike her later ______ set in a single small town.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "work, were"
      },
      {
        "letter": "B",
        "text": "work were"
      },
      {
        "letter": "C",
        "text": "work, was"
      },
      {
        "letter": "D",
        "text": "work; were"
      }
    ],
    "answer": "A",
    "explanation": "The subject \"novels\" is plural (\"were\"), and the nonrestrictive comparison \"unlike her later work\" needs a closing comma.",
    "whyWrong": {
      "B": "The interrupting phrase needs a closing comma.",
      "C": "\"was\" disagrees with plural \"novels.\"",
      "D": "A semicolon cannot split the subject from its verb."
    }
  },
  {
    "id": "boundaries-t3-06",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Choose the option that conforms to Standard English conventions.\n\nThe expedition faced one great ______ crossing the glacier before the spring thaw made it impassable.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "obstacle:"
      },
      {
        "letter": "B",
        "text": "obstacle"
      },
      {
        "letter": "C",
        "text": "obstacle,"
      },
      {
        "letter": "D",
        "text": "obstacle;"
      }
    ],
    "answer": "A",
    "explanation": "A colon introduces the explanation of the \"one great obstacle.\"",
    "whyWrong": {
      "B": "No punctuation runs the explanation together.",
      "C": "A comma is too weak to introduce this explanatory phrase.",
      "D": "A semicolon needs an independent clause after it; a phrase follows."
    }
  },
  {
    "id": "boundaries-t1-07",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe museum's newest exhibit features fossils from three continents ______ visitors can see dinosaur bones, ancient ferns, and early mammals in a single room.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ". Visitors"
      },
      {
        "letter": "B",
        "text": ", visitors"
      },
      {
        "letter": "C",
        "text": "visitors"
      },
      {
        "letter": "D",
        "text": " and visitors"
      }
    ],
    "answer": "A",
    "explanation": "Two complete sentences ('The museum's...continents' and 'visitors can see...room') must be separated by a period. A does this correctly.",
    "whyWrong": {
      "B": "A comma between two independent clauses creates a comma splice.",
      "C": "Running the clauses together with no punctuation is a fused sentence.",
      "D": "Joining two independent clauses with 'and' but no comma before it is incorrect."
    }
  },
  {
    "id": "boundaries-t1-08",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nBecause the storm knocked out power across the region ______ the bakery had to throw away everything in its freezers.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " —"
      }
    ],
    "answer": "B",
    "explanation": "'Because the storm...region' is a dependent introductory clause, so a comma sets it off from the main clause. B fits.",
    "whyWrong": {
      "A": "A semicolon requires an independent clause before it, but this clause is dependent.",
      "C": "A colon requires a complete sentence before it.",
      "D": "A dash is not conventional after this introductory clause."
    }
  },
  {
    "id": "boundaries-t1-09",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe science fair featured many creative projects ______ a solar oven, a model volcano, and a homemade weather station.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": "."
      }
    ],
    "answer": "C",
    "explanation": "A complete sentence precedes a list of examples, so a colon introduces the list. C fits.",
    "whyWrong": {
      "A": "A semicolon does not introduce a list following a complete clause here.",
      "B": "A comma is too weak to introduce this explanatory list.",
      "D": "A period would cut off the list from the sentence that introduces it."
    }
  },
  {
    "id": "boundaries-t1-10",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe old oak tree, which had stood in the square for two hundred years ______ finally came down in last week's storm.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "The nonessential clause 'which had stood...years' is set off by commas; the closing comma is needed after 'years.' A fits.",
    "whyWrong": {
      "B": "A semicolon cannot close a nonessential clause mid-sentence.",
      "C": "A colon does not belong here; no list or explanation follows.",
      "D": "Adding 'and' creates a faulty construction with the interrupting clause."
    }
  },
  {
    "id": "boundaries-t1-11",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nMaria practiced the piano every day for a month ______ her recital went flawlessly.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", and"
      },
      {
        "letter": "B",
        "text": ", but"
      },
      {
        "letter": "C",
        "text": " and"
      },
      {
        "letter": "D",
        "text": " so that"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses joined by a coordinating conjunction take a comma before it: ', and.' The ideas agree, so 'and' fits. A is correct.",
    "whyWrong": {
      "B": "'But' signals contrast, but the flawless recital follows naturally from practice.",
      "C": "Without a comma before 'and,' the two independent clauses are joined incorrectly.",
      "D": "'So that' makes the second clause dependent, changing the meaning awkwardly."
    }
  },
  {
    "id": "boundaries-t1-12",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe championship trophy, gleaming under the lights ______ was passed from player to player as the crowd cheered.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and it"
      }
    ],
    "answer": "B",
    "explanation": "The nonessential phrase 'gleaming under the lights' is set off by commas; the closing comma after 'lights' is required. B fits.",
    "whyWrong": {
      "A": "A semicolon cannot close a nonessential modifying phrase.",
      "C": "A colon does not fit; nothing is being introduced.",
      "D": "'And it' creates a run-on with two subjects for one verb."
    }
  },
  {
    "id": "boundaries-t2-08",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe research vessel carried an unusual crew ______ marine biologists, a documentary filmmaker, and two students chosen from hundreds of applicants.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ":"
      },
      {
        "letter": "C",
        "text": ";"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "B",
    "explanation": "A complete clause precedes a list that specifies the 'unusual crew,' so a colon introduces it. B fits.",
    "whyWrong": {
      "A": "A comma is too weak to introduce this list after a complete clause.",
      "C": "A semicolon does not introduce a list here.",
      "D": "'And' does not correctly introduce the list of crew members."
    }
  },
  {
    "id": "boundaries-t2-09",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe first printing of the map sold out within days ______ a second printing, twice as large, sold out within hours.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", and"
      },
      {
        "letter": "B",
        "text": " and"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": ":"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses joined by 'and' require a comma before the conjunction. A fits.",
    "whyWrong": {
      "B": "Omitting the comma before 'and' between two independent clauses is incorrect.",
      "C": "A comma alone creates a comma splice between the two clauses.",
      "D": "A colon does not fit; the second clause is not a list or explanation."
    }
  },
  {
    "id": "boundaries-t2-10",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe novelist's early works, once dismissed by critics ______ are now studied in universities around the world.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " that"
      }
    ],
    "answer": "B",
    "explanation": "The nonessential phrase 'once dismissed by critics' is bracketed by commas; the closing comma after 'critics' is needed. B fits.",
    "whyWrong": {
      "A": "A semicolon cannot close a nonessential phrase within a sentence.",
      "C": "A colon does not fit; nothing is being introduced.",
      "D": "'That' would create a garbled, ungrammatical construction here."
    }
  },
  {
    "id": "boundaries-t2-11",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe team's strategy was simple but effective ______ tire out the opponents early, then strike in the final minutes.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "C",
    "explanation": "A complete clause precedes an explanation of the 'simple but effective' strategy, so a colon introduces it. C fits.",
    "whyWrong": {
      "A": "A comma is too weak to introduce this explanatory statement.",
      "B": "A semicolon links two independent clauses, but what follows explains the first.",
      "D": "'And' does not properly introduce the explanation of the strategy."
    }
  },
  {
    "id": "boundaries-t2-12",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nAlthough the recipe looked complicated ______ it required only three ingredients and a single pan.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " —and"
      }
    ],
    "answer": "B",
    "explanation": "'Although the recipe looked complicated' is a dependent introductory clause, so a comma separates it from the main clause. B fits.",
    "whyWrong": {
      "A": "A semicolon needs an independent clause before it, but this one is dependent.",
      "C": "A colon requires a complete sentence before it.",
      "D": "A dash plus 'and' is not conventional after a dependent clause."
    }
  },
  {
    "id": "boundaries-t3-07",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe committee reviewed proposals from three cities ______ Denver, which offered the largest venue; Austin, which promised the lowest cost; and Portland, which had hosted the event twice before.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ":"
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes a list of the three cities, and a colon introduces that list (whose items already use semicolons internally). A fits.",
    "whyWrong": {
      "B": "A semicolon does not introduce a list after a complete clause here.",
      "C": "A comma is too weak to introduce this complex list.",
      "D": "'And' cannot introduce the whole itemized list."
    }
  },
  {
    "id": "boundaries-t3-08",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe expedition faced one obstacle it had not planned for ______ the only bridge across the gorge had washed away months earlier, leaving no way forward.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ":"
      },
      {
        "letter": "C",
        "text": ";"
      },
      {
        "letter": "D",
        "text": " so"
      }
    ],
    "answer": "B",
    "explanation": "A complete clause precedes an explanation identifying the 'one obstacle,' so a colon fits. (A semicolon would also join two independent clauses, but the second explains the first, which the colon signals best.) B is correct.",
    "whyWrong": {
      "A": "A comma splice results from joining two independent clauses with only a comma.",
      "C": "A semicolon merely links equal clauses; the colon better marks the explanation being introduced.",
      "D": "'So' would need a comma before it and changes the logical relationship."
    }
  },
  {
    "id": "boundaries-t3-09",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe photograph captured something the painter had chased for years ______ the exact moment when morning light first touched the valley floor.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "C",
    "explanation": "A complete clause precedes a phrase that specifies 'something,' so a colon introduces the explanation. C fits.",
    "whyWrong": {
      "A": "A semicolon requires an independent clause after it, but a phrase follows.",
      "B": "A comma is too weak to introduce this defining explanation.",
      "D": "'And' would wrongly treat the explanatory phrase as a separate item."
    }
  },
  {
    "id": "boundaries-t3-10",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe violinist, whose recordings had won awards on three continents ______ still practiced scales for an hour every morning.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "The nonessential clause 'whose recordings...continents' is set off by commas; the closing comma after 'continents' is required before the verb 'still practiced.' A fits.",
    "whyWrong": {
      "B": "A semicolon cannot close a nonessential clause and rejoin the subject to its verb.",
      "C": "A colon does not fit; nothing is being introduced.",
      "D": "'And' leaves the subject without its verb and creates a fragment."
    }
  },
  {
    "id": "boundaries-t3-11",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe engineers considered the design a success ______ although it had exceeded its budget, it performed better than any model before it.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ":"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": " and,"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses appear, and the second (beginning with the dependent 'although' clause) stands complete on its own, so a semicolon joins them. A fits.",
    "whyWrong": {
      "B": "A colon introduces an explanation or list, but here two full clauses are simply linked.",
      "C": "A comma between two independent clauses creates a comma splice.",
      "D": "'And,' would require the comma to fall before 'and,' not after it."
    }
  },
  {
    "id": "boundaries-t3-12",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe archive held letters from dozens of writers ______ some famous in their day but forgotten now, others unknown then but celebrated today.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ":"
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": "."
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes a phrase that elaborates on the 'dozens of writers,' so a colon introduces the elaboration. A fits.",
    "whyWrong": {
      "B": "A semicolon needs an independent clause after it, but a phrase follows.",
      "C": "A period would sever the elaborating phrase, leaving it a fragment.",
      "D": "'And' does not correctly introduce the descriptive elaboration."
    }
  },
  {
    "id": "form-sense-t1-07",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe collection of rare coins ______ displayed in a locked glass case near the entrance.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "are"
      },
      {
        "letter": "B",
        "text": "is"
      },
      {
        "letter": "C",
        "text": "were"
      },
      {
        "letter": "D",
        "text": "have been"
      }
    ],
    "answer": "B",
    "explanation": "The subject is 'collection' (singular), not 'coins,' so it takes the singular verb 'is.' B fits.",
    "whyWrong": {
      "A": "'Are' agrees with 'coins,' but the subject is the singular 'collection.'",
      "C": "'Were' is plural and does not match the singular 'collection.'",
      "D": "'Have been' is plural and mismatches 'collection.'"
    }
  },
  {
    "id": "form-sense-t1-08",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nLast summer, the students ______ a garden behind the school and harvested vegetables for the food bank.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "plant"
      },
      {
        "letter": "B",
        "text": "plants"
      },
      {
        "letter": "C",
        "text": "planted"
      },
      {
        "letter": "D",
        "text": "will plant"
      }
    ],
    "answer": "C",
    "explanation": "'Last summer' signals the past, and the parallel verb 'harvested' is past tense, so 'planted' fits. C is correct.",
    "whyWrong": {
      "A": "'Plant' is present tense, contradicting 'last summer.'",
      "B": "'Plants' is singular present and mismatches the past-time context.",
      "D": "'Will plant' is future, contradicting the past-time signal."
    }
  },
  {
    "id": "form-sense-t1-09",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nEvery runner in the two races ______ given a numbered bib before the start.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "were"
      },
      {
        "letter": "B",
        "text": "are"
      },
      {
        "letter": "C",
        "text": "was"
      },
      {
        "letter": "D",
        "text": "have been"
      }
    ],
    "answer": "C",
    "explanation": "'Every runner' is singular, so it takes the singular past verb 'was,' matching the past-time setup. C fits.",
    "whyWrong": {
      "A": "'Were' is plural, but 'every runner' is singular.",
      "B": "'Are' is plural present and mismatches the singular subject.",
      "D": "'Have been' is plural and does not agree with 'every runner.'"
    }
  },
  {
    "id": "form-sense-t1-10",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe chef prepared the sauce carefully, tasting ______ after adding each new spice.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "it"
      },
      {
        "letter": "B",
        "text": "them"
      },
      {
        "letter": "C",
        "text": "they"
      },
      {
        "letter": "D",
        "text": "those"
      }
    ],
    "answer": "A",
    "explanation": "The pronoun refers to 'the sauce,' which is singular, so 'it' fits. A is correct.",
    "whyWrong": {
      "B": "'Them' is plural, but 'sauce' is singular.",
      "C": "'They' is plural and also a subject pronoun, unfit as an object here.",
      "D": "'Those' is plural and does not match the singular 'sauce.'"
    }
  },
  {
    "id": "form-sense-t1-11",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe twins finished their project quickly, and now ______ presenting it to the class.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "they're"
      },
      {
        "letter": "B",
        "text": "their"
      },
      {
        "letter": "C",
        "text": "there"
      },
      {
        "letter": "D",
        "text": "theirs"
      }
    ],
    "answer": "A",
    "explanation": "The sentence needs 'they are,' the contraction 'they're,' before the verb 'presenting.' A fits.",
    "whyWrong": {
      "B": "'Their' is a possessive, not the needed 'they are.'",
      "C": "'There' indicates place, not the subject-plus-verb needed.",
      "D": "'Theirs' is a possessive pronoun and does not fit here."
    }
  },
  {
    "id": "form-sense-t1-12",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nOne of the paintings in the gallery ______ believed to be over four hundred years old.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "are"
      },
      {
        "letter": "B",
        "text": "were"
      },
      {
        "letter": "C",
        "text": "is"
      },
      {
        "letter": "D",
        "text": "have been"
      }
    ],
    "answer": "C",
    "explanation": "The subject is 'One' (singular), not 'paintings,' so it takes the singular verb 'is.' C fits.",
    "whyWrong": {
      "A": "'Are' agrees with 'paintings,' but the subject is the singular 'One.'",
      "B": "'Were' is plural and does not match the singular 'One.'",
      "D": "'Have been' is plural and mismatches 'One.'"
    }
  },
  {
    "id": "form-sense-t2-08",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nBy the time the rescue team arrived, the stranded hikers ______ already found their own way down the mountain.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "have"
      },
      {
        "letter": "B",
        "text": "had"
      },
      {
        "letter": "C",
        "text": "has"
      },
      {
        "letter": "D",
        "text": "will have"
      }
    ],
    "answer": "B",
    "explanation": "An action completed before another past event ('arrived') takes the past perfect 'had found.' B fits.",
    "whyWrong": {
      "A": "'Have found' is present perfect, which does not situate the action before the past arrival.",
      "C": "'Has' is singular and mismatches the plural 'hikers.'",
      "D": "'Will have' is future perfect, contradicting the past-time context."
    }
  },
  {
    "id": "form-sense-t2-09",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe report, along with its many appendices and supporting charts, ______ due on the director's desk by Friday.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "are"
      },
      {
        "letter": "B",
        "text": "is"
      },
      {
        "letter": "C",
        "text": "were"
      },
      {
        "letter": "D",
        "text": "have been"
      }
    ],
    "answer": "B",
    "explanation": "The subject is the singular 'report'; the phrase 'along with...charts' does not change its number, so 'is' fits. B is correct.",
    "whyWrong": {
      "A": "'Are' wrongly treats the intervening phrase as part of a plural subject.",
      "C": "'Were' is plural and does not agree with the singular 'report.'",
      "D": "'Have been' is plural and mismatches 'report.'"
    }
  },
  {
    "id": "form-sense-t2-10",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nWalking home in the rain, ______ noticed that the streetlights had already come on.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "the streetlights seemed brighter to Elena, who"
      },
      {
        "letter": "B",
        "text": "it seemed to Elena that she"
      },
      {
        "letter": "C",
        "text": "Elena"
      },
      {
        "letter": "D",
        "text": "there was a moment when Elena"
      }
    ],
    "answer": "C",
    "explanation": "The modifier 'Walking home in the rain' must attach to the person walking, so the subject right after the comma should be 'Elena.' C fits.",
    "whyWrong": {
      "A": "This makes 'the streetlights' the one walking home—a dangling modifier.",
      "B": "This makes 'it' the subject, so the modifier has no logical noun to attach to.",
      "D": "This makes 'a moment' the subject, misattaching the modifier."
    }
  },
  {
    "id": "form-sense-t2-11",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe new library policy will affect students and teachers alike, but it will help ______ most by keeping study rooms open later.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "they"
      },
      {
        "letter": "B",
        "text": "them"
      },
      {
        "letter": "C",
        "text": "their"
      },
      {
        "letter": "D",
        "text": "theirs"
      }
    ],
    "answer": "B",
    "explanation": "The pronoun is the object of 'help,' referring to 'students and teachers,' so the plural object pronoun 'them' fits. B is correct.",
    "whyWrong": {
      "A": "'They' is a subject pronoun and cannot serve as the object of 'help.'",
      "C": "'Their' is possessive, not an object pronoun.",
      "D": "'Theirs' is a possessive pronoun and does not fit as the object."
    }
  },
  {
    "id": "form-sense-t2-12",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe scientist's findings were surprising, and her methods ______ carefully documented so that others could repeat the experiment.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "was"
      },
      {
        "letter": "B",
        "text": "is"
      },
      {
        "letter": "C",
        "text": "were"
      },
      {
        "letter": "D",
        "text": "has been"
      }
    ],
    "answer": "C",
    "explanation": "The subject 'methods' is plural and the context is past, so the plural past verb 'were' fits. C is correct.",
    "whyWrong": {
      "A": "'Was' is singular and does not agree with the plural 'methods.'",
      "B": "'Is' is singular present, mismatching the plural subject and past context.",
      "D": "'Has been' is singular and mismatches 'methods.'"
    }
  },
  {
    "id": "form-sense-t3-07",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nNot only the museum's paintings but also its centuries-old manuscript ______ carefully protected from light and humidity.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "are"
      },
      {
        "letter": "B",
        "text": "is"
      },
      {
        "letter": "C",
        "text": "were being"
      },
      {
        "letter": "D",
        "text": "have been"
      }
    ],
    "answer": "B",
    "explanation": "With 'not only...but also,' the verb agrees with the nearer subject, 'manuscript' (singular), so 'is' fits. B is correct.",
    "whyWrong": {
      "A": "'Are' agrees with 'paintings,' but the nearer subject 'manuscript' governs the verb.",
      "C": "'Were being' is plural in effect and shifts the tense awkwardly.",
      "D": "'Have been' is plural and does not agree with the nearer singular 'manuscript.'"
    }
  },
  {
    "id": "form-sense-t3-08",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nHaving studied the currents for decades, ______ able to predict the storm's path days before other forecasters.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "the storm's path was clear to the researcher, who was"
      },
      {
        "letter": "B",
        "text": "it was clear that the researcher was"
      },
      {
        "letter": "C",
        "text": "the researcher was"
      },
      {
        "letter": "D",
        "text": "there had long been a researcher who was"
      }
    ],
    "answer": "C",
    "explanation": "The introductory modifier 'Having studied the currents for decades' must describe the person who studied, so 'the researcher' should follow the comma. C fits.",
    "whyWrong": {
      "A": "This makes 'the storm's path' the one who studied the currents—a dangling modifier.",
      "B": "This makes 'it' the subject, leaving the modifier without a logical noun.",
      "D": "This makes 'there' the placeholder subject, misattaching the modifier."
    }
  },
  {
    "id": "form-sense-t3-09",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe committee could not agree on a plan, and after hours of debate ______ decided to postpone the vote until the following week.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "they"
      },
      {
        "letter": "B",
        "text": "it"
      },
      {
        "letter": "C",
        "text": "them"
      },
      {
        "letter": "D",
        "text": "its members, who"
      }
    ],
    "answer": "B",
    "explanation": "'Committee' is a singular collective noun acting as one body, so the singular pronoun 'it' agrees and serves as the subject of 'decided.' B fits.",
    "whyWrong": {
      "A": "'They' treats the singular collective 'committee' as plural, breaking agreement in this sentence.",
      "C": "'Them' is an object pronoun and cannot be the subject of 'decided.'",
      "D": "'Its members, who' leaves the clause without a finite main verb, creating a fragment."
    }
  },
  {
    "id": "form-sense-t3-10",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe data collected over the long winter ______ that the birds had shifted their migration earlier than in any previous year on record.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "suggest"
      },
      {
        "letter": "B",
        "text": "suggests"
      },
      {
        "letter": "C",
        "text": "suggesting"
      },
      {
        "letter": "D",
        "text": "to suggest"
      }
    ],
    "answer": "B",
    "explanation": "Treated as a single body of information, 'the data...winter' takes a singular verb here, and a main verb is needed, so 'suggests' fits. B is correct.",
    "whyWrong": {
      "A": "'Suggest' would treat 'data' as plural, but the sentence uses it as a singular mass here.",
      "C": "'Suggesting' is a participle, leaving the sentence without a main verb.",
      "D": "'To suggest' is an infinitive and cannot serve as the main verb."
    }
  },
  {
    "id": "form-sense-t3-11",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe critic praised the film's score more than ______, arguing that the music, not the acting, carried the story.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "its acting"
      },
      {
        "letter": "B",
        "text": "it's acting"
      },
      {
        "letter": "C",
        "text": "their acting"
      },
      {
        "letter": "D",
        "text": "its' acting"
      }
    ],
    "answer": "A",
    "explanation": "The possessive of 'it' referring to the singular 'film' is 'its' (no apostrophe), so 'its acting' fits. A is correct.",
    "whyWrong": {
      "B": "'It's' means 'it is,' which is not intended here.",
      "C": "'Their' is plural, but the antecedent 'film' is singular.",
      "D": "'Its'' is not a valid word; the possessive 'its' takes no apostrophe."
    }
  },
  {
    "id": "form-sense-t3-12",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nNeither the coach nor the players ______ expecting the referee to reverse the call so late in the game.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "was"
      },
      {
        "letter": "B",
        "text": "were"
      },
      {
        "letter": "C",
        "text": "has been"
      },
      {
        "letter": "D",
        "text": "is"
      }
    ],
    "answer": "B",
    "explanation": "With 'neither...nor,' the verb agrees with the nearer subject, 'players' (plural), so 'were' fits. B is correct.",
    "whyWrong": {
      "A": "'Was' agrees with 'coach,' but the nearer subject 'players' governs the verb.",
      "C": "'Has been' is singular and does not agree with the nearer plural 'players.'",
      "D": "'Is' is singular present and mismatches both the nearer plural subject and the past context."
    }
  },
  {
    "id": "boundaries-t2-13",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe orchard grows several heirloom apples ______ tart Newtown Pippins, sweet Cox's Orange Pippins, and crisp Ashmead's Kernels.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ":"
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": " like,"
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes a list naming the 'several heirloom apples,' so a colon introduces it. A fits.",
    "whyWrong": {
      "B": "A semicolon does not introduce a list after a complete clause here.",
      "C": "A comma is too weak to introduce this list of examples.",
      "D": "'Like,' with a comma is not a conventional way to introduce the list."
    }
  },
  {
    "id": "form-sense-t2-13",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe bundle of letters, tied with a faded ribbon, ______ discovered in a drawer that had been locked for years.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "were"
      },
      {
        "letter": "B",
        "text": "was"
      },
      {
        "letter": "C",
        "text": "have been"
      },
      {
        "letter": "D",
        "text": "are"
      }
    ],
    "answer": "B",
    "explanation": "The subject is the singular 'bundle,' not 'letters,' so the singular past verb 'was' fits. B is correct.",
    "whyWrong": {
      "A": "'Were' agrees with 'letters,' but the subject is the singular 'bundle.'",
      "C": "'Have been' is plural and mismatches 'bundle.'",
      "D": "'Are' is plural present and mismatches the singular subject and past context."
    }
  },
  {
    "id": "boundaries-t1-13",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe train was delayed for two hours ______ the passengers waited patiently on the crowded platform.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", so"
      },
      {
        "letter": "B",
        "text": " so"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": ";so"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses joined by the coordinating conjunction 'so' take a comma before it. A fits.",
    "whyWrong": {
      "B": "Omitting the comma before 'so' between two independent clauses is incorrect.",
      "C": "A comma alone creates a comma splice.",
      "D": "A semicolon should not be followed immediately by a coordinating conjunction, and the spacing is wrong."
    }
  },
  {
    "id": "form-sense-t1-13",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe herd of elephants ______ slowly toward the river as the sun began to set.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "move"
      },
      {
        "letter": "B",
        "text": "moves"
      },
      {
        "letter": "C",
        "text": "are moving"
      },
      {
        "letter": "D",
        "text": "were moving toward, and"
      }
    ],
    "answer": "B",
    "explanation": "The subject 'herd' is singular, so it takes the singular verb 'moves.' B fits.",
    "whyWrong": {
      "A": "'Move' agrees with a plural subject, but 'herd' is singular.",
      "C": "'Are moving' is plural and mismatches the singular 'herd.'",
      "D": "This adds a stray conjunction, leaving the sentence incomplete."
    }
  },
  {
    "id": "boundaries-t1-bp01",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe potter shaped the bowl on her wheel ______ then she set it aside to dry before firing.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", and"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": " and"
      },
      {
        "letter": "D",
        "text": ";and"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses joined by 'and' take a comma before the conjunction: ', and.' A is correct.",
    "whyWrong": {
      "B": "A comma alone between two independent clauses is a comma splice.",
      "C": "Without the comma before 'and,' the two independent clauses are joined incorrectly.",
      "D": "A semicolon should not be immediately followed by a coordinating conjunction, and the spacing is wrong."
    }
  },
  {
    "id": "boundaries-t1-bp02",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nWhen the power went out during the storm ______ the students finished their experiment by flashlight.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " —"
      }
    ],
    "answer": "B",
    "explanation": "'When the power went out during the storm' is a dependent introductory clause, so a comma separates it from the main clause. B is correct.",
    "whyWrong": {
      "A": "A semicolon needs an independent clause before it; this clause is dependent.",
      "C": "A colon requires a complete sentence before it.",
      "D": "A dash is not conventional after this introductory clause."
    }
  },
  {
    "id": "boundaries-t1-bp03",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe farmers' market sells produce from local growers ______ crisp apples, ripe tomatoes, and fresh herbs.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " —and"
      }
    ],
    "answer": "C",
    "explanation": "A complete clause precedes a list of examples, so a colon introduces the list. C is correct.",
    "whyWrong": {
      "A": "A comma is too weak to introduce this explanatory list.",
      "B": "A semicolon does not introduce a list after a complete clause here.",
      "D": "A dash plus 'and' does not correctly introduce the list."
    }
  },
  {
    "id": "boundaries-t1-bp04",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe telescope, a gift from her grandfather ______ had helped Nadia fall in love with the night sky.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "The nonessential phrase 'a gift from her grandfather' is set off by commas; the closing comma after 'grandfather' is required. A is correct.",
    "whyWrong": {
      "B": "A semicolon cannot close a nonessential phrase mid-sentence.",
      "C": "A colon does not fit; nothing is being introduced.",
      "D": "'And' leaves the subject stranded from its verb and creates a faulty construction."
    }
  },
  {
    "id": "boundaries-t1-bp05",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe hikers had walked for six hours ______ they were still an hour from the summit.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", but"
      },
      {
        "letter": "B",
        "text": " but"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": ":"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses joined by 'but' take a comma before the conjunction, and the contrast fits. A is correct.",
    "whyWrong": {
      "B": "Omitting the comma before 'but' between two independent clauses is incorrect.",
      "C": "A comma alone creates a comma splice.",
      "D": "A colon does not fit; the second clause is not a list or explanation."
    }
  },
  {
    "id": "boundaries-t1-bp06",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe recipe was passed down for generations ______ no one in the family had ever written it down.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and,"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses closely related in meaning may be joined by a semicolon. A is correct.",
    "whyWrong": {
      "B": "A comma between two independent clauses creates a comma splice.",
      "C": "A colon introduces a list or explanation, not two simply linked clauses.",
      "D": "'And,' would need the comma before 'and,' not after it."
    }
  },
  {
    "id": "boundaries-t1-bp07",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nAfter the long drought ended ______ the reservoir slowly filled again over the winter.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "'After the long drought ended' is a dependent introductory clause, so a comma sets it off. A is correct.",
    "whyWrong": {
      "B": "A semicolon requires an independent clause before it.",
      "C": "A colon requires a complete sentence before it.",
      "D": "'And' does not fit after a dependent introductory clause."
    }
  },
  {
    "id": "boundaries-t1-bp08",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe museum extended its hours for the popular exhibit ______ visitors could now come as late as nine at night.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ". Visitors"
      },
      {
        "letter": "B",
        "text": ", visitors"
      },
      {
        "letter": "C",
        "text": "visitors"
      },
      {
        "letter": "D",
        "text": " so visitors"
      }
    ],
    "answer": "A",
    "explanation": "Two complete sentences must be separated by a period (or joined properly). A correctly ends the first and begins the second. A is correct.",
    "whyWrong": {
      "B": "A comma between two independent clauses creates a comma splice.",
      "C": "Running the clauses together with no punctuation is a fused sentence.",
      "D": "'So' needs a comma before it to join two independent clauses."
    }
  },
  {
    "id": "boundaries-t1-bp09",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe coral reef, teeming with fish and color ______ draws divers from around the world.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " it"
      }
    ],
    "answer": "A",
    "explanation": "The nonessential phrase 'teeming with fish and color' is set off by commas; the closing comma before the verb 'draws' is required. A is correct.",
    "whyWrong": {
      "B": "A semicolon cannot close a nonessential phrase and rejoin subject to verb.",
      "C": "A colon does not belong; nothing is introduced.",
      "D": "'It' creates a second subject for the verb, producing a run-on."
    }
  },
  {
    "id": "boundaries-t2-bp01",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe expedition brought three specialists ______ a geologist to read the rock layers, a botanist to catalog the plants, and a photographer to record it all.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ":"
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": " like;"
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes a list specifying the 'three specialists,' so a colon introduces it. A is correct.",
    "whyWrong": {
      "B": "A semicolon does not introduce a list after a complete clause here.",
      "C": "A comma is too weak to introduce this list.",
      "D": "'Like;' is not a conventional way to introduce the list."
    }
  },
  {
    "id": "boundaries-t2-bp02",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe first satellite transmitted for only three weeks ______ the data it sent back reshaped the field for decades.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", yet"
      },
      {
        "letter": "B",
        "text": " yet"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": ":"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses joined by 'yet' take a comma before it, and the contrast fits. A is correct.",
    "whyWrong": {
      "B": "Omitting the comma before 'yet' between independent clauses is incorrect.",
      "C": "A comma alone creates a comma splice.",
      "D": "A colon does not fit; the second clause is not an explanation or list."
    }
  },
  {
    "id": "boundaries-t2-bp03",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe committee's decision surprised everyone ______ it approved the plan that had seemed least likely to pass.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ":"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": " and,"
      },
      {
        "letter": "D",
        "text": " however"
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes an explanation of what surprised everyone, so a colon fits. A is correct.",
    "whyWrong": {
      "B": "A comma between two independent clauses creates a comma splice.",
      "C": "'And,' misplaces the comma and does not signal the explanation.",
      "D": "'However' with no punctuation before it fuses the clauses."
    }
  },
  {
    "id": "boundaries-t2-bp04",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe playwright's early drafts, now held in a university archive ______ reveal how much the famous ending changed over time.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " they"
      }
    ],
    "answer": "A",
    "explanation": "The nonessential clause 'now held in a university archive' is set off by commas; the closing comma before the verb 'reveal' is required. A is correct.",
    "whyWrong": {
      "B": "A semicolon cannot close a nonessential clause and rejoin subject to verb.",
      "C": "A colon does not fit; nothing is introduced.",
      "D": "'They' adds a second subject, producing a run-on."
    }
  },
  {
    "id": "boundaries-t2-bp05",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nSolar energy is now cheaper than ever to generate ______ storing it for nighttime use remains a costly challenge.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", but"
      },
      {
        "letter": "B",
        "text": ":"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": ";but"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses joined by 'but' take a comma before it, and the contrast between cheap generation and costly storage fits. A is correct.",
    "whyWrong": {
      "B": "A colon does not fit; the second clause contrasts, it does not explain.",
      "C": "A comma alone creates a comma splice.",
      "D": "A semicolon should not be immediately followed by 'but,' and spacing is wrong."
    }
  },
  {
    "id": "boundaries-t2-bp06",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe orchestra tuned quietly as the lights dimmed ______ a hush spread through the hall.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", and"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses joined by 'and' take a comma before it. A is correct.",
    "whyWrong": {
      "B": "A comma alone creates a comma splice.",
      "C": "A colon does not fit; the second clause is not a list or explanation.",
      "D": "Omitting the comma before 'and' between independent clauses is incorrect."
    }
  },
  {
    "id": "boundaries-t2-bp07",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nBecause the bridge could not bear the added weight ______ engineers rerouted the heaviest trucks onto a longer path.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " so"
      }
    ],
    "answer": "A",
    "explanation": "'Because the bridge could not bear the added weight' is a dependent introductory clause, so a comma sets it off. A is correct.",
    "whyWrong": {
      "B": "A semicolon requires an independent clause before it.",
      "C": "A colon requires a complete sentence before it.",
      "D": "Adding 'so' after a 'because' clause creates a faulty double conjunction."
    }
  },
  {
    "id": "boundaries-t2-bp08",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe novelist set her story in three cities ______ Lisbon, where she was born; Prague, where she studied; and Cairo, where she finally settled.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ":"
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes a list of the three cities (whose items use internal semicolons), so a colon introduces it. A is correct.",
    "whyWrong": {
      "B": "A semicolon does not introduce a list after a complete clause here.",
      "C": "A comma is too weak to introduce this complex list.",
      "D": "'And' cannot introduce the whole itemized list."
    }
  },
  {
    "id": "boundaries-t2-bp09",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe startup grew quickly in its first year ______ by its second, it had offices on three continents.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and,"
      }
    ],
    "answer": "A",
    "explanation": "Two closely related independent clauses may be joined by a semicolon. A is correct.",
    "whyWrong": {
      "B": "A comma between two independent clauses creates a comma splice.",
      "C": "A colon introduces a list or explanation, not two simply linked clauses.",
      "D": "'And,' would need the comma before 'and,' not after it."
    }
  },
  {
    "id": "boundaries-t3-bp01",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe researcher's conclusion rested on a single assumption ______ that the samples collected at the surface reflected conditions far below.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ":"
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes a phrase that specifies 'a single assumption,' so a colon introduces the elaboration. A is correct.",
    "whyWrong": {
      "B": "A semicolon requires an independent clause after it; a phrase follows.",
      "C": "A comma is too weak to introduce this defining phrase.",
      "D": "'And' wrongly treats the explanatory phrase as a separate item."
    }
  },
  {
    "id": "boundaries-t3-bp02",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe glacier, which had advanced steadily for a century ______ began to retreat once average temperatures crossed a critical threshold.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and it"
      }
    ],
    "answer": "A",
    "explanation": "The nonessential clause 'which had advanced steadily for a century' is set off by commas; the closing comma before 'began' is required. A is correct.",
    "whyWrong": {
      "B": "A semicolon cannot close a nonessential clause and rejoin the subject to its verb.",
      "C": "A colon does not fit; nothing is being introduced.",
      "D": "'And it' supplies a second subject, creating a run-on."
    }
  },
  {
    "id": "boundaries-t3-bp03",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe negotiators reached an agreement no one had predicted ______ although the two sides had opposed each other for years, both now backed the same compromise.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ":"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ";however"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes an explanation of the unexpected agreement, so a colon fits before the elaborating clause. A is correct.",
    "whyWrong": {
      "B": "A comma between two independent clauses creates a comma splice.",
      "C": "A semicolon should not be immediately followed by 'however,' and spacing is wrong.",
      "D": "'And' does not signal the explanation that follows."
    }
  },
  {
    "id": "boundaries-t3-bp04",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe archive preserved letters from three eras ______ the founding decade, when the town was small; the boom years, when it tripled in size; and the quiet century that followed.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ":"
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": "."
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes a list of the three eras (items with internal commas separated by semicolons), so a colon introduces it. A is correct.",
    "whyWrong": {
      "B": "A semicolon does not introduce a list after a complete clause here.",
      "C": "A comma is too weak to introduce this complex list.",
      "D": "A period would sever the list from the clause that introduces it."
    }
  },
  {
    "id": "boundaries-t3-bp05",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe theory was elegant and widely taught ______ it simply did not match what the newest instruments were measuring.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ", but"
      },
      {
        "letter": "B",
        "text": ":"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": " but"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses joined by 'but' take a comma before it, and the contrast between the elegant theory and the mismatched data fits. A is correct.",
    "whyWrong": {
      "B": "A colon introduces an explanation, but here the clauses stand in contrast.",
      "C": "A comma alone creates a comma splice.",
      "D": "Omitting the comma before 'but' between independent clauses is incorrect."
    }
  },
  {
    "id": "boundaries-t3-bp06",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe composer revised the symphony until the day it premiered ______ even in rehearsal, she was still crossing out bars and adding new ones.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ";"
      },
      {
        "letter": "B",
        "text": ","
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and,"
      }
    ],
    "answer": "A",
    "explanation": "Two independent clauses closely related in meaning may be joined by a semicolon. A is correct.",
    "whyWrong": {
      "B": "A comma between two independent clauses creates a comma splice.",
      "C": "A colon fits an explanation or list; here two full clauses are linked.",
      "D": "'And,' misplaces the comma after the conjunction."
    }
  },
  {
    "id": "boundaries-t3-bp07",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nOnce the last of the scaffolding came down ______ the restored facade looked, for the first time in decades, exactly as its architect had intended.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "'Once the last of the scaffolding came down' is a dependent introductory clause, so a comma sets it off from the main clause. A is correct.",
    "whyWrong": {
      "B": "A semicolon requires an independent clause before it.",
      "C": "A colon requires a complete sentence before it.",
      "D": "'And' does not fit after a dependent introductory clause."
    }
  },
  {
    "id": "boundaries-t3-bp08",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe editor kept one rule above all others ______ no sentence should survive that the reader must reread to understand.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ":"
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ","
      },
      {
        "letter": "D",
        "text": " being"
      }
    ],
    "answer": "A",
    "explanation": "A complete clause precedes a statement of the 'one rule,' so a colon introduces it. A is correct.",
    "whyWrong": {
      "B": "A semicolon links two independent clauses of equal weight; here the second states the rule the first names.",
      "C": "A comma is too weak to introduce this explanatory statement.",
      "D": "'Being' produces an awkward, ungrammatical construction."
    }
  },
  {
    "id": "boundaries-t3-bp09",
    "domain": "rw-sec",
    "skill": "boundaries",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe documentary, praised for its honesty and criticized for its length ______ went on to win the festival's top prize.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": ","
      },
      {
        "letter": "B",
        "text": ";"
      },
      {
        "letter": "C",
        "text": ":"
      },
      {
        "letter": "D",
        "text": " and"
      }
    ],
    "answer": "A",
    "explanation": "The nonessential phrase 'praised for its honesty and criticized for its length' is set off by commas; the closing comma before 'went' is required. A is correct.",
    "whyWrong": {
      "B": "A semicolon cannot close a nonessential phrase and rejoin subject to verb.",
      "C": "A colon does not fit; nothing is introduced.",
      "D": "'And' leaves the subject without its verb, creating a fragment."
    }
  },
  {
    "id": "form-sense-t1-bp01",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe stack of exam papers ______ waiting on the teacher's desk to be graded.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "are"
      },
      {
        "letter": "B",
        "text": "is"
      },
      {
        "letter": "C",
        "text": "were"
      },
      {
        "letter": "D",
        "text": "have been"
      }
    ],
    "answer": "B",
    "explanation": "The subject is 'stack' (singular), not 'papers,' so it takes the singular verb 'is.' B is correct.",
    "whyWrong": {
      "A": "'Are' agrees with 'papers,' but the subject is the singular 'stack.'",
      "C": "'Were' is plural and mismatches 'stack.'",
      "D": "'Have been' is plural and mismatches 'stack.'"
    }
  },
  {
    "id": "form-sense-t1-bp02",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nLast winter, the volunteers ______ warm meals to families across the county every weekend.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "deliver"
      },
      {
        "letter": "B",
        "text": "delivers"
      },
      {
        "letter": "C",
        "text": "delivered"
      },
      {
        "letter": "D",
        "text": "will deliver"
      }
    ],
    "answer": "C",
    "explanation": "'Last winter' signals the past, so the past-tense 'delivered' fits. C is correct.",
    "whyWrong": {
      "A": "'Deliver' is present tense, contradicting 'last winter.'",
      "B": "'Delivers' is singular present and mismatches both the plural subject and the past-time cue.",
      "D": "'Will deliver' is future, contradicting the past-time cue."
    }
  },
  {
    "id": "form-sense-t1-bp03",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nEach of the paintings in the hallway ______ a small plaque describing the artist.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "have"
      },
      {
        "letter": "B",
        "text": "has"
      },
      {
        "letter": "C",
        "text": "are having"
      },
      {
        "letter": "D",
        "text": "were"
      }
    ],
    "answer": "B",
    "explanation": "'Each' is singular and controls the verb, so 'has' fits despite the plural 'paintings.' B is correct.",
    "whyWrong": {
      "A": "'Have' agrees with 'paintings,' but the subject is the singular 'each.'",
      "C": "'Are having' is plural and awkward here.",
      "D": "'Were' is plural and mismatches 'each.'"
    }
  },
  {
    "id": "form-sense-t1-bp04",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe chef plated the dessert with great care, adding ______ final touch of powdered sugar just before serving.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "its"
      },
      {
        "letter": "B",
        "text": "it's"
      },
      {
        "letter": "C",
        "text": "their"
      },
      {
        "letter": "D",
        "text": "its'"
      }
    ],
    "answer": "A",
    "explanation": "The possessive of 'it,' referring to the singular 'dessert,' is 'its' with no apostrophe. A is correct.",
    "whyWrong": {
      "B": "'It's' means 'it is,' which is not intended.",
      "C": "'Their' is plural, but the antecedent 'dessert' is singular.",
      "D": "'Its'' is not a valid word; the possessive 'its' takes no apostrophe."
    }
  },
  {
    "id": "form-sense-t1-bp05",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe scouts pitched their tents before dark, and soon ______ gathered around the fire to cook.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "they're"
      },
      {
        "letter": "B",
        "text": "their"
      },
      {
        "letter": "C",
        "text": "there"
      },
      {
        "letter": "D",
        "text": "they"
      }
    ],
    "answer": "D",
    "explanation": "The clause needs a subject for 'gathered,' and 'they' refers to the scouts. D is correct.",
    "whyWrong": {
      "A": "'They're' means 'they are,' which does not fit before the past-tense 'gathered.'",
      "B": "'Their' is a possessive, not a subject.",
      "C": "'There' indicates place, not a subject."
    }
  },
  {
    "id": "form-sense-t1-bp06",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nOne of the bridges over the river ______ closed for repairs this month.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "are"
      },
      {
        "letter": "B",
        "text": "were"
      },
      {
        "letter": "C",
        "text": "is"
      },
      {
        "letter": "D",
        "text": "have been"
      }
    ],
    "answer": "C",
    "explanation": "The subject is 'One' (singular), not 'bridges,' so it takes the singular verb 'is.' C is correct.",
    "whyWrong": {
      "A": "'Are' agrees with 'bridges,' but the subject is the singular 'One.'",
      "B": "'Were' is plural and mismatches 'One.'",
      "D": "'Have been' is plural and mismatches 'One.'"
    }
  },
  {
    "id": "form-sense-t1-bp07",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe gardener watered the seedlings each morning until ______ were strong enough to move outdoors.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "they"
      },
      {
        "letter": "B",
        "text": "it"
      },
      {
        "letter": "C",
        "text": "them"
      },
      {
        "letter": "D",
        "text": "that"
      }
    ],
    "answer": "A",
    "explanation": "The pronoun subject refers to the plural 'seedlings,' so 'they' fits. A is correct.",
    "whyWrong": {
      "B": "'It' is singular, but 'seedlings' is plural.",
      "C": "'Them' is an object pronoun and cannot be the subject of 'were.'",
      "D": "'That' does not agree in number and reads awkwardly as the subject here."
    }
  },
  {
    "id": "form-sense-t1-bp08",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe flock of geese ______ south every autumn, following the same route year after year.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "fly"
      },
      {
        "letter": "B",
        "text": "flies"
      },
      {
        "letter": "C",
        "text": "are flying"
      },
      {
        "letter": "D",
        "text": "have flown"
      }
    ],
    "answer": "B",
    "explanation": "'Flock' is a singular collective noun, so it takes the singular verb 'flies.' B is correct.",
    "whyWrong": {
      "A": "'Fly' agrees with a plural subject, but 'flock' is singular.",
      "C": "'Are flying' is plural and mismatches 'flock.'",
      "D": "'Have flown' is plural and mismatches 'flock.'"
    }
  },
  {
    "id": "form-sense-t1-bp09",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe twins finished their science project a day early, so ______ had time to rehearse the presentation.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "they"
      },
      {
        "letter": "B",
        "text": "it"
      },
      {
        "letter": "C",
        "text": "he"
      },
      {
        "letter": "D",
        "text": "them"
      }
    ],
    "answer": "A",
    "explanation": "The subject refers to the plural 'twins,' so 'they' fits. A is correct.",
    "whyWrong": {
      "B": "'It' is singular, but 'twins' is plural.",
      "C": "'He' is singular and does not match 'twins.'",
      "D": "'Them' is an object pronoun and cannot be the subject of 'had.'"
    }
  },
  {
    "id": "form-sense-t2-bp01",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nBy the time the critics arrived, the gallery ______ already sold half of the paintings in the new show.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "has"
      },
      {
        "letter": "B",
        "text": "had"
      },
      {
        "letter": "C",
        "text": "have"
      },
      {
        "letter": "D",
        "text": "will have"
      }
    ],
    "answer": "B",
    "explanation": "An action completed before another past event ('arrived') takes the past perfect 'had sold.' B is correct.",
    "whyWrong": {
      "A": "'Has' is present perfect and does not place the action before the past arrival.",
      "C": "'Have' is plural and mismatches the singular 'gallery.'",
      "D": "'Will have' is future perfect, contradicting the past-time context."
    }
  },
  {
    "id": "form-sense-t2-bp02",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe survey, together with dozens of follow-up interviews, ______ the basis for the report's main conclusion.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "form"
      },
      {
        "letter": "B",
        "text": "forms"
      },
      {
        "letter": "C",
        "text": "are forming"
      },
      {
        "letter": "D",
        "text": "have formed"
      }
    ],
    "answer": "B",
    "explanation": "The subject is the singular 'survey'; 'together with...interviews' does not change its number, so 'forms' fits. B is correct.",
    "whyWrong": {
      "A": "'Form' agrees with a plural subject, but the subject is the singular 'survey.'",
      "C": "'Are forming' is plural and mismatches 'survey.'",
      "D": "'Have formed' is plural and mismatches 'survey.'"
    }
  },
  {
    "id": "form-sense-t2-bp03",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nRushing to catch the last ferry, ______ barely made it up the gangway before it lifted.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "the gangway was crowded as the travelers"
      },
      {
        "letter": "B",
        "text": "it seemed the travelers"
      },
      {
        "letter": "C",
        "text": "the travelers"
      },
      {
        "letter": "D",
        "text": "there was little time before the travelers"
      }
    ],
    "answer": "C",
    "explanation": "The introductory modifier 'Rushing to catch the last ferry' must describe the people rushing, so 'the travelers' should follow the comma. C is correct.",
    "whyWrong": {
      "A": "This makes 'the gangway' the one rushing—a dangling modifier.",
      "B": "This makes 'it' the subject, leaving the modifier without a logical noun.",
      "D": "This makes 'there' the placeholder subject, misattaching the modifier."
    }
  },
  {
    "id": "form-sense-t2-bp04",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe new regulations will affect drivers and cyclists alike, but planners expect ______ to benefit most from the widened lanes.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "they"
      },
      {
        "letter": "B",
        "text": "them"
      },
      {
        "letter": "C",
        "text": "their"
      },
      {
        "letter": "D",
        "text": "theirs"
      }
    ],
    "answer": "B",
    "explanation": "The pronoun is the object of 'expect,' referring to 'drivers and cyclists,' so the object pronoun 'them' fits. B is correct.",
    "whyWrong": {
      "A": "'They' is a subject pronoun and cannot be the object of 'expect.'",
      "C": "'Their' is possessive, not an object pronoun.",
      "D": "'Theirs' is a possessive pronoun and does not fit as the object."
    }
  },
  {
    "id": "form-sense-t2-bp05",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe findings were unexpected, and the methods behind them ______ documented so thoroughly that other labs could repeat the work.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "was"
      },
      {
        "letter": "B",
        "text": "is"
      },
      {
        "letter": "C",
        "text": "were"
      },
      {
        "letter": "D",
        "text": "has been"
      }
    ],
    "answer": "C",
    "explanation": "The subject 'methods' is plural and the context is past, so the plural past verb 'were' fits. C is correct.",
    "whyWrong": {
      "A": "'Was' is singular and mismatches the plural 'methods.'",
      "B": "'Is' is singular present and mismatches the plural subject and past context.",
      "D": "'Has been' is singular and mismatches 'methods.'"
    }
  },
  {
    "id": "form-sense-t2-bp06",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe jury deliberated for two days before ______ reached a unanimous verdict.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "they"
      },
      {
        "letter": "B",
        "text": "it"
      },
      {
        "letter": "C",
        "text": "them"
      },
      {
        "letter": "D",
        "text": "those"
      }
    ],
    "answer": "B",
    "explanation": "'Jury' is a singular collective noun acting as one body, so the singular pronoun 'it' agrees and serves as the subject of 'reached.' B is correct.",
    "whyWrong": {
      "A": "'They' treats the singular collective 'jury' as plural, breaking agreement here.",
      "C": "'Them' is an object pronoun and cannot be the subject of 'reached.'",
      "D": "'Those' does not agree with the singular collective 'jury.'"
    }
  },
  {
    "id": "form-sense-t2-bp07",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nNeither the manager nor the employees ______ aware that the store's hours had changed.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "was"
      },
      {
        "letter": "B",
        "text": "were"
      },
      {
        "letter": "C",
        "text": "has been"
      },
      {
        "letter": "D",
        "text": "is"
      }
    ],
    "answer": "B",
    "explanation": "With 'neither...nor,' the verb agrees with the nearer subject, 'employees' (plural), so 'were' fits. B is correct.",
    "whyWrong": {
      "A": "'Was' agrees with 'manager,' but the nearer subject 'employees' governs the verb.",
      "C": "'Has been' is singular and mismatches the nearer plural 'employees.'",
      "D": "'Is' is singular present and mismatches both the nearer plural subject and the past context."
    }
  },
  {
    "id": "form-sense-t2-bp08",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nHaving practiced the route many times, ______ finished the course without a single wrong turn.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "the course was easy for the cyclist, who"
      },
      {
        "letter": "B",
        "text": "it was clear that the cyclist"
      },
      {
        "letter": "C",
        "text": "the cyclist"
      },
      {
        "letter": "D",
        "text": "there was no doubt the cyclist"
      }
    ],
    "answer": "C",
    "explanation": "The introductory modifier 'Having practiced the route many times' must describe the one who practiced, so 'the cyclist' should follow the comma. C is correct.",
    "whyWrong": {
      "A": "This makes 'the course' the one who practiced—a dangling modifier.",
      "B": "This makes 'it' the subject, leaving the modifier without a logical noun.",
      "D": "This makes 'there' the placeholder subject, misattaching the modifier."
    }
  },
  {
    "id": "form-sense-t2-bp09",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe author claims that a good opening line does more than begin a story; ______ sets the reader's expectations for everything that follows.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "it"
      },
      {
        "letter": "B",
        "text": "they"
      },
      {
        "letter": "C",
        "text": "one"
      },
      {
        "letter": "D",
        "text": "those"
      }
    ],
    "answer": "A",
    "explanation": "The pronoun refers to the singular 'opening line,' so 'it' fits. A is correct.",
    "whyWrong": {
      "B": "'They' is plural, but 'opening line' is singular.",
      "C": "'One' shifts to a generic reference that does not match the specific 'opening line.'",
      "D": "'Those' is plural and does not match the singular antecedent."
    }
  },
  {
    "id": "form-sense-t3-bp01",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nNot only the mural's bright colors but also its enormous scale ______ what makes the piece so difficult to photograph.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "are"
      },
      {
        "letter": "B",
        "text": "is"
      },
      {
        "letter": "C",
        "text": "were"
      },
      {
        "letter": "D",
        "text": "have been"
      }
    ],
    "answer": "B",
    "explanation": "With 'not only...but also,' the verb agrees with the nearer subject, 'scale' (singular), so 'is' fits. B is correct.",
    "whyWrong": {
      "A": "'Are' agrees with 'colors,' but the nearer subject 'scale' governs the verb.",
      "C": "'Were' is plural and mismatches the nearer singular 'scale.'",
      "D": "'Have been' is plural and mismatches the nearer singular 'scale.'"
    }
  },
  {
    "id": "form-sense-t3-bp02",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe committee could not agree at first, but after a long recess ______ announced a plan that satisfied every member.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "they"
      },
      {
        "letter": "B",
        "text": "it"
      },
      {
        "letter": "C",
        "text": "them"
      },
      {
        "letter": "D",
        "text": "its members, who"
      }
    ],
    "answer": "B",
    "explanation": "'Committee' is a singular collective noun acting as one body, so the singular pronoun 'it' agrees and serves as the subject of 'announced.' B is correct.",
    "whyWrong": {
      "A": "'They' treats the singular collective 'committee' as plural, breaking agreement in this sentence.",
      "C": "'Them' is an object pronoun and cannot be the subject of 'announced.'",
      "D": "'Its members, who' leaves the clause without a finite main verb, creating a fragment."
    }
  },
  {
    "id": "form-sense-t3-bp03",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe evidence gathered from the two excavation sites ______ that the settlement was far older than anyone had assumed.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "indicate"
      },
      {
        "letter": "B",
        "text": "indicates"
      },
      {
        "letter": "C",
        "text": "indicating"
      },
      {
        "letter": "D",
        "text": "to indicate"
      }
    ],
    "answer": "B",
    "explanation": "The subject 'evidence' is a singular mass noun here, and a main verb is needed, so 'indicates' fits. B is correct.",
    "whyWrong": {
      "A": "'Indicate' would treat 'evidence' as plural, but it is singular here.",
      "C": "'Indicating' is a participle, leaving the sentence without a main verb.",
      "D": "'To indicate' is an infinitive and cannot serve as the main verb."
    }
  },
  {
    "id": "form-sense-t3-bp04",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe director valued the cinematographer's eye more than ______, insisting that the images, not the script, carried the film.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "its writing"
      },
      {
        "letter": "B",
        "text": "it's writing"
      },
      {
        "letter": "C",
        "text": "their writing"
      },
      {
        "letter": "D",
        "text": "its' writing"
      }
    ],
    "answer": "A",
    "explanation": "The possessive of 'it,' referring to the singular 'film,' is 'its' with no apostrophe. A is correct.",
    "whyWrong": {
      "B": "'It's' means 'it is,' which is not intended.",
      "C": "'Their' is plural, but the antecedent 'film' is singular.",
      "D": "'Its'' is not a valid word; the possessive 'its' takes no apostrophe."
    }
  },
  {
    "id": "form-sense-t3-bp05",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nNeither the lead engineer nor her assistants ______ expected the prototype to pass every test on the first attempt.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "has"
      },
      {
        "letter": "B",
        "text": "had"
      },
      {
        "letter": "C",
        "text": "was"
      },
      {
        "letter": "D",
        "text": "is"
      }
    ],
    "answer": "B",
    "explanation": "With 'neither...nor,' the verb agrees with the nearer subject, 'assistants' (plural), so the plural 'had' fits the past context. B is correct.",
    "whyWrong": {
      "A": "'Has' is singular and mismatches the nearer plural 'assistants.'",
      "C": "'Was' is singular and mismatches the nearer plural 'assistants.'",
      "D": "'Is' is singular present and mismatches both the plural subject and the past context."
    }
  },
  {
    "id": "form-sense-t3-bp06",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe number of applicants to the program ______ risen sharply since the scholarship was announced.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "have"
      },
      {
        "letter": "B",
        "text": "has"
      },
      {
        "letter": "C",
        "text": "were"
      },
      {
        "letter": "D",
        "text": "are"
      }
    ],
    "answer": "B",
    "explanation": "'The number' is treated as singular (unlike 'a number of'), so it takes the singular 'has.' B is correct.",
    "whyWrong": {
      "A": "'Have' is plural, but 'the number' is singular.",
      "C": "'Were' is plural and does not fit the singular subject or the present-perfect sense.",
      "D": "'Are' is plural and mismatches the singular 'the number.'"
    }
  },
  {
    "id": "form-sense-t3-bp07",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nWritten hastily on the back of a receipt, ______ nonetheless became one of the most quoted poems of the century.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "readers treasured the lines, which"
      },
      {
        "letter": "B",
        "text": "it is said the poem"
      },
      {
        "letter": "C",
        "text": "the poem"
      },
      {
        "letter": "D",
        "text": "there was a poem that"
      }
    ],
    "answer": "C",
    "explanation": "The introductory modifier 'Written hastily on the back of a receipt' must describe the thing written, so 'the poem' should follow the comma. C is correct.",
    "whyWrong": {
      "A": "This makes 'readers' the thing written on a receipt—a dangling modifier.",
      "B": "This makes 'it' the subject, leaving the modifier without a logical noun.",
      "D": "This makes 'there' the placeholder subject, misattaching the modifier."
    }
  },
  {
    "id": "form-sense-t3-bp08",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe series of storms that battered the coast last spring ______ far more damage than the forecasts had predicted.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "cause"
      },
      {
        "letter": "B",
        "text": "caused"
      },
      {
        "letter": "C",
        "text": "have caused"
      },
      {
        "letter": "D",
        "text": "were causing"
      }
    ],
    "answer": "B",
    "explanation": "The subject is the singular 'series,' and 'last spring' signals the past, so the singular past 'caused' fits. B is correct.",
    "whyWrong": {
      "A": "'Cause' is present and would need a plural subject; the subject 'series' is singular.",
      "C": "'Have caused' is plural and its present-perfect sense clashes with 'last spring.'",
      "D": "'Were causing' is plural and mismatches the singular 'series.'"
    }
  },
  {
    "id": "form-sense-t3-bp09",
    "domain": "rw-sec",
    "skill": "form-sense",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Complete the text so that it conforms to the conventions of Standard English.\n\nThe orchestra and the choir, rehearsing in separate halls all week, ______ finally join for a single performance tonight.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "letter": "A",
        "text": "will"
      },
      {
        "letter": "B",
        "text": "will finally joins"
      },
      {
        "letter": "C",
        "text": "is going to"
      },
      {
        "letter": "D",
        "text": "has"
      }
    ],
    "answer": "A",
    "explanation": "Two subjects joined by 'and' form a plural subject, so the verb should be plural; 'will join' fits, and 'will' is the correct auxiliary. A is correct.",
    "whyWrong": {
      "B": "'Joins' is singular and cannot follow 'will'; the form is doubly wrong.",
      "C": "'Is going to' is singular and mismatches the compound plural subject.",
      "D": "'Has' is singular and mismatches the compound plural subject."
    }
  },
];
