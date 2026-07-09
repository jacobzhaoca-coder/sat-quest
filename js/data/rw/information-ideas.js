/* SAT Quest — ORIGINAL SAT-style Reading & Writing bank: Information and Ideas.
   Every passage and question was written from scratch for this app. None are
   copied, paraphrased, or adapted from College Board, Bluebook, Khan Academy,
   or any published test or prep book. They imitate only the STRUCTURE, tone,
   and difficulty of the digital SAT.

   Item shape: { id, domain, skill, tier, text, choices:[{letter,text}],
   answer, explanation, whyWrong:{letter:reason} }. The loader (rw/index.js)
   adds difficulty labels, time targets, and strategy tips. */

const RW_BANK_II = [
  {
    "id": "central-ideas-t1-01",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is from a science magazine article about octopuses.\n\nOctopuses have long fascinated researchers because so much of their nervous system lies outside the brain. Nearly two-thirds of an octopus's neurons are distributed throughout its arms, allowing each arm to explore, grip, and even \"taste\" surfaces with a degree of independence. An arm can react to food it touches before the central brain registers the contact at all.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Octopuses are the most intelligent animals in the ocean."
      },
      {
        "letter": "B",
        "text": "Much of an octopus's neural processing happens in its arms rather than its brain."
      },
      {
        "letter": "C",
        "text": "Octopuses use their arms mainly to find food."
      },
      {
        "letter": "D",
        "text": "An octopus's brain cannot register touch."
      }
    ],
    "answer": "B",
    "explanation": "The passage centers on the surprising fact that most of the octopus's neurons are in its arms, which act with independence. B captures this.",
    "whyWrong": {
      "A": "The text never compares octopus intelligence to other animals.",
      "C": "Finding food is one example, not the main idea about neural distribution.",
      "D": "The brain does register touch — just later than the arm."
    }
  },
  {
    "id": "central-ideas-t1-02",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is adapted from a community newsletter.\n\nWhen the Riverside library began lending out more than books—tools, telescopes, even sewing machines—some residents were skeptical. Two years later, the \"library of things\" is the branch's most popular program. Borrowers say it lets them try expensive equipment before buying, and the library reports that overall visits have risen by a third.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The library's expanded lending program has proven popular and drawn more visitors."
      },
      {
        "letter": "B",
        "text": "Residents were right to be skeptical of the new program."
      },
      {
        "letter": "C",
        "text": "Libraries should stop lending books entirely."
      },
      {
        "letter": "D",
        "text": "Telescopes are the most borrowed item at the library."
      }
    ],
    "answer": "A",
    "explanation": "The text tracks a program that began with doubt and became a success that raised visits. A states exactly that arc.",
    "whyWrong": {
      "B": "The outcome contradicts the skepticism; the program succeeded.",
      "C": "The text never suggests dropping books; it added items.",
      "D": "No item is singled out as the most borrowed."
    }
  },
  {
    "id": "central-ideas-t2-01",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from a history of urban design.\n\nThe grand boulevards that define central Paris were not merely aesthetic. When Georges-Eugène Haussmann redrew the city in the 1850s and 1860s, the wide, straight avenues improved the flow of air and light and eased the movement of traffic. Yet the same avenues also made it far harder for residents to barricade narrow streets during uprisings—an outcome the government of the time did not regret.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Haussmann's boulevards were purely decorative additions to Paris."
      },
      {
        "letter": "B",
        "text": "Paris was redesigned mainly to stop political uprisings."
      },
      {
        "letter": "C",
        "text": "Haussmann's boulevards served practical purposes that were both civic and political."
      },
      {
        "letter": "D",
        "text": "Wide avenues improved air quality in every European capital."
      }
    ],
    "answer": "C",
    "explanation": "The passage balances two purposes—improving light, air, and traffic AND making revolt harder. C holds both.",
    "whyWrong": {
      "A": "The text explicitly says the boulevards were \"not merely aesthetic.\"",
      "B": "Suppressing revolt was one effect, not the sole stated purpose.",
      "D": "The passage is about Paris only, not every capital."
    }
  },
  {
    "id": "central-ideas-t2-02",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from an article about honeybees.\n\nA foraging honeybee that finds a rich patch of flowers does not keep the discovery to itself. Returning to the hive, it performs a looping \"waggle dance\" whose angle and duration encode the direction and distance of the food. Hivemates read the dance and fly out along the same bearing, turning one bee's find into the whole colony's meal.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Honeybees communicate the location of food to the colony through a coded dance."
      },
      {
        "letter": "B",
        "text": "Honeybees prefer flowers that grow close to the hive."
      },
      {
        "letter": "C",
        "text": "A single honeybee can gather enough food for the whole colony."
      },
      {
        "letter": "D",
        "text": "The waggle dance is mainly a form of play among hivemates."
      }
    ],
    "answer": "A",
    "explanation": "Every sentence builds toward the idea that the dance encodes food location for the colony to use. A captures it.",
    "whyWrong": {
      "B": "Distance is encoded, but no preference for nearby flowers is stated.",
      "C": "The colony flies out together; one bee does not feed all.",
      "D": "The dance conveys information; it is not described as play."
    }
  },
  {
    "id": "central-ideas-t3-01",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is from a review of a novel.\n\nCritics have often praised the novel for its plot, but its quieter achievement is structural. By narrating the same afternoon four times, each from a different character's vantage, the author refuses to grant any single account authority. The reader is left not with a solved mystery but with a lesson in the limits of any one perspective.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The novel's repeated narration emphasizes that no single viewpoint is complete."
      },
      {
        "letter": "B",
        "text": "The novel's plot is its most celebrated feature."
      },
      {
        "letter": "C",
        "text": "The novel fails because it never solves its central mystery."
      },
      {
        "letter": "D",
        "text": "The author uses four narrators to make the plot easier to follow."
      }
    ],
    "answer": "A",
    "explanation": "The reviewer argues the four retellings teach the limits of a single perspective. A matches.",
    "whyWrong": {
      "B": "The reviewer sets the plot praise aside to highlight structure.",
      "C": "The unsolved mystery is the intended effect, not a failure.",
      "D": "The narration complicates authority; it is not for easy following."
    }
  },
  {
    "id": "central-ideas-t3-02",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is from an essay on translation.\n\nA translator faces a choice on every line: stay faithful to the literal words or preserve the feeling they create. Translate a joke word for word and it may fall flat; rewrite it to land, and you have strayed from the original text. The best translations, the essayist argues, are not the most literal but the most alive—works that recreate the effect rather than merely the words.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Good translation prioritizes recreating a text’s effect over reproducing its exact words."
      },
      {
        "letter": "B",
        "text": "Translating humor is the hardest task a translator faces."
      },
      {
        "letter": "C",
        "text": "Literal translation is always superior to looser approaches."
      },
      {
        "letter": "D",
        "text": "Most translators avoid translating jokes altogether."
      }
    ],
    "answer": "A",
    "explanation": "The essay resolves the faithful-versus-alive tension in favor of recreating effect. A states the thesis.",
    "whyWrong": {
      "B": "The joke is an example of the trade-off, not the central claim.",
      "C": "The essay argues the opposite of \"literal is always superior.\"",
      "D": "No claim is made about translators avoiding jokes."
    }
  },
  {
    "id": "evidence-text-t1-01",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A researcher hypothesized that houseplants improve concentration in office workers. She wants to support the claim that employees with a plant on their desk stay focused longer.\n\nWhich finding, if true, would most directly support the researcher's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "Employees with desk plants reported enjoying their workspace more than those without."
      },
      {
        "letter": "B",
        "text": "Employees with desk plants sustained attention on tasks for measurably longer periods than those without."
      },
      {
        "letter": "C",
        "text": "Most employees said they would like a plant if the company provided one."
      },
      {
        "letter": "D",
        "text": "Plants require watering about once a week to stay healthy."
      }
    ],
    "answer": "B",
    "explanation": "The claim is specifically about staying focused longer. B measures exactly that.",
    "whyWrong": {
      "A": "Enjoyment is not the same as sustained focus.",
      "C": "Preference for a plant says nothing about concentration.",
      "D": "Watering is irrelevant to the claim."
    }
  },
  {
    "id": "evidence-text-t1-02",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A student claims that a local park's new lighting has made the walking path feel safer to use at night.\n\nWhich finding, if true, would most directly support the student's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "The new lights use less electricity than the old ones."
      },
      {
        "letter": "B",
        "text": "After the lighting was installed, surveyed nighttime walkers reported feeling safer on the path."
      },
      {
        "letter": "C",
        "text": "The park added several new benches at the same time."
      },
      {
        "letter": "D",
        "text": "The lighting project was completed under budget."
      }
    ],
    "answer": "B",
    "explanation": "The claim is about feeling safer at night; B measures exactly that perception among nighttime users.",
    "whyWrong": {
      "A": "Energy use does not address how safe the path feels.",
      "C": "Benches are a separate change unrelated to the safety claim.",
      "D": "Budget performance is irrelevant to perceived safety."
    }
  },
  {
    "id": "evidence-text-t2-01",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "A team of biologists claims that a newly restored wetland has become a healthy habitat for native frogs.\n\nWhich finding, if true, would most strongly support the team's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "The wetland is larger than the one it replaced."
      },
      {
        "letter": "B",
        "text": "Visitors report seeing more birds near the wetland."
      },
      {
        "letter": "C",
        "text": "Native frog populations in the wetland have grown steadily and are now reproducing there."
      },
      {
        "letter": "D",
        "text": "The restoration project was completed ahead of schedule."
      }
    ],
    "answer": "C",
    "explanation": "A healthy habitat for native frogs would show native frogs thriving and reproducing—exactly C.",
    "whyWrong": {
      "A": "Size alone does not show the frogs are doing well.",
      "B": "Birds are a different species; the claim is about frogs.",
      "D": "Schedule does not speak to habitat health."
    }
  },
  {
    "id": "evidence-text-t2-02",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "An author argues that reading fiction can strengthen a person's ability to understand others' emotions.\n\nWhich finding, if true, would most directly support the author's argument?",
    "choices": [
      {
        "letter": "A",
        "text": "People who read more fiction scored higher on tests of recognizing others’ emotions than people who read little fiction."
      },
      {
        "letter": "B",
        "text": "Fiction sales have risen steadily over the past decade."
      },
      {
        "letter": "C",
        "text": "Many readers say they enjoy fiction more than nonfiction."
      },
      {
        "letter": "D",
        "text": "Libraries stock more fiction titles than nonfiction titles."
      }
    ],
    "answer": "A",
    "explanation": "The argument links fiction reading to understanding emotions; A directly connects the two with a measured outcome.",
    "whyWrong": {
      "B": "Sales trends do not measure emotional understanding.",
      "C": "Enjoyment is unrelated to the skill being claimed.",
      "D": "Library stock says nothing about readers’ abilities."
    }
  },
  {
    "id": "evidence-text-t3-01",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "An economist argues that a city's new bike-share program has reduced short car trips downtown.\n\nWhich finding, if true, would most directly undermine the economist's argument?",
    "choices": [
      {
        "letter": "A",
        "text": "Bike-share ridership has grown every month since the program launched."
      },
      {
        "letter": "B",
        "text": "The number of short car trips downtown has stayed the same, and most bike-share riders previously walked or took the bus."
      },
      {
        "letter": "C",
        "text": "Downtown parking prices rose slightly during the same period."
      },
      {
        "letter": "D",
        "text": "Residents say they feel the downtown is more crowded than before."
      }
    ],
    "answer": "B",
    "explanation": "To undermine the claim that bikes replaced short car trips, we need evidence car trips did not fall and that riders came from other modes—precisely B.",
    "whyWrong": {
      "A": "Rising ridership supports, not undermines, the program.",
      "C": "Parking prices are a separate factor, not counter-evidence.",
      "D": "Perceived crowding does not address car-trip counts."
    }
  },
  {
    "id": "evidence-quant-t1-01",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A student researching commuting surveyed 200 workers about how they travel to work. She found that 90 drove alone, 60 took public transit, 30 carpooled, and 20 biked or walked.\n\nWhich choice most accurately uses the data to complete the statement?\n\nMore workers in the survey drove alone than ______",
    "choices": [
      {
        "letter": "A",
        "text": "took public transit and carpooled combined."
      },
      {
        "letter": "B",
        "text": "took public transit."
      },
      {
        "letter": "C",
        "text": "used any other single mode of travel."
      },
      {
        "letter": "D",
        "text": "biked or walked, but fewer than carpooled."
      }
    ],
    "answer": "C",
    "explanation": "Driving alone (90) exceeds each other single category (transit 60, carpool 30, bike/walk 20), so C is accurate.",
    "whyWrong": {
      "A": "Transit + carpool = 90, which equals driving alone, not fewer.",
      "B": "True but weaker; C is the fully accurate and complete statement.",
      "D": "Carpooling (30) is more than biking/walking (20), so \"fewer than carpooled\" is false."
    }
  },
  {
    "id": "evidence-quant-t2-01",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A report presented data on a town's recycling. In 2018, residents recycled 40% of their waste; in 2020, 52%; and in 2022, 61%.\n\nWhich choice most effectively uses the data to support the claim that the town's recycling rate improved over this period?",
    "choices": [
      {
        "letter": "A",
        "text": "The recycling rate rose from 40% in 2018 to 61% in 2022."
      },
      {
        "letter": "B",
        "text": "The recycling rate was 52% in 2020."
      },
      {
        "letter": "C",
        "text": "Residents produced less waste overall by 2022."
      },
      {
        "letter": "D",
        "text": "The recycling rate was highest in 2022."
      }
    ],
    "answer": "A",
    "explanation": "Support for improvement over the period needs the change across it: 40% up to 61%. A shows the increase directly.",
    "whyWrong": {
      "B": "A single midpoint value does not show improvement over the whole period.",
      "C": "The data are about recycling rate, not total waste produced.",
      "D": "A true endpoint fact, but it shows a maximum, not the trend of improvement."
    }
  },
  {
    "id": "evidence-quant-t2-02",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A study measured average daily screen time for three age groups: ages 13–17 averaged 7.2 hours, ages 18–29 averaged 6.1 hours, and ages 30–49 averaged 4.8 hours.\n\nWhich statement is best supported by the data?",
    "choices": [
      {
        "letter": "A",
        "text": "Average daily screen time decreased as age group increased."
      },
      {
        "letter": "B",
        "text": "Everyone aged 13–17 used screens for more than 7 hours daily."
      },
      {
        "letter": "C",
        "text": "The 18–29 group spent the least time on screens."
      },
      {
        "letter": "D",
        "text": "Screen time will continue to fall for all age groups."
      }
    ],
    "answer": "A",
    "explanation": "From 7.2 to 6.1 to 4.8 hours, the average falls as the age group rises. A is directly supported.",
    "whyWrong": {
      "B": "An average does not mean every individual exceeded 7 hours.",
      "C": "The 30–49 group had the least (4.8), not the 18–29 group.",
      "D": "The data describe the present; they do not predict the future."
    }
  },
  {
    "id": "evidence-quant-t3-01",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A researcher compared two fertilizers. Plots using Fertilizer X yielded a mean of 52 kg of tomatoes with most plots between 48 and 56 kg. Plots using Fertilizer Y yielded a mean of 52 kg but ranged widely, from 30 to 74 kg.\n\nWhich statement is best supported by the data?",
    "choices": [
      {
        "letter": "A",
        "text": "Fertilizer X produced more consistent yields than Fertilizer Y, though their means were equal."
      },
      {
        "letter": "B",
        "text": "Fertilizer Y produced a higher average yield than Fertilizer X."
      },
      {
        "letter": "C",
        "text": "Fertilizer X always outperforms Fertilizer Y."
      },
      {
        "letter": "D",
        "text": "Neither fertilizer affected tomato yield."
      }
    ],
    "answer": "A",
    "explanation": "Equal means but a much narrower range for X indicate X was more consistent (less spread). A captures both facts.",
    "whyWrong": {
      "B": "The means are equal (both 52 kg), so Y is not higher.",
      "C": "Y ranged up to 74 kg, so X does not always outperform it.",
      "D": "Both produced substantial yields; the claim of no effect is unsupported."
    }
  },
  {
    "id": "inferences-t1-01",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "The following text is from a nature guide.\n\nUnlike most owls, which hunt in near-total darkness, the northern hawk-owl hunts primarily during daylight. Its eyes are proportionally smaller than those of nocturnal owls, and it relies heavily on sharp vision to spot prey from a high perch. This suggests that, for the northern hawk-owl, ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "daytime light conditions are well suited to how it locates prey."
      },
      {
        "letter": "B",
        "text": "hearing is more important than sight for finding food."
      },
      {
        "letter": "C",
        "text": "hunting is impossible during the day."
      },
      {
        "letter": "D",
        "text": "larger eyes would improve its daytime hunting."
      }
    ],
    "answer": "A",
    "explanation": "The bird hunts in daylight and depends on sharp vision, so daytime light suits its method. A follows.",
    "whyWrong": {
      "B": "The text stresses vision, not hearing.",
      "C": "It hunts by day, so daytime hunting is clearly possible.",
      "D": "Smaller eyes accompany its daytime hunting; the text does not favor larger eyes."
    }
  },
  {
    "id": "inferences-t2-01",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The following text is from a study of ancient trade.\n\nArchaeologists excavating a remote highland village found large quantities of seashells and pottery styles otherwise known only from coastal settlements hundreds of miles away. No local source for these materials exists nearby. The most reasonable conclusion is that the highland villagers ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "produced seashells and coastal pottery themselves."
      },
      {
        "letter": "B",
        "text": "participated in trade networks that reached distant coastal regions."
      },
      {
        "letter": "C",
        "text": "lived on the coast before moving inland."
      },
      {
        "letter": "D",
        "text": "had no contact with other communities."
      }
    ],
    "answer": "B",
    "explanation": "Coastal materials with no local source, found far inland, most reasonably arrived through trade. B follows.",
    "whyWrong": {
      "A": "Seashells cannot be produced inland with no local source.",
      "C": "The goods traveled; nothing indicates the people relocated.",
      "D": "The foreign goods are evidence of contact, not isolation."
    }
  },
  {
    "id": "inferences-t2-02",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The following text is from an article about sleep and learning.\n\nStudents who studied a list of facts and then slept recalled more of the material the next morning than students who studied the same list and stayed awake for the same interval. The two groups performed equally on the list immediately after studying. This pattern suggests that sleep ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "helps strengthen newly learned material in memory."
      },
      {
        "letter": "B",
        "text": "makes the initial learning of facts faster."
      },
      {
        "letter": "C",
        "text": "has no measurable effect on memory."
      },
      {
        "letter": "D",
        "text": "is only useful for learning physical skills."
      }
    ],
    "answer": "A",
    "explanation": "Equal immediate scores but better next-morning recall after sleep points to sleep consolidating memory. A follows.",
    "whyWrong": {
      "B": "Immediate scores were equal, so sleep did not speed initial learning.",
      "C": "The sleep group recalled more, so there is a measurable effect.",
      "D": "The study involved facts, not physical skills."
    }
  },
  {
    "id": "inferences-t3-01",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "The following text is from an essay on memory.\n\nParticipants asked to recall a list of words performed worse when a similar-sounding list was read aloud during the test than when an unrelated list was read. Curiously, participants recalled just as well when the interfering sounds were meaningless tones rather than words. This pattern implies that the interference arises specifically from ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "any sound present during the recall test."
      },
      {
        "letter": "B",
        "text": "the volume at which the lists were read."
      },
      {
        "letter": "C",
        "text": "competition among verbal material rather than sound in general."
      },
      {
        "letter": "D",
        "text": "the length of the original word list."
      }
    ],
    "answer": "C",
    "explanation": "Similar-sounding words hurt recall but meaningless tones did not, so the interference is specific to verbal material. C follows.",
    "whyWrong": {
      "A": "Tones (a sound) did not interfere, ruling out \"any sound.\"",
      "B": "Volume was not the variable manipulated.",
      "D": "List length is not implicated by the comparison described."
    }
  },
  {
    "id": "central-ideas-t2-03",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from an article about deep-sea exploration.\n\nMore than 80 percent of the ocean has never been mapped in detail, let alone seen by human eyes. The pressure at great depths crushes most equipment, and sunlight vanishes within the first few hundred meters. As a result, biologists suspect that the majority of the ocean's species remain entirely unknown to science.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The deep ocean is largely unexplored, so many of its species are likely still undiscovered."
      },
      {
        "letter": "B",
        "text": "Sunlight is the main obstacle to ocean exploration."
      },
      {
        "letter": "C",
        "text": "Most ocean species live near the surface."
      },
      {
        "letter": "D",
        "text": "Deep-sea equipment has improved dramatically in recent years."
      }
    ],
    "answer": "A",
    "explanation": "The passage links the ocean being unmapped and hard to reach with the conclusion that most species are unknown. A states this.",
    "whyWrong": {
      "B": "Sunlight is one of several obstacles, not the single main point.",
      "C": "The text implies the opposite — unknown species likely live in the unexplored deep.",
      "D": "The passage stresses the difficulty of exploration, not improved equipment."
    }
  },
  {
    "id": "evidence-text-t2-03",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "A historian claims that the spread of printed pamphlets in the 1700s helped ordinary people participate in political debate.\n\nWhich finding, if true, would most directly support the historian's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "Printing presses became more expensive to operate during the century."
      },
      {
        "letter": "B",
        "text": "Surviving records show that cheap pamphlets circulated widely and were read aloud in taverns and squares where ordinary people gathered."
      },
      {
        "letter": "C",
        "text": "Most pamphlets were printed on low-quality paper."
      },
      {
        "letter": "D",
        "text": "Wealthy families owned the largest private libraries."
      }
    ],
    "answer": "B",
    "explanation": "The claim is that pamphlets let ordinary people join political debate; B shows wide circulation reaching ordinary people in public spaces.",
    "whyWrong": {
      "A": "Higher costs would work against wide circulation, not support the claim.",
      "C": "Paper quality says nothing about who read the pamphlets or debated.",
      "D": "Wealthy libraries concern elites, not ordinary participation."
    }
  },
  {
    "id": "evidence-quant-t2-03",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A biologist recorded the number of bird species observed at three habitats: a restored wetland (42 species), a nearby farm field (18 species), and a parking lot (6 species).\n\nWhich statement is best supported by the data?",
    "choices": [
      {
        "letter": "A",
        "text": "The restored wetland hosted more than twice as many bird species as the farm field."
      },
      {
        "letter": "B",
        "text": "The parking lot had no birds at all."
      },
      {
        "letter": "C",
        "text": "Farm fields always support fewer species than wetlands."
      },
      {
        "letter": "D",
        "text": "The wetland had exactly three times as many species as the parking lot."
      }
    ],
    "answer": "A",
    "explanation": "The wetland (42) has more than twice the farm field (18), since 2 × 18 = 36 < 42. A is directly supported.",
    "whyWrong": {
      "B": "The parking lot had 6 species, not zero.",
      "C": "\"Always\" overgeneralizes from a single comparison.",
      "D": "42 is seven times 6, not three times."
    }
  },
  {
    "id": "inferences-t2-03",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The following text is from an essay about museums.\n\nWhen a museum displays an ancient bowl behind glass, stripped of the kitchen it once served, visitors admire its shape and glaze. But the label rarely mentions the meals it held or the hands that washed it. A museum, in this sense, can preserve an object while quietly erasing its ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "everyday purpose and human context."
      },
      {
        "letter": "B",
        "text": "physical shape and color."
      },
      {
        "letter": "C",
        "text": "monetary value to collectors."
      },
      {
        "letter": "D",
        "text": "protective glass case."
      }
    ],
    "answer": "A",
    "explanation": "The passage contrasts the preserved shape/glaze with the lost meals and hands — the object's everyday use and human context. A follows.",
    "whyWrong": {
      "B": "Shape and color are exactly what the museum preserves, not erases.",
      "C": "Monetary value is never mentioned.",
      "D": "The glass case preserves the object; it is not what is erased."
    }
  },
  {
    "id": "central-ideas-t3-03",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is from an essay on cities.\n\nPlanners once measured a street's success by how many cars it could move. A newer view reverses the priority: the best streets, its advocates argue, are judged by how well they serve people on foot, on bikes, and at rest—by how much life they invite, not how much traffic they clear.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "A newer approach judges streets by how well they serve people rather than by traffic flow."
      },
      {
        "letter": "B",
        "text": "Streets should be designed to move as many cars as possible."
      },
      {
        "letter": "C",
        "text": "Bikes are the most important users of city streets."
      },
      {
        "letter": "D",
        "text": "Older planners never considered pedestrians at all."
      }
    ],
    "answer": "A",
    "explanation": "The passage contrasts the old car-focused measure with a newer people-focused one it favors. A captures the shift.",
    "whyWrong": {
      "B": "This is the old view the passage moves away from.",
      "C": "Bikes are one example among several users, not singled out as most important.",
      "D": "The text does not claim older planners ignored pedestrians entirely."
    }
  },
  {
    "id": "inferences-t3-02",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "The following text is from a biology article.\n\nCertain desert plants open the pores in their leaves only at night. During the cool darkness, they take in the carbon dioxide they need and store it chemically until daylight, when they can use sunlight to complete photosynthesis without opening their pores. This strategy is especially valuable in a desert because it allows the plants to ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "limit the water they lose to the dry daytime air."
      },
      {
        "letter": "B",
        "text": "absorb more sunlight than other plants."
      },
      {
        "letter": "C",
        "text": "grow taller than plants in wetter climates."
      },
      {
        "letter": "D",
        "text": "stop performing photosynthesis entirely."
      }
    ],
    "answer": "A",
    "explanation": "Opening pores at night rather than in the hot, dry day reduces water lost through those pores — the desert advantage. A follows.",
    "whyWrong": {
      "B": "The strategy is about timing pore opening, not gathering more sunlight.",
      "C": "Height is never discussed.",
      "D": "The plants still complete photosynthesis in daylight; they do not stop it."
    }
  },
  {
    "id": "central-ideas-t1-03",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is from an article about honeybees.\n\nA honeybee returning from a rich patch of flowers performs a looping \"waggle dance\" on the honeycomb. The angle and duration of the dance tell other bees the direction and distance of the food. Hive-mates crowd close, then fly off toward the source—often arriving with striking accuracy.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Honeybees prefer flowers that are far from the hive."
      },
      {
        "letter": "B",
        "text": "A honeybee's dance communicates the location of food to other bees."
      },
      {
        "letter": "C",
        "text": "Honeybees cannot find food without dancing."
      },
      {
        "letter": "D",
        "text": "The waggle dance is the only way bees move on the comb."
      }
    ],
    "answer": "B",
    "explanation": "The passage explains that the dance encodes direction and distance and that hive-mates then reach the food accurately—so the dance communicates location.",
    "whyWrong": {
      "A": "Distance is encoded, but no preference for far flowers is stated.",
      "C": "The text never claims dancing is required to find any food at all.",
      "D": "The dance is one behavior on the comb, not the only movement."
    }
  },
  {
    "id": "central-ideas-t1-04",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is adapted from a city transit report.\n\nWhen the downtown bus line began running every ten minutes instead of every half hour, ridership climbed quickly. Commuters who once drove said the shorter wait finally made the bus worth taking. Within a year, the route carried nearly twice as many passengers as before.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Buses are cheaper to operate than cars."
      },
      {
        "letter": "B",
        "text": "Downtown traffic has become impossible for drivers."
      },
      {
        "letter": "C",
        "text": "More frequent service made the bus line far more popular."
      },
      {
        "letter": "D",
        "text": "Commuters dislike waiting for any form of transit."
      }
    ],
    "answer": "C",
    "explanation": "The passage links the switch to ten-minute service with rising ridership and a near-doubling of passengers, so frequency drove popularity.",
    "whyWrong": {
      "A": "Operating cost is never discussed.",
      "B": "Traffic conditions for drivers are not described.",
      "D": "Commuters' general feelings about waiting are not the point; the specific change is."
    }
  },
  {
    "id": "central-ideas-t1-05",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is from a nature essay.\n\nThe tiny goby fish shares its burrow with a nearly blind shrimp. The shrimp digs and maintains the tunnel; the sharp-eyed goby stands guard at the entrance, flicking its tail to warn of danger. Neither animal thrives alone, but together they keep the burrow safe and open.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The goby and the shrimp depend on each other for survival."
      },
      {
        "letter": "B",
        "text": "Shrimp are better burrow-builders than fish."
      },
      {
        "letter": "C",
        "text": "The goby fish is nearly blind."
      },
      {
        "letter": "D",
        "text": "Burrows are dangerous places for small animals."
      }
    ],
    "answer": "A",
    "explanation": "The passage describes a partnership in which each animal supplies what the other lacks and notes neither thrives alone—mutual dependence.",
    "whyWrong": {
      "B": "The shrimp digs, but the text stresses partnership, not which is \"better.\"",
      "C": "The shrimp is nearly blind; the goby is sharp-eyed.",
      "D": "The burrow is kept safe, not portrayed as generally dangerous."
    }
  },
  {
    "id": "central-ideas-t1-06",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is from a student's report on recycling.\n\nMany people rinse and sort their recycling carefully, yet a single greasy pizza box or half-full jar can spoil an entire batch at the sorting plant. Facility managers say that \"wishcycling\"—tossing in items people hope are recyclable—creates more contamination than any other habit.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Pizza boxes can never be recycled."
      },
      {
        "letter": "B",
        "text": "Hopeful but incorrect recycling is a major source of contamination."
      },
      {
        "letter": "C",
        "text": "Sorting plants refuse all glass jars."
      },
      {
        "letter": "D",
        "text": "Most people do not try to recycle at all."
      }
    ],
    "answer": "B",
    "explanation": "The text names \"wishcycling\"—tossing in hoped-for items—as the leading cause of contamination, which is the central point.",
    "whyWrong": {
      "A": "A greasy box is one example, not a blanket rule about all pizza boxes.",
      "C": "A half-full jar is the problem, not jars in general.",
      "D": "The passage says many people recycle carefully."
    }
  },
  {
    "id": "central-ideas-t2-04",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from an article about urban trees.\n\nCities once planted whatever trees grew fastest, lining streets with a single species for a tidy look. But when a single pest arrived, whole neighborhoods lost their canopy at once. Today many planners deliberately mix species, trading uniform beauty for a forest that no single disease can erase.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Fast-growing trees are always the best choice for cities."
      },
      {
        "letter": "B",
        "text": "Planners now favor mixed species to protect cities from losing their trees."
      },
      {
        "letter": "C",
        "text": "Pests are no longer a threat to urban trees."
      },
      {
        "letter": "D",
        "text": "Uniform tree-lined streets are more beautiful than mixed ones."
      }
    ],
    "answer": "B",
    "explanation": "The passage contrasts the old single-species approach with today's deliberate mixing, framing diversity as protection against total loss—the main idea.",
    "whyWrong": {
      "A": "The text criticizes relying on fast growth alone.",
      "C": "Pests remain the very reason for mixing species.",
      "D": "The passage treats uniform beauty as a trade-off, not a settled superiority."
    }
  },
  {
    "id": "central-ideas-t2-05",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is adapted from a history of photography.\n\nEarly portrait sitters had to hold perfectly still for a full minute while the plate slowly gathered light. Smiles were nearly impossible to sustain, so subjects set their faces into a solemn calm. The stern expressions in old photographs, then, may reveal less about the era's mood than about its technology.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "People in the past were generally unhappy."
      },
      {
        "letter": "B",
        "text": "Long exposure times, not gloomy moods, explain the stern faces in early photos."
      },
      {
        "letter": "C",
        "text": "Early photographers preferred serious subjects."
      },
      {
        "letter": "D",
        "text": "Smiling was considered rude in early portraits."
      }
    ],
    "answer": "B",
    "explanation": "The passage argues the solemn look came from having to hold still for slow exposures—technology, not mood—which is its central claim.",
    "whyWrong": {
      "A": "The text specifically pushes back on reading the faces as unhappiness.",
      "C": "Photographers' preferences are not the cause given; the exposure time is.",
      "D": "No etiquette rule about smiling is mentioned."
    }
  },
  {
    "id": "central-ideas-t2-06",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from an essay about language.\n\nWhen a language has no separate word for \"blue,\" speakers still see the color—but they may be slower to pick a blue square out from green ones. Researchers argue that vocabulary does not build the world we perceive so much as sharpen the edges we already notice.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "People cannot see colors their language lacks words for."
      },
      {
        "letter": "B",
        "text": "Vocabulary refines, rather than creates, the distinctions people perceive."
      },
      {
        "letter": "C",
        "text": "All languages have a word for blue."
      },
      {
        "letter": "D",
        "text": "Color perception is entirely learned from language."
      }
    ],
    "answer": "B",
    "explanation": "The passage says speakers still see the color but sort it faster with a word, concluding vocabulary \"sharpens edges we already notice\"—refining, not creating.",
    "whyWrong": {
      "A": "The text explicitly says speakers still see the color.",
      "C": "It describes languages that lack a word for blue.",
      "D": "It denies that language fully builds perception."
    }
  },
  {
    "id": "central-ideas-t3-04",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is from a scholarly article on memory.\n\nEach time a memory is recalled, it becomes briefly unstable and must be stored again, and small changes can slip in during that window. What feels like replaying a fixed recording may instead be closer to retelling a story—faithful in outline, but quietly revised with every telling.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Memories are permanent recordings that never change."
      },
      {
        "letter": "B",
        "text": "Recalling a memory can subtly alter it, making remembering an act of reconstruction."
      },
      {
        "letter": "C",
        "text": "People cannot trust any of their memories."
      },
      {
        "letter": "D",
        "text": "Frequent recall is the best way to keep memories accurate."
      }
    ],
    "answer": "B",
    "explanation": "The passage explains that recall reopens a memory to small revisions, likening remembering to retelling a story—reconstruction, not fixed playback.",
    "whyWrong": {
      "A": "The text argues the opposite of permanence.",
      "C": "\"Faithful in outline\" shows memories aren't declared wholly untrustworthy.",
      "D": "Recall introduces changes, so it is not framed as a reliability booster."
    }
  },
  {
    "id": "central-ideas-t3-05",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is adapted from an essay on scientific discovery.\n\nWe tend to picture breakthroughs as sudden flashes—an apple, a bathtub, a cry of \"Eureka!\" Yet the historical record more often shows a slow accumulation: failed trials, borrowed ideas, and quiet corrections over years. The dramatic moment, when it comes, is usually the visible tip of a long, unglamorous climb.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Famous discovery stories exaggerate the role of sudden inspiration."
      },
      {
        "letter": "B",
        "text": "Scientists rarely make mistakes on the path to discovery."
      },
      {
        "letter": "C",
        "text": "Eureka moments are entirely fictional."
      },
      {
        "letter": "D",
        "text": "Borrowing ideas is the main cause of scientific failure."
      }
    ],
    "answer": "A",
    "explanation": "The passage contrasts the myth of sudden flashes with the reality of slow accumulation, arguing the dramatic moment overstates sudden inspiration.",
    "whyWrong": {
      "B": "The text emphasizes failed trials and corrections—many mistakes.",
      "C": "It says the dramatic moment does come, just late; not that it is fictional.",
      "D": "Borrowing ideas is part of progress here, not a cause of failure."
    }
  },
  {
    "id": "central-ideas-t3-06",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is from a book about rivers.\n\nA river seems like the most fixed feature of a landscape, yet over centuries it wanders—cutting new channels, abandoning old bends, leaving crescent lakes where it once ran. To call a river a single line on a map is to freeze a single frame of a body always quietly on the move.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Rivers are among the most unchanging parts of a landscape."
      },
      {
        "letter": "B",
        "text": "A river is better understood as a shifting body than as a fixed line."
      },
      {
        "letter": "C",
        "text": "Maps of rivers are useless."
      },
      {
        "letter": "D",
        "text": "Crescent lakes are the main danger rivers create."
      }
    ],
    "answer": "B",
    "explanation": "The passage overturns the image of a fixed river, describing how it wanders and concluding a map freezes something \"always on the move.\"",
    "whyWrong": {
      "A": "The text argues rivers are not unchanging.",
      "C": "It critiques treating a map as complete, not maps as useless.",
      "D": "Crescent lakes are evidence of change, not a danger claim."
    }
  },
  {
    "id": "evidence-text-t1-03",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A student claims that the community garden brought neighbors together.\n\nWhich finding, if true, would most directly support this claim?",
    "choices": [
      {
        "letter": "A",
        "text": "The garden grew more vegetables than expected in its first season."
      },
      {
        "letter": "B",
        "text": "Residents who had never spoken began meeting weekly to tend shared plots."
      },
      {
        "letter": "C",
        "text": "The garden was built on a lot that had been empty for years."
      },
      {
        "letter": "D",
        "text": "The city paid for the garden's water supply."
      }
    ],
    "answer": "B",
    "explanation": "\"Brought neighbors together\" is a social claim; residents who never spoke now meeting weekly is direct evidence of connection.",
    "whyWrong": {
      "A": "High yield shows productivity, not that neighbors connected.",
      "C": "The lot's history says nothing about relationships forming.",
      "D": "Funding is about cost, not neighbors coming together."
    }
  },
  {
    "id": "evidence-text-t1-04",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A science teacher argues that hands-on experiments help students remember concepts longer.\n\nWhich finding, if true, would most directly support this argument?",
    "choices": [
      {
        "letter": "A",
        "text": "Students enjoyed the experiments more than the lectures."
      },
      {
        "letter": "B",
        "text": "On a test months later, students recalled more from lessons they had done as experiments than from lessons they only heard."
      },
      {
        "letter": "C",
        "text": "The experiments took more class time to set up."
      },
      {
        "letter": "D",
        "text": "Most students already owned the materials needed."
      }
    ],
    "answer": "B",
    "explanation": "The claim is about remembering longer; better recall months later on experiment-based lessons directly supports lasting memory.",
    "whyWrong": {
      "A": "Enjoyment is not the same as remembering longer.",
      "C": "Setup time addresses cost, not retention.",
      "D": "Owning materials is unrelated to memory."
    }
  },
  {
    "id": "evidence-text-t1-05",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A writer claims that reading aloud helps people catch errors in their own writing.\n\nWhich finding, if true, would most strongly support this claim?",
    "choices": [
      {
        "letter": "A",
        "text": "People read silently faster than they read aloud."
      },
      {
        "letter": "B",
        "text": "Writers who read their drafts aloud found more mistakes than those who reviewed silently."
      },
      {
        "letter": "C",
        "text": "Reading aloud is a common practice among poets."
      },
      {
        "letter": "D",
        "text": "Most errors in drafts are small typos."
      }
    ],
    "answer": "B",
    "explanation": "The claim links reading aloud to catching errors; finding more mistakes when reading aloud than silently is the direct comparison needed.",
    "whyWrong": {
      "A": "Reading speed does not address error-catching.",
      "C": "A practice being common does not show it works.",
      "D": "The type of errors does not show aloud reading helps."
    }
  },
  {
    "id": "evidence-text-t1-06",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A coach believes that a good night's sleep improves players' reaction times.\n\nWhich finding, if true, would most directly support this belief?",
    "choices": [
      {
        "letter": "A",
        "text": "Players said they felt more confident after sleeping well."
      },
      {
        "letter": "B",
        "text": "Players reacted faster in drills on mornings after eight hours of sleep than after five."
      },
      {
        "letter": "C",
        "text": "The team practiced reaction drills every day."
      },
      {
        "letter": "D",
        "text": "Younger players tended to sleep more than older ones."
      }
    ],
    "answer": "B",
    "explanation": "The belief connects sleep to reaction time; faster reactions after more sleep is the direct measurement.",
    "whyWrong": {
      "A": "Confidence is a feeling, not measured reaction time.",
      "C": "Daily practice is constant and does not isolate sleep.",
      "D": "Age-sleep patterns do not address reaction times."
    }
  },
  {
    "id": "evidence-text-t2-04",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "In a short story, a character named Dev insists he \"never worries about money,\" yet the narrator hints this is not quite true.\n\nWhich detail from such a story would most effectively undercut Dev's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "Dev generously pays for his friends' dinner."
      },
      {
        "letter": "B",
        "text": "Each night, Dev recalculates his bank balance before he can fall asleep."
      },
      {
        "letter": "C",
        "text": "Dev works at a bank downtown."
      },
      {
        "letter": "D",
        "text": "Dev rarely talks about his salary with coworkers."
      }
    ],
    "answer": "B",
    "explanation": "Nightly recalculating his balance before sleeping reveals private anxiety about money, contradicting his claim never to worry.",
    "whyWrong": {
      "A": "Paying for dinner could fit someone unworried; it doesn't undercut him.",
      "C": "Working at a bank is a job, not evidence of worry.",
      "D": "Staying private about salary is neutral, not revealing anxiety."
    }
  },
  {
    "id": "evidence-text-t2-05",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "A researcher hypothesizes that city parks lower stress for nearby residents.\n\nWhich finding would most strongly support the hypothesis?",
    "choices": [
      {
        "letter": "A",
        "text": "Residents near a new park reported lower stress levels than a similar group living farther away."
      },
      {
        "letter": "B",
        "text": "The new park attracted many visitors on weekends."
      },
      {
        "letter": "C",
        "text": "The park included a large playground and walking trails."
      },
      {
        "letter": "D",
        "text": "City officials praised the park at its opening."
      }
    ],
    "answer": "A",
    "explanation": "The hypothesis compares stress by proximity; lower reported stress for nearby residents versus a matched distant group is the needed evidence.",
    "whyWrong": {
      "B": "Popularity does not measure stress.",
      "C": "The park's features do not show a stress effect.",
      "D": "Officials' praise is opinion, not measured stress."
    }
  },
  {
    "id": "evidence-text-t2-06",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "An essay argues that libraries remain vital even as more books move online.\n\nWhich finding, if true, would best support this argument?",
    "choices": [
      {
        "letter": "A",
        "text": "E-book sales have risen steadily for a decade."
      },
      {
        "letter": "B",
        "text": "Library visits for services like job help and internet access have grown even as e-book use rises."
      },
      {
        "letter": "C",
        "text": "Many libraries have reduced their print collections."
      },
      {
        "letter": "D",
        "text": "Some readers prefer the feel of a physical book."
      }
    ],
    "answer": "B",
    "explanation": "The argument is that libraries stay vital despite digital shifts; growing use of non-book services shows enduring value beyond print.",
    "whyWrong": {
      "A": "Rising e-book sales could cut against libraries, not support them.",
      "C": "Smaller print collections doesn't show libraries remain vital.",
      "D": "A preference for print is a minor point, not evidence of vitality."
    }
  },
  {
    "id": "evidence-text-t3-02",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "A literary critic argues that the poem's speaker feels trapped by routine rather than comforted by it.\n\nWhich line from a poem would most directly support the critic's reading?",
    "choices": [
      {
        "letter": "A",
        "text": "\"Each dawn I greet the same warm cup of tea,\""
      },
      {
        "letter": "B",
        "text": "\"The clock's slow hands close round me like a cage,\""
      },
      {
        "letter": "C",
        "text": "\"My garden blooms in colors bright and free,\""
      },
      {
        "letter": "D",
        "text": "\"I walk the well-worn path down to the sea,\""
      }
    ],
    "answer": "B",
    "explanation": "A clock's hands closing \"like a cage\" casts routine as confinement, directly supporting the \"trapped\" reading.",
    "whyWrong": {
      "A": "A \"warm\" cup reads as comfort, the opposite view.",
      "C": "Blooming \"bright and free\" suggests freedom, not entrapment.",
      "D": "A pleasant walk to the sea is neutral or comforting."
    }
  },
  {
    "id": "evidence-text-t3-03",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "A historian claims that a medieval town's prosperity depended on its bridge, not its castle.\n\nWhich piece of evidence, if found, would most strongly support this claim?",
    "choices": [
      {
        "letter": "A",
        "text": "The castle's walls were thicker than those of neighboring towns."
      },
      {
        "letter": "B",
        "text": "Town tax records show most revenue came from tolls collected at the bridge."
      },
      {
        "letter": "C",
        "text": "The castle housed the region's ruling family for generations."
      },
      {
        "letter": "D",
        "text": "The bridge was rebuilt in stone after a flood."
      }
    ],
    "answer": "B",
    "explanation": "Prosperity is economic; tax records showing bridge tolls as the main revenue directly ties wealth to the bridge over the castle.",
    "whyWrong": {
      "A": "Wall thickness speaks to defense, not prosperity.",
      "C": "Housing rulers shows prestige, not the source of wealth.",
      "D": "A rebuild shows the bridge mattered but not that it drove prosperity."
    }
  },
  {
    "id": "evidence-text-t3-04",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "A biologist proposes that a bird species' curved beak evolved mainly for extracting insects from bark, not for cracking seeds.\n\nWhich finding would most strongly support this proposal?",
    "choices": [
      {
        "letter": "A",
        "text": "The birds are sometimes seen eating seeds that have fallen to the ground."
      },
      {
        "letter": "B",
        "text": "In the wild, the birds spend most feeding time probing bark, and their beaks show wear patterns matching that motion."
      },
      {
        "letter": "C",
        "text": "The birds' beaks are similar in color to those of seed-cracking species."
      },
      {
        "letter": "D",
        "text": "The birds build nests in the same trees where they feed."
      }
    ],
    "answer": "B",
    "explanation": "The proposal is about the beak's main function; heavy bark-probing plus matching wear patterns directly ties the beak's form to insect extraction.",
    "whyWrong": {
      "A": "Occasional seed-eating would weaken, not support, the insect claim.",
      "C": "Beak color is irrelevant to function.",
      "D": "Nesting location does not indicate feeding function."
    }
  },
  {
    "id": "evidence-quant-t1-02",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A student notes that a survey of 200 shoppers found 150 preferred paper bags, 30 preferred plastic, and 20 had no preference.\n\nWhich statement is best supported by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "A majority of shoppers surveyed preferred paper bags."
      },
      {
        "letter": "B",
        "text": "Most shoppers had no preference between bag types."
      },
      {
        "letter": "C",
        "text": "Plastic bags were preferred more than paper bags."
      },
      {
        "letter": "D",
        "text": "Exactly half of shoppers preferred plastic bags."
      }
    ],
    "answer": "A",
    "explanation": "150 of 200 is 75%, a clear majority preferring paper—directly supported by the numbers.",
    "whyWrong": {
      "B": "Only 20 of 200 had no preference.",
      "C": "Plastic (30) trailed paper (150) badly.",
      "D": "Plastic was 30 of 200, not half."
    }
  },
  {
    "id": "evidence-quant-t1-03",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A report states that a town's library lent 4,000 books in 2010 and 10,000 books in 2020.\n\nWhich statement is best supported by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "Book lending at the library more than doubled from 2010 to 2020."
      },
      {
        "letter": "B",
        "text": "The library lost readers over the decade."
      },
      {
        "letter": "C",
        "text": "Lending stayed about the same across the decade."
      },
      {
        "letter": "D",
        "text": "The library lent fewer than 4,000 books in 2020."
      }
    ],
    "answer": "A",
    "explanation": "Going from 4,000 to 10,000 is an increase of 6,000, more than double the 2010 figure.",
    "whyWrong": {
      "B": "Lending rose, suggesting more use, not fewer readers.",
      "C": "The figures changed sharply, not staying the same.",
      "D": "2020 lending (10,000) was far above 4,000."
    }
  },
  {
    "id": "evidence-quant-t1-04",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A chart shows a plant grew 2 cm in week 1, 5 cm in week 2, and 9 cm in week 3.\n\nWhich statement is best supported by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "The plant's weekly growth increased each week."
      },
      {
        "letter": "B",
        "text": "The plant grew the same amount every week."
      },
      {
        "letter": "C",
        "text": "The plant grew fastest in week 1."
      },
      {
        "letter": "D",
        "text": "The plant stopped growing after week 2."
      }
    ],
    "answer": "A",
    "explanation": "Weekly growth rose from 2 to 5 to 9 cm, so growth increased each week.",
    "whyWrong": {
      "B": "The amounts differ each week.",
      "C": "Week 1 (2 cm) was the slowest, not fastest.",
      "D": "Week 3 shows continued, larger growth."
    }
  },
  {
    "id": "evidence-quant-t1-05",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A student summarizes a table: of 500 trees planted, 450 survived their first year in the shaded plot, while 300 of 500 survived in the sunny plot.\n\nWhich statement is best supported by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "A higher proportion of trees survived in the shaded plot than in the sunny plot."
      },
      {
        "letter": "B",
        "text": "More trees were planted in the shaded plot."
      },
      {
        "letter": "C",
        "text": "Sunlight had no effect on survival."
      },
      {
        "letter": "D",
        "text": "All trees in the sunny plot died."
      }
    ],
    "answer": "A",
    "explanation": "450/500 (90%) in shade exceeds 300/500 (60%) in sun, so a higher proportion survived in shade.",
    "whyWrong": {
      "B": "Both plots had 500 trees planted.",
      "C": "The survival gap suggests sunlight did matter.",
      "D": "300 of 500 sunny-plot trees survived."
    }
  },
  {
    "id": "evidence-quant-t1-06",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A poll of 80 students found 48 walk to school, 24 take the bus, and 8 are driven.\n\nWhich statement is best supported by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "More students walk to school than use the other two methods combined."
      },
      {
        "letter": "B",
        "text": "Most students take the bus."
      },
      {
        "letter": "C",
        "text": "Being driven is the most common method."
      },
      {
        "letter": "D",
        "text": "Walking and busing are equally common."
      }
    ],
    "answer": "A",
    "explanation": "Walkers (48) exceed bus riders plus driven students (24 + 8 = 32), so walking beats the other two combined.",
    "whyWrong": {
      "B": "The bus (24) is second, not the majority.",
      "C": "Being driven (8) is least common.",
      "D": "Walking (48) far exceeds busing (24)."
    }
  },
  {
    "id": "evidence-quant-t2-04",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A researcher reports that a website's average visit lasted 3 minutes, but the median visit lasted only 40 seconds.\n\nWhich conclusion is best supported by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "Every visitor stayed about 3 minutes."
      },
      {
        "letter": "B",
        "text": "A small number of very long visits pulled the average well above the typical visit."
      },
      {
        "letter": "C",
        "text": "Most visitors stayed longer than 3 minutes."
      },
      {
        "letter": "D",
        "text": "The website had very few visitors."
      }
    ],
    "answer": "B",
    "explanation": "A mean far above the median signals that a few long visits stretched the average while most visits (the median) were short.",
    "whyWrong": {
      "A": "The median shows most visits were far shorter than 3 minutes.",
      "C": "The median of 40 seconds means most stayed under a minute.",
      "D": "The data say nothing about total visitor count."
    }
  },
  {
    "id": "evidence-quant-t2-05",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A study finds that 60% of people who exercise in the morning stick with their routine after six months, compared with 35% of evening exercisers.\n\nWhich statement is best supported by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "Morning exercisers were more likely to maintain their routine than evening exercisers."
      },
      {
        "letter": "B",
        "text": "Morning exercise burns more calories than evening exercise."
      },
      {
        "letter": "C",
        "text": "Most evening exercisers quit within a week."
      },
      {
        "letter": "D",
        "text": "Exercising in the morning is the only way to stay consistent."
      }
    ],
    "answer": "A",
    "explanation": "A 60% retention rate versus 35% directly shows morning exercisers maintained routines at a higher rate.",
    "whyWrong": {
      "B": "Calorie burn is not measured here.",
      "C": "The data cover six months, not a week, and 35% still stuck with it.",
      "D": "35% of evening exercisers succeeded, so morning is not the \"only\" way."
    }
  },
  {
    "id": "evidence-quant-t2-06",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A table shows that a store's online sales rose from 20% of total sales in 2018 to 55% in 2023, while in-store sales fell correspondingly.\n\nWhich statement is best supported by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "Online sales overtook in-store sales as the larger share by 2023."
      },
      {
        "letter": "B",
        "text": "The store's total revenue fell over the period."
      },
      {
        "letter": "C",
        "text": "In-store sales disappeared entirely by 2023."
      },
      {
        "letter": "D",
        "text": "Online and in-store sales were equal in 2018."
      }
    ],
    "answer": "A",
    "explanation": "Rising from 20% to 55% means online passed the halfway mark, making it the larger share by 2023.",
    "whyWrong": {
      "B": "The data give shares, not total revenue.",
      "C": "In-store fell to 45%, not to zero.",
      "D": "In 2018 online was 20%, so they were not equal."
    }
  },
  {
    "id": "evidence-quant-t3-02",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A student writes: \"The data show that as study group size increased from 2 to 6 members, average quiz scores rose, but past 6 members scores fell.\" A table lists average scores of 78 (2 members), 85 (4), 90 (6), 88 (8), and 82 (10).\n\nWhich choice best completes the student's claim with accurate data?",
    "choices": [
      {
        "letter": "A",
        "text": "scores peaked at groups of 6 members before declining."
      },
      {
        "letter": "B",
        "text": "scores rose steadily as group size grew to 10."
      },
      {
        "letter": "C",
        "text": "the largest groups produced the highest scores."
      },
      {
        "letter": "D",
        "text": "group size had no clear effect on scores."
      }
    ],
    "answer": "A",
    "explanation": "Scores climb to 90 at 6 members, then drop to 88 and 82—so the peak is at 6, matching the student's described pattern.",
    "whyWrong": {
      "B": "Scores fell after 6 members, so they did not rise steadily to 10.",
      "C": "The 10-member group scored lowest of the larger groups (82).",
      "D": "There is a clear rise-then-fall pattern."
    }
  },
  {
    "id": "evidence-quant-t3-03",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A report notes that a vaccine reduced infection risk by 80% in adults under 50 but by only 40% in adults over 70.\n\nWhich conclusion is best supported, and appropriately limited, by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "The vaccine offered stronger protection in younger adults than in the oldest group studied."
      },
      {
        "letter": "B",
        "text": "The vaccine does not work at all in adults over 70."
      },
      {
        "letter": "C",
        "text": "Adults over 70 should not receive the vaccine."
      },
      {
        "letter": "D",
        "text": "The vaccine eliminates all infection risk in adults under 50."
      }
    ],
    "answer": "A",
    "explanation": "An 80% versus 40% reduction supports stronger protection in the younger group, while the 40% figure shows real (if smaller) benefit for older adults.",
    "whyWrong": {
      "B": "A 40% reduction is meaningful, not \"does not work at all.\"",
      "C": "The data do not support a recommendation to withhold the vaccine.",
      "D": "80% reduction is not the same as eliminating all risk."
    }
  },
  {
    "id": "evidence-quant-t3-04",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A study of two teaching methods reports that Method A raised test scores by an average of 12 points with a wide range of results, while Method B raised scores by 9 points with very consistent results.\n\nWhich statement is best supported by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "Method A produced a larger average gain, but Method B produced more consistent gains."
      },
      {
        "letter": "B",
        "text": "Method B is better than Method A in every respect."
      },
      {
        "letter": "C",
        "text": "Method A worked equally well for all students."
      },
      {
        "letter": "D",
        "text": "Neither method improved test scores."
      }
    ],
    "answer": "A",
    "explanation": "The data show A's higher average (12 vs. 9) alongside B's greater consistency—both facts must be captured.",
    "whyWrong": {
      "B": "A had the larger average, so B is not better in every respect.",
      "C": "A \"wide range\" means results varied, not equal for all.",
      "D": "Both methods raised scores."
    }
  },
  {
    "id": "evidence-text-t3-05",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "A researcher argues that a songbird's complex melodies serve mainly to defend territory rather than to attract mates.\n\nWhich finding, if true, would most strongly support this argument?",
    "choices": [
      {
        "letter": "A",
        "text": "Males sing more elaborate songs during the breeding season."
      },
      {
        "letter": "B",
        "text": "Males sing most intensely at territory borders and fall silent once rival males withdraw."
      },
      {
        "letter": "C",
        "text": "Females can distinguish the songs of different males."
      },
      {
        "letter": "D",
        "text": "Song complexity varies from one region to another."
      }
    ],
    "answer": "B",
    "explanation": "Territorial defense predicts singing aimed at rivals at boundaries that stops when rivals leave—exactly what this finding shows.",
    "whyWrong": {
      "A": "Breeding-season singing fits the mate-attraction view the researcher opposes.",
      "C": "Female discrimination supports mate attraction, not territory defense.",
      "D": "Regional variation does not indicate the song's function."
    }
  },
  {
    "id": "evidence-text-t3-06",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "A scholar contends that a poet's late works reflect a hard-won serenity rather than the restlessness of her youth.\n\nWhich line from a late poem would most directly support the scholar's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "\"I hurl my questions at the silent sky,\""
      },
      {
        "letter": "B",
        "text": "\"At last I let the river take its course,\""
      },
      {
        "letter": "C",
        "text": "\"My heart still races at each closing door,\""
      },
      {
        "letter": "D",
        "text": "\"I pace the floor until the candle dies,\""
      }
    ],
    "answer": "B",
    "explanation": "Letting \"the river take its course\" conveys acceptance and calm—the serenity the scholar describes.",
    "whyWrong": {
      "A": "Hurling questions suggests restlessness, the opposite claim.",
      "C": "A racing heart signals agitation, not serenity.",
      "D": "Pacing until the candle dies conveys unrest."
    }
  },
  {
    "id": "evidence-quant-t3-05",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A student writes: \"The survey shows that satisfaction rose with wait times up to a point, then fell.\" A table lists satisfaction scores of 60 (0-min wait), 75 (5-min), 82 (10-min), 70 (20-min), and 55 (30-min).\n\nWhich choice best completes the student's claim with accurate data?",
    "choices": [
      {
        "letter": "A",
        "text": "satisfaction peaked around a 10-minute wait before declining."
      },
      {
        "letter": "B",
        "text": "satisfaction fell steadily as wait times increased."
      },
      {
        "letter": "C",
        "text": "the longest waits produced the highest satisfaction."
      },
      {
        "letter": "D",
        "text": "wait time had no effect on satisfaction."
      }
    ],
    "answer": "A",
    "explanation": "Scores climb to 82 at 10 minutes, then drop to 70 and 55—so satisfaction peaks near 10 minutes, matching the described pattern.",
    "whyWrong": {
      "B": "Scores first rose (60→75→82), so the decline was not steady throughout.",
      "C": "The 30-minute wait scored lowest (55).",
      "D": "There is a clear rise-then-fall relationship."
    }
  },
  {
    "id": "evidence-quant-t3-06",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A report finds that a tutoring program raised average math scores by 15 points for students who attended at least 10 sessions but by only 3 points for those who attended fewer.\n\nWhich conclusion is best supported, and appropriately limited, by these data?",
    "choices": [
      {
        "letter": "A",
        "text": "The program's benefit was much larger for students who attended more sessions."
      },
      {
        "letter": "B",
        "text": "The program had no effect on any students."
      },
      {
        "letter": "C",
        "text": "Attending fewer than 10 sessions lowered students' scores."
      },
      {
        "letter": "D",
        "text": "Every student who attended 10 sessions gained exactly 15 points."
      }
    ],
    "answer": "A",
    "explanation": "A 15-point gain with high attendance versus 3 points with low attendance supports a larger benefit for frequent attendees, while both groups still improved.",
    "whyWrong": {
      "B": "Both groups gained points, so there was some effect.",
      "C": "A 3-point gain is still an increase, not a decline.",
      "D": "15 points is an average, not a guaranteed individual result."
    }
  },
  {
    "id": "inferences-t1-02",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "Antarctic fish survive in water cold enough to freeze most animals' blood. Their bodies produce special proteins that latch onto tiny ice crystals and stop them from growing.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "these proteins keep the fish from freezing solid."
      },
      {
        "letter": "B",
        "text": "these fish prefer warmer water than other species."
      },
      {
        "letter": "C",
        "text": "the fish cannot survive in cold water."
      },
      {
        "letter": "D",
        "text": "ice crystals never form near these fish."
      }
    ],
    "answer": "A",
    "explanation": "If the proteins stop ice crystals from growing, they most logically prevent the fish from freezing solid.",
    "whyWrong": {
      "B": "The passage says they thrive in very cold water.",
      "C": "They clearly do survive the cold.",
      "D": "Crystals do form; the proteins stop them from growing."
    }
  },
  {
    "id": "inferences-t1-03",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "The bookstore kept its lights on and doors open an hour later than any shop nearby. Students filled its armchairs each evening, reading long after other stores had closed.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the store's late hours made it a popular evening spot for students."
      },
      {
        "letter": "B",
        "text": "the store sold more coffee than books."
      },
      {
        "letter": "C",
        "text": "students disliked reading in the store."
      },
      {
        "letter": "D",
        "text": "the store closed earlier than its neighbors."
      }
    ],
    "answer": "A",
    "explanation": "Staying open latest and drawing students who read into the evening most logically means the late hours made it a popular student spot.",
    "whyWrong": {
      "B": "Coffee sales are never mentioned.",
      "C": "Students filling the chairs to read shows they liked it.",
      "D": "It stayed open later, not earlier, than neighbors."
    }
  },
  {
    "id": "inferences-t1-04",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "After the town installed streetlights along the river path, evening joggers who had once avoided the route began using it regularly.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the added lighting made joggers feel safer on the path."
      },
      {
        "letter": "B",
        "text": "joggers preferred running in the dark."
      },
      {
        "letter": "C",
        "text": "the path was closed at night."
      },
      {
        "letter": "D",
        "text": "streetlights discouraged people from exercising."
      }
    ],
    "answer": "A",
    "explanation": "Joggers returning to a once-avoided route after lights were added most logically means the lighting made them feel safer.",
    "whyWrong": {
      "B": "They had avoided the dark route before.",
      "C": "They now use it in the evening, so it is open.",
      "D": "The lights increased use, not discouraged it."
    }
  },
  {
    "id": "inferences-t1-05",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "The recipe had been in the family for generations, but no one had ever written it down. When the grandmother fell ill, her children realized they could not recreate her famous stew.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the recipe existed only in the grandmother's memory."
      },
      {
        "letter": "B",
        "text": "the stew was easy for anyone to make."
      },
      {
        "letter": "C",
        "text": "the family disliked the stew."
      },
      {
        "letter": "D",
        "text": "the recipe had been published in a cookbook."
      }
    ],
    "answer": "A",
    "explanation": "If no one wrote it down and only she could make it, the recipe most logically lived only in her memory.",
    "whyWrong": {
      "B": "They could not recreate it, so it was not easy for them.",
      "C": "It was \"famous,\" implying it was liked.",
      "D": "It was never written down, so not published."
    }
  },
  {
    "id": "inferences-t1-06",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "The desert plant's roots spread wide but shallow, just beneath the surface. When rare rains fall, the plant can soak up water across a large area before the sun dries the ground.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the shallow, wide roots help the plant capture scarce rainfall quickly."
      },
      {
        "letter": "B",
        "text": "the plant grows best in constantly wet soil."
      },
      {
        "letter": "C",
        "text": "the plant's roots reach deep underground water."
      },
      {
        "letter": "D",
        "text": "rain harms the desert plant."
      }
    ],
    "answer": "A",
    "explanation": "Wide, shallow roots that soak up water over a large area before it dries most logically help the plant capture scarce rain fast.",
    "whyWrong": {
      "B": "It is adapted to a dry desert, not constant wetness.",
      "C": "The roots are shallow, not deep.",
      "D": "The plant uses the rain, so rain helps it."
    }
  },
  {
    "id": "inferences-t2-04",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "Researchers gave two groups the same puzzle. One group was told the task measured intelligence; the other was told it was just a game. The \"game\" group solved more puzzles and reported enjoying the task more.\n\nWhich choice most logically completes the text based on the results?",
    "choices": [
      {
        "letter": "A",
        "text": "framing a task as low-stakes may improve both performance and enjoyment."
      },
      {
        "letter": "B",
        "text": "intelligence has no relationship to puzzle-solving."
      },
      {
        "letter": "C",
        "text": "the two groups received different puzzles."
      },
      {
        "letter": "D",
        "text": "people always perform worse when relaxed."
      }
    ],
    "answer": "A",
    "explanation": "The only difference was the framing, and the \"just a game\" framing led to better, more enjoyable performance—so low-stakes framing may help both.",
    "whyWrong": {
      "B": "The study is about framing, not the intelligence-puzzle link.",
      "C": "Both groups got the same puzzle.",
      "D": "The relaxed \"game\" group did better, contradicting this."
    }
  },
  {
    "id": "inferences-t2-05",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "A city replaced its oldest water pipes, which were made of lead. In the following year, the amount of lead detected in children's blood across those neighborhoods dropped noticeably.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the old lead pipes had been a source of the lead in the children's blood."
      },
      {
        "letter": "B",
        "text": "lead is harmless to children."
      },
      {
        "letter": "C",
        "text": "the new pipes increased lead exposure."
      },
      {
        "letter": "D",
        "text": "the children moved to different neighborhoods."
      }
    ],
    "answer": "A",
    "explanation": "Replacing lead pipes followed by a drop in children's blood lead most logically indicates the pipes were a source of that lead.",
    "whyWrong": {
      "B": "The concern over blood lead implies it is harmful.",
      "C": "Levels dropped after the new pipes, not rose.",
      "D": "Nothing suggests the children relocated."
    }
  },
  {
    "id": "inferences-t2-06",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The novelist wrote her first drafts by hand, filling notebooks with crossed-out lines and margins crowded with alternatives. Only when a chapter felt finished did she type it out.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "she used handwriting as a stage for reworking her ideas before finalizing them."
      },
      {
        "letter": "B",
        "text": "she never revised her writing."
      },
      {
        "letter": "C",
        "text": "she preferred typing to handwriting for drafting."
      },
      {
        "letter": "D",
        "text": "she typed her drafts before writing them by hand."
      }
    ],
    "answer": "A",
    "explanation": "Crossed-out lines and margin alternatives in handwritten drafts, typed only when finished, most logically show handwriting was her reworking stage.",
    "whyWrong": {
      "B": "The crossings-out show heavy revision.",
      "C": "She drafted by hand and typed only when done.",
      "D": "The order is reversed—handwriting came first."
    }
  },
  {
    "id": "inferences-t3-03",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "In one experiment, ravens hid food while a second raven watched, then later moved the food when the observer was gone. When no raven had watched, they left the food in place.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the ravens seemed to adjust their behavior based on whether they had been observed."
      },
      {
        "letter": "B",
        "text": "ravens cannot remember where they hide food."
      },
      {
        "letter": "C",
        "text": "ravens hide food only when alone."
      },
      {
        "letter": "D",
        "text": "the observing ravens always stole the food."
      }
    ],
    "answer": "A",
    "explanation": "Moving food only after being watched, but not otherwise, most logically suggests ravens adjusted their behavior to being observed.",
    "whyWrong": {
      "B": "Returning to move the food shows they remembered its location.",
      "C": "They hid food even while watched, then relocated it.",
      "D": "The passage does not say the observer stole anything."
    }
  },
  {
    "id": "inferences-t3-04",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "A study of ancient pottery found that vessels from a coastal town contained clay from mountains far inland, while inland towns used only local clay. No roads connected the regions at that time.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the coastal town likely obtained inland clay through some form of trade or exchange."
      },
      {
        "letter": "B",
        "text": "the coastal town had no access to any clay."
      },
      {
        "letter": "C",
        "text": "inland towns imported clay from the coast."
      },
      {
        "letter": "D",
        "text": "the two regions never had any contact."
      }
    ],
    "answer": "A",
    "explanation": "Coastal vessels made of distant inland clay, without roads, most logically imply the clay reached the coast through trade or exchange.",
    "whyWrong": {
      "B": "They made pottery, so they had clay.",
      "C": "Inland towns used only local clay.",
      "D": "The shared clay implies some contact, not none."
    }
  },
  {
    "id": "inferences-t3-05",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "Economists noted that when a factory automated its assembly line, it employed fewer assembly workers but hired more technicians to maintain the machines. Total employment at the plant barely changed.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "automation shifted the kinds of jobs at the plant more than it reduced their number."
      },
      {
        "letter": "B",
        "text": "automation eliminated all jobs at the plant."
      },
      {
        "letter": "C",
        "text": "the factory hired no new workers of any kind."
      },
      {
        "letter": "D",
        "text": "automation had no effect on the workforce."
      }
    ],
    "answer": "A",
    "explanation": "Fewer assemblers but more technicians, with total employment steady, most logically means automation changed job types rather than cutting headcount.",
    "whyWrong": {
      "B": "Total employment barely changed, so jobs were not eliminated.",
      "C": "It hired more technicians.",
      "D": "The mix of jobs shifted, so there was an effect."
    }
  },
  {
    "id": "inferences-t3-06",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "Readers of a translated novel praised its vivid rhythm, unaware that the original prose was famously plain. Critics who knew both versions credited the translator's bold choices for the effect.\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the translation's admired style may owe more to the translator than to the original author."
      },
      {
        "letter": "B",
        "text": "the original novel was already known for vivid rhythm."
      },
      {
        "letter": "C",
        "text": "translators must copy the original word for word."
      },
      {
        "letter": "D",
        "text": "readers disliked the translated novel."
      }
    ],
    "answer": "A",
    "explanation": "If the plain original gained vivid rhythm that critics credit to the translator, the admired style most logically comes from the translator.",
    "whyWrong": {
      "B": "The original was \"famously plain,\" not vivid.",
      "C": "The translator's \"bold choices\" show departure, not copying.",
      "D": "Readers praised it."
    }
  },
  {
    "id": "central-ideas-t1-07",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is from an article about urban gardens.\n\nRooftop gardens are spreading across crowded cities, and their appeal goes beyond fresh vegetables. A layer of soil and plants shades the roof beneath it, so buildings with green roofs stay cooler in summer and lose less heat in winter. Some building owners report that the plants have noticeably lowered their energy bills.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Rooftop gardens are difficult and expensive to maintain."
      },
      {
        "letter": "B",
        "text": "Rooftop gardens offer benefits beyond food, including reduced energy use."
      },
      {
        "letter": "C",
        "text": "Most city residents prefer fresh vegetables to canned ones."
      },
      {
        "letter": "D",
        "text": "Green roofs are found only on tall office buildings."
      }
    ],
    "answer": "B",
    "explanation": "The passage says the appeal \"goes beyond fresh vegetables\" and then describes cooling, insulation, and lower energy bills. B captures that broader benefit.",
    "whyWrong": {
      "A": "The text never mentions cost or difficulty of upkeep.",
      "C": "Vegetable preference is not the subject; energy and climate benefits are.",
      "D": "No claim is made about which buildings have green roofs."
    }
  },
  {
    "id": "central-ideas-t1-08",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is from a profile of a musician.\n\nBefore Ravi Shah filled concert halls, he spent a decade playing in small clubs where the audience often numbered fewer than twenty. He has said those years taught him to hold a listener's attention without relying on a big stage or a light show—just a voice, an instrument, and a room. That skill, he insists, is why his large shows still feel intimate.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Shah dislikes performing in large concert halls."
      },
      {
        "letter": "B",
        "text": "Small clubs pay musicians poorly."
      },
      {
        "letter": "C",
        "text": "Shah's years in small venues gave him a skill that still shapes his big performances."
      },
      {
        "letter": "D",
        "text": "Light shows are essential to a successful concert."
      }
    ],
    "answer": "C",
    "explanation": "The text connects Shah's decade in small clubs to a lasting skill that keeps his large shows intimate. C states that link.",
    "whyWrong": {
      "A": "He performs in large halls; nothing says he dislikes them.",
      "B": "Pay is never discussed.",
      "D": "He credits holding attention without a light show, the opposite of D."
    }
  },
  {
    "id": "central-ideas-t1-09",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is from a science article about sleep.\n\nWhy do we yawn? For years the popular answer was that yawning pulls in extra oxygen. But recent studies find that oxygen levels barely change when people yawn. A newer idea is that a deep yawn cools the brain slightly, much as a fan cools a warm engine, helping us stay alert when we are drowsy.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Yawning is a sign of poor health."
      },
      {
        "letter": "B",
        "text": "The oxygen explanation for yawning has given way to a brain-cooling explanation."
      },
      {
        "letter": "C",
        "text": "People yawn most often in the morning."
      },
      {
        "letter": "D",
        "text": "Fans are the best way to stay alert."
      }
    ],
    "answer": "B",
    "explanation": "The passage sets up the old oxygen theory, undercuts it, and offers a newer cooling theory. B tracks that shift.",
    "whyWrong": {
      "A": "Health is never mentioned.",
      "C": "Timing of yawns is not discussed.",
      "D": "The fan is a comparison, not a recommendation."
    }
  },
  {
    "id": "central-ideas-t1-10",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is adapted from a short story.\n\nMara had promised herself she would not look back at the house. She kept her eyes on the road, on the mailbox, on the bend ahead—anywhere but the porch where her grandmother stood waving. Only when the car turned the corner and the house slipped out of sight did she let herself cry.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Mara is angry at her grandmother."
      },
      {
        "letter": "B",
        "text": "Mara struggles to hold back the emotion of leaving until she no longer has to."
      },
      {
        "letter": "C",
        "text": "Mara is lost and cannot find the right road."
      },
      {
        "letter": "D",
        "text": "Mara dislikes long car rides."
      }
    ],
    "answer": "B",
    "explanation": "Mara forces her gaze away and holds back tears until the house disappears, then finally cries. B captures her restrained grief at leaving.",
    "whyWrong": {
      "A": "Nothing suggests anger; the grandmother waves fondly.",
      "C": "She watches the road deliberately, not because she is lost.",
      "D": "The car ride itself is not the source of feeling."
    }
  },
  {
    "id": "central-ideas-t1-11",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is from an article about language.\n\nEmoji began as a small set of simple icons on Japanese phones in the late 1990s. Today there are thousands, and researchers who study communication argue they now do real linguistic work: a single smiling face can soften a blunt message, and a thumbs-up can close a conversation as clearly as the word \"okay.\"\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Emoji have grown from simple icons into tools that carry real communicative meaning."
      },
      {
        "letter": "B",
        "text": "Emoji were invented in the United States."
      },
      {
        "letter": "C",
        "text": "People send too many text messages."
      },
      {
        "letter": "D",
        "text": "The word \"okay\" is disappearing from English."
      }
    ],
    "answer": "A",
    "explanation": "The text traces emoji from a few icons to thousands that now perform linguistic functions. A states that development.",
    "whyWrong": {
      "B": "The text says emoji began in Japan.",
      "C": "Message volume is never criticized.",
      "D": "\"Okay\" is used as a comparison, not described as vanishing."
    }
  },
  {
    "id": "central-ideas-t1-12",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "text": "The following text is from a nature essay.\n\nThe tide pool looked still, but it was anything but empty. Under the film of water, hermit crabs shuffled between borrowed shells, anemones folded and unfolded their soft arms, and tiny fish darted where a moment before there had seemed to be only stone. Patience, not a net, was what the pool rewarded.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Tide pools are dangerous places for small children."
      },
      {
        "letter": "B",
        "text": "A tide pool that appears empty is in fact full of quiet activity that patient watching reveals."
      },
      {
        "letter": "C",
        "text": "Hermit crabs are the most common tide-pool animal."
      },
      {
        "letter": "D",
        "text": "Nets are the best tool for studying tide pools."
      }
    ],
    "answer": "B",
    "explanation": "The passage contrasts the pool's still surface with the hidden life patience reveals. B captures that.",
    "whyWrong": {
      "A": "Danger to children is never mentioned.",
      "C": "No animal is ranked as most common.",
      "D": "The text says patience, not a net, is rewarded."
    }
  },
  {
    "id": "central-ideas-t2-07",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from an article about scientific instruments.\n\nWhen the first telescopes turned toward the night sky, they did more than magnify distant points of light. By revealing moons around Jupiter and craters on the Moon, they showed that the heavens were not the perfect, unchanging realm that tradition had described. In that sense the telescope was not only a tool for seeing farther but an argument for looking again at what everyone thought they already knew.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Early telescopes were too weak to reveal anything useful."
      },
      {
        "letter": "B",
        "text": "The telescope both extended human sight and challenged long-held beliefs about the sky."
      },
      {
        "letter": "C",
        "text": "Jupiter has more moons than any other planet."
      },
      {
        "letter": "D",
        "text": "Astronomers of the past refused to use telescopes."
      }
    ],
    "answer": "B",
    "explanation": "The passage says the telescope did \"more than magnify\"—it undercut the idea of a perfect, unchanging sky. B holds both the seeing and the challenging.",
    "whyWrong": {
      "A": "The text credits telescopes with real discoveries.",
      "C": "Jupiter's rank among planets is not claimed.",
      "D": "No refusal to use telescopes is described."
    }
  },
  {
    "id": "central-ideas-t2-08",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from a history of food.\n\nSalt seems ordinary now, but for most of human history it was a strategic resource. Because it could preserve meat and fish through long winters and long voyages, whole trade routes, taxes, and even wars grew up around who controlled it. The mineral we shake onto fries without a thought once helped determine which cities thrived and which went hungry.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Salt is unhealthy and should be eaten in moderation."
      },
      {
        "letter": "B",
        "text": "Modern cooks use far less salt than earlier cooks did."
      },
      {
        "letter": "C",
        "text": "Salt's power to preserve food once made it a resource that shaped trade and politics."
      },
      {
        "letter": "D",
        "text": "Fries taste better with salt than without it."
      }
    ],
    "answer": "C",
    "explanation": "The text explains that salt's preservative power drove trade routes, taxes, and wars. C names that historical importance.",
    "whyWrong": {
      "A": "Health effects are never discussed.",
      "B": "The text does not compare quantities used across eras.",
      "D": "The fries are an aside, not the main point."
    }
  },
  {
    "id": "central-ideas-t2-09",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from an article about animal behavior.\n\nBiologists once assumed that only humans and a few primates could recognize themselves in a mirror. But when researchers marked a cleaner wrasse—a small reef fish—with a spot it could see only in reflection, the fish repeatedly tried to scrape the spot off its own body. The result does not settle what the fish understands, but it does force scientists to ask whether self-recognition is as rare as they believed.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Cleaner wrasses are the most intelligent fish in the ocean."
      },
      {
        "letter": "B",
        "text": "A fish's response to a mirror test challenges the assumption that self-recognition is rare."
      },
      {
        "letter": "C",
        "text": "Mirror tests are useless for studying animals."
      },
      {
        "letter": "D",
        "text": "Only primates can pass any behavioral test."
      }
    ],
    "answer": "B",
    "explanation": "The wrasse's behavior 'forces scientists to ask whether self-recognition is as rare as they believed.' B captures that reframing.",
    "whyWrong": {
      "A": "The text avoids ranking the fish's intelligence.",
      "C": "The mirror test yielded a meaningful result here.",
      "D": "The passage undercuts, rather than affirms, primate-only claims."
    }
  },
  {
    "id": "central-ideas-t2-10",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is adapted from a novel set in a coastal town.\n\nThe lighthouse had been dark for thirty years, replaced by a small automated beacon that needed no keeper and told no stories. Still, on clear evenings the old men gathered at its base as if it might speak again. They did not miss the light so much as the reason it had once given them to climb the hill together.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The men gather at the lighthouse less for its light than for the shared purpose it once gave them."
      },
      {
        "letter": "B",
        "text": "The automated beacon is more reliable than the old lighthouse."
      },
      {
        "letter": "C",
        "text": "The town wants to tear down the lighthouse."
      },
      {
        "letter": "D",
        "text": "The old men are afraid of the dark."
      }
    ],
    "answer": "A",
    "explanation": "The passage says the men 'did not miss the light so much as the reason it had once given them to climb the hill together.' A states that.",
    "whyWrong": {
      "B": "Reliability is mentioned only in passing, not the point.",
      "C": "No plan to demolish it appears.",
      "D": "Their gathering is about connection, not fear."
    }
  },
  {
    "id": "central-ideas-t2-11",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from an article about mapmaking.\n\nA map is often praised for what it shows, but its power lies equally in what it leaves out. A subway map, for instance, distorts real distances and ignores streets entirely, yet precisely because it discards that information it lets a rider grasp the whole system at a glance. Usefulness, in cartography, can depend as much on careful omission as on accurate inclusion.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Subway maps are drawn to exact scale."
      },
      {
        "letter": "B",
        "text": "A map's usefulness can depend as much on what it omits as on what it includes."
      },
      {
        "letter": "C",
        "text": "Riders prefer maps that show every street."
      },
      {
        "letter": "D",
        "text": "Cartography is a dying profession."
      }
    ],
    "answer": "B",
    "explanation": "The passage argues that omission—not just accuracy—makes maps like the subway map useful. B states that thesis.",
    "whyWrong": {
      "A": "The text says the subway map distorts distances.",
      "C": "It credits the map for leaving streets out, not showing them all.",
      "D": "The profession's future is never mentioned."
    }
  },
  {
    "id": "central-ideas-t2-12",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from an essay about memory.\n\nWe tend to picture memory as a recording that plays back the past exactly. Research suggests something stranger: each time we recall an event, we subtly rebuild it, and small changes can slip in unnoticed. A memory revisited often is not necessarily the most accurate—it may simply be the one we have rewritten the most.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "People with good memories never forget anything."
      },
      {
        "letter": "B",
        "text": "Frequently recalled memories are always the most accurate."
      },
      {
        "letter": "C",
        "text": "Remembering is an act of rebuilding, so recall can quietly alter a memory."
      },
      {
        "letter": "D",
        "text": "Memories are stored like unchangeable video recordings."
      }
    ],
    "answer": "C",
    "explanation": "The passage contrasts the 'recording' image with research showing recall rebuilds and can alter memories. C states that.",
    "whyWrong": {
      "A": "The text is about accuracy of recall, not forgetting nothing.",
      "B": "The passage says the opposite—frequent recall may mean more rewriting.",
      "D": "That is the mistaken view the text corrects."
    }
  },
  {
    "id": "central-ideas-t3-07",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is from a study of scientific collaboration.\n\nThe romantic image of the lone genius endures, but the record of modern discovery rarely supports it. Landmark papers increasingly carry dozens of authors, and breakthroughs tend to emerge where instruments, data, and specialists converge. This does not diminish individual brilliance; it relocates it, casting the exceptional scientist less as a solitary mind than as the person who can knit many minds into a working whole.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Individual talent no longer matters in science."
      },
      {
        "letter": "B",
        "text": "Modern discovery reframes scientific genius as the ability to coordinate collaborative work rather than to work alone."
      },
      {
        "letter": "C",
        "text": "Papers with many authors contain more errors."
      },
      {
        "letter": "D",
        "text": "The lone genius remains the most accurate model of discovery."
      }
    ],
    "answer": "B",
    "explanation": "The text says brilliance is not diminished but 'relocated'—the exceptional scientist knits many minds together. B captures this reframing.",
    "whyWrong": {
      "A": "The text explicitly says individual brilliance is not diminished.",
      "C": "Error rates are never discussed.",
      "D": "The passage argues against the lone-genius model."
    }
  },
  {
    "id": "central-ideas-t3-08",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is from a work of literary criticism.\n\nCritics have long treated the novel's abrupt final chapter as a flaw, a story cut off before its natural close. Yet the abruptness may be the point. By refusing the tidy resolution readers expect, the ending forces us to sit with the same uncertainty the characters face, making the discomfort of the last page an extension of the book's argument rather than a failure of craft.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The novel's ending is a clear mistake by an inexperienced writer."
      },
      {
        "letter": "B",
        "text": "Readers should skip the final chapter of the novel."
      },
      {
        "letter": "C",
        "text": "The novel's abrupt ending, often seen as a flaw, may be a deliberate device that serves the book's larger purpose."
      },
      {
        "letter": "D",
        "text": "All novels should end with a tidy resolution."
      }
    ],
    "answer": "C",
    "explanation": "The critic reinterprets the 'flaw' as intentional, making the discomfort part of the book's argument. C states that.",
    "whyWrong": {
      "A": "The text argues against calling it a mistake.",
      "B": "No such advice is given; the ending is defended.",
      "D": "The passage praises the refusal of a tidy resolution."
    }
  },
  {
    "id": "central-ideas-t3-09",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is from an essay on economics and cities.\n\nPlanners often measure a neighborhood's health by its busyness—foot traffic, open shops, full cafés. But activity and vitality are not the same. A district can bustle with visitors while the residents who give it continuity are quietly priced out, so that the very liveliness taken as a sign of success masks the erosion of the community that produced it.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Busy neighborhoods are always the healthiest ones."
      },
      {
        "letter": "B",
        "text": "A neighborhood's visible busyness can conceal the displacement of the community that sustained it."
      },
      {
        "letter": "C",
        "text": "Cafés and shops harm local residents."
      },
      {
        "letter": "D",
        "text": "Planners should ignore foot traffic entirely."
      }
    ],
    "answer": "B",
    "explanation": "The passage separates 'activity' from 'vitality,' warning that liveliness can mask residents being priced out. B captures the tension.",
    "whyWrong": {
      "A": "The text challenges equating busyness with health.",
      "C": "Shops themselves are not blamed; displacement is the concern.",
      "D": "It questions foot traffic as the sole measure, not observing it at all."
    }
  },
  {
    "id": "central-ideas-t3-10",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is adapted from a nineteenth-century essay.\n\nWe praise the inventor who gives us the engine, yet we forget the many hands that first imagined it might be possible. Every machine is preceded by a change of mind—a moment when what had seemed fixed came to seem alterable. The true revolution, then, is not in the iron but in the temper of the age that dared to reshape it.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Inventors deserve no credit for their machines."
      },
      {
        "letter": "B",
        "text": "The deepest source of invention is a shift in how an age imagines what is possible, not the machine itself."
      },
      {
        "letter": "C",
        "text": "Engines are the most important machines ever built."
      },
      {
        "letter": "D",
        "text": "Iron is more valuable than ideas."
      }
    ],
    "answer": "B",
    "explanation": "The essay locates 'the true revolution' not in the iron but in the age's willingness to imagine change. B states that.",
    "whyWrong": {
      "A": "The inventor is praised; the point is that a mental shift precedes the machine.",
      "C": "The engine is an example, not ranked as most important.",
      "D": "The essay elevates the change of mind over the iron, the opposite of D."
    }
  },
  {
    "id": "central-ideas-t3-11",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is from an article about ecology.\n\nConservation once focused on fencing off pristine wilderness, as if nature were healthiest where people were absent. Ecologists now recognize that many landscapes praised as untouched were in fact shaped for centuries by the people who lived in them—burning, planting, and pruning in ways that increased diversity. Protecting such places, it turns out, may require not removing human hands but restoring the practices those hands once performed.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Human activity always destroys natural landscapes."
      },
      {
        "letter": "B",
        "text": "Wilderness should be fenced off from all human contact."
      },
      {
        "letter": "C",
        "text": "Some landscapes were shaped by human practices, so conserving them may mean restoring those practices rather than excluding people."
      },
      {
        "letter": "D",
        "text": "Ecologists no longer study wilderness at all."
      }
    ],
    "answer": "C",
    "explanation": "The passage overturns the 'people-free' model, arguing some 'untouched' places were human-shaped and may need those practices restored. C captures it.",
    "whyWrong": {
      "A": "The text describes human practices that increased diversity.",
      "B": "This is the older view the passage revises.",
      "D": "Ecologists are shown actively rethinking wilderness."
    }
  },
  {
    "id": "central-ideas-t3-12",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "text": "The following text is from a study of translation.\n\nA faithful translation, we assume, is one that changes as little as possible. But languages carve up the world differently—what one renders in a single word another can only circle with a phrase—so the translator who clings to the surface of the original often betrays its effect. Fidelity, paradoxically, can demand departure: to keep a poem's music or its wit, the translator may have to abandon its literal words.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The best translation reproduces the original word for word."
      },
      {
        "letter": "B",
        "text": "Staying faithful to a text's effect can require departing from its literal words."
      },
      {
        "letter": "C",
        "text": "Poems cannot be translated at all."
      },
      {
        "letter": "D",
        "text": "Translators should invent their own meanings freely."
      }
    ],
    "answer": "B",
    "explanation": "The passage argues fidelity 'can demand departure'—keeping the effect may mean abandoning literal words. B states the paradox.",
    "whyWrong": {
      "A": "The text says clinging to the surface can betray the original.",
      "C": "It discusses how to translate poems, not their impossibility.",
      "D": "Departure serves fidelity here, not free invention."
    }
  },
  {
    "id": "evidence-text-t1-07",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A student claims that a school's new later start time has helped students get more sleep.\n\nWhich finding, if true, would most directly support the student's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "The school cafeteria began serving breakfast later in the morning."
      },
      {
        "letter": "B",
        "text": "Surveys show students now report sleeping about 40 minutes more per night than before the change."
      },
      {
        "letter": "C",
        "text": "Attendance at after-school clubs rose slightly."
      },
      {
        "letter": "D",
        "text": "The school added several new elective courses this year."
      }
    ],
    "answer": "B",
    "explanation": "The claim is about more sleep. A survey showing students sleep about 40 minutes more directly supports it.",
    "whyWrong": {
      "A": "A later breakfast does not measure sleep.",
      "C": "Club attendance is unrelated to hours slept.",
      "D": "New electives say nothing about sleep."
    }
  },
  {
    "id": "evidence-text-t1-08",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A gardener claims that adding compost to the soil made her tomato plants healthier this season.\n\nWhich finding, if true, would most directly support the gardener's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "The composted plants produced more fruit and had greener, fuller leaves than her uncomposted plants."
      },
      {
        "letter": "B",
        "text": "The gardener bought her seeds from a new store this year."
      },
      {
        "letter": "C",
        "text": "The summer was slightly warmer than the previous one."
      },
      {
        "letter": "D",
        "text": "Her neighbor also grows tomatoes."
      }
    ],
    "answer": "A",
    "explanation": "Comparing composted plants to uncomposted ones and finding the composted ones healthier directly supports that compost helped.",
    "whyWrong": {
      "B": "A new seed source is an alternative cause, not support for compost.",
      "C": "Warmer weather is another variable, not evidence for compost.",
      "D": "A neighbor's gardening is irrelevant to her plants' health."
    }
  },
  {
    "id": "evidence-text-t1-09",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A researcher claims that a city's new bike lanes have made cycling safer.\n\nWhich finding, if true, would most directly support the researcher's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "More people say they enjoy cycling downtown."
      },
      {
        "letter": "B",
        "text": "The city painted the lanes bright green."
      },
      {
        "letter": "C",
        "text": "The number of collisions involving cyclists on those streets dropped after the lanes were added."
      },
      {
        "letter": "D",
        "text": "The bike lanes were expensive to build."
      }
    ],
    "answer": "C",
    "explanation": "Safety is best shown by fewer collisions. A drop in cyclist collisions after the lanes appeared directly supports the claim.",
    "whyWrong": {
      "A": "Enjoyment is not the same as safety.",
      "B": "The lanes' color does not measure safety.",
      "D": "Cost is unrelated to whether cycling is safer."
    }
  },
  {
    "id": "evidence-text-t1-10",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A coach claims that a team's new warm-up routine has reduced player injuries.\n\nWhich finding, if true, would most directly support the coach's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "Players say the warm-up is more fun than the old one."
      },
      {
        "letter": "B",
        "text": "The team recorded far fewer injuries this season than in seasons before the routine began."
      },
      {
        "letter": "C",
        "text": "The warm-up takes about ten minutes to complete."
      },
      {
        "letter": "D",
        "text": "The team won more games this season."
      }
    ],
    "answer": "B",
    "explanation": "The claim concerns fewer injuries, so a drop in recorded injuries after adopting the routine directly supports it.",
    "whyWrong": {
      "A": "Enjoyment does not measure injuries.",
      "C": "The routine's length is not evidence about injuries.",
      "D": "More wins could come from many causes unrelated to injuries."
    }
  },
  {
    "id": "evidence-text-t1-11",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A librarian claims that placing a display of staff-recommended books near the entrance has encouraged patrons to check out more of those titles.\n\nWhich finding, if true, would most directly support the librarian's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "The display is decorated with colorful signs."
      },
      {
        "letter": "B",
        "text": "The library extended its weekend hours this month."
      },
      {
        "letter": "C",
        "text": "Checkouts of the recommended titles rose sharply after the display went up."
      },
      {
        "letter": "D",
        "text": "Patrons say the library is a pleasant place to read."
      }
    ],
    "answer": "C",
    "explanation": "The claim is that the display increased checkouts of those titles. A rise in their checkouts after the display appeared directly supports it.",
    "whyWrong": {
      "A": "Decoration does not measure checkouts.",
      "B": "Longer hours are a separate factor that could affect checkouts.",
      "D": "General pleasantness is not evidence about the display's effect."
    }
  },
  {
    "id": "evidence-text-t1-12",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "text": "A teacher claims that letting students explain problems to one another has improved their understanding of the material.\n\nWhich finding, if true, would most directly support the teacher's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "Students who taught one another scored higher on later tests than they had before."
      },
      {
        "letter": "B",
        "text": "The classroom was rearranged into small groups."
      },
      {
        "letter": "C",
        "text": "Students say the class is louder than it used to be."
      },
      {
        "letter": "D",
        "text": "The teacher assigned less homework this term."
      }
    ],
    "answer": "A",
    "explanation": "Improved understanding is best shown by higher test scores after the peer-teaching began. A supports the claim directly.",
    "whyWrong": {
      "B": "Rearranging desks is a setup detail, not evidence of understanding.",
      "C": "Noise level says nothing about understanding.",
      "D": "Less homework is a separate change, not support for the claim."
    }
  },
  {
    "id": "evidence-text-t2-07",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "The following text is from a student's report.\n\nThe student argues that a species of desert lizard survives extreme midday heat mainly by changing its behavior rather than its body.\n\nWhich finding, if true, would most strongly support the student's argument?",
    "choices": [
      {
        "letter": "A",
        "text": "The lizard's skin is a pale sandy color."
      },
      {
        "letter": "B",
        "text": "During the hottest hours, the lizard retreats into shaded burrows and emerges only when temperatures fall."
      },
      {
        "letter": "C",
        "text": "The lizard is closely related to species that live in cooler regions."
      },
      {
        "letter": "D",
        "text": "The lizard lays its eggs in early spring."
      }
    ],
    "answer": "B",
    "explanation": "The argument is that behavior, not body, drives survival. Retreating to shade during peak heat is a behavioral response, directly supporting it.",
    "whyWrong": {
      "A": "Pale skin is a bodily trait, which would work against a behavior-based claim.",
      "C": "Relation to cooler-region species does not show how it handles heat.",
      "D": "Egg-laying timing does not address surviving midday heat."
    }
  },
  {
    "id": "evidence-text-t2-08",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "The following text is from an article about archaeology.\n\nResearchers propose that an ancient settlement was abandoned gradually over many years rather than suddenly destroyed.\n\nWhich finding, if true, would most strongly support the researchers' proposal?",
    "choices": [
      {
        "letter": "A",
        "text": "A thick layer of ash covers the entire site at a single level."
      },
      {
        "letter": "B",
        "text": "Valuable tools and pottery were left broken and scattered across the floors."
      },
      {
        "letter": "C",
        "text": "Houses show signs of being repaired and then, one by one over decades, sealed up and left empty."
      },
      {
        "letter": "D",
        "text": "The settlement's walls collapsed inward all at once."
      }
    ],
    "answer": "C",
    "explanation": "Gradual abandonment predicts a slow, staggered emptying. Houses sealed 'one by one over decades' directly matches that pattern.",
    "whyWrong": {
      "A": "A single ash layer suggests a sudden fire, the opposite of gradual.",
      "B": "Valuables left in ruin suggest a sudden disaster, not a slow departure.",
      "D": "An all-at-once collapse points to sudden destruction."
    }
  },
  {
    "id": "evidence-text-t2-09",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "The following text is from a review of an experiment.\n\nA nutritionist claims that a new cereal keeps people feeling full longer than a standard cereal with the same number of calories.\n\nWhich finding, if true, would most strongly support the nutritionist's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "The new cereal comes in more flavors than the standard one."
      },
      {
        "letter": "B",
        "text": "In a trial, people who ate the new cereal reported hunger later, and ate less at lunch, than those given the standard cereal."
      },
      {
        "letter": "C",
        "text": "The new cereal is more expensive to produce."
      },
      {
        "letter": "D",
        "text": "The new cereal is marketed mainly to adults."
      }
    ],
    "answer": "B",
    "explanation": "The claim is about staying full longer at equal calories. A trial where the new cereal delayed hunger and reduced lunch intake supports it directly.",
    "whyWrong": {
      "A": "Flavor variety does not measure fullness.",
      "C": "Production cost is irrelevant to satiety.",
      "D": "Target market says nothing about how full people feel."
    }
  },
  {
    "id": "evidence-text-t2-10",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "The following text is from a literary discussion.\n\nA critic argues that the poet's later work grew noticeably more hopeful than her early poems.\n\nWhich finding, if true, would most strongly support the critic's argument?",
    "choices": [
      {
        "letter": "A",
        "text": "The poet published her later work with a different press."
      },
      {
        "letter": "B",
        "text": "The poet's early poems are shorter than her later ones."
      },
      {
        "letter": "C",
        "text": "Where early poems dwell on loss and closed doors, the later poems repeatedly turn toward light, renewal, and open horizons."
      },
      {
        "letter": "D",
        "text": "The poet wrote her later work in a coastal town."
      }
    ],
    "answer": "C",
    "explanation": "A shift toward hope should show in the poems' imagery and themes. Early poems of loss versus later ones of renewal directly demonstrate the change.",
    "whyWrong": {
      "A": "The publisher does not reveal the poems' mood.",
      "B": "Length is unrelated to hopefulness.",
      "D": "Where she wrote does not show a change in tone."
    }
  },
  {
    "id": "evidence-text-t2-11",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "The following text is from an environmental report.\n\nScientists claim that a reintroduced predator has helped restore balance to a valley's ecosystem by controlling an overgrown deer population.\n\nWhich finding, if true, would most strongly support the scientists' claim?",
    "choices": [
      {
        "letter": "A",
        "text": "After the predator returned, deer numbers fell and young trees that deer had been overgrazing began to recover."
      },
      {
        "letter": "B",
        "text": "The predator is larger than most animals in the valley."
      },
      {
        "letter": "C",
        "text": "Tourists now visit the valley hoping to see the predator."
      },
      {
        "letter": "D",
        "text": "The valley receives more rainfall than nearby regions."
      }
    ],
    "answer": "A",
    "explanation": "The claim links the predator to controlling deer and restoring balance. Falling deer numbers plus recovering trees directly show that chain of effects.",
    "whyWrong": {
      "B": "The predator's size does not demonstrate ecological balance.",
      "C": "Tourism is unrelated to the ecosystem's health.",
      "D": "Rainfall is a separate factor, not evidence about the predator."
    }
  },
  {
    "id": "evidence-text-t2-12",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "text": "The following text is from a study of learning.\n\nEducators propose that spacing study sessions across several days helps students remember material better than cramming it all at once.\n\nWhich finding, if true, would most strongly support the educators' proposal?",
    "choices": [
      {
        "letter": "A",
        "text": "Students who spread their studying over a week recalled more on a delayed test than students who studied the same total time in one sitting."
      },
      {
        "letter": "B",
        "text": "Students who crammed reported feeling more confident right afterward."
      },
      {
        "letter": "C",
        "text": "Spaced study requires planning a schedule in advance."
      },
      {
        "letter": "D",
        "text": "Both groups spent the same number of total minutes studying."
      }
    ],
    "answer": "A",
    "explanation": "The proposal is that spacing improves memory. Better recall on a delayed test for the spaced group directly supports it.",
    "whyWrong": {
      "B": "Confidence right after cramming is not the same as remembering later.",
      "C": "Needing a schedule is a practical detail, not evidence of better memory.",
      "D": "Equal total time sets up a fair comparison but does not itself show which worked better."
    }
  },
  {
    "id": "evidence-text-t3-07",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "The following text is from a research summary.\n\nA team hypothesizes that a bird species' complex songs are learned from adults rather than inherited at birth. To test this, they raised some chicks in isolation, with no adult birds to hear.\n\nWhich result, if observed, would most strongly support the team's hypothesis?",
    "choices": [
      {
        "letter": "A",
        "text": "The isolated chicks grew to the same size as chicks raised normally."
      },
      {
        "letter": "B",
        "text": "The isolated chicks produced only simple, incomplete songs, unlike the full songs of chicks raised among adults."
      },
      {
        "letter": "C",
        "text": "The isolated chicks were more aggressive than other chicks."
      },
      {
        "letter": "D",
        "text": "The isolated chicks ate the same food as chicks raised normally."
      }
    ],
    "answer": "B",
    "explanation": "If song is learned from adults, chicks deprived of adult models should fail to develop full songs. B is exactly that outcome, supporting the hypothesis.",
    "whyWrong": {
      "A": "Body size does not bear on whether song is learned.",
      "C": "Aggression is unrelated to song learning.",
      "D": "Diet is a control detail, not evidence about learning song."
    }
  },
  {
    "id": "evidence-text-t3-08",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "The following text is from a historian's argument.\n\nA historian contends that a medieval town's prosperity depended less on its famous cathedral, which drew pilgrims, than on the river trade that quietly passed through it.\n\nWhich finding, if true, would most strongly support the historian's contention?",
    "choices": [
      {
        "letter": "A",
        "text": "The cathedral took over a century to complete."
      },
      {
        "letter": "B",
        "text": "Town records show that tax revenue tracked the volume of river shipping closely, but barely changed during major pilgrimage years."
      },
      {
        "letter": "C",
        "text": "Pilgrims traveled from many distant regions to see the cathedral."
      },
      {
        "letter": "D",
        "text": "The cathedral was admired by architects across Europe."
      }
    ],
    "answer": "B",
    "explanation": "The claim is that trade, not pilgrimage, drove prosperity. Revenue tracking shipping but not pilgrimage years directly ties wealth to the river, supporting the argument.",
    "whyWrong": {
      "A": "Construction time says nothing about the town's economy.",
      "C": "Distant pilgrims might suggest the cathedral mattered, weakening the claim.",
      "D": "Architectural fame is unrelated to the source of prosperity."
    }
  },
  {
    "id": "evidence-text-t3-09",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "The following text is from a psychology paper.\n\nResearchers suggest that people judge a room as more welcoming when it contains rounded shapes rather than sharp angles, even when they cannot say why.\n\nWhich result, if observed, would most strongly support the researchers' suggestion?",
    "choices": [
      {
        "letter": "A",
        "text": "Participants rated rooms with curved furniture as friendlier than identical rooms with angular furniture, though they gave no consistent reason."
      },
      {
        "letter": "B",
        "text": "Participants preferred larger rooms to smaller ones."
      },
      {
        "letter": "C",
        "text": "Participants spent more time in brightly lit rooms."
      },
      {
        "letter": "D",
        "text": "Participants remembered angular rooms more accurately."
      }
    ],
    "answer": "A",
    "explanation": "The suggestion pairs a preference for rounded shapes with an inability to explain it. A shows both: higher friendliness ratings for curves and no consistent stated reason.",
    "whyWrong": {
      "B": "Room size is a different variable than shape.",
      "C": "Lighting is not the rounded-versus-angular contrast being tested.",
      "D": "Better memory for angular rooms does not address perceived welcome."
    }
  },
  {
    "id": "evidence-text-t3-10",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "The following text is from a study of migration.\n\nEcologists propose that a butterfly species navigates its long migration primarily by sensing the Earth's magnetic field rather than by following visual landmarks.\n\nWhich result, if observed, would most strongly support the ecologists' proposal?",
    "choices": [
      {
        "letter": "A",
        "text": "Butterflies migrate during the warmer months of the year."
      },
      {
        "letter": "B",
        "text": "When placed in an altered magnetic field but shown a normal landscape, the butterflies shifted their flight direction accordingly."
      },
      {
        "letter": "C",
        "text": "The butterflies rest on the same species of tree each night."
      },
      {
        "letter": "D",
        "text": "The butterflies travel in large groups."
      }
    ],
    "answer": "B",
    "explanation": "If magnetism guides them, changing the magnetic field—while keeping the landscape normal—should redirect them. B is precisely that result, isolating the magnetic cue.",
    "whyWrong": {
      "A": "Season of travel does not distinguish magnetic from visual navigation.",
      "C": "Resting trees are landmarks, if anything weakening the magnetic claim.",
      "D": "Group travel does not reveal the navigation method."
    }
  },
  {
    "id": "evidence-text-t3-11",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "The following text is from an economics study.\n\nAn economist argues that offering shoppers a smaller number of product choices can increase sales, because too many options overwhelm buyers into purchasing nothing.\n\nWhich finding, if true, would most strongly support the economist's argument?",
    "choices": [
      {
        "letter": "A",
        "text": "A store that reduced its jam selection from 24 kinds to 6 saw more customers actually complete a purchase."
      },
      {
        "letter": "B",
        "text": "Customers said they enjoyed browsing the larger selection."
      },
      {
        "letter": "C",
        "text": "The store with 24 kinds attracted more first-time visitors."
      },
      {
        "letter": "D",
        "text": "The six remaining jams were the store's least expensive."
      }
    ],
    "answer": "A",
    "explanation": "The argument links fewer choices to more completed sales. A shows exactly that: cutting the selection raised the share who bought something.",
    "whyWrong": {
      "B": "Enjoying browsing is not the same as buying.",
      "C": "More visitors to the large display does not mean more purchases.",
      "D": "Lower price is an alternative cause, muddying rather than supporting the choice-overload claim."
    }
  },
  {
    "id": "evidence-text-t3-12",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "The following text is from a linguistics paper.\n\nA linguist hypothesizes that a dialect's unusual vowel sounds arose from contact with a neighboring language rather than developing on their own.\n\nWhich finding, if true, would most strongly support the linguist's hypothesis?",
    "choices": [
      {
        "letter": "A",
        "text": "The dialect is spoken by a relatively small community."
      },
      {
        "letter": "B",
        "text": "The distinctive vowels appear almost only in areas that historically bordered speakers of the neighboring language, and match that language's vowels closely."
      },
      {
        "letter": "C",
        "text": "The dialect has a rich tradition of spoken poetry."
      },
      {
        "letter": "D",
        "text": "Younger speakers use the dialect less than older ones."
      }
    ],
    "answer": "B",
    "explanation": "Contact-based change predicts the features cluster near the border and resemble the neighbor's sounds. B shows both, strongly supporting the contact hypothesis.",
    "whyWrong": {
      "A": "Community size does not indicate the vowels' origin.",
      "C": "A poetry tradition is unrelated to where the vowels came from.",
      "D": "Generational decline concerns the dialect's future, not its origin."
    }
  },
  {
    "id": "evidence-quant-t1-07",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A chart shows the number of trees planted by a volunteer group each year: 120 in 2019, 150 in 2020, 210 in 2021, and 260 in 2022.\n\nWhich choice most effectively uses the data to support the claim that the group planted more trees each year?",
    "choices": [
      {
        "letter": "A",
        "text": "The group planted 210 trees in 2021."
      },
      {
        "letter": "B",
        "text": "The number of trees planted rose every year, from 120 in 2019 to 260 in 2022."
      },
      {
        "letter": "C",
        "text": "The group planted the fewest trees in 2019."
      },
      {
        "letter": "D",
        "text": "The group planted trees in four different years."
      }
    ],
    "answer": "B",
    "explanation": "The claim is a year-over-year increase. B shows the steady rise across all four years, from 120 up to 260.",
    "whyWrong": {
      "A": "A single year's figure does not show a yearly increase.",
      "C": "A minimum in 2019 alone does not establish the upward trend.",
      "D": "Merely planting in four years does not show the numbers grew."
    }
  },
  {
    "id": "evidence-quant-t1-08",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A table lists average daily temperatures for four cities in July: 68°F, 74°F, 81°F, and 90°F.\n\nWhich choice most effectively uses the data to support the claim that the cities differ widely in July temperature?",
    "choices": [
      {
        "letter": "A",
        "text": "One city averaged 74°F in July."
      },
      {
        "letter": "B",
        "text": "All four cities were measured in July."
      },
      {
        "letter": "C",
        "text": "July temperatures ranged from 68°F in the coolest city to 90°F in the warmest, a spread of 22°F."
      },
      {
        "letter": "D",
        "text": "Three of the cities were above 70°F."
      }
    ],
    "answer": "C",
    "explanation": "A wide difference is shown by the full range. C gives the 22°F spread from coolest to warmest, directly supporting the claim.",
    "whyWrong": {
      "A": "One city's value does not show a wide difference.",
      "B": "Sharing the same month is not about temperature spread.",
      "D": "Counting cities above 70°F does not capture the range."
    }
  },
  {
    "id": "evidence-quant-t1-09",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A survey found that of 200 students, 90 walk to school, 60 take the bus, 30 ride bikes, and 20 are driven.\n\nWhich choice most effectively uses the data to support the claim that walking is the most common way students get to school?",
    "choices": [
      {
        "letter": "A",
        "text": "Thirty students ride bikes to school."
      },
      {
        "letter": "B",
        "text": "More students walk (90) than use any other single method."
      },
      {
        "letter": "C",
        "text": "Twenty students are driven to school."
      },
      {
        "letter": "D",
        "text": "The survey included 200 students."
      }
    ],
    "answer": "B",
    "explanation": "'Most common' means the largest single group. B shows 90 walkers exceed every other method's count.",
    "whyWrong": {
      "A": "Bike riders are one of the smaller groups, not evidence walking leads.",
      "C": "The driven group is the smallest, not relevant to walking's lead.",
      "D": "The total sample size does not identify the most common method."
    }
  },
  {
    "id": "evidence-quant-t1-10",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A graph shows a store's monthly umbrella sales: 40 in April, 95 in May, 30 in June. Rainfall was highest in May.\n\nWhich choice most effectively uses the data to support the claim that umbrella sales peaked in the rainiest month?",
    "choices": [
      {
        "letter": "A",
        "text": "The store sold 40 umbrellas in April."
      },
      {
        "letter": "B",
        "text": "Umbrella sales were higher in May (95) than in April or June, and May had the most rainfall."
      },
      {
        "letter": "C",
        "text": "The store sold umbrellas in three months."
      },
      {
        "letter": "D",
        "text": "June sales were lower than April sales."
      }
    ],
    "answer": "B",
    "explanation": "The claim ties the sales peak to the rainiest month. B pairs May's highest sales (95) with May's highest rainfall.",
    "whyWrong": {
      "A": "April's figure alone does not show a peak in the rainiest month.",
      "C": "Selling in three months does not identify the peak.",
      "D": "Comparing June to April ignores May, the rainy peak."
    }
  },
  {
    "id": "evidence-quant-t1-11",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A study measured how long four types of phone battery lasted on a single charge: 8 hours, 11 hours, 14 hours, and 19 hours.\n\nWhich choice most effectively uses the data to support the claim that battery life varied considerably among the phones?",
    "choices": [
      {
        "letter": "A",
        "text": "One phone lasted 11 hours."
      },
      {
        "letter": "B",
        "text": "All four phones were tested on a single charge."
      },
      {
        "letter": "C",
        "text": "Battery life ranged from 8 hours for the shortest to 19 hours for the longest."
      },
      {
        "letter": "D",
        "text": "Two of the phones lasted more than 10 hours."
      }
    ],
    "answer": "C",
    "explanation": "Considerable variation is shown by the full range. C reports the 8-to-19-hour spread, supporting the claim.",
    "whyWrong": {
      "A": "One phone's life does not show variation.",
      "B": "The shared test method is not about variation in results.",
      "D": "Counting phones over 10 hours omits the extremes that show the spread."
    }
  },
  {
    "id": "evidence-quant-t1-12",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "text": "A club tracked attendance at its meetings: 12 members in week 1, 18 in week 2, 25 in week 3, and 31 in week 4.\n\nWhich choice most effectively uses the data to support the claim that the club's meetings grew steadily more popular?",
    "choices": [
      {
        "letter": "A",
        "text": "Attendance rose each week, from 12 in week 1 to 31 in week 4."
      },
      {
        "letter": "B",
        "text": "The club held four meetings."
      },
      {
        "letter": "C",
        "text": "Eighteen members came in week 2."
      },
      {
        "letter": "D",
        "text": "Week 1 had the lowest attendance."
      }
    ],
    "answer": "A",
    "explanation": "Steady growth is shown by attendance rising every week. A gives the full increase from 12 to 31.",
    "whyWrong": {
      "B": "The number of meetings does not show growing popularity.",
      "C": "A single week's count does not establish the trend.",
      "D": "A low starting point alone does not prove steady growth."
    }
  },
  {
    "id": "evidence-quant-t2-07",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A study compared two fertilizers. Plants given Fertilizer X grew an average of 22 cm; plants given Fertilizer Y grew an average of 15 cm; untreated plants grew 12 cm.\n\nWhich choice most effectively uses the data to support the claim that Fertilizer X promoted the most growth?",
    "choices": [
      {
        "letter": "A",
        "text": "Untreated plants grew 12 cm on average."
      },
      {
        "letter": "B",
        "text": "Plants given Fertilizer X grew an average of 22 cm, more than those given Fertilizer Y (15 cm) or no fertilizer (12 cm)."
      },
      {
        "letter": "C",
        "text": "Fertilizer Y outperformed no fertilizer."
      },
      {
        "letter": "D",
        "text": "Some plants received no fertilizer at all."
      }
    ],
    "answer": "B",
    "explanation": "'Most growth' requires comparing X to both alternatives. B shows X's 22 cm exceeds Y's 15 cm and the untreated 12 cm.",
    "whyWrong": {
      "A": "The untreated figure alone says nothing about X leading.",
      "C": "Y beating no fertilizer does not show X is best.",
      "D": "That a control group existed does not identify the top performer."
    }
  },
  {
    "id": "evidence-quant-t2-08",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A report notes that a river's fish population fell from 5,000 in 2010 to 2,000 in 2015, then rose to 4,500 by 2020 after cleanup efforts began in 2015.\n\nWhich choice most effectively uses the data to support the claim that the cleanup helped the fish population recover?",
    "choices": [
      {
        "letter": "A",
        "text": "The population was 5,000 in 2010."
      },
      {
        "letter": "B",
        "text": "The population fell between 2010 and 2015."
      },
      {
        "letter": "C",
        "text": "After cleanup began in 2015, the population rose from 2,000 to 4,500 by 2020."
      },
      {
        "letter": "D",
        "text": "The population never returned to its 2010 level."
      }
    ],
    "answer": "C",
    "explanation": "Recovery after the cleanup is shown by the rise following 2015. C reports the climb from 2,000 to 4,500 once cleanup began.",
    "whyWrong": {
      "A": "The 2010 figure predates the cleanup and shows no recovery.",
      "B": "The earlier decline occurred before cleanup began.",
      "D": "Falling short of 2010 does not demonstrate the recovery the cleanup produced."
    }
  },
  {
    "id": "evidence-quant-t2-09",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A survey of readers found that 15% finished the novel in under a week, 45% in one to two weeks, 30% in three to four weeks, and 10% took longer than a month.\n\nWhich choice most effectively uses the data to support the claim that most readers finished the novel within two weeks?",
    "choices": [
      {
        "letter": "A",
        "text": "Ten percent took longer than a month."
      },
      {
        "letter": "B",
        "text": "Combined, 60% of readers finished in two weeks or less (15% under a week plus 45% in one to two weeks)."
      },
      {
        "letter": "C",
        "text": "Thirty percent finished in three to four weeks."
      },
      {
        "letter": "D",
        "text": "Forty-five percent finished in one to two weeks."
      }
    ],
    "answer": "B",
    "explanation": "'Most' means over half. B adds the two fastest groups (15% + 45% = 60%) to show a majority finished within two weeks.",
    "whyWrong": {
      "A": "The slowest group works against the claim, not for it.",
      "C": "Three-to-four-week readers took longer than two weeks.",
      "D": "45% alone is not a majority; the under-a-week group must be added."
    }
  },
  {
    "id": "evidence-quant-t2-10",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A city measured air pollution before and after limiting downtown traffic. A key pollutant averaged 48 units before the limit and 33 units after, while a nearby city with no limit stayed near 47 units.\n\nWhich choice most effectively uses the data to support the claim that the traffic limit improved downtown air quality?",
    "choices": [
      {
        "letter": "A",
        "text": "The nearby city measured about 47 units."
      },
      {
        "letter": "B",
        "text": "The pollutant fell from 48 to 33 units where traffic was limited, while the comparison city without a limit stayed near 47."
      },
      {
        "letter": "C",
        "text": "The pollutant was measured in both cities."
      },
      {
        "letter": "D",
        "text": "Downtown traffic was limited to reduce pollution."
      }
    ],
    "answer": "B",
    "explanation": "The strongest support pairs the drop where the limit was applied (48 to 33) with the unchanged comparison city (near 47), isolating the limit's effect. B does this.",
    "whyWrong": {
      "A": "The comparison city's value alone does not show downtown improved.",
      "C": "That both were measured is method, not evidence of improvement.",
      "D": "Stating the goal is not data showing the goal was met."
    }
  },
  {
    "id": "evidence-quant-t2-11",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A bakery recorded that adding a small seating area coincided with average daily customers rising from 80 to 110, while daily customers at its other branch, which added no seating, held steady at about 82.\n\nWhich choice most effectively uses the data to support the claim that the seating area attracted more customers?",
    "choices": [
      {
        "letter": "A",
        "text": "The other branch averaged about 82 customers a day."
      },
      {
        "letter": "B",
        "text": "Daily customers rose from 80 to 110 at the branch that added seating, while the branch without seating stayed near 82."
      },
      {
        "letter": "C",
        "text": "Both branches sell the same baked goods."
      },
      {
        "letter": "D",
        "text": "The seating area was small."
      }
    ],
    "answer": "B",
    "explanation": "The claim credits the seating for more customers. B contrasts the rise where seating was added (80 to 110) with the flat branch (82), pointing to the seating.",
    "whyWrong": {
      "A": "The unchanged branch alone does not show the seating helped.",
      "C": "Shared menu is background, not evidence of the seating's effect.",
      "D": "The seating's size does not measure its effect on customers."
    }
  },
  {
    "id": "evidence-quant-t2-12",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A test compared reading speeds under three lighting conditions. Readers averaged 210 words per minute in bright light, 205 in medium light, and 160 in dim light.\n\nWhich choice most effectively uses the data to support the claim that only dim lighting noticeably slowed reading?",
    "choices": [
      {
        "letter": "A",
        "text": "Readers averaged 205 words per minute in medium light."
      },
      {
        "letter": "B",
        "text": "Reading speed was similar in bright (210) and medium (205) light but dropped sharply in dim light (160)."
      },
      {
        "letter": "C",
        "text": "Bright light produced the fastest reading."
      },
      {
        "letter": "D",
        "text": "Three lighting conditions were tested."
      }
    ],
    "answer": "B",
    "explanation": "The claim is that only dim light slowed reading. B shows bright and medium were close (210 vs. 205) while dim fell to 160.",
    "whyWrong": {
      "A": "The medium-light value alone does not show that only dim slowed reading.",
      "C": "Bright being fastest ignores that medium was nearly the same.",
      "D": "The number of conditions is not evidence about the slowdown."
    }
  },
  {
    "id": "evidence-quant-t3-07",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A study measured a crop's yield at four planting densities (plants per square meter): 4 plants gave 3.2 kg, 8 plants gave 5.1 kg, 12 plants gave 5.4 kg, and 16 plants gave 4.6 kg.\n\nWhich choice most effectively uses the data to support the claim that yield rises with density only up to a point, after which it declines?",
    "choices": [
      {
        "letter": "A",
        "text": "Yield increased from 3.2 kg at 4 plants to a peak of 5.4 kg at 12 plants, then fell to 4.6 kg at 16 plants."
      },
      {
        "letter": "B",
        "text": "The lowest yield occurred at the lowest density."
      },
      {
        "letter": "C",
        "text": "Yield at 8 plants was 5.1 kg."
      },
      {
        "letter": "D",
        "text": "Sixteen plants per square meter is the highest density tested."
      }
    ],
    "answer": "A",
    "explanation": "The claim describes a rise then a fall. A traces the increase to a peak at 12 plants (5.4 kg) and the decline at 16 plants (4.6 kg).",
    "whyWrong": {
      "B": "The low-density minimum shows only the rising part, not the later decline.",
      "C": "A single midpoint value does not show the up-then-down pattern.",
      "D": "Naming the highest density does not describe the yield trend."
    }
  },
  {
    "id": "evidence-quant-t3-08",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "Researchers compared two teaching methods. On an easy test, Method A scored 88 and Method B scored 86—nearly equal. On a hard test, Method A scored 71 while Method B scored 55.\n\nWhich choice most effectively uses the data to support the claim that Method A's advantage appears mainly on more difficult material?",
    "choices": [
      {
        "letter": "A",
        "text": "Method A scored 88 on the easy test."
      },
      {
        "letter": "B",
        "text": "The two methods scored nearly the same on the easy test (88 vs. 86) but Method A far outscored Method B on the hard test (71 vs. 55)."
      },
      {
        "letter": "C",
        "text": "Both methods scored above 50 on the hard test."
      },
      {
        "letter": "D",
        "text": "Method B scored 86 on the easy test."
      }
    ],
    "answer": "B",
    "explanation": "The claim is that A's edge shows up on hard material. B contrasts the near-tie on the easy test with A's large lead on the hard test.",
    "whyWrong": {
      "A": "One easy-test score does not reveal where A's advantage lies.",
      "C": "Both clearing 50 ignores the gap that shows A's advantage.",
      "D": "B's easy-test score alone does not address the difficulty pattern."
    }
  },
  {
    "id": "evidence-quant-t3-09",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A survey reported that 70% of respondents said they recycle regularly, yet a separate audit of the same neighborhood's bins found recyclable material in only 40% of them.\n\nWhich choice most effectively uses the data to support the claim that people may overstate how often they recycle?",
    "choices": [
      {
        "letter": "A",
        "text": "Seventy percent of respondents said they recycle regularly."
      },
      {
        "letter": "B",
        "text": "Although 70% reported recycling regularly, the bin audit found recyclables in only 40% of bins—a gap suggesting self-reports exceed actual behavior."
      },
      {
        "letter": "C",
        "text": "The audit examined the neighborhood's bins."
      },
      {
        "letter": "D",
        "text": "Forty percent of bins contained recyclable material."
      }
    ],
    "answer": "B",
    "explanation": "Overstating is shown by the gap between what people say (70%) and what the audit found (40%). B pairs both figures to reveal that gap.",
    "whyWrong": {
      "A": "The self-report alone gives no basis for comparison.",
      "C": "That an audit occurred is method, not the revealing contrast.",
      "D": "The audit figure alone, without the 70% claim, does not show overstatement."
    }
  },
  {
    "id": "evidence-quant-t3-10",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A clinic tracked two groups. In the group that received text-message reminders, 82% kept their appointments; in the group that did not, 61% did. The two groups were otherwise similar in age and distance from the clinic.\n\nWhich choice most effectively uses the data to support the claim that the reminders improved appointment attendance?",
    "choices": [
      {
        "letter": "A",
        "text": "In the reminder group, 82% kept their appointments, compared with 61% in the otherwise-similar group that received none."
      },
      {
        "letter": "B",
        "text": "Most patients in both groups kept their appointments."
      },
      {
        "letter": "C",
        "text": "The clinic sent text-message reminders to one group."
      },
      {
        "letter": "D",
        "text": "Both groups were similar in age and distance from the clinic."
      }
    ],
    "answer": "A",
    "explanation": "The reminders' effect is shown by comparing the two similar groups: 82% with reminders versus 61% without. A gives that contrast.",
    "whyWrong": {
      "B": "Saying most kept appointments blurs the difference the reminders made.",
      "C": "Describing the intervention is not the same as showing its effect.",
      "D": "Group similarity supports a fair comparison but does not itself show the reminders helped."
    }
  },
  {
    "id": "evidence-quant-t3-11",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A study found that a coastal wetland absorbed floodwater such that neighborhoods behind it flooded on average 6 cm deep during a storm, while similar neighborhoods behind a wetland that had been paved over flooded 21 cm deep in the same storm.\n\nWhich choice most effectively uses the data to support the claim that intact wetlands reduce flood depth?",
    "choices": [
      {
        "letter": "A",
        "text": "Neighborhoods behind the intact wetland flooded to 6 cm, versus 21 cm behind the paved-over wetland during the same storm."
      },
      {
        "letter": "B",
        "text": "Both areas experienced the same storm."
      },
      {
        "letter": "C",
        "text": "The paved-over wetland no longer holds water."
      },
      {
        "letter": "D",
        "text": "Flooding reached 21 cm in one set of neighborhoods."
      }
    ],
    "answer": "A",
    "explanation": "The claim credits intact wetlands with less flooding. A contrasts 6 cm behind the intact wetland with 21 cm behind the paved one in the same storm.",
    "whyWrong": {
      "B": "The shared storm sets up the comparison but is not itself the evidence.",
      "C": "A general statement about paving lacks the comparative depths.",
      "D": "The 21 cm figure alone omits the intact-wetland contrast."
    }
  },
  {
    "id": "evidence-quant-t3-12",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "text": "A factory tested a new machine. Over four weeks, defect rates were 3.0%, 2.4%, 2.1%, and 2.0%, while output rose from 900 to 1,150 units per week.\n\nWhich choice most effectively uses the data to support the claim that the machine produced more units without sacrificing quality?",
    "choices": [
      {
        "letter": "A",
        "text": "Output reached 1,150 units in the final week."
      },
      {
        "letter": "B",
        "text": "As weekly output climbed from 900 to 1,150 units, the defect rate did not rise but fell from 3.0% to 2.0%."
      },
      {
        "letter": "C",
        "text": "The defect rate was 2.4% in the second week."
      },
      {
        "letter": "D",
        "text": "The machine was tested over four weeks."
      }
    ],
    "answer": "B",
    "explanation": "The claim is more output with no loss of quality. B shows output rising while the defect rate actually fell, covering both parts.",
    "whyWrong": {
      "A": "Final output alone says nothing about quality.",
      "C": "One week's defect rate does not show the joint trend.",
      "D": "The test's length is not evidence about output or quality."
    }
  },
  {
    "id": "inferences-t1-07",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "The following text is from an article about deserts.\n\nThe kangaroo rat lives in dry deserts where standing water is almost never available. Remarkably, it can survive its entire life without drinking, obtaining nearly all the moisture it needs from the seeds it eats and from water its body produces as it breaks down that food. This suggests that the kangaroo rat ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "must migrate to wetter regions during dry seasons."
      },
      {
        "letter": "B",
        "text": "is well adapted to survive where drinking water is scarce."
      },
      {
        "letter": "C",
        "text": "cannot survive in any environment but the desert."
      },
      {
        "letter": "D",
        "text": "prefers to drink water whenever it is available."
      }
    ],
    "answer": "B",
    "explanation": "Getting nearly all its water from food, without drinking, shows the kangaroo rat is suited to dry places. B follows.",
    "whyWrong": {
      "A": "The text says it needs no standing water, so migration for water is unsupported.",
      "C": "Nothing rules out other environments.",
      "D": "The passage stresses it survives without drinking, not a preference to drink."
    }
  },
  {
    "id": "inferences-t1-08",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "The following text is from a description of a small business.\n\nWhen the bakery posted its daily specials online each morning, those items regularly sold out by noon, while unlisted items often remained on the shelves at closing. The owner noticed that customers frequently arrived asking for the exact item she had posted. This suggests that the online posts ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "influenced which items customers came in to buy."
      },
      {
        "letter": "B",
        "text": "reduced the bakery's overall sales."
      },
      {
        "letter": "C",
        "text": "were seen by very few customers."
      },
      {
        "letter": "D",
        "text": "were posted only on weekends."
      }
    ],
    "answer": "A",
    "explanation": "Posted items sold out and customers asked for them by name, so the posts shaped what customers bought. A follows.",
    "whyWrong": {
      "B": "Posted items sold well, so sales were not reduced.",
      "C": "Customers arrived asking for posted items, so many saw them.",
      "D": "The text says the specials were posted daily, not only weekends."
    }
  },
  {
    "id": "inferences-t1-09",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "The following text is from a nature guide.\n\nCertain moths have wings patterned to look almost exactly like dead leaves. When such a moth rests motionless on the forest floor, birds searching for insects pass over it again and again. Only when the moth moves does a bird notice it at all. This suggests that the moth's leaf-like pattern ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "helps it hide from predators as long as it stays still."
      },
      {
        "letter": "B",
        "text": "attracts birds toward it."
      },
      {
        "letter": "C",
        "text": "is brighter than the surrounding leaves."
      },
      {
        "letter": "D",
        "text": "makes it fly faster than other moths."
      }
    ],
    "answer": "A",
    "explanation": "Birds miss the motionless moth and spot it only when it moves, so the pattern conceals it while still. A follows.",
    "whyWrong": {
      "B": "The pattern makes birds miss it, not approach it.",
      "C": "Looking like dead leaves means blending in, not standing out.",
      "D": "Flight speed is never mentioned."
    }
  },
  {
    "id": "inferences-t1-10",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "The following text is from a school newsletter.\n\nAfter the science club began meeting in the well-lit, spacious new lab, membership doubled within a semester. Several new members mentioned that they had walked past the club's old, cramped basement room for years without ever going in. This suggests that the club's earlier location ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "had discouraged some students from joining."
      },
      {
        "letter": "B",
        "text": "was more popular than the new lab."
      },
      {
        "letter": "C",
        "text": "was too far from the school to reach."
      },
      {
        "letter": "D",
        "text": "had better equipment than the new lab."
      }
    ],
    "answer": "A",
    "explanation": "Members who avoided the cramped basement joined once the club moved, so the old room had kept some away. A follows.",
    "whyWrong": {
      "B": "Membership doubled after the move, so the new lab was more popular.",
      "C": "Students walked past it for years, so it was not unreachable.",
      "D": "No comparison of equipment is made."
    }
  },
  {
    "id": "inferences-t1-11",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "The following text is from an article about plants.\n\nSunflowers turn to face the sun as it moves across the sky, but only while they are young and growing. Once a sunflower matures, its stem stiffens and the flower stays fixed, usually facing east. This suggests that a sunflower's ability to track the sun ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "continues throughout the plant's entire life."
      },
      {
        "letter": "B",
        "text": "depends on the flexibility of its growing stem."
      },
      {
        "letter": "C",
        "text": "is strongest at night."
      },
      {
        "letter": "D",
        "text": "causes the flower to face west when mature."
      }
    ],
    "answer": "B",
    "explanation": "Tracking happens while the plant is young and its stem can bend, but stops once the stem stiffens, so it depends on stem flexibility. B follows.",
    "whyWrong": {
      "A": "Mature sunflowers stop tracking, so it does not last a lifetime.",
      "C": "Tracking follows the sun, which is not out at night.",
      "D": "The text says mature flowers usually face east, not west."
    }
  },
  {
    "id": "inferences-t1-12",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "text": "The following text is from a report on public transit.\n\nWhen the city made its buses free on weekends, weekend ridership rose sharply, but weekday ridership, which still required a fare, stayed about the same. Officials noted that many weekend riders said the free fare was the reason they chose the bus. This suggests that fare cost ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "affects some people's decision to ride the bus."
      },
      {
        "letter": "B",
        "text": "has no effect on ridership at all."
      },
      {
        "letter": "C",
        "text": "is the only reason anyone rides the bus."
      },
      {
        "letter": "D",
        "text": "matters more on weekdays than on weekends."
      }
    ],
    "answer": "A",
    "explanation": "Removing the weekend fare raised ridership and riders cited the free fare, so cost influences some riders' choices. A follows.",
    "whyWrong": {
      "B": "Ridership rose when the fare was dropped, so cost does have an effect.",
      "C": "'Only reason' overstates it; riders have other reasons too.",
      "D": "The change occurred on weekends, not weekdays."
    }
  },
  {
    "id": "inferences-t2-07",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The following text is from a study of ancient tools.\n\nExcavators found that stone blades at one site were made from a type of rock that occurs only in mountains more than two hundred miles away. The blades were finely worked, and no rough, half-finished pieces or stone-working debris were found nearby. The most reasonable conclusion is that the finished blades ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "were carved from local rock found at the site."
      },
      {
        "letter": "B",
        "text": "were made elsewhere and brought to the site already finished."
      },
      {
        "letter": "C",
        "text": "were never actually used as tools."
      },
      {
        "letter": "D",
        "text": "were the only objects found at the site."
      }
    ],
    "answer": "B",
    "explanation": "The rock is from far away and there is no local stone-working debris, so the blades were finished elsewhere and carried in. B follows.",
    "whyWrong": {
      "A": "The rock occurs only far away, so it is not local.",
      "C": "Fine working implies use, and nothing says they were unused.",
      "D": "The text does not claim these were the only objects."
    }
  },
  {
    "id": "inferences-t2-08",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The following text is from an article about astronomy.\n\nA distant star dims slightly at regular intervals, always by the same amount and always for the same length of time. Astronomers note that this pattern is exactly what would occur if a planet passed in front of the star during each orbit. No other explanation has matched the precise regularity observed. The most reasonable conclusion is that ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the star is slowly burning out."
      },
      {
        "letter": "B",
        "text": "a planet is orbiting the star and periodically passing in front of it."
      },
      {
        "letter": "C",
        "text": "the star produces no light of its own."
      },
      {
        "letter": "D",
        "text": "the dimming happens at random."
      }
    ],
    "answer": "B",
    "explanation": "Regular, identical dimming matches a planet crossing in front each orbit, and no other explanation fits. B follows.",
    "whyWrong": {
      "A": "A star burning out would dim steadily, not at repeating intervals.",
      "C": "The star clearly emits light, since its brightness dips and returns.",
      "D": "The dimming is described as regular, not random."
    }
  },
  {
    "id": "inferences-t2-09",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The following text is from a discussion of language.\n\nLinguists studying two neighboring communities found that although the groups have lived apart for generations, their languages share dozens of unusual words with nearly identical meanings and pronunciations. These words appear in no other language in the region. The most reasonable conclusion is that the two languages ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "developed these shared words entirely by coincidence."
      },
      {
        "letter": "B",
        "text": "share a common origin or history of contact."
      },
      {
        "letter": "C",
        "text": "are identical in every respect."
      },
      {
        "letter": "D",
        "text": "are both dying out."
      }
    ],
    "answer": "B",
    "explanation": "Dozens of matching, unusual words found nowhere else point to shared origin or contact, not chance. B follows.",
    "whyWrong": {
      "A": "So many precise matches make coincidence unreasonable.",
      "C": "Sharing some words does not make the languages identical.",
      "D": "Nothing in the text concerns the languages declining."
    }
  },
  {
    "id": "inferences-t2-10",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The following text is adapted from a story.\n\nEvery evening, the old dog waited by the front window a full ten minutes before Nadia's car ever appeared in the drive. No sound of the engine reached the house that early, and Nadia's schedule varied by the day. Yet the dog was never wrong. The most reasonable conclusion is that the dog ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "could hear Nadia's car from miles away."
      },
      {
        "letter": "B",
        "text": "was relying on some cue other than the sound of the engine."
      },
      {
        "letter": "C",
        "text": "had memorized Nadia's exact daily schedule."
      },
      {
        "letter": "D",
        "text": "waited by the window all day long."
      }
    ],
    "answer": "B",
    "explanation": "The dog reacts before any engine sound and despite a changing schedule, so it must use a different cue. B follows.",
    "whyWrong": {
      "A": "The text says no engine sound reached the house that early.",
      "C": "Nadia's schedule varied, so a memorized fixed schedule cannot explain it.",
      "D": "It waited each evening before her arrival, not all day."
    }
  },
  {
    "id": "inferences-t2-11",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The following text is from a report on agriculture.\n\nIn fields where farmers planted a strip of wildflowers along the edges, crops in the center suffered noticeably less insect damage than in fields with no such strips. Researchers found that the flower strips attracted large numbers of insect-eating beetles and wasps. The most reasonable conclusion is that the flower strips reduced crop damage by ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "blocking insects from physically reaching the crops."
      },
      {
        "letter": "B",
        "text": "supporting predators that helped control crop-damaging insects."
      },
      {
        "letter": "C",
        "text": "making the crops grow faster."
      },
      {
        "letter": "D",
        "text": "replacing the crops with wildflowers."
      }
    ],
    "answer": "B",
    "explanation": "The strips drew insect-eating beetles and wasps, and damage dropped, so they worked by supporting predators of the pests. B follows.",
    "whyWrong": {
      "A": "A strip of flowers along the edge would not physically block insects.",
      "C": "Faster growth is never mentioned as the mechanism.",
      "D": "The strips lined field edges; the crops remained in the center."
    }
  },
  {
    "id": "inferences-t2-12",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The following text is from an art history discussion.\n\nBeneath the surface of the painting, X-ray imaging revealed an earlier composition: a different figure, painted over and then replaced with the scene now visible. The pigments of the hidden layer match those the artist used only in her final decade. The most reasonable conclusion is that the visible painting ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "was painted before the artist's final decade."
      },
      {
        "letter": "B",
        "text": "was created no earlier than the artist's final decade."
      },
      {
        "letter": "C",
        "text": "was painted by a different artist entirely."
      },
      {
        "letter": "D",
        "text": "contains no hidden layers."
      }
    ],
    "answer": "B",
    "explanation": "The visible scene sits on top of a layer using pigments from the artist's final decade, so it must come from that decade or later. B follows.",
    "whyWrong": {
      "A": "The top layer covers final-decade pigments, so it cannot predate them.",
      "C": "The pigments tie the work to the same artist, not a different one.",
      "D": "The X-ray revealed a hidden earlier layer, so the claim is false."
    }
  },
  {
    "id": "inferences-t3-07",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "The following text is from a study of cooperation.\n\nIn an experiment, players could either share a reward or keep it for themselves. When each round was the last one, most players kept the reward. But when players expected to meet the same partners again in future rounds, sharing rose sharply—even though the immediate cost of sharing was identical in both cases. The most reasonable conclusion is that players' willingness to share depended less on the immediate cost than on ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "whether they expected future interactions with the same partners."
      },
      {
        "letter": "B",
        "text": "the exact size of the reward offered."
      },
      {
        "letter": "C",
        "text": "how many players took part in the experiment."
      },
      {
        "letter": "D",
        "text": "whether the players had shared in past experiments."
      }
    ],
    "answer": "A",
    "explanation": "Sharing rose specifically when future rounds with the same partners were expected, though the cost was unchanged, so expectation of future interaction drove it. A follows.",
    "whyWrong": {
      "B": "The text holds the immediate cost identical, isolating the expectation of future rounds.",
      "C": "Number of players is never linked to the change in sharing.",
      "D": "Prior experiments are not mentioned as a factor."
    }
  },
  {
    "id": "inferences-t3-08",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "The following text is from a paper on climate history.\n\nLayers of sediment at the lake bottom alternate between dark, organic-rich bands and pale, mineral bands. In cores from warmer periods elsewhere, the dark bands are thick; in cores from cooler periods, they are thin. In this lake's core, the dark bands grow steadily thinner from bottom to top. The most reasonable conclusion is that, over the time the core represents, the local climate ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "grew steadily warmer."
      },
      {
        "letter": "B",
        "text": "grew steadily cooler."
      },
      {
        "letter": "C",
        "text": "stayed exactly the same."
      },
      {
        "letter": "D",
        "text": "alternated rapidly between warm and cool."
      }
    ],
    "answer": "B",
    "explanation": "Thin dark bands indicate cooler periods, and the bands thin from bottom (older) to top (newer), so the climate cooled over time. B follows.",
    "whyWrong": {
      "A": "Warming would thicken the dark bands upward, the opposite of what is seen.",
      "C": "The bands change, so the climate did not stay the same.",
      "D": "A steady thinning indicates a gradual trend, not rapid alternation."
    }
  },
  {
    "id": "inferences-t3-09",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "The following text is from a discussion of economics.\n\nWhen a bridge toll was introduced on one of two parallel routes into the city, traffic on the tolled bridge fell while traffic on the free bridge rose by almost the same amount. Total traffic entering the city, however, barely changed. The most reasonable conclusion is that the toll mainly ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "reduced the number of people traveling into the city."
      },
      {
        "letter": "B",
        "text": "shifted drivers from one route to the other rather than reducing overall travel."
      },
      {
        "letter": "C",
        "text": "increased the total number of cars entering the city."
      },
      {
        "letter": "D",
        "text": "had no effect on either bridge."
      }
    ],
    "answer": "B",
    "explanation": "Traffic dropped on the tolled bridge and rose almost equally on the free one, while total traffic held steady, so drivers rerouted rather than stopped traveling. B follows.",
    "whyWrong": {
      "A": "Total traffic barely changed, so overall travel was not reduced.",
      "C": "Total traffic held steady, not increased.",
      "D": "Each bridge's traffic changed noticeably, so there was an effect."
    }
  },
  {
    "id": "inferences-t3-10",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "The following text is from a biology study.\n\nA cave-dwelling fish species has no functioning eyes, yet it belongs to a family whose other members, all living in sunlit waters, see well. The cave species still carries the same genes for building eyes, but those genes are switched off early in development. The most reasonable conclusion is that the cave fish's eyelessness ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "shows it never had ancestors with working eyes."
      },
      {
        "letter": "B",
        "text": "arose from sighted ancestors whose eye-building genes became inactive."
      },
      {
        "letter": "C",
        "text": "means it is unrelated to the sighted members of its family."
      },
      {
        "letter": "D",
        "text": "proves the eye genes have been completely lost."
      }
    ],
    "answer": "B",
    "explanation": "The fish still carries eye genes, now switched off, and its relatives see, so it descends from sighted ancestors whose genes were silenced. B follows.",
    "whyWrong": {
      "A": "Retaining eye genes and sighted relatives implies sighted ancestors.",
      "C": "It belongs to the same family, so it is related to the sighted members.",
      "D": "The genes are switched off, not lost—they are still present."
    }
  },
  {
    "id": "inferences-t3-11",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "The following text is from a study of reading habits.\n\nA library found that when it moved popular new releases from a back shelf to a table by the entrance, borrowing of those titles rose sharply. Borrowing of older titles, left in their usual places, did not fall. The total number of items borrowed increased. The most reasonable conclusion is that the new placement ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "drew borrowers away from older titles."
      },
      {
        "letter": "B",
        "text": "encouraged additional borrowing rather than merely redirecting it."
      },
      {
        "letter": "C",
        "text": "had no measurable effect on borrowing."
      },
      {
        "letter": "D",
        "text": "reduced the library's total circulation."
      }
    ],
    "answer": "B",
    "explanation": "New-release borrowing rose, older-title borrowing held steady, and total borrowing went up, so the placement added borrowing rather than shifting it. B follows.",
    "whyWrong": {
      "A": "Older-title borrowing did not fall, so borrowers were not drawn away.",
      "C": "Borrowing of the moved titles rose sharply, so there was an effect.",
      "D": "Total borrowing increased, not decreased."
    }
  },
  {
    "id": "inferences-t3-12",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "text": "The following text is from a discussion of perception.\n\nWhen listeners heard a recording of a spoken sentence with one sound electronically replaced by a cough, they insisted they had heard the missing sound clearly and could not tell which one had been covered. The effect vanished only when the missing sound fell at a word boundary the listeners did not expect. The most reasonable conclusion is that listeners ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "cannot understand speech that contains any background noise."
      },
      {
        "letter": "B",
        "text": "use their expectations about words to fill in sounds they do not actually hear."
      },
      {
        "letter": "C",
        "text": "hear every individual sound in a sentence with perfect accuracy."
      },
      {
        "letter": "D",
        "text": "ignore the meaning of sentences while listening."
      }
    ],
    "answer": "B",
    "explanation": "Listeners 'heard' a sound that was replaced by a cough, and the effect broke only against their expectations, so they fill in sounds using what they expect. B follows.",
    "whyWrong": {
      "A": "They understood the sentence despite the cough, so noise did not block comprehension.",
      "C": "They failed to notice a missing sound, so perception was not perfectly accurate.",
      "D": "Relying on word expectations shows they attend to meaning, not ignore it."
    }
  },
  {
    "id": "central-ideas-t2-13",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "text": "The following text is from an article about rivers.\n\nEngineers once straightened winding rivers to speed drainage and reclaim land. The straightened channels did move water faster—so fast, in fact, that floods downstream grew worse, and the fish that depended on slow bends and shallow pools disappeared. Increasingly, restoration crews are now paid to put the curves back.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Straightening rivers brought unintended harms that are now being reversed."
      },
      {
        "letter": "B",
        "text": "Rivers should never be altered by people."
      },
      {
        "letter": "C",
        "text": "Fish prefer fast-moving water."
      },
      {
        "letter": "D",
        "text": "Straightened rivers drain land more slowly than winding ones."
      }
    ],
    "answer": "A",
    "explanation": "The text shows straightening caused worse floods and fish loss, leading crews to restore the curves. A captures the harm-and-reversal arc.",
    "whyWrong": {
      "B": "The text describes fixing past changes, not banning all alteration.",
      "C": "The fish depended on slow bends, not fast water.",
      "D": "Straightened channels drained faster, not slower."
    }
  },
  {
    "id": "inferences-t2-13",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "text": "The following text is from a report on retail.\n\nA bookstore placed identical tables of discounted books at its front and back. Shoppers cleared the front table by midday, while the back table stayed nearly full. Staff confirmed the two tables held the same titles at the same prices. The most reasonable conclusion is that the books' location ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "affected how quickly they sold."
      },
      {
        "letter": "B",
        "text": "determined their prices."
      },
      {
        "letter": "C",
        "text": "changed which titles they were."
      },
      {
        "letter": "D",
        "text": "had no effect on sales."
      }
    ],
    "answer": "A",
    "explanation": "Identical books sold faster at the front than the back, so placement shaped how quickly they sold. A follows.",
    "whyWrong": {
      "B": "Staff confirmed prices were the same at both tables.",
      "C": "The titles were identical, so location did not change them.",
      "D": "The front table cleared while the back stayed full, so location did have an effect."
    }
  },
  {
    "id": "evidence-quant-t2-13",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "text": "A survey of 400 commuters found that 240 drive alone, 80 carpool, 60 take transit, and 20 bike.\n\nWhich choice most effectively uses the data to support the claim that most commuters drive alone?",
    "choices": [
      {
        "letter": "A",
        "text": "Of the 400 commuters, 240—more than half—drive alone."
      },
      {
        "letter": "B",
        "text": "Eighty commuters carpool."
      },
      {
        "letter": "C",
        "text": "Twenty commuters bike to work."
      },
      {
        "letter": "D",
        "text": "The survey included 400 commuters."
      }
    ],
    "answer": "A",
    "explanation": "'Most' means over half. A shows 240 of 400 drive alone, a clear majority.",
    "whyWrong": {
      "B": "The carpool figure does not show driving alone is the majority.",
      "C": "Bikers are the smallest group, irrelevant to the claim.",
      "D": "The total sample size does not identify the majority behavior."
    }
  },
  {
    "id": "evidence-text-t3-13",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "text": "The following text is from a research proposal.\n\nA team hypothesizes that a plant releases a chemical into the soil that stops rival species from sprouting nearby, rather than simply outcompeting them for light and water.\n\nWhich finding, if true, would most strongly support the team's hypothesis?",
    "choices": [
      {
        "letter": "A",
        "text": "Rival seeds fail to sprout even in well-lit, well-watered soil taken from around the plant, but sprout normally once that soil is rinsed clean."
      },
      {
        "letter": "B",
        "text": "The plant grows taller than its rivals."
      },
      {
        "letter": "C",
        "text": "The plant has deep roots that reach abundant water."
      },
      {
        "letter": "D",
        "text": "Rival species grow well far from the plant."
      }
    ],
    "answer": "A",
    "explanation": "A soil-borne chemical predicts that untreated soil suppresses sprouting even with light and water, while rinsing removes the effect. A isolates exactly that, supporting the chemical hypothesis over mere competition.",
    "whyWrong": {
      "B": "Greater height points to competition for light, the alternative the team wants to rule out.",
      "C": "Deep roots suggest competition for water, not a chemical.",
      "D": "Rivals thriving far away is consistent with either explanation and does not single out a chemical."
    }
  },
  {
    "id": "central-ideas-t1-bp01",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from an article about penguins.\n\nEmperor penguins survive the Antarctic winter by huddling together in tight groups of thousands. Birds on the cold outer edge slowly shuffle inward, while those in the warm center move out, so that over hours every penguin takes a turn being sheltered. No single bird stays exposed for long.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Emperor penguins share the burden of the cold by constantly rotating positions in their huddle."
      },
      {
        "letter": "B",
        "text": "Emperor penguins are the largest penguin species."
      },
      {
        "letter": "C",
        "text": "Antarctica is the coldest place on Earth."
      },
      {
        "letter": "D",
        "text": "Penguins cannot survive winter alone."
      }
    ],
    "answer": "A",
    "explanation": "The passage centers on the huddle's rotation so every penguin takes a turn sheltered. A captures that.",
    "whyWrong": {
      "B": "Their size is never mentioned.",
      "C": "Antarctica's temperature is not the focus.",
      "D": "The text describes the huddle, not a claim about solo survival."
    }
  },
  {
    "id": "central-ideas-t1-bp02",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a community newsletter.\n\nWhen the town added a free tool-lending shed to the park, some doubted anyone would use it. A year on, the shed lends out drills, ladders, and mowers almost daily, and neighbors say it has saved them from buying tools they would use only once.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The tool-lending shed, once doubted, has become a well-used community resource."
      },
      {
        "letter": "B",
        "text": "Everyone in town owns a drill."
      },
      {
        "letter": "C",
        "text": "The park was too small for a shed."
      },
      {
        "letter": "D",
        "text": "Mowers are the most borrowed tool."
      }
    ],
    "answer": "A",
    "explanation": "The text follows the shed from doubt to daily use that saves neighbors money. A states that arc.",
    "whyWrong": {
      "B": "The text says neighbors avoid buying tools, not that all own them.",
      "C": "No space problem is mentioned.",
      "D": "No single tool is named the most borrowed."
    }
  },
  {
    "id": "central-ideas-t1-bp03",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is adapted from a short story.\n\nEvery day after school, Sam walked the long way home to pass the shuttered theater. He liked to imagine the marquee lit again, the lobby full. He never told anyone; the daydream felt too fragile to share, as if speaking it aloud might make its unlikeliness real.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Sam quietly cherishes a hopeful daydream he is afraid to expose to doubt."
      },
      {
        "letter": "B",
        "text": "Sam wants to buy the old theater."
      },
      {
        "letter": "C",
        "text": "Sam dislikes walking home from school."
      },
      {
        "letter": "D",
        "text": "The theater is about to reopen."
      }
    ],
    "answer": "A",
    "explanation": "Sam privately treasures his imagined revival of the theater, unwilling to risk it by speaking it. A captures that.",
    "whyWrong": {
      "B": "He imagines the theater lit, not buying it.",
      "C": "He chooses the long way by the theater; he does not dislike the walk.",
      "D": "The theater is shuttered; no reopening is stated."
    }
  },
  {
    "id": "central-ideas-t1-bp04",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a science article.\n\nSome plants defend themselves without thorns or poison. When caterpillars begin chewing a tomato leaf, the plant releases airborne chemicals that drift to its neighbors. Warned, those plants ramp up their own defenses before the caterpillars ever arrive.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Some plants warn nearby plants of attack by releasing airborne chemical signals."
      },
      {
        "letter": "B",
        "text": "Caterpillars prefer tomato leaves to all others."
      },
      {
        "letter": "C",
        "text": "Thorns are the most common plant defense."
      },
      {
        "letter": "D",
        "text": "Tomato plants cannot be harmed by insects."
      }
    ],
    "answer": "A",
    "explanation": "The passage centers on plants signaling neighbors chemically so they can prepare defenses. A captures that.",
    "whyWrong": {
      "B": "No caterpillar preference is ranked.",
      "C": "The text is about chemical, not thorn, defenses.",
      "D": "The caterpillars do chew the leaves, so plants can be harmed."
    }
  },
  {
    "id": "central-ideas-t1-bp05",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a profile of an athlete.\n\nBefore every match, tennis player Lena runs through the same short routine: three deep breaths, a glance at the net, a bounce of the ball. She says the ritual does not calm her nerves so much as give them somewhere to go, turning restless energy into focus.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Lena's pre-match ritual channels her nervous energy into focus rather than erasing it."
      },
      {
        "letter": "B",
        "text": "Lena is the top-ranked tennis player."
      },
      {
        "letter": "C",
        "text": "Tennis matches always begin with a serve."
      },
      {
        "letter": "D",
        "text": "Lena never feels nervous before a match."
      }
    ],
    "answer": "A",
    "explanation": "Lena says the ritual gives her nerves 'somewhere to go,' turning energy into focus. A captures that.",
    "whyWrong": {
      "B": "Her ranking is never mentioned.",
      "C": "The rules of tennis are not the point.",
      "D": "She has nerves; the ritual channels them."
    }
  },
  {
    "id": "central-ideas-t2-bp01",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a history of technology.\n\nThe first photographs took so long to expose that anyone who moved simply vanished from the image. Busy streets appeared eerily empty, their crowds blurred into nothing. What looks to us like a record of deserted cities was really a record of how slow the camera was.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Early photos of 'empty' streets reflect the camera's slowness, not truly deserted cities."
      },
      {
        "letter": "B",
        "text": "Early cities had very few residents."
      },
      {
        "letter": "C",
        "text": "Photography was invented to record crowds."
      },
      {
        "letter": "D",
        "text": "Modern cameras are more expensive than early ones."
      }
    ],
    "answer": "A",
    "explanation": "The text explains that long exposures erased moving people, so 'empty' streets show the camera's limits. A captures that.",
    "whyWrong": {
      "B": "The streets were busy; the people were blurred out.",
      "C": "Photography's purpose is not the point.",
      "D": "Cost is never discussed."
    }
  },
  {
    "id": "central-ideas-t2-bp02",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an article about oceans.\n\nThe deep sea was long assumed to be a lifeless desert, too dark and cold for much to survive. Then submersibles found entire communities clustered around hot vents on the seafloor, thriving on chemical energy instead of sunlight. Life, it turned out, had simply found another way.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The discovery of vent communities overturned the assumption that the deep sea is lifeless."
      },
      {
        "letter": "B",
        "text": "Sunlight reaches the deepest parts of the ocean."
      },
      {
        "letter": "C",
        "text": "Submersibles are expensive to build."
      },
      {
        "letter": "D",
        "text": "Hot vents are found only in shallow water."
      }
    ],
    "answer": "A",
    "explanation": "The passage overturns the 'lifeless desert' assumption with vent communities living on chemical energy. A captures that.",
    "whyWrong": {
      "B": "The vents thrive without sunlight, which does not reach the deep.",
      "C": "Submersible cost is not discussed.",
      "D": "The vents are on the seafloor, not in shallow water."
    }
  },
  {
    "id": "central-ideas-t2-bp03",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on cities.\n\nA good sidewalk does more than move people from place to place. Where it is wide and shaded, neighbors linger, children play, and vendors set up carts, so the walk itself becomes a kind of public room. The street's life, in other words, is built as much by how people pause as by how they pass.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "A well-designed sidewalk supports public life by inviting people to linger, not just pass through."
      },
      {
        "letter": "B",
        "text": "Sidewalks should be as narrow as possible."
      },
      {
        "letter": "C",
        "text": "Street vendors should be banned from sidewalks."
      },
      {
        "letter": "D",
        "text": "Children play only on quiet streets."
      }
    ],
    "answer": "A",
    "explanation": "The text argues a good sidewalk becomes a 'public room' where people pause, building street life. A captures that.",
    "whyWrong": {
      "B": "It praises wide sidewalks, not narrow ones.",
      "C": "Vendors are part of the lively sidewalk, not banned.",
      "D": "No claim limits children's play to quiet streets."
    }
  },
  {
    "id": "central-ideas-t2-bp04",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a study of animal behavior.\n\nRats will free a trapped companion even when doing so brings no reward and requires learning to open a difficult latch. In experiments, they often free the trapped rat before helping themselves to a pile of chocolate nearby. Such behavior suggests concern for a companion's distress, not merely a drive for food.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Rats' willingness to free a trapped companion suggests they respond to another's distress."
      },
      {
        "letter": "B",
        "text": "Rats prefer chocolate to all other foods."
      },
      {
        "letter": "C",
        "text": "Rats cannot learn to open latches."
      },
      {
        "letter": "D",
        "text": "Trapped rats never escape on their own."
      }
    ],
    "answer": "A",
    "explanation": "The passage centers on rats freeing companions even over food, suggesting concern for distress. A captures that.",
    "whyWrong": {
      "B": "Chocolate is an example, not a ranked preference.",
      "C": "The rats do learn the latch, contradicting this.",
      "D": "The point is being freed by others, not solo escape."
    }
  },
  {
    "id": "central-ideas-t2-bp05",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is adapted from a novel.\n\nThe old fisherman no longer went out for the catch; his nets had rotted and his boat leaked. Still, each dawn he walked to the dock and sat, watching the younger crews set out. He was not mourning the sea, his granddaughter realized, but keeping an appointment with it.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The fisherman's daily visits to the dock express a lasting bond with the sea rather than grief."
      },
      {
        "letter": "B",
        "text": "The fisherman plans to repair his boat."
      },
      {
        "letter": "C",
        "text": "The younger crews resent the old fisherman."
      },
      {
        "letter": "D",
        "text": "The fisherman has forgotten how to fish."
      }
    ],
    "answer": "A",
    "explanation": "His granddaughter sees his visits as 'keeping an appointment' with the sea—an enduring bond, not mourning. A captures that.",
    "whyWrong": {
      "B": "His boat leaks, but no repair plan is mentioned.",
      "C": "The crews' feelings are not described.",
      "D": "Nothing suggests he has forgotten how to fish."
    }
  },
  {
    "id": "central-ideas-t3-bp01",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on measurement.\n\nWe assume that to measure something is simply to observe it, as if the ruler leaves the world untouched. But choosing what to count quietly shapes what we come to value: a school judged only by test scores will teach to the test, and a forest priced only for timber will be seen as lumber. The measure, over time, remakes the thing measured.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "How we choose to measure something can reshape what we value and how we treat it."
      },
      {
        "letter": "B",
        "text": "Test scores are the fairest way to judge schools."
      },
      {
        "letter": "C",
        "text": "Forests should be valued only for their timber."
      },
      {
        "letter": "D",
        "text": "Measurement is always perfectly objective."
      }
    ],
    "answer": "A",
    "explanation": "The essay argues that what we measure shapes what we value and how we act, 'remaking the thing measured.' A captures that.",
    "whyWrong": {
      "B": "The text warns against judging schools by scores alone.",
      "C": "The timber example is a warning, not an endorsement.",
      "D": "The text argues measurement is not neutral, the opposite of D."
    }
  },
  {
    "id": "central-ideas-t3-bp02",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a work of criticism.\n\nReaders often praise the novel's villain as its most 'realistic' character, and the compliment reveals more than they intend. We call realistic whatever confirms our existing sense of how people behave; the hero's stubborn decency, being rarer, strikes us as contrived. Realism, so used, is less a measure of truth than a mirror of expectation.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Judgments of what is 'realistic' often reflect readers' expectations more than any objective truth."
      },
      {
        "letter": "B",
        "text": "The novel's villain is poorly written."
      },
      {
        "letter": "C",
        "text": "Heroes are always more believable than villains."
      },
      {
        "letter": "D",
        "text": "Realistic fiction is better than fantasy."
      }
    ],
    "answer": "A",
    "explanation": "The critic argues 'realistic' tracks what confirms readers' expectations, not truth—'a mirror of expectation.' A captures that.",
    "whyWrong": {
      "B": "The villain is called realistic; the point is about the label, not the writing.",
      "C": "The text says decency strikes readers as contrived, not more believable.",
      "D": "Fantasy is never compared to realism."
    }
  },
  {
    "id": "central-ideas-t3-bp03",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on history.\n\nThe surviving letters of the era were written almost entirely by the literate few, and so historians long told the period's story in their voice alone. Yet the silence of the unlettered is itself a kind of evidence: it marks not an absence of lives but an absence of records, and a history that mistakes the one for the other will always mislead.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Gaps in the historical record reflect who could write, not the lives that went unrecorded, and must be read with care."
      },
      {
        "letter": "B",
        "text": "Only literate people led meaningful lives in the period."
      },
      {
        "letter": "C",
        "text": "Letters are the least reliable historical source."
      },
      {
        "letter": "D",
        "text": "Historians should ignore written records entirely."
      }
    ],
    "answer": "A",
    "explanation": "The essay argues the silence of the unlettered marks missing records, not missing lives, and warns against confusing the two. A captures that.",
    "whyWrong": {
      "B": "The text insists the unrecorded had lives too, the opposite of B.",
      "C": "Letters are not called least reliable; the issue is who wrote them.",
      "D": "It urges careful reading of records, not ignoring them."
    }
  },
  {
    "id": "central-ideas-t3-bp04",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on invention.\n\nWe honor the breakthrough and forget the maintenance, though the second may matter more. A bridge is designed once and repaired for a century; a vaccine is discovered once and distributed a billion times. The dramatic act of creation depends, quietly, on the undramatic labor that keeps a creation working.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "The unglamorous work of maintaining inventions is as vital as the celebrated act of creating them."
      },
      {
        "letter": "B",
        "text": "Bridges are more important than vaccines."
      },
      {
        "letter": "C",
        "text": "Breakthroughs are the only work that matters."
      },
      {
        "letter": "D",
        "text": "Maintenance is easier than invention."
      }
    ],
    "answer": "A",
    "explanation": "The essay argues that maintenance, though undramatic, is as vital as creation. A captures that.",
    "whyWrong": {
      "B": "Bridges and vaccines are parallel examples, not ranked.",
      "C": "The text elevates maintenance alongside breakthroughs, opposing C.",
      "D": "Ease is never compared."
    }
  },
  {
    "id": "central-ideas-t3-bp05",
    "domain": "rw-ii",
    "skill": "central-ideas",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an essay on nature writing.\n\nTo name a bird is to risk no longer seeing it. Once the warbler is filed under its label, the eye slides past, satisfied. The finest nature writers work against this ease, using the name only as a doorway and then lingering past it, until the familiar creature grows strange and vivid again.\n\nWhich choice best states the main idea of the text?",
    "choices": [
      {
        "letter": "A",
        "text": "Naming can dull attention, and good nature writing works to restore fresh, close observation."
      },
      {
        "letter": "B",
        "text": "Birds should not be given names."
      },
      {
        "letter": "C",
        "text": "Warblers are the hardest birds to identify."
      },
      {
        "letter": "D",
        "text": "Nature writing should avoid all description."
      }
    ],
    "answer": "A",
    "explanation": "The essay warns that a name can stop us from truly seeing, and praises writers who look past the label. A captures that.",
    "whyWrong": {
      "B": "The text uses names as a 'doorway,' not something to abolish.",
      "C": "Warbler is an example; no difficulty ranking is made.",
      "D": "It praises lingering description, not avoiding it."
    }
  },
  {
    "id": "evidence-text-t1-bp01",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A student claims that a classroom's new standing desks have made students more attentive during lessons.\n\nWhich finding, if true, would most directly support the student's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "Teachers observed that students at the standing desks were off-task less often than before the desks were added."
      },
      {
        "letter": "B",
        "text": "The standing desks are made of oak."
      },
      {
        "letter": "C",
        "text": "The desks cost more than regular desks."
      },
      {
        "letter": "D",
        "text": "The classroom was repainted the same week."
      }
    ],
    "answer": "A",
    "explanation": "The claim is about attentiveness. Teachers seeing less off-task behavior after the desks directly supports it.",
    "whyWrong": {
      "B": "The desks' material does not measure attentiveness.",
      "C": "Cost is unrelated to whether students are more attentive.",
      "D": "Repainting is a separate change, not evidence about attention."
    }
  },
  {
    "id": "evidence-text-t1-bp02",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A gardener claims that watering her plants early in the morning helps them survive hot afternoons better than watering at noon.\n\nWhich finding, if true, would most directly support the gardener's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "Plants watered in the morning wilted less on hot afternoons than identical plants watered at noon."
      },
      {
        "letter": "B",
        "text": "She uses a green watering can."
      },
      {
        "letter": "C",
        "text": "Mornings are quieter in her garden."
      },
      {
        "letter": "D",
        "text": "She grows both flowers and vegetables."
      }
    ],
    "answer": "A",
    "explanation": "Comparing morning-watered plants to noon-watered ones and finding less wilting directly supports the claim.",
    "whyWrong": {
      "B": "The watering can's color is irrelevant.",
      "C": "Quiet mornings do not measure plant survival.",
      "D": "The variety of plants does not address watering time."
    }
  },
  {
    "id": "evidence-text-t1-bp03",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A store owner claims that playing slow music in the shop encourages customers to browse longer.\n\nWhich finding, if true, would most directly support the owner's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "On days with slow music, customers spent more time in the shop than on days with fast music."
      },
      {
        "letter": "B",
        "text": "The shop sells mostly clothing."
      },
      {
        "letter": "C",
        "text": "The speakers were installed last year."
      },
      {
        "letter": "D",
        "text": "The owner enjoys slow music."
      }
    ],
    "answer": "A",
    "explanation": "The claim is that slow music makes customers browse longer. Longer visits on slow-music days directly support it.",
    "whyWrong": {
      "B": "What the shop sells does not measure browsing time.",
      "C": "When speakers were installed is irrelevant.",
      "D": "The owner's taste is not evidence about customers."
    }
  },
  {
    "id": "evidence-text-t1-bp04",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A teacher claims that giving students a short break every twenty minutes helps them remember more of a lesson.\n\nWhich finding, if true, would most directly support the teacher's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "Students who took short breaks scored higher on a later quiz than students taught the same lesson without breaks."
      },
      {
        "letter": "B",
        "text": "The classroom has large windows."
      },
      {
        "letter": "C",
        "text": "The lesson lasted about an hour."
      },
      {
        "letter": "D",
        "text": "Students like taking breaks."
      }
    ],
    "answer": "A",
    "explanation": "The claim is about remembering more. Higher quiz scores for the break group directly support it.",
    "whyWrong": {
      "B": "The windows do not measure memory.",
      "C": "The lesson's length is not evidence about recall.",
      "D": "Enjoying breaks is not the same as remembering more."
    }
  },
  {
    "id": "evidence-text-t1-bp05",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A coach claims that a team's new stretching routine has reduced muscle soreness after games.\n\nWhich finding, if true, would most directly support the coach's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "Players reported much less soreness after games once the stretching routine began than in earlier games."
      },
      {
        "letter": "B",
        "text": "The stretching routine takes fifteen minutes."
      },
      {
        "letter": "C",
        "text": "The team plays on a grass field."
      },
      {
        "letter": "D",
        "text": "The players wear matching uniforms."
      }
    ],
    "answer": "A",
    "explanation": "The claim is about less soreness. Players reporting less soreness after the routine began directly supports it.",
    "whyWrong": {
      "B": "The routine's length is not evidence about soreness.",
      "C": "The field surface is a separate factor.",
      "D": "Uniforms are unrelated to muscle soreness."
    }
  },
  {
    "id": "evidence-text-t1-bp06",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A researcher claims that adding birdhouses to a park has increased the number of songbirds living there.\n\nWhich finding, if true, would most directly support the researcher's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "Bird counts in the park rose after the birdhouses were installed and stayed higher through the season."
      },
      {
        "letter": "B",
        "text": "The birdhouses are painted blue."
      },
      {
        "letter": "C",
        "text": "The park has a walking path."
      },
      {
        "letter": "D",
        "text": "Volunteers built the birdhouses."
      }
    ],
    "answer": "A",
    "explanation": "The claim is about more songbirds. A rise in bird counts after installing the birdhouses directly supports it.",
    "whyWrong": {
      "B": "The paint color does not measure bird numbers.",
      "C": "The walking path is unrelated to songbird counts.",
      "D": "Who built the houses does not show more birds live there."
    }
  },
  {
    "id": "evidence-text-t2-bp01",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a report on urban wildlife.\n\nA researcher argues that a species of city-dwelling fox has shifted to hunting mostly at night to avoid contact with people.\n\nWhich finding, if true, would most strongly support the researcher's argument?",
    "choices": [
      {
        "letter": "A",
        "text": "Motion cameras show the foxes are active almost entirely after dark, when streets are quietest, and rest during busy daytime hours."
      },
      {
        "letter": "B",
        "text": "The foxes have reddish fur."
      },
      {
        "letter": "C",
        "text": "The city has many parks."
      },
      {
        "letter": "D",
        "text": "Foxes are related to dogs."
      }
    ],
    "answer": "A",
    "explanation": "The argument is that the foxes hunt at night to avoid people. Cameras showing they are active when streets are quietest directly supports it.",
    "whyWrong": {
      "B": "Fur color does not address hunting time.",
      "C": "The number of parks does not show a shift to night hunting.",
      "D": "The foxes' family tree is irrelevant to the claim."
    }
  },
  {
    "id": "evidence-text-t2-bp02",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a student's report.\n\nThe student argues that an ancient people stored grain to survive irregular harvests rather than for daily use.\n\nWhich finding, if true, would most strongly support the student's argument?",
    "choices": [
      {
        "letter": "A",
        "text": "The largest storage pits were sealed and untouched for long stretches, opened only in years when nearby harvests appear to have failed."
      },
      {
        "letter": "B",
        "text": "The people made pottery in many shapes."
      },
      {
        "letter": "C",
        "text": "The settlement was near a river."
      },
      {
        "letter": "D",
        "text": "The grain was a type of barley."
      }
    ],
    "answer": "A",
    "explanation": "Storing for lean years, not daily use, predicts sealed pits opened only in failed-harvest years. A matches that pattern.",
    "whyWrong": {
      "B": "Pottery shapes do not address why grain was stored.",
      "C": "Being near a river does not show storage was for lean years.",
      "D": "The type of grain does not reveal the purpose of storage."
    }
  },
  {
    "id": "evidence-text-t2-bp03",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a review of a study.\n\nA nutritionist claims that a new bread keeps blood sugar steadier after eating than an ordinary white bread with the same calories.\n\nWhich finding, if true, would most strongly support the nutritionist's claim?",
    "choices": [
      {
        "letter": "A",
        "text": "In a trial, people who ate the new bread had smaller blood-sugar spikes afterward than those given the white bread."
      },
      {
        "letter": "B",
        "text": "The new bread is sold in more stores."
      },
      {
        "letter": "C",
        "text": "The new bread has a darker crust."
      },
      {
        "letter": "D",
        "text": "The new bread is baked in smaller loaves."
      }
    ],
    "answer": "A",
    "explanation": "The claim is about steadier blood sugar at equal calories. Smaller blood-sugar spikes after the new bread directly support it.",
    "whyWrong": {
      "B": "Where it is sold does not measure blood sugar.",
      "C": "Crust color does not address blood-sugar response.",
      "D": "Loaf size is unrelated to the claim."
    }
  },
  {
    "id": "evidence-text-t2-bp04",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a literary discussion.\n\nA critic argues that a playwright's later plays gave far more lines to women than her early plays did.\n\nWhich finding, if true, would most strongly support the critic's argument?",
    "choices": [
      {
        "letter": "A",
        "text": "A line count shows female characters speak a small fraction of the words in the early plays but roughly half in the later ones."
      },
      {
        "letter": "B",
        "text": "The later plays were staged in larger theaters."
      },
      {
        "letter": "C",
        "text": "The playwright wrote in more than one language."
      },
      {
        "letter": "D",
        "text": "The early plays had more scenes."
      }
    ],
    "answer": "A",
    "explanation": "A shift toward women's lines should show in the counts. Female characters' share rising from a fraction to about half directly supports it.",
    "whyWrong": {
      "B": "Theater size does not measure who speaks.",
      "C": "The language used does not address line distribution.",
      "D": "The number of scenes does not show who has the lines."
    }
  },
  {
    "id": "evidence-text-t2-bp05",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an environmental report.\n\nScientists claim that restoring a stream's natural bends has slowed its water enough to reduce erosion of the banks downstream.\n\nWhich finding, if true, would most strongly support the scientists' claim?",
    "choices": [
      {
        "letter": "A",
        "text": "After the bends were restored, water speed dropped and the downstream banks lost far less soil than in previous years."
      },
      {
        "letter": "B",
        "text": "The stream is home to several fish species."
      },
      {
        "letter": "C",
        "text": "The project was funded by the county."
      },
      {
        "letter": "D",
        "text": "The stream flows year-round."
      }
    ],
    "answer": "A",
    "explanation": "The claim links restored bends to slower water and less erosion. Slower water plus less soil loss downstream directly supports it.",
    "whyWrong": {
      "B": "Fish species do not measure erosion.",
      "C": "Funding source is unrelated to the effect on banks.",
      "D": "That it flows year-round does not show reduced erosion."
    }
  },
  {
    "id": "evidence-text-t2-bp06",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a study of learning.\n\nEducators propose that students who explain their reasoning aloud while solving problems understand the material more deeply than those who solve silently.\n\nWhich finding, if true, would most strongly support the educators' proposal?",
    "choices": [
      {
        "letter": "A",
        "text": "Students who explained their steps aloud solved unfamiliar problems of the same type better afterward than students who worked silently."
      },
      {
        "letter": "B",
        "text": "Students who explained aloud finished slightly slower."
      },
      {
        "letter": "C",
        "text": "The problems were printed on colored paper."
      },
      {
        "letter": "D",
        "text": "Both groups had the same teacher."
      }
    ],
    "answer": "A",
    "explanation": "Deeper understanding shows in solving new problems of the same type. The explaining group's better transfer directly supports the proposal.",
    "whyWrong": {
      "B": "Working slower does not show deeper understanding.",
      "C": "Paper color is irrelevant.",
      "D": "A shared teacher sets up a fair test but does not itself show deeper understanding."
    }
  },
  {
    "id": "evidence-text-t3-bp01",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a research proposal.\n\nA team hypothesizes that a plant's brightly colored leaves warn insects that it is toxic, rather than attracting them.\n\nWhich finding, if true, would most strongly support the team's hypothesis?",
    "choices": [
      {
        "letter": "A",
        "text": "Insects that sampled the bright leaves grew ill and afterward avoided leaves of that color, while dull-leaved plants of the species were eaten freely."
      },
      {
        "letter": "B",
        "text": "The bright color fades when the leaves dry."
      },
      {
        "letter": "C",
        "text": "The plant grows taller in full sun."
      },
      {
        "letter": "D",
        "text": "The plant flowers in early spring."
      }
    ],
    "answer": "A",
    "explanation": "A warning function predicts insects learn to avoid the color after a toxic experience, while non-warning plants are eaten. A shows exactly that, supporting the hypothesis.",
    "whyWrong": {
      "B": "Fading when dry does not address the warning function.",
      "C": "Growth in sun is unrelated to insect avoidance.",
      "D": "Flowering time does not bear on the leaf-color claim."
    }
  },
  {
    "id": "evidence-text-t3-bp02",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a historian's argument.\n\nA historian contends that a port town's wealth came less from the spices it was famous for than from the ships it built and repaired.\n\nWhich finding, if true, would most strongly support the historian's contention?",
    "choices": [
      {
        "letter": "A",
        "text": "Town ledgers show income from shipyards dwarfed spice revenue and held steady even in years when the spice trade collapsed."
      },
      {
        "letter": "B",
        "text": "The town was famous across the region for its spices."
      },
      {
        "letter": "C",
        "text": "Spice merchants built the largest houses in town."
      },
      {
        "letter": "D",
        "text": "The town's harbor was unusually deep."
      }
    ],
    "answer": "A",
    "explanation": "The claim is that shipbuilding, not spices, drove wealth. Shipyard income dwarfing spice revenue and surviving spice-trade collapses directly supports it.",
    "whyWrong": {
      "B": "Fame for spices, if anything, cuts against the claim.",
      "C": "Grand merchant houses suggest spice wealth, weakening the claim.",
      "D": "A deep harbor does not identify the source of wealth."
    }
  },
  {
    "id": "evidence-text-t3-bp03",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a psychology paper.\n\nResearchers suggest that people remember stories better when the events are told out of order, because the effort of reassembling the sequence deepens attention.\n\nWhich result, if observed, would most strongly support the researchers' suggestion?",
    "choices": [
      {
        "letter": "A",
        "text": "Participants who read a scrambled version of a story later recalled its events more accurately than those who read the same story in order."
      },
      {
        "letter": "B",
        "text": "Participants preferred the version told in order."
      },
      {
        "letter": "C",
        "text": "The scrambled version took longer to read."
      },
      {
        "letter": "D",
        "text": "Both versions contained the same number of words."
      }
    ],
    "answer": "A",
    "explanation": "The suggestion is that out-of-order telling improves memory. Better recall for the scrambled version directly supports it.",
    "whyWrong": {
      "B": "Preference is not the same as remembering better.",
      "C": "Longer reading time does not show better memory.",
      "D": "Equal word count sets up a fair test but does not itself show which was remembered better."
    }
  },
  {
    "id": "evidence-text-t3-bp04",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a study of migration.\n\nEcologists propose that a fish species times its upstream migration by water temperature rather than by the length of the day.\n\nWhich result, if observed, would most strongly support the ecologists' proposal?",
    "choices": [
      {
        "letter": "A",
        "text": "In a year when the river warmed unusually early, the fish migrated early too, even though day length was unchanged from other years."
      },
      {
        "letter": "B",
        "text": "The fish travel in large schools."
      },
      {
        "letter": "C",
        "text": "The fish are silver in color."
      },
      {
        "letter": "D",
        "text": "The river is fed by mountain snowmelt."
      }
    ],
    "answer": "A",
    "explanation": "If temperature, not day length, cues migration, an early warm-up should shift timing while day length stays fixed. A shows exactly that, isolating temperature.",
    "whyWrong": {
      "B": "Schooling does not distinguish temperature from day length.",
      "C": "Color is irrelevant to the timing cue.",
      "D": "The river's water source does not test the cue."
    }
  },
  {
    "id": "evidence-text-t3-bp05",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an economics study.\n\nAn economist argues that posting calorie counts on menus changes what people order only when the counts appear right next to the price, where diners are already looking.\n\nWhich finding, if true, would most strongly support the economist's argument?",
    "choices": [
      {
        "letter": "A",
        "text": "Orders shifted toward lower-calorie dishes only at restaurants that printed calories beside the price, not at those that listed them in a separate box."
      },
      {
        "letter": "B",
        "text": "Diners said they support posting calorie counts."
      },
      {
        "letter": "C",
        "text": "The restaurants with counts were slightly larger."
      },
      {
        "letter": "D",
        "text": "Calorie counts were printed in the same font as the dish names."
      }
    ],
    "answer": "A",
    "explanation": "The argument is that placement beside the price is what matters. Orders shifting only where counts sat next to prices directly supports it.",
    "whyWrong": {
      "B": "Support for the policy is not the same as changed orders.",
      "C": "Restaurant size is an unrelated variable.",
      "D": "The font does not test the placement claim."
    }
  },
  {
    "id": "evidence-text-t3-bp06",
    "domain": "rw-ii",
    "skill": "evidence-text",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a linguistics paper.\n\nA linguist hypothesizes that a community's frequent use of a rare grammatical form comes from contact with a neighboring language, not from within the language itself.\n\nWhich finding, if true, would most strongly support the linguist's hypothesis?",
    "choices": [
      {
        "letter": "A",
        "text": "The form appears almost only among speakers who live along the border with the neighboring language and matches a common form in that language."
      },
      {
        "letter": "B",
        "text": "The community has a long tradition of storytelling."
      },
      {
        "letter": "C",
        "text": "The language is spoken by tens of thousands of people."
      },
      {
        "letter": "D",
        "text": "Older speakers use the form as often as younger ones."
      }
    ],
    "answer": "A",
    "explanation": "Contact-based borrowing predicts the form clusters near the border and mirrors the neighbor's grammar. A shows both, strongly supporting the hypothesis.",
    "whyWrong": {
      "B": "A storytelling tradition does not indicate borrowing.",
      "C": "The number of speakers does not show the form's origin.",
      "D": "Equal use across ages does not point to contact as the source."
    }
  },
  {
    "id": "evidence-quant-t1-bp01",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A chart shows a café's daily muffin sales for one week: 30 on Monday, rising steadily to 72 on Sunday.\n\nWhich choice most effectively uses the data to support the claim that muffin sales grew over the week?",
    "choices": [
      {
        "letter": "A",
        "text": "Muffin sales rose steadily from 30 on Monday to 72 on Sunday."
      },
      {
        "letter": "B",
        "text": "The café sold muffins every day."
      },
      {
        "letter": "C",
        "text": "Sales on Monday were 30."
      },
      {
        "letter": "D",
        "text": "Sunday is the last day of the week."
      }
    ],
    "answer": "A",
    "explanation": "The claim is growth over the week. A gives the steady rise from 30 to 72, directly supporting it.",
    "whyWrong": {
      "B": "Selling daily does not show sales grew.",
      "C": "A single day's figure does not show the trend.",
      "D": "Which day is last does not address sales growth."
    }
  },
  {
    "id": "evidence-quant-t1-bp02",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A table lists the heights of four waterfalls: 25 m, 40 m, 63 m, and 110 m.\n\nWhich choice most effectively uses the data to support the claim that the waterfalls vary greatly in height?",
    "choices": [
      {
        "letter": "A",
        "text": "One waterfall is 40 m tall."
      },
      {
        "letter": "B",
        "text": "The waterfalls range from 25 m for the shortest to 110 m for the tallest."
      },
      {
        "letter": "C",
        "text": "All four are natural waterfalls."
      },
      {
        "letter": "D",
        "text": "Three of the waterfalls are over 30 m."
      }
    ],
    "answer": "B",
    "explanation": "Great variation is shown by the full range. B reports the 25-to-110-m spread, supporting the claim.",
    "whyWrong": {
      "A": "One height does not show variation.",
      "C": "Being natural is not about height differences.",
      "D": "Counting those over 30 m omits the extremes that show the spread."
    }
  },
  {
    "id": "evidence-quant-t1-bp03",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A survey of 150 students asked their favorite season: 60 chose summer, 45 fall, 30 winter, and 15 spring.\n\nWhich choice most effectively uses the data to support the claim that summer was the most popular season?",
    "choices": [
      {
        "letter": "A",
        "text": "Fifteen students chose spring."
      },
      {
        "letter": "B",
        "text": "More students chose summer (60) than any other single season."
      },
      {
        "letter": "C",
        "text": "The survey included 150 students."
      },
      {
        "letter": "D",
        "text": "Thirty students chose winter."
      }
    ],
    "answer": "B",
    "explanation": "'Most popular' means the largest group. B shows summer's 60 exceeds every other season. B fits.",
    "whyWrong": {
      "A": "Spring is the smallest group, not evidence summer leads.",
      "C": "The total sample does not identify the most popular season.",
      "D": "Winter's count does not show summer is most popular."
    }
  },
  {
    "id": "evidence-quant-t1-bp04",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A graph shows a plant's height each week: 5 cm, 9 cm, 16 cm, and 26 cm over four weeks.\n\nWhich choice most effectively uses the data to support the claim that the plant grew faster as time went on?",
    "choices": [
      {
        "letter": "A",
        "text": "The plant was 9 cm tall in week 2."
      },
      {
        "letter": "B",
        "text": "The weekly increases grew larger, from 4 cm to 7 cm to 10 cm."
      },
      {
        "letter": "C",
        "text": "The plant was measured for four weeks."
      },
      {
        "letter": "D",
        "text": "The plant started at 5 cm."
      }
    ],
    "answer": "B",
    "explanation": "Faster growth over time is shown by the increases getting bigger each week (4, 7, 10 cm). B fits.",
    "whyWrong": {
      "A": "One week's height does not show the growth rate changing.",
      "C": "The length of the study does not show accelerating growth.",
      "D": "The starting height alone does not show growth speeding up."
    }
  },
  {
    "id": "evidence-quant-t1-bp05",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A study reports how far four paper airplane designs flew: 4 m, 7 m, 9 m, and 15 m.\n\nWhich choice most effectively uses the data to support the claim that the designs differed widely in distance?",
    "choices": [
      {
        "letter": "A",
        "text": "One design flew 7 m."
      },
      {
        "letter": "B",
        "text": "All four were made of paper."
      },
      {
        "letter": "C",
        "text": "Distances ranged from 4 m for the shortest flight to 15 m for the longest."
      },
      {
        "letter": "D",
        "text": "Two designs flew more than 8 m."
      }
    ],
    "answer": "C",
    "explanation": "Wide differences are shown by the full range. C reports the 4-to-15-m spread, supporting the claim.",
    "whyWrong": {
      "A": "One distance does not show variation.",
      "B": "Being paper is not about distance differences.",
      "D": "Counting those over 8 m omits the extremes."
    }
  },
  {
    "id": "evidence-quant-t1-bp06",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "A club tracked donations over four months: $200, $350, $500, and $650.\n\nWhich choice most effectively uses the data to support the claim that monthly donations increased steadily?",
    "choices": [
      {
        "letter": "A",
        "text": "Donations rose each month, from $200 to $650."
      },
      {
        "letter": "B",
        "text": "The club collected donations for four months."
      },
      {
        "letter": "C",
        "text": "One month's donations were $350."
      },
      {
        "letter": "D",
        "text": "The first month raised the least."
      }
    ],
    "answer": "A",
    "explanation": "Steady increase is shown by donations rising each month. A gives the full rise from $200 to $650.",
    "whyWrong": {
      "B": "The number of months does not show an increase.",
      "C": "A single month's figure does not show the trend.",
      "D": "A low starting point alone does not prove steady growth."
    }
  },
  {
    "id": "evidence-quant-t2-bp01",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "A study compared three study methods. Students using flashcards scored 85 on a later test; those rereading notes scored 74; those who did nothing extra scored 70.\n\nWhich choice most effectively uses the data to support the claim that flashcards led to the best test performance?",
    "choices": [
      {
        "letter": "A",
        "text": "Students who did nothing extra scored 70."
      },
      {
        "letter": "B",
        "text": "Flashcard users scored 85, higher than those who reread notes (74) or did nothing extra (70)."
      },
      {
        "letter": "C",
        "text": "Rereading beat doing nothing extra."
      },
      {
        "letter": "D",
        "text": "Some students used flashcards."
      }
    ],
    "answer": "B",
    "explanation": "'Best performance' requires comparing flashcards to both other methods. B shows 85 exceeds 74 and 70. B fits.",
    "whyWrong": {
      "A": "The do-nothing score alone does not show flashcards were best.",
      "C": "Rereading beating nothing does not show flashcards led.",
      "D": "That some used flashcards does not identify the top method."
    }
  },
  {
    "id": "evidence-quant-t2-bp02",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "A report notes that a lake's water clarity fell from 6 m visible depth in 2012 to 2 m in 2016, then rose to 5 m by 2020 after runoff controls began in 2016.\n\nWhich choice most effectively uses the data to support the claim that the runoff controls helped clarity recover?",
    "choices": [
      {
        "letter": "A",
        "text": "Clarity was 6 m in 2012."
      },
      {
        "letter": "B",
        "text": "Clarity fell between 2012 and 2016."
      },
      {
        "letter": "C",
        "text": "After the controls began in 2016, clarity rose from 2 m to 5 m by 2020."
      },
      {
        "letter": "D",
        "text": "Clarity never returned to its 2012 level."
      }
    ],
    "answer": "C",
    "explanation": "Recovery after the controls is shown by the rise following 2016. C reports the climb from 2 m to 5 m once controls began.",
    "whyWrong": {
      "A": "The 2012 figure predates the controls.",
      "B": "The earlier decline occurred before the controls.",
      "D": "Falling short of 2012 does not show the recovery the controls produced."
    }
  },
  {
    "id": "evidence-quant-t2-bp03",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "A survey found that 20% of readers finished the guide in under an hour, 50% in one to two hours, 25% in three to four hours, and 5% took longer.\n\nWhich choice most effectively uses the data to support the claim that most readers finished within two hours?",
    "choices": [
      {
        "letter": "A",
        "text": "Five percent took longer than four hours."
      },
      {
        "letter": "B",
        "text": "Combined, 70% finished within two hours (20% under an hour plus 50% in one to two hours)."
      },
      {
        "letter": "C",
        "text": "Twenty-five percent took three to four hours."
      },
      {
        "letter": "D",
        "text": "Half finished in one to two hours."
      }
    ],
    "answer": "B",
    "explanation": "'Most' means over half. B adds the two fastest groups (20% + 50% = 70%) to show a majority finished within two hours.",
    "whyWrong": {
      "A": "The slowest group works against the claim.",
      "C": "That group took longer than two hours.",
      "D": "50% alone is not a majority; the under-an-hour group must be added."
    }
  },
  {
    "id": "evidence-quant-t2-bp04",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "A town measured noise near a school before and after a speed limit was lowered. Average noise fell from 68 decibels to 59, while a comparison street with no change stayed near 67.\n\nWhich choice most effectively uses the data to support the claim that the lower speed limit reduced noise near the school?",
    "choices": [
      {
        "letter": "A",
        "text": "The comparison street measured about 67 decibels."
      },
      {
        "letter": "B",
        "text": "Noise near the school fell from 68 to 59 decibels, while the comparison street without a change stayed near 67."
      },
      {
        "letter": "C",
        "text": "Noise was measured on both streets."
      },
      {
        "letter": "D",
        "text": "The speed limit was lowered to reduce noise."
      }
    ],
    "answer": "B",
    "explanation": "The strongest support pairs the drop where the limit changed (68 to 59) with the unchanged comparison street (67). B does this.",
    "whyWrong": {
      "A": "The comparison street alone does not show the school street improved.",
      "C": "That both were measured is method, not evidence of the effect.",
      "D": "Stating the goal is not data showing it was met."
    }
  },
  {
    "id": "evidence-quant-t2-bp05",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "A bookstore found that after it began hosting weekly author readings, average Saturday visitors rose from 90 to 140, while its branch with no readings held steady near 88.\n\nWhich choice most effectively uses the data to support the claim that the readings drew more visitors?",
    "choices": [
      {
        "letter": "A",
        "text": "The branch without readings averaged about 88 visitors."
      },
      {
        "letter": "B",
        "text": "Saturday visitors rose from 90 to 140 at the branch with readings, while the branch without them stayed near 88."
      },
      {
        "letter": "C",
        "text": "Both branches sell the same books."
      },
      {
        "letter": "D",
        "text": "The readings were held weekly."
      }
    ],
    "answer": "B",
    "explanation": "The claim credits the readings for more visitors. B contrasts the rise where readings were held (90 to 140) with the flat branch (88).",
    "whyWrong": {
      "A": "The unchanged branch alone does not show the readings helped.",
      "C": "Shared inventory is background, not evidence of the effect.",
      "D": "How often readings were held does not measure their effect."
    }
  },
  {
    "id": "evidence-quant-t2-bp06",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "A test compared how well three fabrics blocked sunlight. Fabric A blocked 95% of light, Fabric B 92%, and Fabric C only 60%.\n\nWhich choice most effectively uses the data to support the claim that only Fabric C let a large amount of light through?",
    "choices": [
      {
        "letter": "A",
        "text": "Fabric B blocked 92% of light."
      },
      {
        "letter": "B",
        "text": "Fabrics A and B blocked most light (95% and 92%), but Fabric C blocked only 60%, letting far more through."
      },
      {
        "letter": "C",
        "text": "Fabric A blocked the most light."
      },
      {
        "letter": "D",
        "text": "Three fabrics were tested."
      }
    ],
    "answer": "B",
    "explanation": "The claim is that only Fabric C let much light through. B shows A and B were close and high while C was far lower.",
    "whyWrong": {
      "A": "Fabric B's figure alone does not single out C.",
      "C": "A blocking the most ignores that B was nearly as high and C stood out.",
      "D": "The number of fabrics is not evidence about C."
    }
  },
  {
    "id": "evidence-quant-t3-bp01",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "A study measured a battery's life at four charging speeds. Slow charging gave 1,200 cycles, medium 1,150, fast 900, and very fast 600.\n\nWhich choice most effectively uses the data to support the claim that faster charging shortens battery life, with the sharpest drop at the highest speeds?",
    "choices": [
      {
        "letter": "A",
        "text": "Battery life fell as charging sped up, from 1,200 cycles at slow to 600 at very fast, dropping most steeply between fast (900) and very fast (600)."
      },
      {
        "letter": "B",
        "text": "Slow charging gave the most cycles."
      },
      {
        "letter": "C",
        "text": "Medium charging gave 1,150 cycles."
      },
      {
        "letter": "D",
        "text": "Four charging speeds were tested."
      }
    ],
    "answer": "A",
    "explanation": "The claim describes a decline that is steepest at high speeds. A traces the fall from 1,200 to 600 and names the sharpest drop at the top speeds.",
    "whyWrong": {
      "B": "The maximum alone does not show the steepening drop.",
      "C": "A single midpoint does not show the pattern.",
      "D": "The number of speeds does not describe the trend."
    }
  },
  {
    "id": "evidence-quant-t3-bp02",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "Two tutoring programs were compared. On basic problems, Program X scored 90 and Program Y 88—nearly equal. On advanced problems, Program X scored 78 while Program Y scored 54.\n\nWhich choice most effectively uses the data to support the claim that Program X's advantage shows mainly on harder problems?",
    "choices": [
      {
        "letter": "A",
        "text": "Program X scored 90 on basic problems."
      },
      {
        "letter": "B",
        "text": "The programs scored nearly the same on basic problems (90 vs. 88) but Program X far outscored Program Y on advanced ones (78 vs. 54)."
      },
      {
        "letter": "C",
        "text": "Both programs scored above 50 on advanced problems."
      },
      {
        "letter": "D",
        "text": "Program Y scored 88 on basic problems."
      }
    ],
    "answer": "B",
    "explanation": "The claim is that X's edge appears on harder problems. B contrasts the near-tie on basics with X's large lead on advanced problems.",
    "whyWrong": {
      "A": "One basic score does not reveal where the advantage lies.",
      "C": "Both clearing 50 ignores the gap that shows the advantage.",
      "D": "Y's basic score alone does not address the difficulty pattern."
    }
  },
  {
    "id": "evidence-quant-t3-bp03",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "A survey found that 65% of employees said they would use a new gym if the company built one, but at a similar company that did build one, only 30% of employees actually used it.\n\nWhich choice most effectively uses the data to support the claim that stated intentions can overstate actual use?",
    "choices": [
      {
        "letter": "A",
        "text": "Sixty-five percent of employees said they would use a gym."
      },
      {
        "letter": "B",
        "text": "Although 65% said they would use a gym, only 30% at a comparable company actually did—a gap showing intentions exceeded use."
      },
      {
        "letter": "C",
        "text": "One company built a gym."
      },
      {
        "letter": "D",
        "text": "Thirty percent of employees used the gym."
      }
    ],
    "answer": "B",
    "explanation": "Overstating is shown by the gap between the 65% who intended and the 30% who used. B pairs both figures to reveal that gap.",
    "whyWrong": {
      "A": "The intention figure alone gives no basis for comparison.",
      "C": "That a gym was built is context, not the revealing contrast.",
      "D": "The usage figure alone, without the 65%, does not show overstatement."
    }
  },
  {
    "id": "evidence-quant-t3-bp04",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "A clinic compared two reminder methods. Patients who got phone-call reminders showed up 88% of the time; those who got no reminder showed up 62%. The two groups were similar in age and distance from the clinic.\n\nWhich choice most effectively uses the data to support the claim that phone-call reminders improved attendance?",
    "choices": [
      {
        "letter": "A",
        "text": "Patients who received phone-call reminders showed up 88% of the time, compared with 62% among the otherwise-similar group that got none."
      },
      {
        "letter": "B",
        "text": "Most patients in both groups showed up."
      },
      {
        "letter": "C",
        "text": "The clinic used phone-call reminders for one group."
      },
      {
        "letter": "D",
        "text": "Both groups were similar in age and distance."
      }
    ],
    "answer": "A",
    "explanation": "The reminders' effect is shown by comparing the similar groups: 88% with reminders versus 62% without. A gives that contrast.",
    "whyWrong": {
      "B": "Saying most showed up blurs the difference the reminders made.",
      "C": "Describing the method is not the same as showing its effect.",
      "D": "Group similarity supports a fair comparison but does not itself show the reminders helped."
    }
  },
  {
    "id": "evidence-quant-t3-bp05",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "A study found that a shaded bus shelter kept waiting riders cooler: on hot days, riders under the new shelter reported a comfort score of 8 out of 10, while riders at a similar unshaded stop reported 4.\n\nWhich choice most effectively uses the data to support the claim that the shelter improved rider comfort on hot days?",
    "choices": [
      {
        "letter": "A",
        "text": "On hot days, riders under the shelter reported a comfort score of 8, versus 4 at a similar unshaded stop."
      },
      {
        "letter": "B",
        "text": "Both stops served the same bus route."
      },
      {
        "letter": "C",
        "text": "The shelter provided shade."
      },
      {
        "letter": "D",
        "text": "Comfort was rated out of 10."
      }
    ],
    "answer": "A",
    "explanation": "The claim credits the shelter with better comfort. A contrasts the sheltered riders' score of 8 with the unshaded 4 on the same hot days.",
    "whyWrong": {
      "B": "A shared route sets up the comparison but is not the evidence.",
      "C": "That the shelter gave shade does not by itself show improved comfort.",
      "D": "The rating scale is method, not the comparative result."
    }
  },
  {
    "id": "evidence-quant-t3-bp06",
    "domain": "rw-ii",
    "skill": "evidence-quant",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "A workshop tested a new tool over four weeks. Time to finish a task fell from 40 minutes to 22, while the number of finished tasks per day rose from 12 to 20.\n\nWhich choice most effectively uses the data to support the claim that the tool made work both faster and more productive?",
    "choices": [
      {
        "letter": "A",
        "text": "Tasks finished per day reached 20 in the final week."
      },
      {
        "letter": "B",
        "text": "As time per task fell from 40 to 22 minutes, daily finished tasks rose from 12 to 20."
      },
      {
        "letter": "C",
        "text": "The task took 40 minutes at the start."
      },
      {
        "letter": "D",
        "text": "The tool was tested over four weeks."
      }
    ],
    "answer": "B",
    "explanation": "The claim is faster and more productive. B shows time per task falling while daily output rose, covering both parts.",
    "whyWrong": {
      "A": "Final output alone does not show the speed gain.",
      "C": "The starting time alone does not show both trends.",
      "D": "The test's length is not evidence about speed or output."
    }
  },
  {
    "id": "inferences-t1-bp01",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from an article about birds.\n\nThe Arctic tern nests near the North Pole in summer but spends the other half of the year near the South Pole. To make this journey twice a year, it flies farther annually than almost any other animal. This suggests that the Arctic tern ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "rarely leaves the area where it was born."
      },
      {
        "letter": "B",
        "text": "is capable of traveling extremely long distances."
      },
      {
        "letter": "C",
        "text": "cannot survive in cold climates."
      },
      {
        "letter": "D",
        "text": "never migrates at all."
      }
    ],
    "answer": "B",
    "explanation": "Flying between the poles twice a year, farther than nearly any animal, shows the tern can travel enormous distances. B follows.",
    "whyWrong": {
      "A": "The text describes vast migrations, not staying put.",
      "C": "It nests near both poles, so it handles cold well.",
      "D": "Its pole-to-pole journeys are migration."
    }
  },
  {
    "id": "inferences-t1-bp02",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a report on a school.\n\nAfter the cafeteria began offering a free piece of fruit with every lunch, the amount of fruit students ate at lunch rose sharply, while the school made no other changes to the menu. This suggests that the free fruit ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "encouraged students to eat more fruit."
      },
      {
        "letter": "B",
        "text": "made students eat less overall."
      },
      {
        "letter": "C",
        "text": "was rarely taken by students."
      },
      {
        "letter": "D",
        "text": "replaced the main lunch dishes."
      }
    ],
    "answer": "A",
    "explanation": "Fruit eaten rose after it was offered free, with nothing else changed, so the free fruit boosted fruit eating. A follows.",
    "whyWrong": {
      "B": "Eating more fruit does not indicate eating less overall.",
      "C": "Fruit eaten rose sharply, so it was taken often.",
      "D": "The fruit was added to lunch, not a replacement for main dishes."
    }
  },
  {
    "id": "inferences-t1-bp03",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a nature guide.\n\nThe walking stick insect is shaped and colored so much like a twig that predators searching a branch often crawl right past it. Only when it moves does a bird tend to notice it. This suggests that the insect's twig-like appearance ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "helps it avoid predators when it stays still."
      },
      {
        "letter": "B",
        "text": "draws predators toward it."
      },
      {
        "letter": "C",
        "text": "lets it fly faster than birds."
      },
      {
        "letter": "D",
        "text": "makes it glow at night."
      }
    ],
    "answer": "A",
    "explanation": "Predators pass the still insect and notice it only when it moves, so looking like a twig hides it while motionless. A follows.",
    "whyWrong": {
      "B": "The appearance makes predators miss it, not approach.",
      "C": "Flight speed is never mentioned.",
      "D": "Nothing about glowing appears in the text."
    }
  },
  {
    "id": "inferences-t1-bp04",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a company report.\n\nWhen the software company added a simple tutorial that new users saw the first time they opened the app, the share of users who gave up within the first day dropped by half. This suggests that many users who once quit early ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "had struggled to figure out how to use the app."
      },
      {
        "letter": "B",
        "text": "disliked the app's color scheme."
      },
      {
        "letter": "C",
        "text": "had never actually opened the app."
      },
      {
        "letter": "D",
        "text": "were satisfied with the app from the start."
      }
    ],
    "answer": "A",
    "explanation": "A first-time tutorial halved early quitting, so many early quitters had trouble learning the app. A follows.",
    "whyWrong": {
      "B": "The tutorial addresses use, not colors, so color is unsupported.",
      "C": "They opened the app and quit within a day.",
      "D": "Satisfied users would not have quit early."
    }
  },
  {
    "id": "inferences-t1-bp05",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from an article about deserts.\n\nThe saguaro cactus has pleated sides that expand like an accordion. After a rare desert rain, the cactus swells noticeably as it takes in water, then slowly shrinks over the following weeks. This suggests that the pleated shape allows the saguaro to ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "store water it can use during dry periods."
      },
      {
        "letter": "B",
        "text": "attract rain to the desert."
      },
      {
        "letter": "C",
        "text": "grow taller than any other plant."
      },
      {
        "letter": "D",
        "text": "survive without any water at all."
      }
    ],
    "answer": "A",
    "explanation": "The cactus swells with water after rain and shrinks over weeks, so the pleats let it store water for dry times. A follows.",
    "whyWrong": {
      "B": "A plant's shape does not cause rain.",
      "C": "Height compared to other plants is not discussed.",
      "D": "It takes in water, so it does need water."
    }
  },
  {
    "id": "inferences-t1-bp06",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 1,
    "source": "blueprint-generated",
    "text": "The following text is from a town report.\n\nAfter the library moved its children's section from a back corner to a bright space near the front entrance, weekly checkouts of children's books more than doubled, though the collection itself did not change. This suggests that the section's earlier location ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "had made the children's books easy to overlook."
      },
      {
        "letter": "B",
        "text": "contained better books than the new one."
      },
      {
        "letter": "C",
        "text": "was closed to the public."
      },
      {
        "letter": "D",
        "text": "was more popular than the new location."
      }
    ],
    "answer": "A",
    "explanation": "Checkouts doubled after the move with the same collection, so the old back-corner spot had made the books easy to miss. A follows.",
    "whyWrong": {
      "B": "The collection did not change, so book quality is the same.",
      "C": "Books were checked out before, so it was open.",
      "D": "The new location doubled checkouts, so it was more popular."
    }
  },
  {
    "id": "inferences-t2-bp01",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a study of ancient pottery.\n\nJars found at a coastal site were made from a clay that occurs only in a mountain region far inland. The jars still held traces of a wine produced only in that same inland region. The most reasonable conclusion is that the coastal community ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "produced its own wine and jars locally."
      },
      {
        "letter": "B",
        "text": "obtained both the jars and their contents from the inland region."
      },
      {
        "letter": "C",
        "text": "had no contact with inland communities."
      },
      {
        "letter": "D",
        "text": "used the jars only for storing water."
      }
    ],
    "answer": "B",
    "explanation": "The clay and the wine both come only from inland, so the coastal community got the filled jars from there. B follows.",
    "whyWrong": {
      "A": "The clay and wine are inland-only, so they were not made locally.",
      "C": "The inland goods show contact, not isolation.",
      "D": "The jars held wine, not water."
    }
  },
  {
    "id": "inferences-t2-bp02",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an ecology study.\n\nOn an island with no natural predators, a species of bird lost the ability to fly over many generations, developing heavier bodies and smaller wings. On nearby islands where predators were present, related birds kept their strong flight. The most reasonable conclusion is that the ability to fly ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "is unrelated to the presence of predators."
      },
      {
        "letter": "B",
        "text": "tends to be maintained where it helps birds escape predators."
      },
      {
        "letter": "C",
        "text": "was never present in any of these birds."
      },
      {
        "letter": "D",
        "text": "makes birds heavier over time."
      }
    ],
    "answer": "B",
    "explanation": "Flight was lost where no predators existed but kept where predators did, so flight is maintained where it aids escape. B follows.",
    "whyWrong": {
      "A": "The pattern ties flight to predators, so they are related.",
      "C": "The predator islands' birds fly, so flight was present.",
      "D": "The flightless birds grew heavier, not the flying ones."
    }
  },
  {
    "id": "inferences-t2-bp03",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an article about astronomy.\n\nA faint, distant object gives off no visible light of its own, yet the stars behind it appear bent and smeared as their light passes nearby. Astronomers know that only a large concentration of mass can bend light this way. The most reasonable conclusion is that the object ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "contains a large amount of mass despite emitting no light."
      },
      {
        "letter": "B",
        "text": "is a nearby, ordinary star."
      },
      {
        "letter": "C",
        "text": "does not affect the light around it."
      },
      {
        "letter": "D",
        "text": "is smaller than a single planet."
      }
    ],
    "answer": "A",
    "explanation": "Only large mass bends light as observed, and the object does bend starlight, so it holds much mass despite giving off no light. A follows.",
    "whyWrong": {
      "B": "It emits no light and is distant, unlike a nearby star.",
      "C": "It clearly bends the light behind it.",
      "D": "Bending light requires large mass, not a tiny object."
    }
  },
  {
    "id": "inferences-t2-bp04",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is adapted from a story.\n\nMr. Alvarez claimed he had not touched the piano in thirty years. Yet when the visiting musician played a wrong note, his fingers twitched toward the keys, and he murmured the correct one without looking. The most reasonable conclusion is that Mr. Alvarez ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "had never learned to play the piano."
      },
      {
        "letter": "B",
        "text": "retained far more of his old skill than he let on."
      },
      {
        "letter": "C",
        "text": "could not hear the music being played."
      },
      {
        "letter": "D",
        "text": "disliked the visiting musician."
      }
    ],
    "answer": "B",
    "explanation": "His fingers reach for the keys and he names the right note without looking, so he kept more skill than he admitted. B follows.",
    "whyWrong": {
      "A": "His instant correction shows he had learned to play.",
      "C": "He heard the wrong note and corrected it.",
      "D": "Nothing shows dislike of the musician."
    }
  },
  {
    "id": "inferences-t2-bp05",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from a report on farming.\n\nIn fields where a farmer left the stalks and roots of the previous crop in the soil, the ground held moisture longer and needed less watering than in fields cleared down to bare earth. Researchers found the leftover plant matter formed a spongy layer near the surface. The most reasonable conclusion is that the leftover plant matter reduced watering needs by ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "helping the soil hold on to moisture."
      },
      {
        "letter": "B",
        "text": "making the crops grow taller."
      },
      {
        "letter": "C",
        "text": "attracting more rainfall to the field."
      },
      {
        "letter": "D",
        "text": "replacing the soil entirely."
      }
    ],
    "answer": "A",
    "explanation": "The spongy layer of leftover matter kept the ground moist longer, so it cut watering by holding moisture. A follows.",
    "whyWrong": {
      "B": "Taller crops are not mentioned as the mechanism.",
      "C": "Leftover matter does not draw rainfall.",
      "D": "The matter sat in the soil; it did not replace it."
    }
  },
  {
    "id": "inferences-t2-bp06",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 2,
    "source": "blueprint-generated",
    "text": "The following text is from an art history discussion.\n\nA painting long attributed to a famous master was found to contain a synthetic blue pigment that was not manufactured until decades after the master's death. No records show the painting being altered later. The most reasonable conclusion is that the painting ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "was painted by the master exactly as claimed."
      },
      {
        "letter": "B",
        "text": "could not have been painted by the master in his lifetime."
      },
      {
        "letter": "C",
        "text": "contains no blue pigment at all."
      },
      {
        "letter": "D",
        "text": "was painted before the master was born."
      }
    ],
    "answer": "B",
    "explanation": "The blue pigment postdates the master's death and the work was not later altered, so he could not have painted it. B follows.",
    "whyWrong": {
      "A": "The late pigment rules out the master's authorship.",
      "C": "The blue pigment is what dates the work, so it is present.",
      "D": "A pigment made after his death cannot place the work before his birth."
    }
  },
  {
    "id": "inferences-t3-bp01",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a study of decision-making.\n\nShoppers were shown the same coat at the same price in two stores. In the first, the coat was the cheapest on the rack; in the second, it was the most expensive. Shoppers rated the coat as higher quality in the second store, though the coat and price were identical. The most reasonable conclusion is that shoppers' judgments of quality were shaped less by the coat itself than by ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "how its price compared with the other items around it."
      },
      {
        "letter": "B",
        "text": "the actual materials the coat was made from."
      },
      {
        "letter": "C",
        "text": "the exact price printed on its tag."
      },
      {
        "letter": "D",
        "text": "the number of coats each store carried."
      }
    ],
    "answer": "A",
    "explanation": "The identical coat was judged better where it was the priciest on the rack, so the surrounding prices, not the coat, shaped the judgment. A follows.",
    "whyWrong": {
      "B": "The coat and its materials were identical in both stores.",
      "C": "The price was the same in both stores.",
      "D": "The number of coats is never linked to the ratings."
    }
  },
  {
    "id": "inferences-t3-bp02",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a paper on ecology.\n\nAfter a wildfire, a hillside cleared of its usual shrubs was quickly covered by a plant whose seeds only sprout after being exposed to intense heat. These seeds had lain dormant in the soil for years. The most reasonable conclusion is that, for this plant, occasional fire ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "is fatal to the entire species."
      },
      {
        "letter": "B",
        "text": "is part of how it reproduces and spreads."
      },
      {
        "letter": "C",
        "text": "has no effect on its seeds."
      },
      {
        "letter": "D",
        "text": "prevents its seeds from ever sprouting."
      }
    ],
    "answer": "B",
    "explanation": "The seeds sprout only after intense heat and then cover the hillside, so fire is part of how the plant reproduces. B follows.",
    "whyWrong": {
      "A": "Fire triggers its spread, so it is not fatal to the species.",
      "C": "Heat is exactly what makes the seeds sprout.",
      "D": "Fire causes sprouting rather than preventing it."
    }
  },
  {
    "id": "inferences-t3-bp03",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a study of language learning.\n\nInfants can hear the difference between speech sounds from every language at birth. By their first birthday, they distinguish the sounds of their own language easily but struggle to tell apart sounds their language never uses. The most reasonable conclusion is that, over the first year, exposure to a particular language ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "sharpens the sound distinctions a child hears while dulling unused ones."
      },
      {
        "letter": "B",
        "text": "has no effect on how infants hear speech."
      },
      {
        "letter": "C",
        "text": "lets infants hear every possible sound equally well."
      },
      {
        "letter": "D",
        "text": "prevents infants from hearing any speech sounds."
      }
    ],
    "answer": "A",
    "explanation": "Infants start able to hear all contrasts but, after a year of exposure, keep their language's contrasts and lose others, so exposure tunes their hearing. A follows.",
    "whyWrong": {
      "B": "The change over the year shows exposure does have an effect.",
      "C": "By one year they struggle with unused sounds, so not all are equal.",
      "D": "They clearly hear their own language's sounds."
    }
  },
  {
    "id": "inferences-t3-bp04",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from an economics study.\n\nA city offered the same job training to two neighborhoods. In one, most graduates found work within months; in the other, few did. The programs were identical, but the first neighborhood sat beside a growing industrial park, while the second was miles from any employers hiring such skills. The most reasonable conclusion is that the training's success depended heavily on ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the quality of the training program itself."
      },
      {
        "letter": "B",
        "text": "whether nearby employers were hiring those skills."
      },
      {
        "letter": "C",
        "text": "the number of people who enrolled."
      },
      {
        "letter": "D",
        "text": "the length of each training session."
      }
    ],
    "answer": "B",
    "explanation": "Identical training succeeded next to hiring employers but not far from them, so nearby demand drove the difference. B follows.",
    "whyWrong": {
      "A": "The programs were identical, so program quality was not the difference.",
      "C": "Enrollment numbers are never linked to the outcome.",
      "D": "Session length is not mentioned as a factor."
    }
  },
  {
    "id": "inferences-t3-bp05",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a study of perception.\n\nWhen a short film was shown with tense background music, viewers described a character's blank expression as fearful. When the same footage was shown with calm music, viewers called the very same expression peaceful. The most reasonable conclusion is that the viewers' reading of the expression depended partly on ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "the music that accompanied the footage."
      },
      {
        "letter": "B",
        "text": "the actor's actual facial movements."
      },
      {
        "letter": "C",
        "text": "the length of the film."
      },
      {
        "letter": "D",
        "text": "the color of the character's clothing."
      }
    ],
    "answer": "A",
    "explanation": "The identical blank expression was read as fearful or peaceful depending on the music, so the music shaped the reading. A follows.",
    "whyWrong": {
      "B": "The footage and expression were the same in both showings.",
      "C": "Film length is never linked to the viewers' readings.",
      "D": "Clothing color is not mentioned."
    }
  },
  {
    "id": "inferences-t3-bp06",
    "domain": "rw-ii",
    "skill": "inferences",
    "tier": 3,
    "source": "blueprint-generated",
    "text": "The following text is from a history paper.\n\nA medieval town's records show that in years when a certain saint's festival fell during harvest, far less grain was recorded as stored for winter. The festival drew workers away from the fields for several days at the busiest time. The most reasonable conclusion is that the timing of the festival ______\n\nWhich choice most logically completes the text?",
    "choices": [
      {
        "letter": "A",
        "text": "had no effect on the town's food supply."
      },
      {
        "letter": "B",
        "text": "could reduce the harvest when it coincided with it."
      },
      {
        "letter": "C",
        "text": "always increased the amount of grain stored."
      },
      {
        "letter": "D",
        "text": "determined which crops the town planted."
      }
    ],
    "answer": "B",
    "explanation": "Less grain was stored in years when the festival pulled workers from the fields during harvest, so its timing could cut the harvest. B follows.",
    "whyWrong": {
      "A": "The lower storage shows it did affect the food supply.",
      "C": "Storage fell, not rose, in those years.",
      "D": "The text concerns labor timing, not crop choice."
    }
  },
];
