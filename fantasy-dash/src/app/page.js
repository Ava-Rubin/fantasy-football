import Roster from "./components/Roster/roster";
import Trending from "./components/Trending/trending";

export default function Home() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet"></link>
    <div className="h-screen p-12 grid grid-flow-col grid-rows-6 grid-cols-5 gap-8 ">
      <div className="fluted-glass row-span-6">
        <h1>TEAM NAME</h1>
        <Roster/>
      </div>
      <div className="card col-start-2 row-span-2 ">
        <h1>PROJECTED</h1>
      </div>
      <div className="card row-span-2 ">
        <h1>GRAPH</h1>
      </div>
      <div className="card ">
        <h2>7-2-0</h2>
      </div>
      <div className="card ">
        <h2>12th/14</h2>
      </div>
      <div className="col-start-3 col-span-3 row-span-2 card ">
        <h1>NEWS</h1>
      </div>
      <div className="row-start-3 row-span-4 col-start-3 col-span-2 card">
        <h1>TRADE</h1>
      </div>
      <div className="row-start-3 row-span-4 col-start-5 card">
        <h1>TRENDING</h1>
        <Trending/>
      </div>
    </div>
    </>
  );
}
