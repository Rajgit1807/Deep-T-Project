var originalContent; // Variable to store the original content

function changeContent() {
    var iconDiv = document.querySelector('.left-sidebar2-icon');
    originalContent = iconDiv.innerHTML; // Store the original content
    iconDiv.innerHTML = '<ul>' +
                        '<li>Item 1</li>' +
                        '<li>Item 2</li>' +
                        '<li>Item 3</li>' +
                        '</ul>';
}

function resetContent() {
    var iconDiv = document.querySelector('.left-sidebar2-icon');
    iconDiv.innerHTML = originalContent; // Revert to the original content
}
