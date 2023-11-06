# dqs.js
Easy DOM access

```javascript
    // Without dqs.js:
    country   = document.querySelector('#country');
    // With dqs.js:
    import { dqs } from './dqs.js';
    country   = dqs('#country');

    // Without dqs.js:
    country   = document.querySelector('#country');
    countries = document.querySelectorAll('.country');
    city      = country.querySelector('#city');
    cities    = country.querySelectorAll('.city');
    // With dqs.js:
    import * as dqs  from './dqs.js';
    country   = dqs.dqs('#country');
    countries = dqs.dqsA('.country');
    city      = dqs.qs(country, '#city');
    cities    = dqs.qsA(country, '.city');
```

License: GNU General Public License, version 2
