import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Car1 from './Vehicle.jsx'
// import Car3 from './Vehicle3.jsx';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Car1 example="1" imlinks="https://eu-images.contentstack.com/v3/assets/blt0bbd1b20253587c0/blt4bf1a4090380d5b0/651579e1a95ca40cf4969a68/00-Divo_BUGATTI.jpg?width=1280&auto=webp&quality=80&format=jpg&disable=upscale"/>
//       <Car1 example="2" imlinks="https://etimg.etb2bimg.com/photo/61543962.cms"/>
//       <Car3 color="red"/>
//       <Car3 color="blue"/>
//     </>
//   )
// }

// export default App;
import Card from "./Card.jsx";
function App() {
  return (
    <div className="card-container">
      <Card
        imgsrc="https://eu-images.contentstack.com/v3/assets/blt0bbd1b20253587c0/blt4bf1a4090380d5b0/651579e1a95ca40cf4969a68/00-Divo_BUGATTI.jpg?width=1280&auto=webp&quality=80&format=jpg&disable=upscale"
        title="T shirt 1"
        description="This is T shirt 1 worth of $10"
      />
      <Card
        imgsrc="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5PGDreo9uFuY0J56CLzWDeNj7f7qvysM_mEMqwphlau4FNW8zrdNfCsru3bu2ihwZc4wFmNZP8KznPYv2rJbUXJFKZRc151TzjHV3RT48u4rzjdv8QKTSqQ"
        title="T shirt 2"
        description="This is T shirt 2 worth of $15"
      />
    </div>
  )
}

export default App;