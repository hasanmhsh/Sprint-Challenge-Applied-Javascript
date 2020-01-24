// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(attributes) {
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const titleH1 = document.createElement('h1');
    const tempSpan = document.createElement('span');

    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    dateSpan.textContent = 'SMARCH 28, 2019';
    //dateSpan.textContent = attributes.date;
    titleH1.textContent = 'Lambda Times';
    //titleH1.textContent = attributes.title;
    tempSpan.classList.add('temp');
    tempSpan.textContent = '98°';
    //tempSpan.textContent = `${attributes.temperature.toString()}°`;

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(titleH1);
    headerDiv.appendChild(tempSpan);

    document.querySelector('.header-container').appendChild(headerDiv);
}
