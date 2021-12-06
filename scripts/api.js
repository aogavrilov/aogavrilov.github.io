async function addRecord() {
    document.querySelector('.preloader').classList.remove('empty');
    document.querySelector('.error').classList.add('empty');
    let url = `https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * (199)) + 1}`;
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        addTask(json['title'], "", json['completed']);
    } else {
        document.querySelector('.error').classList.remove('empty');
    }
    document.querySelector('.preloader').classList.add('empty');
}