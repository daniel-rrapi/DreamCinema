FROM maven:3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests


FROM openjdk:17-jdk-slim
COPY --from=build /target/dreamcinema-backend-0.0.1-SNAPSHOT.jar dreamcinema-backend-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "dreamcinema-backend-0.0.1-SNAPSHOT.jar"]