# 🎬 MovieCO - Angular Movie Application

A modern, responsive movie discovery application built with Angular 19, featuring movie browsing, TV shows, search functionality, user authentication, and wishlist management.

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Development](#-development)
- [API Integration](#-api-integration)
- [Architecture](#-architecture)
- [Components](#-components)
- [Services](#-services)
- [State Management](#-state-management)
- [Styling](#-styling)
- [Authentication](#-authentication)
- [Directives](#-directives)
- [Interfaces](#-interfaces)

## ✨ Features

- **Movie Discovery**: Browse movies by popularity, now playing, and upcoming releases
- **TV Shows**: Explore trending TV shows with detailed information
- **Search Functionality**: Search for movies and TV shows with real-time results
- **User Authentication**: Google OAuth integration and traditional login/register
- **Wishlist Management**: Save favorite movies and TV shows
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Dark/Light Theme**: Customizable theme with PrimeNG theming
- **Lazy Loading**: Optimized performance with route-based code splitting
- **Form Validation**: Custom password matching directive and form guards
- **Loading States**: Smooth loading experiences with skeleton screens

## 🛠️ Technologies Used

### Core Framework
- **Angular 19.2.0** - Latest Angular framework with standalone components
- **TypeScript 5.7.2** - Type-safe JavaScript development
- **RxJS 7.8.0** - Reactive programming library

### UI Framework & Styling
- **PrimeNG 19.1.3** - Rich UI component library
- **PrimeFlex 4.0.0** - CSS utility library
- **PrimeIcons 7.0.0** - Icon library
- **SCSS** - Advanced CSS preprocessing
- **@primeng/themes 19.1.3** - Custom theming system

### State Management
- **@ngrx/signals 19.2.1** - Modern state management with signals

### Authentication
- **Google OAuth** - Social authentication integration
- **@types/gapi.auth2** - Google Auth2 type definitions
- **@types/google.accounts** - Google Accounts type definitions

### Development Tools
- **Angular CLI 19.2.15** - Angular development tools
- **Zone.js 0.15.0** - Async task coordination

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── detail-similar-slider/
│   │   ├── detail-similar-tv-slider/
│   │   ├── easy-login/
│   │   ├── filter-card/
│   │   ├── filter-tv-card/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── home-cards/
│   │   ├── home-cards-slider/
│   │   ├── home-movie-card/
│   │   ├── home-movie-slider/
│   │   ├── home-popular-slider/
│   │   ├── home-tv-card/
│   │   ├── home-tvshows-slider/
│   │   ├── home-upcoming-slider/
│   │   ├── hr-nav/
│   │   ├── movies-header-page/
│   │   ├── search-card/
│   │   ├── ver-nav/
│   │   ├── wish-card-movie/
│   │   └── wish-card-shows/
│   ├── directive/           # Custom directives
│   │   └── password-match-directive.ts
│   ├── environments/        # Environment configurations
│   ├── guards/             # Route guards
│   │   ├── form-deactivation.guard.ts
│   │   └── wish.guard.ts
│   ├── interfaces/         # TypeScript interfaces
│   ├── pages/             # Route components
│   │   ├── details/
│   │   ├── details-tv/
│   │   ├── home/
│   │   ├── home-container/
│   │   ├── login/
│   │   ├── movies-coming/
│   │   ├── movies-playing/
│   │   ├── movies-popular/
│   │   ├── notfound/
│   │   ├── register/
│   │   ├── search/
│   │   ├── tv-trend/
│   │   └── wish-list/
│   ├── services/          # API and utility services
│   ├── store/            # State management
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── mypresets.ts
├── assets/               # Static assets
│   └── imgs/
└── styles.scss
```

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MovieCO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your Google OAuth credentials and TMDB API key

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open the application**
   Navigate to `http://localhost:4200`

## 💻 Development

### Available Scripts

```bash
# Start development server
npm start

# Build the application
npm run build

# Build with watch mode
npm run watch

# Run tests
npm test
```

### Development Server Configuration

## 🏗️ Build

### Production Build
```bash
npm run build
```

The build output is configured to be in the `docs/` directory for GitHub Pages deployment.

### Build Configuration
- **Output Path**: `docs/`
- **Optimization**: Enabled for production
- **Source Maps**: Disabled for production
- **Bundle Analysis**: Available in development mode

### Running Tests
```bash
npm test
```

### Test Configuration
- **Framework**: Karma + Jasmine
- **Coverage**: Enabled
- **Browser**: Chrome (headless)
- **Reports**: HTML coverage reports

## 🔌 API Integration

### The Movie Database (TMDB) API
The application integrates with TMDB API for:
- Movie data (popular, now playing, upcoming)
- TV show data (trending)
- Search functionality
- Movie/TV show details
- Similar content recommendations

### API Services
- `api.service.ts` - Base API service
- `api-details.service.ts` - Movie details API
- `api-details-tv.service.ts` - TV show details API
- `api-search.service.ts` - Search functionality

## 🏛️ Architecture

### Standalone Components

### Signal-Based State Management

## 🧩 Components

### Core Components
- **Hero Component**: Landing page hero section
- **Navigation Components**: Horizontal and vertical navigation
- **Card Components**: Movie and TV show display cards
- **Slider Components**: Carousel implementations
- **Filter Components**: Search and filtering functionality

### Page Components
- **Home**: Main landing page with featured content
- **Details**: Movie details with similar recommendations
- **Details TV**: TV show details
- **Search**: Global search functionality
- **Authentication**: Login and register pages
- **Wishlist**: User's saved content

## 🔧 Services

### API Services
- **Base API Service**: HTTP client configuration
- **Details Services**: Movie and TV show details
- **Search Service**: Global search functionality

### Utility Services
- **Google Auth Service**: OAuth authentication
- **Loader Service**: Loading state management
- **Nav Toggle Service**: Navigation state management
- **Filter Services**: Data filtering utilities

## 📊 State Management

### Store Architecture
- **API Stores**: Movie, TV, and search data management
- **Auth Stores**: Login and registration state
- **Notification Store**: User feedback management
- **Register Store**: Form state management

### Signal-Based Updates
```typescript
// Example store pattern
export class MovieStore {
  private movies = signal<Movie[]>([]);
  private loading = signal<boolean>(false);
  
  public readonly movies = this.movies.asReadonly();
  public readonly loading = this.loading.asReadonly();
}
```

## 🛣️ Routing

### Lazy Loading
All feature modules use lazy loading for optimal performance:
- Route-based code splitting
- Standalone component loading
- Guard-protected routes

## 🎨 Styling

### Theme Configuration
Custom PrimeNG theme with:
- Light/dark mode support
- Custom color palette
- Responsive design
- SCSS preprocessing

### CSS Architecture
- **PrimeFlex**: Utility-first CSS framework
- **SCSS**: Advanced styling with variables and mixins
- **Component-scoped styles**: Encapsulated component styling
- **Global styles**: Shared design tokens

## 🔐 Authentication

### Google OAuth Integration
- Social login with Google
- JWT token management
- User session persistence
- Secure authentication flow

### Traditional Authentication
- Email/password registration
- Form validation
- Password strength requirements
- Session management

## 🛡️ Guards

### Route Guards
- **Wish Guard**: Protects wishlist routes
- **Form Deactivation Guard**: Prevents accidental form submission loss

## 🎯 Directives

### Custom Directives
- **Password Match Directive**: Form validation for password confirmation

## 📝 Interfaces

## ⚙️ Environment Configuration

### Environment Files
- **environment.ts**: Development configuration
- **environment.prod.ts**: Production configuration

### Configuration Options
- API endpoints
- Google OAuth credentials
- Feature flags
- Debug settings

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **GitHub Pages**: Configured for `docs/` output
- **Netlify**: Static site hosting
- **Vercel**: Serverless deployment
- **Firebase Hosting**: Google Cloud hosting

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔍 Search & Filtering

### Optimization Techniques
- **Lazy Loading**: Route-based code splitting
- **Standalone Components**: Reduced bundle size
- **Signal-Based Updates**: Efficient change detection
- **Image Optimization**: Responsive images
- **Caching**: API response caching

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

### Code Standards
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Angular style guide compliance

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **The Movie Database (TMDB)** for providing the movie and TV show data API
- **PrimeNG** for the excellent UI component library
- **Angular Team** for the amazing framework
- **Google** for OAuth authentication services

---

**MovieCO** - Your ultimate movie discovery experience! 🎬✨
