let height = 0;

function addTask(value, type, checked) {
    const task = document.querySelector("form input");
    type = document.querySelector("form select").value;

    switch (type) {
        case "ML":
            type = 0;
            break;
        case "CV":
            type = 1;
            break;
        case "DA":
            type = 2;
            break;
    }
    let template = document.querySelector("template").content.cloneNode(true);
    let tasks = document.querySelector(".tasks_wrapper");
    template.childNodes[1].childNodes[3].innerHTML = value;
    if (checked) {
        template.childNodes[1].childNodes[3].classList.add('reverse');
        template.childNodes[1].childNodes[1].setAttribute('checked', '');
    }
    tasks.childNodes[1 + type * 2].appendChild(template);
    task.value = "";

    if (height > 500) height += 50;
    document.getElementById('project').style.height = height + 'px';

}

function deleteTask(task) {
    task.parentElement.remove();
}

function reverse(task) {
    task.parentElement.childNodes[3].classList.contains('reverse') ? task.parentElement.childNodes[3].classList.remove('reverse') : task.parentElement.childNodes[3].classList.add('reverse');
    tasks.forEach(tas => {
        if (tas['value'] === task.parentElement.childNodes[3].innerHTML) {
            tas['checked'] = !tas['checked'];
        }
    });
}