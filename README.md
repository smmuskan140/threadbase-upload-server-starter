# Threadbase Upload Server

Express API for authenticated avatar uploads using Multer disk storage.

## Setup

```bash
cp .env.example .env
npm install
npm start
```

Demo login: `ada` / `password`. Obtain a JWT from `POST /auth/login`, then send it as `Authorization: Bearer <token>` to `POST /api/upload` with multipart form-data field `avatar` containing an image.

Uploads are served from `/uploads/<filename>`. Images only (JPEG, PNG, WebP, GIF) are accepted, with a 5 MB limit.
