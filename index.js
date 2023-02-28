function addContent(){
    const challengeList = document.getElementById('challenges');
  
    return data.map(data => {
      const render =
      `<div class='box'>
        <a target='_blank' href='${data.url}'>
          <img alt='${data.title}' src='${data.img}'>
          <div class='title-grad'>
            <span class='title'>${data.title}</span>
          </div>
        </a>
      </div>`;
  
      challengeList.insertAdjacentHTML("beforeend", render);
      });
  }
  
window.onload = addContent;

const data = [
    {
      title: "JavaScript Drum Kit",
      url: "01 - JavaScript Drum Kit/index.html",
      img: ""
    },
]