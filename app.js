const form = document.querySelector('form')
const output = document.querySelector('#output')

form.onsubmit = (e) => e.preventDefault()

form['pound'].addEventListener('click', (e) => {
    let ans = form['input'].value * 0.453592
    output.innerHTML = `<p>${form['input'].value} Pound = ${ans.toFixed(2)} Kilogram</p>`
})

form['kg'].addEventListener('click', (e) => {
    let ans = form['input'].value / 0.453592
    output.innerHTML = `<p>${form['input'].value} Kilogram = ${ans.toFixed(2)} Pound</p>`
})



