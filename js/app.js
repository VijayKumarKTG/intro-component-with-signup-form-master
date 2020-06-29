let inputs = document.querySelectorAll('input');
let labels = document.querySelectorAll('label');
let icons = document.querySelectorAll('.icon');
let submit = document.querySelector('.submit');

inputs.forEach((input, i) => {
  input.addEventListener('focusin', () => {
    labels[i].style.opacity = '0';
    if (i + 1 < labels.length) labels[i + 1].style.color = 'var(--darkBlue)';
    if (input.classList.contains('error')) input.classList.remove('error');
    if (!input.classList.contains('input')) input.classList.add('input');
    icons[i].style.opacity = '0';
  });
  input.addEventListener('focusout', () => {
    if (input.value === '') labels[i].style.opacity = '1';
  });
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  inputs.forEach((input, i) => {
    if (
      input.value === '' ||
      (input.type === 'email' && !ValidateEmail(input.value))
    ) {
      input.classList.remove('input');
      input.classList.add('error');
      input.style.color = 'red !important';
      icons[i].style.opacity = '1';
    } else {
      input.classList.add('input');
      input.classList.remove('error');
      icons[i].style.opacity = '0';
    }
    labels[i].style.opacity = '0';
  });
});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
