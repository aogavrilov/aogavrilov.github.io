let tasks;
let height = 0;
function getFromLocal() {
    if (localStorage['tasks']) {
        tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    } else {
        tasks = [];
    }
    tasks.forEach(task => addTask(task['value'], task['type'], task['checked'], false))
}

getFromLocal();

function addTask(value, type, checked, is_new) {
    const task = document.querySelector("form input");
    if (value === "") {
        value = task.value;
        type = document.querySelector("form select").value;
        checked = false;
    }
    let repeated = 0;
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
    if (is_new) {
        tasks.forEach(task => {
            if (task.value === value) {
                repeated = 1;
            }
        })
    }
    if (repeated === 0) {
        if (value !== "") {
            let template = document.querySelector("template").content.cloneNode(true);
            let tasks = document.querySelector(".tasks_wrapper");
            template.childNodes[1].childNodes[3].innerHTML = value;

            if (checked) {
                template.childNodes[1].childNodes[3].classList.add('reverse');
                template.childNodes[1].childNodes[1].setAttribute('checked', '');
            }
            tasks.childNodes[1 + type * 2].appendChild(template);
            task.value = "";
        }
        if (is_new) {
            tasks.push({'value': value, 'type': type, 'checked': checked});
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        if (height > 500) height += 50;
        document.getElementById('project').style.height = height + 'px';
    } else{
        alert('pls write another msg')
    }
}

function deleteTask(task) {
    let text = task.parentElement.childNodes[3].innerHTML;
    tasks = tasks.filter(task => task['value'] !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    task.parentElement.remove();
}

function reverse(task) {
    task.parentElement.childNodes[3].classList.contains('reverse') ? task.parentElement.childNodes[3].classList.remove('reverse') : task.parentElement.childNodes[3].classList.add('reverse');
    tasks.forEach(tas => {
        if (tas['value'] === task.parentElement.childNodes[3].innerHTML) {
            tas['checked'] = !tas['checked'];
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}