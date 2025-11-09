import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const htmlTableOfContents = () => {

    if (document.getElementById("generate_toc")) {
    var toc = document.getElementsByClassName("table-of-contents__left-border")[0];
    var headings = [].slice.call(document.body.querySelectorAll('h3'));

    headings.forEach(function (heading, index) {
        var ref = heading.getAttribute( "id" );
        var div = toc.appendChild( document.createElement( "li" ) );
        var link = div.appendChild( document.createElement( "a" ) );
        link.setAttribute( "href", "#"+ ref );
        link.setAttribute( "class", "table-of-contents__link toc-highlight");
        link.textContent = heading.textContent;
    });
    }
}

export function onRouteDidUpdate({location, previousLocation}) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) {
      return;
  }
  htmlTableOfContents();
}

if (ExecutionEnvironment.canUseDOM) {
  // We also need to setCodeRevealTriggers when the page first loads; otherwise,
  // after reloading the page, these triggers will not be set until the user
  // navigates somewhere.
  window.addEventListener('load', () => {
    setTimeout(htmlTableOfContents, 1000);
  });
}