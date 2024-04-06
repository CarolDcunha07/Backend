import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main_Home from "./routes/Main_Home";
import Home from "./routes/Home";
import About from "./routes/About";
import Gallery from "./routes/Gallery";
import Blog from "./routes/Blog";
import Home_FLC from "./routes/Home_FLC";
import Community_FLC from "./routes/Community_FLC";
import Gallery_FLC from "./routes/Gallery_FLC";
import Blog_FLC from "./routes/Blog_FLC";
import Home_Authorcraft from "./routes/Home_Authorcraft";
import About_Authorcraft from "./routes/About_Authorcraft";
import Gallery_Authorcraft from "./routes/Gallery_Authorcraft";
import Blog_Authorcraft from "./routes/Blog_Authorcraft";
import Home_Rachana from "./routes/Home_Rachana";
import Blog_Rachana from "./routes/Blog_Rachana";
import About_Rachana from "./routes/About_Rachana";
import Gallery_Rachana from "./routes/Gallery_Rachana";
import About_Taleem from "./routes/About_Taleem";
import Blog_Taleem from "./routes/Blog_Taleem";
import Gallery_Taleem from "./routes/Gallery_Taleem";
import Home_Taleem from "./routes/Home_Taleem";



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main_Home/>}/>
        <Route path="/home_yoga" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blog" element={<Blog/>}/>

        <Route path="/Home_flc" element={<Home_FLC/>}/>
        <Route path="/community" element={<Community_FLC/>}/>
        <Route path="/gallery_FLC" element={<Gallery_FLC/>}/>
        <Route path="/blog_FLC" element={<Blog_FLC/>}/>

        <Route path="/Home_Authorcraft" element={<Home_Authorcraft/>}/>
        <Route path="/About_Authorcraft" element={<About_Authorcraft/>}/>
        <Route path="/Gallery_Authorcraft" element={<Gallery_Authorcraft/>}/>
        <Route path="/Blog_Authorcraft" element={<Blog_Authorcraft/>}/>

        <Route path="/Home_Rachana" element={<Home_Rachana/>}/>
        <Route path="/About_Rachana" element={<About_Rachana/>}/>
        <Route path="/Gallery_Rachana" element={<Gallery_Rachana/>}/>
        <Route path="/Blog_Rachana" element={<Blog_Rachana/>}/>

        <Route path="/Home_Taleem" element={<Home_Taleem/>}/>
        <Route path="/About_Taleem" element={<About_Taleem/>}/>
        <Route path="/Gallery_Taleem" element={<Gallery_Taleem/>}/>
        <Route path="/Blog_Taleem" element={<Blog_Taleem/>}/>


      </Routes>
    </div>
  );
}