FROM --platform=linux/amd64 openjdk:17-alpine

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 9000

ENTRYPOINT ["java", "-jar", "app.jar"]