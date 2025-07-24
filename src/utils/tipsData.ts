export type TipCategory = 'home' | 'food' | 'travel' | 'fashion' | 'energy';

export interface EcoTip {
  id: string;
  title: string;
  description: string;
  category: TipCategory;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
  impact: 'low' | 'medium' | 'high';
  steps?: string[];
}

export const ecoTips: EcoTip[] = [
  // Home Tips
  {
    id: 'home-1',
    title: 'Create a Compost System',
    description: 'Turn kitchen scraps into nutrient-rich soil for your garden while reducing waste.',
    category: 'home',
    icon: '🌱',
    difficulty: 'medium',
    impact: 'high',
    steps: [
      'Choose a compost bin or designate an outdoor area',
      'Collect fruit and vegetable scraps, coffee grounds, and eggshells',
      'Layer green materials (scraps) with brown materials (dry leaves)',
      'Turn the compost weekly to aerate',
      'Harvest finished compost after 3-6 months'
    ]
  },
  {
    id: 'home-2',
    title: 'Switch to LED Light Bulbs',
    description: 'Replace traditional bulbs with energy-efficient LEDs to reduce electricity consumption.',
    category: 'home',
    icon: '💡',
    difficulty: 'easy',
    impact: 'medium',
    steps: [
      'Identify all light fixtures in your home',
      'Check wattage requirements for each fixture',
      'Purchase LED bulbs with equivalent brightness',
      'Replace bulbs one by one as old ones burn out',
      'Dispose of old bulbs at electronics recycling centers'
    ]
  },
  {
    id: 'home-3',
    title: 'Install Water-Saving Fixtures',
    description: 'Reduce water consumption with low-flow showerheads and faucet aerators.',
    category: 'home',
    icon: '🚿',
    difficulty: 'medium',
    impact: 'high',
    steps: [
      'Measure current water flow rates',
      'Purchase certified water-saving fixtures',
      'Install low-flow showerheads and faucet aerators',
      'Check for leaks and fix promptly',
      'Monitor water usage to track savings'
    ]
  },
  {
    id: 'home-4',
    title: 'Use Natural Cleaning Products',
    description: 'Replace chemical cleaners with eco-friendly alternatives for a healthier home.',
    category: 'home',
    icon: '🧽',
    difficulty: 'easy',
    impact: 'medium',
    steps: [
      'Make all-purpose cleaner with vinegar and water',
      'Use baking soda for scrubbing surfaces',
      'Try lemon for natural bleaching and freshening',
      'Replace paper towels with reusable microfiber cloths',
      'Choose biodegradable dish soap and laundry detergent'
    ]
  },

  // Food Tips
  {
    id: 'food-1',
    title: 'Reduce Meat Consumption',
    description: 'Try "Meatless Monday" or plant-based meals to lower your carbon footprint.',
    category: 'food',
    icon: '🥗',
    difficulty: 'easy',
    impact: 'high',
    steps: [
      'Start with one meatless day per week',
      'Explore plant-based protein sources like beans and lentils',
      'Try new vegetarian recipes and cuisines',
      'Replace beef with chicken or fish for lower impact',
      'Gradually increase plant-based meals as you discover favorites'
    ]
  },
  {
    id: 'food-2',
    title: 'Buy Local and Seasonal Produce',
    description: 'Support local farmers and reduce transportation emissions by eating seasonally.',
    category: 'food',
    icon: '🍅',
    difficulty: 'easy',
    impact: 'medium',
    steps: [
      'Find local farmers markets in your area',
      'Learn what produce is in season in your region',
      'Join a Community Supported Agriculture (CSA) program',
      'Start a small herb garden at home',
      'Preserve seasonal produce by freezing or canning'
    ]
  },
  {
    id: 'food-3',
    title: 'Minimize Food Waste',
    description: 'Plan meals, store food properly, and get creative with leftovers.',
    category: 'food',
    icon: '🥘',
    difficulty: 'medium',
    impact: 'high',
    steps: [
      'Plan weekly meals and create shopping lists',
      'Learn proper food storage techniques',
      'Use the "first in, first out" method',
      'Transform leftovers into new meals',
      'Compost unavoidable food scraps'
    ]
  },
  {
    id: 'food-4',
    title: 'Grow Your Own Herbs',
    description: 'Start a small indoor herb garden to reduce packaging and food miles.',
    category: 'food',
    icon: '🌿',
    difficulty: 'easy',
    impact: 'low',
    steps: [
      'Choose easy herbs like basil, mint, and parsley',
      'Find a sunny windowsill or use grow lights',
      'Use small pots with good drainage',
      'Water regularly but avoid overwatering',
      'Harvest frequently to encourage growth'
    ]
  },

  // Travel Tips
  {
    id: 'travel-1',
    title: 'Use Public Transportation',
    description: 'Reduce emissions by taking buses, trains, or subways instead of driving alone.',
    category: 'travel',
    icon: '🚌',
    difficulty: 'easy',
    impact: 'high',
    steps: [
      'Research public transit options in your area',
      'Download transit apps for schedules and routes',
      'Purchase monthly passes for regular commuting',
      'Combine errands to minimize individual trips',
      'Walk or bike for short distances'
    ]
  },
  {
    id: 'travel-2',
    title: 'Consider Electric or Hybrid Vehicles',
    description: 'When buying a car, choose electric or hybrid options to reduce fuel consumption.',
    category: 'travel',
    icon: '⚡',
    difficulty: 'hard',
    impact: 'high',
    steps: [
      'Research available electric and hybrid models',
      'Calculate potential fuel savings over time',
      'Find charging stations in your area',
      'Consider your driving patterns and range needs',
      'Look into government incentives and rebates'
    ]
  },
  {
    id: 'travel-3',
    title: 'Carpool or Rideshare',
    description: 'Share rides with others to reduce the number of vehicles on the road.',
    category: 'travel',
    icon: '🚗',
    difficulty: 'easy',
    impact: 'medium',
    steps: [
      'Organize carpools with coworkers or neighbors',
      'Use ridesharing apps for occasional trips',
      'Join local carpool groups on social media',
      'Coordinate schedules with regular travel partners',
      'Split fuel costs fairly among participants'
    ]
  },
  {
    id: 'travel-4',
    title: 'Choose Eco-Friendly Accommodation',
    description: 'When traveling, stay at hotels with environmental certifications.',
    category: 'travel',
    icon: '🏨',
    difficulty: 'easy',
    impact: 'medium',
    steps: [
      'Look for Green Key or LEED certified hotels',
      'Choose accommodations with recycling programs',
      'Reuse towels and linens during your stay',
      'Turn off lights and AC when leaving the room',
      'Support local businesses and restaurants'
    ]
  },

  // Fashion Tips
  {
    id: 'fashion-1',
    title: 'Shop Secondhand First',
    description: 'Explore thrift stores and consignment shops before buying new clothes.',
    category: 'fashion',
    icon: '👕',
    difficulty: 'easy',
    impact: 'high',
    steps: [
      'Research local thrift stores and consignment shops',
      'Try online secondhand platforms like Poshmark or ThredUp',
      'Set aside time for browsing and treasure hunting',
      'Focus on quality pieces that fit well',
      'Consider alteration costs for perfect fit'
    ]
  },
  {
    id: 'fashion-2',
    title: 'Invest in Quality Pieces',
    description: 'Buy fewer, higher-quality items that will last longer and stay in style.',
    category: 'fashion',
    icon: '👔',
    difficulty: 'medium',
    impact: 'high',
    steps: [
      'Assess your current wardrobe for gaps',
      'Research brands known for quality and durability',
      'Calculate cost-per-wear for expensive items',
      'Choose classic styles over trendy pieces',
      'Take care of clothes with proper washing and storage'
    ]
  },
  {
    id: 'fashion-3',
    title: 'Organize Clothing Swaps',
    description: 'Exchange clothes with friends to refresh your wardrobe without buying new.',
    category: 'fashion',
    icon: '🔄',
    difficulty: 'medium',
    impact: 'medium',
    steps: [
      'Invite friends to bring clothes they no longer wear',
      'Set ground rules for the swap event',
      'Organize items by size and type',
      'Allow time for trying on items',
      'Donate remaining items to charity'
    ]
  },
  {
    id: 'fashion-4',
    title: 'Learn Basic Clothing Repair',
    description: 'Extend the life of your clothes by learning to sew buttons, hem, and patch.',
    category: 'fashion',
    icon: '🪡',
    difficulty: 'medium',
    impact: 'medium',
    steps: [
      'Get a basic sewing kit with needles, thread, and scissors',
      'Learn to sew on buttons and fix small tears',
      'Practice hemming pants and sleeves',
      'Watch online tutorials for different repair techniques',
      'Take items to a tailor for complex repairs'
    ]
  },

  // Energy Tips
  {
    id: 'energy-1',
    title: 'Unplug Electronics When Not in Use',
    description: 'Eliminate phantom energy draw by unplugging devices or using smart power strips.',
    category: 'energy',
    icon: '🔌',
    difficulty: 'easy',
    impact: 'medium',
    steps: [
      'Identify devices that draw power when off',
      'Use power strips to easily disconnect multiple devices',
      'Invest in smart power strips that cut phantom load',
      'Unplug chargers when not actively charging devices',
      'Consider programmable timers for recurring equipment'
    ]
  },
  {
    id: 'energy-2',
    title: 'Optimize Your Thermostat',
    description: 'Use a programmable thermostat to reduce heating and cooling energy use.',
    category: 'energy',
    icon: '🌡️',
    difficulty: 'medium',
    impact: 'high',
    steps: [
      'Install a programmable or smart thermostat',
      'Set temperatures to 68°F in winter, 78°F in summer',
      'Program lower temperatures when away or sleeping',
      'Use ceiling fans to improve air circulation',
      'Seal air leaks around windows and doors'
    ]
  },
  {
    id: 'energy-3',
    title: 'Switch to Renewable Energy',
    description: 'Choose a green energy plan or install solar panels to use clean electricity.',
    category: 'energy',
    icon: '☀️',
    difficulty: 'hard',
    impact: 'high',
    steps: [
      'Research renewable energy options in your area',
      'Contact utility company about green energy plans',
      'Get quotes for solar panel installation',
      'Consider community solar programs if available',
      'Look into government incentives and tax credits'
    ]
  },
  {
    id: 'energy-4',
    title: 'Improve Home Insulation',
    description: 'Better insulation reduces energy needed for heating and cooling.',
    category: 'energy',
    icon: '🏠',
    difficulty: 'hard',
    impact: 'high',
    steps: [
      'Have an energy audit to identify problem areas',
      'Add insulation to attic, walls, and basement',
      'Seal gaps around pipes, wires, and fixtures',
      'Install weatherstripping around doors and windows',
      'Consider double-pane or energy-efficient windows'
    ]
  }
];