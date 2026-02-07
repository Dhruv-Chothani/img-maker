export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export interface Category {
  id: string;
  name: Record<string, string>;
  icon: string;
  color: string;
  occasions: Occasion[];
}

export interface Occasion {
  id: string;
  name: Record<string, string>;
  emoji: string;
  templateCount: number;
}

export interface Template {
  id: string;
  occasionId: string;
  layout: TemplateLayout;
  background: BackgroundConfig;
  frame: FrameConfig;
  greeting: GreetingConfig;
  nameStyle: NameStyleConfig;
  decorations: DecorationConfig;
}

export interface TemplateLayout {
  type: "center" | "top" | "bottom" | "left" | "split" | "corner" | "fullBg" | "banner";
}

export interface BackgroundConfig {
  gradient: string;
  overlay?: string;
  pattern?: "dots" | "stars" | "hearts" | "floral" | "sparkles" | "confetti" | "waves" | "mandala" | "diyas" | "snowflakes" | "crescents" | "rangoli" | "balloons" | "ribbons" | "none";
}

export interface FrameConfig {
  shape: "circle" | "rounded" | "heart" | "diamond" | "oval" | "hexagon" | "star" | "arch";
  x: number;
  y: number;
  size: number;
  borderColor: string;
  borderWidth: number;
  glowColor?: string;
  shadow: boolean;
}

export interface GreetingConfig {
  line1: string;
  line2?: string;
  line1Size: number;
  line2Size?: number;
  y: number;
  color: string;
  fontStyle: "bold" | "script" | "elegant" | "playful";
}

export interface NameStyleConfig {
  fontSize: number;
  color: string;
  y: number;
  prefix?: string;
  suffix?: string;
  badge?: boolean;
  badgeColor?: string;
}

export interface DecorationConfig {
  topEmoji?: string;
  bottomEmoji?: string;
  cornerEmojis?: string[];
  borderDecor?: "gold" | "floral" | "sparkle" | "ribbon" | "none";
}

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳" },
];

export const categories: Category[] = [
  {
    id: "birthday",
    name: { en: "Birthday", hi: "जन्मदिन", te: "పుట్టినరోజు", ta: "பிறந்தநாள்", kn: "ಹುಟ್ಟುಹಬ್ಬ", mr: "वाढदिवस" },
    icon: "🎂",
    color: "from-pink-400 to-rose-500",
    occasions: [
      { id: "birthday-friend", name: { en: "Friend", hi: "दोस्त", te: "స్నేహితుడు", ta: "நண்பர்", kn: "ಸ್ನೇಹಿತ", mr: "मित्र" }, emoji: "👫", templateCount: 12 },
      { id: "birthday-brother", name: { en: "Brother", hi: "भाई", te: "సోదరుడు", ta: "சகோதரன்", kn: "ಸಹೋದರ", mr: "भाऊ" }, emoji: "👦", templateCount: 10 },
      { id: "birthday-sister", name: { en: "Sister", hi: "बहन", te: "సోదరి", ta: "சகோதரி", kn: "ಸಹೋದರಿ", mr: "बहीण" }, emoji: "👧", templateCount: 10 },
      { id: "birthday-mother", name: { en: "Mother", hi: "माँ", te: "అమ్మ", ta: "அம்மா", kn: "ಅಮ್ಮ", mr: "आई" }, emoji: "👩", templateCount: 12 },
      { id: "birthday-father", name: { en: "Father", hi: "पापा", te: "నాన్న", ta: "அப்பா", kn: "ಅಪ್ಪ", mr: "बाबा" }, emoji: "👨", templateCount: 10 },
      { id: "birthday-wife", name: { en: "Wife", hi: "पत्नी", te: "భార్య", ta: "மனைவி", kn: "ಹೆಂಡತಿ", mr: "पत्नी" }, emoji: "💑", templateCount: 11 },
    ],
  },
  {
    id: "love",
    name: { en: "Love & Anniversary", hi: "प्रेम और सालगिरह", te: "ప్రేమ & వార్షికోత్సవం", ta: "காதல் & ஆண்டுவிழா", kn: "ಪ್ರೀತಿ & ವಾರ್ಷಿಕೋತ್ಸವ", mr: "प्रेम आणि वर्धापनदिन" },
    icon: "❤️",
    color: "from-red-400 to-pink-500",
    occasions: [
      { id: "love-valentine", name: { en: "Valentine's Day", hi: "वैलेंटाइन डे", te: "వాలెంటైన్స్ డే", ta: "காதலர் தினம்", kn: "ವ್ಯಾಲೆಂಟೈನ್ಸ್ ಡೇ", mr: "व्हॅलेंटाईन डे" }, emoji: "💕", templateCount: 12 },
      { id: "love-anniversary", name: { en: "Anniversary", hi: "सालगिरह", te: "వార్షికోత్సవం", ta: "ஆண்டுவிழா", kn: "ವಾರ್ಷಿಕೋತ್ಸವ", mr: "वर्धापनदिन" }, emoji: "💍", templateCount: 10 },
      { id: "love-proposal", name: { en: "Proposal", hi: "प्रपोजल", te: "ప్రపోజల్", ta: "திருமண முன்மொழிவு", kn: "ಪ್ರಪೋಸಲ್", mr: "प्रपोजल" }, emoji: "💐", templateCount: 10 },
    ],
  },
  {
    id: "festivals",
    name: { en: "Festivals", hi: "त्यौहार", te: "పండుగలు", ta: "பண்டிகைகள்", kn: "ಹಬ್ಬಗಳು", mr: "सण" },
    icon: "🎉",
    color: "from-amber-400 to-orange-500",
    occasions: [
      { id: "festival-diwali", name: { en: "Diwali", hi: "दिवाली", te: "దీపావళి", ta: "தீபாவளி", kn: "ದೀಪಾವಳಿ", mr: "दिवाळी" }, emoji: "🪔", templateCount: 15 },
      { id: "festival-holi", name: { en: "Holi", hi: "होली", te: "హోలీ", ta: "ஹோலி", kn: "ಹೋಳಿ", mr: "होळी" }, emoji: "🎨", templateCount: 12 },
      { id: "festival-christmas", name: { en: "Christmas", hi: "क्रिसमस", te: "క్రిస్మస్", ta: "கிறிஸ்மஸ்", kn: "ಕ್ರಿಸ್ಮಸ್", mr: "ख्रिसमस" }, emoji: "🎄", templateCount: 12 },
      { id: "festival-eid", name: { en: "Eid", hi: "ईद", te: "ఈద్", ta: "ஈத்", kn: "ಈದ್", mr: "ईद" }, emoji: "🌙", templateCount: 10 },
      { id: "festival-sankranti", name: { en: "Sankranti", hi: "संक्रांति", te: "సంక్రాంతి", ta: "பொங்கல்", kn: "ಸಂಕ್ರಾಂತಿ", mr: "संक्रांती" }, emoji: "🪁", templateCount: 10 },
    ],
  },
  {
    id: "motivation",
    name: { en: "Motivation", hi: "प्रेरणा", te: "ప్రేరణ", ta: "ஊக்கம்", kn: "ಪ್ರೇರಣೆ", mr: "प्रेरणा" },
    icon: "💪",
    color: "from-teal-400 to-emerald-500",
    occasions: [
      { id: "motivation-success", name: { en: "Success", hi: "सफलता", te: "విజయం", ta: "வெற்றி", kn: "ಯಶಸ್ಸು", mr: "यश" }, emoji: "🏆", templateCount: 10 },
      { id: "motivation-goodmorning", name: { en: "Good Morning", hi: "सुप्रभात", te: "శుభోదయం", ta: "காலை வணக்கம்", kn: "ಶುಭೋದಯ", mr: "सुप्रभात" }, emoji: "🌅", templateCount: 12 },
      { id: "motivation-quotes", name: { en: "Inspirational", hi: "प्रेरणादायक", te: "స్ఫూర్తిదాయకం", ta: "உத்வேகம்", kn: "ಸ್ಫೂರ್ತಿದಾಯಕ", mr: "प्रेरणादायी" }, emoji: "✨", templateCount: 10 },
    ],
  },
  {
    id: "religious",
    name: { en: "Religious", hi: "धार्मिक", te: "ధార్మిక", ta: "மதம்", kn: "ಧಾರ್ಮಿಕ", mr: "धार्मिक" },
    icon: "🙏",
    color: "from-yellow-400 to-amber-500",
    occasions: [
      { id: "religious-ganesh", name: { en: "Ganesh Chaturthi", hi: "गणेश चतुर्थी", te: "వినాయక చవితి", ta: "விநாயகர் சதுர்த்தி", kn: "ಗಣೇಶ ಚತುರ್ಥಿ", mr: "गणेश चतुर्थी" }, emoji: "🐘", templateCount: 12 },
      { id: "religious-navratri", name: { en: "Navratri", hi: "नवरात्रि", te: "నవరాత్రి", ta: "நவராத்திரி", kn: "ನವರಾತ್ರಿ", mr: "नवरात्री" }, emoji: "🔱", templateCount: 10 },
      { id: "religious-ram-navami", name: { en: "Ram Navami", hi: "राम नवमी", te: "శ్రీరామ నవమి", ta: "ராம நவமி", kn: "ರಾಮ ನವಮಿ", mr: "राम नवमী" }, emoji: "🏹", templateCount: 10 },
    ],
  },
];

// Occasion-specific greeting messages and visual themes
interface OccasionTheme {
  greetings: { line1: string; line2?: string }[];
  patterns: BackgroundConfig["pattern"][];
  gradients: string[];
  borderDecors: DecorationConfig["borderDecor"][];
  emojis: string[];
  namePrefixes: string[];
}

const occasionThemes: Record<string, OccasionTheme> = {
  "birthday-friend": {
    greetings: [
      { line1: "Happy Birthday!", line2: "To My Amazing Friend" },
      { line1: "🎉 Birthday Bash!", line2: "Party Time, Bestie!" },
      { line1: "Cheers to You!", line2: "Another Year of Awesomeness" },
      { line1: "B-Day Vibes!", line2: "You Deserve the Best" },
      { line1: "Hip Hip Hooray!", line2: "It's Your Special Day" },
      { line1: "Make a Wish!", line2: "Today is All About You" },
    ],
    patterns: ["balloons", "confetti", "sparkles", "stars", "ribbons", "dots"],
    gradients: [
      "linear-gradient(135deg, #ff6b6b, #ee5a24)", "linear-gradient(160deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #a29bfe, #6c5ce7)", "linear-gradient(145deg, #fd79a8, #e84393)",
      "linear-gradient(135deg, #fdcb6e, #e17055)", "linear-gradient(180deg, #ff9a9e, #fad0c4)",
      "linear-gradient(135deg, #667eea, #764ba2)", "linear-gradient(145deg, #ffecd2, #fcb69f)",
      "linear-gradient(135deg, #a1c4fd, #c2e9fb)", "linear-gradient(135deg, #f5af19, #f12711)",
      "linear-gradient(160deg, #e0c3fc, #8ec5fc)", "linear-gradient(135deg, #fa709a, #fee140)",
    ],
    borderDecors: ["sparkle", "ribbon", "gold", "floral", "none", "sparkle"],
    emojis: ["🎂", "🎈", "🎁", "🥳", "🎊", "🍰"],
    namePrefixes: ["Dear ", "Happy B'day ", "For ", "To ", "Cheers ", "Love to "],
  },
  "birthday-brother": {
    greetings: [
      { line1: "Happy Birthday Bro!", line2: "Best Brother Ever" },
      { line1: "To My Brother", line2: "Wishing You Joy & Happiness" },
      { line1: "Bro's Birthday!", line2: "You Rock, Always" },
      { line1: "Happy B'day!", line2: "To the Coolest Brother" },
      { line1: "Birthday Wishes", line2: "For My Dear Brother" },
    ],
    patterns: ["confetti", "stars", "sparkles", "balloons", "ribbons", "dots"],
    gradients: [
      "linear-gradient(135deg, #667eea, #764ba2)", "linear-gradient(135deg, #0984e3, #6c5ce7)",
      "linear-gradient(145deg, #4facfe, #00f2fe)", "linear-gradient(135deg, #43e97b, #38f9d7)",
      "linear-gradient(135deg, #fa709a, #fee140)", "linear-gradient(160deg, #a1c4fd, #c2e9fb)",
      "linear-gradient(135deg, #f5af19, #f12711)", "linear-gradient(135deg, #ffecd2, #fcb69f)",
      "linear-gradient(145deg, #ff9a9e, #fecfef)", "linear-gradient(135deg, #6a11cb, #2575fc)",
    ],
    borderDecors: ["gold", "sparkle", "none", "ribbon", "gold", "sparkle"],
    emojis: ["🎂", "🎈", "🎁", "⭐", "🎊", "💙"],
    namePrefixes: ["Dear ", "Bro ", "For ", "To ", "Hey "],
  },
  "birthday-sister": {
    greetings: [
      { line1: "Happy Birthday Sis!", line2: "You're My Sunshine" },
      { line1: "Birthday Princess!", line2: "May All Your Dreams Come True" },
      { line1: "To My Sweet Sister", line2: "With All My Love" },
      { line1: "Sparkle & Shine!", line2: "It's Your Day, Sister" },
      { line1: "Happy B'day!", line2: "Sweetest Sister Ever" },
    ],
    patterns: ["floral", "hearts", "sparkles", "stars", "ribbons", "confetti"],
    gradients: [
      "linear-gradient(135deg, #fd79a8, #e84393)", "linear-gradient(145deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #a29bfe, #6c5ce7)", "linear-gradient(160deg, #e0c3fc, #8ec5fc)",
      "linear-gradient(135deg, #ff9a9e, #fad0c4)", "linear-gradient(145deg, #ffecd2, #fcb69f)",
      "linear-gradient(135deg, #fbc2eb, #a6c1ee)", "linear-gradient(145deg, #fa709a, #fee140)",
      "linear-gradient(135deg, #ff6b6b, #ee5a24)", "linear-gradient(160deg, #a18cd1, #fbc2eb)",
    ],
    borderDecors: ["floral", "sparkle", "ribbon", "gold", "floral", "sparkle"],
    emojis: ["🌸", "🎀", "💖", "🦋", "🌺", "✨"],
    namePrefixes: ["Dear ", "Sweet ", "For ", "To ", "My "],
  },
  "birthday-mother": {
    greetings: [
      { line1: "Happy Birthday Mom!", line2: "You Mean the World to Me" },
      { line1: "To the Best Mom", line2: "Thank You for Everything" },
      { line1: "Birthday Blessings", line2: "For My Dearest Mother" },
      { line1: "Happy Birthday!", line2: "To My Superwoman" },
      { line1: "Mom, You Shine!", line2: "Wishing You All the Happiness" },
      { line1: "With All My Love", line2: "Happy Birthday, Mom!" },
    ],
    patterns: ["floral", "hearts", "sparkles", "dots", "stars", "waves"],
    gradients: [
      "linear-gradient(135deg, #f093fb, #f5576c)", "linear-gradient(145deg, #fbc2eb, #a6c1ee)",
      "linear-gradient(135deg, #ffecd2, #fcb69f)", "linear-gradient(160deg, #ff9a9e, #fad0c4)",
      "linear-gradient(135deg, #a18cd1, #fbc2eb)", "linear-gradient(145deg, #fa709a, #fee140)",
      "linear-gradient(135deg, #fdcb6e, #e17055)", "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
      "linear-gradient(135deg, #fd79a8, #e84393)", "linear-gradient(145deg, #fad0c4, #ffd1ff)",
      "linear-gradient(135deg, #ff6b6b, #ee5a24)", "linear-gradient(160deg, #f5af19, #f12711)",
    ],
    borderDecors: ["floral", "gold", "sparkle", "floral", "ribbon", "gold"],
    emojis: ["🌹", "💐", "💖", "👩", "🌺", "🌷"],
    namePrefixes: ["Dearest ", "Mom ", "For ", "To ", "My Dear ", "Beloved "],
  },
  "birthday-father": {
    greetings: [
      { line1: "Happy Birthday Dad!", line2: "My Hero Forever" },
      { line1: "To the Best Father", line2: "You Are My Strength" },
      { line1: "Birthday Cheers!", line2: "For My Amazing Dad" },
      { line1: "Happy Birthday!", line2: "To the World's Best Dad" },
      { line1: "Dad, You're Great!", line2: "Wishing You Joy" },
    ],
    patterns: ["stars", "dots", "sparkles", "confetti", "waves", "none"],
    gradients: [
      "linear-gradient(135deg, #667eea, #764ba2)", "linear-gradient(135deg, #2c3e50, #3498db)",
      "linear-gradient(145deg, #0984e3, #00b894)", "linear-gradient(135deg, #f5af19, #f12711)",
      "linear-gradient(135deg, #43e97b, #38f9d7)", "linear-gradient(160deg, #4facfe, #00f2fe)",
      "linear-gradient(135deg, #6a11cb, #2575fc)", "linear-gradient(145deg, #ffecd2, #fcb69f)",
      "linear-gradient(135deg, #a1c4fd, #c2e9fb)", "linear-gradient(135deg, #fdcb6e, #e17055)",
    ],
    borderDecors: ["gold", "none", "sparkle", "gold", "ribbon", "none"],
    emojis: ["👔", "🏆", "⭐", "💪", "🎩", "❤️"],
    namePrefixes: ["Dear ", "Dad ", "For ", "To ", "Papa "],
  },
  "birthday-wife": {
    greetings: [
      { line1: "Happy Birthday My Love!", line2: "You Complete Me" },
      { line1: "To My Beautiful Wife", line2: "Forever & Always" },
      { line1: "Birthday Wishes", line2: "For My Soulmate" },
      { line1: "You Are My World", line2: "Happy Birthday, Darling!" },
      { line1: "My Queen!", line2: "Wishing You a Magical Day" },
      { line1: "Happy Birthday!", line2: "To the Love of My Life" },
    ],
    patterns: ["hearts", "floral", "sparkles", "stars", "dots", "waves"],
    gradients: [
      "linear-gradient(135deg, #ff6b6b, #ee5a24)", "linear-gradient(145deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #fd79a8, #e84393)", "linear-gradient(160deg, #e0c3fc, #8ec5fc)",
      "linear-gradient(135deg, #a18cd1, #fbc2eb)", "linear-gradient(145deg, #ff9a9e, #fecfef)",
      "linear-gradient(135deg, #fbc2eb, #a6c1ee)", "linear-gradient(145deg, #ffecd2, #fcb69f)",
      "linear-gradient(135deg, #fa709a, #fee140)", "linear-gradient(135deg, #fad0c4, #ffd1ff)",
      "linear-gradient(160deg, #ff9a9e, #fad0c4)",
    ],
    borderDecors: ["gold", "floral", "sparkle", "ribbon", "gold", "floral"],
    emojis: ["💕", "🌹", "💖", "💎", "🦋", "💗"],
    namePrefixes: ["My Love ", "Darling ", "Dear ", "Sweetheart ", "Beloved ", "My "],
  },
  "love-valentine": {
    greetings: [
      { line1: "Happy Valentine's Day!", line2: "You Are My Forever" },
      { line1: "Be My Valentine", line2: "Now & Always" },
      { line1: "I Love You!", line2: "Happy Valentine's Day" },
      { line1: "My Heart is Yours", line2: "Forever Valentine" },
      { line1: "Love You to the Moon", line2: "& Back! ❤️" },
      { line1: "You + Me = ❤️", line2: "Happy Valentine's!" },
    ],
    patterns: ["hearts", "sparkles", "floral", "dots", "stars", "hearts"],
    gradients: [
      "linear-gradient(135deg, #ff6b6b, #ee5a24)", "linear-gradient(145deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #fd79a8, #e84393)", "linear-gradient(135deg, #e74c3c, #c0392b)",
      "linear-gradient(160deg, #ff9a9e, #fad0c4)", "linear-gradient(135deg, #a18cd1, #fbc2eb)",
      "linear-gradient(145deg, #fbc2eb, #a6c1ee)", "linear-gradient(135deg, #fa709a, #fee140)",
      "linear-gradient(135deg, #ff6b6b, #fad0c4)", "linear-gradient(145deg, #e0c3fc, #8ec5fc)",
      "linear-gradient(135deg, #f5576c, #ff6b6b)", "linear-gradient(160deg, #fad0c4, #ffd1ff)",
    ],
    borderDecors: ["gold", "floral", "sparkle", "ribbon", "gold", "floral"],
    emojis: ["💕", "❤️", "💖", "🌹", "💗", "💘"],
    namePrefixes: ["My Love ", "Dearest ", "For ", "To ", "With Love, ", "Forever Yours, "],
  },
  "love-anniversary": {
    greetings: [
      { line1: "Happy Anniversary!", line2: "To Many More Years Together" },
      { line1: "Years of Love", line2: "Happy Anniversary, Sweetheart" },
      { line1: "Together Forever", line2: "Happy Anniversary!" },
      { line1: "Our Love Story", line2: "Gets Better Every Year" },
      { line1: "Cheers to Us!", line2: "Happy Anniversary" },
    ],
    patterns: ["sparkles", "hearts", "stars", "floral", "dots", "none"],
    gradients: [
      "linear-gradient(135deg, #f5af19, #f12711)", "linear-gradient(145deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #667eea, #764ba2)", "linear-gradient(135deg, #a18cd1, #fbc2eb)",
      "linear-gradient(160deg, #ffecd2, #fcb69f)", "linear-gradient(135deg, #fdcb6e, #e17055)",
      "linear-gradient(145deg, #fa709a, #fee140)", "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
      "linear-gradient(135deg, #fbc2eb, #a6c1ee)", "linear-gradient(145deg, #ff9a9e, #fad0c4)",
    ],
    borderDecors: ["gold", "sparkle", "ribbon", "gold", "floral", "none"],
    emojis: ["💍", "🥂", "💕", "💖", "🎉", "✨"],
    namePrefixes: ["Dearest ", "My Love ", "For ", "To ", "With "],
  },
  "love-proposal": {
    greetings: [
      { line1: "Will You Marry Me?", line2: "You Make Life Beautiful" },
      { line1: "I Choose You", line2: "Today & Every Day" },
      { line1: "Forever Starts Now", line2: "Be Mine?" },
      { line1: "My Heart Says Yes", line2: "Do Yours? 💍" },
      { line1: "Love of My Life", line2: "Let's Write Our Story" },
    ],
    patterns: ["hearts", "sparkles", "floral", "stars", "dots", "hearts"],
    gradients: [
      "linear-gradient(135deg, #fd79a8, #e84393)", "linear-gradient(145deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #ff6b6b, #ee5a24)", "linear-gradient(160deg, #e0c3fc, #8ec5fc)",
      "linear-gradient(135deg, #fbc2eb, #a6c1ee)", "linear-gradient(145deg, #ffecd2, #fcb69f)",
      "linear-gradient(135deg, #a18cd1, #fbc2eb)", "linear-gradient(135deg, #fa709a, #fee140)",
      "linear-gradient(145deg, #ff9a9e, #fad0c4)", "linear-gradient(135deg, #fad0c4, #ffd1ff)",
    ],
    borderDecors: ["gold", "floral", "sparkle", "gold", "ribbon", "floral"],
    emojis: ["💍", "💐", "💕", "🌹", "💖", "🦋"],
    namePrefixes: ["Dearest ", "My ", "For ", "To ", "Beloved "],
  },
  "festival-diwali": {
    greetings: [
      { line1: "Happy Diwali! 🪔", line2: "Festival of Lights" },
      { line1: "Shubh Deepavali!", line2: "May Light Guide Your Way" },
      { line1: "Diwali Blessings", line2: "Joy, Prosperity & Happiness" },
      { line1: "Happy Diwali!", line2: "Spread Light & Love" },
      { line1: "Light Up Your Life!", line2: "Wishing You a Bright Diwali" },
      { line1: "Diwali Greetings!", line2: "May Your Life Shine Bright" },
      { line1: "Festival of Joy!", line2: "Happy Diwali to You" },
    ],
    patterns: ["diyas", "sparkles", "mandala", "rangoli", "stars", "dots", "sparkles"],
    gradients: [
      "linear-gradient(135deg, #f5af19, #f12711)", "linear-gradient(145deg, #fdcb6e, #e17055)",
      "linear-gradient(135deg, #ee5a24, #f5af19)", "linear-gradient(160deg, #ffecd2, #fcb69f)",
      "linear-gradient(135deg, #ff6b6b, #ee5a24)", "linear-gradient(145deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #a29bfe, #6c5ce7)", "linear-gradient(135deg, #fdcb6e, #ff6b6b)",
      "linear-gradient(145deg, #fa709a, #fee140)", "linear-gradient(135deg, #2c3e50, #f5af19)",
      "linear-gradient(135deg, #667eea, #764ba2)", "linear-gradient(160deg, #f5af19, #ee5a24)",
      "linear-gradient(135deg, #fad0c4, #ffd1ff)", "linear-gradient(145deg, #ff9a9e, #fecfef)",
      "linear-gradient(135deg, #e17055, #fdcb6e)",
    ],
    borderDecors: ["gold", "sparkle", "gold", "sparkle", "gold", "floral", "sparkle"],
    emojis: ["🪔", "✨", "🎆", "🎇", "🕯️", "💫", "🌟"],
    namePrefixes: ["Dear ", "Wishing ", "For ", "To ", "Blessings to ", "Happy Diwali ", "Shubh Deepavali "],
  },
  "festival-holi": {
    greetings: [
      { line1: "Happy Holi! 🎨", line2: "Festival of Colors" },
      { line1: "Rang Barse!", line2: "Happy Holi to You" },
      { line1: "Colorful Wishes!", line2: "Let the Colors Fly" },
      { line1: "Holi Hai!", line2: "Play with Joy & Love" },
      { line1: "Splash of Colors!", line2: "Happy Holi" },
      { line1: "Paint the World!", line2: "With Love & Colors" },
    ],
    patterns: ["confetti", "sparkles", "dots", "stars", "waves", "confetti"],
    gradients: [
      "linear-gradient(135deg, #ff6b6b, #fdcb6e)", "linear-gradient(145deg, #a29bfe, #fd79a8)",
      "linear-gradient(135deg, #55efc4, #fdcb6e)", "linear-gradient(160deg, #f093fb, #74b9ff)",
      "linear-gradient(135deg, #ff9a9e, #a29bfe)", "linear-gradient(145deg, #fdcb6e, #55efc4)",
      "linear-gradient(135deg, #fd79a8, #74b9ff)", "linear-gradient(135deg, #6c5ce7, #ff6b6b)",
      "linear-gradient(145deg, #00b894, #fdcb6e)", "linear-gradient(135deg, #e84393, #fdcb6e)",
      "linear-gradient(160deg, #74b9ff, #fd79a8)", "linear-gradient(135deg, #ff6b6b, #00b894)",
    ],
    borderDecors: ["sparkle", "ribbon", "none", "sparkle", "gold", "ribbon"],
    emojis: ["🎨", "🌈", "💜", "💚", "💛", "🎊"],
    namePrefixes: ["Dear ", "Hey ", "For ", "To ", "Happy Holi ", "Colors for "],
  },
  "festival-christmas": {
    greetings: [
      { line1: "Merry Christmas! 🎄", line2: "Joy to the World" },
      { line1: "Season's Greetings!", line2: "Wishing You Peace & Joy" },
      { line1: "Ho Ho Ho!", line2: "Merry Christmas" },
      { line1: "Christmas Blessings", line2: "Love, Joy & Peace" },
      { line1: "Jingle All the Way!", line2: "Merry Christmas to You" },
      { line1: "Silent Night", line2: "Holy Night ✨" },
    ],
    patterns: ["snowflakes", "stars", "sparkles", "dots", "snowflakes", "stars"],
    gradients: [
      "linear-gradient(135deg, #c0392b, #27ae60)", "linear-gradient(145deg, #2c3e50, #c0392b)",
      "linear-gradient(135deg, #27ae60, #2ecc71)", "linear-gradient(160deg, #e74c3c, #f5af19)",
      "linear-gradient(135deg, #2c3e50, #3498db)", "linear-gradient(145deg, #c0392b, #e74c3c)",
      "linear-gradient(135deg, #1abc9c, #2c3e50)", "linear-gradient(135deg, #e74c3c, #27ae60)",
      "linear-gradient(145deg, #3498db, #2c3e50)", "linear-gradient(135deg, #27ae60, #f5af19)",
      "linear-gradient(160deg, #c0392b, #2c3e50)", "linear-gradient(135deg, #f5af19, #c0392b)",
    ],
    borderDecors: ["gold", "sparkle", "ribbon", "gold", "sparkle", "none"],
    emojis: ["🎄", "⭐", "🎅", "🎁", "❄️", "🔔"],
    namePrefixes: ["Dear ", "Merry Christmas ", "For ", "To ", "Blessings to ", "Season's joy "],
  },
  "festival-eid": {
    greetings: [
      { line1: "Eid Mubarak! 🌙", line2: "Blessed Celebrations" },
      { line1: "Happy Eid!", line2: "May Peace Be Upon You" },
      { line1: "Eid Greetings", line2: "Joy & Prosperity" },
      { line1: "Eid Mubarak!", line2: "Wishing You Happiness" },
      { line1: "Blessed Eid!", line2: "May Allah Bless You" },
    ],
    patterns: ["crescents", "stars", "mandala", "dots", "sparkles", "crescents"],
    gradients: [
      "linear-gradient(135deg, #2c3e50, #1abc9c)", "linear-gradient(145deg, #667eea, #764ba2)",
      "linear-gradient(135deg, #f5af19, #2c3e50)", "linear-gradient(160deg, #0984e3, #00b894)",
      "linear-gradient(135deg, #6c5ce7, #a29bfe)", "linear-gradient(145deg, #00b894, #0984e3)",
      "linear-gradient(135deg, #2c3e50, #f5af19)", "linear-gradient(135deg, #1abc9c, #6c5ce7)",
      "linear-gradient(145deg, #f5af19, #ee5a24)", "linear-gradient(135deg, #764ba2, #667eea)",
    ],
    borderDecors: ["gold", "sparkle", "gold", "none", "sparkle", "gold"],
    emojis: ["🌙", "⭐", "🕌", "✨", "🌟", "🤲"],
    namePrefixes: ["Dear ", "Blessings to ", "For ", "To ", "Eid Mubarak "],
  },
  "festival-sankranti": {
    greetings: [
      { line1: "Happy Sankranti! 🪁", line2: "Harvest of Happiness" },
      { line1: "Happy Pongal!", line2: "Wishing You Prosperity" },
      { line1: "Sankranti Wishes", line2: "Joy & Good Fortune" },
      { line1: "Fly High! 🪁", line2: "Happy Makar Sankranti" },
      { line1: "Uttarayan Greetings!", line2: "Let Your Spirits Soar" },
    ],
    patterns: ["dots", "sparkles", "waves", "stars", "confetti", "none"],
    gradients: [
      "linear-gradient(135deg, #f5af19, #fdcb6e)", "linear-gradient(145deg, #55efc4, #00b894)",
      "linear-gradient(135deg, #fdcb6e, #ee5a24)", "linear-gradient(160deg, #74b9ff, #0984e3)",
      "linear-gradient(135deg, #e17055, #fdcb6e)", "linear-gradient(145deg, #00b894, #fdcb6e)",
      "linear-gradient(135deg, #fdcb6e, #f5af19)", "linear-gradient(135deg, #0984e3, #74b9ff)",
      "linear-gradient(145deg, #e17055, #f5af19)", "linear-gradient(135deg, #f5af19, #00b894)",
    ],
    borderDecors: ["gold", "sparkle", "none", "gold", "ribbon", "sparkle"],
    emojis: ["🪁", "☀️", "🌾", "✨", "🎊", "🌅"],
    namePrefixes: ["Dear ", "Wishing ", "For ", "To ", "Happy Sankranti "],
  },
  "motivation-success": {
    greetings: [
      { line1: "You're a Winner! 🏆", line2: "Keep Shining" },
      { line1: "Success Awaits!", line2: "Believe in Yourself" },
      { line1: "Dream Big!", line2: "Achieve Bigger" },
      { line1: "Rise & Conquer!", line2: "You've Got This" },
      { line1: "Champion!", line2: "Nothing Can Stop You" },
    ],
    patterns: ["stars", "sparkles", "dots", "waves", "none", "stars"],
    gradients: [
      "linear-gradient(135deg, #f5af19, #f12711)", "linear-gradient(145deg, #667eea, #764ba2)",
      "linear-gradient(135deg, #43e97b, #38f9d7)", "linear-gradient(160deg, #4facfe, #00f2fe)",
      "linear-gradient(135deg, #6a11cb, #2575fc)", "linear-gradient(145deg, #0984e3, #00b894)",
      "linear-gradient(135deg, #2c3e50, #3498db)", "linear-gradient(135deg, #ee5a24, #f5af19)",
      "linear-gradient(145deg, #a1c4fd, #c2e9fb)", "linear-gradient(135deg, #fdcb6e, #e17055)",
    ],
    borderDecors: ["gold", "sparkle", "none", "gold", "sparkle", "ribbon"],
    emojis: ["🏆", "⭐", "💪", "🚀", "🔥", "👑"],
    namePrefixes: ["Go ", "Champion ", "Dear ", "To ", "Hey "],
  },
  "motivation-goodmorning": {
    greetings: [
      { line1: "Good Morning! ☀️", line2: "Rise & Shine" },
      { line1: "New Day, New Hope!", line2: "Make It Amazing" },
      { line1: "Hello Sunshine!", line2: "Have a Beautiful Day" },
      { line1: "Morning Vibes! 🌅", line2: "Stay Positive" },
      { line1: "Wake Up & Smile!", line2: "Today is Your Day" },
      { line1: "Fresh Start!", line2: "Good Morning to You" },
    ],
    patterns: ["dots", "waves", "sparkles", "stars", "none", "dots"],
    gradients: [
      "linear-gradient(135deg, #f5af19, #fdcb6e)", "linear-gradient(145deg, #ffecd2, #fcb69f)",
      "linear-gradient(135deg, #43e97b, #38f9d7)", "linear-gradient(160deg, #a1c4fd, #c2e9fb)",
      "linear-gradient(135deg, #74b9ff, #0984e3)", "linear-gradient(145deg, #ff9a9e, #fad0c4)",
      "linear-gradient(135deg, #55efc4, #00b894)", "linear-gradient(135deg, #fdcb6e, #e17055)",
      "linear-gradient(145deg, #81ecec, #00cec9)", "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      "linear-gradient(160deg, #ffecd2, #fcb69f)", "linear-gradient(135deg, #00b894, #55efc4)",
    ],
    borderDecors: ["none", "sparkle", "gold", "none", "sparkle", "ribbon"],
    emojis: ["☀️", "🌅", "🌻", "🌈", "☕", "🌸"],
    namePrefixes: ["Dear ", "Good Morning ", "Hey ", "To ", "Rise & Shine ", "Morning "],
  },
  "motivation-quotes": {
    greetings: [
      { line1: "Stay Inspired! ✨", line2: "The Best is Yet to Come" },
      { line1: "Keep Going!", line2: "Great Things Take Time" },
      { line1: "Be Fearless!", line2: "Your Potential is Limitless" },
      { line1: "Shine Bright!", line2: "You're a Star" },
      { line1: "Never Give Up!", line2: "Believe & Achieve" },
    ],
    patterns: ["stars", "sparkles", "dots", "waves", "none", "stars"],
    gradients: [
      "linear-gradient(135deg, #667eea, #764ba2)", "linear-gradient(145deg, #6a11cb, #2575fc)",
      "linear-gradient(135deg, #43e97b, #38f9d7)", "linear-gradient(160deg, #4facfe, #00f2fe)",
      "linear-gradient(135deg, #f5af19, #f12711)", "linear-gradient(145deg, #0984e3, #00b894)",
      "linear-gradient(135deg, #a29bfe, #6c5ce7)", "linear-gradient(135deg, #2c3e50, #3498db)",
      "linear-gradient(145deg, #a1c4fd, #c2e9fb)", "linear-gradient(135deg, #ee5a24, #f5af19)",
    ],
    borderDecors: ["sparkle", "gold", "none", "sparkle", "gold", "none"],
    emojis: ["✨", "💫", "⭐", "🌟", "💡", "🔥"],
    namePrefixes: ["Dear ", "For ", "To ", "Hey ", "Champion "],
  },
  "religious-ganesh": {
    greetings: [
      { line1: "Ganpati Bappa Morya!", line2: "Happy Ganesh Chaturthi" },
      { line1: "Blessings of Ganesha", line2: "Wisdom & Prosperity" },
      { line1: "Happy Ganesh Chaturthi!", line2: "May Lord Ganesha Bless You" },
      { line1: "Shree Ganeshaya Namah!", line2: "Festival of New Beginnings" },
      { line1: "Ganapati Blessings", line2: "Remove All Obstacles" },
      { line1: "Jai Ganesh!", line2: "Wishing You Happiness" },
    ],
    patterns: ["mandala", "floral", "dots", "sparkles", "rangoli", "mandala"],
    gradients: [
      "linear-gradient(135deg, #f5af19, #ee5a24)", "linear-gradient(145deg, #fdcb6e, #e17055)",
      "linear-gradient(135deg, #ff6b6b, #f5af19)", "linear-gradient(160deg, #ffecd2, #fcb69f)",
      "linear-gradient(135deg, #e17055, #fdcb6e)", "linear-gradient(145deg, #f5af19, #fdcb6e)",
      "linear-gradient(135deg, #ee5a24, #f5af19)", "linear-gradient(135deg, #2c3e50, #f5af19)",
      "linear-gradient(145deg, #ff6b6b, #ee5a24)", "linear-gradient(135deg, #fdcb6e, #ff6b6b)",
      "linear-gradient(160deg, #e17055, #f5af19)", "linear-gradient(135deg, #f5af19, #ff6b6b)",
    ],
    borderDecors: ["gold", "floral", "gold", "sparkle", "gold", "floral"],
    emojis: ["🐘", "🙏", "🪔", "✨", "🌺", "💫"],
    namePrefixes: ["Dear ", "Blessings to ", "For ", "To ", "Jai Ganesh! Dear ", "Ganpati Bappa "],
  },
  "religious-navratri": {
    greetings: [
      { line1: "Happy Navratri! 🔱", line2: "9 Nights of Devotion" },
      { line1: "Jai Mata Di!", line2: "Navratri Blessings" },
      { line1: "Navratri Wishes", line2: "Victory of Good Over Evil" },
      { line1: "Shubh Navratri!", line2: "Celebrate with Joy" },
      { line1: "Dandiya Night!", line2: "Happy Navratri" },
    ],
    patterns: ["mandala", "floral", "sparkles", "rangoli", "dots", "mandala"],
    gradients: [
      "linear-gradient(135deg, #ff6b6b, #f5af19)", "linear-gradient(145deg, #e17055, #fdcb6e)",
      "linear-gradient(135deg, #fd79a8, #e84393)", "linear-gradient(160deg, #f5af19, #ee5a24)",
      "linear-gradient(135deg, #fdcb6e, #ff6b6b)", "linear-gradient(145deg, #a29bfe, #6c5ce7)",
      "linear-gradient(135deg, #f093fb, #f5576c)", "linear-gradient(135deg, #ee5a24, #fdcb6e)",
      "linear-gradient(145deg, #ff6b6b, #fd79a8)", "linear-gradient(135deg, #e84393, #a29bfe)",
    ],
    borderDecors: ["gold", "floral", "sparkle", "gold", "floral", "gold"],
    emojis: ["🔱", "🙏", "🪔", "💃", "✨", "🌺"],
    namePrefixes: ["Dear ", "Blessings to ", "For ", "To ", "Jai Mata Di! "],
  },
  "religious-ram-navami": {
    greetings: [
      { line1: "Happy Ram Navami!", line2: "Jai Shri Ram 🏹" },
      { line1: "Ram Navami Blessings", line2: "Dharma & Truth Prevail" },
      { line1: "Jai Shri Ram!", line2: "Wishing You Strength" },
      { line1: "Shubh Ram Navami!", line2: "Victory of Righteousness" },
      { line1: "Ram Navami Wishes", line2: "Lord Ram Bless You" },
    ],
    patterns: ["mandala", "sparkles", "floral", "rangoli", "dots", "stars"],
    gradients: [
      "linear-gradient(135deg, #f5af19, #ee5a24)", "linear-gradient(145deg, #fdcb6e, #e17055)",
      "linear-gradient(135deg, #ff6b6b, #f5af19)", "linear-gradient(160deg, #2c3e50, #f5af19)",
      "linear-gradient(135deg, #e17055, #fdcb6e)", "linear-gradient(145deg, #ee5a24, #f5af19)",
      "linear-gradient(135deg, #fdcb6e, #ff6b6b)", "linear-gradient(135deg, #f5af19, #2c3e50)",
      "linear-gradient(145deg, #e17055, #f5af19)", "linear-gradient(135deg, #ff6b6b, #ee5a24)",
    ],
    borderDecors: ["gold", "sparkle", "gold", "floral", "gold", "sparkle"],
    emojis: ["🏹", "🙏", "✨", "🪔", "🌺", "💫"],
    namePrefixes: ["Dear ", "Blessings to ", "For ", "To ", "Jai Shri Ram! "],
  },
};

// Default theme for occasions not explicitly defined
const defaultTheme: OccasionTheme = {
  greetings: [
    { line1: "Best Wishes!", line2: "Thinking of You" },
    { line1: "Warm Greetings!", line2: "With Love" },
    { line1: "Special Wishes", line2: "Just for You" },
    { line1: "Heartfelt Wishes!", line2: "You Are Amazing" },
    { line1: "With Love!", line2: "Wishing You Joy" },
  ],
  patterns: ["sparkles", "stars", "dots", "floral", "hearts", "none"],
  gradients: [
    "linear-gradient(135deg, #667eea, #764ba2)", "linear-gradient(145deg, #f093fb, #f5576c)",
    "linear-gradient(135deg, #43e97b, #38f9d7)", "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    "linear-gradient(160deg, #ffecd2, #fcb69f)", "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(145deg, #4facfe, #00f2fe)", "linear-gradient(135deg, #fa709a, #fee140)",
    "linear-gradient(135deg, #fdcb6e, #e17055)", "linear-gradient(145deg, #a1c4fd, #c2e9fb)",
  ],
  borderDecors: ["sparkle", "gold", "none", "floral", "ribbon", "sparkle"],
  emojis: ["✨", "🌟", "💫", "⭐", "🎉", "💖"],
  namePrefixes: ["Dear ", "For ", "To ", "Wishing ", "Hey "],
};

const layoutTypes: TemplateLayout["type"][] = ["center", "top", "bottom", "left", "split", "corner", "fullBg", "banner"];
const shapes: FrameConfig["shape"][] = ["circle", "rounded", "heart", "diamond", "oval", "hexagon", "star", "arch"];

export function getTemplatesForOccasion(occasionId: string): Template[] {
  const occasion = categories.flatMap(c => c.occasions).find(o => o.id === occasionId);
  const count = occasion?.templateCount || 10;
  const theme = occasionThemes[occasionId] || defaultTheme;

  return Array.from({ length: count }, (_, i) => {
    const greeting = theme.greetings[i % theme.greetings.length];
    const layout = layoutTypes[i % layoutTypes.length];
    const shape = shapes[i % shapes.length];

    // Vary positions based on layout
    let frameX = 50, frameY = 38, frameSize = 28, greetingY = 12, nameY = 78;
    switch (layout) {
      case "top":
        frameX = 50; frameY = 28; frameSize = 24; greetingY = 8; nameY = 60;
        break;
      case "bottom":
        frameX = 50; frameY = 52; frameSize = 26; greetingY = 10; nameY = 85;
        break;
      case "left":
        frameX = 30; frameY = 45; frameSize = 22; greetingY = 10; nameY = 80;
        break;
      case "split":
        frameX = 50; frameY = 30; frameSize = 22; greetingY = 6; nameY = 62;
        break;
      case "corner":
        frameX = 35; frameY = 35; frameSize = 20; greetingY = 8; nameY = 70;
        break;
      case "fullBg":
        frameX = 50; frameY = 42; frameSize = 30; greetingY = 8; nameY = 82;
        break;
      case "banner":
        frameX = 50; frameY = 45; frameSize = 25; greetingY = 6; nameY = 80;
        break;
      default: // center
        frameX = 50; frameY = 40; frameSize = 26; greetingY = 10; nameY = 78;
    }

    // Add some variation per template index
    frameSize += (i % 5) * 2 - 4;
    frameY += (i % 3) * 3 - 3;

    const borderColors = ["rgba(255,255,255,0.9)", "rgba(255,215,0,0.8)", "rgba(255,200,150,0.8)", "rgba(200,200,255,0.7)", "rgba(255,182,193,0.8)"];
    const glowColors = ["rgba(255,215,0,0.3)", "rgba(255,100,100,0.2)", "rgba(100,200,255,0.2)", "rgba(255,255,255,0.25)", undefined];

    const fontStyles: GreetingConfig["fontStyle"][] = ["bold", "script", "elegant", "playful"];

    return {
      id: `${occasionId}-t${i}`,
      occasionId,
      layout: { type: layout },
      background: {
        gradient: theme.gradients[i % theme.gradients.length],
        pattern: theme.patterns[i % theme.patterns.length],
      },
      frame: {
        shape,
        x: frameX,
        y: frameY,
        size: frameSize,
        borderColor: borderColors[i % borderColors.length],
        borderWidth: 3 + (i % 3),
        glowColor: glowColors[i % glowColors.length],
        shadow: i % 4 !== 3,
      },
      greeting: {
        line1: greeting.line1,
        line2: greeting.line2,
        line1Size: 32 + (i % 4) * 4,
        line2Size: 20 + (i % 3) * 2,
        y: greetingY,
        color: "#ffffff",
        fontStyle: fontStyles[i % fontStyles.length],
      },
      nameStyle: {
        fontSize: 26 + (i % 4) * 2,
        color: "#ffffff",
        y: nameY,
        prefix: theme.namePrefixes[i % theme.namePrefixes.length],
        badge: i % 3 === 0,
        badgeColor: i % 2 === 0 ? "rgba(255,215,0,0.3)" : "rgba(255,255,255,0.15)",
      },
      decorations: {
        topEmoji: i % 2 === 0 ? theme.emojis[i % theme.emojis.length] : undefined,
        bottomEmoji: i % 3 === 1 ? theme.emojis[(i + 2) % theme.emojis.length] : undefined,
        cornerEmojis: i % 4 === 0 ? [theme.emojis[0], theme.emojis[1]] : undefined,
        borderDecor: theme.borderDecors[i % theme.borderDecors.length],
      },
    };
  });
}
