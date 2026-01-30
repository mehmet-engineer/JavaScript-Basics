// get element examples
document.getElementById("h1_id").innerHTML = "<b>updated_text</b>";
document.getElementById("h1_id").innerText = "updated_text";
let text = document.getElementById("input").value;

// set element events
document.getElementById("h1_id").onclick = function () {
    console.log("clicked");
}

// element style
let header = document.getElementById("h1_id");
header.style.color = "red";
header.style.fontSize = "30px";
header.style.fontFamily = "Arial";
header.style.backgroundColor = "yellow";

// image element example
// <img id="img" src="image_2.jpg">
document.getElementById("img").src = "image_1.jpg";

// get tag elements in array 
let h1_array = document.getElementsByTagName("h1")

// document attributes
let head = document.head;
let body = document.body;

let img_array = document.images;
let link_array = document.links;

let domain = document.domain;
let url = document.URL;
let prev_url = document.referrer;
let title = document.title;
let width = document.width;
let height = document.height;
let charset = document.characterSet;
let lang = document.language;
let modified = document.lastModified;

// document write
document.write("<h1>hello world</h1>");
document.writeln("<h1>hello world</h1>");