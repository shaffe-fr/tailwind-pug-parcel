console.log("Hello Tailwind!");

document.querySelector('a').addEventListener('click', e => {
    alert(e.currentTarget.innerText)

    return false;
})