const App = {
  $: {
    openNavBar: document.querySelector('[data-id="open-nav-bar"]'),
    showNav: document.querySelector('[data-id="show-nav"]'),
    hideNav: document.querySelector('[data-id="hide-nav"]'),
  },

  init() {
    App.$.openNavBar.addEventListener("click", (event) => {
      App.$.hideNav.classList.remove("hidden");
    });

    App.$.showNav.addEventListener("click", (event) => {
      App.$.hideNav.classList.add("hidden");
    });
  },
};

window.addEventListener("load", App.init);
