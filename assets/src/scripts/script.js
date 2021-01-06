const breadcrumbMenu = document.getElementById('breadcrumbMenu');

const hideMenu = () => {
  breadcrumbMenu.classList.remove('show');
};
const displayMenu = () => breadcrumbMenu.classList.add('show');

$(document).ready(function () {
  $('.js-example-basic-single').select2();
});
