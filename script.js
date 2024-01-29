// Add this to your script.js file

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header-wrapper');
  if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(34,34,34, 0.9)'; 
  } else {
      header.style.backgroundColor = 'rgba(26, 30, 31, 1)'; 
  }
});

const imageUrls = [
    'img/logo1.png',
    'img/logo2.png',
    'img/logo3.png',
    'img/logo4.png',
    'img/logo5.png',
    'img/logo6.png',
    'img/logo7.png'
  ];
  
let currentIndex = 0;

let autoMoveCarousel; 

function updateCarousel() {
    const carousel = document.getElementById('carousel-container');
    const existingImages = carousel.querySelectorAll('img');
    existingImages.forEach(img => {img.classList.add('fade-out');   img.style.opacity = '0';});

    setTimeout(() => {
    carousel.innerHTML = '';
    for (let i = currentIndex; i < currentIndex + 3 && i < imageUrls.length; i++) {
        const img = document.createElement('img');
        img.src = imageUrls[i];
        carousel.appendChild(img);
        img.classList.add('fade-in'); 
        setTimeout(() => { img.style.opacity = '1'; }, 100);
    }
    setTimeout(startAutoMoveCarousel, 1000);
     }, 1000);
}

function startAutoMoveCarousel() {
  stopAutoMoveCarousel(); // Stop any existing automatic movement
  autoMoveCarousel = setInterval(moveRight, 3000); // Start automatic movement
}

function stopAutoMoveCarousel() {
  clearInterval(autoMoveCarousel); // Clear the interval
}

function moveRight() {
  stopAutoMoveCarousel(); 
    currentIndex = (currentIndex + 3 < imageUrls.length) ? currentIndex + 3 : 0;
    updateCarousel();
}

function moveLeft() {
  stopAutoMoveCarousel(); 
    currentIndex = (currentIndex - 3 >= 0) ? currentIndex - 3 : Math.max(0, imageUrls.length - (imageUrls.length % 3));
    updateCarousel();
}

function createCarouselDots() {
  const dotsContainer = document.getElementById('carousel-dots-container');
  const numberOfDots = Math.ceil(imageUrls.length / 3);
      for (let i = 0; i < numberOfDots; i++) {
          const dot = document.createElement('span');
          dot.classList.add('carousel-dot');
          dotsContainer.appendChild(dot);
          dot.addEventListener('click', function() {
            const allDots = dotsContainer.querySelectorAll('.carousel-dot');
              allDots.forEach(dot => dot.classList.remove('active-dot'));
              dot.classList.add('active-dot');
              currentIndex = i * 3;
              stopAutoMoveCarousel(); 
              updateCarousel();
          });
    }
  }


updateCarousel();
createCarouselDots()
startAutoMoveCarousel();


  


  //accordion

const accordionData = [
    { question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?", 
    answer: "<span>კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:</span><br/> <p><b>I ეტაპი</b><span> - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.</span></p>"+
  "<p><b>II ეტაპი</b><span> - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.</span></p>"+
  "<p><b>III ეტაპი </b><span> - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.</span></p>" },
    { question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?", 
    answer: "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე." },
    { question: "რა ღირს სწავლა პროგრამის ფარგლებში?", 
    answer: "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ." },
 
  ];
  
  
  function renderAccordion(accordionItems) {
    const accordionRoot = document.getElementById('accordion-content');   
    const container = document.createElement('div');
    container.className = 'accordion';
    
    accordionItems.forEach((item, index) => {
      const accordionWrapper = document.createElement('div');
      accordionWrapper.className = 'accordion-wrapper'
      const accordionHeader = document.createElement('button');
      accordionHeader.className = 'accordion-header';
      accordionHeader.innerHTML = item.question;
      accordionHeader.onclick = () => {
        const content = document.getElementById(`content-${index}`);
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      };
  
      const accordionContent = document.createElement('div');
      accordionContent.className = 'accordion-content';
      accordionContent.id = `content-${index}`;
      accordionContent.style.display = 'none';
      accordionContent.innerHTML = item.answer;
  
      accordionWrapper.appendChild(accordionHeader);
      accordionWrapper.appendChild(accordionContent);
      container.appendChild(accordionWrapper);
    });
  
    accordionRoot.appendChild(container);
  }
  

  document.addEventListener('DOMContentLoaded', () => renderAccordion(accordionData));



  const cardData = [
    { imgSrc: 'img/card1.jpg', title: 'iOS Development', text: 'რეგისტრაცია დასრულებულია' },
    { imgSrc: 'img/card2.jpg', title: 'React', text: 'რეგისტრაცია დასრულებულია' },
    { imgSrc: 'img/card3.jpg', title: 'Intro to Python', text: 'რეგისტრაცია დასრულებულია' },
    { imgSrc: 'img/card4.jpg', title: 'Advanced Python', text: 'რეგისტრაცია დასრულებულია' },
    { imgSrc: 'img/card5.jpg', title: 'Advanced Cybersecurity Course', text: 'რეგისტრაცია დასრულებულია' },
    { imgSrc: 'img/card6.jpg', title: 'ToT - Training of Trainers', text: 'რეგისტრაცია დასრულებულია' },
    { imgSrc: 'img/card7.jpg', title: 'Blockchain', text: 'რეგისტრაცია დასრულებულია' },
    { imgSrc: 'img/card8.jpg', title: 'DevOps', text: 'რეგისტრაცია დასრულებულია' },
    { imgSrc: 'img/card9.jpg', title: 'Information Security Governance', text: 'რეგისტრაცია დასრულებულია' },
];


document.addEventListener('DOMContentLoaded', function() {
  const cardGrid = document.querySelector('.card-grid');

  cardData.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';

      const image = document.createElement('img');
      image.src = card.imgSrc;
      image.alt = card.title;
      cardElement.appendChild(image);

      const cardText = document.createElement('div');
      cardElement.appendChild(cardText);

      const title = document.createElement('h3');
      title.textContent = card.title;
      cardText.appendChild(title);

      const text = document.createElement('p');
      text.textContent = card.text;
      cardText.appendChild(text);

      const link = document.createElement('a');
      link.href = "#";
      link.textContent = '→ კურსის დეტალები';
      cardText.appendChild(link);

      cardGrid.appendChild(cardElement); 
  });
});
