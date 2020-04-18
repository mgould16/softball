window.addEventListener("load", function() {
  fillTable();
});



function fillTable() {
  document.write("<table><tr><th colspan='2'>Table</th></tr>");
  fetch("http://bsf.spawtz.com/External/Fixtures/Feed.aspx?Type=Standings&LeagueId=9&SeasonId=34&DivisionId=662")
    .then(response => response.text())
      .then((data) => {
        let parser = new DOMParser(),
        xml = parser.parseFromString(data,"text/xml");
        var x=xml.getElementsByTagName("Team");
        for (i=0;i<x.length;i++) {
          document.write("<tr><td>");
          document.write(x[i].attributes[1].value);
          document.write("</td><td>");
          document.write(x[i].attributes[10].value);
          document.write("</td></tr>");
        }
        document.write("</table>");
      });
};
