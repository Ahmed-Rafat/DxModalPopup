var myModal = new DxModal({
    content: 'Howdy',
    maxWidth: 600,
    className: "custom-modal"
});

document.getElementById("openModal").addEventListener('click', function() {
    myModal.open()
})



