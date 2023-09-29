// show all commands
    console.log('Make some changes by using the following commands:')
    console.log('setTitle()' + ' -- Update the text of the title element');
    console.log('setBackgroundColor()' + ' -- Update the background color of the element');
    console.log('setFontColor()' + ' -- Update the font color of the element');
    console.log('setTheme()' + ' -- Update the page theme from theme1 to theme4');

// function to update the title c
function setTitle(updateText) {
    const titleText = document.querySelector('#title');
    titleText.textContent = updateText;
    return 'Title has been updated.';
}

// function to update the background color
function setBackgroundColor(updateColor) {
    document.body.style.backgroundColor = updateColor;
    return 'Background color has been updated.';
}

// function to update the font color
function setFontColor(updateColor) {
    document.body.style.color = updateColor;
    return 'Font color has been updated.';
}

// function to set the theme
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
