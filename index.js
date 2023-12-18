fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const summary = document.querySelector(".summary");

    let htmlContent = "";

    data.forEach((item) => {
      htmlContent += `
            <div class="results " style="background-color:${item.backgroundColor}">
                <div class="title">
                    <img src=${item.icon} alt="icon-image">
                    <p style='color:${item.color}'>${item.category}</p>
                </div>
                <div class="scores">
                    <span class="allscores">${item.score}</span>/<span class="sum">100</span>
                </div>
            </div>
        `;
    });

    summary.innerHTML = htmlContent;
  })
  
