# Backend + frontend combined
FROM node:18

WORKDIR /app

COPY backend ./backend
COPY frontend ./frontend

# Install backend deps
WORKDIR /app/backend
RUN npm install

# Install frontend deps + build
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Start backend
WORKDIR /app/backend
CMD ["node", "server.js"]