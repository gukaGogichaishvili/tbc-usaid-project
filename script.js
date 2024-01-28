// Add this to your script.js file

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  } else {
      header.style.backgroundColor = 'white';
  }
});

const logos = [
    'img/logo1.png',
    'img/logo2.png',
    'img/logo3.png',
    'img/logo4.png',
    'img/logo5.png',
    'img/logo6.png',
    'img/logo7.png'
  ];
  
  let currentIdx = 0;
  
  function createCarousel(logos) {
    const carouselSection = document.getElementById('carousel-section');
    if (!carouselSection) {
      console.error('Carousel section element not found!');
      return;
    }
  
    // Create container for carousel
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';
  
    // Create the logo elements
    logos.forEach((logoSrc, index) => {
      const logo = document.createElement('img');
      logo.src = logoSrc;
      logo.className = 'carousel-logo';
      carouselContainer.appendChild(logo);
    });
  
    // Add navigation arrows
    const leftArrow = document.createElement('button');
    leftArrow.className = 'carousel-arrow left';
    leftArrow.innerHTML = '&#9664;'; // left-pointing arrow
    leftArrow.onclick = navigateLeft;
  
    const rightArrow = document.createElement('button');
    rightArrow.className = 'carousel-arrow right';
    rightArrow.innerHTML = '&#9654;'; // right-pointing arrow
    rightArrow.onclick = navigateRight;
  
    carouselSection.appendChild(leftArrow);
    carouselSection.appendChild(carouselContainer);
    carouselSection.appendChild(rightArrow);
  
    // Create navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    for (let i = 0; i < logos.length; i += 3) {
      const dot = document.createElement('span');
      dot.className = 'carousel-dot';
      dot.onclick = () => navigateTo(i);
      dotsContainer.appendChild(dot);
    }
    carouselSection.appendChild(dotsContainer);
  
    updateCarousel();
  }
  
  function navigateLeft() {
    // Move left by three, wrapping around if necessary
    currentIdx = (currentIdx - 3 + logos.length) % logos.length;
    updateCarousel();
  }
  
  function navigateRight() {
    // Move right by three, stopping at the last possible group
    currentIdx = Math.min(currentIdx + 3, logos.length - (logos.length % 3));
    updateCarousel();
  }
  
  function navigateTo(index) {
    // Navigate to a specific group, index represents the group number
    currentIdx = index * 3;
    updateCarousel();
  }
  
  
  function navigateTo(index) {
    currentIdx = index;
    updateCarousel();
  }
  
  function updateCarousel() {
    const logos = document.querySelectorAll('.carousel-logo');
    const dots = document.querySelectorAll('.carousel-dot');
  
      const logosElements = document.getElementsByClassName('carousel-logo');
      for (let i = 0; i < logosElements.length; i++) {

        logosElements[i].style.display = (i >= currentIdx && i < currentIdx + 3) ? 'inline-block' : 'none';
      }
  
    dots.forEach((dot, index) => {
      dot.style.opacity = index === currentIdx ? '1' : '0.7';
    });
  }
  



  //accordion

const accordionData = [
    { question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?", 
    answer: "<span>კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:</span><br/> <p><b>I ეტაპი</b><span> - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.</span></p>" },
    { question: "Question 2", 
    answer: "Answer to question 2" },
 
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
  

  document.addEventListener('DOMContentLoaded', () => createCarousel(logos));
  document.addEventListener('DOMContentLoaded', () => renderAccordion(accordionData));



  const cardData = [
    { imgSrc: 'img/card1.jpg', title: 'Card Title 1', text: 'Description for card 1' },
    { imgSrc: 'img/card2.jpg', title: 'Card Title 2', text: 'Description for card 2' },
    { imgSrc: 'img/card3.jpg', title: 'Card Title 1', text: 'Description for card 1' },
    { imgSrc: 'img/card4.jpg', title: 'Card Title 2', text: 'Description for card 2' },
    { imgSrc: 'img/card5.jpg', title: 'Card Title 1', text: 'Description for card 1' },
    { imgSrc: 'img/card6.jpg', title: 'Card Title 2', text: 'Description for card 2' },
    { imgSrc: 'img/card7.jpg', title: 'Card Title 1', text: 'Description for card 1' },
    { imgSrc: 'img/card8.jpg', title: 'Card Title 2', text: 'Description for card 2' },
    { imgSrc: 'img/card9.jpg', title: 'Card Title 1', text: 'Description for card 1' },
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

      const title = document.createElement('h3');
      title.textContent = card.title;
      cardElement.appendChild(title);

      const text = document.createElement('p');
      text.textContent = card.text;
      cardElement.appendChild(text);

      const link = document.createElement('a');
      link.href = "#";
      link.textContent = 'Learn More →';
      cardElement.appendChild(link);

      cardGrid.appendChild(cardElement); 
  });
});
