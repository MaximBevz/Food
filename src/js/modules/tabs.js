function tabs(tabsSelector, tabContent, tabParent, tabsActive) {

  //Tabs

  const tabsContent = document.querySelectorAll(tabContent),
    tabs = document.querySelectorAll(tabsSelector),
    tabsParent = document.querySelector(tabParent);

  function hideContent() {
    tabs.forEach(tab => {
      tab.classList.remove(tabsActive);
    });
    tabsContent.forEach(cont => {
      cont.classList.remove('show', 'fade');
      cont.classList.add('hide');

    });
  }

  function showTabContent(i = 0) {
    tabs[i].classList.add(tabsActive);

    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
  }

  hideContent();
  showTabContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideContent();
          showTabContent(i);
        }
      });
    }
  });
}

export default tabs;