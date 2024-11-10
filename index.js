console.log(navigator.userAgent);

navigator.__defineGetter__('userAgent', function () {
    return 'foo' // customized user agent
});

console.log(navigator.userAgent);

// linkQuery = "https://open.spotify.com/playlist/0i52Ui72cgPCkJpfslOpU8";
// linkQuery2 = "https://www.youtube.com";
// $.get(linkQuery2, function (response) {
//     var html = response;
//     var html_src = 'data:text/html;charset=utf-8,' + html;
//     $("#iframeId").attr("src", html_src);
// });

const iframe = document.getElementById('iframeId');
iframe.src = "https://open.spotify.com/playlist/0i52Ui72cgPCkJpfslOpU8?embedded=true"; // "https://www.youtube.com/embed/";

const link = "https://open.spotify.com/";
// const link = "https://google.com/";
