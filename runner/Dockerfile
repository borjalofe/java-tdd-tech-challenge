FROM eclipse-temurin:17-jdk-jammy
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates maven \
  && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
  && apt-get install -y --no-install-recommends nodejs \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY runner/package.json runner/package-lock.json* ./runner/
RUN cd runner && npm install --omit=dev
COPY runner/server.mjs ./runner/
COPY kata ./kata
WORKDIR /app/kata
# Maven wrapper installed at build if present
WORKDIR /app/runner
ENV KATA_DIR=/app/kata
ENV PORT=8089
EXPOSE 8089
CMD ["node", "server.mjs"]
