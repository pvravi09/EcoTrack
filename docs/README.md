# 🌱 EcoTrack - Carbon Footprint Tracker

A comprehensive carbon footprint tracking application that helps users measure, reduce, and offset their carbon emissions.

## 🚀 Features

- 🔐 Secure user authentication
- 📊 Real-time carbon footprint calculation
- 🤖 AI-powered reduction recommendations
- 🎮 Gamification elements
- 💬 Community forums
- 👨‍💼 Admin dashboard
- 🔌 External API integrations

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Auth
- **Deployment**: Vercel (Frontend), Railway.app (Backend)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ecotrack.git
cd ecotrack
```

2. Install dependencies:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:
```bash
# Copy example environment files
cp .env.example .env
cd server
cp .env.example .env
cd ../client
cp .env.example .env
```

4. Update the environment variables in both `.env` files with your configuration.

## 🚀 Running the Application

1. Start the server:
```bash
cd server
npm run dev
```

2. Start the client:
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 📚 Documentation

- [Project Context](docs/CONTEXT.md)
- [Frontend Documentation](docs/FRONTEND.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenWeatherMap API
- Google Maps API
- Carbon Interface API
- All contributors and maintainers 