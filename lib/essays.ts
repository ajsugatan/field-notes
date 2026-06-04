export type ImageInsert = {
  src: string;
  alt: string;
  afterParagraph: number;
  width: number;
  height: number;
};

export type Essay = {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  site?: string;
  dateRange: string;
  date: string;
  tags: string[];
  abstract?: string;
  sections: { heading: string; body: string }[];
  closing?: string;
  paragraphs?: string[];
  heroImage?: string;
  video?: string;
  // -1 = before all text; >= 0 = after paragraph at that index
  videoInsertAfterParagraph?: number;
  videoCaption?: string;
  audio?: string;
  audioLabel?: string;
  // Flexible image inserts: one or more images at any paragraph position.
  // Multiple images at the same afterParagraph render as a diptych.
  imageInserts?: ImageInsert[];
};

const essays: Essay[] = [
  {
    slug: "love-takes-miles",
    number: "No. 007",
    title: "love takes miles — cameron winter",
    dateRange: "May 2026",
    date: "2026-05-24",
    tags: ["music", "love", "logistics"],
    audio: "/audio/love-takes-miles.mp3",
    audioLabel: "love takes miles — cameron winter",
    imageInserts: [
      // Closing visual — couple in park, after the final line
      { src: "/couple-in-park.jpg", alt: "couple sitting together in a park", afterParagraph: 4, width: 828, height: 816 },
    ],
    sections: [],
    paragraphs: [
      `"love will make you fit it all in your car"`,
      `love as logistics. love as inconvenience. love as the specific physical labor of moving what someone owns from one chapter of their life into the next.`,
      `it's not the feeling, it's the doing. a car packed too tightly with someone else's stuff, and you driving it anyway.`,
      `helping someone move is one of the most stressful things you can do for another person, which might be exactly why it's one of the most loving. to love someone is to decide they're worth the inconvenience.`,
      `and arriving at that decision takes time. love takes miles.`,
    ],
  },
  {
    slug: "obsessions",
    number: "No. 008",
    title: "obsessions - curry barker",
    dateRange: "watched may 27",
    date: "2026-05-22",
    tags: ["film", "horror", "desire"],
    video: "/video/obsession.mp4",
    videoInsertAfterParagraph: 1,
    imageInserts: [
      // Closing image — after the final paragraph
      { src: "/obsession.jpg", alt: "obsession", afterParagraph: 6, width: 1200, height: 1200 },
    ],
    sections: [],
    paragraphs: [
      `obsessions is a horror movie that works as a visual medium for an all too common experience: being pursued by a man who does not see you as human. the genre is just the delivery system. what it's actually about is recognition, or the lack of it, and the specific dread of being wanted by someone who has no interest in what's underneath the wanting.`,
      `the uncanny valley is a double entendre, and the film uses both halves at once. yes, nikki becomes visually, physically not quite human, close enough to a person that the wrongness reads like an insult rather than a mistake. but the device isn't really about how she looks. it's about how it feels to be a woman under a certain kind of desire: looked at so hard that you become less real instead of more. you'd think intense attention would make you feel seen, but barker knows it can do the exact opposite, that the more closely someone studies the surface of you the less they seem to believe in anything behind it. being treated as almost human, recognized as a body, a presence, a thing that responds, and stopped just short of the full person who would complicate the fantasy.`,
      `and her physical uncanniness is just the late stage of something that started in bear's head. she becomes not quite human on screen because his desire had already made her not quite human in concept, long before her body caught up. the transformation doesn't introduce the horror, it confirms it. her body finally looks the way he had always seen her, and the film just makes literal what objectifying desire does quietly all the time, which is turn a person into a vessel for someone else's need. the only difference is that here we get to watch it happen on the outside instead of taking its word for it.`,
      `so the uncanny valley becomes the gap between being desired and being recognized. bear wants nikki's devotion. he does not want nikki, and those are not the same hunger even when they wear the same face, because one of them needs her to be a separate person and the other needs her not to be. that distance, between wanting what someone gives you and actually seeing who they are, is where the real horror lives. it's quieter than the body stuff, but it lasts longer, because being desired without being recognized does the exact thing the transformation does. it takes a whole person and keeps only the useful part.`,
      `i don't think bear ever loved her. and maybe this just shows how jaded i've gotten about romance, but the film made me think about how often men pursue women the way you pursue a thing to be won, something to conquer and possess and keep, instead of a person with an interior life running parallel to your own, going on whether or not you're watching. to love someone is to accept that they're their own person, with thoughts and contradictions and a freedom that has nothing to do with you and that you don't get a vote in. bear strips nikki of all of it. his wish is for her to love him more than anyone in the world, which sounds romantic until you watch it play out for an hour and fifty minutes in a dark theater and realize it isn't a wish for love at all. it's a wish for a result. he never asks to know her. he asks to own the center of her, to have the devotion without the person it was supposed to come from. that's not love. that's a man asking to be the last thing left inside another human being.`,
      `it's a nightmare to watch nikki get drained of agency, her body and presence enslaved to his wanting. the part that made me feel sick was her asking to be killed. i've been honest with myself about this one: i think i would have done it. a life with no autonomy reads to me as a living hell, and i understand the mercy in ending it. it tells you exactly what his wish did to her, that the only thing left to want was the end of wanting.`,
      `but here's what hollows the whole thing out. bear gets exactly what he wished for, and it still isn't enough to stop him from catching feelings for sarah. he won, and he wandered off anyway. that's what gives it away, because if it had ever been about nikki, getting all of her would have ended it. it didn't. he got the total devotion of an entire human being and his eye drifted anyway, because the emptiness he was trying to fill was never in her. it was in him, and a person can't fix that, because the second they become real they stop being a mirror. it was never about nikki. it was about needing someone, anyone, to reflect his worth back at him, and that hunger doesn't get satisfied. it just finds a new face that hasn't let it down yet.`,
    ],
  },
  {
    slug: "how-to-start",
    number: "No. 009",
    title: "how to start — jodi kantor",
    dateRange: "May 2026",
    date: "2026-05-18",
    tags: ["beginnings", "method", "writing"],
    video: "/video/jodi-kantor.mp4",
    videoInsertAfterParagraph: -1,
    sections: [],
    paragraphs: [
      `jodi kantor's "how to start" argues that a life's work gets built from two things: a craft you develop over time, and a real need in the world to point it at. something you make slowly and aim somewhere it's wanted. it's a practical book. she's not telling anyone to follow their heart off a cliff.`,
      `scott klemmer handed it to me after i'd already taken the jump offer, when i asked him how to think about what to do with a design degree. so i read it backwards from most people, not looking for a decision but holding one already made, watching the book describe the thing i'd just done. it felt like validation arriving after the fact. the craft, the need, the slow aim toward somewhere it's wanted.`,
      `i did the leap anyway, and it wasn't one clean jump. the engineering job was the cleaner math: defined, fundable, easy to explain at family dinners. but the craft i actually developed on the side, the needfinding, the ethnography, the way i can't stop reorganizing a messy problem until the real question underneath it shows up, wasn't the one my title was paying me for. it kept showing up uninvited anyway; i just can't help myself. i'd be handed a finished spec and find myself asking whether we were building the right thing or just the thing that had been decided. that's the gap kantor names; i'd built a craft and was aiming it at the wrong need.`,
      `jump is the first place the two line up. strategist, which in plain terms means the work is the thing i was already doing for free: go find what people actually need before anyone's decided what to build, then turn that into an actionable business insight. they're paying me to do the part i'd have done anyway, for a firm whose entire reason to exist is asking the question before the answer. the engineering job paid me to execute decisions other people had already made. jump pays me to find the decision worth making.`,
      `so it isn't following my heart off a cliff. the scared part wasn't the pivot, it was admitting to myself that the safer version was never going to make me happy, and choosing the thing that does even though it's harder to explain to my asian immigrant mother, who couldn't believe i quit my job but who eventually ended up prouder of me for landing at jump than i was. it didn't feel brave in the moment. it's just trusting the craft was real enough to land somewhere it belonged. and it did!`,
    ],
  },
  {
    slug: "marty-supreme",
    number: "No. 010",
    title: "marty supreme — josh safdie",
    dateRange: "watched may 10",
    date: "2026-05-15",
    tags: ["film", "obsession", "passion"],
    heroImage: "/marty-supreme.jpeg",
    audio: "/audio/fire-in-my-heart.mp3",
    audioLabel: "fire in my heart — escape new york",
    imageInserts: [
      // Pointing — after "marty wants it that badly" paragraph
      { src: "/marty-supreme-pointing.jpg", alt: "marty reisman pointing", afterParagraph: 2, width: 735, height: 414 },
      // Hitting — after "when i watch marty i'm not watching a stranger" paragraph
      { src: "/marty-supreme-hitting.jpg", alt: "marty reisman at the table", afterParagraph: 5, width: 736, height: 503 },
    ],
    sections: [],
    paragraphs: [
      `i commend marty. i have nothing but respect for his unrelenting pursuit of his goals.`,
      `bukowski's line gets summarized as find what you love and let it kill you. passion isn't always beautiful. it clings, it drains, more often than not it takes more than it gives back, and you keep feeding it anyway, because being consumed by something you care about feels less like dying than being preserved by it. the thing eats you, but it also holds you in place. that's the trade, and people who've never made it don't understand why anyone would.`,
      `marty wants it that badly, and i admire the wanting while flinching at the math of it. because there is math. what gets left in the wake of someone consumed by their passion? who pays for the greatness, and do they get asked first? the cost is real and it usually lands on someone other than the person doing the wanting. i don't pretend otherwise. i just don't think the cost cancels the wanting.`,
      `people love a passionate person right up until the passion points somewhere inconvenient. devote your whole life to a partner and we call it romantic. devote it to your kids and we call it noble. devote it to a craft the world already agrees is beautiful and we call it dedication. but aim that exact same intensity at status, at mastery, at some self-serving dream nobody voted to approve, and suddenly it's narcissism. it's selfishness. it's a lot. it's too much. the passion didn't change, only the target did, and the target is the only thing being judged. we pretend we're evaluating how hard someone loves when we're really just deciding whether we approve of what they love.`,
      `the emotional engine is identical. the person capable of once-in-a-lifetime love is also capable of once-in-a-lifetime destruction. it's one wiring. you don't get the capacity for devotion without the other side of the coin, and you don't get to admire it in the cases that flatter you and recoil from it in the ones that don't. it's the same thing. it was always going to be the same thing.`,
      `when i watch marty i'm not watching a stranger. that's why i love his character. i love people who want something so badly it rearranges their life. i'm not saying that makes them good, or safe, or easy to love. usually it makes them none of those things, and i wouldn't argue i'm any of those things either.`,
      `camus said the meaning of life is whatever you're doing that keeps you from killing yourself, and it's true for a certain kind of person. for some it's romance, for some it's faith, or family, or art, or the stage, or the win. for marty it's ping pong, and i refuse to shame that just because it doesn't come wrapped in softness or sacrifice for someone else. i won't yuck anyone's yum when their reason to stay alive is romantic love, so the contempt marty gets for aiming that same life-or-death energy at something self-serving is incoherent, not just unfair. we're applauding the impulse and condemning it in the same breath, depending only on where it points. not every consuming passion has to be morally pure to be real, and asking it to be is just a way of saying you'd prefer the people around you stay small.`,
      `the film has influenced me more than i'd like to admit. it's easy to love marty from a seat in the dark, because admiring him doesn't cost me anything. the harder question is the one it left me with: how much of myself i'd hand over to be that good at one thing. i'm still working that out, and the uneasy part isn't that i don't have an answer. it's that i already do, and it's a lot.`,
    ],
  },
  {
    slug: "au-pays-du-cocaine",
    number: "No. 011",
    title: "au pays du cocaine - geese",
    dateRange: "May 2026",
    date: "2026-05-01",
    tags: ["music", "grief", "pain"],
    audio: "/audio/au-pays-du-cocaine.mp3",
    audioLabel: "au pays du cocaine — geese",
    imageInserts: [
      // The medieval painting — right after the cockaigne/cocaine pun is explained
      { src: "/au-pays-du-cockaigne.jpg", alt: "au pays du cockaigne — the land of cockaigne", afterParagraph: 3, width: 2000, height: 1316 },
      // The cocaine still — later, after the bargaining floor section
      { src: "/au-pays-du-cocaine.jpg", alt: "au pays du cocaine", afterParagraph: 6, width: 720, height: 540 },
    ],
    sections: [],
    paragraphs: [
      `i need my pain to mean something. not while it's happening, the moment can stay unbearable and i let it, but after, on some delay, i go looking. i comb the wreckage for the lesson. i decide the thing that hurt me also healed me, that i came out more perceptive, more conscious, better at reading people. murakami has that line about pain being more bearable when it's meaningful, and i've never treated it as an observation. i treat it as an instruction. if it hurt, it had better have built something, because i don't know what to do with damage that just stays damage. i would rather understand a thing than be free of it, and i've spent a long time pretending those are the same.`,
      `i'm not afraid to admit this is a coping mechanism wearing the costume of a philosophy. i don't float above the people who hurt me. i still complain, still get angry, still mourn things too old to ache and talk badly about people i think deserve it. but under all of that runs a quieter machine, and the meaning machine has one job, which is to convert hurt into insight fast enough that it never gets to sit in me as plain loss. plain loss is the thing i can't metabolize. so i feed it the worst year i've had and i wait for it to hand me back something usable.`,
      `here is what i fed it. a breakup that lasted almost half a year longer than it should have, because he was unsure of me, and his uncertainty was contagious. one day he was enamored, genuinely, the kind of attention that reorganizes your week. the next day my character was the subject under review. i never knew who i was waking up to, and the not-knowing did something to my nervous system i'm still living inside. it's a particular cruelty to be loved and doubted by the same person, to be the thing he wanted and the problem in his life at once. i stopped feeling like a person and started feeling like a situation he had to manage his feelings about, and once you become a situation you start behaving like one. you get smaller so you're easier to resolve. you apologize for the room you take up. you turn yourself into someone low-maintenance enough to keep.`,
      `i found the geese song somewhere in the middle of that and it attached itself before i understood why. the title is a corruption. it sits on top of an old french phrase for the land of cockaigne, the medieval fantasy where the rivers run with wine and nobody works and there's no want of anything, abundance with no cost. and the song won't let you keep that. it slides cockaigne into cocaine and the whole paradise goes chemical, too bright, too fast, gone by morning. it turns the land of plenty into the place you go because you can't stand where you actually are. i didn't love him by then, i don't think. i loved the person he used to be. i kept trying to get back to the version of us that had felt like abundance, and i kept dosing myself on the memory of it because the memory was the only place the abundance still lived.`,
      `then there's the line. he says it over and over, you can change, you can change, baby you can change and still choose me, and the first few times i heard it i mistook it for generosity. someone telling another person, go, become whoever you need to be, just keep me. it took me longer to hear it for what it is, which is not generosity, it's bargaining. it's a person frantically widening the terms because the deal is collapsing under him. you can change. you can be free. you can rewrite every condition. just stay.`,
      `i didn't want to recognize it, because recognizing it meant admitting we were running the same program from opposite ends of the room. i'd been saying it for months. that was my whole strategy during the ending. i wasn't asking him to be good to me. i had quietly retired that request. i was negotiating against his distance, offering an unreal amount of room. you can be unsure. you can need space. you can question me on tuesday and want me on wednesday. just let me stay somewhere in your life. i kept manufacturing smaller versions of myself, ones that demanded less and recovered faster and needed almost nothing, and i offered each one up like maybe this is the one you can keep. the pleading was not rational.`,
      `and the song knows where that ends, because it says the cruelest possible version of it as if it were a kindness. you can stay with me, and just pretend i'm not there. stay, and i'll make myself absent. stay, and you won't have to register me at all. i'll subtract myself from the room so my presence stops being something you have to feel anything about. that's the floor of the bargaining, and i hit it of course. i stopped asking to be loved and started asking only to remain. i had confused access with love. as long as i was still allowed in the room, i could call it staying, and i couldn't see that i had started treating my own disappearance as the generous thing i had left to offer.`,
      `for a long time i held onto the idea that if i'd bargained better, become the right size, found the correct smaller self, it might have held.`,
      `that belief is humiliating but it's also load-bearing, because it means the suffering was a near-miss, a thing i could have won. the truth i finally couldn't negotiate around is simpler and worse. there was no version of me that would have worked, because he didn't love me, and you cannot become the right shape for a feeling that is not there. all that shrinking was not in service of saving something. there was nothing on the other end to save. which means there's nothing to make. the pain didn't sharpen me into someone wiser. it wasn't tuition. it was just pain, spent on someone who was already gone, and it didn't buy me a single thing.`,
      `i don't have a clean place to put that, and i'm refusing to build one, because the part of me that wants to end on what it taught me is the same machine that got me into the bargaining.`,
      `so here is the most honest version i have. the meaning didn't redeem any of it. understanding why i pleaded doesn't return the half year or soften the cruelty of being doubted by someone who claimed to want me, and knowing he never loved me doesn't convert into wisdom no matter how long i hold it up to the light. it stays what it was. but i think i was wrong about the job all along. the meaning was never supposed to redeem the pain. it just makes me less afraid to remember it. someone could love the idea of me and doubt the fact of me and leave me unsure and disappear, and all of it can stay true at once, and i don't have to forgive him to live with that, and i don't have to hate him either. i just have to stop pretending i wasn't there. i was there the whole time. that's the only part i get to keep.`,
    ],
  },
];

export default essays;

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}

export function getAllSlugs(): string[] {
  return essays.map((e) => e.slug);
}
