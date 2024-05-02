function initialPageLoad() {
    // Select the div#content
    const content = document.querySelector('#content');

    // Create HTML elements/nodes
    const img = document.createElement('img');
    const header = document.createElement('h1');
    const para = document.createElement('p');

    // Set the src and width for the image
    img.setAttribute('src', 'https://www.madridcoolblog.com/wp-content/uploads/2016/08/MADRID-COOL-BLOG-RANDOM-terraza-G.jpg');
    img.setAttribute('width', '300px');

    header.innerText = 'Welcome to Finger Licking Good!!';
    para.innerText = 'Our taste is unparalleled and our ambience is euphoric';

    // Add the generated elements/nodes to the selected div
    content.appendChild(header);
    content.appendChild(img);
    content.appendChild(para);

    return content;
}

export default initialPageLoad;