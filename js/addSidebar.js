document.addEventListener("DOMContentLoaded", () => {
    fetch('/sidebar.html')
        .then(response => {
            if (!response.ok) throw new Error('Sidebar file not found');
            return response.text();
        })
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading sidebar:', error));
});