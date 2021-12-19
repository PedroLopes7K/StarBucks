const switchBTN = document.querySelector('.switch')
switchBTN.addEventListener('change', function () {
  if (switchBTN.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'ligth')
  }
})
