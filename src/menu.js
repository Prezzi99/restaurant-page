export default function () {
    // Select the div#content
    const content = document.querySelector('#content');

    // Create HTML elements/nodes
   const img = document.createElement('img');
   const header = document.createElement('h1');
   const para = document.createElement('p');

   // Set the src and width for the image
   img.setAttribute('src', 'https://hootersoflouisiana.com/wp-content/uploads/2023/06/29800-GGW-Hooters-NEW-MenuPrint.jpg');
   img.setAttribute('width', '300px');

   header.innerText = 'Our Menu';
   para.innerText = 'Our menu is glorious and unmatched';

   // Add the generated elements/nodes to the selected div
   content.appendChild(header);
   content.appendChild(img);
   content.appendChild(para);

   return content
}