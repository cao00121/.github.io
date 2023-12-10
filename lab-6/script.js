// Get the element by its id
const galleryContent = document.getElementById('emoji-gallery')

// // Declare an empty string to contain the emoji string later
// let emojiList = ''

// // Use For...Of to create the HTML string and add into the emojiList
// for (const item of emoji) {
//     emojiList += `
//         <div class="emoji-container" title="${item.codes}">
//             <div class="emoji-block">${item.char}</div>
//             <div class="emoji-name">${item.name}</div>
//         </div>   
//     `;
// }

// // Set all the emoji HTML as the content of emoji  gallery
// galleryContent.innerHTML = emojiList;

emoji.forEach(item => {
    let container = document.createElement('div');
    container.classList.add('emoji-container');
    container.title = item.codes;

    let block = document.createElement('div');
    block.classList.add('emoji-block');
    block.textContent = item.char;

    let name = document.createElement('div');
    name.classList.add('emoji-name');
    name.textContent = item.name;

    container.appendChild(block);
    container.appendChild(name);

    galleryContent.appendChild(container);
});