FROM python:3.10-slim

WORKDIR /app

COPY . /app

EXPOSE 443

CMD ["python3", "-m", "http.server", "443"]
