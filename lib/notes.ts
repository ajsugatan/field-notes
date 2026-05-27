export type FieldNote = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  site: string;
  dateRange: string;
  tags: string[];
  abstract: string;
  sections: { heading: string; body: string }[];
  closing: string;
};

export const fieldNotes: FieldNote[] = [
  {
    slug: "mythology-of-the-cheat-meal",
    number: "No. 001",
    title: "On the Mythology of the Cheat Meal",
    subtitle: "Microtribe formation around communal indulgence.",
    site: "Fat F*cks — pop-up food brand, San Diego & Bay Area",
    dateRange: "2024 — ongoing",
    tags: ["ethnography", "brand", "co-founder"],
    abstract:
      "A study of how people perform restraint in private and seek permission in public — and what happens when a brand sells the permission instead of the food.",
    sections: [
      {
        heading: "Field conditions",
        body: "Fat F*cks began as a question disguised as a menu. We noticed that the people most eager to order the messiest item on a Friday night were the same ones tracking macros on Monday. The cheat meal sits in a strange spot in modern food culture: ritualized, scheduled, half-secret. We wanted to see what would happen if we built a small brand that named the ritual instead of pretending it didn't exist.",
      },
      {
        heading: "Observations",
        body: "Pop-ups are field sites. Each one taught us something the next one had to absorb. The most loyal customers were not gym people or foodies, exactly — they were people who had spent years apologizing for what they wanted, and who responded to a brand that didn't ask them to. Conversation in line ran longer than the line itself. Photos got taken before bites. A small language formed around our menu items, and the language traveled faster than we did.",
      },
      {
        heading: "What I took from it",
        body: "Brands aren't built by talking to a market — they're built by recognizing a microtribe that's already in the room and giving it a name. The food is the artifact. The shared permission is the product. I have since used this lens in strategy work with much larger companies, and the basic move is the same: stop pitching the offer, start naming the tribe.",
      },
    ],
    closing:
      "We are still running pop-ups. The menu keeps evolving. The thesis hasn't.",
  },
  {
    slug: "nonverbal-languages-of-the-gym-floor",
    number: "No. 002",
    title: "Nonverbal Languages of the Gym Floor",
    subtitle: "An ethnographic study of signaling, refusal, and presence.",
    site: "Local commercial gym — six-week immersive study",
    dateRange: "Winter 2025",
    tags: ["ethnography", "research", "embodied cognition"],
    abstract:
      "Field study of nonverbal communication patterns among regular lifters — headphones as social armor, the choreography of equipment sharing, and the unspoken hierarchy of the squat rack.",
    sections: [
      {
        heading: "Method",
        body: "I trained at the same gym, at the same hours, for six weeks. I carried a small notebook and a phone with the screen down. I was both researcher and participant — which is honest, because there is no neutral observer on a gym floor. People can tell. I wrote everything down within twenty minutes of leaving each session, while the small social moments were still loud in memory.",
      },
      {
        heading: "Findings",
        body: "The gym floor runs on a quiet protocol. Headphones are a fence, not an accessory. A particular angle of body — three-quarters turned away from the rack — means I'm in a set, do not approach. A different angle means I am between sets and a polite ask is acceptable. The protocol is taught by no one and known by everyone. People who get it wrong are not corrected verbally; they are corrected by a fractional pause in the room.",
      },
      {
        heading: "What I took from it",
        body: "This project taught me that the most important parts of a system are usually the parts that nobody wrote down. Most design work asks people what they want. Ethnography asks what they do when no one is paying explicit attention. Those are very different datasets, and the second one is where the strategy lives.",
      },
    ],
    closing:
      "I lift four days a week. I still take notes. The notebook is smaller now.",
  },
  {
    slug: "designing-for-streetwears-quiet-rebels",
    number: "No. 003",
    title: "Designing for Streetwear's Quiet Rebels",
    subtitle: "Marketing a brand that did not want to be marketed.",
    site: "Vagabond SF — independent streetwear label",
    dateRange: "2023 — 2025",
    tags: ["brand", "marketing", "founder support"],
    abstract:
      "Two years running marketing for an independent label whose customer would have rejected the brand the moment it looked like a brand. Notes on softness, refusal, and how to grow without being seen growing.",
    sections: [
      {
        heading: "Context",
        body: "Vagabond is my brother Joshua's label. Streetwear sits in a strange place right now: most of the audience has read the playbook. They have seen the drop strategy, the manufactured scarcity, the influencer seeding. They reward brands that look like they're not trying, and punish brands that try too visibly. So the problem became: how do you build a marketing practice that grows the brand without ever quite feeling like marketing?",
      },
      {
        heading: "What we built",
        body: "We stopped writing copy that sounded like copy. We stopped optimizing for the algorithm and started optimizing for the right small group of people who already followed each other. We made the content look like it was made by a friend, because it was. We let drops be quiet. We treated each post as a piece of evidence about who the brand was rather than a piece of persuasion about what to buy.",
      },
      {
        heading: "What I took from it",
        body: "There is a kind of cultural literacy that doesn't show up in marketing courses. It shows up in being inside the audience for long enough to feel where the wires are. I learned to trust that feeling, and to defend it when stakeholders asked for the obvious tactic. The obvious tactic is almost always wrong when the audience has already been marketed to a thousand times.",
      },
    ],
    closing:
      "Vagabond is still running. Bigger now. Still doesn't look like it's trying.",
  },
  {
    slug: "surveillance-and-the-self",
    number: "No. 004",
    title: "Surveillance and the Self in Public Space",
    subtitle: "Guardians Against the Gaze — a speculative design.",
    site: "UCSD ICAM — speculative design studio",
    dateRange: "2024",
    tags: ["speculative design", "critique", "studio work"],
    abstract:
      "A speculative product that protects civilians from AI-driven public surveillance, treated as a real consumer object. The goal was not to ship it. The goal was to surface what we have already lost.",
    sections: [
      {
        heading: "Premise",
        body: "Public space is no longer public in the way it was twenty years ago. Cameras have been there for a long time, but cameras alone are not the point. The point is that the cameras now read us. They count steps, label faces, sort bodies into categories. A speculative product makes that legible by imagining a counter-object — something that pretends to live in the same retail aisle as our headphones and our skincare, except it is for opting out.",
      },
      {
        heading: "What we made",
        body: "A product line: packaging, marketing copy, a launch video, an industrial design language. The whole thing reads at first as straight commercial design. The longer you look at it, the more uncomfortable it becomes. That discomfort is the project. Speculative design works by lending the credibility of a real consumer object to a thing that doesn't exist, so that the absence of the thing becomes the argument.",
      },
      {
        heading: "What I took from it",
        body: "I am suspicious of design that is only critique. Critique alone is easy. But when critique borrows the grammar of the thing it criticizes, the work hits differently. This project taught me to build artifacts that argue — and to be careful about what I lend my hand to commercially, because the grammar of the commercial is very strong.",
      },
    ],
    closing:
      "I think about this project every time I walk past a camera that costs more than my rent.",
  },
  {
    slug: "bodies-as-boundary-objects",
    number: "No. 005",
    title: "Bodies as Boundary Objects",
    subtitle: "Bodybuilding as design research, and what it teaches about systems.",
    site: "Twelve-week contest prep, self-study",
    dateRange: "Spring 2026",
    tags: ["practice", "embodied research", "personal"],
    abstract:
      "Notes from running my own body as a system — caloric deficit, training split, weekly check-ins — and how the discipline of it informs how I think about everything else.",
    sections: [
      {
        heading: "Setup",
        body: "I trained for a physique competition in spring 2026. Twelve weeks of graduated caloric deficit, a reorganized training split prioritizing glutes, weekly photographs, daily weight readings averaged over seven days because daily numbers lie. The protocol was strict on purpose. I wanted to feel what it was like to commit to a system long enough that the system changed me, instead of the other way around.",
      },
      {
        heading: "What happened",
        body: "The first three weeks were easy. The fourth was hard. The seventh was philosophical. Around week eight you stop arguing with the protocol because the energy required to argue is too expensive. What is left is something close to acceptance, which is also close to attention — you start to notice details about your body, your sleep, your moods, that you could not see when you were over-fed and under-attended.",
      },
      {
        heading: "What I took from it",
        body: "Long systems teach things that short ones can't. Strategy work has the same shape: the meaningful insights tend to live in the eighth or tenth week of looking at something, not the first. I have learned to be patient with the early weeks, and to trust that the protocol — whatever the protocol is — is doing work I cannot see yet.",
      },
    ],
    closing:
      "I am no longer in prep. The notebook habit stayed.",
  },
  {
    slug: "unperforming-a-practice",
    number: "No. 006",
    title: "Unperforming: A Practice",
    subtitle: "An ongoing philosophical art practice.",
    site: "Various — installations, writing, daily life",
    dateRange: "2023 — ongoing",
    tags: ["art practice", "philosophy", "ongoing"],
    abstract:
      "Unperforming is a practice of refusing performed identity in favor of authentic presence. It is not a project I am working on. It is the project everything else is downstream of.",
    sections: [
      {
        heading: "What it is",
        body: "Unperforming is the working name for an ongoing practice I have built around a single observation: most of what we do in public is a performance of who we are supposed to be, and most of the suffering we report has something to do with the distance between that performance and the person underneath. The practice takes many forms — installations, writing, generative coding work, the way I conduct interviews, the way I take photographs.",
      },
      {
        heading: "Why a practice and not a project",
        body: "A project ends. A practice does not. I made the distinction on purpose because I noticed that whenever I framed this work as a project, I started optimizing it. The practice frame is harder to optimize and easier to live with. It also makes room for the work to show up in unexpected places — in a research method, in a brand decision, in the way I run a meeting.",
      },
      {
        heading: "What it asks of the work",
        body: "Every piece of work I make has to pass through the Unperforming filter at some point: does this thing pretend, or does it sit honestly with what it actually is? I lose work to that filter regularly. The work that survives it tends to be the work I am still proud of two years later. That is enough to keep the filter on.",
      },
    ],
    closing:
      "If you ask me what I do, this is the answer underneath the other answers.",
  },
];

export function getNoteBySlug(slug: string): FieldNote | undefined {
  return fieldNotes.find((n) => n.slug === slug);
}

export function getAllSlugs(): string[] {
  return fieldNotes.map((n) => n.slug);
}
