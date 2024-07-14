# Caching

WIP ???

The built-in Web Server does a good job in delivering any file on the filesystem to the browser
but is is still a network and time consuming job.

Especially when files are requested by the browser multiple times we can use the standard http mechanism to optimioze the transfer further.

> **cache** - This property can be used to replace the default http `cache-control` header
> for accessing the static files by a custom value.
> The default cache header is `"no-cache"` that is good while developing and configuring.
> But when have a stable configuration caching can be switched on using a value like `"max-age=120"` or `"etag"`


## No Cache

## Caching for a limited time

"cache": "max-age=120"

## Cure the developers pain

## eTag caching


Etag: b7


If-None-Match:

Status Code: 304 Not Modified




max-age=120

## See also

* Cache-control http header : <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control>

