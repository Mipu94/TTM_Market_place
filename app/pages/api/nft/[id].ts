
export default function handler(req: any, res: any) {
    const { id } = req.query
    const domain = process.env.NEXT_PUBLIC_DOMAIN
    const nftCollection: any = {
        0: {
            Name: "AstroAegis",
            "description": "A protective astronaut guarding the cosmic frontier, shielding the universe from harm with unwavering courage and determination."
        },
        1: { Name: "Lunar Lullaby", description: "A soothing melody to accompany your journey through the stars." },
        2: { Name: "Galactic Greetings", description: "Friendly messages exchanged across the cosmos." },
        3: { Name: "Stellar Sparkle", description: "Shimmering with the brilliance of a thousand stars." },
        4: { Name: "Cosmic Charmer", description: "Captivating all who venture into the void." },
        5: { Name: "Nebula Nuzzler", description: "Cuddly companion on interstellar voyages." },
        6: { Name: "Astronaut's Anthem", description: "The soundtrack of space exploration." },
        7: { Name: "Orbiting Opus", description: "A musical masterpiece echoing through the cosmos." },
        8: { Name: "Celestial Cuddle", description: "Wrapped in the warmth of cosmic love." },
        9: { Name: "Astro Adornment", description: "Gleaming with futuristic elegance." },
        10: { Name: "Stardust Symphony", description: "Harmonies woven from the fabric of the universe." },
        11: { Name: "Lunar Luminance", description: "Radiant glow illuminating the darkest corners of space." },
        12: { Name: "Galactic Grace", description: "Elegant beauty spanning light-years." },
        13: { Name: "Astronaut's Ascent", description: "Rising to new heights among the stars." },
        14: { Name: "Cosmic Carousel", description: "Whirling through the galaxy on a cosmic ride." },
        15: { Name: "Nebula Nebulae", description: "Exploring the colorful clouds of distant worlds." },
        16: { Name: "Stellar Serenade", description: "Serenading the universe with celestial melodies." },
        17: { Name: "Space Suit Sweetheart", description: "Love blossoming in the vacuum of space." },
        18: { Name: "Astronaut's Affection", description: "Heartfelt emotions expressed across the cosmos." },
        19: { Name: "Galactic Guardian", description: "Protecting the universe with unwavering resolve." },
        20: { Name: "Lunar Lullaby", description: "A soothing melody to accompany your journey through the stars." },
        21: { Name: "Stellar Snuggle", description: "Cuddling beneath the canopy of the Milky Way." },
        22: { Name: "Cosmic Kisses", description: "Whispers of love carried on cosmic winds." },
        23: { Name: "Asteroid Amour", description: "Romance amidst the rubble of the asteroid belt." },
        24: { Name: "Nebula's Embrace", description: "Wrapped in the ethereal glow of interstellar gas." },
        25: { Name: "Galactic Giggle", description: "Laughter echoing through the vastness of space." },
        26: { Name: "Starlight Serenade", description: "Love songs sung under the light of distant stars." },
        27: { Name: "Cosmic Connection", description: "Bonds that transcend time and space." },
        28: { Name: "Lunar Lovebird", description: "Mates for life, soaring through the lunar landscape." },
        29: { Name: "Stellar Sweetheart", description: "Two hearts entwined in the cosmic dance." },
        30: { Name: "Astro Affection", description: "Love that spans the expanse of the universe." },
        31: { Name: "Cosmic Courting", description: "Courtship rituals under alien skies." },
        32: { Name: "Nebula Nuptials", description: "Cosmic weddings among the stars." },
        33: { Name: "Galactic Romance", description: "Love stories written in the stars." },
        34: { Name: "Celestial Courtship", description: "Romance blossoming in the celestial realm." },
        35: { Name: "Astronaut's Amour", description: "Love that defies the gravity of ordinary life." },
        36: { Name: "Stellar Soulmates", description: "Two souls united by the cosmos." },
        37: { Name: "Space Sweethearts", description: "Lovebirds soaring through the cosmic void." },
        38: { Name: "Lunar Lover", description: "Moonlit rendezvous on the surface of the moon." },
        39: { Name: "Galactic Gaze", description: "Lost in each other's eyes amid the stars." },
        40: { Name: "Nebula Nuzzle", description: "Snuggling amidst the swirling gas clouds of a nebula." },
        41: { Name: "Stellar Soulmate", description: "A love that burns as bright as a supernova." },
        42: { Name: "Astronaut's Ardor", description: "Passion ignited in the zero-gravity of space." },
        43: { Name: "Cosmic Cuddle", description: "Wrapped in the warmth of a cosmic embrace." },
        44: { Name: "Lunar Longing", description: "Yearning for love under the pale light of the moon." },
        45: { Name: "Galactic Embrace", description: "Holding each other close in the vastness of space." },
        46: { Name: "Nebula's Kiss", description: "Soft caresses beneath the colorful hues of a nebula." },
        47: { Name: "Stellar Stargazer", description: "Gazing at the stars together, dreaming of forever." },
        48: { Name: "Astro Affinity", description: "Cosmic chemistry that's out of this world." },
        49: { Name: "Space Sweetheart", description: "Whispers of love in the silent void of space." },
        50: { Name: "Celestial Connection", description: "Soulmates connected by the threads of the universe." },
        51: { Name: "Lunar Love", description: "Romance blossoming under the glow of the moon." },
        52: { Name: "Galactic Devotion", description: "A love that spans the vast expanse of the cosmos." },
        53: { Name: "Nebula's Embrace", description: "Enveloped in the swirling colors of a distant nebula." },
        54: { Name: "Stellar Serenity", description: "Tranquility found in the depths of space." },
        55: { Name: "Astro Adoration", description: "Worshiping at the altar of cosmic love." },
        56: { Name: "Cosmic Courtship", description: "The dance of love beneath the stars." },
        57: { Name: "Lunar Luminescence", description: "Radiant love glowing in the darkness of space." },
        58: { Name: "Galactic Glow", description: "Love shining brightly across the galaxy." },
        59: { Name: "Nebula's Nocturne", description: "Whispers of love in the cosmic night." },
        60: { Name: "Stellar Swoon", description: "Swooning under the spell of the stars." },
        61: { Name: "Astro Amore", description: "Love that's written in the stars." },
        62: { Name: "Cosmic Caress", description: "Tender touches in the vastness of space." },
        63: { Name: "Lunar Lustre", description: "The glow of love reflected in the moonlight." },
        64: { Name: "Galactic Glimmer", description: "Sparkling with the light of a thousand galaxies." },
        65: { Name: "Nebula's Whisper", description: "Secrets shared in the silence of the cosmos." },
        66: { Name: "Stellar Surrender", description: "Surrendering to love under the starry sky." },
        67: { Name: "Astro Affair", description: "A passionate romance among the stars." },
        68: { Name: "Cosmic Connection", description: "Two souls linked by the cosmic web." },
        69: { Name: "Lunar Lovers", description: "Love that blossoms in the shadow of the moon." },
        70: { Name: "Galactic Passion", description: "Passion burning bright in the heart of the galaxy." },
        71: { Name: "Nebula's Embrace", description: "Embraced by the swirling colors of a distant nebula." },
        72: { Name: "Stellar Symphony", description: "The music of love echoing through the universe." },
        73: { Name: "Astro Amour", description: "Love that spans the cosmos." },
        74: { Name: "Cosmic Cadence", description: "Dancing to the rhythm of the stars." },
        75: { Name: "Lunar Luminary", description: "Love shining bright in the darkness of space." },
        76: { Name: "Galactic Gleam", description: "Radiant love lighting up the galaxy." },
        77: { Name: "Nebula's Glow", description: "Bathed in the ethereal glow of a distant nebula." },
        78: { Name: "Stellar Stroll", description: "Walking hand in hand under the starry sky." },
        79: { Name: "Astro Adoration", description: "Adoring each other under alien skies." },
        80: { Name: "Cosmic Connection", description: "Connected by the cosmic threads of fate." },
        81: { Name: "Lunar Lovebirds", description: "Lovebirds soaring through the moonlit sky." },
        82: { Name: "Galactic Grace", description: "Graceful love spanning light-years." },
        83: { Name: "Nebula's Embrace", description: "Enveloped in the swirling colors of a distant nebula." },
        84: { Name: "Stellar Serenity", description: "Serenity found in the depths of space." },
        85: { Name: "Astro Amour", description: "Love that transcends time and space." },
        86: { Name: "Cosmic Caress", description: "Tender caresses in the cosmic void." },
        87: { Name: "Lunar Luminescence", description: "Radiant love glowing in the darkness of space." },
        88: { Name: "Galactic Glow", description: "Love shining brightly across the galaxy." },
        89: { Name: "Nebula's Nocturne", description: "Whispers of love in the cosmic night." },
        90: { Name: "Stellar Swoon", description: "Swooning under the spell of the stars." },
        91: { Name: "Astro Amore", description: "Love that's written in the stars." },
        92: { Name: "Cosmic Caress", description: "Tender touches in the vastness of space." },
        93: { Name: "Lunar Lustre", description: "The glow of love reflected in the moonlight." },
        94: { Name: "Galactic Glimmer", description: "Sparkling with the light of a thousand galaxies." },
        95: { Name: "Nebula's Whisper", description: "Secrets shared in the silence of the cosmos." },
        96: { Name: "Stellar Surrender", description: "Surrendering to love under the starry sky." },
        97: { Name: "Astro Affair", description: "A passionate romance among the stars." },
        98: { Name: "Cosmic Connection", description: "Two souls linked by the cosmic web." },
        99: { Name: "Lunar Lovers", description: "Love that blossoms in the shadow of the moon." },
        100: {
            Name: "AstroNova",
            "description": "An astronaut exploring the cosmos with a futuristic twist, symbolizing the journey to new frontiers and beyond."
        },
        101: {
            Name: "StellarWhisper",
            "description": "A cute astronaut floating among the stars, whispering secrets of the universe, blending elegance with curiosity."
        },
        102: {
            Name: "LunarLumina",
            "description": "A dynamic astronaut illuminating the moon's surface with futuristic luminescence, representing hope and exploration."
        },
        103: {
            Name: "GalacticDreamer",
            "description": "An elegant astronaut dreaming amidst the galaxies, embodying the aspirations of humanity to reach for the stars."
        },
        104: {
            Name: "NebulaNinja",
            "description": "A dynamic astronaut navigating through colorful nebulae, blending cuteness with agility in the cosmic dance."
        },
        105: {
            Name: "CosmoCharm",
            "description": "A futuristic astronaut exuding charm and grace, captivating the universe with a blend of elegance and charisma."
        },
        106: {
            Name: "StarlightStroller",
            "description": "A cute astronaut taking a leisurely stroll under the starry night, radiating warmth and joy amidst the cosmic expanse."
        },
        107: {
            Name: "LunarLullaby",
            "description": "An adorable astronaut floating weightlessly in the moon's embrace, lulled by the gentle cosmic melodies of the night."
        },
        108: {
            Name: "AstroBliss",
            "description": "A blissful astronaut basking in the glow of celestial wonders, embodying serenity and tranquility amidst the cosmos."
        },
        109: {
            Name: "StellarSparks",
            "description": "A dynamic astronaut sparking inspiration across the galaxies, fueling the cosmic fires of creativity and innovation."
        },
        110: {
            Name: "NebulaNestle",
            "description": "A cute astronaut nestled amidst swirling nebula clouds, finding comfort and warmth in the cosmic embrace."
        },
        111: {
            Name: "LunarLegacy",
            "description": "An elegant astronaut leaving a legacy of exploration on the moon, symbolizing the timeless spirit of human achievement."
        },
        112: {
            Name: "GalacticGlimpse",
            "description": "A futuristic astronaut catching a glimpse of distant galaxies, bridging the gap between dreams and reality."
        },
        113: {
            Name: "CosmoCuddle",
            "description": "A cuddly astronaut embracing the cosmic wonders, spreading love and warmth throughout the universe."
        },
        114: {
            Name: "StarlightStride",
            "description": "A graceful astronaut striding through the cosmos with elegance and poise, leaving stardust trails in their wake."
        },
        115: {
            Name: "LunarLuster",
            "description": "An astronaut adorned with the shimmering glow of moonlight, reflecting the beauty and mystery of the lunar landscape."
        },
        116: {
            Name: "AstroAura",
            "description": "A radiant astronaut surrounded by an ethereal aura, illuminating the cosmic darkness with futuristic charm."
        },
        117: {
            Name: "StellarSerenade",
            "description": "A charming astronaut serenading the stars with cosmic melodies, filling the universe with harmony and joy."
        },
        118: {
            Name: "NebulaNexus",
            "description": "A dynamic astronaut exploring the cosmic nexus, forging connections between distant galaxies with elegance and grace."
        },
        119: {
            Name: "CosmicCompanion",
            "description": "An adorable astronaut journeying through space with a faithful cosmic companion, symbolizing the bond between humanity and the universe."
        },
        120: {
            Name: "GalacticGlow",
            "description": "A luminous astronaut glowing with the radiance of a thousand stars, guiding the way through the cosmic expanse."
        },
        121: {
            Name: "LunarLull",
            "description": "An astronaut lulled by the gentle rhythms of the lunar landscape, drifting into cosmic dreams amidst the tranquility of space."
        },
        122: {
            Name: "AstroArc",
            "description": "A futuristic astronaut arcing through the cosmos with grace and precision, carving celestial pathways with elegance and style."
        },
        123: {
            Name: "StellarSway",
            "description": "A dynamic astronaut swaying to the cosmic rhythm, dancing amidst the stars with grace and agility."
        },
        124: {
            Name: "NebulaNap",
            "description": "A cute astronaut taking a cosmic nap amidst swirling nebula clouds, finding peace and serenity in the depths of space."
        },
        125: {
            Name: "CosmicCrest",
            "description": "A majestic astronaut cresting the cosmic waves, riding the tides of the universe with elegance and dignity."
        },
        126: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, cutting through the cosmic expanse with elegance and speed."
        },
        127: {
            Name: "LunarLift",
            "description": "An astronaut lifted by the gentle embrace of lunar gravity, soaring through the moonlit skies with elegance and grace."
        },
        128: {
            Name: "AstroAegis",
            "description": "A protective astronaut guarding the cosmic frontier, shielding the universe from harm with unwavering courage and determination."
        },
        129: {
            Name: "StellarStrider",
            "description": "A dynamic astronaut striding boldly through the stars, blazing a trail through the cosmic expanse with determination and grace."
        },
        130: {
            Name: "NebulaNimble",
            "description": "A nimble astronaut navigating through colorful nebula clouds, dancing through the cosmic tapestry with elegance and agility."
        },
        131: {
            Name: "CosmicCruise",
            "description": "A futuristic astronaut cruising through the cosmos with style and sophistication, exploring the universe with elegance and grace."
        },
        132: {
            Name: "GalacticGlow",
            "description": "A luminous astronaut glowing with the radiance of a thousand stars, illuminating the cosmic darkness with futuristic charm."
        },
        133: {
            Name: "LunarLumina",
            "description": "An illuminating astronaut casting a radiant glow upon the lunar landscape, guiding the way for lunar travelers with futuristic luminescence."
        },
        134: {
            Name: "AstroAdorn",
            "description": "A stylish astronaut adorned with futuristic accessories, embodying elegance and grace amidst the cosmic expanse."
        },
        135: {
            Name: "StellarSpectra",
            "description": "A dynamic astronaut surrounded by a spectrum of cosmic colors, blending elegance with vibrancy amidst the stars."
        },
        136: {
            Name: "NebulaNectar",
            "description": "A cute astronaut savoring the sweet nectar of cosmic wonders, finding delight amidst the swirling nebula clouds."
        },
        137: {
            Name: "CosmicCrest",
            "description": "A majestic astronaut cresting the cosmic waves, riding the tides of the universe with elegance and dignity."
        },
        138: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, cutting through the cosmic expanse with elegance and speed."
        },
        139: {
            Name: "LunarLift",
            "description": "An astronaut lifted by the gentle embrace of lunar gravity, soaring through the moonlit skies with elegance and grace."
        },
        140: {
            Name: "AstroAegis",
            "description": "A protective astronaut guarding the cosmic frontier, shielding the universe from harm with unwavering courage and determination."
        },
        141: {
            Name: "StellarStrider",
            "description": "A dynamic astronaut striding boldly through the stars, blazing a trail through the cosmic expanse with determination and grace."
        },
        142: {
            Name: "NebulaNimble",
            "description": "A nimble astronaut navigating through colorful nebula clouds, dancing through the cosmic tapestry with elegance and agility."
        },
        143: {
            Name: "CosmicCruise",
            "description": "A futuristic astronaut cruising through the cosmos with style and sophistication, exploring the universe with elegance and grace."
        },
        144: {
            Name: "GalacticGlow",
            "description": "A luminous astronaut glowing with the radiance of a thousand stars, illuminating the cosmic darkness with futuristic charm."
        },
        145: {
            Name: "LunarLumina",
            "description": "An illuminating astronaut casting a radiant glow upon the lunar landscape, guiding the way for lunar travelers with futuristic luminescence."
        },
        146: {
            Name: "AstroAdorn",
            "description": "A stylish astronaut adorned with futuristic accessories, embodying elegance and grace amidst the cosmic expanse."
        },
        147: {
            Name: "StellarSpectra",
            "description": "A dynamic astronaut surrounded by a spectrum of cosmic colors, blending elegance with vibrancy amidst the stars."
        },
        148: {
            Name: "NebulaNectar",
            "description": "A cute astronaut savoring the sweet nectar of cosmic wonders, finding delight amidst the swirling nebula clouds."
        },
        149: {
            Name: "CosmicCascade",
            "description": "A futuristic astronaut cascading through the cosmic waves, surfing the tides of the universe with grace and elegance."
        },
        150: {
            Name: "GalacticGaze",
            "description": "A mesmerizing astronaut gazing into the depths of the cosmos, captivated by the endless wonders of the universe."
        },
        151: {
            Name: "LunarLeap",
            "description": "An astronaut leaping across the lunar landscape with boundless energy and enthusiasm, embracing the spirit of adventure."
        },
        152: {
            Name: "AstroAmble",
            "description": "A leisurely astronaut strolling through the cosmic pathways, savoring the beauty and tranquility of space."
        },
        153: {
            Name: "StellarSwoop",
            "description": "A dynamic astronaut swooping through the stars with effortless grace and agility, mastering the cosmic currents."
        },
        154: {
            Name: "NebulaNest",
            "description": "A cozy astronaut nestled within the swirling nebula clouds, finding solace and comfort amidst the cosmic chaos."
        },
        155: {
            Name: "CosmicCharm",
            "description": "A charming astronaut enchanting the universe with cosmic charisma and elegance, spreading joy and wonder throughout the cosmos."
        },
        156: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, carving elegant arcs through the cosmic expanse."
        },
        157: {
            Name: "LunarLure",
            "description": "An astronaut luring the moon with celestial beauty and grace, beckoning the lunar landscape with elegance and allure."
        },
        158: {
            Name: "AstroAurora",
            "description": "A radiant astronaut shimmering amidst the auroral glow, dancing with the cosmic lights in an ethereal ballet."
        },
        159: {
            Name: "StellarStream",
            "description": "A dynamic astronaut streaming through the stars with effortless grace and fluidity, embodying the flow of the cosmic currents."
        },
        160: {
            Name: "NebulaNimbus",
            "description": "A fluffy astronaut floating amidst the nebula clouds, riding the cosmic winds with whimsical charm and grace."
        },
        161: {
            Name: "CosmicCadence",
            "description": "A rhythmic astronaut dancing to the cosmic beat, harmonizing with the celestial rhythms in a graceful symphony."
        },
        162: {
            Name: "GalacticGlimpse",
            "description": "A futuristic astronaut catching fleeting glimpses of distant galaxies, bridging the gap between dreams and reality with elegance and grace."
        },
        163: {
            Name: "LunarLuster",
            "description": "An astronaut adorned with the shimmering glow of moonlight, reflecting the beauty and mystery of the lunar landscape with futuristic luminescence."
        },
        164: {
            Name: "AstroArc",
            "description": "A sleek astronaut arcing through the cosmos with futuristic style and grace, carving elegant pathways through the cosmic expanse."
        },
        165: {
            Name: "StellarSway",
            "description": "A dynamic astronaut swaying to the cosmic rhythm, dancing amidst the stars with grace and agility."
        },
        166: {
            Name: "NebulaNap",
            "description": "A cute astronaut taking a cosmic nap amidst swirling nebula clouds, finding peace and serenity in the depths of space."
        },
        167: {
            Name: "CosmicCrest",
            "description": "A majestic astronaut cresting the cosmic waves, riding the tides of the universe with elegance and dignity."
        },
        168: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, cutting through the cosmic expanse with elegance and speed."
        },
        169: {
            Name: "LunarLift",
            "description": "An astronaut lifted by the gentle embrace of lunar gravity, soaring through the moonlit skies with elegance and grace."
        },
        170: {
            Name: "AstroAegis",
            "description": "A protective astronaut guarding the cosmic frontier, shielding the universe from harm with unwavering courage and determination."
        },
        171: {
            Name: "StellarStrider",
            "description": "A dynamic astronaut striding boldly through the stars, blazing a trail through the cosmic expanse with determination and grace."
        },
        172: {
            Name: "NebulaNimble",
            "description": "A nimble astronaut navigating through colorful nebula clouds, dancing through the cosmic tapestry with elegance and agility."
        },
        173: {
            Name: "CosmicCruise",
            "description": "A futuristic astronaut cruising through the cosmos with style and sophistication, exploring the universe with elegance and grace."
        },
        174: {
            Name: "GalacticGlow",
            "description": "A luminous astronaut glowing with the radiance of a thousand stars, illuminating the cosmic darkness with futuristic charm."
        },
        175: {
            Name: "LunarLumina",
            "description": "An illuminating astronaut casting a radiant glow upon the lunar landscape, guiding the way for lunar travelers with futuristic luminescence."
        },
        176: {
            Name: "AstroAdorn",
            "description": "A stylish astronaut adorned with futuristic accessories, embodying elegance and grace amidst the cosmic expanse."
        },
        177: {
            Name: "StellarSpectra",
            "description": "A dynamic astronaut surrounded by a spectrum of cosmic colors, blending elegance with vibrancy amidst the stars."
        },
        178: {
            Name: "NebulaNectar",
            "description": "A cute astronaut savoring the sweet nectar of cosmic wonders, finding delight amidst the swirling nebula clouds."
        },
        179: {
            Name: "CosmicCascade",
            "description": "A futuristic astronaut cascading through the cosmic waves, surfing the tides of the universe with grace and elegance."
        },
        180: {
            Name: "GalacticGaze",
            "description": "A mesmerizing astronaut gazing into the depths of the cosmos, captivated by the endless wonders of the universe."
        },
        181: {
            Name: "LunarLeap",
            "description": "An astronaut leaping across the lunar landscape with boundless energy and enthusiasm, embracing the spirit of adventure."
        },
        182: {
            Name: "AstroAmble",
            "description": "A leisurely astronaut strolling through the cosmic pathways, savoring the beauty and tranquility of space."
        },
        183: {
            Name: "StellarSwoop",
            "description": "A dynamic astronaut swooping through the stars with effortless grace and agility, mastering the cosmic currents."
        },
        184: {
            Name: "NebulaNest",
            "description": "A cozy astronaut nestled within the swirling nebula clouds, finding solace and comfort amidst the cosmic chaos."
        },
        185: {
            Name: "CosmicCharm",
            "description": "A charming astronaut enchanting the universe with cosmic charisma and elegance, spreading joy and wonder throughout the cosmos."
        },
        186: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, carving elegant arcs through the cosmic expanse."
        },
        187: {
            Name: "LunarLure",
            "description": "An astronaut luring the moon with celestial beauty and grace, beckoning the lunar landscape with elegance and allure."
        },
        188: {
            Name: "AstroAurora",
            "description": "A radiant astronaut shimmering amidst the auroral glow, dancing with the cosmic lights in an ethereal ballet."
        },
        189: {
            Name: "StellarStream",
            "description": "A dynamic astronaut streaming through the stars with effortless grace and fluidity, embodying the flow of the cosmic currents."
        },
        190: {
            Name: "NebulaNimbus",
            "description": "A fluffy astronaut floating amidst the nebula clouds, riding the cosmic winds with whimsical charm and grace."
        },
        191: {
            Name: "CosmicCadence",
            "description": "A rhythmic astronaut dancing to the cosmic beat, harmonizing with the celestial rhythms in a graceful symphony."
        },
        192: {
            Name: "GalacticGlimpse",
            "description": "A futuristic astronaut catching fleeting glimpses of distant galaxies, bridging the gap between dreams and reality with elegance and grace."
        },
        193: {
            Name: "LunarLuster",
            "description": "An astronaut adorned with the shimmering glow of moonlight, reflecting the beauty and mystery of the lunar landscape with futuristic luminescence."
        },
        194: {
            Name: "AstroArc",
            "description": "A sleek astronaut arcing through the cosmos with futuristic style and grace, carving elegant pathways through the cosmic expanse."
        },
        195: {
            Name: "StellarSway",
            "description": "A dynamic astronaut swaying to the cosmic rhythm, dancing amidst the stars with grace and agility."
        },
        196: {
            Name: "NebulaNap",
            "description": "A cute astronaut taking a cosmic nap amidst swirling nebula clouds, finding peace and serenity in the depths of space."
        },
        197: {
            Name: "CosmicCrest",
            "description": "A majestic astronaut cresting the cosmic waves, riding the tides of the universe with elegance and dignity."
        },
        198: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, cutting through the cosmic expanse with elegance and speed."
        },
        199: {
            Name: "LunarLift",
            "description": "An astronaut lifted by the gentle embrace of lunar gravity, soaring through the moonlit skies with elegance and grace."
        },
        200: {
            Name: "CosmoComet",
            "description": "An adorable astronaut soaring through the cosmos like a shooting star, spreading joy and wonder with every twinkle."
        },
        201: {
            Name: "StellarSparkle",
            "description": "A dynamic astronaut shimmering with cosmic energy, igniting the universe with sparks of creativity and innovation."
        },
        202: {
            Name: "LunarLullaby",
            "description": "A cute astronaut singing celestial lullabies to the moon, soothing the cosmic soul with gentle melodies."
        },
        203: {
            Name: "AstroAurora",
            "description": "An elegant astronaut dancing amidst the aurora borealis, painting the cosmic canvas with vibrant hues of light."
        },
        204: {
            Name: "GalacticGlide",
            "description": "A futuristic astronaut gliding effortlessly through the galaxy, epitomizing grace and agility in the vastness of space."
        },
        205: {
            Name: "NebulaNuzzle",
            "description": "A cute astronaut nuzzling against colorful nebula clouds, finding comfort and companionship in the cosmic embrace."
        },
        206: {
            Name: "CosmicCrescendo",
            "description": "A dynamic astronaut orchestrating a symphony of cosmic proportions, conducting the celestial melodies of the universe."
        },
        207: {
            Name: "StellarStargaze",
            "description": "An awe-struck astronaut gazing at distant stars, captivated by the beauty and majesty of the cosmic horizon."
        },
        208: {
            Name: "LunarLuminary",
            "description": "An illuminating astronaut casting a radiant glow upon the lunar landscape, guiding travelers through the moonlit night."
        },
        209: {
            Name: "AstroAscend",
            "description": "An elegant astronaut ascending towards the heavens, transcending earthly bounds on a journey to cosmic enlightenment."
        },
        210: {
            Name: "GalacticGiggle",
            "description": "A cute astronaut bursting with cosmic laughter, spreading joy and mirth throughout the galaxy."
        },
        211: {
            Name: "NebulaNimbus",
            "description": "A dynamic astronaut navigating through swirling nebula clouds, surfing the cosmic waves with daring and skill."
        },
        212: {
            Name: "CosmicCuddle",
            "description": "A cuddly astronaut embracing the universe with warmth and affection, sharing love and comfort in the cosmic expanse."
        },
        213: {
            Name: "StellarSailor",
            "description": "A futuristic astronaut sailing through the stars, charting a course for adventure and discovery in the boundless sea of space."
        },
        214: {
            Name: "LunarLuminance",
            "description": "An astronaut radiating with the gentle glow of moonlight, illuminating the darkness of space with ethereal luminescence."
        },
        215: {
            Name: "AstroAegis",
            "description": "A protective astronaut guarding the celestial frontier, ensuring the safety and security of cosmic travelers."
        },
        216: {
            Name: "GalacticGleam",
            "description": "A radiant astronaut gleaming with cosmic brilliance, shining like a beacon of hope amidst the darkness of the cosmos."
        },
        217: {
            Name: "NebulaNymph",
            "description": "A graceful astronaut dancing among the stars, embodying the beauty and elegance of the celestial ballet."
        },
        218: {
            Name: "CosmicCascade",
            "description": "A dynamic astronaut cascading through the cosmos, riding the waves of energy and momentum towards new horizons."
        },
        219: {
            Name: "StellarSpectacle",
            "description": "An extravagant astronaut dazzling the universe with cosmic performances, lighting up the sky with spectacular displays."
        },
        220: {
            Name: "LunarLull",
            "description": "An astronaut lulled by the gentle rhythms of the lunar landscape, drifting into cosmic dreams amidst the tranquility of space."
        },
        221: {
            Name: "AstroAether",
            "description": "An ethereal astronaut traversing the celestial ether, exploring the mysteries of the cosmos with wonder and curiosity."
        },
        222: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, carving elegant arcs through the cosmic expanse."
        },
        223: {
            Name: "NebulaNap",
            "description": "A cute astronaut taking a cosmic nap amidst swirling nebula clouds, finding peace and serenity in the depths of space."
        },
        224: {
            Name: "CosmicCrest",
            "description": "A majestic astronaut cresting the cosmic waves, riding the tides of the universe with elegance and dignity."
        },
        225: {
            Name: "StellarStrider",
            "description": "A dynamic astronaut striding boldly through the stars, blazing a trail through the cosmic expanse with determination and grace."
        },
        226: {
            Name: "NebulaNimble",
            "description": "A nimble astronaut navigating through colorful nebula clouds, dancing through the cosmic tapestry with elegance and agility."
        },
        227: {
            Name: "CosmicCruise",
            "description": "A futuristic astronaut cruising through the cosmos with style and sophistication, exploring the universe with elegance and grace."
        },
        228: {
            Name: "GalacticGlow",
            "description": "A luminous astronaut glowing with the radiance of a thousand stars, illuminating the cosmic darkness with futuristic charm."
        },
        229: {
            Name: "LunarLumina",
            "description": "An illuminating astronaut casting a radiant glow upon the lunar landscape, guiding the way for lunar travelers with futuristic luminescence."
        },
        230: {
            Name: "AstroAdorn",
            "description": "A stylish astronaut adorned with futuristic accessories, embodying elegance and grace amidst the cosmic expanse."
        },
        231: {
            Name: "StellarSpectra",
            "description": "A dynamic astronaut surrounded by a spectrum of cosmic colors, blending elegance with vibrancy amidst the stars."
        },
        232: {
            Name: "NebulaNectar",
            "description": "A cute astronaut savoring the sweet nectar of cosmic wonders, finding delight amidst the swirling nebula clouds."
        },
        233: {
            Name: "CosmicCascade",
            "description": "A futuristic astronaut cascading through the cosmic waves, surfing the tides of the universe with grace and elegance."
        },
        234: {
            Name: "GalacticGaze",
            "description": "A mesmerizing astronaut gazing into the depths of the cosmos, captivated by the endless wonders of the universe."
        },
        235: {
            Name: "LunarLeap",
            "description": "An astronaut leaping across the lunar landscape with boundless energy and enthusiasm, embracing the spirit of adventure."
        },
        236: {
            Name: "AstroAmble",
            "description": "A leisurely astronaut strolling through the cosmic pathways, savoring the beauty and tranquility of space."
        },
        237: {
            Name: "StellarSwoop",
            "description": "A dynamic astronaut swooping through the stars with effortless grace and agility, mastering the cosmic currents."
        },
        238: {
            Name: "NebulaNest",
            "description": "A cozy astronaut nestled within the swirling nebula clouds, finding solace and comfort amidst the cosmic chaos."
        },
        239: {
            Name: "CosmicCharm",
            "description": "A charming astronaut enchanting the universe with cosmic charisma and elegance, spreading joy and wonder throughout the cosmos."
        },
        240: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, carving elegant arcs through the cosmic expanse."
        },
        241: {
            Name: "LunarLure",
            "description": "An astronaut luring the moon with celestial beauty and grace, beckoning the lunar landscape with elegance and allure."
        },
        242: {
            Name: "AstroAurora",
            "description": "A radiant astronaut shimmering amidst the auroral glow, dancing with the cosmic lights in an ethereal ballet."
        },
        243: {
            Name: "StellarStream",
            "description": "A dynamic astronaut streaming through the stars with effortless grace and fluidity, embodying the flow of the cosmic currents."
        },
        244: {
            Name: "NebulaNimbus",
            "description": "A fluffy astronaut floating amidst the nebula clouds, riding the cosmic winds with whimsical charm and grace."
        },
        245: {
            Name: "CosmicCadence",
            "description": "A rhythmic astronaut dancing to the cosmic beat, harmonizing with the celestial rhythms in a graceful symphony."
        },
        246: {
            Name: "GalacticGlimpse",
            "description": "A futuristic astronaut catching fleeting glimpses of distant galaxies, bridging the gap between dreams and reality with elegance and grace."
        },
        247: {
            Name: "LunarLuster",
            "description": "An astronaut adorned with the shimmering glow of moonlight, reflecting the beauty and mystery of the lunar landscape with futuristic luminescence."
        },
        248: {
            Name: "AstroArc",
            "description": "A sleek astronaut arcing through the cosmos with futuristic style and grace, carving elegant pathways through the cosmic expanse."
        },
        249: {
            Name: "StellarSway",
            "description": "A dynamic astronaut swaying to the cosmic rhythm, dancing amidst the stars with grace and agility."
        },
        250: {
            Name: "NebulaNap",
            "description": "A cute astronaut taking a cosmic nap amidst swirling nebula clouds, finding peace and serenity in the depths of space."
        },
        251: {
            Name: "CosmicCrest",
            "description": "A majestic astronaut cresting the cosmic waves, riding the tides of the universe with elegance and dignity."
        },
        252: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, cutting through the cosmic expanse with elegance and speed."
        },
        253: {
            Name: "LunarLift",
            "description": "An astronaut lifted by the gentle embrace of lunar gravity, soaring through the moonlit skies with elegance and grace."
        },
        254: {
            Name: "AstroAegis",
            "description": "A protective astronaut guarding the cosmic frontier, shielding the universe from harm with unwavering courage and determination."
        },
        255: {
            Name: "StellarStrider",
            "description": "A dynamic astronaut striding boldly through the stars, blazing a trail through the cosmic expanse with determination and grace."
        },
        256: {
            Name: "NebulaNimble",
            "description": "A nimble astronaut navigating through colorful nebula clouds, dancing through the cosmic tapestry with elegance and agility."
        },
        257: {
            Name: "CosmicCruise",
            "description": "A futuristic astronaut cruising through the cosmos with style and sophistication, exploring the universe with elegance and grace."
        },
        258: {
            Name: "GalacticGlow",
            "description": "A luminous astronaut glowing with the radiance of a thousand stars, illuminating the cosmic darkness with futuristic charm."
        },
        259: {
            Name: "LunarLumina",
            "description": "An illuminating astronaut casting a radiant glow upon the lunar landscape, guiding the way for lunar travelers with futuristic luminescence."
        },
        260: {
            Name: "AstroAdorn",
            "description": "A stylish astronaut adorned with futuristic accessories, embodying elegance and grace amidst the cosmic expanse."
        },
        261: {
            Name: "StellarSpectra",
            "description": "A dynamic astronaut surrounded by a spectrum of cosmic colors, blending elegance with vibrancy amidst the stars."
        },
        262: {
            Name: "NebulaNectar",
            "description": "A cute astronaut savoring the sweet nectar of cosmic wonders, finding delight amidst the swirling nebula clouds."
        },
        263: {
            Name: "CosmicCascade",
            "description": "A futuristic astronaut cascading through the cosmic waves, surfing the tides of the universe with grace and elegance."
        },
        264: {
            Name: "GalacticGaze",
            "description": "A mesmerizing astronaut gazing into the depths of the cosmos, captivated by the endless wonders of the universe."
        },
        265: {
            Name: "LunarLeap",
            "description": "An astronaut leaping across the lunar landscape with boundless energy and enthusiasm, embracing the spirit of adventure."
        },
        266: {
            Name: "AstroAmble",
            "description": "A leisurely astronaut strolling through the cosmic pathways, savoring the beauty and tranquility of space."
        },
        267: {
            Name: "StellarSwoop",
            "description": "A dynamic astronaut swooping through the stars with effortless grace and agility, mastering the cosmic currents."
        },
        268: {
            Name: "NebulaNest",
            "description": "A cozy astronaut nestled within the swirling nebula clouds, finding solace and comfort amidst the cosmic chaos."
        },
        269: {
            Name: "CosmicCharm",
            "description": "A charming astronaut enchanting the universe with cosmic charisma and elegance, spreading joy and wonder throughout the cosmos."
        },
        270: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, carving elegant arcs through the cosmic expanse."
        },
        271: {
            Name: "LunarLure",
            "description": "An astronaut luring the moon with celestial beauty and grace, beckoning the lunar landscape with elegance and allure."
        },
        272: {
            Name: "AstroAurora",
            "description": "A radiant astronaut shimmering amidst the auroral glow, dancing with the cosmic lights in an ethereal ballet."
        },
        273: {
            Name: "StellarStream",
            "description": "A dynamic astronaut streaming through the stars with effortless grace and fluidity, embodying the flow of the cosmic currents."
        },
        274: {
            Name: "NebulaNimbus",
            "description": "A fluffy astronaut floating amidst the nebula clouds, riding the cosmic winds with whimsical charm and grace."
        },
        275: {
            Name: "CosmicCadence",
            "description": "A rhythmic astronaut dancing to the cosmic beat, harmonizing with the celestial rhythms in a graceful symphony."
        },
        276: {
            Name: "GalacticGlimpse",
            "description": "A futuristic astronaut catching fleeting glimpses of distant galaxies, bridging the gap between dreams and reality with elegance and grace."
        },
        277: {
            Name: "LunarLuster",
            "description": "An astronaut adorned with the shimmering glow of moonlight, reflecting the beauty and mystery of the lunar landscape with futuristic luminescence."
        },
        278: {
            Name: "AstroArc",
            "description": "A sleek astronaut arcing through the cosmos with futuristic style and grace, carving elegant pathways through the cosmic expanse."
        },
        279: {
            Name: "StellarSway",
            "description": "A dynamic astronaut swaying to the cosmic rhythm, dancing amidst the stars with grace and agility."
        },
        280: {
            Name: "NebulaNap",
            "description": "A cute astronaut taking a cosmic nap amidst swirling nebula clouds, finding peace and serenity in the depths of space."
        },
        281: {
            Name: "CosmicCrest",
            "description": "A majestic astronaut cresting the cosmic waves, riding the tides of the universe with elegance and dignity."
        },
        282: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, cutting through the cosmic expanse with elegance and speed."
        },
        283: {
            Name: "LunarLift",
            "description": "An astronaut lifted by the gentle embrace of lunar gravity, soaring through the moonlit skies with elegance and grace."
        },
        284: {
            Name: "AstroAegis",
            "description": "A protective astronaut guarding the cosmic frontier, shielding the universe from harm with unwavering courage and determination."
        },
        285: {
            Name: "StellarStrider",
            "description": "A dynamic astronaut striding boldly through the stars, blazing a trail through the cosmic expanse with determination and grace."
        },
        286: {
            Name: "NebulaNimble",
            "description": "A nimble astronaut navigating through colorful nebula clouds, dancing through the cosmic tapestry with elegance and agility."
        },
        287: {
            Name: "CosmicCruise",
            "description": "A futuristic astronaut cruising through the cosmos with style and sophistication, exploring the universe with elegance and grace."
        },
        288: {
            Name: "GalacticGlow",
            "description": "A luminous astronaut glowing with the radiance of a thousand stars, illuminating the cosmic darkness with futuristic charm."
        },
        289: {
            Name: "LunarLumina",
            "description": "An illuminating astronaut casting a radiant glow upon the lunar landscape, guiding the way for lunar travelers with futuristic luminescence."
        },
        290: {
            Name: "AstroAdorn",
            "description": "A stylish astronaut adorned with futuristic accessories, embodying elegance and grace amidst the cosmic expanse."
        },
        291: {
            Name: "StellarSpectra",
            "description": "A dynamic astronaut surrounded by a spectrum of cosmic colors, blending elegance with vibrancy amidst the stars."
        },
        292: {
            Name: "NebulaNectar",
            "description": "A cute astronaut savoring the sweet nectar of cosmic wonders, finding delight amidst the swirling nebula clouds."
        },
        293: {
            Name: "CosmicCascade",
            "description": "A futuristic astronaut cascading through the cosmic waves, surfing the tides of the universe with grace and elegance."
        },
        294: {
            Name: "GalacticGaze",
            "description": "A mesmerizing astronaut gazing into the depths of the cosmos, captivated by the endless wonders of the universe."
        },
        295: {
            Name: "LunarLeap",
            "description": "An astronaut leaping across the lunar landscape with boundless energy and enthusiasm, embracing the spirit of adventure."
        },
        296: {
            Name: "AstroAmble",
            "description": "A leisurely astronaut strolling through the cosmic pathways, savoring the beauty and tranquility of space."
        },
        297: {
            Name: "StellarSwoop",
            "description": "A dynamic astronaut swooping through the stars with effortless grace and agility, mastering the cosmic currents."
        },
        298: {
            Name: "NebulaNest",
            "description": "A cozy astronaut nestled within the swirling nebula clouds, finding solace and comfort amidst the cosmic chaos."
        },
        299: {
            Name: "CosmicCharm",
            "description": "A charming astronaut enchanting the universe with cosmic charisma and elegance, spreading joy and wonder throughout the cosmos."
        },
        300: {
            Name: "GalacticGlide",
            "description": "A sleek astronaut gliding through the galaxies with futuristic style and grace, carving elegant arcs through the cosmic expanse."
        }
    };
    let data = {
        // image: `${domain}/static/assets/images/nft-cards/${id}.jpg`,
        // image: "/_next/image?url=%2Fstatic%2Fassets%2Fimages%2Fnft-cards%2F4.jpg&w=3840&q=100",
        image: `https://bafybeig3phu3eerivm63mnhubyf37i67i2oile76lomujftzjlyjy6d4zm.ipfs.nftstorage.link/Astro%20(${id}).png`,
        name: nftCollection[id].Name + id,
        designer: 'Minamoto',
        tokenId: id,
        description: nftCollection[id].description,

    }

    res.status(200).json(data);
}