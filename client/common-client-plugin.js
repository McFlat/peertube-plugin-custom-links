function register ({ registerHook, peertubeHelpers }) {
  registerHook({
    target: 'action:router.navigation-end',
    handler: async ({ path }) => {
      const component = document.querySelector('.top-menu');

      const c = await peertubeHelpers.getSettings()

      const panel = document.createElement('div');
      panel.setAttribute('class', 'panel-block');
      const title = document.createElement('div');
      title.setAttribute('class', 'block-title');

      let newLink, newText;
      newText = document.createTextNode(c.title || 'Links');
      title.appendChild(newText);
      panel.appendChild(title);

      if (c.link_1_text && c.link_1_url) {
        newLink = document.createElement('a');
        newLink.setAttribute('class', 'custom-link custom-link-1');
        newLink.setAttribute('href', c.link_1_url);
        newText = document.createTextNode(c.link_1_text);
        newLink.appendChild(newText);
        panel.appendChild(newLink);
      }
      if (c.link_2_text && c.link_2_url) {
        newLink = document.createElement('a');
        newLink.setAttribute('class', 'custom-link custom-link-2');
        newLink.setAttribute('href', c.link_2_url);
        newText = document.createTextNode(c.link_2_text);
        newLink.appendChild(newText);
        panel.appendChild(newLink);
      }
      if (c.link_3_text && c.link_3_url) {
        newLink = document.createElement('a');
        newLink.setAttribute('class', 'custom-link custom-link-3');
        newLink.setAttribute('href', c.link_3_url);
        newText = document.createTextNode(c.link_3_text);
        newLink.appendChild(newText);
        panel.appendChild(newLink);
      }
      if (c.link_4_text && c.link_4_url) {
        newLink = document.createElement('a');
        newLink.setAttribute('class', 'custom-link custom-link-4');
        newLink.setAttribute('href', c.link_4_url);
        newText = document.createTextNode(c.link_4_text);
        newLink.appendChild(newText);
        panel.appendChild(newLink);
      }
      if (c.link_5_text && c.link_5_url) {
        newLink = document.createElement('a');
        newLink.setAttribute('class', 'custom-link custom-link-5');
        newLink.setAttribute('href', c.link_5_url);
        newText = document.createTextNode(c.link_5_text);
        newLink.appendChild(newText);
        panel.appendChild(newLink);
      }
      component.appendChild(panel);
    }
  })
}

export {
  register
}
