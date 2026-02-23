//your JS code here. If required.
let inputs = document.querySelectorAll('.code')
inputs[0].focus()
inputs.forEach((i)=> {
	i.addEventListener('keydown', onKeyDown)
	i.addEventListener('input', onInput)
})

function onKeyDown(e){
	let curr = e.target
	let prev = curr.previousElementSibling

	if(e.key === 'Tab') return

	if(e.key === 'Backspace'){
		if(curr.value === '' && prev){
			prev.focus()
		}
		return
	}
	if(e.key < '0' || e.key> '9'){
		e.preventDefault()
		return
	}
	if(curr.value.length === 1){
		e.preventDefault()
	}
}

function onInput(e){
	let curr = e.target
	let next = curr.nextElementSibling

	if(curr.value.length === 1 && next){
		next.focus()
	}
}