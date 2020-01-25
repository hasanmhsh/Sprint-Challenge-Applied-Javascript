// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const url = 'https://lambda-times-backend.herokuapp.com/topics';

axios.get(url).then(response=>response.data.topics.forEach(topic=>{
    //console.log(topic);
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = topic;
    document.querySelector('.topics').appendChild(tabDiv);
})).catch(error=>console.log(error));

const topBar = document.querySelector('.top-bar');
const tabs = document.querySelector('.tabs');
const topicsButton = document.querySelector('.container-left span');
topicsButton.addEventListener('click',e=>{
    if(topBar.style.position.toLowerCase()!=='relative'){
        topBar.style.position = 'relative';
    }
    else{
        topBar.style.position = 'fixed';
    }
});
topBar.style.zIndex = '2';
tabs.style.zIndex = '1';