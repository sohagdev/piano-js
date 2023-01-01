const keys = document.querySelectorAll('.key')

function playSound(newUrl) {
  console.log(newUrl)
  new Audio(newUrl).play()
}

keys.forEach((key, i) => {
  const number = i < 9 ? '0' + (i + 1) : i + 1
  const newUrl = `audio/key${number}.mp3`
  key.addEventListener('click', () => playSound(newUrl))
})
