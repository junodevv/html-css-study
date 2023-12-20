// Elements
const toggleThemeBtn = document.querySelector('.header_theme-button');
// Toggle theme button
toggleThemeBtn.addEventListener('click', () =>{
    // Toggle root class
    document.documentElement.classList.toggle('darkTheme');
    // toggle: darkTheme 이라는 단어가 없다면 붙여주고 있다면 없애주는 역할

    if(document.documentElement.classList.contains('darkTheme')){
        localStorage.setItem('theme', 'dark');
    }else{
        localStorage.setItem('theme', 'light');
    }
})

// Set initial theme from LocalStorage
document.onload = setInitialTheme(localStorage.getItem('theme'));
function setInitialTheme(themeKey){
    if(themeKey === 'dark'){
        document.documentElement.classList.add('darkTheme');
    }else{
        document.documentElement.classList.remove('darkTheme');
    }
}
