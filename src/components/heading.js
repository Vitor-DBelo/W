import './heading.css';

const heading = {
    create(text){
        const heading =  document.createElement('p');
        heading.innerHTML = text;
        heading.classList.add('pDinamico');
        document.querySelector('body').appendChild(heading);
    }
}

export default heading;