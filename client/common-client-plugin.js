function register ({ registerHook, peertubeHelpers }) {
  registerHook({
    target: 'action:router.navigation-end',
    handler: async ({ path }) => {
      const component = document.querySelector('.top-menu');

      const c = await peertubeHelpers.getSettings('custom_links_markdown')
      if (document.querySelector('.custom-links') === null && c) {
        const panel = document.createElement('div');
        panel.setAttribute('class', 'panel-block custom-links');
        const html = await peertubeHelpers.markdownRenderer.enhancedMarkdownToHTML(c)
        panel.appendChild(html);
        component.appendChild(panel);
      }
    }
  })
}

export {
  register
}
