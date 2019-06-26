import Phone from './phone.png';

const imgPhone = () => {
    const img = document.createElement('img');
    img.alt = 'Phone frame';
    img.width = 300;
    img.src = Phone;
    img.classList.add("phone");
    
    const body = document.querySelector('body');
    body.appendChild(img);

}

export default imgPhone;