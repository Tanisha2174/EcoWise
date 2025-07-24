export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  category: string;
  tips?: string[];
}

export interface WeeklyChallenge {
  week: number;
  title: string;
  description: string;
  focus: string;
  duration: string;
  challenges: Challenge[];
}

export const weeklyeChallenges: WeeklyChallenge[] = [
  {
    week: 1,
    title: "Waste Reduction Week",
    description: "Focus on reducing waste and improving recycling habits throughout your daily routine.",
    focus: "Waste Management",
    duration: "7 days",
    challenges: [
      {
        id: 'w1-1',
        title: 'Plastic-Free Day',
        description: 'Go an entire day without using any single-use plastic items.',
        difficulty: 'medium',
        points: 15,
        category: 'Waste',
        tips: [
          'Bring reusable bags when shopping',
          'Use a refillable water bottle',
          'Choose products with minimal packaging',
          'Opt for glass or metal containers'
        ]
      },
      {
        id: 'w1-2',
        title: 'Perfect Recycling',
        description: 'Research your local recycling guidelines and properly sort all recyclables for a week.',
        difficulty: 'easy',
        points: 10,
        category: 'Waste',
        tips: [
          'Check your local recycling center website',
          'Clean containers before recycling',
          'Remove caps and labels when required',
          'Separate materials properly'
        ]
      },
      {
        id: 'w1-3',
        title: 'Compost Creation',
        description: 'Start a compost system for your organic waste.',
        difficulty: 'medium',
        points: 20,
        category: 'Waste',
        tips: [
          'Choose between indoor or outdoor composting',
          'Collect fruit and vegetable scraps',
          'Add brown materials like dry leaves',
          'Turn the compost regularly for aeration'
        ]
      },
      {
        id: 'w1-4',
        title: 'Zero Waste Meal',
        description: 'Prepare and eat a meal that generates absolutely no waste.',
        difficulty: 'hard',
        points: 25,
        category: 'Food',
        tips: [
          'Shop at farmers markets with reusable containers',
          'Use every part of ingredients',
          'Compost unavoidable food scraps',
          'Choose loose produce over packaged'
        ]
      }
    ]
  },
  {
    week: 2,
    title: "Energy Conservation Week",
    description: "Reduce your energy consumption and explore renewable energy alternatives.",
    focus: "Energy Efficiency",
    duration: "7 days",
    challenges: [
      {
        id: 'w2-1',
        title: 'Unplug Everything',
        description: 'Unplug all electronic devices when not in use for an entire day.',
        difficulty: 'easy',
        points: 10,
        category: 'Energy',
        tips: [
          'Unplug chargers when not charging',
          'Turn off power strips completely',
          'Unplug TVs, computers, and appliances',
          'Use timers for lamps and devices'
        ]
      },
      {
        id: 'w2-2',
        title: 'Natural Light Day',
        description: 'Use only natural light during daylight hours - no artificial lighting.',
        difficulty: 'medium',
        points: 15,
        category: 'Energy',
        tips: [
          'Open all curtains and blinds',
          'Work near windows',
          'Rearrange furniture for better light access',
          'Use mirrors to reflect light into darker areas'
        ]
      },
      {
        id: 'w2-3',
        title: 'Thermostat Challenge',
        description: 'Lower your thermostat by 3 degrees and maintain comfort through other means.',
        difficulty: 'medium',
        points: 15,
        category: 'Energy',
        tips: [
          'Wear layers indoors',
          'Use blankets while relaxing',
          'Close off unused rooms',
          'Use draft stoppers under doors'
        ]
      },
      {
        id: 'w2-4',
        title: 'Manual Power Day',
        description: 'Use manual alternatives instead of electric appliances for one day.',
        difficulty: 'hard',
        points: 25,
        category: 'Energy',
        tips: [
          'Hang clothes to dry instead of using dryer',
          'Wash dishes by hand',
          'Use a manual can opener',
          'Sweep instead of vacuuming'
        ]
      }
    ]
  },
  {
    week: 3,
    title: "Sustainable Transportation Week",
    description: "Explore eco-friendly transportation options and reduce your carbon footprint from travel.",
    focus: "Transportation",
    duration: "7 days",
    challenges: [
      {
        id: 'w3-1',
        title: 'Walk or Bike Day',
        description: 'Use only walking or biking for all your transportation needs for one day.',
        difficulty: 'medium',
        points: 20,
        category: 'Transport',
        tips: [
          'Plan routes in advance',
          'Combine errands into one trip',
          'Use bike sharing programs if available',
          'Choose destinations within walking distance'
        ]
      },
      {
        id: 'w3-2',
        title: 'Public Transit Explorer',
        description: 'Use only public transportation for a week.',
        difficulty: 'medium',
        points: 15,
        category: 'Transport',
        tips: [
          'Download transit apps for schedules',
          'Purchase weekly passes for savings',
          'Allow extra time for connections',
          'Explore new routes in your city'
        ]
      },
      {
        id: 'w3-3',
        title: 'Carpool Coordinator',
        description: 'Organize or join carpools for all car trips this week.',
        difficulty: 'easy',
        points: 12,
        category: 'Transport',
        tips: [
          'Connect with coworkers for commuting',
          'Use rideshare apps for longer trips',
          'Coordinate with friends for social activities',
          'Share fuel costs fairly'
        ]
      },
      {
        id: 'w3-4',
        title: 'Staycation Week',
        description: 'Avoid all long-distance travel and explore local attractions instead.',
        difficulty: 'easy',
        points: 10,
        category: 'Transport',
        tips: [
          'Research local parks and museums',
          'Try restaurants in your neighborhood',
          'Attend local events and festivals',
          'Explore walking trails nearby'
        ]
      }
    ]
  },
  {
    week: 4,
    title: "Water Conservation Week",
    description: "Focus on reducing water usage and protecting this precious resource.",
    focus: "Water Conservation",
    duration: "7 days",
    challenges: [
      {
        id: 'w4-1',
        title: '5-Minute Shower Challenge',
        description: 'Keep all showers under 5 minutes for the entire week.',
        difficulty: 'medium',
        points: 15,
        category: 'Water',
        tips: [
          'Use a timer to track shower time',
          'Turn off water while soaping',
          'Install a low-flow showerhead',
          'Play upbeat 5-minute songs as timers'
        ]
      },
      {
        id: 'w4-2',
        title: 'Greywater Reuse',
        description: 'Collect and reuse greywater from sinks and showers for plants.',
        difficulty: 'hard',
        points: 25,
        category: 'Water',
        tips: [
          'Use biodegradable soaps',
          'Collect water in buckets while waiting for hot water',
          'Use pasta or vegetable cooking water for plants',
          'Install a simple greywater system'
        ]
      },
      {
        id: 'w4-3',
        title: 'Leak Detective',
        description: 'Find and fix all water leaks in your home.',
        difficulty: 'medium',
        points: 20,
        category: 'Water',
        tips: [
          'Check all faucets and toilets for drips',
          'Look for water stains on walls or ceilings',
          'Monitor your water meter for unexplained usage',
          'Replace worn washers and seals'
        ]
      },
      {
        id: 'w4-4',
        title: 'Rainwater Harvesting',
        description: 'Set up a system to collect rainwater for outdoor use.',
        difficulty: 'hard',
        points: 30,
        category: 'Water',
        tips: [
          'Use clean containers to collect water',
          'Position containers under downspouts',
          'Cover containers to prevent mosquitoes',
          'Use collected water for gardens and plants'
        ]
      }
    ]
  }
];