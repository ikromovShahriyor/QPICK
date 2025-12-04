document.querySelectorAll('.like').forEach(like => {
    like.addEventListener('click', () => {
        if (like.classList.contains("fa-regular")) {
            like.classList.remove("fa-regular");
            like.classList.add("fa-solid");
        } else {
            like.classList.remove("fa-solid");
            like.classList.add("fa-regular");
        }
    });
});

