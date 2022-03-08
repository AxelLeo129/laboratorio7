import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';

export const story = (title, animation, content, options) => {
    const options_list = document.createElement('div');
    options_list.classList.add('list-group');

    options.forEach(e => {
       const a = document.createElement('a');
       a.classList.add('list-group-item', 'list-group-item-action', 'list-group-item-' + e.color); 
       a.setAttribute('href', e.link);
       a.innerHTML = e.text;
       options_list.appendChild(a);
    });

    const div_content = document.createElement('div');
    div_content.innerHTML = content;

    const h3 = document.createElement('h3');
    h3.classList.add('animate__animated', animation);
    h3.innerHTML = title;

    const header = document.createElement('header');
    header.appendChild(h3);

    const card_body = document.createElement('div');
    card_body.classList.add('card-body');
    card_body.appendChild(header);
    card_body.appendChild(div_content);
    card_body.appendChild(options_list);

    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(card_body);

    const article = document.createElement('article');
    article.classList.add('mb-5');
    article.appendChild(card);
    
    return article;
}