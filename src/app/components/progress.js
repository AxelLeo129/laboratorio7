import 'bootstrap/dist/css/bootstrap.css';

export const progress = (title, value) => {
    const label = document.createElement('label');
    label.innerHTML = title;
    const progress_div1 = document.createElement('div');
    progress_div1.classList.add('progress', 'mb-5');
    const progress_div2 = document.createElement('div');
    progress_div2.classList.add('progress-bar');
    progress_div2.setAttribute('role', 'progressbar');
    progress_div2.style.width =  value + '%';
    progress_div2.setAttribute('aria-valuenow', value);
    progress_div2.setAttribute('aria-valuemin', '0');
    progress_div2.setAttribute('aria-valuemax', '100');
    progress_div2.innerHTML = value + '%';
    progress_div1.appendChild(progress_div2);
    const global_div = document.createElement('div');
    global_div.appendChild(label);
    global_div.appendChild(progress_div1);
    return global_div;
};