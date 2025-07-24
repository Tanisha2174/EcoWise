export interface QuizQuestion {
  id: number;
  question: string;
  options: { value: string; label: string; points: number }[];
  category: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you primarily commute to work or school?",
    category: "Transportation",
    options: [
      { value: "walk_bike", label: "Walking or biking", points: 10 },
      { value: "public_transport", label: "Public transportation", points: 8 },
      { value: "carpool", label: "Carpooling", points: 6 },
      { value: "electric_car", label: "Electric vehicle", points: 7 },
      { value: "gas_car", label: "Gas-powered vehicle (alone)", points: 3 },
      { value: "remote", label: "I work from home", points: 9 }
    ]
  },
  {
    id: 2,
    question: "How often do you eat meat?",
    category: "Diet",
    options: [
      { value: "never", label: "Never (Vegan/Vegetarian)", points: 10 },
      { value: "rarely", label: "Rarely (1-2 times per week)", points: 8 },
      { value: "sometimes", label: "Sometimes (3-4 times per week)", points: 6 },
      { value: "often", label: "Often (5-6 times per week)", points: 4 },
      { value: "daily", label: "Daily", points: 2 }
    ]
  },
  {
    id: 3,
    question: "How do you handle household energy consumption?",
    category: "Energy",
    options: [
      { value: "renewable_efficient", label: "Use renewable energy and energy-efficient appliances", points: 10 },
      { value: "efficient_only", label: "Use energy-efficient appliances", points: 8 },
      { value: "mindful", label: "Turn off lights and unplug devices when not in use", points: 6 },
      { value: "occasional", label: "Sometimes remember to conserve energy", points: 4 },
      { value: "not_mindful", label: "Don't really think about energy consumption", points: 2 }
    ]
  },
  {
    id: 4,
    question: "How do you approach shopping for clothes?",
    category: "Fashion",
    options: [
      { value: "secondhand_sustainable", label: "Buy secondhand or from sustainable brands", points: 10 },
      { value: "quality_pieces", label: "Invest in high-quality, long-lasting pieces", points: 8 },
      { value: "occasional_new", label: "Buy new clothes occasionally when needed", points: 6 },
      { value: "regular_shopping", label: "Shop for new clothes regularly", points: 4 },
      { value: "fast_fashion", label: "Frequently buy from fast fashion retailers", points: 2 }
    ]
  },
  {
    id: 5,
    question: "How do you manage waste and recycling?",
    category: "Waste",
    options: [
      { value: "zero_waste", label: "Practice zero waste or near-zero waste lifestyle", points: 10 },
      { value: "comprehensive", label: "Recycle, compost, and minimize single-use items", points: 8 },
      { value: "recycle_reduce", label: "Recycle regularly and try to reduce waste", points: 6 },
      { value: "basic_recycling", label: "Recycle when convenient", points: 4 },
      { value: "minimal_effort", label: "Don't really focus on waste reduction", points: 2 }
    ]
  },
  {
    id: 6,
    question: "How often do you choose local and organic food?",
    category: "Food",
    options: [
      { value: "always", label: "Always choose local and organic when possible", points: 10 },
      { value: "often", label: "Often choose local and organic", points: 8 },
      { value: "sometimes", label: "Sometimes choose local and organic", points: 6 },
      { value: "rarely", label: "Rarely choose local and organic", points: 4 },
      { value: "never", label: "Don't consider origin or farming methods", points: 2 }
    ]
  },
  {
    id: 7,
    question: "How do you approach water consumption?",
    category: "Water",
    options: [
      { value: "very_conservative", label: "Use water-saving devices and are very mindful of usage", points: 10 },
      { value: "conservative", label: "Take shorter showers and fix leaks promptly", points: 8 },
      { value: "mindful", label: "Try to conserve water when I remember", points: 6 },
      { value: "occasional", label: "Occasionally think about water usage", points: 4 },
      { value: "not_mindful", label: "Don't really think about water consumption", points: 2 }
    ]
  }
];

export const calculateSustainabilityScore = (answers: { [key: number]: string }): number => {
  let totalPoints = 0;
  let totalQuestions = 0;

  quizQuestions.forEach((question) => {
    const answer = answers[question.id - 1]; // Adjust for 0-based indexing
    if (answer) {
      const selectedOption = question.options.find(option => option.value === answer);
      if (selectedOption) {
        totalPoints += selectedOption.points;
        totalQuestions++;
      }
    }
  });

  if (totalQuestions === 0) return 0;
  
  // Calculate percentage based on maximum possible points (10 per question)
  const maxPossiblePoints = totalQuestions * 10;
  return Math.round((totalPoints / maxPossiblePoints) * 100);
};