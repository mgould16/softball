const results = document.querySelector("#results");

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     data.Search.forEach((result) => {
//       const movie = `<li class="list-inline-item">
//         <p>${result.Year}</p>
//         <p>${result.Title}</p>
//       </li>`;
//       results.insertAdjacentHTML("beforeend", movie);
//     });
//   });

fetch("http://bsf.spawtz.com/External/Fixtures/Feed.aspx?Type=Standings&LeagueId=9&SeasonId=34&DivisionId=662")
  .then(response => response.text())
    .then((data) => {
      let parser = new DOMParser(),
      xml = parser.parseFromString(data,"text/xml");
      console.log(xml.getElementsByTagName('Team'));
      var items = xml.getElementsByTagName('Team');
      console.log(items.length)
      var item;
      for(i = 0; i < items.length; i++) {
        item = items[i].attributes[1].value;
        console.log(item);
      const TeamName = `<li class="list-inline-item">
        <p>${item}</p>
      </li>`;
      results.insertAdjacentHTML("beforeend", TeamName);
      };
    });




// fetch("http://bsf.spawtz.com/External/Fixtures/Feed.aspx?Type=Standings&LeagueId=9&SeasonId=34&DivisionId=662")
//   .then(response => response.text())
//   .then((data) => {
//     let parser = new DOMParser(),
//       xml = parser.parseFromString(data,"text/xml");
//       console.log(xml.getElementsByTagName('Team'));
//       var items = xml.getElementsByTagName('Team');
//       console.log(items.length)
//       var item;
//       for(i = 0; i < items.length; i++) {
//         item = items[i].attributes[1].value;
//         console.log(item);
//         xml.Search.each((result) => {
//         const TeamName = `<li class="list-inline-item">
//         <p>${item}</p>
//         </li>`;
//         results.insertAdjacentHTML("beforeend, TeamName");
//       };
//     });
//       });





      // xml.Search.each((result) => {
      // const TeamName = `<li class="list-inline-item">
      //   <p>${Team.attributes}</p>
      //   </li>`;
      //   results.insertAdjacentHTML("beforeend, TeamName");
