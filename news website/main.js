let Inpt = document.getElementById("Inpt");
let Container = document.getElementById("Container");

function Search()
{
   let SearchTopic = Inpt.value;
   GetData(SearchTopic)
}

async function GetData(Topic)
{
   let Res = await axios.get(`https://newsapi.org/v2/everything?q=${Topic}&from=2025-06-02&sortBy=publishedAt&apiKey=df988bd559164bf1a2ea37a0d794ab6c
`);
   console.log(Res.data.articles);
   Display(Res.data.articles)
}

GetData("India")

function Display(Data)
{
   Container.innerHTML = ""
   for(let i of Data)
   {
       Container.innerHTML += `
           <div>
               <img src = ${i.urlToImage} >
               <h2>${i.title} </h2>
               <h4>${i.description} </h4>
               <h2>${i.author} </h2>
               <button id="read-more">READ MORE</button>
           </div>
       `
   }
}
