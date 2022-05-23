# gRPC demo Angular Client

A simple, one page, angular client showing how to connect to a gRPC-web service using unary and server stream calls.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Generate Proto code

use `npm run proto:generate:win` to regenerate the code from the proto files specified. This client uses the package from ngx-grpc to connect via gRPC-web. Please visit https://github.com/ngx-grpc/ngx-grpc for further information how to set up your client to work with gRPC-web.
