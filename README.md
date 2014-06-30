# Introduction

This project is a partial clone of hxpipe from w3c's [html-xml-utils](http://www.w3.org/Tools/HTML-XML-utils/), written in nodejs javascript. Eventually it should be a drop-in replacement for hxpipe.

# Dependencies

* [node-expat](http://github.com/node-xmpp/node-expat)

# Installation

```
npm install -g hxpipe
```

# Running

```
hxpipe file.xml
hxpipe < file.xml
curl file.xml | hxpipe
```

# Examples

```javascript
var Hxpipe = require('hxpipe')
  , fs = require('fs');

fs.createReadStream('file.xml')
  .pipe(new Hxpipe())
  .pipe(process.stdout);
```

# License

MIT
