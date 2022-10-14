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
          img="https://i0.wp.com/doublesama.com/wp-content/uploads/2022/03/Violet-Evergarden-Movie-cover-1.jpg?resize=640%2C905"
          title="Is It Wrong to Try to Pick Up Girls in a Dungeon?"
          season="Spring 2019"
        />
        <Anime 
          img="https://i0.wp.com/doublesama.com/wp-content/uploads/2022/03/Violet-Evergarden-Movie-cover-1.jpg?resize=640%2C905"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://i0.wp.com/doublesama.com/wp-content/uploads/2022/03/Violet-Evergarden-Movie-cover-1.jpg?resize=640%2C905"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://i0.wp.com/doublesama.com/wp-content/uploads/2022/03/Violet-Evergarden-Movie-cover-1.jpg?resize=640%2C905"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://i0.wp.com/doublesama.com/wp-content/uploads/2022/03/Violet-Evergarden-Movie-cover-1.jpg?resize=640%2C905"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://i0.wp.com/doublesama.com/wp-content/uploads/2022/03/Violet-Evergarden-Movie-cover-1.jpg?resize=640%2C905"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://i0.wp.com/doublesama.com/wp-content/uploads/2022/03/Violet-Evergarden-Movie-cover-1.jpg?resize=640%2C905"
          title="Title"
          season="season"
        />
        <Anime 
          img="https://i0.wp.com/doublesama.com/wp-content/uploads/2022/03/Violet-Evergarden-Movie-cover-1.jpg?resize=640%2C905"
          title="Title"
          season="season"
        />
      </main>
    </div>
  );
}

export default App;
