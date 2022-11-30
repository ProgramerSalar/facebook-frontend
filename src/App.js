<script src="https://cdn.tailwindcss.com"></script>

function App() {
  const get = async () => {
    const res = await fetch("http://localhost:8000");
    console.log(res);
  };
  get();
  return (

    <div>
      <html>
        <head>
          <meta charSet="UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          <h1 className="text-3xl font-bold underline cursor-pointer"> hello world 
          <LiveVideo className="bg-blue-600"></LiveVideo>
          </h1>
          
        </body>
      </html>


    </div>

  )
}

export default App;






















