function register ({ registerHook, peertubeHelpers }) {
  registerHook({
    target: 'action:router.navigation-end',
    handler: async ({ path }) => {
      const component = document.querySelector('menu');

      const c = await peertubeHelpers.getSettings('custom_links_markdown')
      
      if (document.querySelector('.custom-links') === null && c['custom_links_markdown']) {
        const panel = document.createElement('div');
        panel.setAttribute('class', 'panel-block custom-links');
        const html = await peertubeHelpers.markdownRenderer.enhancedMarkdownToHTML(c['custom_links_markdown'])
        panel.innerHTML = html;
        component.appendChild(panel);
      }
    }
  })
}

export {
  register
}
