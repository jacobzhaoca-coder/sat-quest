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
];
