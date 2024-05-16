var carouselInterval, 
    carouselImageList = [], 
    carouselHostElement, 
    carouselCurrentValue = 0;

const carouselItemHtmlString = `
    <div id="carousel::#CAR_INDEX#" class="max-h-screen carousels bg-center bg-no-repeat bg-cover bg-fill opacity-30 absolute top-0 bottom-0 left-0 right-0" 
         style="background-image: url(#IMG_PATH#) !important; background-color: darkgray" >
    </div>
`;

function Initial(hostElementId, list) {
    carouselHostElement = document.getElementById(hostElementId.replace('#', ''));
    carouselHostElement.style.position = 'relative';
    let index = 0;
    carouselImageList = list;
    for(let car of carouselImageList){
        carouselHostElement.innerHTML += `${carouselItemHtmlString}\n`.replace('#IMG_PATH#', car).replace('#CAR_INDEX#', index++);
    }
    ChangeCarousel();
    carouselInterval = setInterval(() => {
        // if(!(props.shouldPlay ?? true)) return;
        ChangeCarousel();
    }, 3690);
}

function ChangeCarousel() {
    if (carouselCurrentValue < carouselImageList.length - 1) carouselCurrentValue++;
    else carouselCurrentValue = 0;
    // foreach remove all carousel show status then set the next image to display.
    console.log(`changing carousel: ${carouselCurrentValue}`)
    for(let sub of carouselHostElement.children){
        if(sub.id == `carousel::${carouselCurrentValue}`){
            console.log('proc')
            document.getElementById(sub.id).classList.remove('fade-au');
            document.getElementById(sub.id).classList.add('fade-in');
        }else{
            document.getElementById(sub.id).classList.remove('fade-in');
            document.getElementById(sub.id).classList.add('fade-au');  
        }
                
    }
}