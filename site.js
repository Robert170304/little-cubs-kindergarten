const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "Entrepreneur",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "Lawyer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "businessman",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "Athlete",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  // select items
  const author = document.getElementById("customer");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  const img = document.getElementById("person-img");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });


// staff profile slider

const staffProfiles = [
    {
      id: 1,
      name: "marry willson",
      job: "art teacher",
      img:
        "https://ingridkuhn.com/themes/alphabet/img/team1.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        courses: ['drawing course','outdoor activity']
    },
    {
      id: 2,
      name: "anna johnson",
      job: "art teacher",
      img:
        "https://ingridkuhn.com/themes/alphabet/img/team4.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        courses: ['watercolor drawing','cooking lesson']
    },
    {
      id: 3,
      name: "jane doe",
      job: "caretaker",
      img:
        "https://ingridkuhn.com/themes/alphabet/img/team3.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        courses: ['Orienteering']
    },
    {
      id: 4,
      name: "bill anderson",
      job: "sports teacher",
      img:
        "https://ingridkuhn.com/themes/alphabet/img/team2.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        courses: ['Swimming Course','Group Sport']
    },
  ];

  const profileName = document.querySelector(".name");
  const proffession = document.querySelector(".subject");
  const course1 = document.querySelector(".course-1");
  const course2 = document.querySelector(".course-2");
  const staffImg = document.querySelector(".profile-img img");
  
  const prev_Btn = document.querySelector("#prevBtn");
  const next_Btn = document.querySelector("#nextBtn");
  
  // set starting item
  let currentprofile = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = staffProfiles[currentprofile];
    staffImg.src = item.img
    profileName.textContent = item.name;
    proffession.textContent = item.job;
    course1.textContent = item.courses[0];
    course2.textContent = item.courses[1];
  });
  
  // show person based on item
  function showStaff(person) {
    const item = staffProfiles[person];
    staffImg.src = item.img
    profileName.textContent = item.name;
    proffession.textContent = item.job;
    course1.textContent = item.courses[0];
    course2.textContent = item.courses[1];
  }
  // show next person
  next_Btn.addEventListener("click", function () {
    currentprofile++;
    if (currentprofile > staffProfiles.length - 1) {
      currentprofile = 0;
    }
    showStaff(currentprofile);
  });
  // show prev person
  prev_Btn.addEventListener("click", function () {
    currentprofile--;
    if (currentprofile < 0) {
      currentprofile = staffProfiles.length - 1;
    }
    showStaff(currentprofile);
  });



const ques = document.querySelectorAll('.ques')
const quesBox = document.querySelectorAll('.que-box')

// accrodian FAQs toggle
quesBox.forEach( function(queBox) {
    const quesBtn = queBox.querySelector('.que-item')
    quesBtn.addEventListener('click', function() {
        queBox.classList.toggle("show-ans");
        sidebar.classList.remove('show-sidebar')
    })
})


const toggleBtn = document.querySelector('.nav-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar-container')

toggleBtn.addEventListener('click', function() {
    sidebar.classList.add('show-sidebar')
})

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
})
