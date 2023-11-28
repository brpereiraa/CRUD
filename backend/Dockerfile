# Stage 1: Build stage
FROM maven:3.9.5-eclipse-temurin-17-alpine AS build

WORKDIR /app

# Copy only the POM file to take advantage of Docker cache
COPY pom.xml .

# Download the dependencies
RUN mvn dependency:go-offline

# Copy the source code
COPY src ./src

# Build the application
RUN mvn package

# Stage 2: Application stage
FROM maven:3.9.5-eclipse-temurin-17-alpine

WORKDIR /app

# Copy the built artifacts from the build stage
COPY --from=build /app/target /app/target

# Your other Dockerfile instructions...
CMD ["./mvnw", "spring-boot:run"]
