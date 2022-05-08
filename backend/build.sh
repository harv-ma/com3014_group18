cd service-registry && ./mvnw package -DskipTests
cd ..
cd cloud-gateway && ./mvnw package -DskipTests
cd ..
cd user-service && ./mvnw package
cd ..
cd job-service && ./mvnw package
cd ..
cd application-service && ./mvnw package