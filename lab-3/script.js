// Create objects literal with the following properties
const campStuff = {
    wood: 0,
    marshmallows: 3,
    fire: false,
    tent: false
};

// define the help function
function help(){
    console.log('Commands:')
    console.log('help()' + ' -- Check all the commands');
    console.log('pitch()' + ' -- Pitch your tent');
    console.log('search()' + ' -- Search for wood');
    console.log('tend()' + ' -- Set on/put out the fire');
    console.log('roast()' + ' -- Enjoy your marshmallows');
    console.log('sleep()' + ' -- Go to sleep');
}

// invoke help
help()

// define the pitch function
function pitch(){
    if (campStuff.tent === false){
        // Set campStuff.tent to true to indicate the tent is pitched.
        campStuff.tent = true;  
        return 'Woohoo! 🎉 You pitch the tent! Bravo!'
    }else {
        // campStuff.tent is set to true, indicating the tent is already pitched.
        return 'You double-check the tent, everything looks great.😁'  
    }
}

// define the search function
function search(){
    if (campStuff.fire === false && campStuff.wood === 0){
        // Increment wood by 1 and inform the player that they have found a piece of wood.
        campStuff.wood = campStuff.wood + 1;
        return 'You find a piece of wood. 🌱'
    } else if (campStuff.fire === false && campStuff.wood === 1){
        // add this prompt to prevent the player keep searching for wood.
        return 'It\'s pitch-dark around; you decide to set on the fire first.'
    } else {
        // return this prompt when the fire is set up.
        return 'Maybe it\'s a bad idea. You should stay by the fire.'
    }
}

// define the tend function
function tend(){
    if (campStuff.fire === false && campStuff.wood === 1){
        // Inform the player that they have started the fire.
        campStuff.fire = true;
        campStuff.wood = campStuff.wood - 1;
        return 'You set on the fire.';
    } else if (campStuff.fire === false && campStuff.wood === 0){
        // prompt the player to search for wood.
        return 'You decide to find a piece of wood for setting the fire.';
    } else {
        // put out the fire.
        campStuff.fire = false;
        return 'You put out the fire.';
    }
}

// define the roast function
function roast(){
    if (campStuff.fire === false && 0 < campStuff.marshmallows && campStuff.marshmallows <= 3){
        // prompt the player to set on the fire.
        return 'Oops! 😅 You forget to set on the fire first.'
    } else if (campStuff.fire === true && campStuff.marshmallows === 0){
        // Inform the player that they have run out of marshmallows.
        return 'You have ate all the marshmallow.🤣'
    } else {
        // prompt the player that one marshmallow decreased
        campStuff.marshmallows = campStuff.marshmallows - 1;
        return 'You roast a marshmallow, can\'t wait to have it! 😍'
    }
}

// define the sleep function
function sleep(){
    if (campStuff.fire === false && campStuff.tent === true){
        // Inform the player that they are going to sleep and reset the game state. 
        campStuff.wood = 0;
        campStuff.marshmallows = 3;
        campStuff.fire = false;
        campStuff.tent = false;
        return 'You fall asleep.ZzZz Have a good night.😪'
    } else if (campStuff.fire === true && campStuff.tent === true){
        // prompt the player to put out of fire. 
        return 'You decide to put out the fire to avoid danger.👨‍🚒'
    } else if (campStuff.fire === false && campStuff.tent === false){
        // prompt the player to pitch the tent. 
        return '🥶🥶 You can\'t sleep directly on the damp ground.'
    } else {
        // prompt the player to pitch the tent when they have set on the fire.
        return 'Despite having a campfire, you still prefer to sleep in the tent.😣'
    }
}