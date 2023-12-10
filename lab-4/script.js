// show all commands
    console.log('Make some changes by using the following commands:')
    console.log('setTitle()' + ' -- Update the text of the title element');
    console.log('setBackgroundColor()' + ' -- Update the background color of the element');
    console.log('setFontColor()' + ' -- Update the font color of the element');
    console.log('setTheme()' + ' -- Update the page theme from theme1 to theme4');

/** This function will update the title text by using the query selector to select the "#title" and 
 * update the textContent with the updateText parameter.
 * @param {string} updateText - The text to update the title with.
 * @returns "Title has been updated." - returns a string to confirm the title has been updated.
 */
function setTitle(updateText) {
    const titleText = document.querySelector('#title');
    titleText.textContent = updateText; 
    return 'Title has been updated.';
}

/** This function will update the background color of the page by usign the query selector to select the 
 * body element and update the backgroundColor with the updateColor parameter.
 * @param {string} updateColor - The color to update the background with.
 * @returns - "Background color has been updated." - returns a string to confirm the background color has been updated.
 */
function setBackgroundColor(updateColor) {
    document.body.style.backgroundColor = updateColor;
    return 'Background color has been updated.';
}

/** This function will update the font color of the page by using the query selector to select the
 * body element and update the color with the updateColor parameter.
 * @param {string} updateColor - The color to update the font with.
 * @returns - "Font color has been updated." - returns a string to confirm the font color has been updated.
 */
function setFontColor(updateColor) {
    document.body.style.color = updateColor;
    return 'Font color has been updated.';
}

/** This function will update the theme of the page by using the query selector to select the body element
 * and update the classList with the switchTheme parameter.
 * @param {string} switchTheme - The theme to update the page with.
 * @returns - "Current theme is ${switchTheme}." - returns a string to confirm the theme has been updated.
 */
function setTheme(switchTheme) {
    const bodyTheme = document.body;
    
    // remove previously implemented theme classes
    bodyTheme.classList.remove('theme1', 'theme2', 'theme3', 'theme4' );
    
    // switch to the theme the user type in if it is availiable.
    if (switchTheme === 'theme1' || switchTheme === 'theme2' || switchTheme === 'theme3' || switchTheme === 'theme4') {
        bodyTheme.classList.add(switchTheme);
        return `Current theme is ${switchTheme}.`;
    } else {
        return 'The provided theme is not valid.';
    }
}
