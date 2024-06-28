
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.pt-BR.dcdf295ed2a2140e58d2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5835.baseline.pt-BR.70722fe0e0ebe2db3cd4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9429.baseline.pt-BR.18d2da8717dbee5d3400.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.baseline.pt-BR.4a76a447edee315e82bd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.pt-BR.17a8eac5c313ead47983.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.baseline.pt-BR.7ec3164fc01d10bbabc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5019.baseline.pt-BR.723e311f4a05eaa581cf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7617.baseline.pt-BR.7d06e83ab45cb8ff3699.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.baseline.pt-BR.4108502d9f2c1ca7f6c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8933.baseline.pt-BR.fd901bab8b56a082c6a8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.baseline.pt-BR.f7c1d524a7bc45342aa4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5137.baseline.pt-BR.cfef212553e71d5f7fec.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.baseline.pt-BR.677e80df2b987e3c70ac.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.baseline.pt-BR.95fea18352d4af7ebb4f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.pt-BR.b66b066b40b19043335a.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5835.baseline.pt-BR.5c2e43b6efa1c24a1276.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.pt-BR.44428467e736b1c925f1.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.pt-BR.b43fa0e7db0766e44946.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  