# EcoWise - Your Guide to a Sustainable Life

![EcoWise Logo](https://via.placeholder.com/400x200/22C55E/ffffff?text=EcoWise)

## 🌱 About EcoWise

EcoWise is a comprehensive web application designed to help eco-conscious individuals adopt and maintain sustainable lifestyle habits. Our platform provides interactive tools, personalized recommendations, and community challenges to make environmental consciousness accessible and engaging.

## ✨ Features

### 🏠 **Home Page**
- Beautiful, responsive landing page with modern design
- Overview of all available features
- Easy navigation to different sections
- Inspiring call-to-action elements

### 📊 **Sustainability Quiz**
- Interactive 7-question assessment
- Covers transportation, diet, energy, fashion, waste, food, and water habits
- Real-time score calculation
- Personalized recommendations based on results
- Progress tracking with localStorage persistence

### 💡 **Eco Tips Section**
- 20+ categorized sustainability tips (Home, Food, Travel, Fashion, Energy)
- Searchable and filterable tip database
- Bookmark functionality with localStorage
- Step-by-step implementation guides
- Difficulty and impact ratings

### 🗺️ **Green Map**
- Interactive location finder for eco-friendly services
- Mock locations for recycling centers, EV charging stations, organic markets
- Detailed location information with hours and descriptions
- Direct integration with Google Maps for directions
- Clean, categorized location display

### 🏆 **Eco Challenges**
- 4 weeks of structured sustainability challenges
- Weekly themes: Waste Reduction, Energy Conservation, Transportation, Water Conservation
- Progress tracking with completion checkboxes
- Point system and difficulty ratings
- Achievement system and completion celebrations

### 📈 **Progress Tracker**
- Beautiful Chart.js visualizations
- Sustainability score trends over time
- Challenge completion analytics by category
- Personal achievement system
- Comprehensive statistics dashboard

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **State Management**: localStorage for persistence
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecowise.git
   cd ecowise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── challenges/      # Challenge-related components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── quiz/            # Quiz-related components
│   └── tips/            # Tip-related components
├── pages/               # Page components
│   ├── HomePage.tsx
│   ├── QuizPage.tsx
│   ├── EcoTipsPage.tsx
│   ├── GreenMapPage.tsx
│   ├── ChallengesPage.tsx
│   └── ProgressPage.tsx
├── utils/               # Utility functions and data
│   ├── quizUtils.ts
│   ├── tipsData.ts
│   └── challengesData.ts
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#22C55E` (rgb(34, 197, 94))
- **Secondary Emerald**: `#10B981` (rgb(16, 185, 129))
- **Accent Colors**: Blue, Purple, Yellow, Orange for categorization
- **Neutral Grays**: For text and backgrounds

### Typography
- Clean, modern fonts with proper hierarchy
- Responsive text sizing
- Consistent line heights and spacing

### Layout
- Mobile-first responsive design
- 8px spacing system
- Card-based layouts with subtle shadows
- Smooth animations and transitions

## 🔧 Key Features Implementation

### LocalStorage Persistence
- Quiz scores with timestamps
- Bookmarked tips
- Completed challenges
- All data persists across sessions

### Responsive Design
- Breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- Flexible grid systems
- Optimized touch targets for mobile

### Animation System
- Smooth page transitions
- Interactive hover states
- Loading animations
- Progress indicators

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast ratios

## 📊 Data Management

### Quiz System
- 7 comprehensive questions across lifestyle categories
- Scoring algorithm based on environmental impact
- Historical score tracking for progress visualization

### Tips Database
- 20+ actionable sustainability tips
- Multi-level categorization system
- Implementation difficulty ratings
- Environmental impact assessments

### Challenge System
- 4-week structured program
- 16 unique challenges across different categories
- Point-based rewards system
- Progress tracking and achievements

## 🌟 Future Enhancements

- [ ] Real map integration with Leaflet.js
- [ ] User accounts and cloud synchronization
- [ ] Social features and community sharing
- [ ] Additional quiz categories
- [ ] More detailed analytics
- [ ] Mobile app development
- [ ] Integration with environmental APIs
- [ ] Gamification features

## 🤝 Contributing

We welcome contributions to EcoWise! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Styling framework by [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Charts by [Chart.js](https://www.chartjs.org/)

## 📞 Support

If you have any questions or need support:
- Create an issue in the GitHub repository
- Email us at support@ecowise.app
- Join our community discussions

---

**Made with 💚 for the planet** | EcoWise Team 2025