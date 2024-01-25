

export default function Home() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet"></link>
    <div class="h-screen p-12 grid grid-flow-col grid-rows-6 grid-cols-5 gap-6 ">
      <div class="card row-span-6 border-light-pink dark:border-dark-pink">
        <h1>CEE DEEZ NUTS</h1>
      </div>
      <div class="card col-start-2 row-span-2  border-light-green dark:border-dark-green">
        <h1>PROJECTED</h1>
      </div>
      <div class="card row-span-2 border-light-blue border-8 dark:border-dark-blue">
        <h1>GRAPH</h1>
      </div>
      <div class="card border-light-yellow border-8 dark:border-dark-yellow">
        <h2>7-2-0</h2>
      </div>
      <div class="card border-light-yellow border-8 dark:border-dark-yellow">
        <h2>12th/14</h2>
      </div>
      <div class="col-start-3 col-span-3 row-span-2 card border-light-yellow border-8 dark:border-dark-yellow">
        <h1>NEWS</h1>
      </div>
      <div class="row-start-3 row-span-4 col-start-3 col-span-2 card border-light-purp border-8 dark:border-dark-purp">
        <h1>TRADE</h1>
      </div>
      <div class="row-start-3 row-span-4 col-start-5 card border-light-pink border-8 dark:border-dark-pink">
        <h1>TRENDING</h1>
      </div>
    </div>
    </>
  );
}
