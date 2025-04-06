document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    item.classList.toggle('active')

    // Fecha os outros
    document.querySelectorAll('.nav-item').forEach(other => {
      if (other !== item) {
        other.classList.remove('active')
      }
    })
  })
})
