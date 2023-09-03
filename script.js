// J. website

async function loadContent(page) {
    const contentDiv = document.getElementById('content');

    let response;

    try {
        response = await fetchHtmlAsText(`html/${page}.html`);
    } catch(error){
        console.error('error:', error);
        response = '<h1>error 404</h1><p>page not found</p><p>page not found</p><p>page not found</p><p>page not found</p><p>page not found</p><p>page not found</p><p>page not found</p><p>page not found</p><p>page not found</p><p>page not found</p><p>page not found</p><p>page not found</p>'
    }
    

    switch (page) {

        case 'home':
            contentDiv.innerHTML = response;
            break;

        case 'background':
            contentDiv.innerHTML = response; // '<h1>Background Page</h1><p>This is the Background page content.</p>';
            break;

        case 'hobbies':
            contentDiv.innerHTML = response; // '<h1>Hobbies Page</h1><p>This is the Hobbies page content.</p>';
            break;

        case 'links':
            contentDiv.innerHTML = '<h1>Link</h1><p>all the links you can imagine</p>';
            break
    }
}

async function fetchHtmlAsText(url) {
    const response = await fetch(url, {
                              method: "GET",
                              // mode: "no-cors",
                              credentials: "include",
                              headers: {
                                "Accept": "text/html"
                              }
                            });
    return await response.text();
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light');
}
