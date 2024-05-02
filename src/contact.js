export default function () {
     // Select the div#content
     const content = document.querySelector('#content');

     // Create HTML elements/nodes
    const img = document.createElement('img');
    const header = document.createElement('h1');
    const para = document.createElement('p');

    // Set the src and width for the image
    img.setAttribute('src', 'https://www.w3resource.com/w3r_images/contact-form.svg');
    img.setAttribute('width', '300px');

    header.innerText = 'Contact Us';
    para.innerText = 'Feel free to contact us, our brilliant team is happy to assist you.';

    // Add the generated elements/nodes to the selected div
    content.appendChild(header);
    content.appendChild(img);
    content.appendChild(para);

    return content;
}