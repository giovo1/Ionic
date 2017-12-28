export class NewsItem {

    headline: String;
    snippet: String;
    source: String;
    pubDate: String;
    webUrl: String;
    urlImageXlarge: String;
    urlImageWide: String;
    urlImageThumbnail: String;
      
  constructor(headline: String, snippet: String, source: String, pubDate: String, webUrl: String, urlImageXlarge: String, urlImageWide: String, urlImageThumbnail: String) {
    this.headline = headline;
    this.snippet = snippet;
    this.source = source;
    this.pubDate = pubDate;
    this.webUrl = webUrl;
    this.urlImageXlarge = urlImageXlarge;
    this.urlImageWide = urlImageWide;
    this.urlImageThumbnail = urlImageThumbnail;
  }
  
}