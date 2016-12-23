(function() {

  (function resizeMain() {
    var main = document.querySelector('main');
    var headerHeight = document.querySelector('header').offsetHeight;

    main.style.height = 'calc(100% - ' + headerHeight + 'px)';
  })();

  (function setSkillPercentage() {
    var skills = document.querySelectorAll('.skill__completed');
    for(var i = 0; i < skills.length; i++) {
      var data = skills[i].dataset.percentage;
      skills[i].style.transform = 'scaleX(' + data + ')';
    }
  })();

})();
