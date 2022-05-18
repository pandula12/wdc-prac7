function send() {
    var title = document.getElementById("blogTitle").value;
    var content = document.getElementById("blogContent").value;
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "/users/addpost", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ title: title, content: content }));
}
var blogs = []
function recieve() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            blogs = JSON.parse(this.responseText);
            blogs = blogs.reverse();
            var e = document.getElementById("post-list");
            var child = e.lastElementChild;
            while (child) {
                e.removeChild(child);
                child = e.lastElementChild;
            }
            var blogsLength = blogs.length;
            var temp;
            var header;
            var body;
            for (i = 0; i < blogsLength; i++) {
                temp = document.createElement('div');
                header = document.createElement('h2');
                body = document.createElement('p');
                header.innerHTML = blogs[i].title;
                body.innerHTML = blogs[i].content;
                document.getElementById("post-list").appendChild(temp);
                temp.appendChild(header);
                temp.appendChild(body);
            }
        }
    };
    xhttp.open("GET", "/users/getposts", true);
    xhttp.send();


}

