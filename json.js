const works = {
    "task1": {
        "title": "Project 1",
        "event": function() {
            document.getElementById('content').style.backgroundColor = 'red';
            document.getElementById('content').innerHTML = "<h2>Task 1</h2>";
        }
    },
    "task2": {
        "title": "Project 2",
        "event": function() {
            document.getElementById('content').style.backgroundColor = 'blue';
            document.getElementById('content').innerHTML = "<h2>Task 2</h2>";
        }
    },
    "task3": {
        "title": "Project 3",
        "event": function() {
            document.getElementById('content').style.backgroundColor = 'green';
            document.getElementById('content').innerHTML = "<h2>Task 3</h2>";
        }
    }
};

document.getElementById('project1').addEventListener('click', works.task1.event);
document.getElementById('project2').addEventListener('click', works.task2.event);
document.getElementById('project3').addEventListener('click', works.task3.event);
