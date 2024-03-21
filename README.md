# mystical-mist-auth

mystical-mist-auth is a simple authentication library for Node.js applications, providing user registration, login,
authentication middleware, and protected route functionality using JSON Web Tokens (JWT).

## Installation

You can install mystical-mist-auth via npm:

```bash
npm install mystical-mist-auth
```

## Usage

```javascript
const { authenticateToken, registerUser, loginUser, protectedRouteHandler } = require('mystical-mist-auth');

// Example usage:

// Register a new user
registerUser('exampleUser', 'examplePassword');

// Login a user and generate JWT token
const token = loginUser('exampleUser', 'examplePassword');

// Define a protected route
app.get('/protected-route', authenticateToken, protectedRouteHandler);
```

## API

### `registerUser(username: string, password: string): void`

Registers a new user with the provided username and password.

### `loginUser(username: string, password: string): string | null`

Authenticates the user with the provided username and password. Returns a JWT token upon successful authentication,
or `null` if authentication fails.

### `authenticateToken(req: Request, res: Response, next: NextFunction): void`

Middleware function to authenticate JWT tokens for protected routes. It verifies the token included in
the `Authorization` header of the incoming request.

### `protectedRouteHandler(req: Request, res: Response): void`

Example handler for a protected route. It demonstrates how to use the `authenticateToken` middleware to protect routes
and access the authenticated user's information via `req.user`.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
