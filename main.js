// Android vs Apple JS

// When Apple or Android Button is Clicked
document.getElementById('android-btn').addEventListener('click', setAndroid);
document.getElementById('apple-btn').addEventListener('click', setApple);

// Event Functions

function setAndroid() {
    // - change main image
    document.getElementById('main-img').src = ('images/Android-Logo.jpg');

    // - change "Explore the Debate" link text
    document.getElementById('home-btn').innerHTML = ('Android Home');

    // - change "Explore the Debate" link background
    document.getElementById('home-link').style.backgroundColor = ('#a4c93b');

    // - change "Explore the Debate" link href
    document.getElementById('home-link').href = ('https://www.android.com/');

    // - change body background color
    document.body.style.backgroundColor = ('#a4c93b');
}

function setApple() {
    // - change main image
    document.getElementById('main-img').src = ('images/Apple-Logo.jpg');

    // - change "Explore the Debate" link text
    document.getElementById('home-btn').innerHTML = ('Apple Home');

    // - change "Explore the Debate" link background
    document.getElementById('home-link').style.backgroundColor = ('#b6bcca');

    // - change "Explore the Debate" link href
    document.getElementById('home-link').href = ('https://www.apple.com/');

    // - change body background color
    document.body.style.backgroundColor = ('#b6bcca');
}