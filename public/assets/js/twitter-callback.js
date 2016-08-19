var load = function() {

    if(localStorage['ngStorage-current']) {
        location.href = '/';
    }
    var twitter = JSON.parse(localStorage.getItem('ngStorage-twitter'));

    if(!twitter.token || !twitter.secret) {
        return false;
    }

    if(token == '' || verifier == '') {
        return false;
    }

    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/api/twitter/validate', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({
        token: token,
        secret: twitter.secret,
        verifier: verifier
    }));

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            try{
                var data = JSON.parse(xhr.responseText);
                localStorage['ngStorage-current'] = JSON.stringify(data.user);
                location.href = '/';
            } catch(Exception) {
                location.href = '/';
            }
        }
    };
};