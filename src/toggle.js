let darkMode = true

const ToggleMode = document.getElementById('toggleMode')

ToggleMode.addEventListener('click' , (event) =>{
    document.documentElement.classList.toggle('light')

    const mode = darkMode ? 'Light' : 'Dark'
    event.currentTarget.querrySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
}
)