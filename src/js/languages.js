export default function languages() {
    const elements = Array.from(document.querySelectorAll('.js-languages'));

    elements.forEach(element => {
        const btn = element.querySelector('button');

        btn.addEventListener('click', event => {
            event.preventDefault();
            element.classList.toggle('dropdown-shown');
        });

        document.addEventListener('click', event => {
            if (event.target.matches('.js-languages') || event.target.closest('.js-languages')) {
                return;
            }

            element.classList.remove('dropdown-shown');
        });
    });
}
