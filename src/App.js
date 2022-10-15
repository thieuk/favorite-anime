import './App.css';
import Anime from './components/Anime'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main className="flex flex-wrap m-auto xl:w-[910px] lg:w-[680px] md:w-[460px] sm:w-[230px]">
        <Anime 
          img="https://cdn.myanimelist.net/images/about_me/ranking_items/14203345-8cffb697-6736-4bf0-a209-cafb9b70cc88.jpg?t=1660910160"
          title="Maquia: When the Promised Flower Blooms"
          season="Winter 2018"
        />
        <Anime 
          img="https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
          title="The Promised Neverland"
          season="Winter 2019"
        />
        <Anime 
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg"
          title="Title"
          season="season"
        />
      </main>
    </div>
  );
}

export default App;
