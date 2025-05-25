# 🎬 Cineman

Cineman is a simple movie browsing app that uses TheMovieDB API to display information about various movies. Users can search for movies and browse different categories like Popular, Top Rated, and Upcoming. The app features a modern responsive UI and includes a dark mode toggle for improved user experience.

🔗 Live: [https://cineman-mhs.netlify.app](https://cineman-mhs.netlify.app)

---

## 🧩 Features

- 🔍 Search for movies by title
- 🏠 Browse categorized movie lists: Home, Popular, Top Rated, and Upcoming
- 📝 View detailed info about a movie, including:
  - Title and description
  - Genres/categories
  - Rating (0–10) and number of reviews
  - Runtime
  - Budget and revenue
  - Release date (with relative format, e.g., "123 days ago")
  - IMDB code (linked to IMDb)
  - Movie poster
- 🌗 Toggle between light and dark modes
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

- ⚛️ React (via Create React App)
- 🎨 Tailwind CSS for styling
- 🔗 React Router for navigation
- 🌑 Dark mode support
- 🌐 TheMovieDB API for movie data
- 🚀 Deployed on Netlify

---

## 📦 Installation (for development)

> You only need this section if you're cloning the project and running it locally.

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/cineman.git
cd cineman
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create a .env file and add your TMDB API key:

```
REACT_APP_TMDB_API_KEY=your_api_key_here
```

> You can get your API key from [TheMovieDB](https://developer.themoviedb.org/docs/authentication)

### 4. Start development server:

```bash
npm start
```

---

## 🌐 Deployment

The project is deployed on Netlify:  
[https://cineman-mhs.netlify.app](https://cineman-mhs.netlify.app)

To deploy your own version:

- Push your project to GitHub
- Link your GitHub repo to Netlify
- Set your environment variable `REACT_APP_TMDB_API_KEY` in Netlify settings

---

## 💡 Future Improvements

### Short-Term Goals:

- ✅ Add a list of favorite movies (localStorage or backend)
- ✅ Add a "Want to Watch" list
- ✅ Add authentication (e.g., Firebase or custom backend)
- ✅ Add ability to filter or sort results by rating, genre, release date

### Long-Term Plans:

- ⏳ Infinite scroll or "Load more" pagination
- 🗂️ User profiles with saved lists
- 🔄 Sync user data across devices
- 🧠 Personalized movie recommendations based on watched/favorites
- 📆 Calendar view of upcoming releases

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙌 Acknowledgments

- [TheMovieDB](https://www.themoviedb.org/) for providing the movie data API
