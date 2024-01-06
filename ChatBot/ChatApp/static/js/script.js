function sendMessage() {
    var message = document.getElementById('message').value;
    fetch('/myapp/get_next_char/' + message + '/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = 'Next Character: ' + data.next_char;
        })
        .catch(error => console.error('Error:', error));
}