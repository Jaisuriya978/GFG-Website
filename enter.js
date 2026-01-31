const pages = {
    html:"html5.html",python:"python.html",c:"c.html",cpp:"cpp.html",java:"java.html",php:"php.html",linux:"linux.html",solidity:"solidity.html",oops:"oops.html",
    css:"css3.html",stack:"stack.html",queue:"queue.html",hash:"hashing.html",mysql:"mysql.html",sql:"sql.html",job:"jobs.html",kanban:"kanban.html",string:"string.html",
    javascript:"js.html",array:"array.html",arduino:"arduino.html",bigdata:"bigdata.html",bluetooth:"bluetooth.html",graph:"graph.html",eda:"eda.html",spark:"spark.html",
    react:"react.html",ethereum:"ethereum.html",hadoop:"hadoop.html",sensors: "sensors.html",bootstrap: "bootstrap.html",iot:"iot.html",nlp:"nlp.html",sorting:"sorting.html"
    };

  document.getElementById("searchInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const value = e.target.value.toLowerCase().trim();

      if (pages[value]) {
        window.location.href = pages[value];
      } else {
        window.location.href = "not-found.html";
      }
    }
  });