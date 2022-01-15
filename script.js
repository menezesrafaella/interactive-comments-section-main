function fetchData() {
    fetch('data.json')
        .then(response => response.json()
            .then(result => {
                data = result;

                data.comments.map(response => {
                    console.log(response)
                    let img = document.createElement('img');
                    img.src = response.user.image.png;
                    let username = document.createElement('h4');
                    username.innerHTML = response.user.username;
                    let time = document.createElement('span');
                    time.innerHTML = response.createdAt;
                    let input = document.createElement('input')
                    input.setAttribute('type', 'text');
                    input.value = response.score;
                    let p = document.createElement('p');
                    p.innerHTML = response.content

                    document.querySelector('#title').append(img, username, time);
                    document.querySelector('#count').append(input)
                    document.querySelector('#description').appendChild(p)

                })  
            }));
}

fetchData();