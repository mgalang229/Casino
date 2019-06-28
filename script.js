//DECLARATIONS

//HOME PAGE CARD
const firstCard = document.querySelector('.firstCard');
//3 MINI CARDS
const miniCards = document.querySelector('.miniCards');
const firstMiniCard = document.querySelector('#firstMiniCard');
const secondMiniCard = document.querySelector('#secondMiniCard');
const thirdMiniCard = document.querySelector('#thirdMiniCard');
//REVEAL BUTTON
const revealBtn = document.querySelector('#revealBtn');

//EVENT FUNCTIONS
firstCard.addEventListener('click', openOffers);

function openOffers(){
    firstCard.style.transform = 'scale(0)';
    setTimeout(overrideFirstCard, 900);
}

function overrideFirstCard(){
    firstCard.remove();
    miniCards.style.animation = 'cog2 2.5s';
    firstMiniCard.style.display = 'block';
    secondMiniCard.style.display = 'block';
    thirdMiniCard.style.display = 'block';
}

firstMiniCard.addEventListener('click', miniOffer1);

function miniOffer1(){
    secondMiniCard.style.display = 'none';
    thirdMiniCard.style.display = 'none';
    
    firstMiniCard.style.animation = 'slideInFromLeft 2s';
    firstMiniCard.style.transform = 'rotate(0)';
    firstMiniCard.style.background = 'white';
    firstMiniCard.innerHTML = '<h3>Congratulations! <br>You have won a car.</h3>';

    revealBtn.style.display = 'block';
    revealBtn.addEventListener('click', function(){
        miniCards.style.animation = 'fadeIn 2s';
        secondMiniCard.style.display = 'block';
        thirdMiniCard.style.display = 'block';

        secondMiniCard.style.animation = 'fadeIn 2s';
        secondMiniCard.style.transform = 'rotate(0)';
        secondMiniCard.style.background = 'white';
        secondMiniCard.innerHTML = '<h3>Congratulations! <br>You have won a house.</h3>';

        thirdMiniCard.style.animation = 'slideInFromRight 2s';
        thirdMiniCard.style.transform = 'rotate(0)';
        thirdMiniCard.style.background = 'white';
        thirdMiniCard.innerHTML = '<h3>Congratulations! <br>You have won a lottery.</h3>';
    });
}

secondMiniCard.addEventListener('click', miniOffer2);

function miniOffer2(){
    firstMiniCard.style.display = 'none';
    thirdMiniCard.style.display = 'none';
    
    secondMiniCard.style.animation = 'fadeIn 2s';
    secondMiniCard.style.transform = 'rotate(0)';
    secondMiniCard.style.background = 'white';
    secondMiniCard.innerHTML = '<h3>Congratulations! <br>You have won a house.</h3>';

    revealBtn.style.display = 'block';
    revealBtn.addEventListener('click', function(){
        miniCards.style.animation = 'fadeIn 2s';
        firstMiniCard.style.display = 'block';
        thirdMiniCard.style.display = 'block';

        firstMiniCard.style.animation = 'slideInFromLeft 2s';
        firstMiniCard.style.transform = 'rotate(0)';
        firstMiniCard.style.background = 'white';
        firstMiniCard.innerHTML = '<h3>Congratulations! <br>You have won a car.</h3>';

        thirdMiniCard.style.animation = 'slideInFromRight 2s';
        thirdMiniCard.style.transform = 'rotate(0)';
        thirdMiniCard.style.background = 'white';
        thirdMiniCard.innerHTML = '<h3>Congratulations! <br>You have won a lottery.</h3>';
    });
}

thirdMiniCard.addEventListener('click', miniOffer3);

function miniOffer3(){
    firstMiniCard.style.display = 'none';
    secondMiniCard.style.display = 'none';
    
    thirdMiniCard.style.animation = 'slideInFromRight 2s';
    thirdMiniCard.style.transform = 'rotate(0)';
    thirdMiniCard.style.background = 'white';
    thirdMiniCard.innerHTML = '<h3>Congratulations! <br>You have won a lottery.</h3>';

    revealBtn.style.display = 'block';
    revealBtn.addEventListener('click', function(){
        miniCards.style.animation = 'fadeIn 2s';
        firstMiniCard.style.display = 'block';
        secondMiniCard.style.display = 'block';

        firstMiniCard.style.animation = 'slideInFromLeft 2s';
        firstMiniCard.style.transform = 'rotate(0)';
        firstMiniCard.style.background = 'white';
        firstMiniCard.innerHTML = '<h3>Congratulations! <br>You have won a car.</h3>';

        secondMiniCard.style.animation = 'fadeIn 2s';
        secondMiniCard.style.transform = 'rotate(0)';
        secondMiniCard.style.background = 'white';
        secondMiniCard.innerHTML = '<h3>Congratulations! <br>You have won a house.</h3>';
    });
}


