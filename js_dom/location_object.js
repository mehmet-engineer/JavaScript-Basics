// location object
let url = location.href;
let protocol = location.protocol;
let host_name = location.hostname;
let path_name = location.pathname;
let port = location.port;
let search = location.search;
let hash = location.hash;

// full url
let full_url = protocol + "//" + host_name + ":" + port + path_name + search + hash;