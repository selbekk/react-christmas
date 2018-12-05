import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class DocumentWithStyledComponents extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/default.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/languages/elm.min.js"></script>
          <script>hljs.initHighlightingOnLoad();</script>
        </body>
      </html>
    );
  }
}

export default DocumentWithStyledComponents;
