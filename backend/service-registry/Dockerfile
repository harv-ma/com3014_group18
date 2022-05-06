FROM --platform=linux/amd64 openjdk:17-alpine

WORKDIR /app

COPY pom.xml .
RUN mvn verify clean --fail-never

COPY . .

RUN mvn clean install -DskipTests

FROM --platform=linux/amd64 openjdk:17-alpine AS run
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8761

ENTRYPOINT ["java", "-jar", "app.jar"]