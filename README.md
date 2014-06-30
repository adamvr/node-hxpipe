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
haxpipe file.xml
haxpipe < file.xml
curl file.xml | haxpipe
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
