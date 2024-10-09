const buttonOpen = document.querySelector('.open')
const buttonClose = document.querySelector('.close')
const modal = document.querySelector('.modal')

buttonOpen.addEventListener('click', () => {
  console.log('escutando!')
  modal.showModal();
})

buttonClose.addEventListener('click', () => {
  console.log('escutando!')
  modal.close();
})