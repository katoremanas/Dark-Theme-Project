// let button =document.getElementById('theme-toggle')

// button.addEventListener('click',function({
//     document.body.classlist.toggle('light-theme')
//     document.body.classlist.toggle('dark-theme')



//     if(currentTheam ==='light'){
//         button.textContent ='switch to dark theam'
//                         currentTheam = 'dark'

//     }
//     else{
//                 button.textContent ='switch to dark theam'
//                 currentTheam = 'light'

//     }
// }))







let button = document.getElementById('theme-toggle');
let currentTheme = 'light'; // initial theme

button.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    if (currentTheme === 'light') {
        button.textContent = 'Switch to Dark Theme';
        currentTheme = 'dark';
    } else {
        button.textContent = 'Switch to Light Theme';
        currentTheme = 'light';
    }
});
