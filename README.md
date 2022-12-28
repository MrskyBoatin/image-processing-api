# Image Processing API

This API allows users to perform basic image processing tasks such as resizing images. The API allows users to send a GET request to the endpoint `/api/images` with query parameters `filename`, `width`, and `height`. The API will then return the specified image with the specified dimensions.

# Scripts

- `npm run build` - build the project
- `npm start` - start the build
- `npm run dev` - start the server in development mode
- `npm test` - run the tests
- `npm run lint` - lint the project
- `npm run lint:fix` - fix linting errors
- `npm run prettier` - format the code according to the `.prettierrc`

# Endpoint

- `GET /api/images?filename=filename&width=width&height=height` - returns the image with the specified `filename`, `width` and `height`

# Any other functionality

- `GET /{any other route}` 

# Dependencies

- `Express`: web framework for Node.js
- `Sharp`: image processing library
- `Jasmine`: testing framework
- `Jasmine Spec Reporter`: reporter for Jasmine tests
- `TypeScript`: typed JavaScript superset
- `ts-node-dev`: development server for TypeScript
- `ESLint`: linter
- `Prettier`: code formatte

## License

License ISC
