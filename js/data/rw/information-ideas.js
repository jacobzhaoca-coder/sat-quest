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
];
