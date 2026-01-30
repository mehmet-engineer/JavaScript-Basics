// navigator object

// old methods
let app_name = navigator.appName;
let app_codename = navigator.appCodeName;
let version = navigator.appVersion;
let platform = navigator.platform;
let cookie = navigator.cookieEnabled;
let java = navigator.javaEnabled();

// new method
let client_data = navigator.userAgentData.brands;
console.log(client_data);