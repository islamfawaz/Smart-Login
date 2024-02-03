var arr = [];
user = JSON.parse(localStorage.getItem('arr'))

var Email = document.getElementById('signEmail');
var Password = document.getElementById('signPassword');




document.getElementById('login').addEventListener('click', function () {
    if (Email.value == '' || Password.value == '') {
        document.getElementById('message').innerHTML = `<p class ='text-center text-white'>All inputs is required</p>`;
    } else {
        check();
    }
})

function check() {
    for (var i = 0; i < user.length; i++) {
        if (Email.value == arr[i].email &&Password.value == arr[i].password) {
            var x = user[i].name;
            localStorage.setItem('userName', x);
            location.href = '../../home/index.html';
            break;
        }
    }
}