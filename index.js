function addContent(){
    const challengeList = document.getElementById('challenges');
  
    return data.map(data => {
      const render =
      `<div class="card">
      <img src="${data.img}" />
      <div>
        <h2>${data.title}</h2>
        <p>
          ${data.desc}
        </p>
        <a target='_blank' href='${data.url}' class='project_container''>
      <button>
        View Project</button>
        </a>
      </div>
    </div>`;


  
      challengeList.insertAdjacentHTML("beforeend", render);
      });
  }
  
window.onload = addContent;

const data = [
    {
      title: "JavaScript Drum Kit",
      url: "01 - JavaScript Drum Kit/index.html",
      img: "01 - JavaScript Drum Kit/background.jpg",
      desc: "This is some filler text for now"
    },
    {
      title: "JavaScript Clock",
      url: "02 - JS and CSS Clock/index.html",
      img: "https://unsplash.it/1500/1000?image=88&blur=2",
      desc: "This is some filler text for now"
    },
    {
      title: "CSS Variables",
      url: "03 - CSS Variables/index.html",
      img: "assets/placeholder.png",
      desc: "This is some filler text for now"
    },
    {
      title: "Array Cardio Day 1",
      url: "04 - Array Cardio Day 1/index.html",
      img: "04 - Array Cardio Day 1/cover.jpg",
      desc: "This is some filler text for now"
    },
    {
      title: "Flex Panel Gallery",
      url: "05 - Flex Panel Gallery/index.html",
      img: "assets/placeholder.png",
      desc: "This is some filler text for now"
    },
    {
      title: "Ajax Type Ahead",
      url: "06 - Type Ahead/index.html",
      img: "assets/placeholder.png",
      desc: "This is some filler text for now"
    },
]